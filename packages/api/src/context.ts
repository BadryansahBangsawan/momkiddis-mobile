import { createAuth } from "@momkiddis/auth";
import { createDb } from "@momkiddis/db";

export async function createContext({ req }: { req: Request }) {
  let session = null;
  try {
    session = await createAuth().api.getSession({
      headers: req.headers,
    });
  } catch {
    // session unavailable (no cookie or auth misconfiguration) — continue as anonymous
  }
  return {
    auth: null,
    session,
    db: createDb(),
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
