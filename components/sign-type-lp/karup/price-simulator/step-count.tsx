"use client"

import { Minus, Plus } from "lucide-react"
import { StepCard } from "./step-card"
import type { SimulatorState } from "./types"

type Props = {
  value: SimulatorState["charCount"]
  onChange: (charCount: number) => void
}

export function StepCount({ value, onChange }: Props) {
  const decrement = () => onChange(Math.max(1, value - 1))
  const increment = () => onChange(value + 1)

  return (
    <StepCard stepNumber={3} title="文字数">
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={decrement}
          disabled={value <= 1}
          aria-label="文字数を減らす"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0F2742] transition hover:border-[#0F2742] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="min-w-[3rem] text-center text-2xl font-medium text-[#0F2742]">
          {value}
          <span className="ml-1 text-sm text-slate-500">文字</span>
        </span>
        <button
          type="button"
          onClick={increment}
          aria-label="文字数を増やす"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0F2742] transition hover:border-[#0F2742]"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </StepCard>
  )
}
