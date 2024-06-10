'use client'

import { LineChart } from '@tinybirdco/charts'

export function DailyBookingVolumeTotal({ token }: { token: string }) {
  return (
    <LineChart
      endpoint="https://api.tinybird.co/v0/pipes/bookings_over_time.json"
      token={token}
      index="time"
      categories={['bookings']}
      title="Daily booking volume (total)"
      description="Volume of flights booked across all airlines per day"
      height="300px"
      padding="16px"
      borderRadius="8px"
    />
  )
}