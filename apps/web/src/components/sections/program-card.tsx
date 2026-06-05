import { Link } from "@tanstack/react-router";
import { Badge } from "@momkiddis/ui/components/badge";
import {
	GraduationCap,
	BookOpen,
	Calculator,
	Globe,
	PenLine,
	ArrowRight,
	Star,
} from "lucide-react";
import type { Program } from "@/lib/programs-content";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
	GraduationCap: ({ className }) => <GraduationCap className={className} />,
	BookOpen: ({ className }) => <BookOpen className={className} />,
	Calculator: ({ className }) => <Calculator className={className} />,
	Globe: ({ className }) => <Globe className={className} />,
	PenLine: ({ className }) => <PenLine className={className} />,
};

const COLOR_MAP: Record<
	string,
	{ bg: string; icon: string; badge: string; overlay: string }
> = {
	blue: {
		bg: "bg-blue-50",
		icon: "text-blue-600",
		badge: "bg-blue-100 text-blue-700",
		overlay: "from-blue-900/60",
	},
	green: {
		bg: "bg-emerald-50",
		icon: "text-emerald-600",
		badge: "bg-emerald-100 text-emerald-700",
		overlay: "from-emerald-900/60",
	},
	purple: {
		bg: "bg-violet-50",
		icon: "text-violet-600",
		badge: "bg-violet-100 text-violet-700",
		overlay: "from-violet-900/60",
	},
	orange: {
		bg: "bg-orange-50",
		icon: "text-orange-600",
		badge: "bg-orange-100 text-orange-700",
		overlay: "from-orange-900/60",
	},
	pink: {
		bg: "bg-rose-50",
		icon: "text-rose-600",
		badge: "bg-rose-100 text-rose-700",
		overlay: "from-rose-900/60",
	},
};

interface ProgramCardProps {
	program: Program;
	index?: number;
}

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
	const Icon = ICON_MAP[program.icon] ?? ICON_MAP.BookOpen;
	const colors = COLOR_MAP[program.color] ?? COLOR_MAP.blue;

	return (
		<Link
			to="/programs/$slug"
			params={{ slug: program.slug }}
			className="group mx-auto flex w-full max-w-[18rem] flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg active:scale-[0.98] sm:rounded-2xl"
			style={{ animationDelay: `${index * 60}ms` }}
		>
			{/* Image banner */}
			<div className="relative aspect-square w-full overflow-hidden bg-blue-50">
				<img
					src={program.image}
					alt={program.shortTitle}
					className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					loading="lazy"
				/>
				{/* Badges on top of image */}
				<div className="absolute left-2 top-2 flex flex-wrap gap-1 sm:left-3 sm:top-3 sm:gap-1.5">
					{program.isBestSeller && (
						<span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-semibold leading-none text-amber-900 shadow sm:px-2.5 sm:text-xs">
							<Star className="size-2.5 fill-current sm:size-3" />
							Best Seller
						</span>
					)}
					<Badge
						variant="outline"
						className={`h-5 rounded-full border-0 px-2 text-[10px] leading-none backdrop-blur-sm sm:h-6 sm:text-xs ${
							program.category === "ibu"
								? "bg-blue-500/80 text-white"
								: "bg-emerald-500/80 text-white"
						}`}
					>
						{program.category === "ibu" ? "Untuk Ibu" : "Untuk Anak"}
					</Badge>
				</div>

				{/* Icon pill bottom-left */}
				<div className={`absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full px-2 py-1 sm:bottom-3 sm:left-3 sm:gap-2 sm:px-2.5 ${colors.bg} shadow-sm`}>
					<Icon className={`size-3 ${colors.icon} sm:size-3.5`} />
					{program.ageRange && (
						<span className="text-[10px] font-medium text-foreground/70 sm:text-xs">
							Usia {program.ageRange}
						</span>
					)}
				</div>
			</div>

			{/* Content */}
			<div className="flex flex-1 flex-col p-3 sm:p-4">
				<h3 className="text-xs font-semibold leading-snug text-foreground sm:text-sm">
					{program.shortTitle}
				</h3>
				<p className="mt-1 flex-1 text-[11px] leading-relaxed text-muted-foreground line-clamp-2 sm:mt-1.5 sm:text-xs sm:line-clamp-3">
					{program.description}
				</p>

				{/* Footer */}
				<div className="mt-2 flex items-center justify-between sm:mt-3">
					<span className="text-[10px] text-muted-foreground sm:text-xs">{program.duration}</span>
					<div className="hidden items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:flex">
						Lihat Detail
						<ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
					</div>
				</div>
			</div>
		</Link>
	);
}
