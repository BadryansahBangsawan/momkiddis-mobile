export interface FaqItem {
	q: string;
	a: string;
}

export interface FaqCategory {
	id: string;
	label: string;
	items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
	{
		id: "umum",
		label: "Umum",
		items: [
			{
				q: "Apa itu Momkiddy Indonesia?",
				a: "Momkiddy Indonesia adalah lembaga pendidikan non-formal yang berfokus pada dua pilar: menguatkan peran ibu sebagai guru pertama di rumah dan mencerdaskan anak usia dini hingga sekolah dasar. Didirikan oleh Lita Hendratno, Momkiddy hadir untuk membekali ibu dengan kemampuan mengajar dan menyediakan program belajar menyenangkan untuk anak.",
			},
			{
				q: "Di mana lokasi Momkiddy Indonesia?",
				a: "Momkiddy Indonesia beroperasi secara hybrid — tersedia kelas offline di lokasi kami dan kelas online via Zoom sehingga peserta dari seluruh Indonesia dapat bergabung tanpa harus datang langsung.",
			},
			{
				q: "Siapa yang mengajar di Momkiddy?",
				a: "Seluruh program dibimbing langsung oleh Ibu Lita Hendratno, Founder Momkiddy Indonesia. Pembelajaran tidak hanya berisi teori, tetapi juga praktik dan pembahasan kasus nyata yang sering terjadi di rumah.",
			},
			{
				q: "Apakah Momkiddy memiliki sertifikasi resmi?",
				a: "Momkiddy Indonesia mengeluarkan Sertifikat Mom Teacher yang dapat digunakan sebagai bekal untuk homeschooling, membuka les privat, atau merintis kelas kecil di rumah.",
			},
		],
	},
	{
		id: "pendaftaran",
		label: "Pendaftaran",
		items: [
			{
				q: "Bagaimana cara mendaftar program di Momkiddy?",
				a: "Pendaftaran dilakukan melalui WhatsApp admin. Pilih program yang sesuai, hubungi admin untuk info jadwal dan biaya, konfirmasi pembayaran, lalu masuk ke grup kelas. Prosesnya sederhana dan admin kami siap membantu.",
			},
			{
				q: "Berapa kuota peserta per batch?",
				a: "Untuk Kelas Pengajar Microteaching, kuota maksimal 20 peserta per batch. Untuk program anak (Calistung, Bimbel SD, English Fun), maksimal 5–8 anak per kelas agar pembelajaran lebih personal dan fokus.",
			},
			{
				q: "Kapan batch baru dibuka?",
				a: "Batch Kelas Pengajar Microteaching dibuka setiap bulan. Program anak tersedia secara reguler mingguan. Hubungi admin untuk informasi jadwal terdekat.",
			},
			{
				q: "Bagaimana jika batch sudah penuh?",
				a: "Jika batch yang diinginkan sudah penuh, Anda bisa mendaftar ke waitlist untuk batch berikutnya. Admin akan menghubungi Anda ketika pendaftaran dibuka.",
			},
			{
				q: "Metode pembayaran apa yang tersedia?",
				a: "Pembayaran dapat dilakukan melalui transfer bank atau e-wallet. Detail rekening dan nomor e-wallet akan diberikan oleh admin setelah konfirmasi pendaftaran.",
			},
		],
	},
	{
		id: "program-ibu",
		label: "Program Ibu",
		items: [
			{
				q: "Siapa yang cocok ikut Kelas Microteaching?",
				a: "Program ini cocok untuk: ibu dengan anak usia 3–12 tahun, orang tua yang ingin mendampingi anak belajar di rumah, calon guru PAUD/SD, mompreneur yang ingin buka kelas belajar, pengajar les privat pemula, dan orang tua yang menjalankan homeschooling.",
			},
			{
				q: "Apakah saya perlu latar belakang pendidikan untuk ikut?",
				a: "Tidak perlu. Program ini dirancang untuk semua ibu, apapun latar belakang pendidikannya. Yang terpenting adalah keinginan untuk belajar dan mendampingi anak dengan lebih baik.",
			},
			{
				q: "Berapa lama program Microteaching berlangsung?",
				a: "Satu batch Kelas Microteaching berlangsung beberapa pertemuan sesuai kurikulum yang telah ditetapkan. Hubungi admin untuk informasi detail durasi dan jadwal batch terdekat.",
			},
			{
				q: "Apakah saya mendapat sertifikat setelah selesai?",
				a: "Ya. Peserta yang menyelesaikan program akan mendapatkan Sertifikat Mom Teacher Momkiddy yang dapat digunakan sebagai bekal homeschooling, membuka les privat, atau merintis kelas kecil di rumah.",
			},
			{
				q: "Bagaimana format kelasnya — online atau offline?",
				a: "Program tersedia secara hybrid. Ada sesi online via Zoom dan sesi offline (tergantung jadwal batch). Peserta dari luar kota tetap dapat mengikuti kelas secara penuh melalui Zoom.",
			},
		],
	},
	{
		id: "program-anak",
		label: "Program Anak",
		items: [
			{
				q: "Anak saya belum bisa baca sama sekali, bisa ikut Calistung Fun?",
				a: "Tentu bisa! Calistung Fun dirancang dari level nol — dari pengenalan huruf hingga membaca kalimat secara bertahap. Tidak ada prasyarat. Anak akan belajar dengan metode phonics yang menyenangkan tanpa tekanan.",
			},
			{
				q: "Berapa usia minimal untuk ikut program anak?",
				a: "Calistung Fun untuk usia 3–7 tahun. English Fun Class untuk usia 5–12 tahun. Menulis Kreatif untuk usia 7–12 tahun. Bimbel SD untuk siswa kelas 1–6 SD.",
			},
			{
				q: "Kenapa jumlah murid dibatasi sedikit?",
				a: "Kami membatasi jumlah peserta (5–8 anak per kelas) agar setiap anak mendapat perhatian yang cukup, pengajar bisa memantau perkembangan individual, dan suasana belajar tetap kondusif.",
			},
			{
				q: "Apakah anak perlu bawa perlengkapan khusus?",
				a: "Untuk kelas offline, pengajar akan menginformasikan perlengkapan yang perlu dibawa (biasanya buku tulis dan alat tulis standar). Untuk kelas online, cukup perangkat yang bisa terhubung ke Zoom.",
			},
		],
	},
	{
		id: "teknis",
		label: "Teknis",
		items: [
			{
				q: "Bagaimana jika saya ketinggalan satu sesi?",
				a: "Hubungi admin atau pengajar jika tidak dapat hadir. Kebijakan penggantian sesi bergantung pada jenis program dan kesepakatan dengan pengajar. Beberapa sesi mungkin bisa diganti di jadwal lain.",
			},
			{
				q: "Apakah ada rekaman kelas untuk online?",
				a: "Kebijakan rekaman berbeda per program. Silakan tanyakan langsung ke admin saat mendaftar untuk informasi lebih lanjut.",
			},
			{
				q: "Bagaimana cara mengikuti kelas online?",
				a: "Setelah mendaftar, Anda akan dimasukkan ke grup WhatsApp kelas. Link Zoom dan jadwal lengkap akan dikirimkan melalui grup tersebut sebelum kelas dimulai.",
			},
			{
				q: "Apakah ada garansi jika saya tidak puas?",
				a: "Momkiddy berkomitmen memberikan pengalaman belajar terbaik. Jika ada keluhan atau masalah selama mengikuti program, silakan hubungi admin kami dan kami akan berusaha menyelesaikannya dengan baik.",
			},
		],
	},
];
