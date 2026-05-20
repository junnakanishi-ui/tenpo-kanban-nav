import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type Industry = {
  name: string
  recommend: string
  desc: string
  img: string
  alt: string
}

const industries: Industry[] = [
  {
    name: "飲食店",
    recommend: "ファサード看板＋店頭幕＋ウィンドウサイン",
    desc: "通行人に業態と雰囲気を伝えやすく、ランチ・テイクアウト訴求にも向いています。",
    img: "/images/industries/restaurant-sign.jpg",
    alt: "飲食店のファサード看板と店頭幕",
  },
  {
    name: "美容室・サロン",
    recommend: "カルプ文字＋ウィンドウサイン＋スタンド看板",
    desc: "おしゃれさ・清潔感・入りやすさをバランスよく伝えられます。",
    img: "/images/industries/beauty-salon-sign.jpg",
    alt: "美容室のカルプ文字とウィンドウサイン",
  },
  {
    name: "整体院・整骨院",
    recommend: "プレート看板＋ウィンドウサイン＋診療時間表示",
    desc: "診療内容や営業時間をわかりやすく伝え、初めての方にも安心感を出せます。",
    img: "/images/industries/seitai-sign.jpg",
    alt: "整体院のプレート看板",
  },
  {
    name: "クリニック",
    recommend: "アクリル看板＋ステンレス切文字＋誘導サイン",
    desc: "清潔感と信頼感を重視。診療科目と入口の分かりやすさを設計します。",
    img: "/images/industries/clinic-sign.jpg",
    alt: "クリニックのアクリル看板とステンレス切文字",
  },
  {
    name: "不動産店舗",
    recommend: "プレート看板＋ウィンドウサイン＋物件情報パネル",
    desc: "情報量と視認性を両立。通行人が立ち止まりやすいガラス面の使い方が鍵です。",
    img: "/images/industries/realestate-sign.jpg",
    alt: "不動産店舗のウィンドウサインと情報パネル",
  },
  {
    name: "学習塾",
    recommend: "ファサード看板＋窓サイン＋A型スタンド",
    desc: "保護者と子どもの両方に届くトーンに。安心感と親しみやすさを演出します。",
    img: "/images/industries/school-sign.jpg",
    alt: "学習塾のファサード看板",
  },
  {
    name: "会社・オフィス",
    recommend: "ステンレス切文字＋プレート看板＋エントランスサイン",
    desc: "コーポレートカラーと素材感で、信頼できる企業の第一印象をつくります。",
    img: "/images/industries/office-sign.jpg",
    alt: "オフィスエントランスのステンレス切文字",
  },
  {
    name: "工場・倉庫",
    recommend: "大型プレート看板＋誘導サイン＋安全表示",
    desc: "視認性と耐久性を重視。配送業者や来訪者にも分かりやすい誘導設計を。",
    img: "/images/industries/factory-sign.jpg",
    alt: "工場の大型プレート看板",
  },
]

export function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-widest text-accent">BY INDUSTRY</p>
          <h2 id="industries-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            業種から選ぶ
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            業種ごとに「お客様に伝わる看板」のセオリーは異なります。あなたの業種に合うおすすめ看板セットから探せます。
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {industries.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl hover:ring-primary/30"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-secondary to-muted">
                  <Image
                    src={item.img || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent"
                  />
                  <h3 className="absolute bottom-3 left-3 right-3 text-lg font-bold text-primary-foreground md:text-xl">
                    {item.name}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-bold tracking-widest text-accent">おすすめ</p>
                  <p className="mt-1 text-sm font-bold leading-snug text-primary">{item.recommend}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                    詳しく見る
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
