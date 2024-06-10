'use client'

import { BarList } from '@tinybirdco/charts'

export function Top10Airlines() {
  return (
    <BarList
      endpoint="https://api.tinybird.co/v0/pipes/top_10_airlines.json"
      token="p.eyJ1IjogIjg0NjBkMmI0LTYyZTgtNGJhMi1hYmNlLTI0YjU4MDZmYjQwNiIsICJpZCI6ICI1NmYzMGI3OC1jMWQwLTRhMjYtOTU3ZC1mMzY4ZDk0NGQ1MTYiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.x9-3RUUTMCUQOzviXamug9RY7amKgEIBmsNTVUkJtSU"
      index="airline"
      categories={['bookings']}
      colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Top 10 Airlines"
      description="Top 10 airlines ranked by booking volume"
      height="500px"
    />
  )
}