import { createNextApiHandler } from "@trpc/server/adapters/next";
import { createTRPCContext } from "~/server/trpc";
import { appRouter } from "~/server/routers/root";

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});
