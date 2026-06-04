import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
	component: () => <div className="p-8 text-center text-muted-foreground">Artikel — segera hadir</div>,
});
