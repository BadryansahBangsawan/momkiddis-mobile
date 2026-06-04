import { alumni } from "@momkiddis/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { z } from "zod";
import { publicProcedure } from "../index";

export const alumniRouter = {
	listFeatured: publicProcedure.handler(async ({ context }) => {
		return context.db
			.select()
			.from(alumni)
			.where(
				and(eq(alumni.isFeatured, true), eq(alumni.isPublished, true)),
			)
			.orderBy(desc(alumni.graduatedAt))
			.limit(6);
	}),

	list: publicProcedure
		.input(
			z.object({
				programSlug: z.string().optional(),
				page: z.number().int().min(1).default(1),
				perPage: z.number().int().min(1).max(50).default(12),
			}),
		)
		.handler(async ({ context, input }) => {
			const { programSlug, page, perPage } = input;
			const offset = (page - 1) * perPage;

			const conditions = [eq(alumni.isPublished, true)];
			if (programSlug) {
				conditions.push(eq(alumni.programSlug, programSlug));
			}

			const rows = await context.db
				.select()
				.from(alumni)
				.where(and(...conditions))
				.orderBy(desc(alumni.graduatedAt))
				.limit(perPage)
				.offset(offset);

			return { items: rows, page, perPage };
		}),
};
