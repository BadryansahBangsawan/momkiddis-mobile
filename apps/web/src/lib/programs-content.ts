export interface ProgramCurriculumItem {
	title: string;
	description: string;
}

export interface ProgramPricePackage {
	label: string;
	price: string;
}

export type ProgramCategory =
	| "ibu"
	| "anak"
	| "remaja"
	| "professional"
	| "test-prep";

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
	landscapeImage: string;
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
	ibu: "Kelas Pengajar Ibu",
	anak: "Kelas Anak",
	remaja: "Kelas Remaja",
	professional: "Kelas Profesional",
	"test-prep": "English Test Class",
};

export const PROGRAM_FORMAT = "Kelas sesuai jadwal program";
export const PROGRAM_DURATION = "Sesuai jadwal program";
export const PROGRAM_LEVEL = "Terbuka sesuai kategori peserta";

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

export const PROGRAMS: Record<string, Program> = {
	"momsky-class": {
		slug: "momsky-class",
		title: "Momsky Class",
		shortTitle: "Momsky Class",
		subtitle:
			"Belajar mengajar anak dengan metode yang mudah, fun, dan terarah.",
		description:
			"Belajar mengajar anak dengan metode yang mudah, fun, dan terarah.",
		category: "ibu",
		targetLabel:
			"Program untuk ibu yang ingin percaya diri mengajar anak di rumah.",
		ageRange: null,
		isBestSeller: true,
		icon: "GraduationCap",
		color: "blue",
		image: "/program/vertical/Momsky-class.png",
		landscapeImage: "/program/lanscape/momsky-lanscape.png",
		maxStudents: null,
		mode: "online",
		formatLabel: "Kelas pengajar untuk para ibu",
		level: "Untuk Ibu",
		curriculum: [
			{
				title: "Microteaching untuk para ibu",
				description:
					"Latihan teknik mengajar anak secara sederhana dan terarah.",
			},
			{
				title: "Calistung & teknik mengajar simpel",
				description:
					"Belajar menyampaikan materi baca, tulis, dan hitung dengan cara yang mudah dipahami.",
			},
			{
				title: "Mentoring praktik bersama mentor",
				description:
					"Praktik mengajar dan evaluasi langsung bersama mentor.",
			},
		],
		outcomes: [
			"Lebih percaya diri mengajar anak di rumah",
			"Mampu menerapkan teknik mengajar yang simpel",
			"Mendapat arahan praktik dari mentor",
		],
		targetPeserta: [
			"Ibu yang ingin percaya diri mengajar anak di rumah",
			"Ibu yang ingin belajar microteaching",
			"Ibu yang ingin mendampingi calistung anak",
		],
		priceLabel: "Hubungi Admin",
		pricePackages: [{ label: "Informasi biaya", price: "Hubungi Admin" }],
		duration: PROGRAM_DURATION,
		note:
			"Program untuk ibu yang ingin percaya diri mengajar anak di rumah.",
	},
	"kiddis-class": {
		slug: "kiddis-class",
		title: "Kiddis Class",
		shortTitle: "Kiddis Class",
		subtitle:
			"Belajar seru untuk anak dengan metode yang aktif, fun, dan kreatif.",
		description:
			"Belajar seru untuk anak dengan metode yang aktif, fun, dan kreatif.",
		category: "anak",
		targetLabel: "Program belajar seru untuk anak usia dini hingga SD.",
		ageRange: "Usia dini hingga SD",
		isBestSeller: false,
		icon: "BookOpen",
		color: "green",
		image: "/program/vertical/kiddis-class.png",
		landscapeImage: "/program/lanscape/kiddis-lanscape.png",
		maxStudents: null,
		mode: "online",
		formatLabel: "Kelas belajar untuk anak",
		level: "Usia Dini - SD",
		curriculum: [
			{
				title: "Calistung Fun",
				description: "Baca, tulis, dan hitung dengan metode menyenangkan.",
			},
			{
				title: "Bimbel SD",
				description: "Pembelajaran tematik untuk kelas 1-6 SD.",
			},
			{
				title: "English Fun",
				description:
					"Latihan speaking dan listening melalui aktivitas kreatif.",
			},
		],
		outcomes: [
			"Belajar baca, tulis, dan hitung dengan menyenangkan",
			"Mendapat pendampingan pelajaran tematik SD",
			"Berlatih speaking dan listening bahasa Inggris",
		],
		targetPeserta: [
			"Anak usia dini",
			"Anak kelas 1-6 SD",
			"Anak yang ingin belajar aktif dan kreatif",
		],
		priceLabel: "Hubungi Admin",
		pricePackages: [{ label: "Informasi biaya", price: "Hubungi Admin" }],
		duration: PROGRAM_DURATION,
		note: "Program belajar seru untuk anak usia dini hingga SD.",
	},
	"teenager-class": {
		slug: "teenager-class",
		title: "Teenager Class",
		shortTitle: "Teenager Class",
		subtitle:
			"Belajar untuk remaja dengan metode yang aktif, percaya diri, dan terarah.",
		description:
			"Belajar untuk remaja dengan metode yang aktif, percaya diri, dan terarah.",
		category: "remaja",
		targetLabel:
			"Program remaja untuk tumbuh percaya diri dan siap berprestasi.",
		ageRange: "Remaja",
		isBestSeller: false,
		icon: "MessageCircle",
		color: "pink",
		image: "/program/vertical/teenager-class.png",
		landscapeImage: "/program/lanscape/teenager-lanscap.png",
		maxStudents: null,
		mode: "online",
		formatLabel: "Kelas pengembangan untuk remaja",
		level: "Remaja",
		curriculum: [
			{
				title: "English & komunikasi",
				description:
					"Latihan speaking agar remaja lebih percaya diri berkomunikasi.",
			},
			{
				title: "Belajar efektif",
				description:
					"Latihan mengatur fokus, target, dan penyelesaian tugas.",
			},
			{
				title: "Public speaking",
				description:
					"Latihan presentasi dan ekspresi di depan orang lain.",
			},
		],
		outcomes: [
			"Lebih percaya diri berkomunikasi",
			"Belajar lebih fokus dan terarah",
			"Lebih siap melakukan presentasi",
		],
		targetPeserta: [
			"Remaja yang ingin lebih percaya diri",
			"Remaja yang ingin belajar lebih efektif",
			"Remaja yang ingin berlatih public speaking",
		],
		priceLabel: "Hubungi Admin",
		pricePackages: [{ label: "Informasi biaya", price: "Hubungi Admin" }],
		duration: PROGRAM_DURATION,
		note:
			"Program remaja untuk tumbuh percaya diri dan siap berprestasi.",
	},
	"professional-class": {
		slug: "professional-class",
		title: "Professional Class",
		shortTitle: "Professional Class",
		subtitle:
			"Upgrade skill mengajar dan komunikasi dengan metode yang praktis, rapi, dan aplikatif.",
		description:
			"Upgrade skill mengajar dan komunikasi dengan metode yang praktis, rapi, dan aplikatif.",
		category: "professional",
		targetLabel:
			"Program untuk meningkatkan kompetensi dan kepercayaan diri profesional.",
		ageRange: null,
		isBestSeller: false,
		icon: "UserRound",
		color: "orange",
		image: "/program/vertical/profesional-class.png",
		landscapeImage: "/program/lanscape/profesional-lanscap.png",
		maxStudents: null,
		mode: "online",
		formatLabel: "Kelas pengembangan profesional",
		level: "Profesional",
		curriculum: [
			{
				title: "Microteaching lanjut",
				description: "Strategi mengajar yang praktis dan aplikatif.",
			},
			{
				title: "Komunikasi profesional",
				description:
					"Latihan presentasi dan delivery yang rapi serta percaya diri.",
			},
			{
				title: "Mentoring skill",
				description:
					"Praktik keterampilan dan evaluasi bersama mentor.",
			},
		],
		outcomes: [
			"Meningkatkan strategi mengajar",
			"Meningkatkan kemampuan komunikasi profesional",
			"Mendapat praktik dan evaluasi keterampilan",
		],
		targetPeserta: [
			"Pengajar yang ingin meningkatkan kompetensi",
			"Profesional yang ingin meningkatkan komunikasi",
			"Peserta yang membutuhkan mentoring skill",
		],
		priceLabel: "Hubungi Admin",
		pricePackages: [{ label: "Informasi biaya", price: "Hubungi Admin" }],
		duration: PROGRAM_DURATION,
		note:
			"Program untuk meningkatkan kompetensi dan kepercayaan diri profesional.",
	},
	"ielts-toefl-class": {
		slug: "ielts-toefl-class",
		title: "IELTS & TOEFL Class",
		shortTitle: "IELTS & TOEFL Class",
		subtitle:
			"Persiapan tes bahasa Inggris dengan metode yang fokus, sistematis, dan terarah.",
		description:
			"Persiapan tes bahasa Inggris dengan metode yang fokus, sistematis, dan terarah.",
		category: "test-prep",
		targetLabel:
			"Program persiapan English test untuk target studi dan karier.",
		ageRange: null,
		isBestSeller: false,
		icon: "FileText",
		color: "purple",
		image: "/program/vertical/ielts&toefl-class%20.png",
		landscapeImage: "/program/lanscape/toefl&ielts-lanscape.png",
		maxStudents: null,
		mode: "online",
		formatLabel: "Kelas persiapan English test",
		level: "Studi & Karier",
		curriculum: [
			{
				title: "Listening & Reading",
				description:
					"Latihan intensif untuk meningkatkan pemahaman listening dan reading.",
			},
			{
				title: "Speaking & Writing",
				description:
					"Strategi menyusun jawaban speaking dan writing.",
			},
			{
				title: "Test Practice",
				description:
					"Simulasi tes dan evaluasi untuk mengukur kesiapan peserta.",
			},
		],
		outcomes: [
			"Lebih siap menghadapi IELTS maupun TOEFL",
			"Menguasai strategi listening, reading, speaking, dan writing",
			"Mendapat latihan simulasi dan evaluasi tes",
		],
		targetPeserta: [
			"Pelajar dengan target studi",
			"Profesional dengan target karier",
			"Peserta yang mempersiapkan IELTS atau TOEFL",
		],
		priceLabel: "Hubungi Admin",
		pricePackages: [{ label: "Informasi biaya", price: "Hubungi Admin" }],
		duration: PROGRAM_DURATION,
		note:
			"Program persiapan English test untuk target studi dan karier.",
	},
} as const;

