import z from 'zod'

import { FastifyInstance } from 'fastify'
import { env } from '../env'
import { generateInviteLink } from '../functions/generate-invite-link'
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
          302: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      const redirectUrl = new URL(env.WEB_URL)

      await generateInviteLink({ subscriberId })

      redirectUrl.searchParams.set('referrer', subscriberId)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
