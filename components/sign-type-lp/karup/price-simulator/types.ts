import type { KarupColor, Thickness, Finish } from "@/data/simulators/karup-letter"
import type { DesignChoiceValue } from "@/data/pricing-rules"

export type SimulatorState = {
  color: KarupColor
  charHeight: number
  charCount: number
  thickness: Thickness
  finish: Finish
  design: { value: DesignChoiceValue; cost: number }
  choice: "only" | "install"
}
