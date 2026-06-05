import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@momkiddis/ui/components/button";
import { getWhatsAppUrl } from "@/lib/site-config";
import { PROGRAM_LIST } from "@/lib/programs-content";
import {
	MessageCircleIcon,
	BookOpenIcon,
	ArrowRightIcon,
	GraduationCapIcon,
	UserIcon,
	CalendarDaysIcon,
	SparklesIcon,
} from "lucide-react";

export const Route = createFileRoute("/_auth/dashboard")({
	component: DashboardPage,
});

function DashboardPage() {
	const { session } = Route.useRouteContext();
	const firstName = session?.user.name?.split(" ")[0] ?? "Bunda";
	const waUrl = getWhatsAppUrl();
	const hour = new Date().getHours();
	const greeting =
		hour < 11 ? "Selamat pagi" : hour < 15 ? "Selamat siang" : hour < 18 ? "Selamat sore" : "Selamat malam";

	return (
		<div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
			{/* Welcome */}
			<div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-6 py-8 text-white">
				<div className="flex items-start justify-between gap-4">
					<div>
						<p className="text-sm font-medium text-white/75">
							{greeting}, 👋
						</p>
						<h1 className="mt-0.5 text-2xl font-bold">
							{firstName}!
						</h1>
						<p className="mt-2 max-w-md text-sm text-white/80 leading-relaxed">
							Selamat datang di dashboard Momkiddy Indonesia. Mulai perjalanan belajarmu hari ini.
						</p>
					</div>
					<div className="hidden shrink-0 sm:flex size-14 items-center justify-center rounded-2xl bg-white/20">
						<GraduationCapIcon className="size-7 text-white" />
					</div>
				</div>

				<div className="mt-6 flex flex-wrap gap-3">
					<a
						href={waUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary transition-opacity active:scale-[0.97] hover:opacity-90"
					>
						<MessageCircleIcon className="size-4" />
						Chat Admin WA
					</a>
					<Link to="/programs">
						<button
							type="button"
							className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors active:scale-[0.97] hover:bg-white/20"
						>
							<BookOpenIcon className="size-4" />
							Lihat Program
						</button>
					</Link>
				</div>
			</div>

			{/* Quick Actions */}
			<div className="mt-8 grid gap-4 sm:grid-cols-3">
				{[
					{
						icon: CalendarDaysIcon,
						label: "Jadwal & Batch",
						desc: "Info batch aktif dan jadwal kelas",
						to: "/jadwal" as const,
						color: "text-blue-500 bg-blue-50",
					},
					{
						icon: BookOpenIcon,
						label: "Materi Gratis",
						desc: "Download worksheet & flashcard",
						to: "/resources" as const,
						color: "text-green-500 bg-green-50",
					},
					{
						icon: SparklesIcon,
						label: "Promo Aktif",
						desc: "Cek penawaran & diskon terbaru",
						to: "/promo" as const,
						color: "text-accent bg-accent/10",
					},
				].map(({ icon: Icon, label, desc, to, color }) => (
					<Link key={to} to={to}>
						<div className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm active:scale-[0.98]">
							<div className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${color}`}>
								<Icon className="size-4.5" />
							</div>
							<div>
								<p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
									{label}
								</p>
								<p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* Program cards */}
			<div className="mt-10">
				<div className="flex items-end justify-between">
					<div>
						<p className="text-xs font-semibold uppercase tracking-widest text-primary">
							Program
						</p>
						<h2 className="mt-0.5 text-lg font-bold text-foreground">
							Pilih Program Untukmu
						</h2>
					</div>
					<Link to="/programs">
						<Button variant="ghost" size="sm" className="gap-1 text-xs text-primary">
							Lihat Semua
							<ArrowRightIcon className="size-3" />
						</Button>
					</Link>
				</div>

				<div className="mt-4 grid gap-3 sm:grid-cols-2">
					{PROGRAM_LIST.slice(0, 4).map((program) => (
						<Link
							key={program.slug}
							to="/programs/$slug"
							params={{ slug: program.slug }}
							className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm active:scale-[0.98]"
						>
							<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg">
								{program.icon === "GraduationCap" ? "🎓"
									: program.icon === "BookOpen" ? "📖"
									: program.icon === "Calculator" ? "🔢"
									: program.icon === "Globe" ? "🌍"
									: "✏️"}
							</div>
							<div className="min-w-0">
								<p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
									{program.shortTitle}
								</p>
								<p className="text-xs text-muted-foreground">
									{program.category === "ibu" ? "Program untuk Ibu" : `Usia ${program.ageRange}`}
								</p>
							</div>
							<ArrowRightIcon className="size-4 shrink-0 text-muted-foreground/40 group-hover:text-primary transition-colors ml-auto" />
						</Link>
					))}
				</div>
			</div>

			{/* Profile teaser */}
			<div className="mt-8 flex items-center justify-between rounded-xl border border-border bg-card p-4">
				<div className="flex items-center gap-3">
					<div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
						{(session?.user.name ?? "U").slice(0, 2).toUpperCase()}
					</div>
					<div>
						<p className="text-sm font-semibold text-foreground">{session?.user.name}</p>
						<p className="text-xs text-muted-foreground">{session?.user.email}</p>
					</div>
				</div>
				<Link to="/profile">
					<Button variant="outline" size="sm" className="gap-1.5 text-xs">
						<UserIcon className="size-3.5" />
						Edit Profil
					</Button>
				</Link>
			</div>
		</div>
	);
}
