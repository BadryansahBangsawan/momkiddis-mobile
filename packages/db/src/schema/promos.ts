import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const promos = sqliteTable(
	"promos",
	{
		id: text("id").primaryKey(),
		title: text("title").notNull(),
		description: text("description"),
		programSlug: text("program_slug"), // null = berlaku semua program
		discountLabel: text("discount_label"), // "Diskon 20%" / "Free Worksheet"
		validFrom: integer("valid_from", { mode: "timestamp_ms" }),
		validUntil: integer("valid_until", { mode: "timestamp_ms" }),
		isActive: integer("is_active", { mode: "boolean" }).notNull().default(true),
		createdAt: integer("created_at", { mode: "timestamp_ms" })
			.default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
			.notNull(),
		updatedAt: integer("updated_at", { mode: "timestamp_ms" })
			.default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
			.$onUpdate(() => new Date())
			.notNull(),
	},
	(table) => [
		index("promos_active_idx").on(table.isActive),
	],
);
