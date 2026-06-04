import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/syarat-ketentuan")({
	component: () => <div className="p-8 text-center text-muted-foreground">Halaman /syarat-ketentuan — segera hadir</div>,
});
