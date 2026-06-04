import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /faq — segera hadir</div>,
});
