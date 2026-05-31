// ステンレス切文字 価格シミュレーター用ロジック・マスタデータ
// 単価はルックアップテーブル直引き。計算順序・丸めはHTML版シミュレーターと同一。
import { INSTALL_FEE_DEFAULT, TAX_RATE } from "@/data/pricing-rules"

// 仕上げ
export type StainlessFinish = "ヘアライン" | "鏡面" | "塗装" | "チタンゴールド"
// 加工
export type StainlessMounting = "ボルト出し" | "両面テープ"
// 板厚
export type StainlessThickness = "3mm" | "5mm"
// サイズ
export type StainlessSize = "H80以下" | "H100" | "H150" | "H200" | "H300" | "H500"

// 仕上げの表示情報（LP本文・カードで使う）
export type StainlessFinishInfo = {
  id: StainlessFinish
  name: string
  desc: string
  scene: string
  maintenance: string
  badge?: string
}

export const STAINLESS_FINISHES: StainlessFinishInfo[] = [
  {
    id: "ヘアライン",
    name: "ヘアライン",
    desc: "髪の毛のような細い線状の模様を一方向に入れた、つや消しの定番仕上げ。映り込みが少なく、擦り傷が目立ちにくい。",
    scene: "屋外・屋内問わず万能。エクステリアや建材にも多用される最も人気の仕上げ。",
    maintenance: "アルコールでの拭き掃除が可能。",
    badge: "最も安価・定番",
  },
  {
    id: "鏡面",
    name: "鏡面（ミラー）",
    desc: "表面を鏡のように磨き上げた光沢仕上げ。高級感・重厚感が際立つ。指紋や傷が目立ちやすいため設置時に注意。",
    scene: "高級感を最優先したい店舗ファサードやブランドサインに。",
    maintenance: "アルコールでの拭き掃除が可能。",
  },
  {
    id: "塗装",
    name: "塗装（1色）",
    desc: "お好みのカラーで製作可能。ロゴカラーや建物の雰囲気に合わせられる。黒・白はもちろん指定色（DIC・日塗工番号）にも対応。",
    scene: "耐久性が必要な屋外の店名・社名サインに人気。ブランドカラーを再現したい場合に最適。",
    maintenance: "空拭きでの掃除が推奨。",
  },
  {
    id: "チタンゴールド",
    name: "チタンゴールド",
    desc: "真空状態でチタンをステンレス表面に付着させたゴールド仕上げ。表面硬度が高く汚れに強い。豪華な光沢が長く保たれる。",
    scene: "最上級の高級感を演出したいオフィス内装・ブランド店舗に。",
    maintenance: "空拭きでの掃除が推奨。",
    badge: "最高級",
  },
]

// 加工方法の表示情報
export type StainlessMountingInfo = {
  id: StainlessMounting
  name: string
  desc: string
  pros: string[]
  cons: string[]
  scene: string
}

export const STAINLESS_MOUNTINGS: StainlessMountingInfo[] = [
  {
    id: "ボルト出し",
    name: "ボルト出し（スタッド式）",
    desc: "文字裏に固定したボルトを壁に埋め込んで取り付ける方式。スタッドボルトを溶接で固定するため取り外しは不可。サインシティでは主に3mm厚で製作。",
    pros: ["強度が高く屋外でも安心", "大きい文字・重い文字に対応", "壁から浮かせて影を演出できる"],
    cons: ["壁面に穴あけが必要", "ガルバリウム鋼板など薄い壁面には不可のケースあり"],
    scene: "屋外の店舗ファサード、大型サイン、長期使用したい看板に。",
  },
  {
    id: "両面テープ",
    name: "両面テープ式",
    desc: "文字裏に両面テープを貼り壁面に固定する方式。穴あけが難しい面やガラス面に向く。強度はボルトに劣るため、屋外・大型・重量物には不向き。",
    pros: ["壁に穴をあけない", "ガラス面など穴あけ不可の面に設置可能", "自分でも設置しやすい（原寸大の位置合わせ用紙を同封）"],
    cons: ["強度が弱く屋外・大型には不向き", "板厚3mm・H150以下に限定", "スペーサー不可"],
    scene: "オフィス内装のロゴ掲示、ガラス面サインなど、屋内の装飾用途に最適。",
  },
]

// 価格テーブル（税込として扱う単価。HTML版PRICESの完全移植）
export const STAINLESS_PRICES: Record<
  StainlessFinish,
  Partial<Record<StainlessMounting, Partial<Record<StainlessThickness, Partial<Record<StainlessSize, number>>>>>>
