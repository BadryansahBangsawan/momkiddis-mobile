export const siteConfig = {
	name: "Momkiddy Indonesia",
	tagline: "Ibu Pintar Mengajar, Anak Cerdas Berkarya",
	description:
		"Lembaga Pendidikan Momkiddy Indonesia — menguatkan peran ibu sebagai guru pertama di rumah dan mencerdaskan anak usia dini hingga sekolah dasar.",
	founder: "Lita Hendratno",
	wa: {
		number: "6282343277820",
		defaultMessage: "Halo Momkiddy, saya ingin bertanya tentang program",
	},
	social: {
		instagram: "https://instagram.com/momkiddy.education",
		tiktok: "",
		youtube: "",
		facebook: "",
	},
	address: "(Isi alamat lengkap)",
	city: "(Isi nama kota)",
	operationalHours: "Senin–Sabtu, 08.00–17.00 WIB",
} as const;

export function getWhatsAppUrl(program?: string) {
	const message = program
		? `Halo Momkiddy, saya ingin daftar program ${program}`
		: siteConfig.wa.defaultMessage;
	return `https://wa.me/${siteConfig.wa.number}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
	{ to: "/", label: "Beranda" },
	{ to: "/programs", label: "Program" },
	{ to: "/metode", label: "Metode" },
	{ to: "/alumni", label: "Alumni" },
	{ to: "/blog", label: "Blog" },
	{ to: "/faq", label: "FAQ" },
	{ to: "/kontak", label: "Kontak" },
] as const;
