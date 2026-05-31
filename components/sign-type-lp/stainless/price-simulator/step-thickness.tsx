"use client"

import {
  STAINLESS_THICKNESS_ORDER,
  type StainlessMounting,
  type StainlessThickness,
} from "@/data/simulators/stainless-letter"
import { cn } from "@/lib/utils"
import { StepCard } from "./step-card"

type Props = {
  value: StainlessThickness
  mounting: StainlessMounting
  onChange: (thickness: StainlessThickness) => void
}

export function StepThickness({ value, mounting, onChange }: Props) {
  const tapeLocked = mounting === "両面テープ"

  return (
    <StepCard title="板厚">
      <div className="grid grid-cols-2 gap-2">
        {STAINLESS_THICKNESS_ORDER.map((t) => {
          const isActive = value === t
          const disabled = tapeLocked && t === "5mm"
          return (
            <button
              key={t}
              type="button"
              disabled={disabled}
              onClick={() => onChange(t)}
              className={cn(
                "rounded-lg border px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary hover:border-primary",
                disabled && "cursor-not-allowed opacity-40 hover:border-border"
              )}
            >
              {t}
            </button>
          )
        })}
      </div>
    </StepCard>
  )
}
