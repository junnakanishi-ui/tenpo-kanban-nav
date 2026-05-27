import { PRICE_LIST } from "@/data/simulators/plate-sign"

export type SimulatorInput = {
  width: number
  height: number
  qty: number
  designCost: number
  lightCost: number
  finishCost: number
}

export type SimulatorResult = {
  baseUnitPrice: number
  onlyTotalInTax: number
  installTotalInTax: number
  installFee: number
  installWorkerLabel: string
}

export function calcSimulator(input: SimulatorInput): SimulatorResult {
  const long = Math.max(input.width, input.height)
  const short = Math.min(input.width, input.height)

  let baseUnit = 0
  const valid = PRICE_LIST.filter((p) => p.w >= long && p.h >= short)
  if (valid.length > 0) {
    const sorted = [...valid].sort((a, b) => a.price - b.price)
    baseUnit = sorted[0].price
  } else {
    const area = (long / 1000) * (short / 1000)
    baseUnit = Math.round(area * 9000)
  }

  const oneSheet = baseUnit + input.finishCost
  const subTotal = oneSheet * input.qty
  const baseEx = subTotal + input.designCost + input.lightCost

  const onlyTotalInTax = Math.floor(baseEx * 1.1)

  const installInfo = calcInstallCost(input.width, input.height)
  const installEx = baseEx + installInfo.cost
  const installTotalInTax = Math.floor(installEx * 1.1)

  return {
    baseUnitPrice: baseUnit,
    onlyTotalInTax,
    installTotalInTax,
    installFee: installInfo.cost,
    installWorkerLabel: installInfo.label,
  }
}

function calcInstallCost(w: number, h: number): { cost: number; label: string } {
  const long = Math.max(w, h)
  const short = Math.min(w, h)
  if (long <= 1500 && short <= 1000) {
    return { cost: 30000, label: "職人1名想定" }
  }
  if (long <= 2500 && short <= 1500) {
    return { cost: 60000, label: "職人2名想定" }
  }
  return { cost: 60000, label: "職人2名以上想定（要相談）" }
}
