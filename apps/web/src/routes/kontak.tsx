import { createFileRoute } from "@tanstack/react-router";
import {
	Bot,
	Clock3,
	MapPin,
	MessageCircle,
	Sparkles,
} from "lucide-react";
import PageHero from "@/components/sections/page-hero";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/kontak")({
	component: KontakPage,
});

function KontakPage() {
	const waUrl = getWhatsAppUrl();
	const hasLocation = Boolean(siteConfig.address || siteConfig.city);

	const openChat = () => {
		window.dispatchEvent(new CustomEvent("momkiddis:open-chat"));
	};

	return (
		<>
			<PageHero
				title="Hubungi Momkiddis"
				subtitle="Tanyakan course, jadwal, biaya, atau proses pendaftaran melalui channel yang paling nyaman."
				breadcrumbs={[{ label: "Contact" }]}
			/>

			<section className="grid gap-3 px-4 pt-2">
				<a
					href={waUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-4 rounded-[1.6rem] bg-[#ecfbf1] p-4 transition-transform duration-150 active:scale-[0.98]"
				>
					<span className="flex size-12 shrink-0 items-center justify-center rounded-[1.15rem] bg-white text-[#18a94f] shadow-sm">
						<MessageCircle className="size-5" />
					</span>
					<div className="min-w-0 flex-1">
						<div className="flex items-center gap-2">
							<p className="text-sm font-black text-slate-900">WhatsApp Admin</p>
							<span className="rounded-full bg-[#25D366] px-2 py-0.5 text-[0.5rem] font-extrabold text-white">
								UTAMA
							</span>
						</div>
						<p className="mt-1 text-[0.65rem] font-medium leading-relaxed text-slate-500">
							Info course, jadwal, biaya, dan pendaftaran
						</p>
					</div>
					<span className="text-lg font-bold text-[#18a94f]">›</span>
				</a>

				<button
					type="button"
					onClick={openChat}
					className="flex items-center gap-4 rounded-[1.6rem] bg-[#eef6ff] p-4 text-left transition-transform duration-150 active:scale-[0.98]"
				>
					<span className="flex size-12 shrink-0 items-center justify-center rounded-[1.15rem] bg-white text-[#17689e] shadow-sm">
						<Bot className="size-5" />
					</span>
					<div className="min-w-0 flex-1">
						<div className="flex items-center gap-2">
							<p className="text-sm font-black text-slate-900">Chat AI Momkiddis</p>
							<Sparkles className="size-3.5 text-orange-500" />
						</div>
						<p className="mt-1 text-[0.65rem] font-medium leading-relaxed text-slate-500">
							Dapatkan rekomendasi course secara cepat
						</p>
					</div>
					<span className="text-lg font-bold text-[#17689e]">›</span>
				</button>

				<a
					href={siteConfig.social.instagram}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-4 rounded-[1.6rem] bg-[#fff1f6] p-4 transition-transform duration-150 active:scale-[0.98]"
				>
					<span className="flex size-12 shrink-0 items-center justify-center rounded-[1.15rem] bg-white text-pink-600 shadow-sm">
						<InstagramIcon className="size-5" />
					</span>
					<div className="min-w-0 flex-1">
						<p className="text-sm font-black text-slate-900">Instagram</p>
						<p className="mt-1 text-[0.65rem] font-medium leading-relaxed text-slate-500">
							@momkiddy.education
						</p>
					</div>
					<span className="text-lg font-bold text-pink-500">›</span>
				</a>
			</section>

			<section className="px-4 pt-7">
				<p className="text-[0.61rem] font-extrabold uppercase tracking-[0.14em] text-orange-500">
					Informasi layanan
				</p>
				<h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-900">
					Waktu terbaik menghubungi kami
				</h2>

				<div className="mt-4 grid gap-3">
					<div className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200/70 bg-white p-4">
						<span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-orange-50">
							<Clock3 className="size-5 text-orange-600" />
						</span>
						<div>
							<p className="text-xs font-black text-slate-800">
								Jam Operasional
							</p>
							<p className="mt-1 text-[0.68rem] font-semibold text-slate-600">
								{siteConfig.operationalHours}
							</p>
							<p className="mt-1 text-[0.62rem] font-medium leading-relaxed text-slate-400">
								Pesan di luar jam layanan akan dibalas pada jam kerja
								berikutnya.
							</p>
						</div>
					</div>

					{hasLocation && (
						<div className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200/70 bg-white p-4">
							<span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef6ff]">
								<MapPin className="size-5 text-[#17689e]" />
							</span>
							<div>
								<p className="text-xs font-black text-slate-800">Lokasi</p>
								<p className="mt-1 text-[0.68rem] font-semibold leading-relaxed text-slate-600">
									{[siteConfig.address, siteConfig.city]
										.filter(Boolean)
										.join(", ")}
								</p>
							</div>
						</div>
					)}
				</div>
			</section>

			<section className="px-4 pb-8 pt-7">
				<div className="rounded-[2rem] bg-[#123d73] p-5 text-center text-white">
					<MessageCircle className="mx-auto size-7 text-sky-200" />
					<h2 className="mt-3 text-lg font-black tracking-[-0.025em]">
						Siap berkonsultasi?
					</h2>
					<p className="mx-auto mt-1 max-w-xs text-xs font-medium leading-relaxed text-white/65">
						Admin akan membantu menemukan course yang sesuai dengan kebutuhan
						dan target belajarmu.
					</p>
					<a
						href={waUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-4 inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-[0.7rem] font-extrabold text-white transition-transform duration-150 active:scale-[0.97]"
					>
						<MessageCircle className="size-4" />
						Chat WhatsApp
					</a>
				</div>
			</section>
		</>
	);
}