> = {
  ヘアライン: {
    両面テープ: { "3mm": { H80以下: 3630, H100: 4290, H150: 5940 } },
    ボルト出し: {
      "3mm": { H80以下: 3630, H100: 4290, H150: 5940, H200: 7810, H300: 11990, H500: 22990 },
      "5mm": { H80以下: 4950, H100: 5830, H150: 7480, H200: 9130, H300: 12650, H500: 27940 },
    },
  },
  鏡面: {
    両面テープ: { "3mm": { H80以下: 3850, H100: 4620, H150: 6600 } },
    ボルト出し: {
      "3mm": { H80以下: 3850, H100: 4620, H150: 6600, H200: 8470, H300: 13200, H500: 24640 },
      "5mm": { H80以下: 5500, H100: 6270, H150: 8140, H200: 10120, H300: 13860, H500: 30800 },
    },
  },
  塗装: {
    両面テープ: { "3mm": { H80以下: 3850, H100: 4620, H150: 6490 } },
    ボルト出し: {
      "3mm": { H80以下: 3850, H100: 4620, H150: 6490, H200: 9130, H300: 13310, H500: 24970 },
      "5mm": { H80以下: 5500, H100: 6490, H150: 8250, H200: 10560, H300: 14190, H500: 32120 },
    },
  },
  チタンゴールド: {
    両面テープ: { "3mm": { H80以下: 5390, H100: 6600, H150: 10670 } },
    ボルト出し: {
      "3mm": { H80以下: 5390, H100: 6600, H150: 10670, H200: 15730, H300: 30250, H500: 55990 },
      "5mm": { H80以下: 6930, H100: 8030, H150: 12210, H200: 17270, H300: 30910, H500: 65450 },
    },
  },
}

// スペーサー単価（税抜）
export const STAINLESS_SPACER_PRICE = 500

// 両面テープで選べるサイズか
export function isSizeAllowed(mounting: StainlessMounting, size: StainlessSize): boolean {
  if (mounting === "両面テープ") return ["H80以下", "H100", "H150"].includes(size)
  return true
}

// 両面テープで選べる板厚か
export function isThicknessAllowed(mounting: StainlessMounting, thickness: StainlessThickness): boolean {
  if (mounting === "両面テープ") return thickness === "3mm"
  return true
}

// 単価を引く（存在しない組合せは null）
export function getStainlessUnit(
  finish: StainlessFinish,
  mounting: StainlessMounting,
  thickness: StainlessThickness,
  size: StainlessSize,
): number | null {
  return STAINLESS_PRICES[finish]?.[mounting]?.[thickness]?.[size] ?? null
}

export type StainlessCalcInput = {
  finish: StainlessFinish
  mounting: StainlessMounting
  thickness: StainlessThickness
  size: StainlessSize
  charCount: number
  spacer: boolean
  withInstall: boolean
}

export type StainlessCalcResult = {
  unit: number
  base: number
  spacerFee: number
  installFee: number
  total: number
  subtotal: number
  valid: boolean
}

export function calcStainless(input: StainlessCalcInput): StainlessCalcResult {
  const unitRaw = getStainlessUnit(input.finish, input.mounting, input.thickness, input.size)
  const valid = unitRaw !== null
  const unit = unitRaw ?? 0

  const base = unit * input.charCount
  const spacerFee = input.spacer ? Math.floor(STAINLESS_SPACER_PRICE * TAX_RATE * input.charCount) : 0
  const installFee = input.withInstall ? Math.floor(INSTALL_FEE_DEFAULT * TAX_RATE) : 0
  const total = base + spacerFee + installFee
  const subtotal = Math.round(total / TAX_RATE)

  return { unit, base, spacerFee, installFee, total, subtotal, valid }
}

export const STAINLESS_SIZE_ORDER: StainlessSize[] = ["H80以下", "H100", "H150", "H200", "H300", "H500"]
export const STAINLESS_FINISH_ORDER: StainlessFinish[] = ["ヘアライン", "鏡面", "塗装", "チタンゴールド"]
export const STAINLESS_THICKNESS_ORDER: StainlessThickness[] = ["3mm", "5mm"]

export const STAINLESS_SIM_NOTES: string[] = [
  "表示価格は角ゴシック書体・1文字あたりの概算です（英数・漢字同一価格）。書体やロゴ形状により変動します。",
  "両面テープ式は落下の恐れがあるため H200 以上・5mm厚は製作できません（板厚3mm・H150以下のみ）。",
  "製作可能なサイズの目安は文字高H15mm以上・最も細い線幅2mm以上。ボルト出しの場合は線幅3.4mm以上が必要です。",
  "大量のご注文はお値引きいたします。ベース付き・2色塗装・箱曲げなど特殊仕様は別途お見積もりです。",
  "金額は概算のため、デザインや設置条件により上下するケースがございます。",
]
