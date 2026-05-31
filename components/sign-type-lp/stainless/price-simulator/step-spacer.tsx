"use client"

import type { StainlessMounting } from "@/data/simulators/stainless-letter"
import { cn } from "@/lib/utils"
import { StepCard } from "./step-card"

type Props = {
  value: boolean
  mounting: StainlessMounting
  onChange: (spacer: boolean) => void
}

export function StepSpacer({ value, mounting, onChange }: Props) {
  const tapeLocked = mounting === "両面テープ"

  return (
    <StepCard
      title="スペーサー"
      hint="壁から文字を浮かせて立体感と影を出す浮かしパイプ。1文字¥500（税抜）/本体に加算。"
    >
      <div
        className={cn(
          "grid grid-cols-2 gap-2",
          tapeLocked && "pointer-events-none opacity-50"
        )}
      >
        <button
          type="button"
          onClick={() => onChange(false)}
          className={cn(
            "rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-all",
            !value
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-primary hover:border-primary"
          )}
        >
          不要
        </button>
        <button
          type="button"
          onClick={() => onChange(true)}
          className={cn(
            "rounded-lg border px-3.5 py-2.5 text-sm font-medium transition-all",
            value
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-primary hover:border-primary"
          )}
        >
          必要
        </button>
      </div>
      {tapeLocked && (
        <p className="mt-3 text-xs text-muted-foreground">
          ※両面テープ式ではスペーサーは選択できません
        </p>
      )}
    </StepCard>
  )
}
