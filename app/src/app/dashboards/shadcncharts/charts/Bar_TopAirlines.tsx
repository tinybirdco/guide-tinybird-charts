'use client'

import { useQuery } from '@tinybirdco/charts'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
export function TopAirlines({
  token,
  dateParams,
}: {
  token: string
  dateParams: { date_from: string; date_to: string }
}) {
  const { data, error, loading } = useQuery({
    endpoint: 'https://api.tinybird.co/v0/pipes/top_airlines.json',
    token: token,
    params: { ...dateParams },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>TOP AIRLINES</CardTitle>
        <CardDescription>Top Airlines Ranked By Booking Volume</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data!}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="airline"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={value => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="bookings" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="bookings"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="airline"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="bookings"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
