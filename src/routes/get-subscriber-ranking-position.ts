import z from 'zod'
import { getSubscriberInviteCount } from '../functions/get-subscriber-invite-count'
import { getSubscriberRankingPosition } from '../functions/get-subscriber-ranking-position'
import type { FastifyTypedInstance } from '../types'

export async function getSubscriberRankingPositionRoute(
  app: FastifyTypedInstance
) {
  app.get(
    '/subscribers/:subscriberId/ranking/position',
    {
      schema: {
        summary: 'Get subscriber ranking position.',
        tags: ['referral'],
        params: z.object({
          subscriberId: z.string().uuid(),
        }),
        response: {
          200: z.object({
            position: z.number().nullable(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params
      const { position } = await getSubscriberRankingPosition({ subscriberId })

      return reply.send({ position })
    }
  )
}
