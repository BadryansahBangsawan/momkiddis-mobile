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
				q: "Apa itu Momkiddis Indonesia?",
				a: "Momkiddis Indonesia adalah lembaga pendidikan dengan program untuk ibu, anak, remaja, profesional, serta persiapan IELTS & TOEFL.",
			},
			{
				q: "Apa saja program yang tersedia?",
				a: "Tersedia lima program: Momsky Class, Kiddis Class, Teenager Class, Professional Class, dan IELTS & TOEFL Class.",
			},
			{
				q: "Bagaimana memilih program yang tepat?",
				a: "Pilih berdasarkan kategori peserta dan target belajar. Admin juga dapat membantu mencocokkan kebutuhanmu dengan program yang paling sesuai.",
			},
		],
	},
	{
		id: "kelas",
		label: "Pilihan Kelas",
		items: [
			{
				q: "Apa yang dipelajari di Momsky Class?",
				a: "Momsky Class membahas microteaching untuk para ibu, calistung dan teknik mengajar simpel, serta mentoring praktik bersama mentor.",
			},
			{
				q: "Apa yang dipelajari di Kiddis Class?",
				a: "Kiddis Class mencakup Calistung Fun, Bimbel SD tematik kelas 1-6, dan English Fun untuk speaking serta listening.",
			},
			{
				q: "Apa yang dipelajari di Teenager Class?",
				a: "Teenager Class berfokus pada English dan komunikasi, belajar efektif, serta public speaking untuk presentasi dan ekspresi.",
			},
			{
				q: "Apa yang dipelajari di Professional Class?",
				a: "Professional Class mencakup microteaching lanjut, komunikasi profesional, dan mentoring skill melalui praktik serta evaluasi.",
			},
			{
				q: "Apakah IELTS dan TOEFL terpisah?",
				a: "Tidak. IELTS dan TOEFL tersedia dalam satu program gabungan bernama IELTS & TOEFL Class, dengan materi Listening & Reading, Speaking & Writing, serta Test Practice.",
			},
		],
	},
	{
		id: "pendaftaran",
		label: "Biaya & Pendaftaran",
		items: [
			{
				q: "Berapa biaya setiap program?",
				a: "Informasi biaya belum dicantumkan di website. Hubungi admin Momkiddis untuk mendapatkan biaya terbaru sesuai program yang dipilih.",
			},
			{
				q: "Bagaimana cara mendaftar?",
				a: "Pilih program yang sesuai lalu hubungi admin melalui WhatsApp untuk konsultasi, jadwal, biaya, dan konfirmasi pendaftaran.",
			},
			{
				q: "Apakah bisa konsultasi sebelum mendaftar?",
				a: "Bisa. Admin akan membantu memilih program berdasarkan usia peserta, kebutuhan belajar, dan target yang ingin dicapai.",
			},
		],
	},
	{
		id: "jadwal",
		label: "Jadwal",
		items: [
			{
				q: "Kapan jadwal kelas dimulai?",
				a: "Jadwal mengikuti program dan batch yang tersedia. Konfirmasikan jadwal terbaru langsung kepada admin Momkiddis.",
			},
			{
				q: "Apakah jadwal dapat dikonsultasikan?",
				a: "Ya. Admin akan memberikan pilihan jadwal yang tersedia untuk program yang kamu pilih.",
			},
		],
	},
	{
		id: "sertifikat",
		label: "Mentoring & Sertifikat",
		items: [
			{
				q: "Apakah program dibimbing mentor?",
				a: "Ya. Program menggunakan praktik, arahan, dan evaluasi mentor sesuai kebutuhan masing-masing kelas.",
			},
			{
				q: "Apakah peserta mendapat sertifikat?",
				a: "Informasi sertifikat mengikuti ketentuan program. Hubungi admin untuk memastikan fasilitas pada kelas yang dipilih.",
			},
		],
	},
];
