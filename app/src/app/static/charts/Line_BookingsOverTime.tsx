'use client'

import { LineChart } from '@tinybirdco/charts'

export function DailyBookingVolumeTotal() {
  return (
    <LineChart
      endpoint="https://api.tinybird.co/v0/pipes/bookings_over_time.json"
      token="p.eyJ1IjogIjg0NjBkMmI0LTYyZTgtNGJhMi1hYmNlLTI0YjU4MDZmYjQwNiIsICJpZCI6ICJmYjFlZjU2My02Zjk3LTQzNTAtYTNmNi1iYTRkMTgzMTAyYjYiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.13fAoHgV16oeb99STxE5NVrxFxQl16CKzihE_yvjVbg"
      index="time"
      categories={['bookings']}
      colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Daily booking volume (total)"
      description="Volume of flights booked across all airlines per day"
      height="500px"
    />
  )
}