'use client'

import { useQuery } from '@tinybirdco/charts'
import { Pie, PieChart } from 'recharts'

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export function AirlineMarketShare({
  token,
  dateParams,
}: {
  token: string
  dateParams: { date_from: string; date_to: string }
}) {
  const { data, error, loading } = useQuery({
    endpoint: 'https://api.tinybird.co/v0/pipes/airline_market_share.json',
    token: token,
    params: { ...dateParams },
  })

  const chartConfig = (data || []).reduce(
    (acc: ChartConfig, item: any, index: number) => {
      const airline = buildAirlineKey(item.airline)
      acc[airline] = {
        label: airline,
        color: `hsl(var(--chart-${index + 1}))`,
      }
      return acc
    },
    {} satisfies ChartConfig
  )
  const chartData = (data || []).map((item: any) => {
    const airline = buildAirlineKey(item.airline)
    return {
      ...item,
      airline,
      fill: `var(--color-${airline})`,
    }
  })

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>AIRLINE MARKET SHARE</CardTitle>
        <CardDescription>Airline market share by bookings</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="bookings" nameKey="airline" />
            <ChartLegend
              content={<ChartLegendContent nameKey="airline" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function buildAirlineKey(airline: string) {
  return airline.replace(/\s/g, '_').toLowerCase()
}
