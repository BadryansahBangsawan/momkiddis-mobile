import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { ProgramRecommendation } from "./program-recommendation";

export interface ToolCall {
	name: string;
	input: { slugs: string[]; reason: string };
}

export interface ChatMessage {
	id: string;
	role: "user" | "assistant";
	content: string;
	toolCalls?: ToolCall[];
}

interface ChatMessagesProps {
	messages: ChatMessage[];
	isLoading: boolean;
}

function TypingIndicator() {
	return (
		<div className="flex items-start gap-2.5">
			<div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#eef6ff]">
				<Bot className="size-4 text-[#17689e]" />
			</div>
			<div className="rounded-2xl rounded-tl-md bg-slate-100 px-4 py-3">
				<div className="flex gap-1">
					{[0, 1, 2].map((i) => (
						<motion.span
							key={i}
							className="size-1.5 rounded-full bg-slate-400"
							animate={{ y: [0, -4, 0] }}
							transition={{
								duration: 0.6,
								repeat: Number.POSITIVE_INFINITY,
								delay: i * 0.15,
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function MessageBubble({ message }: { message: ChatMessage }) {
	const isUser = message.role === "user";

	return (
		<motion.div
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2 }}
			className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}
		>
			{/* Avatar */}
			<div
				className={`flex size-8 shrink-0 items-center justify-center rounded-xl ${
					isUser ? "bg-[#f97316]" : "bg-[#eef6ff]"
				}`}
			>
				{isUser ? (
					<User className="size-4 text-white" />
				) : (
					<Bot className="size-4 text-[#17689e]" />
				)}
			</div>

			{/* Bubble */}
			<div className={`max-w-[80%] space-y-2 ${isUser ? "items-end" : ""}`}>
				{message.content && (
					<div
						className={`rounded-2xl px-3.5 py-2.5 text-xs font-medium leading-relaxed ${
							isUser
								? "rounded-tr-md bg-[#f97316] text-white"
								: "rounded-tl-md bg-slate-100 text-slate-700"
						}`}
					>
						{message.content}
					</div>
				)}

				{/* Tool calls → Program cards */}
				{message.toolCalls?.map((tool, i) => (
					<ProgramRecommendation
						key={i}
						slugs={tool.input.slugs}
						reason={tool.input.reason}
					/>
				))}
			</div>
		</motion.div>
	);
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [messages, isLoading]);

	return (
		<div
			ref={scrollRef}
			className="flex-1 space-y-4 overflow-y-auto bg-[#f8fafc] px-4 py-4"
		>
			{/* Welcome message */}
			{messages.length === 0 && (
				<div className="flex items-start gap-2.5">
					<div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#eef6ff]">
						<Bot className="size-4 text-[#17689e]" />
					</div>
					<div className="max-w-[82%] rounded-2xl rounded-tl-md bg-white px-3.5 py-3 text-xs font-medium leading-relaxed text-slate-700 shadow-sm">
						Halo! Ceritakan siapa yang ingin belajar dan targetnya. Saya akan
						membantu memilih course Momkiddis yang sesuai.
					</div>
				</div>
			)}

			{messages.map((msg) => (
				<MessageBubble key={msg.id} message={msg} />
			))}

			{isLoading && <TypingIndicator />}
		</div>
	);
}
