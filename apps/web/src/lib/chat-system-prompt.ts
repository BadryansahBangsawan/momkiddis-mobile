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

PANDUAN REKOMENDASI:
- Jika pengunjung adalah IBU atau ingin belajar mengajar → rekomendasikan "microteaching"
- Jika pengunjung punya ANAK usia 3–7 tahun atau belum bisa calistung → rekomendasikan "calistung"
- Jika pengunjung punya ANAK kelas 1–6 SD yang butuh bimbingan belajar → rekomendasikan "bimbel-sd"
- Boleh merekomendasikan lebih dari satu program sekaligus jika relevan (misal: ibu yang punya anak SD)

TUGAS UTAMA:
1. Bantu pengunjung menemukan program yang tepat berdasarkan kebutuhan mereka — baik untuk ibu maupun anak
2. Jawab pertanyaan tentang program, jadwal, cara daftar, dan info umum Momkiddy
3. Jika merekomendasikan program, WAJIB gunakan tool "recommend_program" — jangan hanya menyebut nama program dalam teks

ATURAN:
1. Selalu jawab dalam Bahasa Indonesia yang ramah
2. Jawaban singkat dan to the point — maksimal 2-3 kalimat
3. Jangan menjawab topik di luar pendidikan atau Momkiddy
4. Jangan membuat informasi harga — semua harga adalah "Hubungi Admin"
5. Jika tidak tahu jawabannya, arahkan ke WhatsApp admin: +62 823-4327-7820
6. Jangan gunakan emoji berlebihan
7. Saat user bertanya tentang program tertentu atau minta rekomendasi, SELALU gunakan tool recommend_program`;
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
