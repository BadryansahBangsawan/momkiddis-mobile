import { resources } from "@momkiddis/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { publicProcedure } from "../index";

export const resourcesRouter = {
	list: publicProcedure
		.input(
			z.object({ category: z.string().optional() }).optional(),
		)
		.handler(async ({ context }) => {
			return context.db
				.select()
				.from(resources)
				.where(eq(resources.isPublished, true))
				.limit(50);
		}),
};
