import { events } from "@momkiddis/db/schema";
import { and, eq, desc, asc } from "drizzle-orm";
import { publicProcedure } from "../index";

export const eventsRouter = {
	listUpcoming: publicProcedure.handler(async ({ context }) => {
		return context.db
			.select()
			.from(events)
			.where(and(eq(events.isUpcoming, true), eq(events.isPublished, true)))
			.orderBy(asc(events.date))
			.limit(10);
	}),

	listPast: publicProcedure.handler(async ({ context }) => {
		return context.db
			.select()
			.from(events)
			.where(and(eq(events.isUpcoming, false), eq(events.isPublished, true)))
			.orderBy(desc(events.date))
			.limit(12);
	}),
};
