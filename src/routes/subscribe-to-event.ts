import z from 'zod'

import { FastifyInstance } from 'fastify'
import { subscribeToEvent } from '../functions/subscribe-to-event'
import type { FastifyTypedInstance } from '../types'

export async function subscribeToEventRoute(app: FastifyTypedInstance) {
  app.post(
    '/subscribe',
    {
      schema: {
        summary: 'Subscribe someone to a created event.',
        tags: ['subscriptions'],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string().uuid(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body

      const { subscriberId } = await subscribeToEvent({ name, email })

      return reply.status(201).send({ subscriberId })
    }
  )
}
