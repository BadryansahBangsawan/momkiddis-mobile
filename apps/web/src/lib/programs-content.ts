export interface ProgramCurriculumItem {
	title: string;
	description: string;
}

export interface Program {
	slug: string;
	title: string;
	shortTitle: string;
	subtitle: string;
	description: string;
	category: "ibu" | "anak";
	ageRange: string | null;
	isBestSeller: boolean;
	icon: string;
	color: string;
	maxStudents: number;
	mode: "hybrid" | "online" | "offline";
	curriculum: ProgramCurriculumItem[];
	outcomes: string[];
	targetPeserta: string[];
	priceLabel: string;
	duration: string;
}

export const PROGRAMS: Record<string, Program> = {
	microteaching: {
		slug: "microteaching",
		title: "Kelas Pengajar Microteaching untuk Para Ibu",
		shortTitle: "Kelas Microteaching",
		subtitle: "Jadilah Mom Teacher yang percaya diri dan efektif",
		description:
			"Program unggulan Momkiddy yang dirancang untuk mencetak Mom Teacher — ibu yang mampu mengajar dan mendampingi anak belajar secara efektif di rumah. Dibimbing langsung oleh Founder.",
		category: "ibu",
		ageRange: null,
		isBestSeller: true,
		icon: "GraduationCap",
		color: "blue",
		maxStudents: 20,
		mode: "hybrid",
		curriculum: [
			{
				title: "Teknik Mengajar 5 Menit",
				description:
					"Ibu belajar cara menjelaskan materi secara singkat, jelas, dan mudah dipahami anak. Fokusnya adalah membuat anak cepat menangkap inti pelajaran tanpa merasa terbebani.",
			},
			{
				title: "Membuat RPP Simpel",
				description:
					"Peserta diajarkan menyusun rencana belajar sederhana dalam satu halaman. RPP dibuat praktis, tidak rumit, dan bisa langsung digunakan untuk mengajar anak di rumah.",
			},
			{
				title: "Mengelola Kelas di Rumah",
				description:
					"Ibu belajar mengatur waktu belajar, menjaga fokus anak, menghadapi anak tantrum, malas belajar, cepat bosan, atau sulit diarahkan.",
			},
			{
				title: "Metode Calistung Phonics",
				description:
					"Peserta belajar metode membaca tanpa mengeja, menggunakan pendekatan phonics agar anak lebih cepat memahami bunyi huruf, suku kata, dan kata.",
			},
			{
				title: "Praktik Mengajar dan Umpan Balik",
				description:
					"Setiap peserta melakukan praktik mengajar selama 5–10 menit. Praktik dinilai langsung oleh mentor untuk mengetahui kekuatan, kekurangan, dan cara memperbaiki teknik mengajar.",
			},
		],
		outcomes: [
			"Mengajar anak dengan lebih percaya diri",
			"Membuat rencana belajar sederhana di rumah",
			"Menjelaskan materi calistung dan pelajaran SD dengan cara mudah dipahami anak",
			"Mengelola suasana belajar agar anak lebih fokus dan nyaman",
			"Menerapkan metode belajar yang menyenangkan dan tidak memaksa",
			"Mendapatkan Sertifikat Mom Teacher Momkiddy",
		],
		targetPeserta: [
			"Ibu dengan anak usia 3–12 tahun",
			"Orang tua yang ingin mendampingi anak belajar di rumah",
			"Calon guru PAUD dan SD",
			"Mompreneur yang ingin membuka kelas belajar",
			"Pengajar les privat pemula",
			"Orang tua yang menjalankan atau merencanakan homeschooling",
		],
		priceLabel: "Hubungi Admin",
		duration: "Batch dibuka setiap bulan",
	},
	calistung: {
		slug: "calistung",
		title: "Calistung Fun",
		shortTitle: "Calistung Fun",
		subtitle: "Belajar baca, tulis, hitung tanpa tekanan",
		description:
			"Program membaca, menulis, dan berhitung dengan metode phonics, storytelling, permainan edukatif, dan aktivitas menyenangkan. Anak belajar tanpa tekanan dan diarahkan agar mampu membaca secara bertahap.",
		category: "anak",
		ageRange: "3–7 tahun",
		isBestSeller: false,
		icon: "BookOpen",
		color: "green",
		maxStudents: 5,
		mode: "hybrid",
		curriculum: [
			{
				title: "Level 1 — Mengenal Huruf",
				description:
					"Pengenalan huruf A–Z melalui lagu, permainan, dan flashcard. Anak belajar mengenali bentuk dan bunyi huruf secara menyenangkan.",
			},
			{
				title: "Level 2 — Suku Kata",
				description:
					"Menggabungkan huruf menjadi suku kata dengan pendekatan phonics. Anak mulai memahami bagaimana huruf membentuk bunyi.",
			},
			{
				title: "Level 3 — Membaca Kata",
				description:
					"Dari suku kata ke kata utuh. Anak mulai membaca kata-kata sederhana yang dekat dengan kehidupan sehari-hari.",
			},
			{
				title: "Level 4 — Membaca Kalimat & Menulis",
				description:
					"Membaca kalimat pendek dan mulai menulis dengan benar. Ditambah dasar-dasar berhitung yang menyenangkan.",
			},
		],
		outcomes: [
			"Mengenal dan menyebut huruf A–Z dengan benar",
			"Membaca suku kata dan kata sederhana",
			"Menulis huruf dan kata dengan rapi",
			"Memahami konsep angka dan operasi dasar",
			"Belajar dengan antusias tanpa rasa takut",
		],
		targetPeserta: [
			"Anak usia 3–7 tahun",
			"Anak yang belum bisa membaca",
			"Anak yang baru mulai belajar menulis",
			"Anak yang perlu persiapan masuk SD",
		],
		priceLabel: "Hubungi Admin",
		duration: "Kelas reguler mingguan",
	},
	"bimbel-sd": {
		slug: "bimbel-sd",
		title: "Bimbel SD Tematik Kelas 1–6",
		shortTitle: "Bimbel SD",
		subtitle: "Bimbingan belajar personal, max 5 anak per kelas",
		description:
			"Kelas bimbingan belajar untuk mata pelajaran Matematika, Bahasa Indonesia, IPA, dan materi tematik SD. Jumlah peserta dibatasi maksimal 5 anak per kelas agar pembelajaran lebih fokus.",
		category: "anak",
		ageRange: "Kelas 1–6 SD",
		isBestSeller: false,
		icon: "Calculator",
		color: "purple",
		maxStudents: 5,
		mode: "hybrid",
		curriculum: [
			{
				title: "Kelas 1–2 SD",
				description:
					"Fondasi Matematika dasar, membaca dan menulis lancar, pengenalan IPA lingkungan sekitar.",
			},
			{
				title: "Kelas 3–4 SD",
				description:
					"Matematika operasi hitung, Bahasa Indonesia menulis karangan, IPA dan IPS tematik.",
			},
			{
				title: "Kelas 5–6 SD",
				description:
					"Persiapan USBN, Matematika lanjutan, Bahasa Indonesia dan IPA sesuai kurikulum Merdeka.",
			},
		],
		outcomes: [
			"Nilai pelajaran utama meningkat",
			"Memahami konsep, bukan sekadar hafalan",
			"Lebih percaya diri mengerjakan soal",
			"Siap menghadapi ulangan dan ujian sekolah",
		],
		targetPeserta: [
			"Siswa kelas 1–6 SD",
			"Anak yang kesulitan di salah satu mata pelajaran",
			"Anak yang butuh pendampingan lebih personal",
			"Anak yang ingin persiapan ujian lebih matang",
		],
		priceLabel: "Hubungi Admin",
		duration: "Kelas reguler 2–3x seminggu",
	},
	"english-fun": {
		slug: "english-fun",
		title: "English Fun Class",
		shortTitle: "English Fun",
		subtitle: "Bahasa Inggris via games, role play, dan lagu",
		description:
			"Kelas bahasa Inggris berbasis speaking dan listening melalui games, role play, lagu, dan percakapan harian. Anak dibiasakan menggunakan bahasa Inggris secara alami, bukan dengan hafalan grammar yang kaku.",
		category: "anak",
		ageRange: "5–12 tahun",
		isBestSeller: false,
		icon: "Globe",
		color: "orange",
		maxStudents: 8,
		mode: "hybrid",
		curriculum: [
			{
				title: "Beginner — Hello World",
				description:
					"Perkenalan, warna, angka, anggota tubuh, dan ekspresi sehari-hari. Belajar melalui lagu dan permainan interaktif.",
			},
			{
				title: "Elementary — Talking About Me",
				description:
					"Percakapan sederhana tentang keluarga, hobi, makanan, dan aktivitas. Role play situasi nyata.",
			},
			{
				title: "Intermediate — Story & Communication",
				description:
					"Bercerita pendek, diskusi topik ringan, dan percakapan lebih kompleks. Anak mulai berpikir dalam bahasa Inggris.",
			},
		],
		outcomes: [
			"Berani berbicara dalam bahasa Inggris",
			"Memahami percakapan bahasa Inggris sehari-hari",
			"Kosakata dasar 500+ kata",
			"Tidak takut membuat kesalahan",
		],
		targetPeserta: [
			"Anak usia 5–12 tahun",
			"Pemula hingga menengah",
			"Anak yang ingin percaya diri berbahasa Inggris",
			"Persiapan sekolah bertaraf internasional",
		],
		priceLabel: "Hubungi Admin",
		duration: "Kelas reguler 2x seminggu",
	},
	"menulis-kreatif": {
		slug: "menulis-kreatif",
		title: "Menulis Kreatif dan Literasi",
		shortTitle: "Menulis Kreatif",
		subtitle: "Menuangkan ide dalam cerita, puisi, dan karya tulis",
		description:
			"Program untuk melatih anak membuat cerita, puisi, pidato, dan karya tulis sederhana. Anak diarahkan agar mampu menuangkan ide secara runtut, kreatif, dan percaya diri.",
		category: "anak",
		ageRange: "7–12 tahun",
		isBestSeller: false,
		icon: "PenLine",
		color: "pink",
		maxStudents: 8,
		mode: "hybrid",
		curriculum: [
			{
				title: "Mengenal Struktur Cerita",
				description:
					"Awal, tengah, akhir. Anak belajar membangun alur cerita yang runtut dengan karakter yang menarik.",
			},
			{
				title: "Puisi dan Ekspresi",
				description:
					"Menulis puisi bebas, pantun, dan syair. Anak belajar mengekspresikan perasaan melalui kata-kata.",
			},
			{
				title: "Karya Tulis dan Pidato",
				description:
					"Menulis paragraf opini, laporan sederhana, dan berlatih pidato singkat dengan percaya diri.",
			},
		],
		outcomes: [
			"Menulis cerita dengan alur yang jelas",
			"Mengekspresikan ide secara kreatif",
			"Percaya diri membacakan karyanya",
			"Meningkatkan kemampuan literasi dan kosakata",
		],
		targetPeserta: [
			"Anak usia 7–12 tahun",
			"Anak yang suka bercerita",
			"Anak yang ingin ekspresi diri lebih baik",
			"Persiapan lomba menulis atau pidato",
		],
		priceLabel: "Hubungi Admin",
		duration: "Kelas reguler 1–2x seminggu",
	},
} as const;

