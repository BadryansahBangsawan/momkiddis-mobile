import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@momkiddis/ui/components/button";
import { ArrowRightIcon, MessageCircleIcon, PlayCircleIcon } from "lucide-react";

import {
	PROGRAM_LIST,
	KEUNGGULAN,
	CARA_KERJA,
	STATIC_TESTIMONIALS,
	STATIC_ALUMNI,
} from "@/lib/programs-content";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import { orpc } from "@/utils/orpc";

import StatsBar from "@/components/sections/stats-bar";
import ProgramCard from "@/components/sections/program-card";
import TestimonialCard from "@/components/sections/testimonial-card";
import AlumniCard from "@/components/sections/alumni-card";
import KeunggulanSection from "@/components/sections/keunggulan-section";
import StepsSection from "@/components/sections/steps-section";
import WhatsAppCta from "@/components/sections/whatsapp-cta";

export const Route = createFileRoute("/")({
	loader: async ({ context: { queryClient } }) => {
		void queryClient.prefetchQuery(
			orpc.testimonials.listFeatured.queryOptions(),
		);
		void queryClient.prefetchQuery(
			orpc.alumni.listFeatured.queryOptions(),
		);
	},
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div>
			{/* ── Hero ── */}
			<HeroSection />

			{/* ── Social Proof Bar ── */}
			<StatsBar />

			{/* ── Tentang Momkiddy ── */}
			<AboutTeaser />

			{/* ── Program Unggulan ── */}
			<ProgramsSection />

			{/* ── Cara Kerja ── */}
			<StepsSection steps={CARA_KERJA} />

			{/* ── Keunggulan ── */}
			<KeunggulanSection items={KEUNGGULAN} />

			{/* ── Testimoni ── */}
			<TestimoniSection />

			{/* ── Alumni Showcase ── */}
			<AlumniSection />

			{/* ── CTA Final Banner ── */}
			<WhatsAppCta variant="full" label="Daftar Sekarang via WhatsApp" />
		</div>
	);
}

/* ─── Hero Section ─────────────────────────────── */
function HeroSection() {
	return (
		<section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
			{/* Subtle background gradient */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,theme(colors.blue.50),transparent)]"
			/>

			<div className="mx-auto max-w-3xl text-center">
				{/* Label */}
				<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
					<PlayCircleIcon className="size-3" />
					Lembaga Pendidikan Non-Formal Terpercaya
				</div>

				{/* Heading */}
				<h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl sm:leading-tight">
					{siteConfig.tagline
						.split(",")
						.map((part, i) => (
							<span key={i}>
								{i === 0 ? (
									<span className="text-primary">{part}</span>
								) : (
									<span className="text-accent">{part}</span>
								)}
								{i === 0 && ","}
							</span>
						))}
				</h1>

				{/* Sub-copy */}
				<p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
					Momkiddy Indonesia membekali ibu sebagai guru pertama di rumah
					sekaligus menyediakan program belajar yang menyenangkan untuk anak
					usia dini hingga SD.
				</p>

				{/* CTAs */}
				<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<Link to="/programs">
						<Button
							size="lg"
							className="gap-2 transition-transform active:scale-[0.97]"
						>
							Lihat Program
							<ArrowRightIcon className="size-4" />
						</Button>
					</Link>
					<a
						href={getWhatsAppUrl()}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							variant="outline"
							size="lg"
							className="gap-2 border-accent/40 text-accent transition-all active:scale-[0.97] hover:border-accent hover:bg-accent/5"
						>
							<MessageCircleIcon className="size-4" />
							Hubungi Kami
						</Button>
					</a>
				</div>

				{/* Microcopy */}
				<p className="mt-4 text-xs text-muted-foreground">
					Tersedia kelas online & offline · Batch baru setiap bulan
				</p>
			</div>
		</section>
	);
}

