"use client"

import { cn } from "@/lib/utils"
import { KARUP_FINISHES } from "@/data/simulators/karup-letter"
import { StepCard } from "./step-card"
import { Tooltip } from "./tooltip"
import type { SimulatorState } from "./types"

type Props = {
  value: SimulatorState["finish"]
  onChange: (finish: SimulatorState["finish"]) => void
}

export function StepFinish({ value, onChange }: Props) {
  return (
    <StepCard stepNumber={5} title="仕上げ">
      <div className="grid grid-cols-1 gap-2.5">
        {KARUP_FINISHES.map((f) => {
          const isActive = value === f.id
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onChange(f.id)}
              className={cn(
                "relative rounded-lg border p-3.5 text-left transition-all",
                isActive
                  ? "border-2 border-[#0F2742] bg-[#EAF4FF] p-[13px]"
                  : "border border-slate-200 bg-white hover:border-[#0F2742]"
              )}
            >
              {f.badge && (
                <span className="absolute -top-2 right-2.5 rounded-md bg-[#F59E0B] px-2.5 py-0.5 text-[11px] font-medium text-white">
                  {f.badge}
                </span>
              )}
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-medium text-[#0F2742]">{f.name}</span>
                <Tooltip label={f.desc} />
              </div>
            </button>
          )
        })}
      </div>
    </StepCard>
  )
}
