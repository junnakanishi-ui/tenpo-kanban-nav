"use client"

import { cn } from "@/lib/utils"
import { DESIGN_OPTIONS } from "@/data/pricing-rules"
import { StepCard } from "./step-card"
import type { SimulatorState } from "./types"

type Props = {
  value: SimulatorState["design"]
  onChange: (v: SimulatorState["design"]) => void
}

export function StepDesign({ value, onChange }: Props) {
  return (
    <StepCard stepNumber={6} title="デザインデータ" subtitle="入稿データの有無を選択">
      <div className="grid grid-cols-2 gap-2.5">
        {DESIGN_OPTIONS.map((opt) => {
          const isActive = value.value === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange({ value: opt.value, cost: opt.cost })}
              className={cn(
                "relative rounded-lg border p-3.5 text-left transition-all",
                isActive
                  ? "border-2 border-[#0F2742] bg-[#EAF4FF] p-[13px]"
                  : "border border-slate-200 bg-white hover:border-[#0F2742]"
              )}
            >
              {opt.badge && (
                <span className="absolute -top-2 right-2.5 rounded-md bg-[#F59E0B] px-2.5 py-0.5 text-[11px] font-medium text-white">
                  {opt.badge}
                </span>
              )}
              <div className="text-[15px] font-medium text-[#0F2742]">{opt.title}</div>
              <div className="mt-1 text-xs text-slate-500">{opt.desc}</div>
            </button>
          )
        })}
      </div>
    </StepCard>
  )
}
