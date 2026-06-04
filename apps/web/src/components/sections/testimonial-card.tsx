import { StarIcon } from "lucide-react";

interface TestimonialCardProps {
	authorName: string;
	authorRole: string;
	content: string;
	rating?: number;
	index?: number;
}

export default function TestimonialCard({
	authorName,
	authorRole,
	content,
	rating = 5,
	index = 0,
}: TestimonialCardProps) {
	return (
		<div
			className="flex flex-col rounded-xl border border-border bg-card p-5"
			style={{ animationDelay: `${index * 70}ms` }}
		>
			{/* Stars */}
			<div className="flex gap-0.5">
				{Array.from({ length: rating }).map((_, i) => (
					<StarIcon
						key={i}
						className="size-3.5 fill-accent text-accent"
					/>
				))}
			</div>

			{/* Quote */}
			<blockquote className="mt-3 flex-1 text-xs leading-relaxed text-foreground">
				"{content}"
			</blockquote>

			{/* Author */}
			<div className="mt-4 flex items-center gap-2.5 border-t border-border pt-3">
				<div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
					{authorName.charAt(0)}
				</div>
				<div>
					<p className="text-xs font-semibold text-foreground">{authorName}</p>
					<p className="text-xs text-muted-foreground">{authorRole}</p>
				</div>
			</div>
		</div>
	);
}
