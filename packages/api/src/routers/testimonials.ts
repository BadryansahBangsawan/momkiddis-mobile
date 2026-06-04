import { testimonials } from "@momkiddis/db/schema";
import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { publicProcedure } from "../index";

export const testimonialsRouter = {
	listFeatured: publicProcedure.handler(async ({ context }) => {
		return context.db
			.select()
			.from(testimonials)
			.where(
				and(
					eq(testimonials.isFeatured, true),
					eq(testimonials.isPublished, true),
				),
			)
			.limit(6);
	}),

	listByProgram: publicProcedure
		.input(z.object({ programSlug: z.string() }))
		.handler(async ({ context, input }) => {
			return context.db
				.select()
				.from(testimonials)
				.where(
					and(
						eq(testimonials.programSlug, input.programSlug),
						eq(testimonials.isPublished, true),
					),
				)
				.limit(6);
		}),
};