export const PROGRAM_LIST = Object.values(PROGRAMS);
export const IBU_PROGRAMS = PROGRAM_LIST.filter((p) => p.category === "ibu");
export const ANAK_PROGRAMS = PROGRAM_LIST.filter((p) => p.category === "anak");

export const KEUNGGULAN = [
	{
		icon: "Users",
		title: "Ibu & Anak dalam Satu Kurikulum",
		description:
			"Materi yang dipelajari ibu dalam kelas microteaching dapat langsung diterapkan untuk mendampingi anak belajar di rumah.",
	},
	{
		icon: "Gamepad2",
		title: "Play-Based Learning",
		description:
			"Momkiddy menerapkan pendekatan belajar berbasis permainan. Anak belajar melalui aktivitas yang menyenangkan sehingga materi lebih mudah diingat.",
	},
	{
		icon: "Monitor",
		title: "Kelas Hybrid",
		description:
			"Program tersedia secara offline dan online melalui Zoom. Ibu dari berbagai daerah tetap dapat mengikuti kelas tanpa harus datang langsung.",
	},
	{
		icon: "Heart",
		title: "Dibimbing Langsung oleh Founder",
		description:
			"Peserta dibimbing langsung oleh Lita Hendratno, founder Momkiddy Indonesia — bukan teori semata, tapi praktik dan pembahasan kasus nyata.",
	},
	{
		icon: "Target",
		title: "Kelas Kecil dan Terarah",
		description:
			"Jumlah peserta dibatasi agar proses pendampingan lebih maksimal. Setiap peserta mendapat ruang untuk praktik, bertanya, dan menerima evaluasi.",
	},
] as const;

