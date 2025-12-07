import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const landingRouter = createTRPCRouter({
    subscribe: publicProcedure
        .input(z.object({ email: z.string().email() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.landing.create({
                data: {
                    email: input.email,
                },
            });
        }),
});