export const PROGRAM_LIST = Object.values(PROGRAMS);

export const KEUNGGULAN = [
	{
		icon: "Heart",
		title: "Belajar Sesuai Tahap",
		description:
			"Program disusun sesuai kebutuhan ibu, anak, remaja, profesional, dan peserta English test.",
	},
	{
		icon: "Target",
		title: "Materi Terarah",
		description:
			"Setiap kelas memiliki fokus, target, dan praktik yang jelas sesuai kategori peserta.",
	},
	{
		icon: "Monitor",
		title: "Metode Aktif",
		description:
			"Pembelajaran menggunakan metode aktif, fun, praktis, dan mudah diterapkan.",
	},
	{
		icon: "Clock",
		title: "Jadwal Fleksibel",
		description:
			"Jadwal kelas dapat dikonsultasikan dengan admin sesuai program yang dipilih.",
	},
	{
		icon: "Award",
		title: "Dibimbing Mentor",
		description:
			"Peserta mendapatkan arahan, praktik, dan evaluasi bersama mentor.",
	},
] as const;

export const CARA_KERJA = [
	{
		step: "01",
		title: "Pilih Kelas",
		description:
			"Pilih Momsky, Kiddis, Teenager, Professional, atau IELTS & TOEFL Class.",
	},
	{
		step: "02",
		title: "Hubungi Admin",
		description: "Konsultasikan kebutuhan, jadwal, dan informasi biaya.",
	},
	{
		step: "03",
		title: "Atur Jadwal",
		description:
			"Tentukan jadwal kelas yang tersedia bersama admin Momkiddis.",
	},
	{
		step: "04",
		title: "Mulai Belajar",
		description:
			"Ikuti program, praktikkan materi, dan pantau perkembangan belajar.",
	},
] as const;

