import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cara-daftar")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /cara-daftar — segera hadir</div>,
});
