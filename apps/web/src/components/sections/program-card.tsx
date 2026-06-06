import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PROGRAM_CATEGORY_LABELS, type Program } from "@/lib/programs-content";

interface ProgramCardProps {
	program: Program;
	index?: number;
	variant?: "full" | "compact";
}

export default function ProgramCard({
	program,
	variant = "full",
}: ProgramCardProps) {
	if (variant === "compact") {
		return (
			<article className="w-[18.5rem] shrink-0 overflow-hidden rounded-[1.65rem] border border-slate-200/70 bg-white shadow-[0_12px_32px_rgba(30,64,107,0.09)]">
				<Link
					to="/programs/$slug"
					params={{ slug: program.slug }}
					aria-label={`Buka course ${program.shortTitle}`}
					className="block transition-transform duration-150 active:scale-[0.99]"
				>
					<img
						src={program.landscapeImage}
						alt={`Banner ${program.shortTitle}`}
						className="aspect-[1.65/1] w-full object-cover"
						loading="lazy"
					/>
					<div className="p-4">
						<div className="flex items-center justify-between gap-2">
							<span className="rounded-full bg-[#eef6ff] px-2.5 py-1 text-[0.58rem] font-extrabold text-[#17689e]">
								{PROGRAM_CATEGORY_LABELS[program.category]}
							</span>
							<span className="text-[0.6rem] font-bold text-slate-400">
								Online
							</span>
						</div>
						<h3 className="mt-2.5 text-lg font-black tracking-[-0.025em] text-slate-900">
							{program.shortTitle}
						</h3>
						<p className="mt-1 line-clamp-2 text-xs font-medium leading-relaxed text-slate-500">
							{program.subtitle}
						</p>
						<div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
							<span className="text-[0.68rem] font-extrabold text-slate-600">
								{program.priceLabel}
							</span>
							<span className="inline-flex items-center gap-1 text-[0.68rem] font-extrabold text-orange-600">
								Detail
								<ArrowRight className="size-3.5" />
							</span>
						</div>
					</div>
				</Link>
			</article>
		);
	}

	return (
		<article className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(30,64,107,0.09)]">
			<Link
				to="/programs/$slug"
				params={{ slug: program.slug }}
				aria-label={`Buka course ${program.shortTitle}`}
				className="group block overflow-hidden bg-[#d9edff]"
			>
				<img
					src={program.landscapeImage}
					alt={`Banner ${program.shortTitle}`}
					className="aspect-[1.55/1] w-full object-cover transition-transform duration-200 group-active:scale-[0.99]"
					loading="lazy"
				/>
			</Link>

			<div className="p-4.5">
				<div className="flex items-center justify-between gap-3">
					<span className="rounded-full bg-primary/10 px-3 py-1 text-[0.65rem] font-extrabold text-primary">
						{PROGRAM_CATEGORY_LABELS[program.category]}
					</span>
					<span className="text-[0.65rem] font-bold text-slate-400">
						{program.level}
					</span>
				</div>

				<h3 className="mt-3 text-xl font-black tracking-[-0.025em] text-slate-900">
					{program.shortTitle}
				</h3>
				<p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-500">
					{program.subtitle}
				</p>

				<ul className="mt-4 grid gap-2">
					{program.outcomes.slice(0, 2).map((outcome) => (
						<li
							key={outcome}
							className="flex items-start gap-2 text-xs font-semibold leading-relaxed text-slate-600"
						>
							<CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#f97316]" />
							{outcome}
						</li>
					))}
				</ul>

				<div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
					<div>
						<p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate-400">
							Biaya course
						</p>
						<p className="mt-0.5 text-sm font-extrabold text-slate-800">
							{program.priceLabel}
						</p>
					</div>
					<Link
						to="/programs/$slug"
						params={{ slug: program.slug }}
						className="inline-flex h-11 items-center gap-2 rounded-full bg-[#f97316] px-5 text-xs font-extrabold text-white shadow-[0_7px_18px_rgba(249,115,22,0.25)] transition-transform duration-150 active:scale-[0.97]"
					>
						Lihat Detail
						<ArrowRight className="size-4" />
					</Link>
				</div>
			</div>
		</article>
	);
}
