"use client"

import { ACRYLIC_SIZES, AVAILABLE_SIZES } from "@/data/simulators/acrylic-sign"
import { cn } from "@/lib/utils"
import { StepCard } from "./step-card"
import type { SimulatorState } from "./types"

type Props = {
  type: SimulatorState["type"]
  value: SimulatorState["size"]
  onChange: (size: SimulatorState["size"]) => void
}

export function StepSize({ type, value, onChange }: Props) {
  const sizes = AVAILABLE_SIZES[type]
    .map((key) => ACRYLIC_SIZES.find((s) => s.key === key))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <StepCard stepNumber={2} title="サイズ" subtitle="製作可能な規格サイズから選択">
      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size) => {
          const isActive = value === size.key
          return (
            <button
              key={size.key}
              type="button"
              onClick={() => onChange(size.key)}
              className={cn(
                "rounded-lg border py-2 text-xs font-medium transition-all",
                isActive
                  ? "border-2 border-[#0F2742] bg-[#EAF4FF] text-[#0F2742]"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#0F2742]"
              )}
            >
              {size.label}
            </button>
          )
        })}
      </div>
      <p className="mt-3 text-xs text-slate-500">
        透明は200角〜／白・黒は300×200〜。表にないサイズも製作可
      </p>
    </StepCard>
  )
}
