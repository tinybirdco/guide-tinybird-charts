'use client'

import { DonutChart } from '@tinybirdco/charts'

export function MealChoicePopularity({ token }: { token: string }) {
  return (
    <DonutChart
      endpoint="https://api.tinybird.co/v0/pipes/meal_choice_distribution.json"
      token={token}
      index="meal_choice"
      categories={['total']}
      title="Meal choice popularity"
      description="Popularity of meal choices"
      showLegend={true}
      height="300px"
      padding="16px"
      borderRadius="8px"
    />
  )
}