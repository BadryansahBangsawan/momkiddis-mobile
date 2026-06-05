import type { RouterClient } from "@orpc/server";

import { protectedProcedure, publicProcedure } from "../index";
import { testimonialsRouter } from "./testimonials";
import { alumniRouter } from "./alumni";
import { blogRouter } from "./blog";
import { galleryRouter } from "./gallery";
import { eventsRouter } from "./events";
import { resourcesRouter } from "./resources";
import { promosRouter } from "./promos";

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return "OK";
  }),
  privateData: protectedProcedure.handler(({ context }) => {
    return {
      message: "This is private",
      user: context.session?.user,
    };
  }),
  testimonials: testimonialsRouter,
  alumni: alumniRouter,
  blog: blogRouter,
  gallery: galleryRouter,
  events: eventsRouter,
  resources: resourcesRouter,
  promos: promosRouter,
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
