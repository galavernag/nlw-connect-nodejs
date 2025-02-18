import z from "zod";

import { FastifyInstance } from "fastify";
import { FastifyTypedInstance } from "../types";

export async function subscribeToEventRoute(app: FastifyTypedInstance) {
  app.post(
    "/subscribe",
    {
      schema: {
        summary: "Subscribe someone to a created event.",
        tags: ["subscriptions"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string().email(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body;

      return reply.status(201).send({ name, email });
    }
  );
}
