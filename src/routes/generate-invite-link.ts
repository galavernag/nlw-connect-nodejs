import z from 'zod'

import { FastifyInstance } from 'fastify'
import { env } from '../env'
import { subscribeToEvent } from '../functions/subscribe-to-event'
import type { FastifyTypedInstance } from '../types'

export async function generateInviteLinkRoute(app: FastifyTypedInstance) {
  app.get(
    '/invites/:subscriberId',
    {
      schema: {
        summary: 'Generate invitation link of a user and redirects.',
        tags: ['referral'],
        params: z.object({
          subscriberId: z.string().uuid(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string().uuid(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      const redirectUrl = new URL(env.WEB_URL)

      redirectUrl.searchParams.set('referrer', subscriberId)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
