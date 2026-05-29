"use client"

import { MOUNT_OPTIONS } from "@/data/simulators/acrylic-sign"
import { StepCard } from "./step-card"
import { Tooltip } from "./tooltip"

type Props = {
  value: string
  onChange: (value: string) => void
}

export function StepMount({ value, onChange }: Props) {
  return (
    <StepCard stepNumber={5} title="取付金具" subtitle="設置方法に合わせて選択">
      <div className="flex items-center gap-1.5">
        <label htmlFor="acrylic-mount" className="text-sm font-medium text-[#0F2742]">
          取付金具
        </label>
        <Tooltip label="金具の種類は仕様ガイドで詳しく解説しています。費用は別途見積もりです。" />
      </div>
      <select
        id="acrylic-mount"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-[#0F2742]"
      >
        {MOUNT_OPTIONS.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </StepCard>
  )
}
