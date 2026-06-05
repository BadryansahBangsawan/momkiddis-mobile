import { promos } from "@momkiddis/db/schema";
import { eq } from "drizzle-orm";
import { publicProcedure } from "../index";

export const promosRouter = {
	listActive: publicProcedure.handler(async ({ context }) => {
		return context.db
			.select()
			.from(promos)
			.where(eq(promos.isActive, true))
			.limit(20);
	}),
};
