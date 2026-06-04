import { blogPosts } from "@momkiddis/db/schema";
import { and, desc, eq, like } from "drizzle-orm";
import { z } from "zod";
import { publicProcedure } from "../index";

export const blogRouter = {
	list: publicProcedure
		.input(
			z.object({
				page: z.number().int().min(1).default(1),
				perPage: z.number().int().min(1).max(50).default(9),
				tag: z.string().optional(),
			}),
		)
		.handler(async ({ context, input }) => {
			const { page, perPage, tag } = input;
			const offset = (page - 1) * perPage;

			const conditions = [eq(blogPosts.isPublished, true)];
			if (tag) {
				// tags stored as JSON array string, search for the tag within it
				conditions.push(like(blogPosts.tags, `%"${tag}"%`));
			}

			const rows = await context.db
				.select({
					id: blogPosts.id,
					slug: blogPosts.slug,
					title: blogPosts.title,
					excerpt: blogPosts.excerpt,
					authorName: blogPosts.authorName,
					authorImage: blogPosts.authorImage,
					coverImage: blogPosts.coverImage,
					tags: blogPosts.tags,
					publishedAt: blogPosts.publishedAt,
				})
				.from(blogPosts)
				.where(and(...conditions))
				.orderBy(desc(blogPosts.publishedAt))
				.limit(perPage)
				.offset(offset);

			return { items: rows, page, perPage };
		}),

	getBySlug: publicProcedure
		.input(z.object({ slug: z.string() }))
		.handler(async ({ context, input }) => {
			const rows = await context.db
				.select()
				.from(blogPosts)
				.where(
					and(
						eq(blogPosts.slug, input.slug),
						eq(blogPosts.isPublished, true),
					),
				)
				.limit(1);

			return rows[0] ?? null;
		}),
};
