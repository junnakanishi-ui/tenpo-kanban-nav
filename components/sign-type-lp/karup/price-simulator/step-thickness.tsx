"use client"

import { cn } from "@/lib/utils"
import { KARUP_THICKNESSES } from "@/data/simulators/karup-letter"
import { StepCard } from "./step-card"
import { Tooltip } from "./tooltip"
import type { SimulatorState } from "./types"

type Props = {
  value: SimulatorState["thickness"]
  onChange: (thickness: SimulatorState["thickness"]) => void
}

export function StepThickness({ value, onChange }: Props) {
  return (
    <StepCard stepNumber={4} title="厚み">
      <div className="grid grid-cols-1 gap-2">
        {KARUP_THICKNESSES.map((t) => {
          const isActive = value === t.id
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              className={cn(
                "flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-left transition-all",
                isActive
                  ? "border-2 border-[#0F2742] bg-[#EAF4FF] p-[9px]"
                  : "border border-slate-200 bg-white hover:border-[#0F2742]"
              )}
            >
              <span className="text-sm font-medium text-[#0F2742]">{t.label}</span>
              <Tooltip label={t.desc} />
            </button>
          )
        })}
      </div>
    </StepCard>
  )
}
