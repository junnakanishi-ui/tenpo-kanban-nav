// 写真ガイドのコツデータ
// 写真ガイドセクション（PhotoGuide）から参照されます。
// 写真相談ページ /photo-consult からも同じデータを参照する想定です。

export type PhotoGuideTip = {
  /** タイトル（例: "店舗の正面全体"） */
  title: string
  /** 説明文 */
  desc: string
  /** 写真サンプル画像のパス（public/ からの絶対パス） */
  img: string
  /** 画像のalt属性 */
  alt: string
}

export const photoGuideTips: PhotoGuideTip[] = [
  {
    title: "店舗の正面全体",
    desc: "看板を設置する建物の正面を、なるべく真正面から1枚。",
    img: "/images/photo-guide/storefront-wide.jpg",
    alt: "店舗の正面全体を撮影した写真の例",
  },
  {
    title: "設置面のアップ",
    desc: "壁面・ファサードのアップ写真。素材や下地が分かるとベスト。",
    img: "/images/photo-guide/install-surface-close.jpg",
    alt: "看板を設置する壁面のアップ写真の例",
  },
  {
    title: "周辺の様子・通り",
    desc: "通行人の視線・隣接店舗・歩道の幅が分かる引きの1枚。",
    img: "/images/photo-guide/pedestrian-view.jpg",
    alt: "店舗周辺の通りと歩行者目線の写真の例",
  },
]
