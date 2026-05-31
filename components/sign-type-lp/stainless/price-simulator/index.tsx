"use client"

import { useMemo, useState } from "react"
import { calcStainless } from "@/data/simulators/stainless-letter"
import type { StainlessSize } from "@/data/simulators/stainless-letter"
import { StepFinish } from "./step-finish"
import { StepMounting } from "./step-mounting"
import { StepThickness } from "./step-thickness"
import { StepSize } from "./step-size"
import { StepCount } from "./step-count"
import { StepSpacer } from "./step-spacer"
import { ResultCard } from "./result-card"
import type { SimulatorState } from "./types"

const INITIAL_STATE: SimulatorState = {
  finish: "ヘアライン",
  mounting: "ボルト出し",
  thickness: "3mm",
  size: "H150",
  charCount: 1,
  spacer: false,
  paintColor: "",
  choice: "only",
  memThickness: "3mm",
  memSize: "H150",
}

const TAPE_FORBIDDEN_SIZES: StainlessSize[] = ["H200", "H300", "H500"]

export function PriceSimulator() {
  const [state, setState] = useState<SimulatorState>(INITIAL_STATE)

  const update = (patch: Partial<SimulatorState>) => {
    setState((prev) => {
      let next: SimulatorState = { ...prev, ...patch }

      if (patch.mounting && patch.mounting !== prev.mounting) {
        if (patch.mounting === "両面テープ") {
          next.memThickness = prev.thickness
          next.memSize = prev.size
        } else {
          next.thickness = prev.memThickness
          next.size = prev.memSize
        }
      } else {
        if (next.mounting === "ボルト出し") {
          if (patch.thickness) next.memThickness = patch.thickness
          if (patch.size) next.memSize = patch.size
        }
      }

      if (next.mounting === "両面テープ") {
        next.thickness = "3mm"
        next.spacer = false
        if (TAPE_FORBIDDEN_SIZES.includes(next.size)) next.size = "H150"
      }

      return next
    })
  }

  const result = useMemo(
    () =>
      calcStainless({
        finish: state.finish,
        mounting: state.mounting,
        thickness: state.thickness,
        size: state.size,
        charCount: state.charCount,
        spacer: state.spacer,
        withInstall: state.choice === "install",
      }),
    [state]
  )

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_360px] lg:gap-6">
      <div className="space-y-3.5">
        <StepFinish
          finish={state.finish}
          paintColor={state.paintColor}
          onFinish={(finish) => update({ finish })}
          onPaintColor={(paintColor) => update({ paintColor })}
        />
        <StepMounting
          value={state.mounting}
          onChange={(mounting) => update({ mounting })}
        />
        <div className="grid grid-cols-2 gap-3.5">
          <StepThickness
            value={state.thickness}
            mounting={state.mounting}
            onChange={(thickness) => update({ thickness })}
          />
          <StepCount
            value={state.charCount}
            onChange={(charCount) => update({ charCount })}
          />
        </div>
        <StepSize
          value={state.size}
          mounting={state.mounting}
          onChange={(size) => update({ size })}
        />
        <StepSpacer
          value={state.spacer}
          mounting={state.mounting}
          onChange={(spacer) => update({ spacer })}
        />
      </div>
      <div className="lg:sticky lg:top-4 lg:self-start">
        <ResultCard
          state={state}
          result={result}
          onChoiceChange={(choice) => update({ choice })}
        />
      </div>
    </div>
  )
}
