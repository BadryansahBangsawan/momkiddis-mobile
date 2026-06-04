import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
	component: () => <div className="p-8 text-center text-muted-foreground">Blog — segera hadir</div>,
});
