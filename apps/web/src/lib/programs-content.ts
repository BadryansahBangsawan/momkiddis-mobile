export interface ProgramCurriculumItem {
	title: string;
	description: string;
}

export interface ProgramPricePackage {
	label: string;
	price: string;
}

export type ProgramCategory = "speaking" | "test-prep" | "private";

export interface Program {
	slug: string;
	title: string;
	shortTitle: string;
	subtitle: string;
	description: string;
	category: ProgramCategory;
	targetLabel: string;
	ageRange: string | null;
	isBestSeller: boolean;
	icon: string;
	color: string;
	image: string | null;
	maxStudents: number | null;
	mode: "online";
	formatLabel: string;
	level: string;
	curriculum: ProgramCurriculumItem[];
	outcomes: string[];
	targetPeserta: string[];
	priceLabel: string;
	pricePackages: ProgramPricePackage[];
	duration: string;
	note?: string;
}

export const PROGRAM_CATEGORY_LABELS: Record<ProgramCategory, string> = {
	speaking: "Speaking",
	"test-prep": "Test Prep",
	private: "Private",
};

export const PROGRAM_FORMAT = "Online Class via Zoom / Google Meet";
export const PROGRAM_DURATION = "90 menit per pertemuan";
export const PROGRAM_LEVEL = "Mulai dari Basic";

export const PROGRAM_BONUSES = [
	"Konsultasi belajar",
	"Progress report",
	"E-certificate",
	"Group support",
	"Scholarship sharing",
] as const;

export const CLASS_SCHEDULES = [
	{ session: "Morning Class", time: "08.00 - 09.30 WIB" },
	{ session: "Afternoon Class", time: "13.30 - 15.00 WIB" },
	{ session: "Evening Class", time: "19.30 - 21.00 WIB" },
] as const;

const COMMON_OUTCOMES = [
	"Belajar online dengan jadwal yang fleksibel",
	"Mendapat materi dari level basic",
	"Mendapat progress report dan e-certificate",
	"Bisa konsultasi arah belajar dengan mentor",
];

