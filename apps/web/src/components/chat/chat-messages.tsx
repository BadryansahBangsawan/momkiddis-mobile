import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { ProgramRecommendation } from "./program-recommendation";
import { Link } from "@tanstack/react-router";
import { Button } from "@momkiddis/ui/components/button";
import { Badge } from "@momkiddis/ui/components/badge";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PROGRAMS } from "@/lib/programs-content";
import { getWhatsAppUrl } from "@/lib/site-config";

const ACTIVE_SLUGS = ["microteaching", "calistung", "bimbel-sd"];

function ProgramCard({ slug }: { slug: string }) {
	const program = PROGRAMS[slug];
	if (!program) return null;
	return (
		<div className="overflow-hidden rounded-xl border border-border bg-card">
			<div className="relative h-24 w-full overflow-hidden">
				<img
					src={program.image}
					alt={program.shortTitle}
					className="h-full w-full object-contain"
				/>
			</div>
			<div className="space-y-2 p-3">
				<div className="flex items-center gap-1.5">
					<h4 className="text-sm font-semibold text-foreground">
						{program.shortTitle}
					</h4>
					<Badge
						variant="outline"
						className={`text-[10px] ${
							program.category === "ibu"
								? "border-blue-200 text-blue-700"
								: "border-emerald-200 text-emerald-700"
						}`}
					>
						{program.category === "ibu" ? "Untuk Ibu" : "Untuk Anak"}
					</Badge>
				</div>
				{program.ageRange && (
					<p className="text-[11px] text-muted-foreground">
						Usia {program.ageRange}
					</p>
				)}
				<div className="flex gap-2">
					<Link
						to="/programs/$slug"
						params={{ slug: program.slug }}
						className="flex-1"
					>
						<Button size="sm" variant="outline" className="w-full gap-1 text-xs">
							Lihat Program
							<ArrowRight className="size-3" />
						</Button>
					</Link>
					<a
						href={getWhatsAppUrl(program.shortTitle)}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1"
					>
						<Button
							size="sm"
							className="w-full gap-1 bg-[#25D366] text-xs text-white hover:bg-[#25D366]/90"
						>
							<MessageCircle className="size-3" />
							Daftar via WA
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}

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
			<div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
				<Bot className="size-3.5 text-primary" />
			</div>
			<div className="rounded-xl rounded-tl-none bg-muted px-3.5 py-2.5">
				<div className="flex gap-1">
					{[0, 1, 2].map((i) => (
						<motion.span
							key={i}
							className="size-1.5 rounded-full bg-muted-foreground/50"
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
				className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
					isUser ? "bg-primary" : "bg-primary/10"
				}`}
			>
				{isUser ? (
					<User className="size-3.5 text-primary-foreground" />
				) : (
					<Bot className="size-3.5 text-primary" />
				)}
			</div>

			{/* Bubble */}
			<div className={`max-w-[80%] space-y-2 ${isUser ? "items-end" : ""}`}>
				{message.content && (
					<div
						className={`rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
							isUser
								? "rounded-tr-none bg-primary text-primary-foreground"
								: "rounded-tl-none bg-muted text-foreground"
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
			className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
		>
			{/* Welcome message */}
			{messages.length === 0 && (
				<div className="flex items-start gap-2.5">
					<div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
						<Bot className="size-3.5 text-primary" />
					</div>
					<div className="rounded-xl rounded-tl-none bg-muted px-3.5 py-2.5 text-sm leading-relaxed text-foreground">
						Halo! Saya asisten virtual Momkiddy. Ada yang bisa saya
						bantu? Silakan tanyakan tentang program kami.
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
