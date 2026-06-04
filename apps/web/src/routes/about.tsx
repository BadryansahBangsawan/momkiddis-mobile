import { createFileRoute, Link } from "@tanstack/react-router";
import PageHero from "@/components/sections/page-hero";
import { KEUNGGULAN } from "@/lib/programs-content";
import { getWhatsAppUrl } from "@/lib/site-config";
import {
	Users,
	Gamepad2,
	Monitor,
	Heart,
	Target,
	Award,
	BookOpen,
	Star,
} from "lucide-react";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
	Users: ({ className }) => <Users className={className} />,
	Gamepad2: ({ className }) => <Gamepad2 className={className} />,
	Monitor: ({ className }) => <Monitor className={className} />,
	Heart: ({ className }) => <Heart className={className} />,
	Target: ({ className }) => <Target className={className} />,
};

const VISI_MISI = {
	visi: "Menjadi lembaga pendidikan non-formal terpercaya yang memberdayakan ibu sebagai pendidik pertama dan terbaik bagi anaknya.",
	misi: [
		"Membekali ibu dengan metode mengajar yang efektif, menyenangkan, dan bisa langsung diterapkan di rumah.",
		"Menyediakan program belajar anak usia dini yang stimulatif, bermain sambil belajar, tanpa tekanan.",
		"Mendekatkan ibu dan anak dalam proses belajar yang bermakna setiap hari.",
		"Mencetak Mom Teacher yang percaya diri dan berdampak di lingkungannya.",
	],
};

const NILAI = [
	{
		icon: Heart,
		label: "Empati",
		desc: "Kami memahami tantangan sehari-hari ibu dalam mendampingi anak belajar.",
	},
	{
		icon: Star,
		label: "Kualitas",
		desc: "Setiap program dirancang dengan kurikulum yang terstruktur dan mentor berpengalaman.",
	},
	{
		icon: BookOpen,
		label: "Praktis",
		desc: "Ilmu yang kami ajarkan langsung bisa diterapkan, bukan teori semata.",
	},
	{
		icon: Award,
		label: "Berdampak",
		desc: "Keberhasilan peserta dalam mendampingi anak adalah keberhasilan kami.",
	},
];

export const Route = createFileRoute("/about")({
	component: AboutPage,
});

