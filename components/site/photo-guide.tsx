import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

type Tip = {
  title: string
  desc: string
  img: string
  alt: string
}

const tips: Tip[] = [
  {
    title: "店舗の正面全体",
    desc: "看板を設置する建物の正面を、なるべく真正面から1枚。",
    img: "/images/photo-guide/storefront-wide.jpg",
    alt: "店舗の正面全体を撮影した写真の例",
  },
  {
    title: "設置面のアップ",
    desc: "壁面・ファサードのアップ写真。素材や下地が分かるとベスト。",
    img: "/images/photo-guide/storefront-closeup.jpg",
    alt: "看板を設置する壁面のアップ写真の例",
  },
  {
    title: "周辺の様子・通り",
    desc: "通行人の視線・隣接店舗・歩道の幅が分かる引きの1枚。",
    img: "/images/photo-guide/storefront-street.jpg",
    alt: "店舗周辺の通りと歩行者目線の写真の例",
  },
]

export function PhotoGuide() {
  return (
    <section id="photo-guide" aria-labelledby="photo-heading">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="text-sm font-bold tracking-widest text-accent">PHOTO GUIDE</p>
            <h2 id="photo-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
              この3枚があると
              <br className="hidden md:block" />
              見積もりがスムーズです
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              スマホで撮った写真でOK。3枚あれば、最適な看板と概算金額をかなり正確にお伝えできます。
              現地調査が不要になり、コストも納期も短縮できます。
            </p>

            <div className="mt-7 rounded-3xl bg-primary p-6 text-primary-foreground md:p-7">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                <p className="text-xs font-bold tracking-widest text-accent">TIP</p>
              </div>
              <p className="mt-2 text-base leading-relaxed md:text-lg">
                看板サイズの希望や、入れたい文字・ロゴデータがあれば、
                <span className="font-bold">納期もぐっと短くなります。</span>
              </p>
            </div>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-md transition-transform hover:scale-[1.02] md:text-base"
            >
              写真を送って相談する
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Right: 3 photo cards */}
          <ol className="lg:col-span-7 grid gap-4 sm:grid-cols-1 md:gap-5">
            {tips.map((tip, idx) => (
              <li
                key={tip.title}
                className="overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-secondary to-muted sm:col-span-5 sm:aspect-auto">
                    <Image
                      src={tip.img || "/placeholder.svg"}
                      alt={tip.alt}
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-black text-accent-foreground shadow-md">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-5 sm:col-span-7 md:p-7">
                    <p className="text-[11px] font-bold tracking-widest text-accent">PHOTO {idx + 1}</p>
                    <h3 className="mt-1 text-lg font-bold text-primary md:text-xl">{tip.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
