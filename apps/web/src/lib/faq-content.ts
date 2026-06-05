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
				q: "Apa itu Women Future 2026?",
				a: "Women Future 2026 adalah program kelas online bahasa Inggris khusus perempuan. Kelas tersedia untuk speaking basic, conversation, IELTS, TOEFL, dan private English 1 on 1.",
			},
			{
				q: "Kelasnya online atau offline?",
				a: "Semua kelas berlangsung online via Zoom atau Google Meet, sehingga peserta bisa belajar dari rumah, kampus, atau tempat kerja.",
			},
			{
				q: "Siapa yang cocok ikut kelas ini?",
				a: "Program ini cocok untuk ibu rumah tangga, mahasiswi, pekerja, pemula level basic, peserta yang ingin lebih lancar speaking, dan peserta yang sedang menyiapkan IELTS atau TOEFL.",
			},
			{
				q: "Apakah pemula bisa ikut?",
				a: "Bisa. Level kelas dimulai dari basic. Untuk peserta yang benar-benar mulai dari nol, kelas English Speaking Basic adalah pilihan paling aman.",
			},
		],
	},
	{
		id: "kelas",
		label: "Pilihan Kelas",
		items: [
			{
				q: "Apa bedanya English Speaking Basic dan English Conversation Class?",
				a: "English Speaking Basic cocok untuk pemula dari nol yang ingin mulai berani speaking. English Conversation Class cocok untuk peserta yang sudah punya dasar dan ingin lebih aktif, lancar, dan natural saat berbicara.",
			},
			{
				q: "Kelas IELTS membahas apa saja?",
				a: "IELTS Preparation Class membahas IELTS Speaking, Writing Task 1 & 2, Listening strategies, Reading techniques, dan Vocabulary for IELTS.",
			},
			{
				q: "Kelas TOEFL membahas apa saja?",
				a: "TOEFL Preparation membahas Structure & grammar, Listening TOEFL, Reading comprehension, Prediction test, serta tips dan strategi pengerjaan.",
			},
			{
				q: "Apa kelebihan Private English Class 1 on 1?",
				a: "Private English Class 1 on 1 bersifat 100% personal. Materi bisa request seperti speaking, IELTS, TOEFL, pronunciation, interview, atau presentation.",
			},
		],
	},
	{
		id: "harga",
		label: "Harga & Paket",
		items: [
			{
				q: "Apa saja pilihan paket kelas?",
				a: "Setiap kelas memiliki paket 4x, 8x, dan 12x pertemuan. Harga berbeda sesuai jenis kelas, mulai dari Rp399.000 untuk English Speaking Basic.",
			},
			{
				q: "Berapa harga English Speaking Basic?",
				a: "English Speaking Basic: 4x pertemuan Rp399.000, 8x pertemuan Rp749.000, dan 12x pertemuan Rp1.050.000.",
			},
			{
				q: "Berapa harga IELTS dan TOEFL Preparation?",
				a: "IELTS Preparation mulai Rp650.000 untuk 4x pertemuan. TOEFL Preparation mulai Rp550.000 untuk 4x pertemuan. Paket lengkap tersedia di halaman Jadwal & Biaya.",
			},
			{
				q: "Apakah bisa konsultasi dulu sebelum memilih paket?",
				a: "Bisa. Peserta bisa konsultasi kebutuhan belajar terlebih dahulu agar admin membantu memilih kelas, paket, dan jadwal yang paling sesuai.",
			},
		],
	},
	{
		id: "jadwal",
		label: "Jadwal",
		items: [
			{
				q: "Berapa durasi setiap pertemuan?",
				a: "Setiap pertemuan berdurasi 90 menit.",
			},
			{
				q: "Apa saja pilihan sesi kelas?",
				a: "Pilihan sesi kelas: Morning Class 08.00 - 09.30 WIB, Afternoon Class 13.30 - 15.00 WIB, dan Evening Class 19.30 - 21.00 WIB.",
			},
			{
				q: "Apakah jadwal fleksibel?",
				a: "Ya. Jadwal fleksibel untuk mahasiswi, pekerja, dan ibu rumah tangga. Konfirmasi jadwal terbaik bisa dilakukan dengan admin.",
			},
			{
				q: "Bagaimana cara masuk kelas online?",
				a: "Setelah pendaftaran dikonfirmasi, peserta akan menerima info kelas, jadwal, dan link Zoom atau Google Meet melalui admin atau grup kelas.",
			},
		],
	},
	{
		id: "bonus",
		label: "Bonus & Sertifikat",
		items: [
			{
				q: "Apa saja bonus free yang didapat peserta?",
				a: "Peserta mendapatkan konsultasi belajar, progress report, e-certificate, group support, dan scholarship sharing.",
			},
			{
				q: "Apakah peserta mendapat sertifikat?",
				a: "Ya. Peserta yang menyelesaikan program akan mendapatkan e-certificate.",
			},
			{
				q: "Apakah ada progress report?",
				a: "Ya. Progress report termasuk bonus free agar peserta bisa melihat perkembangan belajar selama mengikuti kelas.",
			},
			{
				q: "Apakah ada sharing beasiswa?",
				a: "Ya. Scholarship sharing termasuk dalam bonus free untuk peserta Women Future 2026.",
			},
		],
	},
];