/* ─── About Teaser ─────────────────────────────── */
function AboutTeaser() {
	return (
		<section className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid items-center gap-10 lg:grid-cols-2">
					{/* Text */}
					<div>
						<p className="text-xs font-semibold uppercase tracking-widest text-primary">
							Tentang Kami
						</p>
						<h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
							Rumah Belajar Keluarga Indonesia
						</h2>
						<div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
							<p>
								<strong className="text-foreground">Momkiddy Indonesia</strong>{" "}
								adalah lembaga pendidikan non-formal yang berfokus pada dua
								pilar utama: menguatkan peran ibu sebagai guru pertama di rumah
								dan mencerdaskan anak usia dini hingga sekolah dasar.
							</p>
							<p>
								Didirikan oleh{" "}
								<strong className="text-foreground">Ibu Lita Hendratno</strong>,
								Momkiddy hadir dari keyakinan bahwa sebelum anak mampu belajar
								dengan percaya diri, ibu juga perlu merasa mampu, siap, dan
								percaya diri dalam mendampingi proses belajar anak.
							</p>
							<p className="italic text-foreground/70">
								"Tidak ada ibu yang gagal mengajar. Yang ada adalah ibu yang
								belum menemukan metode yang tepat."
							</p>
						</div>
						<Link to="/about" className="mt-5 inline-block">
							<Button
								variant="outline"
								size="sm"
								className="gap-1.5 transition-transform active:scale-[0.97]"
							>
								Selengkapnya
								<ArrowRightIcon className="size-3.5" />
							</Button>
						</Link>
					</div>

					{/* Visual — stats cards */}
					<div className="grid grid-cols-2 gap-4">
						{[
							{
								label: "Ibu Terlatih",
								value: "500+",
								sub: "dari berbagai kota di Indonesia",
							},
							{
								label: "Batch Selesai",
								value: "20+",
								sub: "batch microteaching",
							},
							{
								label: "Program Aktif",
								value: "5",
								sub: "program untuk ibu dan anak",
							},
							{
								label: "Rating Kepuasan",
								value: "4.9",
								sub: "berdasarkan testimoni peserta",
							},
						].map(({ label, value, sub }) => (
							<div
								key={label}
								className="rounded-xl border border-border bg-card p-4"
							>
								<p className="text-2xl font-bold text-primary">{value}</p>
								<p className="text-xs font-semibold text-foreground">{label}</p>
								<p className="mt-1 text-xs text-muted-foreground">{sub}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

/* ─── Programs Section ──────────────────────────── */
function ProgramsSection() {
	return (
		<section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
					<div>
						<p className="text-xs font-semibold uppercase tracking-widest text-primary">
							Program Unggulan
						</p>
						<h2 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
							Belajar Sesuai Kebutuhan
						</h2>
						<p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
							5 program dirancang untuk ibu dan anak, dari microteaching hingga
							bahasa Inggris.
						</p>
					</div>
					<Link to="/programs" className="shrink-0">
						<Button
							variant="outline"
							size="sm"
							className="gap-1.5 text-xs transition-transform active:scale-[0.97]"
						>
							Lihat Semua
							<ArrowRightIcon className="size-3" />
						</Button>
					</Link>
				</div>

				{/* Grid */}
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{PROGRAM_LIST.map((program, i) => (
						<ProgramCard key={program.slug} program={program} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}

/* ─── Testimoni Section ─────────────────────────── */
function TestimoniSection() {
	const { data: liveTestimonials } = useQuery(
		orpc.testimonials.listFeatured.queryOptions(),
	);
	const items = liveTestimonials && liveTestimonials.length > 0 ? liveTestimonials : STATIC_TESTIMONIALS;

	return (
		<section className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="flex items-end justify-between">
					<div>
						<p className="text-xs font-semibold uppercase tracking-widest text-primary">
							Testimoni
						</p>
						<h2 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
							Apa Kata Mereka?
						</h2>
					</div>
					<Link to="/testimoni">
						<Button
							variant="ghost"
							size="sm"
							className="gap-1 text-xs text-primary transition-transform active:scale-[0.97] hover:text-primary/80"
						>
							Lihat Semua
							<ArrowRightIcon className="size-3" />
						</Button>
					</Link>
				</div>

				{/* Grid */}
				<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{items?.map((t, i) => (
						<TestimonialCard
							key={t.id}
							authorName={t.authorName}
							authorRole={t.authorRole}
							content={t.content}
							rating={t.rating}
							index={i}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

/* ─── Alumni Section ────────────────────────────── */
function AlumniSection() {
	const { data: liveAlumni } = useQuery(
		orpc.alumni.listFeatured.queryOptions(),
	);
	const items = liveAlumni && liveAlumni.length > 0 ? liveAlumni : STATIC_ALUMNI;

	return (
		<section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="flex items-end justify-between">
					<div>
						<p className="text-xs font-semibold uppercase tracking-widest text-primary">
							Alumni
						</p>
						<h2 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
							Kisah Sukses Alumni
						</h2>
					</div>
					<Link to="/alumni">
						<Button
							variant="ghost"
							size="sm"
							className="gap-1 text-xs text-primary transition-transform active:scale-[0.97] hover:text-primary/80"
						>
							Lihat Semua
							<ArrowRightIcon className="size-3" />
						</Button>
					</Link>
				</div>

				{/* Grid */}
				<div className="mt-6 grid gap-4 sm:grid-cols-3">
					{items?.map((a, i) => (
						<AlumniCard
							key={a.id}
							name={a.name}
							batchLabel={a.batchLabel}
							shortStory={a.shortStory}
							index={i}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
