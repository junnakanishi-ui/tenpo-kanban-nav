export type WhatIsFeature = {
  id: string
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

export const ACRYLIC_HERO = {
  label: "ACRYLIC SIGN",
  title: "透明感と高級感で、店舗の第一印象を上品に。",
  subtitle:
    "クリニック・サロン・オフィス・教室・ショップの入口サインに人気。透明・白・黒のアクリルプレート看板を、デザインから製作・全国施工まで対応します。製作のみ・施工込みのどちらもご相談いただけます。",
  heroImage: {
    src: "/images/sign-types/acrylic-sign/hero/hero-main.jpg",
    alt: "白壁のクリニック入口に取り付けられた透明アクリル看板。清潔感と透明感のある上品な店舗サインの事例",
  },
}

export const ACRYLIC_WHAT_IS_FEATURES: WhatIsFeature[] = [
  {
    id: "transparency",
    title: "透明感で空間になじむ",
    description:
      "背景の壁や内装を活かしながらロゴ・文字を見せられるため、圧迫感が少なく上品な印象に。店舗入口や受付サインに向いています。",
    imagePath: "/images/sign-types/acrylic-sign/what-is/what-is-01-transparency.jpg",
    imageAlt:
      "木目の壁に浮かせて取り付けられた透明アクリル看板。背景になじみつつロゴが上品に見える事例",
  },
  {
    id: "clean",
    title: "清潔感・高級感を出せる",
    description:
      "白アクリルは清潔感、黒アクリルは高級感を演出。クリニックからバーまで、出したい印象に合わせて選べます。",
    imagePath: "/images/sign-types/acrylic-sign/what-is/what-is-02-clean.jpg",
    imageAlt:
      "白アクリル看板を掲げた歯科医院の受付。明るく清潔な印象を与える店舗サインの事例",
  },
  {
    id: "dimensional",
    title: "浮かせて立体感を出せる",
    description:
      "ポピックや飾りキャップで壁から少し浮かせて取り付けると、影が生まれて立体的に。小さめでも存在感が出ます。",
    imagePath: "/images/sign-types/acrylic-sign/what-is/what-is-03-dimensional.jpg",
    imageAlt:
      "化粧ビスで壁から浮かせて設置された黒アクリル看板。影による立体感が高級感を演出する事例",
  },
]

export const ACRYLIC_WHAT_IS_LEAD =
  "アクリル看板とは、アクリル板に印刷やカッティングシート加工を施して仕上げるプレートタイプの看板です。アルミ複合板プレート看板が「コスパ・サイズ自由度・屋外の実用性」に強いのに対し、アクリル看板は「透明感・清潔感・高級感」を出しやすいのが特長。クリニック、サロン、オフィス、教室、士業事務所などの入口まわりを上品に整えたい場面でよく選ばれています。"
