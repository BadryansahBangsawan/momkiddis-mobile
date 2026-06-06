import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Search } from "lucide-react";
import ProgramCard from "@/components/sections/program-card";
import PageHero from "@/components/sections/page-hero";
import {
	PROGRAM_CATEGORY_LABELS,
	PROGRAM_LIST,
	type ProgramCategory,
} from "@/lib/programs-content";
import { getWhatsAppUrl } from "@/lib/site-config";

export const Route = createFileRoute("/programs/")({
	component: ProgramsPage,
});

type Filter = "semua" | ProgramCategory;

const FILTERS: { id: Filter; label: string }[] = [
	{ id: "semua", label: "Semua" },
	...Object.entries(PROGRAM_CATEGORY_LABELS).map(([id, label]) => ({
		id: id as ProgramCategory,
		label,
	})),
];

function ProgramsPage() {
	const [active, setActive] = useState<Filter>("semua");

	const displayed =
		active === "semua"
			? PROGRAM_LIST
			: PROGRAM_LIST.filter((program) => program.category === active);

	return (
		<>
			<PageHero
				title="Temukan course terbaikmu"
				subtitle="Pilih program sesuai usia, kebutuhan belajar, dan target yang ingin dicapai."
				breadcrumbs={[{ label: "Course" }]}
			/>

			<section className="px-4 pb-4 pt-2">
				<div className="flex items-center gap-3 rounded-[1.35rem] border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
					<Search className="size-4 shrink-0 text-slate-400" />
					<div>
						<p className="text-xs font-extrabold text-slate-800">
							{displayed.length} course tersedia
						</p>
						<p className="text-[0.61rem] font-medium text-slate-400">
							Pilih kategori untuk mempersempit pilihan
						</p>
					</div>
				</div>

				<div className="hide-scrollbar mt-4 flex gap-2 overflow-x-auto pb-2">
					{FILTERS.map(({ id, label }) => (
						<button
							key={id}
							type="button"
							onClick={() => setActive(id)}
							className={[
								"shrink-0 rounded-full px-4 py-2 text-[0.66rem] font-extrabold transition-[transform,color,background-color] duration-150 active:scale-[0.97]",
								active === id
									? "bg-[#17689e] text-white shadow-[0_6px_16px_rgba(23,104,158,0.2)]"
									: "border border-slate-200 bg-white text-slate-500",
							].join(" ")}
						>
							{label}
						</button>
					))}
				</div>
			</section>

			<section className="grid gap-4 px-4 pb-7">
				{displayed.map((program) => (
					<ProgramCard key={program.slug} program={program} />
				))}
			</section>

			<section className="px-4 pb-8">
				<div className="rounded-[1.75rem] bg-[#ecfbf1] p-5">
					<span className="flex size-10 items-center justify-center rounded-2xl bg-white text-[#18a94f] shadow-sm">
						<MessageCircle className="size-5" />
					</span>
					<h2 className="mt-3 text-lg font-black tracking-[-0.025em] text-slate-900">
						Masih bingung memilih?
					</h2>
					<p className="mt-1 text-xs font-medium leading-relaxed text-slate-500">
						Ceritakan kebutuhanmu kepada admin. Kami bantu mencocokkan course
						dan jadwal yang tepat.
					</p>
					<a
						href={getWhatsAppUrl()}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-4 text-[0.68rem] font-extrabold text-white transition-transform duration-150 active:scale-[0.97]"
					>
						<MessageCircle className="size-4" />
						Konsultasi gratis
					</a>
				</div>
			</section>
		</>
	);
}
