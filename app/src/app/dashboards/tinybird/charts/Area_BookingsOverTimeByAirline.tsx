'use client'

import { AreaChart } from '@tinybirdco/charts'

export function BookingsOverTimeByAirline(
    { token, airline, dateParams }: { token: string, airline: string, dateParams: { date_from: string, date_to: string } },
) {
    return (
        <AreaChart
            endpoint="https://api.tinybird.co/v0/pipes/bookings_over_time_by_airline.json"
            token={token}
            index="time"
            categories={['bookings']}
            title="Bookings over time (by selected airline)"
            description="Booking volume per day by airline"
            params={{ airline: airline, ...dateParams }}
            height="300px"
            padding="16px"
            borderRadius="8px"
        />
    )
}