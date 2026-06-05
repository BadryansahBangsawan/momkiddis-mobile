import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import PageHero from "@/components/sections/page-hero";
import { orpc } from "@/utils/orpc";
import { BookOpen, CalendarDays, Tag } from "lucide-react";

export const Route = createFileRoute("/blog/")({
	loader: async ({ context: { queryClient } }) => {
		void queryClient.prefetchQuery(orpc.blog.list.queryOptions({ input: { page: 1 } }));
	},
	component: BlogIndexPage,
});

function formatDate(ts: Date | number | null | undefined) {
	if (!ts) return "";
	return new Intl.DateTimeFormat("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(ts instanceof Date ? ts : new Date(ts));
}

function parseTags(raw: string): string[] {
	try {
		return JSON.parse(raw) as string[];
	} catch {
		return [];
	}
}

function BlogIndexPage() {
	const { data, isLoading } = useQuery(
		orpc.blog.list.queryOptions({ input: { page: 1 } }),
	);

	const posts = data?.items ?? [];

	return (
		<>
			<PageHero
				title="Blog & Artikel"
				subtitle="Tips parenting, panduan belajar anak, dan cerita dari komunitas Momkiddis."
				breadcrumbs={[{ label: "Blog" }]}
			/>

			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
				{isLoading ? (
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{Array.from({ length: 3 }).map((_, i) => (
							<div key={i} className="h-48 animate-pulse rounded-xl bg-muted" />
						))}
					</div>
				) : posts.length === 0 ? (
					<div className="py-20 text-center">
						<div className="flex size-16 mx-auto items-center justify-center rounded-2xl bg-primary/10">
							<BookOpen className="size-8 text-primary" />
						</div>
						<p className="mt-4 text-base font-semibold text-foreground">
							Artikel segera hadir
						</p>
						<p className="mt-1 max-w-sm mx-auto text-sm text-muted-foreground">
							Kami sedang menyiapkan konten parenting, tips belajar, dan inspirasi
							dari komunitas Momkiddis. Pantau terus!
						</p>
					</div>
				) : (
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{posts.map((post, i) => {
							const tags = parseTags(post.tags);
							return (
								<Link
									key={post.id}
									to="/blog/$slug"
									params={{ slug: post.slug }}
									className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-200 hover:border-primary/30 hover:shadow-md active:scale-[0.98]"
									style={{ animationDelay: `${i * 60}ms` }}
								>
									{/* Cover placeholder */}
									<div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
										<BookOpen className="size-8 text-primary/20" />
									</div>

									<div className="flex flex-1 flex-col p-5">
										{/* Tags */}
										{tags.length > 0 && (
											<div className="mb-2 flex flex-wrap gap-1">
												{tags.slice(0, 2).map((tag) => (
													<span
														key={tag}
														className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
													>
														<Tag className="size-2.5" />
														{tag}
													</span>
												))}
											</div>
										)}

										<h2 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
											{post.title}
										</h2>
										<p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
											{post.excerpt}
										</p>

										<div className="mt-4 flex items-center justify-between">
											<div className="flex items-center gap-1.5">
												<div className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
													{post.authorName.charAt(0)}
												</div>
												<span className="text-xs text-muted-foreground">
													{post.authorName}
												</span>
											</div>
											{post.publishedAt && (
												<div className="flex items-center gap-1 text-xs text-muted-foreground">
													<CalendarDays className="size-3" />
													{formatDate(post.publishedAt)}
												</div>
											)}
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
}
