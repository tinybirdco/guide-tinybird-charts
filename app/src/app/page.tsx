'use client'

import { useState } from "react";

import { TopAirlines } from "./charts/Bar_TopAirlines";
import { DailyBookingVolumeTotal } from "./charts/Line_BookingsOverTime";
import { AirlineMarketShare } from "./charts/Pie_AirlineMarketshare";
import { MealChoicePopularity } from "./charts/Donut_MealChoices";
import { BookingsOverTimeByAirline } from "./charts/Area_BookingsOverTimeByAirline";

import { AirlineSelect } from "@/components/AirlineSelect";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";

import { dateRangeToParams } from "@/lib/utils";

import { DateRange } from "react-day-picker";

const pageTitle = "Tinybird Charts Demo";
const token = process.env.NEXT_PUBLIC_TINYBIRD_STATIC_READ_TOKEN ?? '';

export default function StaticDashboard() {
  const [airline, setAirline] = useState('Fizz');
  const handleAirlineChange = (value: string) => {
    setAirline(value);
  };

  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2024, 0, 1),
    to: new Date(2024, 6, 10),
  })
  const handleDateRangeChange = (value: DateRange) => {
    setDateRange(value);
  };

  return (
    <main className="mx-auto w-3/4">
      <h1 className="text-2xl font-bold my-8">{pageTitle}</h1>
      <div className="flex justify-end mb-8">
        <DatePickerWithRange date={dateRange} onChange={handleDateRangeChange} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <TopAirlines token={token} dateParams={dateRangeToParams(dateRange)} />
        <DailyBookingVolumeTotal token={token} dateParams={dateRangeToParams(dateRange)} />
        <AirlineMarketShare token={token} dateParams={dateRangeToParams(dateRange)} />
        <MealChoicePopularity token={token} dateParams={dateRangeToParams(dateRange)} />
      </div>
      <div>
        <div className="my-4">
          <AirlineSelect airline={airline} onChange={handleAirlineChange} />
        </div>
        <BookingsOverTimeByAirline token={token} airline={airline} dateParams={dateRangeToParams(dateRange)} />
      </div>
    </main>
  );
}
