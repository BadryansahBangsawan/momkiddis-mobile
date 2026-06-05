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
import { SlideButton } from "@/components/ui/slide-button";
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
						{/* Banner image */}
						<div className="relative h-72 w-full overflow-hidden rounded-2xl">
							<img
								src={program.image}
								alt={program.shortTitle}
								className="h-full w-full object-contain"
							/>
							</div>

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
					<div className="hidden space-y-4 lg:sticky lg:top-24 lg:block lg:self-start">
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

							<SlideButton url={waUrl} label="Daftar Sekarang" className="w-full" />
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
