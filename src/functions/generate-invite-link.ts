import { redis } from '../redis/client'

interface GenereateInviteLinkParams {
  subscriberId: string
}

export async function generateInviteLink({
  subscriberId,
}: GenereateInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