function AboutPage() {
	const waUrl = getWhatsAppUrl();

	return (
		<>
			<PageHero
				title="Tentang Momkiddy Indonesia"
				subtitle="Menguatkan peran ibu sebagai guru pertama di rumah dan mencerdaskan anak usia dini hingga sekolah dasar."
				breadcrumbs={[{ label: "Tentang Kami" }]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
				{/* Origin story */}
				<section className="grid gap-10 lg:grid-cols-2 lg:items-center">
					<div className="space-y-4">
						<span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
							Tentang Kami
						</span>
						<h2 className="text-2xl font-bold tracking-tight text-foreground">
							Lahir dari Keresahan Seorang Ibu
						</h2>
						<div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
							<p>
								Momkiddy Indonesia lahir dari keresahan mendalam Lita Hendratno
								tentang bagaimana banyak ibu ingin mendampingi anak belajar
								di rumah, tetapi merasa tidak tahu harus mulai dari mana.
							</p>
							<p>
								Bukan karena kurang cinta, melainkan karena tidak ada yang
								mengajarkan cara yang benar — cara yang menyenangkan, terstruktur,
								dan bebas tekanan. Di sisi lain, anak-anak belajar paling baik
								saat guru pertamanya adalah orang yang paling mereka cintai: ibu.
							</p>
							<p>
								Momkiddy hadir untuk menjembatani keduanya — membekali ibu
								dengan kemampuan mengajar dan menyediakan ruang belajar
								yang aman dan menyenangkan bagi anak.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						{[
							{ value: "500+", label: "Ibu Terlatih" },
							{ value: "20+", label: "Batch Selesai" },
							{ value: "5", label: "Program Unggulan" },
							{ value: "4.9★", label: "Rating Peserta" },
						].map(({ value, label }) => (
							<div
								key={label}
								className="rounded-xl border border-border bg-card p-5 text-center"
							>
								<p className="text-2xl font-bold text-primary">{value}</p>
								<p className="mt-1 text-xs text-muted-foreground">{label}</p>
							</div>
						))}
					</div>
				</section>

				{/* Visi & Misi */}
				<section className="rounded-2xl border border-border bg-muted/30 p-8">
					<div className="grid gap-8 lg:grid-cols-2">
						<div>
							<h3 className="mb-3 text-base font-semibold text-foreground">
								Visi
							</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								{VISI_MISI.visi}
							</p>
						</div>
						<div>
							<h3 className="mb-3 text-base font-semibold text-foreground">
								Misi
							</h3>
							<ul className="space-y-2">
								{VISI_MISI.misi.map((item, i) => (
									<li key={i} className="flex items-start gap-2.5">
										<span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
										<span className="text-sm leading-relaxed text-muted-foreground">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				{/* Founder teaser */}
				<section className="grid gap-8 lg:grid-cols-3 lg:items-start">
					<div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
						<div className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
							LH
						</div>
						<p className="mt-3 text-sm font-semibold text-foreground">
							Lita Hendratno
						</p>
						<p className="mt-0.5 text-xs text-muted-foreground">
							Founder & Lead Educator
						</p>
						<p className="mt-3 text-xs leading-relaxed text-muted-foreground">
							Pendidik dengan pengalaman lebih dari satu dekade dalam
							pengajaran anak usia dini dan pelatihan guru. Momkiddy adalah
							wujud nyata dari visinya.
						</p>
						<Link
							to="/founder"
							className="mt-4 text-xs font-medium text-primary hover:underline"
						>
							Baca lebih lanjut →
						</Link>
					</div>
					<div className="lg:col-span-2 space-y-4">
						<h2 className="text-xl font-bold tracking-tight text-foreground">
							Dibimbing Langsung, Bukan Delegasi
						</h2>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Salah satu yang membedakan Momkiddy dari lembaga pendidikan lain
							adalah: setiap program dibimbing langsung oleh Lita Hendratno —
							bukan tim yang ia latih, bukan modul yang dikerjakan sendiri.
						</p>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Peserta mendapat akses langsung ke pengalaman, wawasan, dan
							pembahasan kasus nyata dari seorang praktisi — bukan sekadar
							teori dari buku teks.
						</p>
						<div className="grid gap-3 sm:grid-cols-2">
							{NILAI.map(({ icon: Icon, label, desc }) => (
								<div
									key={label}
									className="flex items-start gap-3 rounded-lg border border-border bg-card p-3"
								>
									<div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
										<Icon className="size-4 text-primary" />
									</div>
									<div>
										<p className="text-xs font-semibold text-foreground">
											{label}
										</p>
										<p className="mt-0.5 text-xs leading-snug text-muted-foreground">
											{desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Keunggulan */}
				<section>
					<div className="mb-6 text-center">
						<h2 className="text-xl font-bold tracking-tight text-foreground">
							Mengapa Momkiddy?
						</h2>
						<p className="mt-2 text-sm text-muted-foreground">
							Lima hal yang membuat Momkiddy berbeda dari program lainnya.
						</p>
					</div>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{KEUNGGULAN.map((item, i) => {
							const Icon = ICON_MAP[item.icon];
							return (
								<div
									key={item.title}
									className="rounded-xl border border-border bg-card p-5"
									style={{ animationDelay: `${i * 60}ms` }}
								>
									{Icon && (
										<div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary/10">
											<Icon className="size-5 text-primary" />
										</div>
									)}
									<p className="text-sm font-semibold text-foreground">
										{item.title}
									</p>
									<p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
										{item.description}
									</p>
								</div>
							);
						})}
					</div>
				</section>

				{/* CTA */}
				<section className="rounded-2xl bg-primary px-8 py-10 text-center">
					<h2 className="text-xl font-bold text-white">
						Siap Bergabung bersama Momkiddy?
					</h2>
					<p className="mt-2 text-sm text-white/80">
						Ribuan ibu sudah membuktikannya. Sekarang giliran Anda.
					</p>
					<a
						href={waUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-opacity duration-150 active:scale-[0.97] hover:opacity-90"
					>
						Hubungi Admin Sekarang
					</a>
				</section>
			</div>
		</>
	);
}
