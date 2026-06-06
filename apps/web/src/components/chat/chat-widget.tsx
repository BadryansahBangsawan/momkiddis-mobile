import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, X } from "lucide-react";
import {
	ChatMessages,
	type ChatMessage,
	type ToolCall,
} from "./chat-messages";
import { ChatInput } from "./chat-input";

let messageCounter = 0;
function nextId() {
	return `msg-${++messageCounter}`;
}

export function ChatWidget() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const abortRef = useRef<AbortController | null>(null);

	useEffect(() => {
		const openChat = () => setIsOpen(true);
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsOpen(false);
		};

		window.addEventListener("momkiddis:open-chat", openChat);
		window.addEventListener("keydown", closeOnEscape);

		return () => {
			window.removeEventListener("momkiddis:open-chat", openChat);
			window.removeEventListener("keydown", closeOnEscape);
		};
	}, []);

	const sendMessage = useCallback(
		async (text: string) => {
			const userMsg: ChatMessage = {
				id: nextId(),
				role: "user",
				content: text,
			};

			const updatedMessages = [...messages, userMsg];
			setMessages(updatedMessages);
			setIsLoading(true);

			// Prepare history for API
			const apiMessages = updatedMessages.map((m) => ({
				role: m.role,
				content: m.content,
			}));

			const assistantId = nextId();
			let assistantContent = "";
			const toolCalls: ToolCall[] = [];

			try {
				abortRef.current = new AbortController();
				const res = await fetch("/api/chat", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ messages: apiMessages }),
					signal: abortRef.current.signal,
				});

				if (!res.ok) {
					throw new Error(`HTTP ${res.status}`);
				}

				const reader = res.body?.getReader();
				if (!reader) throw new Error("No response body");

				const decoder = new TextDecoder();
				let buffer = "";

				while (true) {
					const { done, value } = await reader.read();
					if (done) break;

					buffer += decoder.decode(value, { stream: true });
					const lines = buffer.split("\n");
					buffer = lines.pop() ?? "";

					for (const line of lines) {
						if (!line.startsWith("data: ")) continue;
						const jsonStr = line.slice(6);
						if (!jsonStr) continue;

						try {
							const event = JSON.parse(jsonStr) as {
								type: string;
								content?: string;
								name?: string;
								input?: { slugs: string[]; reason: string };
							};

							if (
								event.type === "text" &&
								event.content
							) {
								assistantContent += event.content;
								setMessages([
									...updatedMessages,
									{
										id: assistantId,
										role: "assistant",
										content: assistantContent,
										toolCalls: toolCalls.length
											? [...toolCalls]
											: undefined,
									},
								]);
							} else if (
								event.type === "tool_use" &&
								event.name === "recommend_program" &&
								event.input
							) {
								toolCalls.push({
									name: event.name,
									input: event.input,
								});
								setMessages([
									...updatedMessages,
									{
										id: assistantId,
										role: "assistant",
										content: assistantContent,
										toolCalls: [...toolCalls],
									},
								]);
							} else if (event.type === "error") {
								assistantContent =
									"Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi admin via WhatsApp.";
								setMessages([
									...updatedMessages,
									{
										id: assistantId,
										role: "assistant",
										content: assistantContent,
									},
								]);
							}
						} catch {
							// skip malformed JSON
						}
					}
				}

				// Ensure final state is set
				if (assistantContent || toolCalls.length) {
					setMessages([
						...updatedMessages,
						{
							id: assistantId,
							role: "assistant",
							content: assistantContent,
							toolCalls: toolCalls.length
								? [...toolCalls]
								: undefined,
						},
					]);
				}
			} catch (err) {
				if (
					err instanceof Error &&
					err.name === "AbortError"
				)
					return;
				setMessages([
					...updatedMessages,
					{
						id: assistantId,
						role: "assistant",
						content:
							"Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi admin via WhatsApp.",
					},
				]);
			} finally {
				setIsLoading(false);
				abortRef.current = null;
			}
		},
		[messages],
	);

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.button
							type="button"
							aria-label="Tutup Chat AI"
							className="fixed inset-0 z-50 bg-slate-950/35 backdrop-blur-[2px]"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.18, ease: "easeOut" }}
							onClick={() => setIsOpen(false)}
						/>
						<motion.section
							role="dialog"
							aria-modal="true"
							aria-label="Chat AI Momkiddis"
							initial={{ opacity: 0, y: 36, scale: 0.98 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 28, scale: 0.98 }}
							transition={{
								duration: 0.24,
								ease: [0.23, 1, 0.32, 1],
							}}
							className="fixed inset-x-0 bottom-0 z-[51] mx-auto flex h-[min(82svh,44rem)] w-full max-w-[28rem] flex-col overflow-hidden rounded-t-[2rem] border border-slate-200 bg-white shadow-[0_-18px_60px_rgba(15,23,42,0.2)]"
						>
							<div className="flex justify-center pb-1 pt-2.5">
								<span className="h-1 w-10 rounded-full bg-slate-200" />
							</div>
							<div className="flex items-center justify-between border-b border-slate-100 px-4 pb-3 pt-1">
								<div className="flex items-center gap-3">
									<div className="relative flex size-11 items-center justify-center rounded-[1.15rem] bg-[#eef6ff] text-[#17689e]">
										<Bot className="size-5" />
										<span className="absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-white bg-emerald-400" />
									</div>
									<div>
										<div className="flex items-center gap-1.5">
											<p className="text-sm font-black text-slate-900">
												Chat AI Momkiddis
											</p>
											<Sparkles className="size-3.5 text-orange-500" />
										</div>
										<p className="text-[0.6rem] font-semibold text-slate-400">
											Asisten pemilihan course
										</p>
									</div>
								</div>
								<button
									type="button"
									onClick={() => setIsOpen(false)}
									aria-label="Tutup Chat AI"
									className="flex size-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-transform duration-150 active:scale-[0.95]"
								>
									<X className="size-4" />
								</button>
							</div>

							<ChatMessages messages={messages} isLoading={isLoading} />

							<ChatInput onSend={sendMessage} disabled={isLoading} />
						</motion.section>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
