"use client"

import { useMemo, useState } from "react"
import { DESIGN_OPTIONS, INSTALL_FEE_DEFAULT, toTaxIncluded } from "@/data/pricing-rules"
import {
  AVAILABLE_SIZES,
  getAcrylicPrice,
  MOUNT_OPTIONS,
} from "@/data/simulators/acrylic-sign"
import { ResultCard } from "./result-card"
import { StepDesign } from "./step-design"
import { StepMount } from "./step-mount"
import { StepOptions } from "./step-options"
import { StepSize } from "./step-size"
import { StepType } from "./step-type"
import type { SimulatorState } from "./types"

const INITIAL_STATE: SimulatorState = {
  type: "transparent",
  size: "300x300",
  thickness: "3mm",
  bevel: false,
  mount: MOUNT_OPTIONS[0],
  design: { value: DESIGN_OPTIONS[0].value, cost: DESIGN_OPTIONS[0].cost },
  choice: "only",
}

export function PriceSimulator() {
  const [state, setState] = useState<SimulatorState>(INITIAL_STATE)

  const setType = (newType: SimulatorState["type"]) => {
    setState((s) => {
      const allowed = AVAILABLE_SIZES[newType]
      const nextSize = (allowed as readonly string[]).includes(s.size) ? s.size : allowed[0]
      return { ...s, type: newType, size: nextSize }
    })
  }

  const result = useMemo(() => {
    const base = getAcrylicPrice(state.type, state.thickness, state.size, state.bevel) ?? 0
    const baseEx = base + state.design.cost
    const onlyInTax = toTaxIncluded(baseEx)
    const installInTax = toTaxIncluded(baseEx + INSTALL_FEE_DEFAULT)
    return { base, baseEx, onlyInTax, installInTax }
  }, [state])

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_360px] lg:gap-6">
      <div className="space-y-3.5">
        <StepType value={state.type} onChange={setType} />
        <StepSize
          type={state.type}
          value={state.size}
          onChange={(size) => setState((s) => ({ ...s, size }))}
        />
        <StepOptions
          thickness={state.thickness}
          bevel={state.bevel}
          onChangeThickness={(thickness) => setState((s) => ({ ...s, thickness }))}
          onChangeBevel={(bevel) => setState((s) => ({ ...s, bevel }))}
        />
        <StepMount value={state.mount} onChange={(mount) => setState((s) => ({ ...s, mount }))} />
        <StepDesign
          value={state.design}
          onChange={(design) => setState((s) => ({ ...s, design }))}
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
