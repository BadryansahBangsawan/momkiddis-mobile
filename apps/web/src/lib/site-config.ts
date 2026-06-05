export const siteConfig = {
	name: "Momkiddis Indonesia",
	tagline: "Belajar Bahasa Inggris Online dari Mana Saja",
	description:
		"Kelas bahasa Inggris online dari Momkiddis Indonesia — speaking, IELTS, TOEFL, dan private class via Zoom. Belajar fleksibel dari mana saja.",
	founder: "Lita Hendratno",
	wa: {
		number: "6282343277820",
		defaultMessage: "Halo Momkiddis, saya ingin bertanya tentang kelas bahasa Inggris",
	},
	social: {
		instagram: "https://instagram.com/momkiddy.education",
		tiktok: "",
		youtube: "",
		facebook: "",
	},
	address: "",
	city: "",
	operationalHours: "Senin–Sabtu, 08.00–17.00 WIB",
} as const;

export function getWhatsAppUrl(program?: string) {
	const message = program
		? `Halo Momkiddis, saya ingin daftar kelas ${program}`
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
