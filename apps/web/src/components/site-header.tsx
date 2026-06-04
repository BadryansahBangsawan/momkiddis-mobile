import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@momkiddis/ui/components/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetClose,
} from "@momkiddis/ui/components/sheet";
import { MenuIcon } from "lucide-react";

import { navLinks, siteConfig, getWhatsAppUrl } from "@/lib/site-config";
import UserMenu from "./user-menu";

export default function SiteHeader() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
			<div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<Link
					to="/"
					className="flex items-center gap-2 transition-opacity active:scale-[0.98]"
				>
					<span className="text-base font-bold tracking-tight text-primary">
						{siteConfig.name}
					</span>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden items-center gap-1 md:flex">
					{navLinks.map(({ to, label }) => (
						<Link
							key={to}
							to={to}
							className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-primary"
						>
							{label}
						</Link>
					))}
				</nav>

				{/* Desktop Right */}
				<div className="hidden items-center gap-2 md:flex">
					<UserMenu />
					<a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
						<Button className="bg-accent text-accent-foreground transition-transform active:scale-[0.97] hover:bg-accent/90">
							Daftar Sekarang
						</Button>
					</a>
				</div>

				{/* Mobile Menu Trigger */}
				<div className="flex items-center gap-2 md:hidden">
					<UserMenu />
					<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setMobileOpen(true)}
							aria-label="Buka menu"
						>
							<MenuIcon className="size-5" />
						</Button>

						<SheetContent side="right" className="w-72">
							<SheetHeader>
								<SheetTitle className="text-primary">
									{siteConfig.name}
								</SheetTitle>
							</SheetHeader>
							<nav className="flex flex-col gap-1 px-4 pt-2">
								{navLinks.map(({ to, label }) => (
									<SheetClose key={to} render={<div />}>
										<Link
											to={to}
											className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted [&.active]:text-primary"
											onClick={() => setMobileOpen(false)}
										>
											{label}
										</Link>
									</SheetClose>
								))}
								<a
									href={getWhatsAppUrl()}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-3"
								>
									<Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
										Daftar Sekarang
									</Button>
								</a>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
