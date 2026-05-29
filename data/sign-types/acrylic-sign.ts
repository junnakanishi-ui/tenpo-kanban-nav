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

export type TypeCompareItem = {
  id: "transparent" | "white" | "black"
  name: string
  catch: string
  description: string
  imagePath: string
  imageAlt: string
  recommendedFor: string[]
  note?: string
}

export const ACRYLIC_TYPE_COMPARE: TypeCompareItem[] = [
  {
    id: "transparent",
    name: "透明アクリル＋UV印刷",
    catch: "一番アクリルらしい人気タイプ",
    description:
      "透明アクリルの裏からUV印刷。透明感と光沢を活かし、グラデーションやフルカラーも美しく表現できます。上品で清潔感のある入口サインに。",
    imagePath: "/images/sign-types/acrylic-sign/types/type-transparent.jpg",
    imageAlt:
      "透明アクリルにフルカラー印刷されたサロンの店舗看板。透明感のある仕上がりの事例",
    recommendedFor: ["クリニック", "サロン", "教室", "オフィス入口"],
    note: "裏面は透け感のある白仕上げ。全面フルカラー時は周囲1mm程度が透明で残る場合があります。",
  },
  {
    id: "white",
    name: "白アクリル＋カット文字",
    catch: "清潔感・誠実感を出したい店舗に",
    description:
      "白いアクリルにカッティングシートで文字・ロゴを表現。明るく清潔な印象で、医療系・スクール系の看板に向いています。",
    imagePath: "/images/sign-types/acrylic-sign/types/type-white.jpg",
    imageAlt: "白アクリルに紺文字で仕上げた歯科クリニックの看板。清潔感のある事例",
    recommendedFor: ["クリニック", "歯科", "整体院", "スクール"],
  },
  {
    id: "black",
    name: "黒アクリル＋カット文字",
    catch: "高級感・重厚感を出したい方へ",
    description:
      "黒いアクリルにカッティングシートで仕上げ。白・ゴールド系の文字と合わせると、シンプルでも印象に残る高級感のある看板に。",
    imagePath: "/images/sign-types/acrylic-sign/types/type-black.jpg",
    imageAlt: "黒アクリルにゴールド文字のバー看板。重厚で高級感のある事例",
    recommendedFor: ["バー", "美容室", "アパレル", "士業事務所"],
  },
]

