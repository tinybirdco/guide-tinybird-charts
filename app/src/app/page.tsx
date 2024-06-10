'use client'
import { useState } from "react";

import { TopAirlines } from "./charts/Bar_TopAirlines";
import { DailyBookingVolumeTotal } from "./charts/Line_BookingsOverTime";
import { AirlineMarketShare } from "./charts/Pie_AirlineMarketshare";
import { MealChoicePopularity } from "./charts/Donut_MealChoices";
import { BookingsOverTimeByAirline } from "./charts/Area_BookingsOverTimeByAirline";

import { AirlineSelect } from "@/components/AirlineSelect";

const pageTitle = "Tinybird Charts Demo";
const token = process.env.NEXT_PUBLIC_TINYBIRD_STATIC_READ_TOKEN ?? '';

export default function StaticDashboard() {
  const [airline, setAirline] = useState('Fizz');
  const handleAirlineChange = (value: string) => {
    setAirline(value);
  };

  return (
    <main className="mx-auto w-3/4">
      <h1 className="text-2xl font-bold my-8">{pageTitle}</h1>
      <div className="grid grid-cols-2 gap-4">
        <TopAirlines token={token} />
        <DailyBookingVolumeTotal token={token} />
        <AirlineMarketShare token={token} />
        <MealChoicePopularity token={token} />
      </div>
      <div>
        <div className="my-4">
          <AirlineSelect airline={airline} onChange={handleAirlineChange} />
        </div>
        <BookingsOverTimeByAirline token={token} airline={airline} />
      </div>
    </main>
  );
}
