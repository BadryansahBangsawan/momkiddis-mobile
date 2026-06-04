import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/sections/page-hero";
import { STATIC_ALUMNI } from "@/lib/programs-content";
import { getWhatsAppUrl } from "@/lib/site-config";
import { Award } from "lucide-react";

export const Route = createFileRoute("/alumni")({
	component: AlumniPage,
});

function AlumniPage() {
	const waUrl = getWhatsAppUrl();

	return (
		<>
			<PageHero
				title="Alumni Momkiddy"
				subtitle="Ibu-ibu yang telah lulus dari program kami dan membawa perubahan nyata di rumah dan lingkungannya."
				breadcrumbs={[{ label: "Alumni" }]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				{/* Stats */}
				<div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
					{[
						{ value: "500+", label: "Alumni Aktif" },
						{ value: "20+", label: "Batch Selesai" },
						{ value: "3 Tahun", label: "Berdiri" },
						{ value: "4.9★", label: "Rating Program" },
					].map(({ value, label }) => (
						<div
							key={label}
							className="rounded-xl border border-border bg-card p-4 text-center"
						>
							<p className="text-xl font-bold text-primary">{value}</p>
							<p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
						</div>
					))}
				</div>

				{/* Alumni grid */}
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{STATIC_ALUMNI.map((alumni, i) => (
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
									<div className="flex items-center gap-1 mt-0.5">
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
				</div>

				{/* Placeholder for DB data */}
				<div className="mt-8 rounded-xl border border-dashed border-border p-8 text-center">
					<p className="text-sm text-muted-foreground">
						Lebih banyak cerita alumni akan segera hadir.
					</p>
					<p className="mt-1 text-xs text-muted-foreground">
						Alumni kami tersebar di seluruh Indonesia — dari ibu rumah tangga
						yang kini membuka kelas privat, hingga guru PAUD bersertifikat.
					</p>
				</div>

				{/* CTA */}
				<div className="mt-10 rounded-2xl bg-primary px-8 py-10 text-center">
					<p className="text-lg font-bold text-white">
						Jadilah Bagian dari Cerita Ini
					</p>
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
