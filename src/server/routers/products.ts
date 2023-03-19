import { createTRPCRouter, publicProcedure } from "~/server/trpc";
import { getProducts } from "~/utils/prisma/products";

export const productRouter = createTRPCRouter({
  getProducts: publicProcedure.query(getProducts),
});
