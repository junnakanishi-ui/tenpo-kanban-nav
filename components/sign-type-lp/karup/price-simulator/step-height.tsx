"use client"

import { cn } from "@/lib/utils"
import { StepCard } from "./step-card"
import type { SimulatorState } from "./types"

const QUICK_HEIGHTS = [100, 150, 200, 300, 400] as const

type Props = {
  value: SimulatorState["charHeight"]
  onChange: (charHeight: number) => void
}

export function StepHeight({ value, onChange }: Props) {
  return (
    <StepCard stepNumber={2} title="文字高" subtitle="長辺が基準です">
      <div className="space-y-4">
        <div>
          <div className="mb-2 text-center text-3xl font-medium text-[#0F2742]">
            {value}
            <span className="ml-1 text-lg text-slate-500">mm</span>
          </div>
          <input
            type="range"
            min={50}
            max={600}
            step={10}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="h-2 w-full cursor-pointer accent-[#0F2742]"
            aria-label="文字高"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-500">
            <span>50mm</span>
            <span>600mm</span>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {QUICK_HEIGHTS.map((h) => (
            <button
              key={h}
              type="button"
              onClick={() => onChange(h)}
              className={cn(
                "rounded-lg border py-2 text-xs font-medium transition-all",
                value === h
                  ? "border-2 border-[#0F2742] bg-[#EAF4FF] text-[#0F2742]"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#0F2742]"
              )}
            >
              {h}mm
            </button>
          ))}
        </div>
      </div>
    </StepCard>
  )
}
