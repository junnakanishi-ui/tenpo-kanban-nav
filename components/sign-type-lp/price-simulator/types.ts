export type DesignChoice = {
  value: "データあり" | "デザイン依頼"
  cost: 0 | 10000
}

export type EdgeChoice = {
  value: "加工なし" | "角R加工" | "シート巻き込み"
  cost: 0 | 800
  key: "none" | "round" | "wrap"
}

export type LightChoice = {
  value: "不要" | "最適なものを提案" | "アームライト" | "アドビュー"
  cost: 0 | 20000 | 40000
}

export type PriceChoice = "only" | "install"

export type SimulatorState = {
  width: number
  height: number
  qty: number
  design: DesignChoice
  hole: boolean
  edge: EdgeChoice
  light: LightChoice
  choice: PriceChoice
}
