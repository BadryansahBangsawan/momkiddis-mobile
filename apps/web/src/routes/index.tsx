import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	BookOpen,
	Bot,
	BriefcaseBusiness,
	Clock3,
	GraduationCap,
	MessageCircle,
	Sparkles,
	UserRound,
	UsersRound,
} from "lucide-react";
import ProgramCard from "@/components/sections/program-card";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { PROGRAM_LIST } from "@/lib/programs-content";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

const CATEGORY_ITEMS = [
	{
		label: "Kelas Ibu",
		slug: "momsky-class",
		icon: UserRound,
		color: "bg-orange-100 text-orange-600",
	},
	{
		label: "Kelas Anak",
		slug: "kiddis-class",
		icon: BookOpen,
		color: "bg-sky-100 text-sky-600",
	},
	{
		label: "Remaja",
		slug: "teenager-class",
		icon: UsersRound,
		color: "bg-pink-100 text-pink-600",
	},
	{
		label: "Profesional",
		slug: "professional-class",
		icon: BriefcaseBusiness,
		color: "bg-emerald-100 text-emerald-600",
	},
	{
		label: "IELTS & TOEFL",
		slug: "ielts-toefl-class",
		icon: GraduationCap,
		color: "bg-violet-100 text-violet-600",
	},
] as const;

