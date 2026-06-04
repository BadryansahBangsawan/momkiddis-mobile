import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const blogPosts = sqliteTable(
	"blog_posts",
	{
		id: text("id").primaryKey(),
		slug: text("slug").notNull().unique(),
		title: text("title").notNull(),
		excerpt: text("excerpt").notNull(),
		content: text("content").notNull(),
		authorName: text("author_name").notNull(),
		authorImage: text("author_image"),
		coverImage: text("cover_image"),
		// JSON array of strings stored as text, e.g. '["parenting","tips"]'
		tags: text("tags").notNull().default("[]"),
		isPublished: integer("is_published", { mode: "boolean" })
			.notNull()
			.default(false),
		publishedAt: integer("published_at", { mode: "timestamp_ms" }),
		createdAt: integer("created_at", { mode: "timestamp_ms" })
			.default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
			.notNull(),
		updatedAt: integer("updated_at", { mode: "timestamp_ms" })
			.default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [
		index("blog_posts_slug_idx").on(table.slug),
		index("blog_posts_published_idx").on(table.isPublished),
	],
);
