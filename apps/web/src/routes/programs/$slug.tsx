import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@momkiddis/ui/components/accordion";
import {
	ArrowLeft,
	Award,
	CalendarDays,
	CheckCircle2,
	Clock3,
	Gift,
	MessageCircle,
	Monitor,
	Users,
} from "lucide-react";
import {
	CLASS_SCHEDULES,
	PROGRAM_BONUSES,
	PROGRAM_CATEGORY_LABELS,
	PROGRAMS,
} from "@/lib/programs-content";
import { getWhatsAppUrl } from "@/lib/site-config";

export const Route = createFileRoute("/programs/$slug")({
	component: ProgramDetailPage,
	loader: ({ params }) => {
		const program = PROGRAMS[params.slug as keyof typeof PROGRAMS];
		if (!program) throw notFound();
		return { program };
	},
});

function ProgramDetailPage() {
	const { program } = Route.useLoaderData();
	const waUrl = getWhatsAppUrl(program.shortTitle);

	return (
		<div className="pb-8">
			<section className="px-4 pt-4">
				<Link
					to="/programs"
					className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[0.66rem] font-extrabold text-slate-600 shadow-sm transition-transform duration-150 active:scale-[0.97]"
				>
					<ArrowLeft className="size-4" />
					Kembali ke course
				</Link>

				<div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_16px_38px_rgba(30,64,107,0.1)]">
					<div className="relative">
						<img
							src={program.landscapeImage}
							alt={`Banner ${program.shortTitle}`}
							className="aspect-[1.5/1] w-full object-cover"
						/>
						{program.isBestSeller && (
							<span className="absolute left-4 top-4 rounded-full bg-[#f97316] px-3 py-1.5 text-[0.6rem] font-extrabold text-white shadow-lg">
								Course favorit
							</span>
						)}
					</div>

					<div className="p-5">
						<span className="inline-flex rounded-full bg-[#eef6ff] px-3 py-1 text-[0.61rem] font-extrabold text-[#17689e]">
							{PROGRAM_CATEGORY_LABELS[program.category]}
						</span>
						<h1 className="mt-3 text-[1.65rem] font-black leading-tight tracking-[-0.04em] text-slate-900">
							{program.title}
						</h1>
						<p className="mt-2 text-xs font-medium leading-relaxed text-slate-500">
							{program.subtitle}
						</p>

						<div className="mt-5 grid grid-cols-3 gap-2">
							<DetailStat icon={Monitor} label="Format" value="Online" />
							<DetailStat icon={Clock3} label="Durasi" value="Fleksibel" />
							<DetailStat icon={Users} label="Level" value={program.level} />
						</div>

						<div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
							<div>
								<p className="text-[0.59rem] font-bold uppercase tracking-wide text-slate-400">
									Informasi biaya
								</p>
								<p className="mt-0.5 text-base font-black text-slate-900">
									{program.priceLabel}
								</p>
							</div>
							<a
								href={waUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 text-[0.7rem] font-extrabold text-white shadow-[0_8px_20px_rgba(37,211,102,0.22)] transition-transform duration-150 active:scale-[0.97]"
							>
								<MessageCircle className="size-4" />
								Daftar via WA
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="px-4 pt-7">
				<SectionHeading
					eyebrow="Isi pembelajaran"
					title="Materi yang akan dipelajari"
				/>
				<Accordion
					multiple
					className="mt-4 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white"
				>
					{program.curriculum.map((item, index) => (
						<AccordionItem
							key={item.title}
							value={`item-${index}`}
							className="border-slate-100 px-4 last:border-b-0"
						>
							<AccordionTrigger className="py-4 text-left text-xs font-extrabold text-slate-800 hover:no-underline">
								<span className="mr-3 flex size-7 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[0.61rem] font-black text-orange-600">
									{String(index + 1).padStart(2, "0")}
								</span>
								{item.title}
							</AccordionTrigger>
							<AccordionContent>
								<p className="pb-4 pl-10 text-xs font-medium leading-relaxed text-slate-500">
									{item.description}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>

			<section className="px-4 pt-7">
				<SectionHeading eyebrow="Hasil belajar" title="Yang akan kamu dapat" />
				<ul className="mt-4 grid gap-2.5">
					{program.outcomes.map((outcome) => (
						<li
							key={outcome}
							className="flex items-start gap-3 rounded-[1.25rem] border border-slate-200/70 bg-white p-4"
						>
							<span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-orange-50">
								<CheckCircle2 className="size-4 text-orange-600" />
							</span>
							<span className="pt-1 text-xs font-semibold leading-relaxed text-slate-600">
								{outcome}
							</span>
						</li>
					))}
				</ul>
			</section>

			<section className="px-4 pt-7">
				<SectionHeading eyebrow="Waktu belajar" title="Pilihan jadwal kelas" />
				<div className="mt-4 overflow-hidden rounded-[1.5rem] bg-[#123d73] p-4 text-white">
					<div className="flex items-center gap-2">
						<CalendarDays className="size-5 text-sky-200" />
						<p className="text-xs font-extrabold">Jadwal tersedia</p>
					</div>
					<ul className="mt-3 grid gap-2">
						{CLASS_SCHEDULES.map((schedule) => (
							<li
								key={schedule.session}
								className="flex items-center justify-between gap-3 rounded-2xl bg-white/10 px-3.5 py-3"
							>
								<span className="text-[0.68rem] font-extrabold">
									{schedule.session}
								</span>
								<span className="text-[0.62rem] font-medium text-white/65">
									{schedule.time}
								</span>
							</li>
						))}
					</ul>
					<p className="mt-3 text-[0.61rem] font-medium leading-relaxed text-white/60">
						Ketersediaan jadwal dikonfirmasi kembali bersama admin.
					</p>
				</div>
			</section>

			<section className="grid gap-3 px-4 pt-7">
				<InfoList
					icon={Gift}
					title="Bonus course"
					items={[...PROGRAM_BONUSES]}
				/>
				<InfoList
					icon={Award}
					title="Course ini cocok untuk"
					items={[...program.targetPeserta]}
				/>
			</section>

			<section className="px-4 pt-7">
				<div className="rounded-[1.75rem] bg-[#ecfbf1] p-5 text-center">
					<h2 className="text-lg font-black tracking-[-0.025em] text-slate-900">
						Siap mulai belajar?
					</h2>
					<p className="mx-auto mt-1 max-w-xs text-xs font-medium leading-relaxed text-slate-500">
						Hubungi admin untuk mengecek jadwal, biaya, dan proses pendaftaran.
					</p>
					<a
						href={waUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-4 inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-[0.7rem] font-extrabold text-white transition-transform duration-150 active:scale-[0.97]"
					>
						<MessageCircle className="size-4" />
						Hubungi Admin
					</a>
				</div>
			</section>
		</div>
	);
}

function DetailStat({
	icon: Icon,
	label,
	value,
}: {
	icon: typeof Monitor;
	label: string;
	value: string;
}) {
	return (
		<div className="min-w-0 rounded-[1.1rem] bg-slate-50 p-3 text-center">
			<Icon className="mx-auto size-4 text-[#17689e]" />
			<p className="mt-1.5 text-[0.55rem] font-bold uppercase tracking-wide text-slate-400">
				{label}
			</p>
			<p className="mt-0.5 truncate text-[0.62rem] font-extrabold text-slate-700">
				{value}
			</p>
		</div>
	);
}

function SectionHeading({
	eyebrow,
	title,
}: {
	eyebrow: string;
	title: string;
}) {
	return (
		<div>
			<p className="text-[0.61rem] font-extrabold uppercase tracking-[0.14em] text-orange-500">
				{eyebrow}
			</p>
			<h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-900">
				{title}
			</h2>
		</div>
	);
}

function InfoList({
	icon: Icon,
	title,
	items,
}: {
	icon: typeof Gift;
	title: string;
	items: string[];
}) {
	return (
		<div className="rounded-[1.5rem] border border-slate-200/70 bg-white p-4">
			<div className="flex items-center gap-2">
				<span className="flex size-9 items-center justify-center rounded-xl bg-[#eef6ff]">
					<Icon className="size-4 text-[#17689e]" />
				</span>
				<h3 className="text-sm font-black text-slate-800">{title}</h3>
			</div>
			<ul className="mt-3 grid gap-2">
				{items.map((item) => (
					<li
						key={item}
						className="flex items-start gap-2 text-xs font-medium leading-relaxed text-slate-500"
					>
						<span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500" />
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