function HomeComponent() {
	const openChat = () => {
		window.dispatchEvent(new CustomEvent("momkiddis:open-chat"));
	};

	return (
		<div>
			<section className="px-4 pt-4">
				<div className="relative min-h-[19rem] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#123d73] via-[#17689e] to-[#28a9bd] p-5 text-white shadow-[0_20px_42px_rgba(18,61,115,0.22)] lg:min-h-[22rem] lg:p-8">
					<div className="absolute -right-10 -top-12 size-44 rounded-full bg-white/10" />
					<div className="absolute -bottom-16 left-16 size-40 rounded-full bg-cyan-300/15" />
					<img
						src="/program/vertical/Momsky-class.png"
						alt=""
						aria-hidden="true"
						className="absolute -bottom-2 -right-14 h-[82%] w-[58%] object-cover object-[72%_center] [mask-image:linear-gradient(to_left,black_72%,transparent)]"
					/>

					<div className="relative z-10 max-w-[65%]">
						<span className="inline-flex items-center gap-1.5 rounded-full bg-white/14 px-3 py-1.5 text-[0.62rem] font-extrabold backdrop-blur">
							<Sparkles className="size-3.5 text-amber-300" />
							Course Online Momkiddis
						</span>
						<h1 className="mt-4 text-[1.8rem] font-black leading-[1.08] tracking-[-0.045em]">
							Belajar jadi lebih terarah.
						</h1>
						<p className="mt-3 text-xs font-semibold leading-relaxed text-white/72">
							Course untuk ibu, anak, remaja, profesional, dan persiapan
							English test.
						</p>
						<Link
							to="/programs"
							className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-[#f97316] px-4 text-[0.68rem] font-extrabold text-white shadow-[0_8px_22px_rgba(249,115,22,0.3)] transition-transform duration-150 active:scale-[0.97]"
						>
							Jelajahi Course
							<ArrowRight className="size-4" />
						</Link>
					</div>

					<div className="absolute bottom-4 left-5 z-10 flex items-center gap-2">
						<span className="rounded-full bg-white/12 px-2.5 py-1 text-[0.57rem] font-bold text-white/80 backdrop-blur">
							5 pilihan course
						</span>
						<span className="rounded-full bg-white/12 px-2.5 py-1 text-[0.57rem] font-bold text-white/80 backdrop-blur">
							Kelas online
						</span>
					</div>
				</div>
			</section>

			<section className="px-4 pt-7">
				<div className="flex items-end justify-between gap-3">
					<div>
						<p className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-orange-500">
							Pilih kebutuhan
						</p>
						<h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-900">
							Kategori course
						</h2>
					</div>
				</div>

				<div className="hide-scrollbar mt-4 flex gap-2.5 overflow-x-auto pb-2">
					{CATEGORY_ITEMS.map(({ label, slug, icon: Icon, color }) => (
						<Link
							key={slug}
							to="/programs/$slug"
							params={{ slug }}
							className="flex w-[4.65rem] shrink-0 flex-col items-center gap-2 rounded-2xl py-1 text-center transition-transform duration-150 active:scale-[0.96]"
						>
							<span
								className={`flex size-14 items-center justify-center rounded-[1.25rem] ${color}`}
							>
								<Icon className="size-6" strokeWidth={2.25} />
							</span>
							<span className="text-[0.61rem] font-extrabold leading-tight text-slate-600">
								{label}
							</span>
						</Link>
					))}
				</div>
			</section>

			<section className="pt-8">
				<div className="flex items-end justify-between gap-3 px-4">
					<div>
						<p className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[#17689e]">
							Belajar bersama kami
						</p>
						<h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-900">
							Course pilihan
						</h2>
					</div>
					<Link
						to="/programs"
						className="inline-flex items-center gap-1 text-[0.68rem] font-extrabold text-orange-600"
					>
						Lihat semua
						<ArrowRight className="size-3.5" />
					</Link>
				</div>

				{/* Mobile: horizontal scroll */}
				<div className="hide-scrollbar mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-5 lg:hidden">
					{PROGRAM_LIST.map((program) => (
						<div key={program.slug} className="snap-start">
							<ProgramCard program={program} variant="compact" />
						</div>
					))}
				</div>

				{/* Desktop: 3-column grid */}
				<div className="mt-4 hidden grid-cols-3 gap-4 px-4 pb-5 lg:grid">
					{PROGRAM_LIST.map((program) => (
						<ProgramCard key={program.slug} program={program} variant="full" />
					))}
				</div>
			</section>

			<section className="px-4 py-4">
				<div className="grid grid-cols-2 gap-3">
					<button
						type="button"
						onClick={openChat}
						className="rounded-[1.5rem] bg-[#eef6ff] p-4 text-left transition-transform duration-150 active:scale-[0.98]"
					>
						<span className="flex size-10 items-center justify-center rounded-2xl bg-white text-[#17689e] shadow-sm">
							<Bot className="size-5" />
						</span>
						<p className="mt-3 text-sm font-black text-slate-900">Tanya Chat AI</p>
						<p className="mt-1 text-[0.65rem] font-medium leading-relaxed text-slate-500">
							Cari course yang paling sesuai.
						</p>
					</button>

					<a
						href={getWhatsAppUrl()}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-[1.5rem] bg-[#ecfbf1] p-4 transition-transform duration-150 active:scale-[0.98]"
					>
						<span className="flex size-10 items-center justify-center rounded-2xl bg-white text-[#18a94f] shadow-sm">
							<MessageCircle className="size-5" />
						</span>
						<p className="mt-3 text-sm font-black text-slate-900">Chat Admin</p>
						<p className="mt-1 text-[0.65rem] font-medium leading-relaxed text-slate-500">
							Tanya jadwal dan pendaftaran.
						</p>
					</a>
				</div>
			</section>

			<ContactSummary />
		</div>
	);
}

function ContactSummary() {
	return (
		<section className="px-4 pb-8 pt-4">
			<div className="overflow-hidden rounded-[2rem] bg-[#123d73] p-5 text-white shadow-[0_18px_40px_rgba(18,61,115,0.18)]">
				<p className="text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-sky-200">
					Informasi contact
				</p>
				<h2 className="mt-2 text-[1.35rem] font-black leading-tight tracking-[-0.025em]">
					Kami siap membantu memilih course.
				</h2>

				<div className="mt-4 grid gap-2">
					<a
						href={getWhatsAppUrl()}
						target="_blank"
						rel="noopener noreferrer"
						className="flex min-h-13 items-center gap-3 rounded-2xl bg-[#25D366] px-4 transition-transform duration-150 active:scale-[0.98]"
					>
						<MessageCircle className="size-5" />
						<div>
							<p className="text-xs font-extrabold">WhatsApp Admin</p>
							<p className="text-[0.6rem] text-white/80">
								Info course, jadwal, dan pendaftaran
							</p>
						</div>
					</a>
					<a
						href={siteConfig.social.instagram}
						target="_blank"
						rel="noopener noreferrer"
						className="flex min-h-13 items-center gap-3 rounded-2xl bg-white/10 px-4 transition-transform duration-150 active:scale-[0.98]"
					>
						<InstagramIcon className="size-5 text-pink-300" />
						<div>
							<p className="text-xs font-extrabold">Instagram</p>
							<p className="text-[0.6rem] text-white/65">
								@momkiddy.education
							</p>
						</div>
					</a>
					<div className="flex min-h-13 items-center gap-3 rounded-2xl bg-white/10 px-4">
						<Clock3 className="size-5 text-sky-200" />
						<div>
							<p className="text-xs font-extrabold">Jam Operasional</p>
							<p className="text-[0.6rem] text-white/65">
								{siteConfig.operationalHours}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
