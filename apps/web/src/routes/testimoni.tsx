import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/testimoni")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /testimoni — segera hadir</div>,
});
