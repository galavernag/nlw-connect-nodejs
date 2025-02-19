import z from 'zod'

import { FastifyInstance } from 'fastify'
import { env } from '../env'
import { generateInviteLink } from '../functions/generate-invite-link'
import { getRanking } from '../functions/get-ranking'
import { subscribeToEvent } from '../functions/subscribe-to-event'
import type { FastifyTypedInstance } from '../types'

export async function getRankingRoute(app: FastifyTypedInstance) {
  app.get(
    '/ranking',
    {
      schema: {
        summary: 'Get ranking.',
        tags: ['referral'],
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string().uuid(),
                name: z.string(),
                score: z.number(),
              })
            ),
          }),
        },
      },
    },
    async () => {
      const { rankingWithScore } = await getRanking()

      return { ranking: rankingWithScore }
    }
  )
}
