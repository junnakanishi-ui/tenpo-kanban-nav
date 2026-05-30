"use client"

import { useMemo, useState } from "react"
import { DESIGN_OPTIONS } from "@/data/pricing-rules"
import { calcKarup } from "@/data/simulators/karup-letter"
import { StepColor } from "./step-color"
import { StepHeight } from "./step-height"
import { StepCount } from "./step-count"
import { StepThickness } from "./step-thickness"
import { StepFinish } from "./step-finish"
import { StepDesign } from "./step-design"
import { ResultCard } from "./result-card"
import type { SimulatorState } from "./types"

const INITIAL_STATE: SimulatorState = {
  color: "white",
  charHeight: 200,
  charCount: 3,
  thickness: "20mm",
  finish: "raw",
  design: { value: DESIGN_OPTIONS[0].value, cost: DESIGN_OPTIONS[0].cost },
  choice: "only",
}

export function PriceSimulator() {
  const [state, setState] = useState<SimulatorState>(INITIAL_STATE)

  const result = useMemo(
    () =>
      calcKarup({
        charHeight: state.charHeight,
        charCount: state.charCount,
        thickness: state.thickness,
        finish: state.finish,
        designCost: state.design.cost,
        withInstall: state.choice === "install",
      }),
    [state]
  )

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_360px] lg:gap-6">
      <div className="space-y-3.5">
        <StepColor value={state.color} onChange={(color) => setState((s) => ({ ...s, color }))} />
        <StepHeight
          value={state.charHeight}
          onChange={(charHeight) => setState((s) => ({ ...s, charHeight }))}
        />
        <div className="grid grid-cols-2 gap-3.5">
          <StepCount
            value={state.charCount}
            onChange={(charCount) => setState((s) => ({ ...s, charCount }))}
          />
          <StepThickness
            value={state.thickness}
            onChange={(thickness) => setState((s) => ({ ...s, thickness }))}
          />
        </div>
        <StepFinish value={state.finish} onChange={(finish) => setState((s) => ({ ...s, finish }))} />
        <StepDesign value={state.design} onChange={(design) => setState((s) => ({ ...s, design }))} />
      </div>
      <div className="lg:sticky lg:top-4 lg:self-start">
        <ResultCard
          state={state}
          result={result}
          onChoiceChange={(choice) => setState((s) => ({ ...s, choice }))}
        />
      </div>
    </div>
  )
}
