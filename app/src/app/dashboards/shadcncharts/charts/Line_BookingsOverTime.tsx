'use client'

import { useQuery } from '@tinybirdco/charts'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

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

export function DailyBookingVolumeTotal({
  token,
  dateParams,
}: {
  token: string
  dateParams: { date_from: string; date_to: string }
}) {
  const { data, error, loading } = useQuery({
    endpoint: 'https://api.tinybird.co/v0/pipes/bookings_over_time.json',
    token: token,
    params: { ...dateParams },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>DAILY BOOKING VOLUME (TOTAL)</CardTitle>
        <CardDescription>
          Volume of flights booked across all airlines per day
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data!}
            margin={{
              left: 12,
              right: 12,
            }}
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="bookings"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
