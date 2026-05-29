"use client"

import Image from "next/image"
import { ACRYLIC_TYPES } from "@/data/simulators/acrylic-sign"
import { cn } from "@/lib/utils"
import { StepCard } from "./step-card"
import type { SimulatorState } from "./types"

const TYPE_IMAGE_MAP = {
  transparent: "/images/sign-types/acrylic-sign/types/type-transparent.jpg",
  white: "/images/sign-types/acrylic-sign/types/type-white.jpg",
  black: "/images/sign-types/acrylic-sign/types/type-black.jpg",
} as const

type Props = {
  value: SimulatorState["type"]
  onChange: (type: SimulatorState["type"]) => void
}

export function StepType({ value, onChange }: Props) {
  return (
    <StepCard stepNumber={1} title="アクリルのタイプ" subtitle="透明・白・黒から選択">
      <div className="grid grid-cols-3 gap-2.5">
        {ACRYLIC_TYPES.map((type) => {
          const isActive = value === type.id
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => onChange(type.id)}
              className={cn(
                "overflow-hidden rounded-lg text-left transition-all",
                isActive
                  ? "border-2 border-[#0F2742] bg-[#EAF4FF]"
                  : "border border-slate-200 bg-white hover:border-[#0F2742]"
              )}
            >
              <div className="relative aspect-square">
                <Image
                  src={TYPE_IMAGE_MAP[type.id]}
                  alt={type.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 120px, 33vw"
                />
              </div>
              <div className="p-2">
                <p className="text-[13px] font-medium text-[#0F2742]">{type.shortName}</p>
                <p className="mt-0.5 text-[11px] text-slate-500">{type.finishLabel}</p>
              </div>
            </button>
          )
        })}
      </div>
    </StepCard>
  )
}
