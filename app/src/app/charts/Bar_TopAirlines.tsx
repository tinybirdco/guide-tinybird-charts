'use client'

import { BarList } from '@tinybirdco/charts'

export function TopAirlines({ token }: { token: string }) {
  return (
    <BarList
      endpoint="https://api.tinybird.co/v0/pipes/top_airlines.json"
      token={token}
      index="airline"
      categories={['bookings']}
      colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Top 10 Airlines"
      description="Top 10 airlines ranked by booking volume"
      height="300px"
      padding="16px"
      borderRadius="8px"
    />
  )
}