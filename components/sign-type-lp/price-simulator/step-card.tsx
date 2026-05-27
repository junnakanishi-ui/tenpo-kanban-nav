"use client"

import { Camera } from "lucide-react"
import { HintModal } from "./hint-modal"
import type { HintKey } from "@/data/simulators/plate-sign"
import { useState } from "react"

type StepCardProps = {
  stepNumber: number
  title: string
  subtitle: string
  hintKey: HintKey
  hintLabel: string
  children: React.ReactNode
}

export function StepCard({
  stepNumber,
  title,
  subtitle,
  hintKey,
  hintLabel,
  children,
}: StepCardProps) {
  const [hintOpen, setHintOpen] = useState(false)

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F2742] text-base font-medium text-white">
            {stepNumber}
          </span>
          <div>
            <div className="text-[17px] font-medium text-[#0F2742]">
              {title}
            </div>
            <div className="mt-0.5 text-[13px] text-slate-500">{subtitle}</div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setHintOpen(true)}
          className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-[#0F2742] bg-white px-3 py-1.5 text-xs text-[#0F2742] transition-colors hover:bg-[#EAF4FF]"
        >
          <Camera className="h-3.5 w-3.5" />
          <span>{hintLabel}</span>
        </button>
      </div>
      {children}
      <HintModal open={hintOpen} onOpenChange={setHintOpen} hintKey={hintKey} />
    </div>
  )
}
