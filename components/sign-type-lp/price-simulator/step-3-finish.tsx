"use client"

import { StepCard } from "./step-card"
import { cn } from "@/lib/utils"
import type { EdgeChoice } from "./types"

type Step3Props = {
  hole: boolean
  edge: EdgeChoice
  onToggleHole: () => void
  onChangeEdge: (v: EdgeChoice) => void
}

const EDGE_CHIPS: Array<{ choice: EdgeChoice; label: string }> = [
  { choice: { value: "加工なし", cost: 0, key: "none" }, label: "加工なし" },
  { choice: { value: "角R加工", cost: 800, key: "round" }, label: "角R加工 +¥800" },
  {
    choice: { value: "シート巻き込み", cost: 800, key: "wrap" },
    label: "シート巻き込み +¥800",
  },
]

export function Step3Finish({
  hole,
  edge,
  onToggleHole,
  onChangeEdge,
}: Step3Props) {
  return (
    <StepCard
      stepNumber={3}
      title="仕上げ加工"
      subtitle="必要な加工があれば選択"
      hintKey="finish"
      hintLabel="加工の違い"
    >
      <div className="space-y-3.5">
        <div>
          <SectionDivider>穴あけ加工（他と併用可）</SectionDivider>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onToggleHole}
              className={cn(
                "rounded-md border text-[13px] transition-colors",
                hole
                  ? "border-2 border-[#0F2742] bg-[#EAF4FF] px-[13px] py-[7px] font-medium text-[#0F2742]"
                  : "border-slate-200 bg-white px-3.5 py-2 text-slate-700 hover:border-[#0F2742]"
              )}
            >
              穴あけ加工 +¥800
            </button>
          </div>
        </div>

        <div>
          <SectionDivider>エッジ仕上げ（いずれか1つ）</SectionDivider>
          <div className="flex flex-wrap gap-2">
            {EDGE_CHIPS.map((c) => {
              const isActive = edge.key === c.choice.key
              return (
                <button
                  key={c.choice.key}
                  type="button"
                  onClick={() => onChangeEdge(c.choice)}
                  className={cn(
                    "rounded-md border text-[13px] transition-colors",
                    isActive
                      ? "border-2 border-[#0F2742] bg-[#EAF4FF] px-[13px] py-[7px] font-medium text-[#0F2742]"
                      : "border-slate-200 bg-white px-3.5 py-2 text-slate-700 hover:border-[#0F2742]"
                  )}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </StepCard>
  )
}

function SectionDivider({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 flex items-center gap-2 text-[11px] text-slate-400">
      <span>{children}</span>
      <span className="h-px flex-1 bg-slate-200" />
    </div>
  )
}
