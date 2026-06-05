import { Link } from "@tanstack/react-router";
import { Badge } from "@momkiddis/ui/components/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
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

const COLOR_MAP: Record<
	string,
	{
		border: string;
		soft: string;
		icon: string;
		iconText: string;
		badge: string;
		rule: string;
	}
> = {
	blue: {
		border: "border-teal-200",
		soft: "bg-teal-50",
		icon: "bg-teal-600 text-white",
		iconText: "text-teal-700",
		badge: "bg-teal-700 text-white",
		rule: "border-teal-200",
	},
	green: {
		border: "border-emerald-200",
		soft: "bg-emerald-50",
		icon: "bg-emerald-600 text-white",
		iconText: "text-emerald-700",
		badge: "bg-emerald-700 text-white",
		rule: "border-emerald-200",
	},
	purple: {
		border: "border-violet-200",
		soft: "bg-violet-50",
		icon: "bg-violet-600 text-white",
		iconText: "text-violet-700",
		badge: "bg-violet-700 text-white",
		rule: "border-violet-200",
	},
	orange: {
		border: "border-orange-200",
		soft: "bg-orange-50",
		icon: "bg-orange-500 text-white",
		iconText: "text-orange-700",
		badge: "bg-orange-600 text-white",
		rule: "border-orange-200",
	},
	pink: {
		border: "border-rose-200",
		soft: "bg-rose-50",
		icon: "bg-rose-500 text-white",
		iconText: "text-rose-700",
		badge: "bg-rose-600 text-white",
		rule: "border-rose-200",
	},
};

interface ProgramCardProps {
	program: Program;
	index?: number;
}

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
	const Icon = ICON_MAP[program.icon] ?? ICON_MAP.BookOpen;
	const colors = COLOR_MAP[program.color] ?? COLOR_MAP.blue;
	const materials = program.curriculum.slice(0, 5);
	const target = program.targetPeserta.slice(0, 3).join(", ");
	const priceRows = program.pricePackages;

	return (
		<Link
			to="/programs/$slug"
			params={{ slug: program.slug }}
			aria-label={`Lihat detail ${program.shortTitle}`}
			className="group mx-auto block h-full w-full max-w-[19rem] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
			style={{ animationDelay: `${index * 60}ms` }}
		>
			<Card
				size="sm"
				className={cn(
					"h-full rounded-lg border bg-[#fffdf7] py-0 text-card-foreground shadow-sm transition-all duration-200 group-hover:shadow-md",
					colors.border,
				)}
			>
				<CardHeader className="relative gap-2 px-4 pb-0 pt-4">
					<div className="flex items-start pr-14">
						<div className="min-w-0">
							<CardTitle className="min-h-[2.25rem] text-[15px] font-extrabold uppercase leading-tight text-slate-900">
								{program.shortTitle}
							</CardTitle>
							<p className="mt-1 min-h-[1.75rem] text-[11px] font-medium leading-snug text-slate-700 line-clamp-2">
								{program.subtitle}
							</p>
						</div>
					</div>

					<div
						className={cn(
							"absolute right-4 top-5 flex size-12 items-center justify-center rounded-full shadow-sm ring-4 ring-white",
							colors.icon,
						)}
					>
						<Icon className="size-6" />
					</div>
				</CardHeader>

				<CardContent className="flex flex-1 flex-col gap-3 px-4 pb-3 pt-3">
					<div className="flex flex-wrap items-center gap-1.5">
						<Badge
							className={cn(
								"h-6 rounded-md px-2 text-[10px] font-bold uppercase",
								colors.badge,
							)}
						>
							Materi
						</Badge>
						<Badge
							variant="outline"
							className={cn(
								"h-6 rounded-md bg-white px-2 text-[10px] font-semibold",
								colors.border,
								colors.iconText,
							)}
						>
							{PROGRAM_CATEGORY_LABELS[program.category]}
						</Badge>
						{program.isBestSeller && (
							<Badge
								variant="outline"
								className="h-6 rounded-md border-amber-200 bg-amber-50 px-2 text-[10px] font-semibold text-amber-700"
							>
								<Star className="size-3 fill-current" />
								Best Seller
							</Badge>
						)}
					</div>

					<ul className="flex flex-col gap-1.5 text-[11px] font-medium leading-snug text-slate-800">
						{materials.map((item) => (
							<li key={item.title} className="flex gap-2">
								<span className={cn("mt-1 size-1.5 shrink-0 rounded-full", colors.icon)} />
								<span className="line-clamp-1">{item.title}</span>
							</li>
						))}
					</ul>

					<div>
						<p className="mb-1 text-[11px] font-extrabold uppercase leading-none text-slate-800">
							Paket Harga
						</p>
						<div
							className={cn(
								"overflow-hidden rounded-md border bg-white",
								colors.rule,
							)}
						>
							<table className="w-full border-collapse text-[11px] leading-tight text-slate-800">
								<tbody>
									{priceRows.map((row) => (
										<tr
											key={row.label}
											className={cn("border-b last:border-b-0", colors.rule)}
										>
											<td
												className={cn(
													"w-[38%] border-r px-2 py-1.5 font-medium",
													colors.rule,
												)}
											>
												{row.label}
											</td>
											<td className="px-2 py-1.5 text-right font-bold">
												{row.price}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					<p className="text-[10.5px] font-medium leading-snug text-slate-700">
						<span className="font-extrabold text-slate-900">Cocok untuk:</span>{" "}
						{target}
					</p>
				</CardContent>

				<CardFooter
					className={cn(
						"justify-between border-t px-4 py-3",
						colors.rule,
						colors.soft,
					)}
				>
					<span className="text-[10px] font-semibold text-slate-700">
						{program.level}
					</span>
					<span
						className={cn(
							"inline-flex items-center gap-1 text-[11px] font-bold",
							colors.iconText,
						)}
					>
						Lihat Detail
						<ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
					</span>
				</CardFooter>
			</Card>
		</Link>
	);
}
