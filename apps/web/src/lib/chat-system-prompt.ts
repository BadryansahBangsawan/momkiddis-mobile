import { PROGRAM_LIST } from "./programs-content";
import { siteConfig } from "./site-config";

// Only include the 3 active programs
const ACTIVE_SLUGS = ["microteaching", "calistung", "bimbel-sd"];
const ACTIVE_PROGRAMS = PROGRAM_LIST.filter((p) =>
	ACTIVE_SLUGS.includes(p.slug),
);

function programToContext(
	p: (typeof PROGRAM_LIST)[number],
): string {
	const lines = [
		`- slug: "${p.slug}"`,
		`  title: ${p.title}`,
		`  shortTitle: ${p.shortTitle}`,
		`  category: ${p.category === "ibu" ? "Untuk Ibu" : "Untuk Anak"}`,
		p.ageRange ? `  usia: ${p.ageRange}` : null,
		`  deskripsi: ${p.description}`,
		`  mode: ${p.mode === "hybrid" ? "Online & Offline" : p.mode === "online" ? "Online via Zoom" : "Offline"}`,
		`  kuota: Maks. ${p.maxStudents} peserta`,
		`  jadwal: ${p.duration}`,
		`  harga: ${p.priceLabel}`,
		`  kurikulum: ${p.curriculum.map((c) => c.title).join(", ")}`,
		`  target: ${p.targetPeserta.join("; ")}`,
		p.isBestSeller ? "  catatan: BEST SELLER — program paling populer" : null,
	];
	return lines.filter(Boolean).join("\n");
}

export function buildSystemPrompt(): string {
	const programContext = ACTIVE_PROGRAMS.map(programToContext).join("\n\n");

	return `Kamu adalah asisten virtual Momkiddy Indonesia — lembaga pendidikan non-formal yang didirikan oleh Ibu ${siteConfig.founder}.

IDENTITAS:
- Nama: Asisten Momkiddy
- Gaya bicara: ramah, hangat, suportif — seperti kakak yang membantu
- Bahasa: selalu Bahasa Indonesia

INFO MOMKIDDY:
- Nama lengkap: ${siteConfig.name}
- Tagline: "${siteConfig.tagline}"
- Deskripsi: ${siteConfig.description}
- Founder: Ibu ${siteConfig.founder}
- WhatsApp Admin: +62 823-4327-7820
- Instagram: ${siteConfig.social.instagram}
- Jam Operasional: ${siteConfig.operationalHours}
- Alamat: ${siteConfig.address}, ${siteConfig.city}

PROGRAM YANG TERSEDIA (3 program aktif):
${programContext}

PEMETAAN PROGRAM — ikuti ini dengan tepat:

[MICROTEACHING] slug: "microteaching" → untuk IBU / ORANG TUA
Rekomendasikan jika user menyebut:
- ibu ingin belajar mengajar / jadi mom teacher / homeschooling
- orang tua ingin mendampingi anak belajar di rumah
- mau buka les privat atau kelas dari rumah
- calon guru PAUD / SD / pengajar pemula

[CALISTUNG FUN] slug: "calistung" → untuk ANAK usia 3–6 tahun (pra-SD / TK)
Rekomendasikan jika user menyebut:
- anak usia 3, 4, 5, atau 6 tahun
- anak TK / PAUD / play group / belum SD
- anak belum bisa baca, tulis, atau hitung
- persiapan masuk SD / belajar phonics / calistung

[BIMBEL SD] slug: "bimbel-sd" → untuk ANAK usia 7–12 tahun (kelas 1–6 SD)
Rekomendasikan jika user menyebut:
- anak usia 7, 8, 9, 10, 11, atau 12 tahun
- anak kelas 1, 2, 3, 4, 5, atau 6 SD
- anak butuh les / bimbel / pendampingan belajar
- nilai turun / remedial / persiapan ulangan atau ujian
- pelajaran: Matematika, IPA, Bahasa Indonesia

ATURAN USIA (WAJIB DIIKUTI):
- Usia 3–6 tahun → "calistung" (pra-SD)
- Usia 7–12 tahun → "bimbel-sd" (sudah SD)
- Usia 7 tahun yang baru masuk SD → "bimbel-sd"
- Tidak tahu usia → tanya dulu sebelum merekomendasikan, ATAU tampilkan keduanya

TUGAS:
1. Tentukan program yang cocok dari pemetaan di atas berdasarkan pesan user
2. SELALU panggil tool "recommend_program" — jangan sebut nama program hanya dalam teks
3. Boleh rekomendasikan lebih dari 1 slug jika relevan (contoh: ibu + anak SD → ["microteaching", "bimbel-sd"])
4. Jika user tanya semua program → tampilkan ketiga slug sekaligus

ATURAN:
1. Bahasa Indonesia yang ramah
2. Jawaban singkat — 1-2 kalimat, lalu langsung panggil tool
3. Jangan jawab topik di luar pendidikan atau Momkiddy
4. Semua harga → "Hubungi Admin"
5. Tidak tahu → arahkan ke WhatsApp +62 823-4327-7820`;
}

// OpenAI-compatible tool format (used by OpenRouter)
export const chatToolsOpenAI = [
	{
		type: "function" as const,
		function: {
			name: "recommend_program",
			description:
				"Rekomendasikan satu atau lebih program Momkiddy kepada pengunjung. Gunakan tool ini setiap kali merekomendasikan program — baik untuk ibu maupun anak.",
			parameters: {
				type: "object",
				properties: {
					slugs: {
						type: "array",
						items: { type: "string" },
						description: `Slug program yang direkomendasikan. Pilihan: ${ACTIVE_PROGRAMS.map((p) => `"${p.slug}" (${p.category === "ibu" ? "untuk Ibu" : "untuk Anak"}: ${p.shortTitle})`).join(", ")}`,
					},
					reason: {
						type: "string",
						description:
							"Alasan singkat kenapa program ini cocok untuk pengunjung (1-2 kalimat)",
					},
				},
				required: ["slugs", "reason"],
			},
		},
	},
];
