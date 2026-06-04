/**
 * Seed script for Momkiddy Indonesia
 *
 * Populates:
 *   - 5 testimonials (3 featured)
 *   - 3 alumni (all featured)
 *   - 2 blog posts
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

export const SEED_BLOG_POSTS = [
	{
		id: "b1",
		slug: "cara-mengajar-anak-membaca-tanpa-stres",
		title: "5 Cara Mengajarkan Anak Membaca Tanpa Stres",
		excerpt:
			"Banyak ibu yang merasa frustrasi ketika anak belum bisa membaca di usia yang menurut orang-orang 'sudah seharusnya bisa'. Padahal, setiap anak memiliki ritme perkembangannya sendiri.",
		content: `# 5 Cara Mengajarkan Anak Membaca Tanpa Stres

Banyak ibu yang merasa frustrasi ketika anak belum bisa membaca. Padahal, setiap anak memiliki ritme perkembangannya sendiri.

## 1. Mulai dari Bunyi, Bukan Nama Huruf

Metode phonics mengajarkan anak mengenal **bunyi** huruf sebelum namanya. Misalnya, huruf "A" bunyinya "ah", bukan "a-a" seperti dalam lagu alfabet. Ini membuat anak jauh lebih cepat memahami cara membaca.

## 2. Jadikan Buku sebagai Mainan

Sebelum anak bisa membaca sendiri, biasakan duduk bersama dan membacakan buku bergambar. Biarkan anak membalik halaman, menunjuk gambar, dan bertanya. Buku bukan beban — buku adalah teman.

## 3. Belajar 10 Menit, Konsisten

Lebih baik belajar 10 menit setiap hari daripada 1 jam sekali seminggu. Otak anak menyerap informasi lebih baik melalui pengulangan pendek yang konsisten.

## 4. Rayakan Setiap Progres Kecil

Anak berhasil menyebut satu huruf dengan benar? Rayakan! Tepuk tangan, peluk, atau beri pujian yang tulus. Dopamin dari rasa bangga adalah bahan bakar terbaik untuk belajar.

## 5. Jangan Bandingkan dengan Anak Lain

Kalimat "masa sepupunya yang lebih muda sudah bisa baca" adalah racun. Setiap anak unik. Fokus pada progresnya sendiri, bukan perbandingan.

---

Ingin belajar metode lengkap mengajar anak membaca? Bergabunglah dengan **Calistung Fun** Momkiddy Indonesia.`,
		authorName: "Lita Hendratno",
		authorImage: null,
		coverImage: null,
		tags: JSON.stringify(["literasi", "tips-belajar", "calistung"]),
		isPublished: true,
		publishedAt: new Date("2024-09-15").getTime(),
	},
	{
		id: "b2",
		slug: "kenapa-ibu-harus-belajar-cara-mengajar",
		title: "Kenapa Ibu Perlu Belajar Cara Mengajar (Bukan Hanya Materi)?",
		excerpt:
			"Banyak ibu yang pintar dan berpendidikan, tapi kesulitan mengajarkan anak. Ini bukan masalah kecerdasan — ini masalah teknik.",
		content: `# Kenapa Ibu Perlu Belajar Cara Mengajar?

Banyak ibu yang pintar dan berpendidikan, tapi kesulitan mengajarkan anak. Ini bukan masalah kecerdasan — ini masalah teknik.

## Mengetahui ≠ Bisa Mengajar

Anda mungkin tahu cara mengalikan angka. Tapi apakah Anda tahu cara menjelaskan perkalian kepada anak 7 tahun sehingga ia benar-benar mengerti, bukan hanya hafal?

Inilah jarak antara *mengetahui sesuatu* dan *bisa mengajarkannya*.

## Anak Belajar Secara Berbeda

Setiap anak memiliki gaya belajar yang berbeda. Ada yang visual (perlu melihat), ada yang auditori (perlu mendengar), ada yang kinestetik (perlu bergerak sambil belajar). Seorang ibu yang memahami ini akan jauh lebih efektif.

## Emosi Mempengaruhi Cara Mengajar

Ketika ibu frustasi karena anak tidak kunjung mengerti, nada suara berubah. Anak merasakan itu dan langsung masuk mode defensif — bukan mode belajar. Belajar teknik mengajar juga berarti belajar mengelola emosi saat mengajar.

## Struktur Membuat Belajar Lebih Efektif

Belajar tanpa rencana biasanya berakhir dengan anak bosan dan ibu kehabisan ide. RPP sederhana — satu halaman rencana belajar — mengubah sesi belajar yang kacau menjadi pengalaman yang terarah dan menyenangkan.

---

Momkiddy hadir untuk membekali ibu dengan semua ini melalui **Kelas Microteaching**.`,
		authorName: "Lita Hendratno",
		authorImage: null,
		coverImage: null,
		tags: JSON.stringify(["microteaching", "parenting", "tips-mengajar"]),
		isPublished: true,
		publishedAt: new Date("2024-10-02").getTime(),
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
