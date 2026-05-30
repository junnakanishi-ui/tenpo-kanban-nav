export type WhatIsFeature = {
  id: string
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

// Hero
export const KARUP_HERO = {
  label: "KARUP LETTER",
  title: "軽くて立体的、コスパも良い。\nお店の名前を“浮き文字”で魅せる。",
  subtitle:
    "カルプ文字は、発泡素材を立体的に切り出した軽量の立体文字看板です。金属の切文字より軽く・安く、両面テープやボンドで壁面に取り付けられるため、店舗ファサード・オフィス受付・内装サインで人気。デザイン・製作から全国の取付施工まで対応します。",
  heroImage: {
    src: "/images/sign-types/karup-letter/hero/hero-main.jpg",
    alt: "店舗ファサードの壁面に取り付けられた白いカルプ立体文字。軽量で立体感のある店舗看板の事例",
  },
}

// カルプ文字とは（特徴3点）
export const KARUP_WHAT_IS_FEATURES: WhatIsFeature[] = [
  {
    id: "dimensional",
    title: "立体感で視認性アップ",
    description:
      "平面の看板と違い、厚みのある立体文字は影が生まれ、遠くからでも視認しやすくなります。お店の名前やロゴを印象的に見せられます。",
    imagePath: "/images/sign-types/karup-letter/what-is/what-is-01-dimensional.jpg",
    imageAlt: "厚みのある立体カルプ文字に影が落ち、立体感が際立つ店舗看板のクローズアップ",
  },
  {
    id: "lightweight",
    title: "軽量だから取付が簡単",
    description:
      "発泡素材ベースなので金属文字よりずっと軽量。両面テープやボンドで壁面に直接取り付けられ、高所や大きな工事が不要なケースも多いです。",
    imagePath: "/images/sign-types/karup-letter/what-is/what-is-02-lightweight.jpg",
    imageAlt: "軽量なカルプ文字を片手で持ち、壁面に取り付ける様子",
  },
  {
    id: "affordable",
    title: "金属切文字よりコスパ良し",
    description:
      "ステンレスなどの金属切文字に比べて材料費・加工費を抑えられます。立体文字の高級感は出しつつ、コストは抑えたい場面に最適です。",
    imagePath: "/images/sign-types/karup-letter/what-is/what-is-03-affordable.jpg",
    imageAlt: "コストを抑えつつ高級感のあるカルプ立体文字を使ったオフィスの受付サイン",
  },
]

export const KARUP_WHAT_IS_LEAD =
  "カルプ文字とは、「カルプ」と呼ばれる発泡素材（ウレタン樹脂などをアクリルや塩ビで挟んだ板）を、文字やロゴの形に立体的に切り出した立体文字看板です。カルプは“Calcium in Plastic”が語源で、軽量かつ加工しやすいのが特長。金属の切文字のような立体感・高級感を出しながら、軽くて安く、取り付けも簡単なことから、店舗のファサード看板、オフィスやクリニックの受付サイン、店内の装飾文字まで幅広く選ばれています。白カルプ・黒カルプの素地仕上げのほか、表面にカッティングシートを貼ったり塗装したりすることで、自由な色・質感に仕上げられます。"

// 文字高の基準についての補足（競合も必須にしている重要情報）
export const KARUP_HEIGHT_NOTE =
  "カルプ文字の「文字高」は長辺が基準です。たとえば縦より横が長い文字の場合、横幅を文字高として計算します。"
