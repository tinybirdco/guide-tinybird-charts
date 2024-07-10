'use client'

import { useState } from "react";

import { TopAirlines } from "./charts/Bar_TopAirlines";
import { DailyBookingVolumeTotal } from "./charts/Line_BookingsOverTime";
import { AirlineMarketShare } from "./charts/Pie_AirlineMarketshare";
import { MealChoicePopularity } from "./charts/Donut_MealChoices";
import { BookingsOverTimeByAirline } from "./charts/Area_BookingsOverTimeByAirline";

import { AirlineSelect } from "@/components/AirlineSelect";

import { dateRangeToParams } from "@/lib/utils";

import { DateRange } from "react-day-picker";

export default function TinybirdDashboard({ dateRange, token }: { dateRange: DateRange, token: string }) {

    const [airline, setAirline] = useState('Fizz');
    const handleAirlineChange = (value: string) => {
        setAirline(value);
    };

    return (
        <div>
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
        </div>
    );
}
