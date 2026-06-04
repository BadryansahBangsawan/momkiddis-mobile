import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import PageHero from "@/components/sections/page-hero";
import { orpc } from "@/utils/orpc";
import { Camera } from "lucide-react";

// Fallback items for when DB is empty or not yet seeded
const PLACEHOLDER_ITEMS = Array.from({ length: 6 }, (_, i) => ({
	id: String(i + 1),
	imageUrl: null as string | null,
	caption: [
		"Sesi Kelas Microteaching Batch 7",
		"Praktik Phonics bersama Anak",
		"Workshop Mom Teacher",
		"Kelas Calistung Fun",
		"Suasana Belajar Online via Zoom",
		"Sertifikat Mom Teacher Batch 5",
	][i],
	event: [
		"Microteaching",
		"Calistung Fun",
		"Workshop",
		"Calistung Fun",
		"Online Class",
		"Sertifikasi",
	][i],
	takenAt: null as number | null,
}));

export const Route = createFileRoute("/galeri")({
	loader: async ({ context: { queryClient } }) => {
		void queryClient.prefetchQuery(orpc.gallery.list.queryOptions());
	},
	component: GaleriPage,
});

function formatDate(ts: Date | number | null | undefined) {
	if (!ts) return "";
	return new Intl.DateTimeFormat("id-ID", {
		month: "short",
		year: "numeric",
	}).format(ts instanceof Date ? ts : new Date(ts));
}

function GaleriPage() {
	const { data, isLoading } = useQuery(orpc.gallery.list.queryOptions());

	const items =
		!isLoading && data && data.length > 0 ? data : PLACEHOLDER_ITEMS;
	const isLive = !isLoading && data && data.length > 0;

	return (
		<>
			<PageHero
				title="Galeri Kegiatan"
				subtitle="Momen-momen belajar yang menyenangkan bersama Momkiddy Indonesia."
				breadcrumbs={[{ label: "Galeri" }]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				{isLoading ? (
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{Array.from({ length: 6 }).map((_, i) => (
							<div
								key={i}
								className="aspect-video animate-pulse rounded-xl bg-muted"
							/>
						))}
					</div>
				) : (
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{items.map((item, i) => (
							<div
								key={item.id}
								className="group overflow-hidden rounded-xl border border-border bg-card"
								style={{ animationDelay: `${i * 60}ms` }}
							>
								{/* Image or placeholder */}
								{isLive && item.imageUrl ? (
									<img
										src={item.imageUrl}
										alt={item.caption}
										className="aspect-video w-full object-cover"
									/>
								) : (
									<div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
										<Camera className="size-8 text-primary/30" />
									</div>
								)}

								<div className="p-3">
									<p className="text-xs font-medium text-foreground line-clamp-1">
										{item.caption}
									</p>
									<div className="mt-1 flex items-center justify-between">
										<span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
											{item.event}
										</span>
										{item.takenAt && (
											<span className="text-xs text-muted-foreground">
												{formatDate(item.takenAt)}
											</span>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				{!isLive && !isLoading && (
					<p className="mt-6 text-center text-xs text-muted-foreground">
						Foto kegiatan nyata akan segera ditambahkan.
					</p>
				)}

				{/* Instagram CTA */}
				<div className="mt-10 rounded-xl border border-border bg-card p-6 text-center">
					<p className="text-sm font-semibold text-foreground">
						Lihat aktivitas terkini di Instagram kami
					</p>
					<p className="mt-1 text-xs text-muted-foreground">
						Konten harian, tips parenting, dan update kelas terbaru.
					</p>
					<a
						href="https://instagram.com/momkiddy.education"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-gradient-to-r from-purple-50 to-pink-50 px-5 py-2 text-sm font-semibold text-pink-700 transition-opacity duration-150 active:scale-[0.97] hover:opacity-80"
					>
						@momkiddy.education
					</a>
				</div>
			</div>
		</>
	);
}
