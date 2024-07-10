"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ChartProviderControl({
    provider,
    onChange
}: {
    provider: number,
    onChange: (value: number) => void
}) {

    return (
        <div>
            <span className="mr-2">Chart library:</span>
            <Button
                id="tinybird"
                variant={"outline"}
                className={cn(
                    "w-[150px] justify-start text-left font-normal mr-2",
                    (provider == 0) && "bg-green-500 hover:bg-green-500"
                )}
                onClick={() => onChange(0)}
            >
                Tinybird
            </Button>
            <Button
                id="shadcn"
                variant={"outline"}
                className={cn(
                    "w-[150px] justify-start text-left font-normal",
                    (provider == 1) && "bg-green-500 hover:bg-green-500"
                )}
                onClick={() => onChange(1)}
            >
                shadcn/charts
            </Button>
        </div>
    )
}
