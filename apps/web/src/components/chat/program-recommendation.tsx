import { Link } from "@tanstack/react-router";
import { Badge } from "@momkiddis/ui/components/badge";
import { Button } from "@momkiddis/ui/components/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PROGRAMS } from "@/lib/programs-content";
import { getWhatsAppUrl } from "@/lib/site-config";

interface ProgramRecommendationProps {
	slugs: string[];
	reason: string;
}

export function ProgramRecommendation({
	slugs,
	reason,
}: ProgramRecommendationProps) {
	const slugArray = Array.isArray(slugs)
		? slugs
		: typeof slugs === "string"
			? (slugs as string).split(",").map((s) => s.trim())
			: [];
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
					{/* Image */}
					<div className="relative h-28 w-full overflow-hidden">
						<img
							src={program.image}
							alt={program.shortTitle}
							className="h-full w-full object-contain"
						/>
					</div>

					{/* Content */}
					<div className="space-y-2.5 p-3">
						<div>
							<div className="flex items-center gap-1.5">
								<h4 className="text-sm font-semibold text-foreground">
									{program.shortTitle}
								</h4>
								<Badge
									variant="outline"
									className={`text-[10px] ${
										program.category === "ibu"
											? "border-blue-200 text-blue-700"
											: "border-emerald-200 text-emerald-700"
									}`}
								>
									{program.category === "ibu"
										? "Untuk Ibu"
										: "Untuk Anak"}
								</Badge>
							</div>
							{program.ageRange && (
								<p className="text-[11px] text-muted-foreground">
									Usia {program.ageRange}
								</p>
							)}
						</div>

						{/* Actions */}
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
