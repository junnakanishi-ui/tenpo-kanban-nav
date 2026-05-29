// 看板種類シミュレーターで共通利用する追加費用・選択肢定義
// 料金変更や表記変更はこのファイルだけを直す

// ===== デザイン作成費 =====
/** デザイン作成を依頼した場合の追加費用（税抜・本体に加算後に×1.1） */
export const DESIGN_FEE = 10000

/** デザイン選択肢の内部値（メール等に渡される値） */
export type DesignChoiceValue = "入稿データあり" | "デザイン作成を依頼"

export type DesignOption = {
  value: DesignChoiceValue
  /** UIに表示するタイトル */
  title: string
  /** UIに表示する補足 */
  desc: string
  /** 追加費用（税抜） */
  cost: number
  /** バッジ表記（任意） */
  badge?: string
}

export const DESIGN_OPTIONS: DesignOption[] = [
  {
    value: "入稿データあり",
    title: "入稿データがある",
    desc: "AI / PDF / JPGなど",
    cost: 0,
  },
  {
    value: "デザイン作成を依頼",
    title: "デザイン作成を依頼",
    desc: "手書きメモ等から作成",
    cost: DESIGN_FEE,
    badge: `+¥${DESIGN_FEE.toLocaleString()}〜`,
  },
]

// ===== 施工費（職人想定） =====
/** 基本施工費（職人1名想定） */
export const INSTALL_FEE_DEFAULT = 30000

// ===== 消費税 =====
export const TAX_RATE = 1.1

/** 税込換算（切り捨て） */
export function toTaxIncluded(amountExTax: number): number {
  return Math.floor(amountExTax * TAX_RATE)
}
