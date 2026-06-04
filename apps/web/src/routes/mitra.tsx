import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mitra")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /mitra — segera hadir</div>,
});
