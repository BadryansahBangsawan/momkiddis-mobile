/**
 * Seed script for Momkiddy Indonesia
 *
 * Populates:
 *   - 5 testimonials (3 featured)
 *   - 3 alumni (all featured)
 *   - 5 gallery items
 *
 * Run against local D1 with:
 *   bunx wrangler d1 execute <DB_NAME> --local --file=<generated-sql>
 *
 * Or adapt to use a direct Drizzle client for your environment.
 */

export const SEED_TESTIMONIALS = [
	{
		id: "t1",
		authorName: "Ibu Rina Susanti",
		authorRole: "Peserta Batch 4 — Microteaching",
		authorImage: null,
		programSlug: "microteaching",
		content:
			"Sebelum ikut kelas ini, saya bingung harus mulai dari mana mengajar anak. Sekarang saya punya metode yang jelas dan anak saya jadi lebih semangat belajar di rumah! Terima kasih Bu Lita.",
		rating: 5,
		isPublished: true,
		isFeatured: true,
	},
	{
		id: "t2",
		authorName: "Ibu Sari Dewanti",
		authorRole: "Peserta Batch 6 — Microteaching",
		authorImage: null,
		programSlug: "microteaching",
		content:
			"Kelas microteaching Bu Lita benar-benar membuka mata saya. Ternyata mengajar itu ada seninya. Sekarang saya sudah bisa membuka les privat kecil dari rumah dan sudah ada 4 murid!",
		rating: 5,
		isPublished: true,
		isFeatured: true,
	},
	{
		id: "t3",
		authorName: "Ibu Dewi Rahayu",
		authorRole: "Orang Tua Murid — Calistung Fun",
		authorImage: null,
		programSlug: "calistung",
		content:
			"Anak saya yang tadinya tidak mau belajar sekarang malah minta belajar setiap hari. Metode phonics-nya memang beda — anak lebih cepat nangkap tanpa stres sama sekali.",
		rating: 5,
		isPublished: true,
		isFeatured: true,
	},
	{
		id: "t4",
		authorName: "Ibu Nisa Pratiwi",
		authorRole: "Peserta Batch 8 — Microteaching",
		authorImage: null,
		programSlug: "microteaching",
		content:
			"Praktik langsung di depan mentor sangat membantu. Saya jadi tahu persis kelemahan saya dalam mengajar dan cara memperbaikinya. Investasi terbaik tahun ini!",
		rating: 5,
		isPublished: true,
		isFeatured: false,
	},
	{
		id: "t5",
		authorName: "Ibu Ratna Kusuma",
		authorRole: "Orang Tua Murid — English Fun Class",
		authorImage: null,
		programSlug: "english-fun",
		content:
			"Anak saya sekarang sudah berani berbicara bahasa Inggris di depan keluarga besar. Dulu jangankan bicara, dengar kata 'English' saja sudah kabur. Luar biasa perubahannya!",
		rating: 5,
		isPublished: true,
		isFeatured: false,
	},
] as const;

export const SEED_ALUMNI = [
	{
		id: "a1",
		name: "Ibu Fitri Handayani",
		photo: null,
		batchLabel: "Batch 3 — Januari 2024",
		programSlug: "microteaching",
		certificateUrl: null,
		shortStory:
			"Setelah lulus dari Kelas Microteaching, Fitri kini membuka kelas belajar dari rumah untuk 5 anak di lingkungan RT-nya. Dalam 3 bulan ia sudah memiliki murid tetap.",
		isPublished: true,
		isFeatured: true,
		graduatedAt: new Date("2024-01-31").getTime(),
	},
	{
		id: "a2",
		name: "Ibu Nanda Puspita",
		photo: null,
		batchLabel: "Batch 5 — Maret 2024",
		programSlug: "microteaching",
		certificateUrl: null,
		shortStory:
			"Berhasil mendampingi anak dari tidak bisa membaca sama sekali hingga lancar membaca dalam waktu 2 bulan menggunakan metode phonics yang dipelajari di Momkiddy.",
		isPublished: true,
		isFeatured: true,
		graduatedAt: new Date("2024-03-28").getTime(),
	},
	{
		id: "a3",
		name: "Ibu Maya Sartika",
		photo: null,
		batchLabel: "Batch 7 — Juni 2024",
		programSlug: "microteaching",
		certificateUrl: null,
		shortStory:
			"Kini aktif sebagai pengajar les privat dan sudah memiliki 8 murid tetap. Sertifikat Mom Teacher Momkiddy menjadi bekal kepercayaan yang ia tunjukkan kepada orang tua murid.",
		isPublished: true,
		isFeatured: true,
		graduatedAt: new Date("2024-06-30").getTime(),
	},
] as const;

export const SEED_GALLERY_ITEMS = [
	{
		id: "g1",
		imageUrl: "/gallery/microteaching-batch7.jpg",
		caption: "Sesi Praktik Microteaching Batch 7",
		event: "Kelas Microteaching",
		takenAt: new Date("2024-06-20").getTime(),
		isPublished: true,
	},
	{
		id: "g2",
		imageUrl: "/gallery/calistung-phonics.jpg",
		caption: "Aktivitas Phonics Bersama Anak",
		event: "Calistung Fun",
		takenAt: new Date("2024-07-10").getTime(),
		isPublished: true,
	},
	{
		id: "g3",
		imageUrl: "/gallery/workshop-mom-teacher.jpg",
		caption: "Workshop Mom Teacher — Sesi Offline",
		event: "Kelas Microteaching",
		takenAt: new Date("2024-08-05").getTime(),
		isPublished: true,
	},
	{
		id: "g4",
		imageUrl: "/gallery/online-class-zoom.jpg",
		caption: "Kelas Online via Zoom — Batch 9",
		event: "Kelas Online",
		takenAt: new Date("2024-09-12").getTime(),
		isPublished: true,
	},
	{
		id: "g5",
		imageUrl: "/gallery/sertifikat-batch5.jpg",
		caption: "Penyerahan Sertifikat Mom Teacher Batch 5",
		event: "Sertifikasi",
		takenAt: new Date("2024-03-30").getTime(),
		isPublished: true,
	},
] as const;
