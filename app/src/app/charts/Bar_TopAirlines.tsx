'use client'

import { BarList } from '@tinybirdco/charts'

export function TopAirlines({ token }: { token: string }) {
  return (
    <BarList
      endpoint="https://api.tinybird.co/v0/pipes/top_airlines.json"
      token={token}
      index="airline"
      categories={['bookings']}
      title="Top Airlines"
      description="Top airlines ranked by booking volume"
      height="300px"
      padding="16px"
      borderRadius="8px"
    />
  )
}