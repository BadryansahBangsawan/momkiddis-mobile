import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/sections/page-hero";
import { STATIC_TESTIMONIALS } from "@/lib/programs-content";
import { getWhatsAppUrl } from "@/lib/site-config";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimoni")({
	component: TestimoniPage,
});

function TestimoniPage() {
	const waUrl = getWhatsAppUrl();

	return (
		<>
			<PageHero
				title="Testimoni Peserta"
				subtitle="Kata mereka tentang pengalaman belajar bersama Momkiddy Indonesia."
				breadcrumbs={[{ label: "Testimoni" }]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{STATIC_TESTIMONIALS.map((t, i) => (
						<div
							key={t.id}
							className="flex flex-col rounded-xl border border-border bg-card p-5"
							style={{ animationDelay: `${i * 60}ms` }}
						>
							{/* Stars */}
							<div className="flex gap-0.5">
								{Array.from({ length: t.rating }).map((_, j) => (
									<Star
										key={j}
										className="size-3.5 fill-amber-400 text-amber-400"
									/>
								))}
							</div>

							{/* Quote */}
							<p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
								"{t.content}"
							</p>

							{/* Author */}
							<div className="mt-4 flex items-center gap-2.5">
								<div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
									{t.authorName.slice(0, 2).toUpperCase()}
								</div>
								<div>
									<p className="text-xs font-semibold text-foreground">
										{t.authorName}
									</p>
									<p className="text-xs text-muted-foreground">
										{t.authorRole}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="mt-10 rounded-2xl bg-primary px-8 py-10 text-center">
					<p className="text-lg font-bold text-white">
						Jadilah Cerita Berikutnya
					</p>
					<p className="mt-1 text-sm text-white/75">
						Bergabunglah dan rasakan sendiri pengalaman belajar bersama Momkiddy.
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
