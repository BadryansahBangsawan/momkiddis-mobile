import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/metode")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /metode — segera hadir</div>,
});
