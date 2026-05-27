"use client"

import { useMemo, useState } from "react"
import { calcSimulator } from "@/lib/price-simulator/calc"
import { Step1Size } from "./step-1-size"
import { Step2Design } from "./step-2-design"
import { Step3Finish } from "./step-3-finish"
import { Step4Light } from "./step-4-light"
import { ResultCard } from "./result-card"
import type { SimulatorState } from "./types"

const INITIAL_STATE: SimulatorState = {
  width: 900,
  height: 600,
  qty: 1,
  design: { value: "データあり", cost: 0 },
  hole: false,
  edge: { value: "加工なし", cost: 0, key: "none" },
  light: { value: "不要", cost: 0 },
  choice: "only",
}

export function PriceSimulator() {
  const [state, setState] = useState<SimulatorState>(INITIAL_STATE)

  const finishCost = useMemo(
    () => (state.hole ? 800 : 0) + state.edge.cost,
    [state.hole, state.edge]
  )

  const result = useMemo(
    () =>
      calcSimulator({
        width: state.width,
        height: state.height,
        qty: state.qty,
        designCost: state.design.cost,
        lightCost: state.light.cost,
        finishCost,
      }),
    [state, finishCost]
  )

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_360px] lg:gap-6">
      <div className="space-y-3.5">
        <Step1Size
          width={state.width}
          height={state.height}
          qty={state.qty}
          onChange={(v) => setState((s) => ({ ...s, ...v }))}
        />
        <Step2Design
          value={state.design}
          onChange={(design) => setState((s) => ({ ...s, design }))}
        />
        <Step3Finish
          hole={state.hole}
          edge={state.edge}
          onToggleHole={() => setState((s) => ({ ...s, hole: !s.hole }))}
          onChangeEdge={(edge) => setState((s) => ({ ...s, edge }))}
        />
        <Step4Light
          value={state.light}
          onChange={(light) => setState((s) => ({ ...s, light }))}
        />
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
