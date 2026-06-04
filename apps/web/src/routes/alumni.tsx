import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/alumni")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /alumni — segera hadir</div>,
});
