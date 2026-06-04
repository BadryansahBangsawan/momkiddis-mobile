import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/founder")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /founder — segera hadir</div>,
});
