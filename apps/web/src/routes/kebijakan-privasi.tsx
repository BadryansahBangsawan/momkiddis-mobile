import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kebijakan-privasi")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /kebijakan-privasi — segera hadir</div>,
});
