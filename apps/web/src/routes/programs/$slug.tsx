import { createFileRoute, notFound } from "@tanstack/react-router";
import { PROGRAMS } from "@/lib/programs-content";

export const Route = createFileRoute("/programs/$slug")({
	component: ProgramDetailPage,
	loader: ({ params }) => {
		const program = PROGRAMS[params.slug as keyof typeof PROGRAMS];
		if (!program) throw notFound();
		return { program };
	},
});

function ProgramDetailPage() {
	const { program } = Route.useLoaderData();
	return (
		<div className="p-8 text-center text-muted-foreground">
			{program.title} — detail page segera hadir
		</div>
	);
}
