'use client'

import { PieChart } from '@tinybirdco/charts'

export function AirlineMarketShare({ token }: { token: string }) {
  return (
    <PieChart
      endpoint="https://api.tinybird.co/v0/pipes/airline_market_share.json"
      token={token}
      index="airline"
      categories={['bookings']}
      colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Airline Market Share"
      description="Airline marketshare by booking volume"
      showLegend={true}
      height="300px"
      padding="16px"
      borderRadius="8px"
    />
  )
}