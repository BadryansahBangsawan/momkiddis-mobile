import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Bot, Home, MessageCircleMore } from "lucide-react";
import { cn } from "@momkiddis/ui/lib/utils";

const NAV_ITEMS = [
	{ name: "Beranda", to: "/", icon: Home, exact: true },
	{ name: "Course", to: "/programs", icon: BookOpen },
	{ name: "Contact", to: "/kontak", icon: MessageCircleMore },
] as const;

export default function SiteHeader() {
	const { location } = useRouterState();

	const openChat = () => {
		window.dispatchEvent(new CustomEvent("momkiddis:open-chat"));
	};

	return (
		<>
			<header className="fixed inset-x-0 top-0 z-40 mx-auto h-[4.5rem] w-full max-w-[28rem] border-b border-slate-100 bg-white/95 px-4 backdrop-blur-xl">
				<div className="flex h-full items-center justify-between">
					<Link
						to="/"
						className="flex min-w-0 items-center gap-2.5 rounded-2xl transition-transform duration-150 active:scale-[0.97]"
					>
						<img
							src="/circle-logo.png"
							alt="Logo Momkiddis"
							className="size-10 rounded-2xl bg-orange-50 object-cover shadow-[0_5px_16px_rgba(249,115,22,0.16)]"
						/>
						<div className="min-w-0">
							<p className="truncate text-[0.98rem] font-black leading-tight tracking-[-0.02em] text-[#123d73]">
								Momkiddis
							</p>
							<p className="truncate text-[0.6rem] font-bold text-slate-400">
								Belajar, bertumbuh, percaya diri
							</p>
						</div>
					</Link>

					<button
						type="button"
						onClick={openChat}
						aria-label="Buka Chat AI"
						className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#17689e] transition-[transform,background-color] duration-150 active:scale-[0.95] active:bg-sky-100"
					>
						<Bot className="size-5" strokeWidth={2.4} />
					</button>
				</div>
			</header>

			<nav
				aria-label="Navigasi utama"
				className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-[28rem] border-t border-slate-200/80 bg-white/95 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl"
			>
				<div className="grid grid-cols-4 gap-1">
					{NAV_ITEMS.map(({ name, to, icon: Icon, exact }) => {
						const active = exact
							? location.pathname === to
							: location.pathname === to ||
								location.pathname.startsWith(`${to}/`);

						return (
							<Link
								key={name}
								to={to}
								className={cn(
									"flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl text-[0.61rem] font-extrabold transition-[transform,color,background-color] duration-150 active:scale-[0.96]",
									active
										? "bg-[#eef6ff] text-[#17689e]"
										: "text-slate-400",
								)}
							>
								<Icon className="size-[1.15rem]" strokeWidth={active ? 2.7 : 2} />
								{name}
							</Link>
						);
					})}

					<button
						type="button"
						onClick={openChat}
						className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-2xl text-[0.61rem] font-extrabold text-slate-400 transition-[transform,color,background-color] duration-150 active:scale-[0.96] active:bg-orange-50 active:text-orange-600"
					>
						<Bot className="size-[1.15rem]" strokeWidth={2} />
						Chat AI
					</button>
				</div>
			</nav>
		</>
	);
}
