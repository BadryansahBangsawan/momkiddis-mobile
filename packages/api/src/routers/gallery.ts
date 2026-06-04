import { galleryItems } from "@momkiddis/db/schema";
import { desc, eq } from "drizzle-orm";
import { publicProcedure } from "../index";

export const galleryRouter = {
	list: publicProcedure.handler(async ({ context }) => {
		return context.db
			.select()
			.from(galleryItems)
			.where(eq(galleryItems.isPublished, true))
			.orderBy(desc(galleryItems.takenAt))
			.limit(30);
	}),
};
