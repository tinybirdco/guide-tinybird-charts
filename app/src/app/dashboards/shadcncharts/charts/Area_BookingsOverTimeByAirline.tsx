'use client'

import { useQuery } from '@tinybirdco/charts'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartConfig = {
  desktop: {
    label: 'bookings',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function BookingsOverTimeByAirline({
  token,
  airline,
  dateParams,
}: {
  token: string
  airline: string
  dateParams: { date_from: string; date_to: string }
}) {
  const { data, error, loading } = useQuery({
    endpoint:
      'https://api.tinybird.co/v0/pipes/bookings_over_time_by_airline.json',
    token: token,
    params: { airline: airline, ...dateParams },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>BOOKINGS OVER TIME (BY SELECTED AIRLINE)</CardTitle>
        <CardDescription>Booking volume per day by airline</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data!}
            margin={{
              left: 12,
              right: 12,
            }}
            height={500}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="bookings"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
