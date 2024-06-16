import { type ClassValue, clsx } from "clsx"
import { DateRange } from "react-day-picker"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateRangeToParams(dateRange: DateRange) {
  return {
    date_from: dateRange.from!.toISOString().slice(0,10),
    date_to: dateRange.to!.toISOString().slice(0,10),
  }
}
