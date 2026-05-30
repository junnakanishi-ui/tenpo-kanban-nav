"use client"

import { cn } from "@/lib/utils"
import { KARUP_COLORS } from "@/data/simulators/karup-letter"
import { StepCard } from "./step-card"
import type { SimulatorState } from "./types"

const COLOR_SAMPLE: Record<SimulatorState["color"], string> = {
  white: "bg-white border border-slate-200",
  black: "bg-[#1a1a1a] border border-slate-700",
}

const COLOR_FINISH: Record<SimulatorState["color"], string> = {
  white: "つや有りアクリル面",
  black: "つや消しアクリル面",
}

type Props = {
  value: SimulatorState["color"]
  onChange: (color: SimulatorState["color"]) => void
}

export function StepColor({ value, onChange }: Props) {
  return (
    <StepCard stepNumber={1} title="カルプの色">
      <div className="grid grid-cols-2 gap-2.5">
        {KARUP_COLORS.map((color) => {
          const isActive = value === color.id
          return (
            <button
              key={color.id}
              type="button"
              onClick={() => onChange(color.id)}
              className={cn(
                "rounded-lg p-3.5 text-left transition-all",
                isActive
                  ? "border-2 border-[#0F2742] bg-[#EAF4FF] p-[13px]"
                  : "border border-slate-200 bg-white hover:border-[#0F2742]"
              )}
            >
              <div className={cn("mb-2.5 h-8 w-8 rounded-md", COLOR_SAMPLE[color.id])} />
              <div className="text-[15px] font-medium text-[#0F2742]">{color.name}</div>
              <div className="mt-1 text-xs text-slate-500">{COLOR_FINISH[color.id]}</div>
            </button>
          )
        })}
      </div>
    </StepCard>
  )
}
