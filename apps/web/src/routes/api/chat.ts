import { createFileRoute } from "@tanstack/react-router";
import { buildSystemPrompt, chatToolsOpenAI } from "@/lib/chat-system-prompt";
import { env } from "@momkiddis/env/server";

interface ChatMessage {
	role: "user" | "assistant";
	content: string;
}

interface ChatRequest {
	messages: ChatMessage[];
}

const NVIDIA_URL = "https://integrate.api.nvidia.com/v1/chat/completions";

async function handleChat({ request }: { request: Request }) {
	if (request.method !== "POST") {
		return new Response("Method not allowed", { status: 405 });
	}

	let body: ChatRequest;
	try {
		body = (await request.json()) as ChatRequest;
	} catch {
		return new Response("Invalid JSON", { status: 400 });
	}

	if (!body.messages?.length) {
		return new Response("Messages required", { status: 400 });
	}

	const apiKey = (env.NVIDIA_API_KEY as string | undefined) ?? process.env.NVIDIA_API_KEY;
	if (!apiKey) {
		return new Response("AI service not configured", { status: 503 });
	}

	const encoder = new TextEncoder();
	const stream = new ReadableStream({
		async start(controller) {
			try {
				const res = await fetch(NVIDIA_URL, {
					method: "POST",
					headers: {
						Authorization: `Bearer ${apiKey}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						model: "meta/llama-3.1-8b-instruct",
						max_tokens: 16384,
						stream: true,
						messages: [
							{ role: "system", content: buildSystemPrompt() },
							...body.messages.map((m) => ({
								role: m.role,
								content: m.content,
							})),
						],
						tools: chatToolsOpenAI,
							tool_choice: "auto",
					}),
				});

				if (!res.ok) {
					const errText = await res.text();
					console.error("[chat] NVIDIA error:", res.status, errText);
					throw new Error(`NVIDIA ${res.status}: ${errText}`);
				}

				const reader = res.body?.getReader();
				if (!reader) throw new Error("No response body");

				const decoder = new TextDecoder();
				let buffer = "";
				let currentToolName = "";
				let currentToolJson = "";

				while (true) {
					const { done, value } = await reader.read();
					if (done) break;

					buffer += decoder.decode(value, { stream: true });
					const lines = buffer.split("\n");
					buffer = lines.pop() ?? "";

					for (const line of lines) {
						if (!line.startsWith("data: ")) continue;
						const data = line.slice(6).trim();
						if (data === "[DONE]") {
							// Flush any pending tool call
							if (currentToolName && currentToolJson) {
								try {
									const parsed = JSON.parse(currentToolJson);
									controller.enqueue(
										encoder.encode(
											`data: ${JSON.stringify({ type: "tool_use", name: currentToolName, input: parsed })}\n\n`,
										),
									);
								} catch {
									// invalid JSON
								}
							}
							controller.enqueue(
								encoder.encode(
									`data: ${JSON.stringify({ type: "done" })}\n\n`,
								),
							);
							continue;
						}

						try {
							const chunk = JSON.parse(data);
							const delta = chunk.choices?.[0]?.delta;
							if (!delta) continue;

							// Text content
							if (delta.content) {
								controller.enqueue(
									encoder.encode(
										`data: ${JSON.stringify({ type: "text", content: delta.content })}\n\n`,
									),
								);
							}

							// Tool calls
							if (delta.tool_calls) {
								for (const tc of delta.tool_calls) {
									if (tc.function?.name) {
										// New tool call starting — flush previous if any
										if (currentToolName && currentToolJson) {
											try {
												const parsed = JSON.parse(currentToolJson);
												controller.enqueue(
													encoder.encode(
														`data: ${JSON.stringify({ type: "tool_use", name: currentToolName, input: parsed })}\n\n`,
													),
												);
											} catch {
												// invalid JSON
											}
										}
										currentToolName = tc.function.name;
										currentToolJson = tc.function.arguments ?? "";
									} else if (tc.function?.arguments) {
										currentToolJson += tc.function.arguments;
									}
								}
							}

							// Finish reason
							if (chunk.choices?.[0]?.finish_reason === "tool_calls") {
								if (currentToolName && currentToolJson) {
									try {
										const parsed = JSON.parse(currentToolJson);
										controller.enqueue(
											encoder.encode(
												`data: ${JSON.stringify({ type: "tool_use", name: currentToolName, input: parsed })}\n\n`,
											),
										);
									} catch {
										// invalid JSON
									}
									currentToolName = "";
									currentToolJson = "";
								}
							}
						} catch {
							// skip malformed chunk
						}
					}
				}
			} catch (err) {
				const message =
					err instanceof Error ? err.message : "Unknown error";
				controller.enqueue(
					encoder.encode(
						`data: ${JSON.stringify({ type: "error", content: message })}\n\n`,
					),
				);
			} finally {
				controller.close();
			}
		},
	});

	return new Response(stream, {
		headers: {
			"Content-Type": "text/event-stream",
			"Cache-Control": "no-cache",
			Connection: "keep-alive",
		},
	});
}

export const Route = createFileRoute("/api/chat")({
	server: {
		handlers: {
			POST: handleChat,
		},
	},
});
