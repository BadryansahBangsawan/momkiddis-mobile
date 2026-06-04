import { Button } from "@momkiddis/ui/components/button";
import { MessageCircleIcon } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site-config";

interface WhatsAppCtaProps {
	program?: string;
	label?: string;
	className?: string;
	size?: "default" | "lg";
	variant?: "full" | "inline";
}

export default function WhatsAppCta({
	program,
	label = "Daftar Sekarang via WhatsApp",
	className,
	size = "default",
	variant = "inline",
}: WhatsAppCtaProps) {
	const url = getWhatsAppUrl(program);

	if (variant === "full") {
		return (
			<section
				className={`bg-primary px-4 py-16 text-center sm:px-6 lg:px-8 ${className ?? ""}`}
			>
				<div className="mx-auto max-w-2xl">
					<h2 className="text-xl font-bold text-primary-foreground sm:text-2xl">
						Siap Menjadi Guru Pertama untuk Anak Anda?
					</h2>
					<p className="mt-2 text-sm text-primary-foreground/80">
						Hubungi kami untuk konsultasi gratis dan informasi pendaftaran.
					</p>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 inline-block"
					>
						<Button
							size="lg"
							className="gap-2 bg-accent text-accent-foreground transition-transform active:scale-[0.97] hover:bg-accent/90"
						>
							<MessageCircleIcon className="size-4" />
							{label}
						</Button>
					</a>
				</div>
			</section>
		);
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
		>
			<Button
				size={size}
				className="gap-2 bg-accent text-accent-foreground transition-transform active:scale-[0.97] hover:bg-accent/90"
			>
				<MessageCircleIcon className="size-4" />
				{label}
			</Button>
		</a>
	);
}