export const PROGRAMS: Record<string, Program> = {
	"english-speaking-basic": {
		slug: "english-speaking-basic",
		title: "English Speaking Basic",
		shortTitle: "English Speaking Basic",
		subtitle: "Untuk pemula yang ingin mulai berani speaking dari nol",
		description:
			"Kelas basic untuk perempuan yang ingin membangun keberanian berbicara bahasa Inggris dari nol, mulai dari percakapan harian sampai self introduction.",
		category: "speaking",
		targetLabel: "Pemula speaking dari nol",
		ageRange: null,
		isBestSeller: true,
		icon: "MessageCircle",
		color: "blue",
		image: null,
		maxStudents: null,
		mode: "online",
		formatLabel: PROGRAM_FORMAT,
		level: PROGRAM_LEVEL,
		curriculum: [
			{
				title: "Daily conversation",
				description:
					"Latihan percakapan harian agar peserta mulai terbiasa memakai bahasa Inggris dalam situasi sederhana.",
			},
			{
				title: "Pronunciation & vocabulary",
				description:
					"Perbaikan pengucapan dan penambahan kosakata basic yang sering dipakai.",
			},
			{
				title: "Thinking in English",
				description:
					"Latihan menyusun kalimat tanpa terlalu banyak menerjemahkan dari bahasa Indonesia.",
			},
			{
				title: "Self introduction",
				description:
					"Latihan memperkenalkan diri dengan jelas, natural, dan percaya diri.",
			},
			{
				title: "Confidence speaking",
				description:
					"Latihan keberanian bicara agar peserta tidak takut salah saat speaking.",
			},
		],
		outcomes: [
			"Berani mulai berbicara bahasa Inggris dari nol",
			"Menguasai percakapan harian basic",
			"Lebih percaya diri memperkenalkan diri",
			...COMMON_OUTCOMES,
		],
		targetPeserta: [
			"Ibu rumah tangga",
			"Mahasiswi",
			"Pemula level basic",
		],
		priceLabel: "Mulai Rp399.000",
		pricePackages: [
			{ label: "4x pertemuan", price: "Rp399.000" },
			{ label: "8x pertemuan", price: "Rp749.000" },
			{ label: "12x pertemuan", price: "Rp1.050.000" },
		],
		duration: PROGRAM_DURATION,
	},
	"english-conversation": {
		slug: "english-conversation",
		title: "English Conversation Class",
		shortTitle: "English Conversation",
		subtitle: "Untuk peserta yang ingin aktif dan lancar berbicara",
		description:
			"Kelas conversation untuk perempuan yang ingin lebih aktif, lancar, dan natural saat berbicara bahasa Inggris.",
		category: "speaking",
		targetLabel: "Speaking aktif dan lancar",
		ageRange: null,
		isBestSeller: false,
		icon: "Globe",
		color: "green",
		image: null,
		maxStudents: null,
		mode: "online",
		formatLabel: PROGRAM_FORMAT,
		level: PROGRAM_LEVEL,
		curriculum: [
			{
				title: "Conversation practice",
				description:
					"Latihan percakapan aktif dengan topik yang dekat dengan kebutuhan sehari-hari.",
			},
			{
				title: "Pronunciation correction",
				description:
					"Koreksi pengucapan agar speaking terdengar lebih jelas dan percaya diri.",
			},
			{
				title: "Discussion & roleplay",
				description:
					"Diskusi dan roleplay untuk membiasakan peserta merespons dalam percakapan nyata.",
			},
			{
				title: "Public speaking basic",
				description:
					"Fondasi berbicara di depan orang lain menggunakan bahasa Inggris sederhana.",
			},
			{
				title: "Fluency training",
				description:
					"Latihan kelancaran agar peserta tidak terlalu sering berhenti saat berbicara.",
			},
		],
		outcomes: [
			"Lebih aktif dalam percakapan bahasa Inggris",
			"Pengucapan lebih jelas dan terarah",
			"Lebih lancar berdiskusi dan roleplay",
			...COMMON_OUTCOMES,
		],
		targetPeserta: [
			"Ibu",
			"Mahasiswi",
			"Pekerja",
			"Peserta yang ingin lebih lancar berbicara",
		],
		priceLabel: "Mulai Rp450.000",
		pricePackages: [
			{ label: "4x pertemuan", price: "Rp450.000" },
			{ label: "8x pertemuan", price: "Rp850.000" },
			{ label: "12x pertemuan", price: "Rp1.250.000" },
		],
		duration: PROGRAM_DURATION,
	},
	"ielts-preparation": {
		slug: "ielts-preparation",
		title: "IELTS Preparation Class",
		shortTitle: "IELTS Preparation",
		subtitle: "Persiapan IELTS Academic & General",
		description:
			"Kelas persiapan IELTS untuk kebutuhan kuliah, kerja, scholarship, dan migrasi dengan fokus pada strategi setiap section.",
		category: "test-prep",
		targetLabel: "IELTS Academic & General",
		ageRange: null,
		isBestSeller: false,
		icon: "GraduationCap",
		color: "purple",
		image: null,
		maxStudents: null,
		mode: "online",
		formatLabel: PROGRAM_FORMAT,
		level: PROGRAM_LEVEL,
		curriculum: [
			{
				title: "IELTS Speaking",
				description:
					"Latihan menjawab pertanyaan speaking dengan struktur yang jelas dan natural.",
			},
			{
				title: "Writing Task 1 & 2",
				description:
					"Strategi menulis jawaban IELTS untuk Task 1 dan Task 2 sesuai format.",
			},
			{
				title: "Listening strategies",
				description:
					"Teknik memahami audio dan menangkap informasi penting saat listening.",
			},
			{
				title: "Reading techniques",
				description:
					"Teknik membaca cepat, menemukan jawaban, dan mengelola waktu reading.",
			},
			{
				title: "Vocabulary for IELTS",
				description:
					"Penguatan kosakata akademik yang sering dipakai dalam tes IELTS.",
			},
		],
		outcomes: [
			"Memahami format IELTS Academic dan General",
			"Menguasai strategi speaking, writing, listening, dan reading",
			"Lebih siap untuk kebutuhan kuliah, kerja, scholarship, atau migrasi",
			...COMMON_OUTCOMES,
		],
		targetPeserta: [
			"Persiapan kuliah",
			"Persiapan kerja",
			"Pemburu scholarship",
			"Persiapan migrasi",
		],
		priceLabel: "Mulai Rp650.000",
		pricePackages: [
			{ label: "4x pertemuan", price: "Rp650.000" },
			{ label: "8x pertemuan", price: "Rp1.250.000" },
			{ label: "12x pertemuan", price: "Rp1.850.000" },
		],
		duration: PROGRAM_DURATION,
	},
	"toefl-preparation": {
		slug: "toefl-preparation",
		title: "TOEFL Preparation",
		shortTitle: "TOEFL Preparation",
		subtitle: "Untuk kebutuhan kampus, scholarship, kerja, dan CPNS",
		description:
			"Kelas persiapan TOEFL untuk kebutuhan akademik dan profesional, dari structure hingga prediction test.",
		category: "test-prep",
		targetLabel: "Kampus, scholarship, kerja, CPNS",
		ageRange: null,
		isBestSeller: false,
		icon: "FileText",
		color: "orange",
		image: null,
		maxStudents: null,
		mode: "online",
		formatLabel: PROGRAM_FORMAT,
		level: PROGRAM_LEVEL,
		curriculum: [
			{
				title: "Structure & grammar",
				description:
					"Pembahasan struktur kalimat dan grammar yang sering muncul dalam TOEFL.",
			},
			{
				title: "Listening TOEFL",
				description:
					"Latihan listening untuk memahami percakapan dan monolog dalam format TOEFL.",
			},
			{
				title: "Reading comprehension",
				description:
					"Teknik memahami bacaan dan menjawab soal reading dengan lebih efektif.",
			},
			{
				title: "Prediction test",
				description:
					"Simulasi dan pembahasan soal untuk mengukur kesiapan peserta.",
			},
			{
				title: "Tips & strategies",
				description:
					"Strategi pengerjaan soal, manajemen waktu, dan cara menghindari jebakan umum.",
			},
		],
		outcomes: [
			"Lebih siap menghadapi TOEFL untuk kampus atau kerja",
			"Memahami grammar, listening, dan reading TOEFL",
			"Mendapat strategi pengerjaan dan prediction test",
			...COMMON_OUTCOMES,
		],
		targetPeserta: [
			"Mahasiswa",
			"Pekerja",
			"CPNS",
			"Pemburu beasiswa",
		],
		priceLabel: "Mulai Rp550.000",
		pricePackages: [
			{ label: "4x pertemuan", price: "Rp550.000" },
			{ label: "8x pertemuan", price: "Rp1.050.000" },
			{ label: "12x pertemuan", price: "Rp1.550.000" },
		],
		duration: PROGRAM_DURATION,
	},
	"private-english-1-on-1": {
		slug: "private-english-1-on-1",
		title: "Private English Class 1 on 1",
		shortTitle: "Private English 1 on 1",
		subtitle: "Belajar lebih fokus sesuai kebutuhan pribadi",
		description:
			"Kelas private 1 on 1 yang 100% personal, materi fleksibel, dan dirancang agar progress peserta lebih cepat.",
		category: "private",
		targetLabel: "Belajar personal dan fleksibel",
		ageRange: null,
		isBestSeller: false,
		icon: "UserRound",
		color: "pink",
		image: null,
		maxStudents: 1,
		mode: "online",
		formatLabel: PROGRAM_FORMAT,
		level: PROGRAM_LEVEL,
		curriculum: [
			{
				title: "Speaking",
				description:
					"Materi speaking bisa disesuaikan dengan kebutuhan dan level peserta.",
			},
			{
				title: "IELTS",
				description:
					"Pendampingan personal untuk target IELTS tertentu.",
			},
			{
				title: "TOEFL",
				description:
					"Pendampingan personal untuk kebutuhan TOEFL kampus, kerja, atau beasiswa.",
			},
			{
				title: "Pronunciation",
				description:
					"Koreksi pengucapan secara detail karena sesi berlangsung 1 on 1.",
			},
			{
				title: "Interview",
				description:
					"Latihan interview bahasa Inggris sesuai kebutuhan peserta.",
			},
			{
				title: "Presentation",
				description:
					"Latihan presentasi bahasa Inggris untuk studi, kerja, atau acara profesional.",
			},
		],
		outcomes: [
			"Belajar 100% personal sesuai kebutuhan pribadi",
			"Materi fleksibel dan bisa request",
			"Progress lebih cepat karena fokus 1 on 1",
			...COMMON_OUTCOMES,
		],
		targetPeserta: [
			"Peserta yang butuh kelas personal",
			"Peserta dengan target IELTS atau TOEFL khusus",
			"Peserta yang ingin latihan interview atau presentation",
		],
		priceLabel: "Mulai Rp850.000",
		pricePackages: [
			{ label: "4x pertemuan", price: "Rp850.000" },
			{ label: "8x pertemuan", price: "Rp1.650.000" },
			{ label: "12x pertemuan", price: "Rp2.350.000" },
		],
		duration: PROGRAM_DURATION,
		note: "100% personal, materi fleksibel, progress lebih cepat.",
	},
} as const;

