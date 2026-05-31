"use client"

import {
  STAINLESS_FINISHES,
  STAINLESS_FINISH_ORDER,
  type StainlessFinish,
} from "@/data/simulators/stainless-letter"
import { cn } from "@/lib/utils"
import { StepCard } from "./step-card"

type Props = {
  finish: StainlessFinish
  paintColor: string
  onFinish: (finish: StainlessFinish) => void
  onPaintColor: (value: string) => void
}

export function StepFinish({ finish, paintColor, onFinish, onPaintColor }: Props) {
  const finishById = Object.fromEntries(STAINLESS_FINISHES.map((f) => [f.id, f])) as Record<
    StainlessFinish,
    (typeof STAINLESS_FINISHES)[number]
  >

  return (
    <StepCard title="表面仕上げ">
      <div className="grid grid-cols-2 gap-2.5">
        {STAINLESS_FINISH_ORDER.map((id) => {
          const info = finishById[id]
          const isActive = finish === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => onFinish(id)}
              className={cn(
                "relative rounded-lg border px-3 py-3 text-left transition-all",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary hover:border-primary"
              )}
            >
              {info.badge && (
                <span
                  className={cn(
                    "absolute -top-2 right-2 rounded-md px-2 py-0.5 text-[10px] font-medium",
                    isActive ? "bg-primary-foreground text-primary" : "bg-accent text-accent-foreground"
                  )}
                >
                  {info.badge}
                </span>
              )}
              <span className="text-sm font-medium">{info.name}</span>
            </button>
          )
        })}
      </div>
      {finish === "塗装" && (
        <div className="mt-3.5 space-y-1.5">
          <input
            type="text"
            value={paintColor}
            onChange={(e) => onPaintColor(e.target.value)}
            placeholder="例：白、DIC 123、日塗工 N-95"
            className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-primary placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <p className="text-xs text-muted-foreground">
            ※色やDIC・日塗工番号が分かれば入力してください（価格は変わりません）
          </p>
        </div>
      )}
    </StepCard>
  )
}
