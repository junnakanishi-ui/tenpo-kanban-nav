"use client"

import { STAINLESS_MOUNTINGS, type StainlessMounting } from "@/data/simulators/stainless-letter"
import { cn } from "@/lib/utils"
import { StepCard } from "./step-card"

type Props = {
  value: StainlessMounting
  onChange: (mounting: StainlessMounting) => void
}

export function StepMounting({ value, onChange }: Props) {
  return (
    <StepCard title="加工">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {STAINLESS_MOUNTINGS.map((m) => {
          const isActive = value === m.id
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onChange(m.id)}
              className={cn(
                "rounded-lg border px-3.5 py-3 text-left text-sm font-medium transition-all",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary hover:border-primary"
              )}
            >
              {m.name}
            </button>
          )
        })}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        ※ガルバリウム鋼板など薄い壁面にはボルト出しができないケースがあります。
      </p>
      {value === "両面テープ" && (
        <div className="mt-3 rounded-lg bg-amber-50 px-3.5 py-3 text-xs leading-relaxed text-amber-900 ring-1 ring-amber-200">
          <p className="font-medium">両面テープ式の制約</p>
          <ul className="mt-1.5 list-inside list-disc space-y-0.5">
            <li>板厚は3mmのみ</li>
            <li>サイズはH150以下のみ</li>
            <li>スペーサーは選択できません</li>
          </ul>
        </div>
      )}
    </StepCard>
  )
}
