import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kontak")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /kontak — segera hadir</div>,
});
