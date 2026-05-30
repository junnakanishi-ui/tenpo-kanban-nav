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

// 他の立体文字との違い（3者比較）
export type VsRow = {
  axis: string
  karup: string
  stainless: string
  acrylic: string
  winner?: "karup" | "stainless" | "acrylic"
}

export const KARUP_VS_ROWS: VsRow[] = [
  { axis: "価格", karup: "コスパが良い", stainless: "高め", acrylic: "中程度", winner: "karup" },
  { axis: "重量", karup: "軽量", stainless: "重い", acrylic: "中程度", winner: "karup" },
  { axis: "立体感", karup: "厚みを自由に選べる", stainless: "シャープで薄め", acrylic: "厚みは中程度" },
  { axis: "質感", karup: "マット〜光沢・塗装自由", stainless: "金属の高級感", acrylic: "透明感・光沢" },
  { axis: "屋外耐久", karup: "表面アクリルで屋外可", stainless: "非常に高い", acrylic: "高い", winner: "stainless" },
  { axis: "取付", karup: "両面テープ/ボンドで簡単", stainless: "ビス・溶接など要施工", acrylic: "ビス・接着", winner: "karup" },
  {
    axis: "向いている用途",
    karup: "店舗ファサード・内装・コスパ重視",
    stainless: "高級店・銘板・長期屋外",
    acrylic: "表札・受付・透明感重視",
  },
]

export const KARUP_VS_CONCLUSION = {
  karup: {
    title: "カルプ文字を選ぶなら",
    points: [
      "立体感を出しつつコストを抑えたい",
      "軽量で取付を簡単にしたい",
      "店舗ファサード・内装サイン・装飾文字",
    ],
  },
  others: [
    {
      title: "ステンレス切文字なら",
      points: ["金属の重厚感・最高級感", "長期間の屋外設置"],
      href: "#",
      ready: false,
    },
    {
      title: "アクリル看板なら",
      points: ["透明感を活かした表札・受付サイン"],
      href: "/sign-types/acrylic-sign",
      ready: true,
    },
  ],
}

// 業種別おすすめ（6業種）
export type IndustryItem = {
  id: string
  industry: string
  catch: string
  description: string
  imagePath: string
  imageAlt: string
}

