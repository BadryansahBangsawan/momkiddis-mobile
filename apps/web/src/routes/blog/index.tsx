import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/sections/page-hero";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/blog/")({
	component: BlogIndexPage,
});

function BlogIndexPage() {
	return (
		<>
			<PageHero
				title="Blog & Artikel"
				subtitle="Tips parenting, panduan belajar anak, dan cerita dari komunitas Momkiddy."
				breadcrumbs={[{ label: "Blog" }]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
				<div className="flex size-16 mx-auto items-center justify-center rounded-2xl bg-primary/10">
					<BookOpen className="size-8 text-primary" />
				</div>
				<p className="mt-4 text-base font-semibold text-foreground">
					Artikel segera hadir
				</p>
				<p className="mt-1 max-w-sm mx-auto text-sm text-muted-foreground">
					Kami sedang menyiapkan konten parenting, tips belajar, dan inspirasi
					dari komunitas Momkiddy. Pantau terus!
				</p>
			</div>
		</>
	);
}
