import { redis } from '../redis/client'

interface GetSubscriberRankingPosition {
  subscriberId: string
}

export async function getSubscriberRankingPosition({
  subscriberId,
}: GetSubscriberRankingPosition) {
  const rank = await redis.zrevrank('referral:ranking', subscriberId)

  console.log(rank)
  if (typeof rank === 'object') {
    return {
      position: null,
    }
  }

  return {
    position: rank + 1,
  }
}