export const CARA_KERJA = [
	{
		step: "01",
		title: "Pilih Program",
		description: "Pilih program yang sesuai dengan kebutuhan ibu dan anak.",
	},
	{
		step: "02",
		title: "Hubungi Admin",
		description: "Chat admin via WhatsApp untuk info jadwal dan pendaftaran.",
	},
	{
		step: "03",
		title: "Ikuti Kelas",
		description:
			"Ikuti kelas online maupun offline dengan suasana yang menyenangkan.",
	},
	{
		step: "04",
		title: "Dapatkan Sertifikat",
		description:
			"Selesaikan program dan raih Sertifikat Mom Teacher Momkiddy.",
	},
] as const;

export const STATIC_TESTIMONIALS = [
	{
		id: "1",
		authorName: "Ibu Rina",
		authorRole: "Peserta Batch 4",
		programSlug: "microteaching",
		content:
			"Sebelum ikut kelas ini, saya bingung harus mulai dari mana mengajar anak. Sekarang saya punya metode yang jelas dan anak saya jadi lebih semangat belajar di rumah!",
		rating: 5,
	},
	{
		id: "2",
		authorName: "Ibu Sari",
		authorRole: "Peserta Batch 6",
		programSlug: "microteaching",
		content:
			"Kelas microteaching Bu Lita benar-benar membuka mata saya. Ternyata mengajar itu ada seninya. Sekarang saya bisa buka les privat kecil dari rumah!",
		rating: 5,
	},
	{
		id: "3",
		authorName: "Ibu Dewi",
		authorRole: "Orang Tua Murid Calistung",
		programSlug: "calistung",
		content:
			"Anak saya yang tadinya tidak mau belajar sekarang malah minta belajar setiap hari. Metode phonics-nya memang beda, anak lebih cepat nangkap tanpa stres.",
		rating: 5,
	},
] as const;

export const STATIC_ALUMNI = [
	{
		id: "1",
		name: "Ibu Fitri",
		batchLabel: "Batch 3, Januari 2024",
		programSlug: "microteaching",
		shortStory:
			"Setelah lulus, kini membuka kelas belajar dari rumah untuk 5 anak di lingkungannya.",
	},
	{
		id: "2",
		name: "Ibu Nanda",
		batchLabel: "Batch 5, Maret 2024",
		programSlug: "microteaching",
		shortStory:
			"Berhasil mendampingi anak dari tidak bisa membaca hingga lancar dalam 2 bulan.",
	},
	{
		id: "3",
		name: "Ibu Maya",
		batchLabel: "Batch 7, Juni 2024",
		programSlug: "microteaching",
		shortStory:
			"Sekarang aktif sebagai pengajar les privat dan sudah memiliki 8 murid tetap.",
	},
] as const;