export const KARUP_INDUSTRIES: IndustryItem[] = [
  {
    id: "facade",
    industry: "店舗ファサード",
    catch: "店の顔を立体的に魅せる",
    description:
      "店名やロゴを立体文字で壁面に。平面看板より目を引き、遠くからの視認性も高まります。",
    imagePath: "/images/sign-types/karup-letter/industries/industry-facade.jpg",
    imageAlt: "店舗ファサードの壁面に取り付けられた立体カルプ文字の事例",
  },
  {
    id: "restaurant",
    industry: "飲食店・カフェ",
    catch: "おしゃれな店名サインに",
    description:
      "カフェやレストランの店名を立体文字で。塗装仕上げでブランドカラーに合わせられます。",
    imagePath: "/images/sign-types/karup-letter/industries/industry-restaurant.jpg",
    imageAlt: "カフェの壁面に取り付けられた塗装仕上げのカルプ立体文字",
  },
  {
    id: "apparel",
    industry: "アパレル・ショップ",
    catch: "ブランドロゴを立体で",
    description:
      "ブランドロゴや店名を立体化。店内の壁やフィッティングエリアの装飾文字にも人気です。",
    imagePath: "/images/sign-types/karup-letter/industries/industry-apparel.jpg",
    imageAlt: "アパレルショップの店内壁面のブランドロゴ立体文字",
  },
  {
    id: "salon",
    industry: "美容室・サロン",
    catch: "内装になじむ上品なサイン",
    description:
      "白カルプや塗装仕上げで、内装に調和するおしゃれな店名サインに。受付背面の壁にもおすすめ。",
    imagePath: "/images/sign-types/karup-letter/industries/industry-salon.jpg",
    imageAlt: "美容室の受付背面の壁に取り付けられたカルプ立体文字",
  },
  {
    id: "office",
    industry: "オフィス受付",
    catch: "信頼感のあるロゴサイン",
    description:
      "会社のロゴ・社名を受付背面に立体文字で。コストを抑えつつ、きちんとした印象を演出できます。",
    imagePath: "/images/sign-types/karup-letter/industries/industry-office.jpg",
    imageAlt: "オフィス受付の背面壁に取り付けられた社名ロゴの立体カルプ文字",
  },
  {
    id: "clinic",
    industry: "クリニック・教室",
    catch: "やわらかく親しみやすく",
    description:
      "白カルプの立体文字で、明るく親しみやすい印象に。クリニックや教室の入口・受付サインに。",
    imagePath: "/images/sign-types/karup-letter/industries/industry-clinic.jpg",
    imageAlt: "クリニック受付の白カルプ立体文字サインの事例",
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

export const KARUP_VARIATIONS: VariationItem[] = [
  {
    id: "logo",
    title: "ロゴマークの立体化",
    description: "文字だけでなく、ロゴマークやシンボルも立体カットで製作できます。",
    imagePath: "/images/sign-types/karup-letter/variations/variation-logo.jpg",
    imageAlt: "ロゴマークを立体カットしたカルプサイン",
  },
  {
    id: "print",
    title: "表面プリント・木目調",
    description: "表面に印刷シートを貼り、木目調や写真調など多彩な表現が可能です。",
    imagePath: "/images/sign-types/karup-letter/variations/variation-print.jpg",
    imageAlt: "木目調のプリントを施したカルプ立体文字",
  },
  {
    id: "side-color",
    title: "側面の色変え",
    description: "表面と側面で色を変える塗装で、より凝った立体表現ができます。",
    imagePath: "/images/sign-types/karup-letter/variations/variation-side-color.jpg",
    imageAlt: "表面と側面で色を変えたカルプ立体文字",
  },
  {
    id: "large",
    title: "大型・分割製作",
    description: "大きな文字も分割製作で対応。ビル壁面など大型サインにも使えます。",
    imagePath: "/images/sign-types/karup-letter/variations/variation-large.jpg",
    imageAlt: "ビル壁面に設置された大型のカルプ立体文字",
  },
]

// 取付・施工
export const KARUP_CONSTRUCTION = {
  lead: "軽量なカルプ文字は、平らな壁面・小型であればお客様自身での取付も可能です。屋外・高所・大型・きれいに揃えたい場合は、プロによる施工がおすすめです。",
  diyOk: {
    title: "自分で取付しやすいケース",
    items: [
      "屋内・低い位置への設置",
      "小〜中サイズの文字",
      "壁面が平滑（クロス・ベニヤ・平らな塗装壁）",
      "両面テープ＋ボンドで対応できる",
      "付属の取付用紙原稿で位置合わせできる",
    ],
    imagePath: "/images/sign-types/karup-letter/construction/construction-diy.jpg",
    imageAlt: "取付用紙原稿を使って自分でカルプ文字を壁に取り付ける様子",
  },
  proRecommend: {
    title: "施工相談がおすすめのケース",
    items: [
      "屋外・高所への設置",
      "大型・文字数が多い",
      "裏ピンで浮かせてきれいに固定したい",
      "壁面がタイル・石材・コンクリート",
      "ファサードの顔として正確に揃えたい",
    ],
    imagePath: "/images/sign-types/karup-letter/construction/construction-pro.jpg",
    imageAlt: "プロが裏ピンでカルプ立体文字を壁面に施工する様子",
  },
}

// FAQ（10問）
export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const KARUP_FAQS: FaqItem[] = [
  {
    id: "q1",
    question: "カルプ文字は屋外でも使えますか？",
    answer:
      "はい、使えます。カルプは表面がアクリルなどで覆われており、素地仕上げでも屋外でご使用いただけます。ただし設置場所・サイズ・取付方法によって適した仕様が変わるため、屋外・高所の場合は施工までご相談ください。",
  },
  {
    id: "q2",
    question: "厚みは何mmを選べばいいですか？",
    answer:
      "屋内や小ぶりな文字には10mm、多くの店舗看板には標準的な20mm、遠くからの視認性や存在感を重視するなら30mmがおすすめです。厚いほど立体感と影が強くなります。迷う場合はご相談ください。",
  },
  {
    id: "q3",
    question: "素地・シート貼り・塗装の違いは？",
    answer:
      "素地は白/黒カルプそのままの表面でコストを抑えられます。シート貼りは表面に好きな色のカッティングシートを貼る方法で色の自由度が高く、塗装は側面まできれいに仕上がり最も高級感が出ます。シミュレーターで仕上げごとの概算を確認できます。",
  },
  {
    id: "q4",
    question: "デザインデータがなくても依頼できますか？",
    answer:
      "はい、可能です。店舗名・ロゴイメージ・希望の書体や雰囲気・参考画像などをもとに、デザイン作成からご相談いただけます。デザイン作成は別途+¥10,000〜となります。",
  },
  {
    id: "q5",
    question: "自分で取り付けできますか？",
    answer:
      "軽量なカルプ文字は、平らな壁面・小〜中サイズであれば両面テープとボンドでお客様自身で取付できるケースが多いです。製作品には位置合わせ用の取付用紙原稿が付属します。屋外・高所・大型はプロ施工をおすすめします。",
  },
  {
    id: "q6",
    question: "取付用紙原稿や両面テープは付きますか？",
    answer:
      "はい、製作品には文字の位置合わせ用の取付用紙原稿と、裏面の両面テープを標準でお付けしています（無料）。誰でもまっすぐきれいに取り付けられます。",
  },
  {
    id: "q7",
    question: "ロゴマークや特殊な形も作れますか？",
    answer:
      "はい、文字だけでなくロゴマークやシンボルマークの立体カットも製作できます。複雑な形状や細かいデザインの場合は、別途お見積もりとなることがあります。",
  },
  {
    id: "q8",
    question: "納期はどれくらいですか？",
    answer:
      "デザインデータをお持ちの場合、製作のみで最短7営業日が目安です。施工までご希望の場合は10営業日前後、デザイン作成からの場合はさらに数日いただきます。お急ぎの際もまずはご相談ください。",
  },
  {
    id: "q9",
    question: "大きいサイズや文字数が多くても作れますか？",
    answer:
      "はい、大型文字も分割製作などで対応可能です。ビル壁面の大型サインから、店内の小さな装飾文字まで幅広く製作できます。サイズや文字数に応じてお見積もりいたします。",
  },
  {
    id: "q10",
    question: "全国対応していますか？",
    answer:
      "はい、製作のみのご依頼は全国へ発送可能です。施工までご希望の場合も全国対応しておりますので、お見積もりの際にご相談ください。",
  },
]

// 関連看板への導線
export type RelatedSignItem = {
  id: string
  name: string
  description: string
  href: string
  ready: boolean
  imagePath: string
  imageAlt: string
}

export const KARUP_RELATED_SIGNS: RelatedSignItem[] = [
  {
    id: "acrylic-sign",
    name: "アクリル看板",
    description: "透明感・清潔感を活かした表札・受付サイン。クリニックやサロンに人気。",
    href: "/sign-types/acrylic-sign",
    ready: true,
    imagePath: "/images/sign-types/acrylic-sign.jpg",
    imageAlt: "アクリル看板の設置例",
  },
  {
    id: "plate-sign",
    name: "アルミ複合板プレート看板",
    description: "大きく目立たせたい・屋外でコスパよく作りたい店舗看板の定番。",
    href: "/sign-types/plate-sign",
    ready: true,
    imagePath: "/images/sign-types/plate-sign.jpg",
    imageAlt: "アルミ複合板プレート看板の設置例",
  },
  {
    id: "stainless-letter",
    name: "ステンレス切文字",
    description: "金属の質感で最高級の重厚感。長期間の屋外設置にも。",
    href: "#",
    ready: false,
    imagePath: "/images/sign-types/stainless-letter.jpg",
    imageAlt: "ステンレス切文字看板の設置例",
  },
]

// 最終CTA（カルプ用・Hero呼応の上品トーン）
export const KARUP_FINAL_CTA = {
  label: "GET STARTED",
  title: "立体文字で、お店の名前をもっと印象的に。",
  subtitle:
    "「こんな立体文字にしたい」「この壁に付けたい」を写真で送っていただければ、最適な厚み・仕上げ・取付方法をご提案します。お見積もりは無料です。",
}
