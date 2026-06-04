import { Link } from "@tanstack/react-router";
import { siteConfig, getWhatsAppUrl } from "@/lib/site-config";

const programLinks = [
	{ slug: "microteaching", label: "Kelas Microteaching" },
	{ slug: "calistung", label: "Calistung Fun" },
	{ slug: "bimbel-sd", label: "Bimbel SD" },
	{ slug: "english-fun", label: "English Fun Class" },
	{ slug: "menulis-kreatif", label: "Menulis Kreatif" },
] as const;

const informasiLinks = [
	{ to: "/about", label: "Tentang Kami" },
	{ to: "/metode", label: "Metode Belajar" },
	{ to: "/alumni", label: "Alumni" },
	{ to: "/blog", label: "Blog" },
	{ to: "/faq", label: "FAQ" },
] as const;

const legalLinks = [
	{ to: "/kontak", label: "Kontak" },
	{ to: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
	{ to: "/kebijakan-privasi", label: "Kebijakan Privasi" },
] as const;

export default function SiteFooter() {
	return (
		<footer className="border-t bg-muted/40">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div className="space-y-3">
						<p className="text-base font-bold text-primary">
							{siteConfig.name}
						</p>
						<p className="text-sm italic text-muted-foreground">
							"{siteConfig.tagline}"
						</p>
						<p className="text-sm text-muted-foreground">
							{siteConfig.description}
						</p>
					</div>

					{/* Program */}
					<div className="space-y-3">
						<p className="text-sm font-semibold text-foreground">Program</p>
						<ul className="space-y-2">
							{programLinks.map(({ slug, label }) => (
								<li key={slug}>
									<Link
										to="/programs/$slug"
										params={{ slug }}
										className="text-sm text-muted-foreground transition-colors hover:text-primary"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Informasi */}
					<div className="space-y-3">
						<p className="text-sm font-semibold text-foreground">Informasi</p>
						<ul className="space-y-2">
							{informasiLinks.map(({ to, label }) => (
								<li key={to}>
									<Link
										to={to}
										className="text-sm text-muted-foreground transition-colors hover:text-primary"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Kontak */}
					<div className="space-y-3">
						<p className="text-sm font-semibold text-foreground">Kontak</p>
						<ul className="space-y-2">
							<li>
								<a
									href={getWhatsAppUrl()}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-muted-foreground transition-colors hover:text-primary"
								>
									WhatsApp Admin
								</a>
							</li>
							{siteConfig.social.instagram && (
								<li>
									<a
										href={siteConfig.social.instagram}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-muted-foreground transition-colors hover:text-primary"
									>
										@momkiddy.education
									</a>
								</li>
							)}
							<li>
								<p className="text-sm text-muted-foreground">
									{siteConfig.operationalHours}
								</p>
							</li>
							{legalLinks.map(({ to, label }) => (
								<li key={to}>
									<Link
										to={to}
										className="text-sm text-muted-foreground transition-colors hover:text-primary"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-10 border-t pt-6">
					<p className="text-center text-xs text-muted-foreground">
						&copy; {new Date().getFullYear()} {siteConfig.name}. Hak cipta
						dilindungi.
					</p>
				</div>
			</div>
		</footer>
	);
}
