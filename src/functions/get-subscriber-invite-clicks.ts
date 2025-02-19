import { redis } from '../redis/client'

interface GetSubscriberInviteCliksParams {
  subscriberId: string
}

export async function getSubscriberInviteCliks({
  subscriberId,
}: GetSubscriberInviteCliksParams) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return {
    count: count ? Number.parseInt(count) : 0,
  }
}