export const STATIC_TESTIMONIALS = [
	{
		id: "1",
		authorName: "Nadia",
		authorRole: "Momsky Class",
		programSlug: "momsky-class",
		content:
			"Saya jadi lebih percaya diri mendampingi dan mengajar anak di rumah.",
		rating: 5,
	},
	{
		id: "2",
		authorName: "Rani",
		authorRole: "Teenager Class",
		programSlug: "teenager-class",
		content:
			"Latihan komunikasi dan public speaking membantu saya lebih percaya diri.",
		rating: 5,
	},
	{
		id: "3",
		authorName: "Aulia",
		authorRole: "IELTS & TOEFL Class",
		programSlug: "ielts-toefl-class",
		content:
			"Latihan setiap bagian tes membuat persiapan saya lebih terarah.",
		rating: 5,
	},
] as const;

export const STATIC_ALUMNI = [
	{
		id: "1",
		name: "Fitri",
		batchLabel: "Momkiddis Indonesia",
		programSlug: "momsky-class",
		shortStory:
			"Lebih percaya diri mengajar dan mendampingi anak belajar di rumah.",
	},
	{
		id: "2",
		name: "Maya",
		batchLabel: "Momkiddis Indonesia",
		programSlug: "ielts-toefl-class",
		shortStory:
			"Mengikuti persiapan IELTS & TOEFL untuk kebutuhan studi dan karier.",
	},
	{
		id: "3",
		name: "Dinda",
		batchLabel: "Momkiddis Indonesia",
		programSlug: "professional-class",
		shortStory:
			"Meningkatkan kemampuan mengajar dan komunikasi profesional.",
	},
] as const;
