'use client'

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AirlineSelect({ airline, onChange }: { airline: string, onChange: (value: string) => void }) {
  return (
    <Select
      value={airline}
      onValueChange={(value) => {
        onChange(value)
      }}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select an airline" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Fizz">Fizz</SelectItem>
          <SelectItem value="GAS">GAS</SelectItem>
          <SelectItem value="Ler Dingus">Ler Dingus</SelectItem>
          <SelectItem value="EasyPlane">EasyPlane</SelectItem>
          <SelectItem value="Skittish Airways">Skittish Airways</SelectItem>
          <SelectItem value="Red Balloon">Red Balloon</SelectItem>
          <SelectItem value="BrianAir">BrianAir</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
