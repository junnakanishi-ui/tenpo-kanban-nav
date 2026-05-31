import type {
  StainlessFinish,
  StainlessMounting,
  StainlessThickness,
  StainlessSize,
} from "@/data/simulators/stainless-letter"

export type SimulatorState = {
  finish: StainlessFinish
  mounting: StainlessMounting
  thickness: StainlessThickness
  size: StainlessSize
  charCount: number
  spacer: boolean
  paintColor: string
  choice: "only" | "install"
  memThickness: StainlessThickness
  memSize: StainlessSize
}
