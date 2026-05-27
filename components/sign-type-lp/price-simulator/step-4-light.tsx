"use client"

import { StepCard } from "./step-card"
import { cn } from "@/lib/utils"
import type { LightChoice } from "./types"

type Step4Props = {
  value: LightChoice
  onChange: (v: LightChoice) => void
}

const OPTIONS: Array<{ choice: LightChoice; title: string; badge?: string }> = [
  { choice: { value: "不要", cost: 0 }, title: "不要" },
  { choice: { value: "最適なものを提案", cost: 0 }, title: "最適なものを提案" },
  {
    choice: { value: "アームライト", cost: 20000 },
    title: "アームライト",
    badge: "+¥2万〜",
  },
  {
    choice: { value: "アドビュー", cost: 40000 },
    title: "アドビュー",
    badge: "+¥4万〜",
  },
]

export function Step4Light({ value, onChange }: Step4Props) {
  return (
    <StepCard
      stepNumber={4}
      title="照明オプション"
      subtitle="夜間の視認性UP（任意）"
      hintKey="light"
      hintLabel="照明の種類"
    >
      <div className="grid grid-cols-2 gap-2.5">
        {OPTIONS.map((opt) => {
          const isActive = value.value === opt.choice.value
          return (
            <button
              key={opt.choice.value}
              type="button"
              onClick={() => onChange(opt.choice)}
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
              <div className="text-[15px] font-medium text-[#0F2742]">
                {opt.title}
              </div>
            </button>
          )
        })}
      </div>
    </StepCard>
  )
}