export const PROGRAM_LIST = Object.values(PROGRAMS);
export const SPEAKING_PROGRAMS = PROGRAM_LIST.filter(
	(p) => p.category === "speaking",
);
export const TEST_PREP_PROGRAMS = PROGRAM_LIST.filter(
	(p) => p.category === "test-prep",
);
export const PRIVATE_PROGRAMS = PROGRAM_LIST.filter(
	(p) => p.category === "private",
);

export const KEUNGGULAN = [
	{
		icon: "Monitor",
		title: "Online via Zoom / Google Meet",
		description:
			"Semua kelas berlangsung online sehingga bisa diikuti dari rumah, kampus, atau tempat kerja.",
	},
	{
		icon: "Clock",
		title: "90 Menit Per Pertemuan",
		description:
			"Durasi kelas cukup fokus untuk latihan, koreksi, diskusi, dan tanya jawab.",
	},
	{
		icon: "Target",
		title: "Mulai dari Basic",
		description:
			"Peserta pemula bisa mulai dari fondasi dasar sebelum masuk ke target speaking atau test prep.",
	},
	{
		icon: "Heart",
		title: "Khusus Perempuan",
		description:
			"Ruang belajar dibuat nyaman untuk ibu rumah tangga, mahasiswi, pekerja, dan peserta perempuan lainnya.",
	},
	{
		icon: "Award",
		title: "Bonus Free",
		description:
			"Peserta mendapatkan konsultasi belajar, progress report, e-certificate, group support, dan scholarship sharing.",
	},
] as const;

