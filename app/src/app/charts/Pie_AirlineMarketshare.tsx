'use client'

import { PieChart } from '@tinybirdco/charts'

export function AirlineMarketShare({ token }: { token: string }) {
  return (
    <PieChart
      endpoint="https://api.tinybird.co/v0/pipes/airline_market_share.json"
      token={token}
      index="airline"
      categories={['bookings']}
      title="Airline Market Share"
      description="Airline marketshare by booking volume"
      showLegend={true}
      height="300px"
      padding="16px"
      borderRadius="8px"
    />
  )
}