import { Link } from "@tanstack/react-router";
import { Badge } from "@momkiddis/ui/components/badge";
import {
	Card,
	CardContent,
	CardTitle,
} from "@momkiddis/ui/components/card";
import { cn } from "@momkiddis/ui/lib/utils";
import {
	GraduationCap,
	BookOpen,
	Calculator,
	FileText,
	Globe,
	MessageCircle,
	PenLine,
	ArrowRight,
	Star,
	UserRound,
} from "lucide-react";
import {
	PROGRAM_CATEGORY_LABELS,
	type Program,
} from "@/lib/programs-content";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
	GraduationCap: ({ className }) => <GraduationCap className={className} />,
	BookOpen: ({ className }) => <BookOpen className={className} />,
	Calculator: ({ className }) => <Calculator className={className} />,
	FileText: ({ className }) => <FileText className={className} />,
	Globe: ({ className }) => <Globe className={className} />,
	MessageCircle: ({ className }) => <MessageCircle className={className} />,
	PenLine: ({ className }) => <PenLine className={className} />,
	UserRound: ({ className }) => <UserRound className={className} />,
};

const UNIFIED_COLOR = {
	border: "border-border",
	icon: "bg-primary text-primary-foreground",
	iconText: "text-primary",
	badge: "bg-primary text-primary-foreground",
};

const COLOR_MAP: Record<string, typeof UNIFIED_COLOR> = {
	blue: UNIFIED_COLOR,
	green: UNIFIED_COLOR,
	purple: UNIFIED_COLOR,
	orange: UNIFIED_COLOR,
	pink: UNIFIED_COLOR,
};

interface ProgramCardProps {
	program: Program;
	index?: number;
}

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
	const Icon = ICON_MAP[program.icon] ?? ICON_MAP.BookOpen;
	const colors = COLOR_MAP[program.color] ?? COLOR_MAP.blue;
	const primaryPackage = program.pricePackages[0] ?? {
		label: "Paket",
		price: program.priceLabel,
	};

	return (
		<Link
			to="/programs/$slug"
			params={{ slug: program.slug }}
			aria-label={`Lihat detail ${program.shortTitle}`}
			className="group mx-auto block h-full w-full max-w-[25.5rem] transition-all duration-200 hover:-translate-y-1 active:scale-[0.99]"
			style={{ animationDelay: `${index * 60}ms` }}
		>
			<Card
				size="sm"
				className={cn(
					"relative h-full !gap-0 overflow-hidden rounded-[1.6rem] border bg-primary/10 !py-0 text-card-foreground shadow-sm transition-all duration-200 group-hover:shadow-xl",
					colors.border,
				)}
			>
				<div className="relative aspect-[4/5] overflow-hidden bg-secondary leading-none">
					{program.image ? (
						<img
							src={program.image}
							alt={`Poster program ${program.shortTitle}`}
							className="block size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
							loading="lazy"
						/>
					) : (
						<div className="flex size-full items-center justify-center bg-secondary">
							<div
								className={cn(
									"flex size-16 items-center justify-center rounded-2xl shadow-sm",
									colors.icon,
								)}
							>
								<Icon className="size-8" />
							</div>
						</div>
					)}
				</div>

				<CardContent className="relative -mt-7 flex flex-1 flex-col gap-4 rounded-t-[1.75rem] bg-card px-5 pb-6 pt-5 shadow-[0_-18px_36px_rgba(15,23,42,0.10)]">
					<div className="flex flex-wrap items-center gap-2">
						<Badge
							className={cn(
								"h-6 rounded-full px-3 text-[10px] font-bold uppercase",
								colors.badge,
							)}
						>
							{PROGRAM_CATEGORY_LABELS[program.category]}
						</Badge>
						{program.isBestSeller ? (
							<Badge
								variant="outline"
								className="h-6 rounded-full border-destructive/20 bg-destructive/10 px-3 text-[10px] font-bold text-destructive"
							>
								<Star className="fill-current" />
								Best Seller
							</Badge>
						) : (
							<Badge
								variant="outline"
								className="h-6 rounded-full border-border bg-background px-3 text-[10px] font-semibold text-muted-foreground"
							>
								{program.level}
							</Badge>
						)}
					</div>

					<div>
						<CardTitle className="text-[1.45rem] font-extrabold leading-tight tracking-normal text-foreground">
							{program.shortTitle}
						</CardTitle>
						<p className="mt-1.5 line-clamp-2 text-sm font-medium leading-relaxed text-muted-foreground">
							{program.subtitle}
						</p>
					</div>

					<div>
						<p className="text-sm font-bold text-muted-foreground">
							Paket Online {program.duration}
						</p>
						<div className="mt-2 flex items-end gap-2">
							<span className="rounded-md bg-destructive/10 px-1.5 py-1 text-sm font-extrabold leading-none text-destructive">
								Mulai
							</span>
							<div className="min-w-0">
								<p className="text-[1.7rem] font-extrabold leading-none tracking-normal text-foreground">
									{primaryPackage.price}
								</p>
								<p className="mt-1 text-sm font-bold text-muted-foreground">
									{primaryPackage.label}
								</p>
							</div>
						</div>
					</div>

					<span className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-5 text-base font-extrabold text-accent-foreground shadow-sm transition-transform duration-150 group-active:scale-[0.97]">
						Beli Paket
					</span>

					<span
						className={cn(
							"mt-auto inline-flex items-center justify-center gap-2 text-base font-extrabold",
							colors.iconText,
						)}
					>
						Lihat Detail
						<ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
					</span>
				</CardContent>
			</Card>
		</Link>
	);
}
