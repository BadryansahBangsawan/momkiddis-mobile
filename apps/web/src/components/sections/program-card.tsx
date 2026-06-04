import { Link } from "@tanstack/react-router";
import { Badge } from "@momkiddis/ui/components/badge";
import {
	GraduationCap,
	BookOpen,
	Calculator,
	Globe,
	PenLine,
	ArrowRight,
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
	{ bg: string; icon: string; badge: string }
> = {
	blue: {
		bg: "bg-blue-50",
		icon: "text-blue-600",
		badge: "bg-blue-100 text-blue-700",
	},
	green: {
		bg: "bg-emerald-50",
		icon: "text-emerald-600",
		badge: "bg-emerald-100 text-emerald-700",
	},
	purple: {
		bg: "bg-violet-50",
		icon: "text-violet-600",
		badge: "bg-violet-100 text-violet-700",
	},
	orange: {
		bg: "bg-orange-50",
		icon: "text-orange-600",
		badge: "bg-orange-100 text-orange-700",
	},
	pink: {
		bg: "bg-rose-50",
		icon: "text-rose-600",
		badge: "bg-rose-100 text-rose-700",
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
			className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-md active:scale-[0.98]"
			style={{ animationDelay: `${index * 60}ms` }}
		>
			{/* Header */}
			<div className="flex items-start justify-between gap-3">
				<div className={`rounded-lg p-2.5 ${colors.bg}`}>
					<Icon className={`size-5 ${colors.icon}`} />
				</div>
				<div className="flex flex-wrap gap-1.5">
					{program.isBestSeller && (
						<span
							className={`rounded-full px-2 py-0.5 text-xs font-semibold ${colors.badge}`}
						>
							⭐ Best Seller
						</span>
					)}
					<Badge
						variant="outline"
						className={`rounded-full text-xs ${program.category === "ibu" ? "border-blue-200 text-blue-700" : "border-emerald-200 text-emerald-700"}`}
					>
						{program.category === "ibu" ? "Untuk Ibu" : "Untuk Anak"}
					</Badge>
				</div>
			</div>

			{/* Content */}
			<div className="mt-3 flex-1">
				<h3 className="text-sm font-semibold leading-snug text-foreground">
					{program.shortTitle}
				</h3>
				{program.ageRange && (
					<p className="mt-0.5 text-xs font-medium text-muted-foreground">
						Usia {program.ageRange}
					</p>
				)}
				<p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
					{program.description}
				</p>
			</div>

			{/* Footer */}
			<div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
				Lihat Detail
				<ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
			</div>
		</Link>
	);
}
