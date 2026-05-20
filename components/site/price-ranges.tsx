import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

type Range = {
  label: string
  range: string
  types: string
  note: string
  img: string
  alt: string
  recommended?: boolean
}

const ranges: Range[] = [
  {
    label: "5万円以内",
    range: "〜¥50,000",
    types: "店頭幕 / プレート看板（小） / スタンド看板",
    note: "小型・短納期。販促や仮設用に最適。",
    img: "/images/price-ranges/budget-small.jpg",
    alt: "5万円以内で作れる店頭幕とスタンド看板の例",
  },
  {
    label: "10万円前後",
    range: "¥50,000〜¥150,000",
    types: "プレート看板 / アクリル看板 / カルプ文字",
    note: "店舗デビューの定番ゾーン。素材選択肢が広く、初めての出店に最も選ばれています。",
    img: "/images/price-ranges/budget-medium.jpg",
    alt: "10万円前後のプレート看板とアクリル看板の例",
    recommended: true,
  },
  {
    label: "20万円前後",
    range: "¥150,000〜¥300,000",
    types: "ステンレス切文字 / 大型アクリル / 突き出し看板",
    note: "高級感や視認性アップを狙う中規模店舗向け。",
    img: "/images/price-ranges/budget-large.jpg",
    alt: "20万円前後のステンレス切文字と突き出し看板の例",
  },
  {
    label: "30万円以上",
    range: "¥300,000〜",
    types: "チャンネル文字 / 大型ファサード / 複数面サイン一式",
    note: "ブランディング重視・ロードサイド・夜間集客に。",
    img: "/images/price-ranges/budget-premium.jpg",
    alt: "30万円以上のチャンネル文字と大型ファサード看板の例",
  },
]

export function PriceRanges() {
  return (
    <section id="price-ranges" aria-labelledby="price-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-widest text-accent">PRICE RANGE</p>
            <h2 id="price-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
              価格帯から選ぶ
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              ご予算から逆算して、ベストな看板候補を見つけられます。施工費は別途お見積もりです。
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] md:self-auto"
          >
            概算シミュレーターを使う
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {ranges.map((r, i) => {
            const isRec = r.recommended
            return (
              <li key={r.label} className="relative">
                {isRec && (
                  <span className="absolute -top-3 left-6 z-10 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-md">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    人気の価格帯
                  </span>
                )}
                <a
                  href="#"
                  className={`group flex h-full flex-col overflow-hidden rounded-3xl bg-card transition-all hover:-translate-y-0.5 hover:shadow-xl ${
                    isRec ? "ring-2 ring-accent shadow-lg" : "ring-1 ring-border hover:ring-primary/30"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-secondary to-muted">
                    <Image
                      src={r.img || "/placeholder.svg"}
                      alt={r.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <span className="text-xs font-bold tracking-widest text-accent">PLAN 0{i + 1}</span>
                    <h3 className="mt-2 text-2xl font-black text-primary md:text-3xl">{r.label}</h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{r.range}</p>
                    <div className="mt-5 rounded-2xl bg-secondary/70 p-4">
                      <p className="text-[11px] font-bold tracking-widest text-primary">この価格で選べる看板</p>
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground">{r.types}</p>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">
                      この価格帯の看板を見る
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
