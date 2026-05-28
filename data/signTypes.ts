// 看板種類のマスタデータ
// 看板種類カード（SignTypes）・ヒーロー下マルキー（ShowcaseMarquee）など
// 複数のコンポーネントから参照されることを想定しています。

export type SignType = {
  /** URL用のスラッグ（将来 /sign-types/[slug] で使用） */
  slug: string
  /** 表示名 */
  name: string
  /** カードに表示する説明文 */
  desc: string
  /** 価格目安の表示文字列（例: "目安 3〜10万円"） */
  price: string
  /** カードに表示する用途タグ（最大3つ程度） */
  uses: string[]
  /** カード画像のパス（public/ からの絶対パス） */
  img: string
  /** 画像のalt属性 */
  alt: string
  /** カードの遷移先（個別ページ未作成時は "#"） */
  href: string
  /** トップページで「大きいカード」として扱うか */
  featured?: boolean
}

export const signTypes: SignType[] = [
  {
    slug: "plate-sign",
    name: "プレート看板",
    desc: "アルミ複合板にカッティングシートを貼った定番の看板。コスト・耐久性のバランスが良く、初めての店舗看板に最適です。",
    price: "目安 3〜10万円",
    uses: ["飲食店", "クリニック", "オフィス"],
    img: "/images/sign-types/plate-sign.jpg",
    alt: "アルミ複合板のプレート看板の設置例",
    href: "/sign-types/plate-sign",
    featured: true,
  },
  {
    slug: "acrylic-sign",
    name: "アクリル看板",
    desc: "透明感と高級感が魅力。LED内照式とも相性が良く、サロン・クリニックで人気。",
    price: "目安 5〜20万円",
    uses: ["美容室", "サロン", "クリニック"],
    img: "/images/sign-types/acrylic-sign.jpg",
    alt: "クリアなアクリル看板の設置例",
    href: "#",
  },
  {
    slug: "karup-letter",
    name: "カルプ文字",
    desc: "発泡材を切り出した立体文字。軽量で取付が容易。コスパの良い立体表現。",
    price: "目安 5〜15万円",
    uses: ["美容室", "ショップ", "オフィス"],
    img: "/images/sign-types/karup-letter.jpg",
    alt: "壁面に取り付けられたカルプ文字看板",
    href: "#",
  },
  {
    slug: "stainless-letter",
    name: "ステンレス切文字",
    desc: "金属の質感で高級感のあるサイン。オフィス・ブランド店舗に最適。",
    price: "目安 15〜40万円",
    uses: ["オフィス", "ブランド店舗"],
    img: "/images/sign-types/stainless-letter.jpg",
    alt: "ステンレスの切文字によるエントランスサイン",
    href: "#",
  },
  {
    slug: "channel-letter",
    name: "チャンネル文字",
    desc: "内蔵LEDで発光する立体文字。視認性抜群で夜間の集客に強い。",
    price: "目安 20〜60万円",
    uses: ["飲食店", "路面店", "夜間営業"],
    img: "/images/sign-types/channel-letter.jpg",
    alt: "夜間に発光するチャンネル文字の看板",
    href: "#",
  },
  {
    slug: "storefront-banner",
    name: "店頭幕",
    desc: "短納期・低コストでお店の顔を作れる布製サイン。期間限定の販促にも◎",
    price: "目安 1〜5万円",
    uses: ["飲食店", "販促", "イベント"],
    img: "/images/sign-types/storefront-banner.jpg",
    alt: "店頭に掲げられた布製の店頭幕",
    href: "#",
  },
  {
    slug: "window-sign",
    name: "ウィンドウサイン",
    desc: "ガラス面にカッティングシートを施工。視線を遮らずブランディングできる。",
    price: "目安 2〜10万円",
    uses: ["カフェ", "サロン", "オフィス"],
    img: "/images/sign-types/window-sign.jpg",
    alt: "ガラス面に施工されたウィンドウサイン",
    href: "#",
  },
  {
    slug: "stand-sign",
    name: "スタンド看板",
    desc: "歩道に出して通行人にアピール。A型・電飾スタンドなど種類も豊富。",
    price: "目安 1〜8万円",
    uses: ["飲食店", "サロン", "販促"],
    img: "/images/sign-types/stand-sign.jpg",
    alt: "歩道に設置されたA型スタンド看板",
    href: "#",
  },
  {
    slug: "projecting-sign",
    name: "突き出し看板",
    desc: "壁から突き出して遠くからの視認性を確保。雑居ビル・路面店で活躍。",
    price: "目安 10〜40万円",
    uses: ["雑居ビル", "路面店"],
    img: "/images/sign-types/projecting-sign.jpg",
    alt: "雑居ビルから突き出した突き出し看板",
    href: "#",
  },
  {
    slug: "original-nobori",
    name: "オリジナルのぼり旗",
    desc: "通行人への訴求やキャンペーン告知に向いた、視認性の高い販促サイン。短納期で量産しやすい。",
    price: "目安 1〜5万円",
    uses: ["店頭訴求", "イベント", "期間限定告知"],
    img: "/images/sign-types/original-nobori-flag.jpg",
    alt: "店頭に並べられたオリジナルのぼり旗の設置例",
    href: "#",
  },
  {
    slug: "freestanding-sign",
    name: "自立看板",
    desc: "工事不要で設置しやすく、店頭や入口前で情報を伝えやすい看板。レイアウト変更も簡単。",
    price: "目安 3〜15万円",
    uses: ["店頭案内", "メニュー表示", "誘導案内"],
    img: "/images/sign-types/freestanding-sign.jpg",
    alt: "店舗入口前に設置された自立看板の設置例",
    href: "#",
  },
]
