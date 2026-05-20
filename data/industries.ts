// 業種マスタデータ
// 業種から選ぶセクション（Industries）から参照されます。
// 将来 /industries/[slug] の個別ページを作る場合もここを起点にします。

export type Industry = {
  /** URL用のスラッグ（将来 /industries/[slug] で使用） */
  slug: string
  /** 表示名 */
  name: string
  /** おすすめ看板セット（例: "ファサード看板＋店頭幕＋ウィンドウサイン"） */
  recommend: string
  /** カードに表示する説明文 */
  desc: string
  /** カード画像のパス（public/ からの絶対パス） */
  img: string
  /** 画像のalt属性 */
  alt: string
  /** カードの遷移先（個別ページ未作成時は "#"） */
  href: string
}

export const industries: Industry[] = [
  {
    slug: "restaurant",
    name: "飲食店",
    recommend: "ファサード看板＋店頭幕＋ウィンドウサイン",
    desc: "通行人に業態と雰囲気を伝えやすく、ランチ・テイクアウト訴求にも向いています。",
    img: "/images/industries/restaurant.jpg",
    alt: "飲食店のファサード看板と店頭幕",
    href: "#",
  },
  {
    slug: "beauty-salon",
    name: "美容室・サロン",
    recommend: "カルプ文字＋ウィンドウサイン＋スタンド看板",
    desc: "おしゃれさ・清潔感・入りやすさをバランスよく伝えられます。",
    img: "/images/industries/beauty-salon.jpg",
    alt: "美容室のカルプ文字とウィンドウサイン",
    href: "#",
  },
  {
    slug: "osteopathic-clinic",
    name: "整体院・整骨院",
    recommend: "プレート看板＋ウィンドウサイン＋診療時間表示",
    desc: "診療内容や営業時間をわかりやすく伝え、初めての方にも安心感を出せます。",
    img: "/images/industries/osteopathic-clinic.jpg",
    alt: "整体院のプレート看板",
    href: "#",
  },
  {
    slug: "medical-clinic",
    name: "クリニック",
    recommend: "アクリル看板＋ステンレス切文字＋誘導サイン",
    desc: "清潔感と信頼感を重視。診療科目と入口の分かりやすさを設計します。",
    img: "/images/industries/medical-clinic.jpg",
    alt: "クリニックのアクリル看板とステンレス切文字",
    href: "#",
  },
  {
    slug: "real-estate",
    name: "不動産店舗",
    recommend: "プレート看板＋ウィンドウサイン＋物件情報パネル",
    desc: "情報量と視認性を両立。通行人が立ち止まりやすいガラス面の使い方が鍵です。",
    img: "/images/industries/real-estate.jpg",
    alt: "不動産店舗のウィンドウサインと情報パネル",
    href: "#",
  },
  {
    slug: "cram-school",
    name: "学習塾",
    recommend: "ファサード看板＋窓サイン＋A型スタンド",
    desc: "保護者と子どもの両方に届くトーンに。安心感と親しみやすさを演出します。",
    img: "/images/industries/cram-school.jpg",
    alt: "学習塾のファサード看板",
    href: "#",
  },
  {
    slug: "office",
    name: "会社・オフィス",
    recommend: "ステンレス切文字＋プレート看板＋エントランスサイン",
    desc: "コーポレートカラーと素材感で、信頼できる企業の第一印象をつくります。",
    img: "/images/industries/office.jpg",
    alt: "オフィスエントランスのステンレス切文字",
    href: "#",
  },
  {
    slug: "factory-warehouse",
    name: "工場・倉庫",
    recommend: "大型プレート看板＋誘導サイン＋安全表示",
    desc: "視認性と耐久性を重視。配送業者や来訪者にも分かりやすい誘導設計を。",
    img: "/images/industries/factory-warehouse.jpg",
    alt: "工場の大型プレート看板",
    href: "#",
  },
]