export type SpecGuideItem = {
  id: string
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

export const ACRYLIC_SPEC_GUIDE: SpecGuideItem[] = [
  {
    id: "bevel",
    title: "面取り加工（テーパー）",
    description:
      "板の前面の角を斜めに削る加工。断面がきれいに見え、高級感が増します。角の印象をやわらげたいときにもおすすめです。",
    imagePath: "/images/sign-types/acrylic-sign/spec/spec-bevel.jpg",
    imageAlt: "アクリル板の角を斜めに削った面取り加工の断面クローズアップ",
  },
  {
    id: "hole",
    title: "穴あけ加工",
    description:
      "設置方法に合わせて、穴あけ位置・穴サイズを指定できます。ビス留めや化粧ビス取付に対応します。",
    imagePath: "/images/sign-types/acrylic-sign/spec/spec-hole.jpg",
    imageAlt: "四隅に取付用の穴をあけたアクリル看板",
  },
  {
    id: "flat",
    title: "化粧ビス・ポピック（直付け）",
    description:
      "壁に直接、化粧ビスやポピックで留めるタイプ。すっきりと納まり、ビス頭もデザインの一部になります。",
    imagePath: "/images/sign-types/acrylic-sign/spec/spec-flat.jpg",
    imageAlt: "壁に化粧ビスで直付けされたアクリル看板",
  },
  {
    id: "standoff",
    title: "立ち上げ金具（浮かし）",
    description:
      "壁から少し浮かせて取り付ける金具。影が生まれて立体感が出るため、小さめの看板でも存在感が出ます。",
    imagePath: "/images/sign-types/acrylic-sign/spec/spec-standoff.jpg",
    imageAlt: "立ち上げ金具で壁から浮かせて設置し影が出ているアクリル看板",
  },
]

export type PriceListRow = {
  size: string
  use: string
  transparent: string
  whiteBlack: string
}

export const ACRYLIC_PRICE_LIST_SMALL: PriceListRow[] = [
  { size: "200×200mm", use: "小型表札・室名札", transparent: "9,680円", whiteBlack: "—" },
  { size: "300×200mm", use: "会社表札・受付サイン", transparent: "10,043円", whiteBlack: "9,922円" },
  { size: "300×300mm", use: "店舗入口サイン", transparent: "10,648円", whiteBlack: "10,406円" },
]

export const ACRYLIC_PRICE_LIST_MEDIUM: PriceListRow[] = [
  { size: "300×450mm", use: "入口横の縦長サイン", transparent: "11,253円", whiteBlack: "11,253円" },
  { size: "400×400mm", use: "正方形の店舗ロゴ看板", transparent: "11,495円", whiteBlack: "11,616円" },
  { size: "500×500mm", use: "存在感のある入口サイン", transparent: "14,883円", whiteBlack: "13,068円" },
  { size: "600×600mm", use: "店舗・事務所の顔になる看板", transparent: "15,609円", whiteBlack: "14,036円" },
]

export const ACRYLIC_PRICE_LIST_NOTE =
  "上記は3mm厚・通常仕上げ（面取りなし）の本体概算（税込）です。5mm厚・面取り・取付金具・送料・施工費は別途。白/黒アクリルはカッティングシート2色までの目安です。"

export const ACRYLIC_THICKNESS_GUIDE = [
  { thickness: "3mm", desc: "軽量でコストを抑えやすい。屋内・小型看板向き。" },
  { thickness: "5mm", desc: "しっかり感・高級感を出しやすい。屋外・浮かし金具・存在感重視に。" },
]

// プレートとの違い比較
export type VsPlateRow = {
  axis: string
  acrylic: string
  plate: string
  winner?: "acrylic" | "plate" | "tie"
}

export const ACRYLIC_VS_PLATE_ROWS: VsPlateRow[] = [
  { axis: "得意な用途", acrylic: "店舗表札・会社サイン・受付", plate: "店舗看板・案内看板・大型看板" },
  { axis: "見た目", acrylic: "透明感・高級感・清潔感", plate: "実用的・視認性・デザイン自由度" },
  { axis: "サイズ", acrylic: "小型〜中型(〜600×600)", plate: "小型〜大型まで対応" },
  { axis: "価格", acrylic: "プレートよりやや高め", plate: "コスパが良い", winner: "plate" },
  { axis: "屋外使用", acrylic: "可能（大型・強風環境は要相談）", plate: "屋外看板の定番", winner: "plate" },
  { axis: "立体感", acrylic: "浮かし金具で演出しやすい", plate: "基本は平面", winner: "acrylic" },
  { axis: "おすすめ業種", acrylic: "クリニック・サロン・士業・教室", plate: "飲食店・不動産・全業種" },
]

export const ACRYLIC_VS_PLATE_CONCLUSION = {
  acrylic: {
    title: "アクリル看板を選ぶなら",
    points: [
      "入口まわりを上品に見せたい",
      "表札・ロゴサインをきれいに作りたい",
      "クリニック・サロン・士業・教室・オフィス入口",
    ],
  },
  plate: {
    title: "プレート看板を選ぶなら",
    points: [
      "大きく目立たせたい",
      "屋外でコスパよく店舗看板を作りたい",
      "飲食店・不動産・大きめのファサード看板",
    ],
    href: "/sign-types/plate-sign",
    linkLabel: "プレート看板の詳細を見る",
  },
}

// 業種別おすすめ（6業種）
export type IndustryItem = {
  id: string
  industry: string
  catch: string
  recommendedType: "transparent" | "white" | "black"
  recommendedTypeLabel: string
  description: string
  imagePath: string
  imageAlt: string
}

export const ACRYLIC_INDUSTRIES: IndustryItem[] = [
  {
    id: "clinic",
    industry: "クリニック・歯科医院",
    catch: "清潔感と安心感のある入口に",
    recommendedType: "white",
    recommendedTypeLabel: "白アクリルがおすすめ",
    description:
      "明るく清潔な印象を出しやすい白アクリルが定番。診療科目・ロゴをシンプルに入れて、上品で見やすい看板に。",
    imagePath: "/images/sign-types/acrylic-sign/industries/industry-clinic.jpg",
    imageAlt: "白アクリル看板を入口に掲げた歯科クリニック。清潔感のある事例",
  },
  {
    id: "salon",
    industry: "美容室・サロン",
    catch: "おしゃれで雰囲気のあるサイン",
    recommendedType: "transparent",
    recommendedTypeLabel: "透明アクリルがおすすめ",
    description:
      "透明アクリルで内装の雰囲気を活かしつつ印象に残るサインに。黒アクリルで上品な店舗にもおすすめ。",
    imagePath: "/images/sign-types/acrylic-sign/industries/industry-salon.jpg",
    imageAlt: "透明アクリル看板が掛けられた美容室の入口。おしゃれで上品な事例",
  },
  {
    id: "office",
    industry: "オフィス・士業事務所",
    catch: "信頼感のあるエントランス",
    recommendedType: "transparent",
    recommendedTypeLabel: "透明アクリルがおすすめ",
    description:
      "会社名・ロゴをきれいに見せたい場面に最適。受付横や入口に設置して、信頼感のある印象に。",
    imagePath: "/images/sign-types/acrylic-sign/industries/industry-office.jpg",
    imageAlt: "透明アクリルの会社銘板が掲げられたオフィスエントランス。信頼感のある事例",
  },
  {
    id: "building",
    industry: "建物名称サイン",
    catch: "マンション・ビルの銘板に",
    recommendedType: "transparent",
    recommendedTypeLabel: "透明アクリルがおすすめ",
    description:
      "マンション名・ビル名を掲げる銘板にもアクリル看板は人気。透明アクリルで上品に、長く使える建物の顔に。",
    imagePath: "/images/sign-types/acrylic-sign/industries/industry-building.jpg",
    imageAlt:
      "マンションエントランスに掲げられた透明アクリルの建物銘板。上品で重厚感のある事例",
  },
  {
    id: "school",
    industry: "教室・スクール",
    catch: "親しみやすい入口サイン",
    recommendedType: "white",
    recommendedTypeLabel: "白アクリルがおすすめ",
    description:
      "ピアノ教室・学習塾・英会話など、優しい色味で親しみやすい入口に。明るくきれいな印象を出せます。",
    imagePath: "/images/sign-types/acrylic-sign/industries/industry-school.jpg",
    imageAlt: "白アクリル看板を掲げた音楽教室の入口。親しみやすい事例",
  },
  {
    id: "bar",
    industry: "バー・飲食店",
    catch: "落ち着いた高級感を演出",
    recommendedType: "black",
    recommendedTypeLabel: "黒アクリルがおすすめ",
    description:
      "黒アクリル＋白文字やゴールド文字で、シンプルでも印象的に。雰囲気を重視したい店舗におすすめ。",
    imagePath: "/images/sign-types/acrylic-sign/industries/industry-bar.jpg",
    imageAlt: "黒アクリルにゴールド文字のバー看板。落ち着いた高級感のある事例",
  },
]

// 製作バリエーション（4種）
export type VariationItem = {
  id: string
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

export const ACRYLIC_VARIATIONS: VariationItem[] = [
  {
    id: "double",
    title: "アクリル二重構造銘板",
    description:
      "透明アクリルの下に木目・ステンレス調などを重ねる二重構造。存在感のある銘板に。",
    imagePath: "/images/sign-types/acrylic-sign/variations/variation-double.jpg",
    imageAlt: "透明アクリルと木目を組み合わせた二重構造のアクリル銘板",
  },
  {
    id: "cut-letter",
    title: "アクリル板＋アクリル切文字",
    description:
      "アクリル板の上にアクリル切文字を重ねて立体感を演出。平面の印刷より高級感が出ます。",
    imagePath: "/images/sign-types/acrylic-sign/variations/variation-cut-letter.jpg",
    imageAlt: "アクリル板にアクリル切文字を貼り付けた立体感のあるサイン",
  },
  {
    id: "tabletop",
    title: "卓上アクリルサイン",
    description: "受付カウンター・展示会・ショールームに置ける卓上タイプも製作可能。",
    imagePath: "/images/sign-types/acrylic-sign/variations/variation-tabletop.jpg",
    imageAlt: "受付に置かれた卓上タイプのアクリルサイン",
  },
  {
    id: "bent",
    title: "曲げ加工タイプ",
    description:
      "アクリル板に曲げ加工を施した自立式・卓上式サイン。受付やカウンターまわりに人気。",
    imagePath: "/images/sign-types/acrylic-sign/variations/variation-bent.jpg",
    imageAlt: "L字に曲げ加工された自立式のアクリルサイン",
  },
]

// 取付・施工
export const ACRYLIC_CONSTRUCTION = {
  lead:
    "小型・屋内であれば、お客様自身で取り付けできるケースもあります。屋外・高所・浮かし金具で美しく仕上げたい場合は、プロによる施工がおすすめです。",
  diyOk: {
    title: "自分で取付しやすいケース",
    items: [
      "屋内設置",
      "小型サイズ（300×300mm程度まで）",
      "低い位置への設置",
      "壁面が平滑（クロス・ベニヤ・平らな塗装壁）",
      "両面テープやビス止めで対応できる",
    ],
    imagePath: "/images/sign-types/acrylic-sign/construction/construction-diy.jpg",
    imageAlt: "屋内の平滑な壁にDIYで取り付けられた小型アクリル看板",
  },
  proRecommend: {
    title: "施工相談がおすすめのケース",
    items: [
      "屋外設置",
      "高所への設置",
      "浮かし金具できれいに取り付けたい",
      "壁面がタイル・石材・コンクリート",
      "落下リスクが心配",
      "店舗の顔としてきれいに仕上げたい",
    ],
    imagePath: "/images/sign-types/acrylic-sign/construction/construction-pro.jpg",
    imageAlt: "プロが浮かし金具で水平に取り付けたアクリル看板",
  },
}
