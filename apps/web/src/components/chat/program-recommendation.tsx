import { Link } from "@tanstack/react-router";
import { Badge } from "@momkiddis/ui/components/badge";
import { Button } from "@momkiddis/ui/components/button";
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
				<p className="text-base leading-relaxed text-foreground">
					{reason}
				</p>
			)}
			{programs.map((program) => (
				<div
					key={program.slug}
					className="overflow-hidden rounded-xl border border-border bg-card"
				>
					<div className="space-y-2.5 p-3">
						<div>
							<div className="flex items-start gap-2">
								<div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
									{(() => {
										const Icon = ICON_MAP[program.icon] ?? MessageCircle;
										return <Icon className="size-4 text-primary" />;
									})()}
								</div>
								<div className="min-w-0">
									<div className="flex flex-wrap items-center gap-1.5">
										<h4 className="text-sm font-semibold text-foreground">
											{program.shortTitle}
										</h4>
										<Badge
											variant="outline"
											className="border-primary/20 text-[10px] text-primary"
										>
											{PROGRAM_CATEGORY_LABELS[program.category]}
										</Badge>
									</div>
									<p className="text-[11px] text-muted-foreground">
										{program.priceLabel} · {program.duration}
									</p>
								</div>
							</div>
						</div>

						<div className="flex gap-2">
							<Link
								to="/programs/$slug"
								params={{ slug: program.slug }}
								className="flex-1"
							>
								<Button
									size="sm"
									variant="outline"
									className="w-full gap-1 text-xs"
								>
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
			))}
		</div>
	);
}
