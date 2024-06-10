'use client'

import { PieChart } from '@tinybirdco/charts'

export function AirlineMarketShare() {
  return (
    <PieChart
      endpoint="https://api.tinybird.co/v0/pipes/airline_market_share.json"
      token="p.eyJ1IjogIjg0NjBkMmI0LTYyZTgtNGJhMi1hYmNlLTI0YjU4MDZmYjQwNiIsICJpZCI6ICI1NDA4ODU1Yy1lNDFlLTRmOTctYjMzNS00MjRlMDAxZjY1NmQiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.StiMo4lxgdy1hNWLSNHuQQsNn90Q49UlA9nGw05FEck"
      index="airline"
      categories={['bookings']}
      colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Airline Market Share"
      description="Airline marketshare by booking volume"
      showLegend={true}
      height="500px"
    />
  )
}