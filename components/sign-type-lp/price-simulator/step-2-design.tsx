"use client"

import { StepCard } from "./step-card"
import { cn } from "@/lib/utils"
import type { DesignChoice } from "./types"

type Step2Props = {
  value: DesignChoice
  onChange: (v: DesignChoice) => void
}

const OPTIONS: Array<{
  choice: DesignChoice
  title: string
  desc: string
  badge?: string
}> = [
  {
    choice: { value: "データあり", cost: 0 },
    title: "入稿データがある",
    desc: "AI / PDF / JPGなど",
  },
  {
    choice: { value: "デザイン依頼", cost: 10000 },
    title: "デザイン作成を依頼",
    desc: "手書きメモ等から作成",
    badge: "+¥10,000〜",
  },
]

export function Step2Design({ value, onChange }: Step2Props) {
  return (
    <StepCard
      stepNumber={2}
      title="デザインデータ"
      subtitle="入稿データの有無を選択"
      hintKey="design"
      hintLabel="入稿との違い"
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
              <div className="mt-1 text-xs text-slate-500">{opt.desc}</div>
            </button>
          )
        })}
      </div>
    </StepCard>
  )
}
