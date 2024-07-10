'use client'

import { useState } from "react";

import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { ChartProviderControl } from "@/components/ChartProviderControl";

import { DateRange } from "react-day-picker";
import TinybirdDashboard from "./dashboards/tinybird/TinybirdDashboard";
import ShadcnDashboard from "./dashboards/shadcncharts/TinybirdDashboard";

const pageTitle = "Tinybird Charts Demo";
const token = process.env.NEXT_PUBLIC_TINYBIRD_STATIC_READ_TOKEN ?? '';

export default function StaticDashboard() {

  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2024, 0, 1),
    to: new Date(2024, 6, 10),
  })
  const handleDateRangeChange = (value: DateRange) => {
    setDateRange(value);
  };

  const [chartProvider, setChartProvider] = useState(0);
  const handleChartProviderChange = (value: number) => {
    setChartProvider(value);
  };

  return (
    <main className="mx-auto w-3/4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold my-8">{pageTitle}</h1>
        <ChartProviderControl provider={chartProvider} onChange={handleChartProviderChange} />
      </div>
      <div className="flex justify-end mb-8">
        <DatePickerWithRange date={dateRange} onChange={handleDateRangeChange} />
      </div>
      {chartProvider === 0 && <TinybirdDashboard dateRange={dateRange} token={token} />}
      {chartProvider === 1 && <ShadcnDashboard dateRange={dateRange} token={token} />}
    </main>
  );
}
