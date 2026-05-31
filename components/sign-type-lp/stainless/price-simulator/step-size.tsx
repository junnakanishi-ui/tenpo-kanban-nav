"use client"

import {
  STAINLESS_SIZE_ORDER,
  type StainlessMounting,
  type StainlessSize,
} from "@/data/simulators/stainless-letter"
import { StepCard } from "./step-card"

const TAPE_FORBIDDEN_SIZES: StainlessSize[] = ["H200", "H300", "H500"]

type Props = {
  value: StainlessSize
  mounting: StainlessMounting
  onChange: (size: StainlessSize) => void
}

export function StepSize({ value, mounting, onChange }: Props) {
  const tapeLocked = mounting === "両面テープ"

  return (
    <StepCard title="サイズ（文字高の目安）">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as StainlessSize)}
        className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm font-medium text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      >
        {STAINLESS_SIZE_ORDER.map((size) => {
          const disabled = tapeLocked && TAPE_FORBIDDEN_SIZES.includes(size)
          return (
            <option key={size} value={size} disabled={disabled}>
              {size}
            </option>
          )
        })}
      </select>
    </StepCard>
  )
}
