"use client"

import { cn } from "@/lib/utils"
import { StepCard } from "./step-card"
import { Tooltip } from "./tooltip"
import type { SimulatorState } from "./types"

type Props = {
  thickness: SimulatorState["thickness"]
  bevel: SimulatorState["bevel"]
  onChangeThickness: (value: SimulatorState["thickness"]) => void
  onChangeBevel: (value: boolean) => void
}

function ToggleButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-lg border py-2 text-xs font-medium transition-all",
        active
          ? "border-2 border-[#0F2742] bg-[#EAF4FF] text-[#0F2742]"
          : "border border-slate-200 bg-white text-slate-600 hover:border-[#0F2742]"
      )}
    >
      {label}
    </button>
  )
}

export function StepOptions({ thickness, bevel, onChangeThickness, onChangeBevel }: Props) {
  return (
    <StepCard stepNumber={3} title="厚み・面取り" subtitle="仕上げオプションを選択">
      <div className="grid grid-cols-2 gap-2.5">
        <div>
          <p className="mb-2 text-sm font-medium text-[#0F2742]">厚み</p>
          <div className="grid grid-cols-2 gap-2">
            {(["3mm", "5mm"] as const).map((value) => (
              <ToggleButton
                key={value}
                label={value}
                active={thickness === value}
                onClick={() => onChangeThickness(value)}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 flex items-center gap-1">
            <p className="text-sm font-medium text-[#0F2742]">面取り</p>
            <Tooltip label="板の角を斜めに削り、断面をきれいに見せる加工。高級感が出ます。" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <ToggleButton label="なし" active={!bevel} onClick={() => onChangeBevel(false)} />
            <ToggleButton label="あり" active={bevel} onClick={() => onChangeBevel(true)} />
          </div>
        </div>
      </div>
    </StepCard>
  )
}
