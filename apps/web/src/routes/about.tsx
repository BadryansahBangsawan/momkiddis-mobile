import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /about — segera hadir</div>,
});
