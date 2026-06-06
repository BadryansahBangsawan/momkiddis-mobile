import { Link } from "@tanstack/react-router";
import {
	ArrowRight,
	FileText,
	Globe,
	GraduationCap,
	MessageCircle,
	UserRound,
} from "lucide-react";
import { PROGRAM_CATEGORY_LABELS, PROGRAMS } from "@/lib/programs-content";
import { getWhatsAppUrl } from "@/lib/site-config";

interface ProgramRecommendationProps {
	slugs: string[];
	reason: string;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
	FileText,
	Globe,
	GraduationCap,
	MessageCircle,
	UserRound,
};

function parseSlugs(raw: string[] | string | unknown): string[] {
	if (Array.isArray(raw)) return raw.map(String);
	if (typeof raw !== "string") return [];

	const s = raw.trim();

	// JSON array: ["slug1","slug2"]
	try {
		const parsed = JSON.parse(s);
		if (Array.isArray(parsed)) return parsed.map(String);
	} catch {}

	// Python/bracket list: ['slug1', 'slug2'] or ["slug1","slug2"]
	if (s.startsWith("[") && s.endsWith("]")) {
		return s
			.slice(1, -1)
			.split(",")
			.map((p) => p.trim().replace(/^['"]|['"]$/g, ""))
			.filter(Boolean);
	}

	// Comma-separated fallback
	return s.split(",").map((p) => p.trim().replace(/^['"]|['"]$/g, "")).filter(Boolean);
}

export function ProgramRecommendation({
	slugs,
	reason,
}: ProgramRecommendationProps) {
	const slugArray = parseSlugs(slugs);
	const programs = slugArray
		.map((s) => PROGRAMS[s])
		.filter(Boolean);

	if (!programs.length) return null;

	return (
		<div className="space-y-2">
			{reason && (
				<p className="text-xs font-medium leading-relaxed text-slate-600">
					{reason}
				</p>
			)}
			{programs.map((program) => (
				<div
					key={program.slug}
					className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
				>
					{/* Cover image */}
					{program.landscapeImage ? (
						<div className="relative h-24 w-full overflow-hidden bg-primary/5">
							<img
								src={program.landscapeImage}
								alt={program.shortTitle}
								className="h-full w-full object-cover"
							/>
							{program.isBestSeller && (
								<span className="absolute left-2 top-2 rounded-full bg-[#f97316] px-2 py-0.5 text-[9px] font-extrabold text-white">
									Best Seller
								</span>
							)}
						</div>
					) : (
						<div className="flex h-16 items-center justify-center bg-primary/5">
							{(() => {
								const Icon = ICON_MAP[program.icon] ?? MessageCircle;
								return <Icon className="size-6 text-primary/30" />;
							})()}
						</div>
					)}

					<div className="space-y-2.5 p-3">
						<div className="flex items-start gap-2">
							<div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#eef6ff]">
								{(() => {
									const Icon = ICON_MAP[program.icon] ?? MessageCircle;
									return <Icon className="size-3.5 text-[#17689e]" />;
								})()}
							</div>
							<div className="min-w-0">
								<div>
									<h4 className="text-xs font-black text-slate-800">
										{program.shortTitle}
									</h4>
									<p className="mt-0.5 text-[9px] font-bold text-[#17689e]">
										{PROGRAM_CATEGORY_LABELS[program.category]}
									</p>
								</div>
								<p className="mt-1 line-clamp-2 text-[10px] font-medium leading-relaxed text-slate-500">
									{program.subtitle}
								</p>
							</div>
						</div>

						<div className="flex gap-2">
							<Link
								to="/programs/$slug"
								params={{ slug: program.slug }}
								className="inline-flex h-9 flex-1 items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white text-[10px] font-extrabold text-slate-600 transition-transform active:scale-[0.97]"
							>
								Lihat Course
								<ArrowRight className="size-3" />
							</Link>
							<a
								href={getWhatsAppUrl(program.shortTitle)}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-9 flex-1 items-center justify-center gap-1 rounded-xl bg-[#25D366] text-[10px] font-extrabold text-white transition-transform active:scale-[0.97]"
							>
								<MessageCircle className="size-3" />
								Daftar via WA
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
