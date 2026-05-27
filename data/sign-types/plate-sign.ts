export type WhatIsFeature = {
  id: string
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

export const PLATE_SIGN_WHAT_IS_FEATURES: WhatIsFeature[] = [
  {
    id: "affordable",
    title: "コスパが良い",
    description:
      "同等サイズのアクリル看板や立体看板に比べて低コスト。広めの看板も無理なく作れます。",
    imagePath: "/images/sign-types/plate-sign/what-is/what-is-01-affordable.jpg",
    imageAlt:
      "白いプレート看板が設置された小さなカフェの外観。コスパが良く小規模店舗でも導入しやすいことを示す事例",
  },
  {
    id: "durable",
    title: "屋外でも長持ち",
    description:
      "UVラミネート仕様なら紫外線・雨にも強く、屋外看板として長期間使えます。",
    imagePath: "/images/sign-types/plate-sign/what-is/what-is-02-durable.jpg",
    imageAlt:
      "雨上がりに撮影された鉄板焼き店のプレート看板。水滴がついても色褪せず屋外耐久性が高いことを示す事例",
  },
  {
    id: "custom",
    title: "オーダーサイズ対応",
    description:
      "設置場所に合わせて自由なサイズで製作可能。お店の壁面にぴったりサイズで作れます。",
    imagePath: "/images/sign-types/plate-sign/what-is/what-is-03-custom.jpg",
    imageAlt:
      "美容室の店舗ファサードに合わせて作られた横長のプレート看板。オーダーサイズで設置場所にぴったり収まることを示す事例",
  },
]

/**
 * Heroファサードグリッドのタイルサイズ。
 * - md: col-span-3 row-span-1（中タイル・3マス）
 * - sm: col-span-2 row-span-1（小タイル・2マス）
 */
export type HeroTileSize = "md" | "sm"

export type HeroFacadeImage = {
  id: string
  src: string
  alt: string
  size: HeroTileSize
}

/**
 * Heroファサードグリッドの画像配列。
 * 12カラム × 3行 = 36マスを16枚で完全に埋める。
 * 配置：
 *   行1：[md 01][sm 02][sm 03][md 04][sm 05] = 3+2+2+3+2 = 12マス
 *   行2：[md 06][sm 07][sm 08][sm 09][md 10] = 3+2+2+2+3 = 12マス
 *   行3：[sm 11][sm 12][sm 13][sm 14][sm 15][sm 16] = 2×6 = 12マス
 */
export const PLATE_SIGN_HERO_IMAGES: HeroFacadeImage[] = [
  {
    id: "coffee",
    src: "/images/sign-types/plate-sign/hero/hero-01-coffee.jpg",
    alt: "ROAST WORKSのプレート看板。コンクリート壁に設置された白いプレート看板",
    size: "md",
  },
  {
    id: "yakitori",
    src: "/images/sign-types/plate-sign/hero/hero-02-yakitori.jpg",
    alt: "焼鳥 とりまるのプレート看板。夜景の中で黒地に毛筆書きの白文字",
    size: "sm",
  },
  {
    id: "ramen",
    src: "/images/sign-types/plate-sign/hero/hero-03-ramen.jpg",
    alt: "らーめん 鶏白湯 ことぶきのプレート看板。赤枠の中に毛筆風文字",
    size: "sm",
  },
  {
    id: "salon",
    src: "/images/sign-types/plate-sign/hero/hero-04-salon.jpg",
    alt: "hair atelier Tsumugiの横長プレート看板。美容室のファサードに設置",
    size: "md",
  },
  {
    id: "realestate",
    src: "/images/sign-types/plate-sign/hero/hero-05-realestate.jpg",
    alt: "緑が丘不動産のプレート看板。ロゴと社名をネイビーと緑でデザイン",
    size: "sm",
  },
  {
    id: "dental",
    src: "/images/sign-types/plate-sign/hero/hero-06-dental.jpg",
    alt: "さくら歯科クリニックのプレート看板。淡いブルーと桜マーク",
    size: "md",
  },
  {
    id: "shoshi",
    src: "/images/sign-types/plate-sign/hero/hero-07-shoshi.jpg",
    alt: "司法書士 中山事務所のプレート看板。濃紺地に金色文字",
    size: "sm",
  },
  {
    id: "sushi",
    src: "/images/sign-types/plate-sign/hero/hero-11-sushi.jpg",
    alt: "鮨 一仁のプレート看板。夜景の中で黒地に銀色の毛筆書文字",
    size: "sm",
  },
  {
    id: "bakery",
    src: "/images/sign-types/plate-sign/hero/hero-10-bakery.jpg",
    alt: "BOULANGERIE Komugiのプレート看板。レンガ壁にクリーム色",
    size: "sm",
  },
  {
    id: "construction",
    src: "/images/sign-types/plate-sign/hero/hero-08-construction.jpg",
    alt: "株式会社 山下建設の大型プレート看板。グレーの倉庫外壁",
    size: "md",
  },
  {
    id: "seitai",
    src: "/images/sign-types/plate-sign/hero/hero-09-seitai.jpg",
    alt: "りらく整体院のプレート看板。ベージュ地に手書き風文字",
    size: "sm",
  },
  {
    id: "studio",
    src: "/images/sign-types/plate-sign/hero/hero-12-studio.jpg",
    alt: "Studio LUMIEREのプレート看板。鮮やかなティールと白文字",
    size: "sm",
  },
  {
    id: "auto",
    src: "/images/sign-types/plate-sign/hero/hero-13-auto.jpg",
    alt: "AUTO SERVICE タナカの大型プレート看板。黄色と黒のインパクト",
    size: "sm",
  },
  {
    id: "designoffice",
    src: "/images/sign-types/plate-sign/hero/hero-14-designoffice.jpg",
    alt: "studio nuanceのプレート看板。コンクリート壁にミニマルな白い看板",
    size: "sm",
  },
  {
    id: "wagashi",
    src: "/images/sign-types/plate-sign/hero/hero-15-wagashi.jpg",
    alt: "茶寮 ことねのプレート看板。和の伝統色を活かしたデザインで甘味処を表現",
    size: "sm",
  },
  {
    id: "piano",
    src: "/images/sign-types/plate-sign/hero/hero-16-piano.jpg",
    alt: "ピアノ教室 こもれびのプレート看板。クリームピンクの優しい色合いで音楽教室を表現",
    size: "sm",
  },
]

export type WorkCategory =
  | "restaurant"
  | "salon"
  | "clinic"
  | "realestate"
  | "office"

export type WorkExample = {
  id: string
  imagePath: string
  imageAlt: string
  category: WorkCategory
  categoryLabel: string
  storeName: string
  detail: string
}

export const PLATE_SIGN_WORK_EXAMPLES: WorkExample[] = [
  {
    id: "coffee",
    imagePath: "/images/sign-types/plate-sign/hero/hero-01-coffee.jpg",
    imageAlt:
      "ROAST WORKSのプレート看板。コンクリート壁に設置された白いプレート看板",
    category: "restaurant",
    categoryLabel: "カフェ",
    storeName: "ROAST WORKS",
    detail: "コンクリート壁の白プレート",
  },
  {
    id: "yakitori",
    imagePath: "/images/sign-types/plate-sign/hero/hero-02-yakitori.jpg",
    imageAlt:
      "焼鳥 とりまるのプレート看板。夜景の中で黒地に毛筆書きの白文字",
    category: "restaurant",
    categoryLabel: "居酒屋",
    storeName: "焼鳥 とりまる",
    detail: "黒地に毛筆書きの和テイスト",
  },
  {
    id: "ramen",
    imagePath: "/images/sign-types/plate-sign/hero/hero-03-ramen.jpg",
    imageAlt:
      "らーめん 鶏白湯 ことぶきのプレート看板。赤枠の中に毛筆風文字",
    category: "restaurant",
    categoryLabel: "ラーメン",
    storeName: "らーめん 鶏白湯 ことぶき",
    detail: "赤枠インパクトの大型横長",
  },
  {
    id: "sushi",
    imagePath: "/images/sign-types/plate-sign/hero/hero-11-sushi.jpg",
    imageAlt:
      "鮨 一仁のプレート看板。夜景の中で黒地に銀色の毛筆書文字",
    category: "restaurant",
    categoryLabel: "寿司",
    storeName: "鮨 一仁",
    detail: "黒地銀文字、夜映え仕様",
  },
  {
    id: "bakery",
    imagePath: "/images/sign-types/plate-sign/hero/hero-10-bakery.jpg",
    imageAlt:
      "BOULANGERIE Komugiのプレート看板。レンガ壁にクリーム色",
    category: "restaurant",
    categoryLabel: "パン屋",
    storeName: "BOULANGERIE Komugi",
    detail: "レンガ壁にクリーム色の正方形",
  },
  {
    id: "wagashi",
    imagePath: "/images/sign-types/plate-sign/hero/hero-15-wagashi.jpg",
    imageAlt: "茶寮 ことねのプレート看板。和の伝統色を活かしたデザイン",
    category: "restaurant",
    categoryLabel: "和カフェ",
    storeName: "茶寮 ことね",
    detail: "和の伝統色、暖簾と並ぶ甘味処",
  },
  {
    id: "shokudo",
    imagePath: "/images/sign-types/plate-sign/what-is/what-is-03-custom.jpg",
    imageAlt: "和み食堂のプレート看板。青海波模様の和風横長デザイン",
    category: "restaurant",
    categoryLabel: "食堂",
    storeName: "和み食堂",
    detail: "青海波模様の和風横長",
  },
  {
    id: "smallcoffee",
    imagePath: "/images/sign-types/plate-sign/what-is/what-is-01-affordable.jpg",
    imageAlt:
      "小さな時間のプレート看板。自家焙煎カフェのミニマルな上品さ",
    category: "restaurant",
    categoryLabel: "カフェ",
    storeName: "小さな時間",
    detail: "自家焙煎、ミニマルな上品さ",
  },
  {
    id: "salon",
    imagePath: "/images/sign-types/plate-sign/hero/hero-04-salon.jpg",
    imageAlt:
      "hair atelier Tsumugiの横長プレート看板。美容室のファサードに設置",
    category: "salon",
    categoryLabel: "美容室",
    storeName: "hair atelier Tsumugi",
    detail: "ガラスファサードに横長で配置",
  },
  {
    id: "studio",
    imagePath: "/images/sign-types/plate-sign/hero/hero-12-studio.jpg",
    imageAlt:
      "Studio LUMIEREのプレート看板。鮮やかなティールと白文字",
    category: "salon",
    categoryLabel: "ダンス教室",
    storeName: "Studio LUMIERE",
    detail: "ティールと白文字でアクティブに",
  },
  {
    id: "piano",
    imagePath: "/images/sign-types/plate-sign/hero/hero-16-piano.jpg",
    imageAlt:
      "ピアノ教室 こもれびのプレート看板。クリームピンクで音楽教室を表現",
    category: "salon",
    categoryLabel: "音楽教室",
    storeName: "ピアノ教室 こもれび",
    detail: "クリームピンクの優しい雰囲気",
  },
  {
    id: "dental",
    imagePath: "/images/sign-types/plate-sign/hero/hero-06-dental.jpg",
    imageAlt: "さくら歯科クリニックのプレート看板。淡いブルーと桜マーク",
    category: "clinic",
    categoryLabel: "歯科",
    storeName: "さくら歯科クリニック",
    detail: "淡いブルーと桜マークで清潔感",
  },
  {
    id: "seitai",
    imagePath: "/images/sign-types/plate-sign/hero/hero-09-seitai.jpg",
    imageAlt: "りらく整体院のプレート看板。ベージュ地に手書き風文字",
    category: "clinic",
    categoryLabel: "整体院",
    storeName: "りらく整体院",
    detail: "ベージュ地に手書き風で温かみ",
  },
  {
    id: "realestate",
    imagePath: "/images/sign-types/plate-sign/hero/hero-05-realestate.jpg",
    imageAlt:
      "緑が丘不動産のプレート看板。ロゴと社名をネイビーと緑でデザイン",
    category: "realestate",
    categoryLabel: "不動産",
    storeName: "緑が丘不動産",
    detail: "ロゴ+業務一覧の総合デザイン",
  },
  {
    id: "yamada",
    imagePath: "/images/sign-types/plate-sign/what-is/what-is-02-durable.jpg",
    imageAlt:
      "山田不動産のプレート看板。地域密着型不動産のロゴ入りデザイン",
    category: "realestate",
    categoryLabel: "不動産",
    storeName: "山田不動産",
    detail: "ハウスロゴで親しみやすい",
  },
  {
    id: "shoshi",
    imagePath: "/images/sign-types/plate-sign/hero/hero-07-shoshi.jpg",
    imageAlt: "司法書士 中山事務所のプレート看板。濃紺地に金色文字",
    category: "realestate",
    categoryLabel: "司法書士",
    storeName: "司法書士 中山事務所",
    detail: "濃紺と金色で士業の品格",
  },
  {
    id: "construction",
    imagePath: "/images/sign-types/plate-sign/hero/hero-08-construction.jpg",
    imageAlt:
      "株式会社 山下建設の大型プレート看板。グレーの倉庫外壁",
    category: "office",
    categoryLabel: "建設業",
    storeName: "株式会社 山下建設",
    detail: "倉庫外壁の大型プレート",
  },
  {
    id: "auto",
    imagePath: "/images/sign-types/plate-sign/hero/hero-13-auto.jpg",
    imageAlt:
      "AUTO SERVICE タナカの大型プレート看板。黄色と黒のインパクト",
    category: "office",
    categoryLabel: "自動車整備",
    storeName: "AUTO SERVICE タナカ",
    detail: "黄黒で実用的なインパクト",
  },
  {
    id: "designoffice",
    imagePath: "/images/sign-types/plate-sign/hero/hero-14-designoffice.jpg",
    imageAlt:
      "studio nuanceのプレート看板。コンクリート壁にミニマルな白い看板",
    category: "office",
    categoryLabel: "デザイン事務所",
    storeName: "studio nuance",
    detail: "コンクリート壁にミニマル白",
  },
]

export type WorkCategoryConfig = {
  id: WorkCategory | "all"
  label: string
  icon: "apps" | "kitchen" | "scissors" | "stethoscope" | "building" | "briefcase"
}

export const WORK_CATEGORIES: WorkCategoryConfig[] = [
  { id: "all", label: "全て", icon: "apps" },
  { id: "restaurant", label: "飲食店", icon: "kitchen" },
  { id: "salon", label: "サロン・教室", icon: "scissors" },
  { id: "clinic", label: "クリニック・健康", icon: "stethoscope" },
  { id: "realestate", label: "不動産・士業", icon: "building" },
  { id: "office", label: "会社・工場", icon: "briefcase" },
]

export type PriceListCategory = "small" | "medium" | "large" | "xl"

export type PriceListItem = {
  width: number
  height: number
  priceOnly: number
  priceWithInstall: number | "consult"
  use: string
  badge?: "popular" | "standard"
}

export type PriceListCategoryConfig = {
  id: PriceListCategory
  title: string
  description: string
  iconName: "arrowDownSquare" | "square" | "squareHalf" | "squarePlus"
  items: PriceListItem[]
  note?: string
}

/**
 * サイズ・価格早見表データ。
 * 既存の PRICE_LIST（data/simulators/plate-sign.ts）と価格を一致させること。
 * 製作+施工価格の計算ルール：
 *   - 長辺1500&短辺1000以下：+30,000円（1名施工）
 *   - 長辺1820&短辺910以下：+30,000円（1名施工、サブロク含む）
 *   - 長辺2500&短辺1500以下：+60,000円（2名施工）
 *   - それ以上：要相談 ("consult")
 */
export const PLATE_SIGN_PRICE_LIST: PriceListCategoryConfig[] = [
  {
    id: "small",
    title: "小型 - 店頭の補助看板・案内サイン向け",
    description: "入口案内、駐車場番号、店内補助サインに最適",
    iconName: "arrowDownSquare",
    items: [
      {
        width: 600,
        height: 450,
        priceOnly: 6800,
        priceWithInstall: 36800,
        use: "入口の案内、駐車場番号、店内補助サイン",
      },
      {
        width: 910,
        height: 600,
        priceOnly: 7900,
        priceWithInstall: 37900,
        use: "入口看板、店頭スタンドの補助",
      },
      {
        width: 910,
        height: 910,
        priceOnly: 10700,
        priceWithInstall: 40700,
        use: "正方形の入口プレート、社名サイン",
      },
    ],
  },
  {
    id: "medium",
    title: "中型 - 店舗看板の定番サイズ",
    description: "店舗看板・社名プレートの定番サイズ",
    iconName: "square",
    items: [
      {
        width: 1200,
        height: 450,
        priceOnly: 9000,
        priceWithInstall: 39000,
        use: "細長の店舗看板、エントランス上",
      },
      {
        width: 1200,
        height: 600,
        priceOnly: 10500,
        priceWithInstall: 40500,
        use: "一般的な店舗看板の定番サイズ",
        badge: "popular",
      },
      {
        width: 1200,
        height: 910,
        priceOnly: 13300,
        priceWithInstall: 43300,
        use: "大きめの店舗看板、ファサード",
      },
    ],
  },
  {
    id: "large",
    title: "大型 - 店舗正面・会社入口向け",
    description: "1820mm幅・サブロク版を含む標準規格",
    iconName: "squareHalf",
    items: [
      {
        width: 1820,
        height: 450,
        priceOnly: 11900,
        priceWithInstall: 41900,
        use: "細長の大型サイン、フェンス看板",
      },
      {
        width: 1820,
        height: 600,
        priceOnly: 13600,
        priceWithInstall: 43600,
        use: "横長の店舗看板、駐車場入口",
      },
      {
        width: 1820,
        height: 910,
        priceOnly: 12800,
        priceWithInstall: 42800,
        use: "サブロク版・コスパ最強の標準規格",
        badge: "standard",
      },
    ],
    note: "**サブロク版（1820×910）について：** 看板業界の標準原板規格（3×6尺=サブロク）で、加工歩留まりが良いため1820×600より安くなります。サイズに余裕があればこの規格が断然おすすめです。 ※ サブロク = 看板用アルミ複合板の標準サイズ。製作工場で原板から切り出す際にロスが少なく、コスパに優れます。",
  },
  {
    id: "xl",
    title: "超大型 - 会社・施設・倉庫向け",
    description: "2000mm超の大型施設用看板",
    iconName: "squarePlus",
    items: [
      {
        width: 2000,
        height: 1000,
        priceOnly: 18200,
        priceWithInstall: "consult",
        use: "中規模会社の正面看板",
      },
      {
        width: 2440,
        height: 1220,
        priceOnly: 25400,
        priceWithInstall: "consult",
        use: "大型店舗・施設の入口看板",
      },
      {
        width: 4000,
        height: 1000,
        priceOnly: 33000,
        priceWithInstall: "consult",
        use: "大規模施設・倉庫の横長看板",
      },
      {
        width: 4880,
        height: 1220,
        priceOnly: 45200,
        priceWithInstall: "consult",
        use: "超大型施設・工場・物流倉庫",
      },
    ],
    note: "**超大型サイズ（2000mm超）の施工費について：** 長辺・短辺の組み合わせで施工人員が変動するため、施工込みの正確な金額は個別お見積もりとなります。詳細はシミュレーターまたはお問い合わせよりご相談ください。",
  },
]

export type SignTypeId = "plate" | "acrylic" | "culp" | "stainless"

export type SegmentCardData = {
  id: SignTypeId
  emoji: string
  tagLabel: string
  title: string
  signName: string
  features: string[]
  priceLabel: string
  ctaLabel: string
  ctaHref?: string
  isFeatured: boolean
}

export const SIGN_COMPARISON_SEGMENTS: SegmentCardData[] = [
  {
    id: "plate",
    emoji: "🟢",
    tagLabel: "THIS PAGE",
    title: "コスパ重視・デザイン自由度",
    signName: "プレート看板",
    features: [
      "分割看板で実質サイズ無制限",
      "料理写真など背景込みOK",
      "案内・店舗看板の定番",
      "UVラミネートで屋外OK",
    ],
    priceLabel: "¥6,800〜",
    ctaLabel: "★ おすすめ",
    isFeatured: true,
  },
  {
    id: "acrylic",
    emoji: "🔵",
    tagLabel: "ACRYLIC",
    title: "透明感・壁面一体感",
    signName: "アクリル看板",
    features: [
      "表札・店舗ロゴに最適",
      "浮かしビスで存在感UP",
      "小サイズ専用（200〜600mm）",
      "大型化はプレート推奨",
    ],
    priceLabel: "¥8,800〜",
    ctaLabel: "アクリル看板 →",
    isFeatured: false,
  },
  {
    id: "culp",
    emoji: "🟠",
    tagLabel: "CULP",
    title: "シンプルに立体表現",
    signName: "カルプ文字",
    features: [
      "店舗名を立体で印象的に",
      "看板照明と組み合わせOK",
      "店舗内装飾・カウンター置き",
      "製作のみDIY設置も可",
    ],
    priceLabel: "文字数次第",
    ctaLabel: "カルプ文字 →",
    ctaHref: "https://www.trade-sign.com/main/culp-moji-sign/index.html",
    isFeatured: false,
  },
  {
    id: "stainless",
    emoji: "🟣",
    tagLabel: "STAINLESS",
    title: "高級感・長期使用",
    signName: "ステンレス切文字",
    features: [
      "店舗名・マンション名・銘板",
      "金属の質感で品格",
      "経年劣化が「味」になる",
      "小サイズ文字も製作可",
    ],
    priceLabel: "¥3,630〜",
    ctaLabel: "ステンレス切文字 →",
    ctaHref: "https://www.trade-sign.com/main/sus304sign/index.html",
    isFeatured: false,
  },
]

export type ComparisonRow = {
  category: string
  plate: string
  acrylic: string
  culp: string
  stainless: string
  plateRank?: "best" | "good" | "ok"
}

export const SIGN_COMPARISON_TABLE: ComparisonRow[] = [
  {
    category: "最安価格",
    plate: "¥6,800〜",
    acrylic: "¥8,800〜",
    culp: "文字数次第",
    stainless: "¥3,630〜",
    plateRank: "best",
  },
  {
    category: "主な用途",
    plate: "全業種の看板・案内",
    acrylic: "表札・店舗ロゴ",
    culp: "店舗名・装飾",
    stainless: "店舗名・マンション名",
  },
  {
    category: "デザイン自由度",
    plate: "◎ 写真・複雑デザインOK",
    acrylic: "○ シンプル中心",
    culp: "△ 文字のみ",
    stainless: "△ 文字のみ",
    plateRank: "best",
  },
  {
    category: "立体感",
    plate: "平面",
    acrylic: "浮かしビスで少し",
    culp: "あり（厚みあり）",
    stainless: "あり（薄い金属板）",
    plateRank: "ok",
  },
  {
    category: "サイズ自由度",
    plate: "◎◎ 分割看板で実質無制限",
    acrylic: "△ 600×600まで",
    culp: "○ 文字単位で対応",
    stainless: "○ H80〜H500",
    plateRank: "best",
  },
  {
    category: "耐候性",
    plate: "○ UVラミネートで長期",
    acrylic: "○ 屋外OK",
    culp: "○ 屋外OK",
    stainless: "◎ 経年が味に",
    plateRank: "good",
  },
  {
    category: "高級感",
    plate: "○ 実用的",
    acrylic: "◎ 透明感",
    culp: "◎ 立体感",
    stainless: "◎◎ 金属の質感",
    plateRank: "ok",
  },
  {
    category: "製作のみ販売",
    plate: "○ 全国対応",
    acrylic: "○ 全国対応",
    culp: "○ DIY設置も対応",
    stainless: "○ 全国対応",
    plateRank: "best",
  },
]
