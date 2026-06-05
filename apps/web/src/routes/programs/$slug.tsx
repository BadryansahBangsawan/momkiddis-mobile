import { createFileRoute, notFound } from "@tanstack/react-router";
import {
	CLASS_SCHEDULES,
	PROGRAM_BONUSES,
	PROGRAM_CATEGORY_LABELS,
	PROGRAMS,
} from "@/lib/programs-content";
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
	Award,
	CalendarDays,
	CheckCircle2,
	Clock,
	FileText,
	Gift,
	Globe,
	GraduationCap,
	MessageCircle,
	Monitor,
	PenLine,
	Star,
	UserRound,
	Users,
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
	FileText: ({ className }) => <FileText className={className} />,
	Globe: ({ className }) => <Globe className={className} />,
	GraduationCap: ({ className }) => <GraduationCap className={className} />,
	MessageCircle: ({ className }) => <MessageCircle className={className} />,
	PenLine: ({ className }) => <PenLine className={className} />,
	UserRound: ({ className }) => <UserRound className={className} />,
};

const COLOR_MAP: Record<string, { bg: string; icon: string; ring: string }> = {
	blue: { bg: "bg-teal-50", icon: "text-teal-700", ring: "ring-teal-200" },
	green: {
		bg: "bg-emerald-50",
		icon: "text-emerald-700",
		ring: "ring-emerald-200",
	},
	purple: {
		bg: "bg-violet-50",
		icon: "text-violet-700",
		ring: "ring-violet-200",
	},
	orange: {
		bg: "bg-orange-50",
		icon: "text-orange-700",
		ring: "ring-orange-200",
	},
	pink: { bg: "bg-rose-50", icon: "text-rose-700", ring: "ring-rose-200" },
};

function ProgramDetailPage() {
	const { program } = Route.useLoaderData();
	const Icon = ICON_MAP[program.icon] ?? ICON_MAP.MessageCircle;
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
					<div className="flex flex-col gap-10 lg:col-span-2">
						<div className="rounded-2xl border border-border bg-card p-5">
							<div className="flex items-start gap-4">
								<div
									className={`shrink-0 rounded-2xl p-3 ring-1 ${colors.bg} ${colors.ring}`}
								>
									<Icon className={`size-8 ${colors.icon}`} />
								</div>
								<div className="min-w-0 flex-1">
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline" className="border-primary/20 text-primary">
											{PROGRAM_CATEGORY_LABELS[program.category]}
										</Badge>
										<Badge variant="outline" className="border-border text-muted-foreground">
											{program.level}
										</Badge>
										{program.isBestSeller && (
											<Badge
												variant="outline"
												className="inline-flex items-center gap-1 border-amber-200 text-amber-700"
											>
												<Star className="size-3 fill-current" />
												Best Seller
											</Badge>
										)}
									</div>
									<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
										{program.description}
									</p>
								</div>
							</div>
						</div>

						<section>
							<h2 className="mb-4 text-base font-semibold text-foreground">
								Materi Kelas
							</h2>
							<Accordion
								multiple
								className="overflow-hidden rounded-xl border border-border divide-y divide-border"
							>
								{program.curriculum.map((item, i) => (
									<AccordionItem
										key={item.title}
										value={`item-${i}`}
										className="px-4"
									>
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

						<section>
							<h2 className="mb-4 text-base font-semibold text-foreground">
								Paket Harga
							</h2>
							<div className="overflow-hidden rounded-xl border border-border bg-card">
								<table className="w-full border-collapse text-sm">
									<tbody>
										{program.pricePackages.map((pricePackage) => (
											<tr
												key={pricePackage.label}
												className="border-b border-border last:border-b-0"
											>
												<td className="border-r border-border px-4 py-3 text-muted-foreground">
													{pricePackage.label}
												</td>
												<td className="px-4 py-3 text-right font-semibold text-foreground">
													{pricePackage.price}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							{program.note && (
								<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
									{program.note}
								</p>
							)}
						</section>

						<section>
							<h2 className="mb-4 text-base font-semibold text-foreground">
								Yang Akan Kamu Dapat
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

					<div className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
						<div className="rounded-xl border border-border bg-card p-5">
							<h3 className="text-sm font-semibold text-foreground">
								Detail Kelas
							</h3>
							<ul className="mt-4 flex flex-col gap-3">
								<li className="flex items-center gap-3">
									<div className="flex size-8 items-center justify-center rounded-lg bg-muted">
										<Monitor className="size-4 text-muted-foreground" />
									</div>
									<div>
										<p className="text-xs text-muted-foreground">Format</p>
										<p className="text-sm font-medium text-foreground">
											{program.formatLabel}
										</p>
									</div>
								</li>
								<li className="flex items-center gap-3">
									<div className="flex size-8 items-center justify-center rounded-lg bg-muted">
										<Clock className="size-4 text-muted-foreground" />
									</div>
									<div>
										<p className="text-xs text-muted-foreground">Durasi</p>
										<p className="text-sm font-medium text-foreground">
											{program.duration}
										</p>
									</div>
								</li>
								<li className="flex items-center gap-3">
									<div className="flex size-8 items-center justify-center rounded-lg bg-muted">
										<Users className="size-4 text-muted-foreground" />
									</div>
									<div>
										<p className="text-xs text-muted-foreground">Kelas</p>
										<p className="text-sm font-medium text-foreground">
											{program.maxStudents
												? `1 on 1, maks. ${program.maxStudents} peserta`
												: "Online group class"}
										</p>
									</div>
								</li>
							</ul>

							<div className="mt-4 border-t border-border pt-4">
								<p className="text-xs text-muted-foreground">Biaya Mulai</p>
								<p className="mt-0.5 text-base font-semibold text-foreground">
									{program.priceLabel}
								</p>
							</div>

							<SlideButton
								url={waUrl}
								label="Daftar Sekarang"
								className="mt-4 w-full"
							/>
						</div>

						<div className="rounded-xl border border-border bg-card p-5">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
								<Gift className="size-4 text-primary" />
								Bonus Free
							</h3>
							<ul className="flex flex-col gap-2">
								{PROGRAM_BONUSES.map((bonus) => (
									<li key={bonus} className="flex items-start gap-2">
										<Award className="mt-0.5 size-3.5 shrink-0 text-primary" />
										<span className="text-xs leading-snug text-muted-foreground">
											{bonus}
										</span>
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-xl border border-border bg-card p-5">
							<h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
								<CalendarDays className="size-4 text-primary" />
								Jadwal Kelas
							</h3>
							<ul className="flex flex-col gap-2">
								{CLASS_SCHEDULES.map((schedule) => (
									<li
										key={schedule.session}
										className="flex items-center justify-between gap-3 rounded-lg bg-muted/40 px-3 py-2"
									>
										<span className="text-xs font-medium text-foreground">
											{schedule.session}
										</span>
										<span className="text-right text-xs text-muted-foreground">
											{schedule.time}
										</span>
									</li>
								))}
							</ul>
							<p className="mt-3 text-xs leading-relaxed text-muted-foreground">
								Jadwal fleksibel untuk mahasiswi, pekerja, dan ibu rumah
								tangga.
							</p>
						</div>

						<div className="rounded-xl border border-border bg-card p-5">
							<h3 className="mb-3 text-sm font-semibold text-foreground">
								Cocok Untuk
							</h3>
							<ul className="flex flex-col gap-2">
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
