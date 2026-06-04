import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/promo")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /promo — segera hadir</div>,
});
