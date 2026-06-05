import { createFileRoute, notFound } from "@tanstack/react-router";
import { PROGRAMS } from "@/lib/programs-content";
import PageHero from "@/components/sections/page-hero";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@momkiddis/ui/components/accordion";
import { Badge } from "@momkiddis/ui/components/badge";
import { getWhatsAppUrl } from "@/lib/site-config";
import {
	CheckCircle2,
	Users,
	Monitor,
	Clock,
	GraduationCap,
	BookOpen,
	Calculator,
	Globe,
	PenLine,
	Star,
} from "lucide-react";

export const Route = createFileRoute("/programs/$slug")({
	component: ProgramDetailPage,
	loader: ({ params }) => {
		const program = PROGRAMS[params.slug as keyof typeof PROGRAMS];
		if (!program) throw notFound();
		return { program };
	},
});

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
	GraduationCap: ({ className }) => <GraduationCap className={className} />,
	BookOpen: ({ className }) => <BookOpen className={className} />,
	Calculator: ({ className }) => <Calculator className={className} />,
	Globe: ({ className }) => <Globe className={className} />,
	PenLine: ({ className }) => <PenLine className={className} />,
};

const COLOR_MAP: Record<string, { bg: string; icon: string; ring: string }> = {
	blue: { bg: "bg-blue-50", icon: "text-blue-600", ring: "ring-blue-200" },
	green: { bg: "bg-emerald-50", icon: "text-emerald-600", ring: "ring-emerald-200" },
	purple: { bg: "bg-violet-50", icon: "text-violet-600", ring: "ring-violet-200" },
	orange: { bg: "bg-orange-50", icon: "text-orange-600", ring: "ring-orange-200" },
	pink: { bg: "bg-rose-50", icon: "text-rose-600", ring: "ring-rose-200" },
};

const MODE_LABEL: Record<string, string> = {
	hybrid: "Online & Offline",
	online: "Online via Zoom",
	offline: "Offline",
};

function ProgramDetailPage() {
	const { program } = Route.useLoaderData();
	const Icon = ICON_MAP[program.icon] ?? ICON_MAP.BookOpen;
	const colors = COLOR_MAP[program.color] ?? COLOR_MAP.blue;
	const waUrl = getWhatsAppUrl(program.shortTitle);

	return (
		<>
			<PageHero
				title={program.title}
				subtitle={program.subtitle}
				breadcrumbs={[
					{ label: "Program", to: "/programs" },
					{ label: program.shortTitle },
				]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-3">
					{/* ── Main column ──────────────────────────────────── */}
					<div className="space-y-10 lg:col-span-2">
						{/* Header card */}
						<div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
							<div className={`shrink-0 rounded-xl p-3 ${colors.bg}`}>
								<Icon className={`size-7 ${colors.icon}`} />
							</div>
							<div className="min-w-0 flex-1">
								<div className="flex flex-wrap gap-2">
									<Badge
										variant="outline"
										className={
											program.category === "ibu"
												? "border-blue-200 text-blue-700"
												: "border-emerald-200 text-emerald-700"
										}
									>
										{program.category === "ibu" ? "Untuk Ibu" : "Untuk Anak"}
									</Badge>
									{program.isBestSeller && (
										<Badge variant="outline" className="inline-flex items-center gap-1 border-amber-200 text-amber-700">
											<Star className="size-3 fill-current" />
											Best Seller
										</Badge>
									)}
									{program.ageRange && (
										<Badge variant="outline" className="border-border text-muted-foreground">
											Usia {program.ageRange}
										</Badge>
									)}
								</div>
								<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
									{program.description}
								</p>
							</div>
						</div>

						{/* Curriculum accordion */}
						<section>
							<h2 className="mb-4 text-base font-semibold text-foreground">
								Kurikulum & Materi
							</h2>
							<Accordion multiple className="rounded-xl border border-border divide-y divide-border overflow-hidden">
								{program.curriculum.map((item, i) => (
									<AccordionItem key={item.title} value={`item-${i}`} className="px-4">
										<AccordionTrigger className="py-3.5 text-sm font-medium hover:no-underline">
											<span className="mr-3 text-xs font-bold text-muted-foreground tabular-nums">
												{String(i + 1).padStart(2, "0")}
											</span>
											{item.title}
										</AccordionTrigger>
										<AccordionContent>
											<p className="pb-3.5 pl-7 text-sm leading-relaxed text-muted-foreground">
												{item.description}
											</p>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</section>

						{/* Outcomes */}
						<section>
							<h2 className="mb-4 text-base font-semibold text-foreground">
								Yang Akan Kamu Capai
							</h2>
							<ul className="grid gap-2.5 sm:grid-cols-2">
								{program.outcomes.map((outcome) => (
									<li
										key={outcome}
										className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3"
									>
										<CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
										<span className="text-sm leading-snug text-foreground">
											{outcome}
										</span>
									</li>
								))}
							</ul>
						</section>
					</div>

					{/* ── Sidebar ──────────────────────────────────────── */}
					<div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
						{/* Meta card */}
						<div className="rounded-xl border border-border bg-card p-5 space-y-4">
							<h3 className="text-sm font-semibold text-foreground">
								Detail Program
							</h3>
							<ul className="space-y-3">
								<li className="flex items-center gap-3">
									<div className="flex size-8 items-center justify-center rounded-lg bg-muted">
										<Monitor className="size-4 text-muted-foreground" />
									</div>
									<div>
										<p className="text-xs text-muted-foreground">Format</p>
										<p className="text-sm font-medium text-foreground">
											{MODE_LABEL[program.mode]}
										</p>
									</div>
								</li>
								<li className="flex items-center gap-3">
									<div className="flex size-8 items-center justify-center rounded-lg bg-muted">
										<Users className="size-4 text-muted-foreground" />
									</div>
									<div>
										<p className="text-xs text-muted-foreground">Kuota Kelas</p>
										<p className="text-sm font-medium text-foreground">
											Maks. {program.maxStudents} peserta
										</p>
									</div>
								</li>
								<li className="flex items-center gap-3">
									<div className="flex size-8 items-center justify-center rounded-lg bg-muted">
										<Clock className="size-4 text-muted-foreground" />
									</div>
									<div>
										<p className="text-xs text-muted-foreground">Jadwal</p>
										<p className="text-sm font-medium text-foreground">
											{program.duration}
										</p>
									</div>
								</li>
							</ul>

							<div className="border-t border-border pt-4">
								<p className="text-xs text-muted-foreground">Biaya</p>
								<p className="mt-0.5 text-base font-semibold text-foreground">
									{program.priceLabel}
								</p>
								<p className="text-xs text-muted-foreground">
									Info lengkap via WhatsApp Admin
								</p>
							</div>

							<a
								href={waUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-opacity duration-150 active:scale-[0.97] hover:opacity-90"
							>
								<svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
								</svg>
								Daftar Sekarang
							</a>
						</div>

						{/* Target peserta */}
						<div className="rounded-xl border border-border bg-card p-5">
							<h3 className="mb-3 text-sm font-semibold text-foreground">
								Program Ini Untuk Siapa?
							</h3>
							<ul className="space-y-2">
								{program.targetPeserta.map((target) => (
									<li key={target} className="flex items-start gap-2">
										<span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
										<span className="text-xs leading-snug text-muted-foreground">
											{target}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
