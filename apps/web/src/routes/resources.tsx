import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PageHero from "@/components/sections/page-hero";
import WhatsAppCta from "@/components/sections/whatsapp-cta";
import { orpc } from "@/utils/orpc";
import { FileText, Image, Archive, Download, BookOpen } from "lucide-react";

type Category = "semua" | "worksheet" | "flashcard" | "template" | "tips";

const CATEGORIES: { id: Category; label: string }[] = [
	{ id: "semua", label: "Semua" },
	{ id: "worksheet", label: "Worksheet" },
	{ id: "flashcard", label: "Flashcard" },
	{ id: "template", label: "Template" },
	{ id: "tips", label: "Tips & Panduan" },
];

// Placeholder saat DB kosong
const PLACEHOLDER_RESOURCES = [
	{
		id: "1",
		title: "Worksheet Calistung Level 1 — Mengenal Huruf",
		description: "Lembar kerja bergambar untuk anak usia 3–5 tahun yang baru mengenal huruf A–Z. Cocok untuk belajar sambil bermain.",
		category: "worksheet",
		fileType: "pdf",
		downloadCount: 0,
		fileUrl: "#",
	},
	{
		id: "2",
		title: "Flashcard Phonics 44 Suara",
		description: "Kartu phonics dengan 44 bunyi dasar bahasa Inggris. Cocok digunakan dalam program English Fun Class.",
		category: "flashcard",
		fileType: "pdf",
		downloadCount: 0,
		fileUrl: "#",
	},
	{
		id: "3",
		title: "Template RPP Simpel untuk Ibu",
		description: "Template Rencana Pelaksanaan Pembelajaran (RPP) versi sederhana yang bisa langsung digunakan oleh peserta Kelas Microteaching.",
		category: "template",
		fileType: "pdf",
		downloadCount: 0,
		fileUrl: "#",
	},
	{
		id: "4",
		title: "Panduan: 10 Tips Ajarkan Anak Membaca Tanpa Stres",
		description: "Panduan PDF berisi 10 strategi praktis yang sudah terbukti efektif membantu anak belajar membaca dengan menyenangkan.",
		category: "tips",
		fileType: "pdf",
		downloadCount: 0,
		fileUrl: "#",
	},
	{
		id: "5",
		title: "Worksheet Berhitung Seru Kelas 1–2 SD",
		description: "Lembar kerja matematika dasar dengan ilustrasi menarik, cocok untuk anak kelas 1–2 SD yang sedang belajar berhitung.",
		category: "worksheet",
		fileType: "pdf",
		downloadCount: 0,
		fileUrl: "#",
	},
	{
		id: "6",
		title: "Jadwal Belajar Harian — Template Printable",
		description: "Template jadwal belajar anak yang bisa dicetak dan dihias bersama anak, membuat belajar jadi lebih terstruktur dan menyenangkan.",
		category: "template",
		fileType: "pdf",
		downloadCount: 0,
		fileUrl: "#",
	},
];

function FileTypeIcon({ type }: { type: string | null | undefined }) {
	if (type === "image") return <Image className="size-6 text-primary/40" />;
	if (type === "zip") return <Archive className="size-6 text-primary/40" />;
	return <FileText className="size-6 text-primary/40" />;
}

export const Route = createFileRoute("/resources")({
	loader: async ({ context: { queryClient } }) => {
		void queryClient.prefetchQuery(orpc.resources.list.queryOptions());
	},
	component: ResourcesPage,
});

function ResourcesPage() {
	const [activeCategory, setActiveCategory] = useState<Category>("semua");
	const { data = [] } = useQuery(orpc.resources.list.queryOptions());

	const liveItems = data.length > 0 ? data : PLACEHOLDER_RESOURCES;
	const isLive = data.length > 0;

	const items = activeCategory === "semua"
		? liveItems
		: liveItems.filter((r) => r.category === activeCategory);

	return (
		<>
			<PageHero
				title="Materi Gratis"
				subtitle="Worksheet, flashcard, template, dan panduan gratis untuk mendukung proses belajar anak di rumah."
				breadcrumbs={[{ label: "Materi Gratis" }]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				{/* Filter */}
				<div className="mb-6 flex gap-2 overflow-x-auto pb-1">
					{CATEGORIES.map(({ id, label }) => (
						<button
							key={id}
							type="button"
							onClick={() => setActiveCategory(id)}
							className={[
								"shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-150 active:scale-[0.97]",
								activeCategory === id
									? "border-primary bg-primary text-primary-foreground"
									: "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
							].join(" ")}
						>
							{label}
						</button>
					))}
				</div>

				{/* Grid */}
				{items.length === 0 ? (
					<div className="py-20 text-center">
						<div className="flex size-16 mx-auto items-center justify-center rounded-2xl bg-primary/10">
							<BookOpen className="size-8 text-primary" />
						</div>
						<p className="mt-4 text-sm font-semibold text-foreground">
							Belum ada materi di kategori ini
						</p>
					</div>
				) : (
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{items.map((resource, i) => (
							<div
								key={resource.id}
								className="flex flex-col rounded-xl border border-border bg-card overflow-hidden"
								style={{ animationDelay: `${i * 50}ms` }}
							>
								{/* Thumbnail placeholder */}
								<div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
									<FileTypeIcon type={resource.fileType} />
								</div>

								<div className="flex flex-1 flex-col p-4">
									<div className="flex items-center gap-2">
										<span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground capitalize">
											{resource.category ?? "Lainnya"}
										</span>
										{resource.fileType && (
											<span className="text-xs font-mono text-muted-foreground uppercase">
												{resource.fileType}
											</span>
										)}
									</div>

									<h3 className="mt-2 text-sm font-semibold leading-snug text-foreground">
										{resource.title}
									</h3>
									{resource.description && (
										<p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
											{resource.description}
										</p>
									)}

									<div className="mt-4">
										{isLive ? (
											<a
												href={resource.fileUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition-opacity active:scale-[0.97] hover:opacity-90"
											>
												<Download className="size-3.5" />
												Unduh Gratis
											</a>
										) : (
											<div className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-muted px-3 py-2 text-xs font-medium text-muted-foreground">
												<Download className="size-3.5" />
												Segera Tersedia
											</div>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				{!isLive && (
					<p className="mt-6 text-center text-xs text-muted-foreground">
						Materi unduhan akan segera ditambahkan. Pantau terus!
					</p>
				)}

				{/* CTA */}
				<div className="mt-10">
					<WhatsAppCta
						variant="full"
						label="Mau materi lebih lengkap? Ikuti program kami"
					/>
				</div>
			</div>
		</>
	);
}