export const CARA_KERJA = [
	{
		step: "01",
		title: "Pilih Kelas",
		description:
			"Pilih kelas speaking, test preparation, atau private sesuai kebutuhan.",
	},
	{
		step: "02",
		title: "Pilih Paket",
		description: "Tentukan paket 4x, 8x, atau 12x pertemuan.",
	},
	{
		step: "03",
		title: "Atur Jadwal",
		description:
			"Pilih sesi morning, afternoon, atau evening class sesuai aktivitasmu.",
	},
	{
		step: "04",
		title: "Mulai Online Class",
		description:
			"Ikuti kelas via Zoom atau Google Meet dan pantau progress belajarmu.",
	},
] as const;

export const STATIC_TESTIMONIALS = [
	{
		id: "1",
		authorName: "Nadia",
		authorRole: "English Speaking Basic",
		programSlug: "english-speaking-basic",
		content:
			"Saya mulai dari nol dan akhirnya berani memperkenalkan diri dalam bahasa Inggris tanpa terlalu takut salah.",
		rating: 5,
	},
	{
		id: "2",
		authorName: "Rani",
		authorRole: "English Conversation Class",
		programSlug: "english-conversation",
		content:
			"Latihan roleplay dan pronunciation correction membantu saya lebih lancar ngobrol di kantor.",
		rating: 5,
	},
	{
		id: "3",
		authorName: "Aulia",
		authorRole: "IELTS Preparation",
		programSlug: "ielts-preparation",
		content:
			"Strategi writing dan speaking-nya jelas. Saya jadi tahu bagian mana yang harus diperbaiki.",
		rating: 5,
	},
] as const;

export const STATIC_ALUMNI = [
	{
		id: "1",
		name: "Fitri",
		batchLabel: "Women Future 2026",
		programSlug: "english-speaking-basic",
		shortStory:
			"Mulai dari basic dan sekarang lebih percaya diri berbicara saat bertemu orang baru.",
	},
	{
		id: "2",
		name: "Maya",
		batchLabel: "Women Future 2026",
		programSlug: "toefl-preparation",
		shortStory:
			"Mengikuti TOEFL preparation untuk kebutuhan kampus dan beasiswa.",
	},
	{
		id: "3",
		name: "Dinda",
		batchLabel: "Women Future 2026",
		programSlug: "private-english-1-on-1",
		shortStory:
			"Mengambil kelas private untuk persiapan interview dan presentation.",
	},
] as const;
