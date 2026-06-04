import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "@/components/sections/page-hero";
import { PROGRAM_LIST } from "@/lib/programs-content";
import { getWhatsAppUrl } from "@/lib/site-config";
import { Users, Clock, CalendarDays } from "lucide-react";

const MODE_LABEL: Record<string, string> = {
	hybrid: "Online & Offline",
	online: "Online via Zoom",
	offline: "Offline",
};

const MODE_COLOR: Record<string, string> = {
	hybrid: "bg-blue-50 text-blue-700",
	online: "bg-emerald-50 text-emerald-700",
	offline: "bg-orange-50 text-orange-700",
};

export const Route = createFileRoute("/jadwal")({
	component: JadwalPage,
});

function JadwalPage() {
	const waUrl = getWhatsAppUrl();

	return (
		<>
			<PageHero
				title="Jadwal & Biaya Program"
				subtitle="Informasi jadwal, format, dan kuota untuk semua program Momkiddy Indonesia."
				breadcrumbs={[{ label: "Jadwal & Biaya" }]}
			/>

			<div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
				{/* Program table */}
				<div className="space-y-4">
					{PROGRAM_LIST.map((program) => (
						<div
							key={program.slug}
							className="rounded-xl border border-border bg-card overflow-hidden"
						>
							<div className="flex items-start justify-between gap-4 p-5">
								<div className="min-w-0 flex-1">
									<div className="flex flex-wrap items-center gap-2">
										<p className="text-sm font-semibold text-foreground">
											{program.shortTitle}
										</p>
										{program.isBestSeller && (
											<span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
												⭐ Best Seller
											</span>
										)}
									</div>
									{program.ageRange && (
										<p className="mt-0.5 text-xs text-muted-foreground">
											Usia {program.ageRange}
										</p>
									)}
								</div>
								<span
									className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${MODE_COLOR[program.mode]}`}
								>
									{MODE_LABEL[program.mode]}
								</span>
							</div>

							<div className="grid grid-cols-3 border-t border-border">
								<div className="flex items-center gap-2 border-r border-border px-4 py-3">
									<Users className="size-3.5 shrink-0 text-muted-foreground" />
									<div>
										<p className="text-xs text-muted-foreground">Kuota</p>
										<p className="text-xs font-medium text-foreground">
											Maks. {program.maxStudents}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-2 border-r border-border px-4 py-3">
									<Clock className="size-3.5 shrink-0 text-muted-foreground" />
									<div>
										<p className="text-xs text-muted-foreground">Jadwal</p>
										<p className="text-xs font-medium text-foreground">
											{program.duration}
										</p>
									</div>
								</div>
								<div className="flex items-center gap-2 px-4 py-3">
									<CalendarDays className="size-3.5 shrink-0 text-muted-foreground" />
									<div>
										<p className="text-xs text-muted-foreground">Biaya</p>
										<p className="text-xs font-medium text-foreground">
											{program.priceLabel}
										</p>
									</div>
								</div>
							</div>

							<div className="border-t border-border px-5 py-3">
								<Link
									to="/programs/$slug"
									params={{ slug: program.slug }}
									className="text-xs font-medium text-primary hover:underline"
								>
									Lihat detail program →
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* Notes */}
				<div className="mt-8 rounded-xl border border-border bg-muted/30 p-5">
					<p className="text-xs font-semibold text-foreground">Catatan</p>
					<ul className="mt-2 space-y-1.5">
						{[
							"Biaya detail dan jadwal batch terdekat tersedia via WhatsApp admin.",
							"Pembayaran dapat dilakukan melalui transfer bank atau e-wallet.",
							"Jika batch penuh, Anda akan dimasukkan ke waitlist otomatis.",
							"Kelas online memerlukan koneksi internet yang stabil dan perangkat dengan kamera.",
						].map((note) => (
							<li key={note} className="flex items-start gap-2">
								<span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
								<span className="text-xs text-muted-foreground">{note}</span>
							</li>
						))}
					</ul>
				</div>

				{/* CTA */}
				<div className="mt-8 rounded-xl border border-border bg-card p-6 text-center">
					<p className="text-sm font-semibold text-foreground">
						Tanya jadwal dan biaya terbaru
					</p>
					<p className="mt-1 text-xs text-muted-foreground">
						Admin kami akan membalas dalam waktu singkat.
					</p>
					<a
						href={waUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white transition-opacity duration-150 active:scale-[0.97] hover:opacity-90"
					>
						Chat Admin WhatsApp
					</a>
				</div>
			</div>
		</>
	);
}
