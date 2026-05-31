"use client"

import { StepCard } from "./step-card"

type Props = {
  value: number
  onChange: (count: number) => void
}

export function StepCount({ value, onChange }: Props) {
  const handleChange = (raw: string) => {
    const parsed = parseInt(raw, 10)
    onChange(Math.max(1, Number.isNaN(parsed) ? 1 : Math.min(200, parsed)))
  }

  return (
    <StepCard title="文字数">
      <input
        type="number"
        min={1}
        max={200}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-center text-2xl font-medium text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <p className="mt-2 text-center text-xs text-muted-foreground">1〜200文字</p>
    </StepCard>
  )
}
