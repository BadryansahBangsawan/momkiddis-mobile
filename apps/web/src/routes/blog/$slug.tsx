import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import PageHero from "@/components/sections/page-hero";
import { orpc } from "@/utils/orpc";
import { CalendarDays, Tag, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
	loader: async ({ params, context: { queryClient } }) => {
		const post = await queryClient.fetchQuery(
			orpc.blog.getBySlug.queryOptions({ input: { slug: params.slug } }),
		);
		if (!post) throw notFound();
		return { slug: params.slug };
	},
	component: BlogPostPage,
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

/** Minimal markdown to JSX — handles headings, bold, lists, hr, paragraphs */
function renderMarkdown(md: string) {
	const lines = md.split("\n");
	const elements: React.ReactNode[] = [];
	let i = 0;

	while (i < lines.length) {
		const line = lines[i];

		if (/^### /.test(line)) {
			elements.push(
				<h3 key={i} className="mb-2 mt-6 text-base font-semibold text-foreground">
					{line.slice(4)}
				</h3>,
			);
		} else if (/^## /.test(line)) {
			elements.push(
				<h2 key={i} className="mb-3 mt-8 text-lg font-bold text-foreground">
					{line.slice(3)}
				</h2>,
			);
		} else if (/^# /.test(line)) {
			elements.push(
				<h1 key={i} className="mb-4 mt-8 text-xl font-bold text-foreground">
					{line.slice(2)}
				</h1>,
			);
		} else if (/^---/.test(line)) {
			elements.push(<hr key={i} className="my-6 border-border" />);
		} else if (/^- /.test(line)) {
			// Collect list items
			const listItems: string[] = [];
			while (i < lines.length && /^- /.test(lines[i])) {
				listItems.push(lines[i].slice(2));
				i++;
			}
			elements.push(
				<ul key={`list-${i}`} className="mb-4 ml-4 space-y-1.5 list-disc">
					{listItems.map((item, j) => (
						<li key={j} className="text-sm leading-relaxed text-muted-foreground">
							{renderInline(item)}
						</li>
					))}
				</ul>,
			);
			continue;
		} else if (line.trim() === "") {
			// skip blank lines
		} else {
			elements.push(
				<p key={i} className="mb-4 text-sm leading-relaxed text-muted-foreground">
					{renderInline(line)}
				</p>,
			);
		}
		i++;
	}

	return elements;
}

/** Render inline markdown: **bold** */
function renderInline(text: string): React.ReactNode {
	const parts = text.split(/(\*\*[^*]+\*\*)/g);
	return parts.map((part, i) => {
		if (part.startsWith("**") && part.endsWith("**")) {
			return (
				<strong key={i} className="font-semibold text-foreground">
					{part.slice(2, -2)}
				</strong>
			);
		}
		return part;
	});
}

function BlogPostPage() {
	const { slug } = Route.useLoaderData();
	const { data: post } = useQuery(orpc.blog.getBySlug.queryOptions({ input: { slug } }));

	if (!post) {
		return (
			<div className="p-8 text-center text-muted-foreground">
				Artikel tidak ditemukan.
			</div>
		);
	}

	const tags = parseTags(post.tags);

	return (
		<>
			<PageHero
				title={post.title}
				subtitle={post.excerpt}
				breadcrumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
			/>

			<div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
				{/* Meta */}
				<div className="mb-8 flex flex-wrap items-center gap-4 pb-6 border-b border-border">
					<div className="flex items-center gap-2">
						<div className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
							{post.authorName.charAt(0)}
						</div>
						<span className="text-sm font-medium text-foreground">
							{post.authorName}
						</span>
					</div>
					{post.publishedAt && (
						<div className="flex items-center gap-1.5 text-sm text-muted-foreground">
							<CalendarDays className="size-3.5" />
							{formatDate(post.publishedAt)}
						</div>
					)}
					{tags.length > 0 && (
						<div className="flex flex-wrap gap-1.5">
							{tags.map((tag) => (
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
				</div>

				{/* Content */}
				<article className="prose-sm max-w-none">
					{renderMarkdown(post.content)}
				</article>

				{/* Back link */}
				<div className="mt-10 pt-6 border-t border-border">
					<Link
						to="/blog"
						className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
					>
						<ArrowLeft className="size-3.5" />
						Kembali ke Blog
					</Link>
				</div>
			</div>
		</>
	);
}
