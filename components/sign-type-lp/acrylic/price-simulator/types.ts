import type { AcrylicType, SizeKey, Thickness } from "@/data/simulators/acrylic-sign"
import type { DesignChoiceValue } from "@/data/pricing-rules"

export type SimulatorState = {
  type: AcrylicType
  size: SizeKey
  thickness: Thickness
  bevel: boolean
  mount: string
  design: { value: DesignChoiceValue; cost: number }
  choice: "only" | "install"
}
