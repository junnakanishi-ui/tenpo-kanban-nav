// 価格帯マスタデータ
// 価格帯から選ぶセクション（PriceRanges）から参照されます。
// 将来 /price/[slug] の個別ページを作る場合もここを起点にします。

export type PriceRange = {
  /** URL用のスラッグ（将来 /price/[slug] で使用） */
  slug: string
  /** カード上部の大ラベル（例: "5万円以内"） */
  label: string
  /** 金額レンジの表示（例: "〜¥50,000"） */
  range: string
  /** この価格帯で選べる看板の種類（カンマ・スラッシュ区切り文字列） */
  types: string
  /** カードに表示する補足説明 */
  note: string
  /** カード画像のパス（public/ からの絶対パス） */
  img: string
  /** 画像のalt属性 */
  alt: string
  /** カードの遷移先（個別ページ未作成時は "#"） */
  href: string
  /** 「人気の価格帯」バッジを表示するか */
  recommended?: boolean
}

export const priceRanges: PriceRange[] = [
  {
    slug: "budget-small",
    label: "5万円以内",
    range: "〜¥50,000",
    types: "店頭幕 / プレート看板（小） / スタンド看板",
    note: "小型・短納期。販促や仮設用に最適。",
    img: "/images/price-ranges/budget-small.jpg",
    alt: "5万円以内で作れる店頭幕とスタンド看板の例",
    href: "#",
  },
  {
    slug: "budget-medium",
    label: "10万円前後",
    range: "¥50,000〜¥150,000",
    types: "プレート看板 / アクリル看板 / カルプ文字",
    note: "店舗デビューの定番ゾーン。素材選択肢が広く、初めての出店に最も選ばれています。",
    img: "/images/price-ranges/budget-medium.jpg",
    alt: "10万円前後のプレート看板とアクリル看板の例",
    href: "#",
    recommended: true,
  },
  {
    slug: "budget-large",
    label: "20万円前後",
    range: "¥150,000〜¥300,000",
    types: "ステンレス切文字 / 大型アクリル / 突き出し看板",
    note: "高級感や視認性アップを狙う中規模店舗向け。",
    img: "/images/price-ranges/budget-large.jpg",
    alt: "20万円前後のステンレス切文字と突き出し看板の例",
    href: "#",
  },
  {
    slug: "budget-premium",
    label: "30万円以上",
    range: "¥300,000〜",
    types: "チャンネル文字 / 大型ファサード / 複数面サイン一式",
    note: "ブランディング重視・ロードサイド・夜間集客に。",
    img: "/images/price-ranges/budget-premium.jpg",
    alt: "30万円以上のチャンネル文字と大型ファサード看板の例",
    href: "#",
  },
]
