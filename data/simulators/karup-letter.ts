// カルプ文字 価格シミュレーター用ロジック・マスタデータ
// 計算は文字高(mm)・文字数・厚み・仕上げから算出する。
import { INSTALL_FEE_DEFAULT, toTaxIncluded } from "@/data/pricing-rules"

// ===== 素材（ベースカルプ色） =====
export type KarupColor = "white" | "black"

export type KarupColorInfo = {
  id: KarupColor
  name: string
  description: string
  recommendedFor: string[]
}

export const KARUP_COLORS: KarupColorInfo[] = [
  {
    id: "white",
    name: "白カルプ",
    description:
      "表面はつや有りアクリル。明るく清潔感のある仕上がりで、ロゴや社名を爽やかに見せたい店舗・オフィスに人気です。",
    recommendedFor: ["オフィス", "クリニック", "美容室", "ショップ"],
  },
  {
    id: "black",
    name: "黒カルプ",
    description:
      "表面はつや消しアクリル。落ち着いた高級感・重厚感を演出でき、バーやアパレル、士業事務所などに向いています。",
    recommendedFor: ["バー", "アパレル", "士業", "飲食店"],
  },
]

// ===== 厚み（係数） =====
export type Thickness = "10mm" | "20mm" | "30mm"

export type ThicknessInfo = {
  id: Thickness
  factor: number
  label: string
  desc: string
}

export const KARUP_THICKNESSES: ThicknessInfo[] = [
  { id: "10mm", factor: 1.0, label: "10mm", desc: "薄型でスッキリ。屋内や小ぶりな立体文字に。" },
  { id: "20mm", factor: 1.5, label: "20mm", desc: "標準的な立体感。多くの店舗看板におすすめ。" },
  { id: "30mm", factor: 2.0, label: "30mm", desc: "しっかりした厚みで存在感。遠くからも目立つ。" },
]

// ===== 仕上げ（係数） =====
export type Finish = "raw" | "sheet" | "paint"

export type FinishInfo = {
  id: Finish
  factor: number
  name: string
  desc: string
  badge?: string
}

export const KARUP_FINISHES: FinishInfo[] = [
  {
    id: "raw",
    factor: 0,
    name: "素地仕上げ",
    desc: "白/黒カルプそのままの表面。コストを抑えたい方に。",
  },
  {
    id: "sheet",
    factor: 0.30,
    name: "カッティングシート貼り",
    desc: "表面に好きな色のシートを貼って仕上げ。色のバリエーション豊富。",
    badge: "+30%",
  },
  {
    id: "paint",
    factor: 0.45,
    name: "塗装仕上げ",
    desc: "側面まで塗装で美しく。高級感を出したい立体文字に。",
    badge: "+45%",
  },
]

// ===== 文字種（表示用。価格には影響しない＝相談時の参考情報） =====
export const CHAR_TYPES = [
  { id: "english", label: "英数字・ローマ字" },
  { id: "kanji", label: "漢字・かな" },
] as const

// ===== 価格計算 =====
const BASE_FLOOR = 1680 // 1文字あたりの最低基本単価

export function getKarupBaseUnit(charHeight: number, thickness: Thickness): number {
  const tInfo = KARUP_THICKNESSES.find((t) => t.id === thickness)
  const factor = tInfo?.factor ?? 1.0
  const raw = Math.max(BASE_FLOOR, charHeight * charHeight * 0.05)
  return Math.round(raw * factor)
}

export type KarupCalcInput = {
  charHeight: number
  charCount: number
  thickness: Thickness
  finish: Finish
  designCost: number // 0 or DESIGN_FEE
  withInstall: boolean
}

export type KarupCalcResult = {
  baseUnit: number
  finishUnit: number
  subtotal: number
  designCost: number
  installFee: number
  onlyTotalInTax: number
  installTotalInTax: number
}

export function calcKarup(input: KarupCalcInput): KarupCalcResult {
  const baseUnit = getKarupBaseUnit(input.charHeight, input.thickness)
  const finishInfo = KARUP_FINISHES.find((f) => f.id === input.finish)
  const finishUnit = Math.round(baseUnit * (finishInfo?.factor ?? 0))
  const subtotal = (baseUnit + finishUnit) * input.charCount
  const baseEx = subtotal + input.designCost

  const onlyTotalInTax = toTaxIncluded(baseEx)
  const installTotalInTax = toTaxIncluded(baseEx + INSTALL_FEE_DEFAULT)

  return {
    baseUnit,
    finishUnit,
    subtotal,
    designCost: input.designCost,
    installFee: INSTALL_FEE_DEFAULT,
    onlyTotalInTax,
    installTotalInTax,
  }
}

// ===== シミュレーターの注意書き =====
export const KARUP_SIM_NOTES: string[] = [
  "表示価格はカルプ文字本体の概算価格です（文字高・厚み・仕上げ・文字数から算出）。",
  "送料・取付金具・複雑な書体やロゴ形状の加工費・施工費は別途お見積もりとなります。",
  "極端に細い書体や小さな文字は製作できない場合があります。詳しくはご相談ください。",
  "表にない厚み（15mm・50mm等）もご相談いただけます。",
]
