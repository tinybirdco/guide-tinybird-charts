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

export function MealChoicePopularity({
  token,
  dateParams,
}: {
  token: string
  dateParams: { date_from: string; date_to: string }
}) {
  const { data, error, loading } = useQuery({
    endpoint: 'https://api.tinybird.co/v0/pipes/meal_choice_distribution.json',
    token: token,
    params: { ...dateParams },
  })

  const chartConfig = (data || []).reduce(
    (acc: ChartConfig, item: any, index: number) => {
      acc[item.meal_choice] = {
        label: item.meal_choice,
        color: `hsl(var(--chart-${index + 1}))`,
      }
      return acc
    },
    {} satisfies ChartConfig
  )

  const chartData = data?.map(item => ({
    ...item,
    fill: `var(--color-${item.meal_choice})`,
  }))

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>MEAL CHOICE POPULARITY</CardTitle>
        <CardDescription>Popularity of meal choices</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="total"
              nameKey="meal_choice"
              innerRadius={60}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="meal_choice" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
