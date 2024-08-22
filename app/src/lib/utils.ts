import { type ClassValue, clsx } from "clsx"
import { DateRange } from "react-day-picker"
import { twMerge } from "tailwind-merge"
import { format, addDays } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateRangeToParams(dateRange: DateRange) {
  return {
    date_from: format(dateRange.from, 'yyyy-MM-dd'),
    date_to: format(addDays(dateRange.to, 1), 'yyyy-MM-dd'),
  }
}
