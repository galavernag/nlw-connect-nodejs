import z from 'zod'

import { FastifyInstance } from 'fastify'
import { env } from '../env'
import { generateInviteLink } from '../functions/generate-invite-link'
import { getSubscriberInviteCliks } from '../functions/get-subscriber-invite-clicks'
import { subscribeToEvent } from '../functions/subscribe-to-event'
import type { FastifyTypedInstance } from '../types'

export async function getSubscriberInviteCliksRoute(app: FastifyTypedInstance) {
  app.get(
    '/subscribers/:subscriberId/ranking/clicks',
    {
      schema: {
        summary: 'Get subscriber invite clicks count.',
        tags: ['referral'],
        params: z.object({
          subscriberId: z.string().uuid(),
        }),
        response: {
          200: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params
      const { count } = await getSubscriberInviteCliks({ subscriberId })

      return reply.send({ count })
    }
  )
}
