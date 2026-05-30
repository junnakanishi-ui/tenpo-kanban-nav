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

// 素材・仕上げ比較セクション（白/黒は KARUP_COLORS、仕上げは KARUP_FINISHES を流用しつつ、画像を追加）
export type FinishShowItem = {
  id: "raw" | "sheet" | "paint"
  name: string
  description: string
  imagePath: string
  imageAlt: string
}

export const KARUP_FINISH_SHOWCASE: FinishShowItem[] = [
  {
    id: "raw",
    name: "素地仕上げ",
    description:
      "白・黒カルプそのままの表面。アクリル面の光沢/つや消しを活かし、コストを抑えられます。屋外でもそのまま使える高品質カルプです。",
    imagePath: "/images/sign-types/karup-letter/finish/finish-raw.jpg",
    imageAlt: "素地仕上げの白カルプ立体文字。表面そのままの光沢を活かした事例",
  },
  {
    id: "sheet",
    name: "カッティングシート貼り",
    description:
      "表面に好きな色のカッティングシートを貼って仕上げ。ブランドカラーやロゴの色に合わせて自由に色を選べます。",
    imagePath: "/images/sign-types/karup-letter/finish/finish-sheet.jpg",
    imageAlt: "表面に赤いカッティングシートを貼ったカルプ立体文字の事例",
  },
  {
    id: "paint",
    name: "塗装仕上げ",
    description:
      "表面・側面まで塗装で美しく仕上げ。色のムラがなく、側面色も指定できるため、最も高級感のある仕上がりになります。",
    imagePath: "/images/sign-types/karup-letter/finish/finish-paint.jpg",
    imageAlt: "側面まで塗装で仕上げた高級感のあるカルプ立体文字の事例",
  },
]

// 白/黒の見せ方用画像（KARUP_COLORS に対応）
export const KARUP_COLOR_IMAGES: Record<"white" | "black", { imagePath: string; imageAlt: string }> =
  {
    white: {
      imagePath: "/images/sign-types/karup-letter/color/color-white.jpg",
      imageAlt: "白カルプの立体文字。明るく清潔感のある店舗看板の事例",
    },
    black: {
      imagePath: "/images/sign-types/karup-letter/color/color-black.jpg",
      imageAlt: "黒カルプの立体文字。落ち着いた高級感のある店舗看板の事例",
    },
  }

// 仕様ガイド（厚み・取付方法）
export type SpecGuideItem = {
  id: string
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

export const KARUP_SPEC_GUIDE: SpecGuideItem[] = [
  {
    id: "thickness",
    title: "厚みの選び方（10・20・30mm）",
    description:
      "薄い10mmはスッキリ屋内向け、標準20mmは多くの店舗看板に、厚い30mmは存在感を出したい時に。厚いほど立体感と影が強まります。",
    imagePath: "/images/sign-types/karup-letter/spec/spec-thickness.jpg",
    imageAlt: "10mm・20mm・30mmの厚み違いのカルプ文字を並べて比較した事例",
  },
  {
    id: "tape",
    title: "両面テープ・ボンド取付",
    description:
      "軽量なカルプは、平らな壁面なら両面テープとボンドで取り付け可能。最も手軽な方法で、屋内の壁などに向いています。",
    imagePath: "/images/sign-types/karup-letter/spec/spec-tape.jpg",
    imageAlt: "裏面に両面テープを貼ったカルプ文字を壁に取り付ける様子",
  },
  {
    id: "pin",
    title: "裏ピン（スペーサー）取付",
    description:
      "文字裏のピンを壁に挿して固定する方法。壁から少し浮かせて立体感を強調したい時や、サイズの大きい文字を確実に固定したい時に使います。",
    imagePath: "/images/sign-types/karup-letter/spec/spec-pin.jpg",
    imageAlt: "裏ピン金具で壁から浮かせて取り付けたカルプ立体文字の事例",
  },
  {
    id: "template",
    title: "取付用紙原稿つき",
    description:
      "文字の位置合わせ用の原稿（取付用紙）を製作品に同梱。誰でもまっすぐきれいに取り付けられます。",
    imagePath: "/images/sign-types/karup-letter/spec/spec-template.jpg",
    imageAlt: "取付用紙原稿を壁に当てて位置合わせをしている様子",
  },
]

// 価格早見表（文字高×厚み・素地・税込目安・1文字あたり）
export type KarupPriceRow = {
  height: string
  t10: string
  t20: string
  t30: string
}

export const KARUP_PRICE_LIST: KarupPriceRow[] = [
  { height: "100mm", t10: "1,848円", t20: "2,772円", t30: "3,696円" },
  { height: "150mm", t10: "1,848円", t20: "2,772円", t30: "3,696円" },
  { height: "200mm", t10: "2,200円", t20: "3,300円", t30: "4,400円" },
  { height: "300mm", t10: "4,950円", t20: "7,425円", t30: "9,900円" },
  { height: "400mm", t10: "8,800円", t20: "13,200円", t30: "17,600円" },
]

export const KARUP_PRICE_LIST_NOTE =
  "上記は素地仕上げ・1文字あたりの本体概算（税込）です。文字高は長辺基準。カッティングシート貼りは+30%、塗装は+45%、デザイン作成は別途+¥10,000〜、送料・取付金具・施工費は別途。文字高150mm以下は最低基本単価が適用されます。"
