'use client'

import { DonutChart } from '@tinybirdco/charts'

export function MealChoicePopularity({ token }: { token: string }) {
  return (
    <DonutChart
      endpoint="https://api.tinybird.co/v0/pipes/meal_choice_distribution.json"
      token={token}
      index="meal_choice"
      categories={['total']}
      colorPalette={['#27F795', '#008060', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1']}
      title="Meal choice popularity"
      description="Popularity of meal choices"
      showLegend={true}
      height="300px"
      padding="16px"
      borderRadius="8px"
    />
  )
}