import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/programs/")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman Program — segera hadir</div>,
});
