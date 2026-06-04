import { AwardIcon } from "lucide-react";

interface AlumniCardProps {
	name: string;
	batchLabel: string;
	shortStory: string;
	photo?: string;
	index?: number;
}

export default function AlumniCard({
	name,
	batchLabel,
	shortStory,
	photo,
	index = 0,
}: AlumniCardProps) {
	return (
		<div
			className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center"
			style={{ animationDelay: `${index * 70}ms` }}
		>
			{/* Avatar */}
			<div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
				{photo ? (
					<img
						src={photo}
						alt={name}
						className="size-14 rounded-full object-cover"
					/>
				) : (
					name.charAt(0)
				)}
			</div>

			{/* Info */}
			<div className="mt-3">
				<p className="text-sm font-semibold text-foreground">{name}</p>
				<div className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground">
					<AwardIcon className="size-3 text-accent" />
					<span>{batchLabel}</span>
				</div>
			</div>

			{/* Story */}
			<p className="mt-3 text-xs leading-relaxed text-muted-foreground">
				{shortStory}
			</p>
		</div>
	);
}
