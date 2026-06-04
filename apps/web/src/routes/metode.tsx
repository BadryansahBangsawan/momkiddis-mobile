import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/sections/page-hero";
import { getWhatsAppUrl } from "@/lib/site-config";
import { Music2, Puzzle, BookOpen, MessageSquare, Mic, Pencil } from "lucide-react";

const METODE = [
	{
		icon: Music2,
		color: "bg-blue-50 text-blue-600",
		title: "Phonics Method",
		subtitle: "Membaca dengan mendengar bunyi",
		desc: "Phonics mengajarkan anak mengenali bunyi huruf sebelum bentuknya. Anak belajar membaca berdasarkan bunyi, bukan hafalan — membuat proses baca tulis jauh lebih cepat dan mengalir alami.",
		applies: ["Calistung Fun", "Kelas Microteaching"],
	},
	{
		icon: Puzzle,
		color: "bg-emerald-50 text-emerald-600",
		title: "Play-Based Learning",
		subtitle: "Bermain sambil belajar",
		desc: "Setiap pelajaran dikemas dalam aktivitas bermain yang bertujuan. Anak tidak merasa 'sedang belajar' — mereka mengeksplorasi, bergerak, dan menemukan. Otak anak menyerap informasi lebih baik dalam kondisi menyenangkan.",
		applies: ["Semua program anak"],
	},
	{
		icon: MessageSquare,
		color: "bg-orange-50 text-orange-600",
		title: "Storytelling",
		subtitle: "Belajar melalui cerita",
		desc: "Cerita adalah bahasa alami anak. Konsep abstrak disampaikan melalui narasi yang konkret dan menarik. Anak tidak hanya memahami materi — mereka mengingatnya, karena ia terikat pada sebuah kisah.",
		applies: ["Calistung Fun", "Menulis Kreatif"],
	},
	{
		icon: Mic,
		color: "bg-violet-50 text-violet-600",
		title: "Microteaching",
		subtitle: "Praktik mengajar langsung",
		desc: "Ibu tidak hanya belajar teori — mereka langsung praktik mengajar di depan mentor dan rekan. Setiap sesi diakhiri dengan umpan balik spesifik sehingga ibu tahu persis apa yang perlu diperbaiki.",
		applies: ["Kelas Microteaching"],
	},
	{
		icon: Pencil,
		color: "bg-rose-50 text-rose-600",
		title: "Project-Based Writing",
		subtitle: "Menulis dengan tujuan nyata",
		desc: "Anak tidak hanya berlatih menulis kalimat — mereka menyelesaikan proyek: membuat buku cerita mini, puisi untuk keluarga, atau pidato yang akan dibacakan. Rasa bangga atas karya nyata mendorong motivasi lebih kuat.",
		applies: ["Menulis Kreatif"],
	},
	{
		icon: BookOpen,
		color: "bg-amber-50 text-amber-600",
		title: "RPP Simpel",
		subtitle: "Rencana belajar satu halaman",
		desc: "Ibu diajarkan membuat rencana pelajaran yang ringkas dan praktis — cukup satu halaman. Tidak rumit seperti RPP formal, tapi cukup terstruktur agar belajar di rumah lebih terarah dan konsisten.",
		applies: ["Kelas Microteaching"],
	},
];

export const Route = createFileRoute("/metode")({
	component: MetodePage,
});

function MetodePage() {
	const waUrl = getWhatsAppUrl();

	return (
		<>
			<PageHero
				title="Metode Belajar Momkiddy"
				subtitle="Pendekatan yang membuat belajar terasa alami, menyenangkan, dan efektif untuk ibu maupun anak."
				breadcrumbs={[{ label: "Metode Belajar" }]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
				{/* Intro */}
				<section className="mx-auto max-w-2xl text-center">
					<p className="text-sm leading-relaxed text-muted-foreground">
						Momkiddy tidak percaya pada pendekatan satu ukuran untuk semua.
						Setiap program menggunakan metode yang disesuaikan dengan usia,
						tahapan perkembangan, dan tujuan pembelajaran — baik untuk ibu
						yang belajar mengajar, maupun anak yang sedang tumbuh.
					</p>
				</section>

				{/* Method cards */}
				<section>
					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{METODE.map((m, i) => (
							<div
								key={m.title}
								className="rounded-xl border border-border bg-card p-5"
								style={{ animationDelay: `${i * 60}ms` }}
							>
								<div className={`mb-4 inline-flex rounded-xl p-2.5 ${m.color.split(" ")[0]}`}>
									<m.icon className={`size-5 ${m.color.split(" ")[1]}`} />
								</div>
								<p className="text-sm font-semibold text-foreground">{m.title}</p>
								<p className="mt-0.5 text-xs font-medium text-muted-foreground">
									{m.subtitle}
								</p>
								<p className="mt-2 text-xs leading-relaxed text-muted-foreground">
									{m.desc}
								</p>
								<div className="mt-3 flex flex-wrap gap-1">
									{m.applies.map((a) => (
										<span
											key={a}
											className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
										>
											{a}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Philosophy */}
				<section className="rounded-2xl border border-border bg-muted/30 p-8">
					<div className="mx-auto max-w-2xl text-center space-y-4">
						<h2 className="text-xl font-bold text-foreground">
							Filosofi Pembelajaran Momkiddy
						</h2>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Kami percaya bahwa belajar yang baik dimulai dari rasa aman dan
							senang. Ketika anak merasa senang, rasa ingin tahunya tumbuh
							secara alami. Ketika ibu merasa percaya diri, ia menjadi guru
							terbaik yang sudah ada di dekat anaknya sejak lahir.
						</p>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Tidak ada tekanan. Tidak ada hafalan kaku. Yang ada adalah
							eksplorasi, permainan, praktik, dan umpan balik yang membangun.
						</p>
					</div>
				</section>

				{/* CTA */}
				<section className="text-center">
					<p className="text-sm font-medium text-foreground">
						Ingin melihat metode ini dalam praktik?
					</p>
					<p className="mt-1 text-sm text-muted-foreground">
						Daftarkan diri ke program kami dan rasakan langsung perbedaannya.
					</p>
					<a
						href={waUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-opacity duration-150 active:scale-[0.97] hover:opacity-90"
					>
						Daftar Sekarang
					</a>
				</section>
			</div>
		</>
	);
}
