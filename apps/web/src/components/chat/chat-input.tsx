import { useRef, type KeyboardEvent } from "react";
import { Button } from "@momkiddis/ui/components/button";
import { Send } from "lucide-react";

interface ChatInputProps {
	onSend: (message: string) => void;
	disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
	const inputRef = useRef<HTMLTextAreaElement>(null);

	const handleSend = () => {
		const value = inputRef.current?.value.trim();
		if (!value || disabled) return;
		onSend(value);
		if (inputRef.current) inputRef.current.value = "";
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	return (
		<div className="flex items-end gap-2 border-t border-slate-100 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
			<textarea
				ref={inputRef}
				placeholder="Tulis kebutuhan belajarmu..."
				rows={1}
				disabled={disabled}
				onKeyDown={handleKeyDown}
				className="max-h-28 min-h-11 flex-1 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-xs font-medium text-slate-700 placeholder:text-slate-400 focus:border-[#17689e] focus:outline-none disabled:opacity-50"
			/>
			<Button
				size="icon"
				onClick={handleSend}
				disabled={disabled}
				className="size-11 shrink-0 rounded-2xl bg-[#17689e] text-white hover:bg-[#17689e] active:scale-[0.95]"
			>
				<Send className="size-4" />
			</Button>
		</div>
	);
}
