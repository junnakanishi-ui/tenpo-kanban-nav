// アクリル看板 価格シミュレーター用マスタデータ
// 価格は本体概算（税抜ベースの掲載価格をそのまま採用）。
// 透明アクリル＋UV印刷（裏白）/ 白アクリル＋カッティングシート / 黒アクリル（白と同価格）

export type AcrylicType = "transparent" | "white" | "black"
export type Thickness = "3mm" | "5mm"

export type AcrylicTypeInfo = {
  id: AcrylicType
  name: string
  shortName: string
  finishLabel: string
  description: string
  recommendedFor: string[]
}

export const ACRYLIC_TYPES: AcrylicTypeInfo[] = [
  {
    id: "transparent",
    name: "透明アクリル＋UV印刷（裏白）",
    shortName: "透明アクリル",
    finishLabel: "UV印刷",
    description:
      "透明アクリルの裏側からUV印刷を行うタイプ。透明感と光沢を活かしながら、ロゴや文字をフルカラーで美しく表現できます。",
    recommendedFor: ["クリニック", "サロン", "教室", "オフィス入口"],
  },
  {
    id: "white",
    name: "白アクリル＋カッティングシート",
    shortName: "白アクリル",
    finishLabel: "カッティングシート",
    description:
      "白いアクリル板にカッティングシートで文字・ロゴを表現。明るく清潔な印象で、医療系・スクール系に人気です。",
    recommendedFor: ["クリニック", "歯科", "整体院", "スクール"],
  },
  {
    id: "black",
    name: "黒アクリル＋カッティングシート",
    shortName: "黒アクリル",
    finishLabel: "カッティングシート",
    description:
      "黒いアクリル板にカッティングシートで仕上げるタイプ。白・ゴールド系の文字と合わせ、落ち着いた高級感を演出します。",
    recommendedFor: ["バー", "美容室", "アパレル", "士業事務所"],
  },
]

export type SizeKey =
  | "200x200"
  | "300x200"
  | "300x300"
  | "300x450"
  | "400x200"
  | "400x400"
  | "500x500"
  | "600x600"

export type SizeInfo = { key: SizeKey; label: string; w: number; h: number }

export const ACRYLIC_SIZES: SizeInfo[] = [
  { key: "200x200", label: "200×200mm", w: 200, h: 200 },
  { key: "300x200", label: "300×200mm", w: 300, h: 200 },
  { key: "300x300", label: "300×300mm", w: 300, h: 300 },
  { key: "300x450", label: "300×450mm", w: 300, h: 450 },
  { key: "400x200", label: "400×200mm", w: 400, h: 200 },
  { key: "400x400", label: "400×400mm", w: 400, h: 400 },
  { key: "500x500", label: "500×500mm", w: 500, h: 500 },
  { key: "600x600", label: "600×600mm", w: 600, h: 600 },
]

export const AVAILABLE_SIZES: Record<AcrylicType, SizeKey[]> = {
  transparent: [
    "200x200",
    "300x200",
    "300x300",
    "300x450",
    "400x200",
    "400x400",
    "500x500",
    "600x600",
  ],
  white: ["300x200", "300x300", "300x450", "400x200", "400x400", "500x500", "600x600"],
  black: ["300x200", "300x300", "300x450", "400x200", "400x400", "500x500", "600x600"],
}

type PriceCell = { normal: number; bevel: number }
type PriceTable = Record<Thickness, Partial<Record<SizeKey, PriceCell>>>

const transparentPrices: PriceTable = {
  "5mm": {
    "200x200": { normal: 9130, bevel: 11440 },
    "300x200": { normal: 9460, bevel: 11770 },
    "300x300": { normal: 9900, bevel: 12320 },
    "300x450": { normal: 10780, bevel: 13200 },
    "400x200": { normal: 9900, bevel: 12320 },
    "400x400": { normal: 11330, bevel: 13860 },
    "500x500": { normal: 15400, bevel: 18260 },
    "600x600": { normal: 16280, bevel: 19140 },
  },
  "3mm": {
    "200x200": { normal: 8800, bevel: 11110 },
    "300x200": { normal: 9130, bevel: 11440 },
    "300x300": { normal: 9680, bevel: 11990 },
    "300x450": { normal: 10230, bevel: 12650 },
    "400x200": { normal: 9460, bevel: 11770 },
    "400x400": { normal: 10450, bevel: 12870 },
    "500x500": { normal: 13530, bevel: 16170 },
    "600x600": { normal: 14190, bevel: 16940 },
  },
}

const whiteBlackPrices: PriceTable = {
  "5mm": {
    "300x200": { normal: 9460, bevel: 11330 },
    "300x300": { normal: 10670, bevel: 12540 },
    "300x450": { normal: 11000, bevel: 12980 },
    "400x200": { normal: 10340, bevel: 12210 },
    "400x400": { normal: 11770, bevel: 13970 },
    "500x500": { normal: 13860, bevel: 16720 },
    "600x600": { normal: 15180, bevel: 18480 },
  },
  "3mm": {
    "300x200": { normal: 9020, bevel: 10560 },
    "300x300": { normal: 9460, bevel: 11000 },
    "300x450": { normal: 10230, bevel: 11880 },
    "400x200": { normal: 9350, bevel: 10890 },
    "400x400": { normal: 10560, bevel: 12540 },
    "500x500": { normal: 11880, bevel: 14080 },
    "600x600": { normal: 12760, bevel: 14960 },
  },
}

export const ACRYLIC_PRICES: Record<AcrylicType, PriceTable> = {
  transparent: transparentPrices,
  white: whiteBlackPrices,
  black: whiteBlackPrices,
}

export function getAcrylicPrice(
  type: AcrylicType,
  thickness: Thickness,
  size: SizeKey,
  bevel: boolean,
): number | null {
  const cell = ACRYLIC_PRICES[type]?.[thickness]?.[size]
  if (!cell) return null
  return bevel ? cell.bevel : cell.normal
}

export const MOUNT_OPTIONS = [
  "不要（自分で取付）",
  "穴あけのみ",
  "飾りキャップ・ポピック希望",
  "壁から浮かせる立ち上げ金具希望",
  "相談したい",
] as const

export const DESIGN_OPTIONS = [
  "入稿データあり",
  "デザイン作成を依頼",
  "ロゴ・手書きラフから相談",
] as const

export const ACRYLIC_SIM_NOTES: string[] = [
  "表示価格はアクリル看板本体の概算価格です。",
  "送料・穴あけ加工・飾りキャップ・ポピック・取付金具・施工費は別途お見積もりとなります。",
  "白・黒アクリルはカッティングシート2色までの概算です。3色以上やフルカラー表現は別途お見積もりとなります。",
  "表にないサイズもオーダー製作可能です。お気軽にお問い合わせください。",
]
