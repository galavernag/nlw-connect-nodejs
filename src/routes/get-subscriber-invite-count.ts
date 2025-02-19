import z from 'zod'
import { getSubscriberInviteCount } from '../functions/get-subscriber-invite-count'
import type { FastifyTypedInstance } from '../types'

export async function getSubscriberInviteCountRoute(app: FastifyTypedInstance) {
  app.get(
    '/subscribers/:subscriberId/ranking/count',
    {
      schema: {
        summary: 'Get subscriber invites count.',
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
      const { count } = await getSubscriberInviteCount({ subscriberId })

      return reply.send({ count })
    }
  )
}
