import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/sections/page-hero";
import { getWhatsAppUrl } from "@/lib/site-config";
import {
	BookOpen,
	FileText,
	MessageSquare,
	Mic,
	Target,
	UserRound,
} from "lucide-react";

const METODE = [
	{
		icon: MessageSquare,
		color: "bg-teal-50 text-teal-700",
		title: "Conversation Practice",
		subtitle: "Latihan bicara aktif",
		desc: "Peserta dilatih berbicara lewat topik harian, diskusi, roleplay, dan tanya jawab agar speaking terasa lebih natural.",
		applies: ["Speaking Basic", "Conversation Class"],
	},
	{
		icon: Mic,
		color: "bg-emerald-50 text-emerald-700",
		title: "Pronunciation Correction",
		subtitle: "Koreksi pengucapan",
		desc: "Mentor membantu memperbaiki pronunciation, intonation, dan clarity agar peserta lebih percaya diri saat berbicara.",
		applies: ["Speaking", "Conversation", "Private"],
	},
	{
		icon: Target,
		color: "bg-violet-50 text-violet-700",
		title: "Fluency Training",
		subtitle: "Melatih kelancaran",
		desc: "Latihan dilakukan bertahap supaya peserta tidak terlalu lama menerjemahkan di kepala dan bisa merespons lebih cepat.",
		applies: ["Speaking Basic", "Conversation Class"],
	},
	{
		icon: BookOpen,
		color: "bg-orange-50 text-orange-700",
		title: "IELTS Strategy",
		subtitle: "Academic & General",
		desc: "Peserta belajar strategi speaking, writing, listening, reading, dan vocabulary yang relevan untuk target IELTS.",
		applies: ["IELTS Preparation"],
	},
	{
		icon: FileText,
		color: "bg-amber-50 text-amber-700",
		title: "TOEFL Strategy",
		subtitle: "Structure, listening, reading",
		desc: "Pembelajaran fokus pada grammar structure, listening TOEFL, reading comprehension, prediction test, dan strategi waktu.",
		applies: ["TOEFL Preparation"],
	},
	{
		icon: UserRound,
		color: "bg-rose-50 text-rose-700",
		title: "Personal Mentoring",
		subtitle: "Materi bisa request",
		desc: "Untuk kelas private, materi disesuaikan dengan kebutuhan peserta seperti interview, presentation, IELTS, TOEFL, atau pronunciation.",
		applies: ["Private English 1 on 1"],
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
				title="Metode Belajar Women Future"
				subtitle="Pendekatan kelas online yang fokus pada praktik, koreksi, strategi, dan progress belajar."
				breadcrumbs={[{ label: "Metode Belajar" }]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<section>
					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{METODE.map((m, i) => (
							<div
								key={m.title}
								className="rounded-xl border border-border bg-card p-5"
								style={{ animationDelay: `${i * 60}ms` }}
							>
								<div
									className={`mb-4 inline-flex rounded-xl p-2.5 ${m.color.split(" ")[0]}`}
								>
									<m.icon className={`size-5 ${m.color.split(" ")[1]}`} />
								</div>
								<p className="text-sm font-semibold text-foreground">
									{m.title}
								</p>
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

				<section className="mt-16 rounded-2xl border border-border bg-muted/30 p-8">
					<div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
						<h2 className="text-xl font-bold text-foreground">
							Filosofi Pembelajaran
						</h2>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Women Future mengutamakan latihan langsung, koreksi yang jelas,
							dan materi yang bisa dipakai dalam kebutuhan nyata: berbicara
							sehari-hari, kerja, kampus, IELTS, TOEFL, interview, dan
							presentation.
						</p>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Setiap kelas berdurasi 90 menit agar peserta punya cukup waktu
							untuk praktik, menerima feedback, dan memahami langkah belajar
							berikutnya.
						</p>
					</div>
				</section>

				<section className="mt-16 text-center">
					<p className="text-sm font-medium text-foreground">
						Ingin tahu metode mana yang cocok untuk targetmu?
					</p>
					<p className="mt-1 text-sm text-muted-foreground">
						Konsultasikan kebutuhan speaking, IELTS, TOEFL, atau private class
						dengan admin.
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
