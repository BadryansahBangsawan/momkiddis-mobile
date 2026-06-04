import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/event")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /event — segera hadir</div>,
});
