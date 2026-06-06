import { Toaster } from "@momkiddis/ui/components/sonner";
import type { QueryClient } from "@tanstack/react-query";
import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
	useRouterState,
} from "@tanstack/react-router";

import type { orpc } from "@/utils/orpc";

import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import { ChatWidget } from "../components/chat/chat-widget";

import appCss from "../index.css?url";
export interface RouterAppContext {
	orpc: typeof orpc;
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Momkiddis Indonesia — Belajar Bahasa Inggris Online",
			},
		],
			links: [
				{
					rel: "stylesheet",
					href: appCss,
				},
				{
					rel: "icon",
					type: "image/png",
					href: "/circle-logo.png",
				},
				{
					rel: "apple-touch-icon",
					href: "/circle-logo.png",
				},
			],
		}),

	component: RootDocument,
});

function RootDocument() {
	const routerState = useRouterState();
	const isAdmin = routerState.location.pathname.startsWith("/admin");

	if (isAdmin) {
		return (
			<html lang="id">
				<head>
					<HeadContent />
				</head>
				<body>
					<Outlet />
					<Toaster richColors />
					<Scripts />
				</body>
			</html>
		);
	}

	return (
		<html lang="id">
			<head>
				<HeadContent />
			</head>
			<body className="bg-[#e9eff6]">
				<div className="mx-auto flex min-h-svh w-full max-w-[28rem] flex-col overflow-hidden bg-[#f7f9fc] shadow-[0_0_52px_rgba(15,23,42,0.14)] lg:max-w-4xl">
					<SiteHeader />
					<main className="flex-1 pb-24 pt-[4.5rem] lg:pb-8">
						<Outlet />
					</main>
					<SiteFooter />
				</div>
				<ChatWidget />
				<Toaster richColors />
				<Scripts />
			</body>
		</html>
	);
}
