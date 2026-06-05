import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PageHero from "@/components/sections/page-hero";
import { AlumniSlider, type AlumniReview } from "@/components/sections/alumni-slider";
import { STATIC_ALUMNI, PROGRAM_LIST } from "@/lib/programs-content";
import { getWhatsAppUrl } from "@/lib/site-config";
import { orpc } from "@/utils/orpc";
import { Award } from "lucide-react";

export const Route = createFileRoute("/alumni")({
	loader: async ({ context: { queryClient } }) => {
		void queryClient.prefetchQuery(orpc.alumni.list.queryOptions({ input: { page: 1 } }));
	},
	component: AlumniPage,
});

// Featured alumni for the animated slider (with Unsplash portrait images)
const FEATURED_REVIEWS: AlumniReview[] = [
	{
		id: "f1",
		name: "Ibu Fitri Handayani",
		batchLabel: "Batch 3 · Kelas Microteaching",
		quote:
			"Setelah lulus, saya membuka kelas belajar dari rumah untuk 5 anak di lingkungan. Metode yang saya pelajari benar-benar mengubah cara saya mendampingi anak.",
		imageSrc:
			"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&q=80",
		thumbnailSrc:
			"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=120&fit=crop&q=80",
	},
	{
		id: "f2",
		name: "Ibu Nanda Pratiwi",
		batchLabel: "Batch 5 · Kelas Microteaching",
		quote:
			"Berhasil mendampingi anak dari tidak bisa membaca hingga lancar dalam 2 bulan. Tidak menyangka hasilnya secepat ini!",
		imageSrc:
			"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&q=80",
		thumbnailSrc:
			"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=120&fit=crop&q=80",
	},
	{
		id: "f3",
		name: "Ibu Maya Sari",
		batchLabel: "Batch 7 · Kelas Microteaching",
		quote:
			"Sekarang aktif sebagai pengajar les privat dan sudah memiliki 8 murid tetap. Program ini membuka pintu rezeki yang tidak pernah saya bayangkan.",
		imageSrc:
			"https://images.unsplash.com/photo-1488508872907-592763824245?w=400&h=600&fit=crop&q=80",
		thumbnailSrc:
			"https://images.unsplash.com/photo-1488508872907-592763824245?w=100&h=120&fit=crop&q=80",
	},
	{
		id: "f4",
		name: "Ibu Rini Wahyuni",
		batchLabel: "Batch 10 · Calistung Fun",
		quote:
			"Anak saya yang tadinya tidak mau belajar, kini selalu minta waktu belajar setiap hari. Terima kasih Momkiddy!",
		imageSrc:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&q=80",
		thumbnailSrc:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=120&fit=crop&q=80",
	},
	{
		id: "f5",
		name: "Ibu Desi Kurniawati",
		batchLabel: "Batch 12 · English Fun Class",
		quote:
			"Program English Fun Class membuat anak saya percaya diri berbicara bahasa Inggris. Gurunya sabar dan metodenya sangat menyenangkan.",
		imageSrc:
			"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop&q=80",
		thumbnailSrc:
			"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=120&fit=crop&q=80",
	},
];

type FilterSlug = "semua" | (typeof PROGRAM_LIST)[number]["slug"];

const PROGRAM_FILTERS: { id: FilterSlug; label: string }[] = [
	{ id: "semua", label: "Semua" },
	...PROGRAM_LIST.map((p) => ({ id: p.slug as FilterSlug, label: p.shortTitle })),
];

function AlumniPage() {
	const waUrl = getWhatsAppUrl();
	const [activeFilter, setActiveFilter] = useState<FilterSlug>("semua");

	const { data, isLoading } = useQuery(
		orpc.alumni.list.queryOptions({
			input: {
				page: 1,
				programSlug: activeFilter === "semua" ? undefined : activeFilter,
			},
		}),
	);

	const items = data?.items?.length ? data.items : STATIC_ALUMNI;

	return (
		<>
			<PageHero
				title="Alumni Momkiddy"
				subtitle="Ibu-ibu yang telah lulus dari program kami dan membawa perubahan nyata di rumah dan lingkungannya."
				breadcrumbs={[{ label: "Alumni" }]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				{/* ── Animated alumni slider ── */}
				<div className="mb-12">
					<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
						Kisah Unggulan
					</p>
					<AlumniSlider reviews={FEATURED_REVIEWS} />
				</div>

				{/* ── All alumni grid ── */}
				<div>
					<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
						Semua Alumni
					</p>

					{/* Program filter */}
					<div className="mb-6 flex gap-2 overflow-x-auto pb-1">
						{PROGRAM_FILTERS.map(({ id, label }) => (
							<button
								key={id}
								type="button"
								onClick={() => setActiveFilter(id)}
								className={[
									"shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-150 active:scale-[0.97]",
									activeFilter === id
										? "border-primary bg-primary text-primary-foreground"
										: "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
								].join(" ")}
							>
								{label}
							</button>
						))}
					</div>

					{isLoading ? (
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{Array.from({ length: 3 }).map((_, i) => (
								<div key={i} className="h-32 animate-pulse rounded-xl bg-muted" />
							))}
						</div>
					) : (
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{items?.map((alumni, i) => (
								<div
									key={alumni.id}
									className="rounded-xl border border-border bg-card p-5"
									style={{ animationDelay: `${i * 60}ms` }}
								>
									<div className="flex items-start gap-3">
										<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
											{alumni.name.slice(0, 2).toUpperCase()}
										</div>
										<div>
											<p className="text-sm font-semibold text-foreground">
												{alumni.name}
											</p>
											<div className="mt-0.5 flex items-center gap-1">
												<Award className="size-3 text-amber-500" />
												<p className="text-xs text-muted-foreground">
													{alumni.batchLabel}
												</p>
											</div>
										</div>
									</div>
									<p className="mt-3 text-xs leading-relaxed text-muted-foreground">
										"{alumni.shortStory}"
									</p>
								</div>
							))}

							{!items?.length && (
								<div className="col-span-full py-12 text-center text-sm text-muted-foreground">
									Belum ada alumni untuk program ini.
								</div>
							)}
						</div>
					)}
				</div>

				{/* CTA */}
				<div className="mt-10 rounded-2xl bg-primary px-8 py-10 text-center">
					<p className="text-lg font-bold text-white">Jadilah Bagian dari Cerita Ini</p>
					<p className="mt-1 text-sm text-white/75">
						Bergabunglah dengan ratusan ibu yang telah membuktikan perubahan nyata.
					</p>
					<a
						href={waUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-opacity duration-150 active:scale-[0.97] hover:opacity-90"
					>
						Daftar Sekarang
					</a>
				</div>
			</div>
		</>
	);
}
