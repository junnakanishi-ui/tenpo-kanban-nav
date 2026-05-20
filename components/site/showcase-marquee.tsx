import Image from "next/image"

type ShowcaseImage = {
  src: string
  alt: string
  label: string
}

const showcaseImages: ShowcaseImage[] = [
  {
    src: "/images/showcase/plate-sign-restaurant.jpg",
    alt: "飲食店の入口に設置されたプレート看板の事例",
    label: "プレート看板",
  },
  {
    src: "/images/showcase/acrylic-sign-salon.jpg",
    alt: "美容サロンのファサードに取り付けられたアクリル看板の事例",
    label: "アクリル看板",
  },
  {
    src: "/images/showcase/karup-letter-clinic.jpg",
    alt: "クリニックの壁面に設置されたカルプ文字の立体看板",
    label: "カルプ文字",
  },
  {
    src: "/images/showcase/stainless-letter-office.jpg",
    alt: "オフィスエントランスのステンレス切文字サイン",
    label: "ステンレス切文字",
  },
  {
    src: "/images/showcase/channel-letter-night.jpg",
    alt: "夜間に発光するチャンネル文字の店舗看板",
    label: "チャンネル文字",
  },
  {
    src: "/images/showcase/banner-curtain-storefront.jpg",
    alt: "和食店の店頭に掲げられた店頭幕",
    label: "店頭幕",
  },
  {
    src: "/images/showcase/window-sign-cafe.jpg",
    alt: "カフェのガラス面に施工されたウィンドウサイン",
    label: "ウィンドウサイン",
  },
  {
    src: "/images/showcase/stand-sign-sidewalk.jpg",
    alt: "歩道に設置されたA型スタンド看板",
    label: "スタンド看板",
  },
  {
    src: "/images/showcase/projecting-sign-building.jpg",
    alt: "ビルの壁面から突き出した突き出し看板",
    label: "突き出し看板",
  },
  {
    src: "/images/showcase/facade-sign-shop.jpg",
    alt: "路面店のファサード全体に展開された大型看板",
    label: "ファサード看板",
  },
]

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: ShowcaseImage[]
  reverse?: boolean
}) {
  // Duplicate the list so the loop is seamless
  const loop = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden">
      <ul
        className={`flex w-max gap-4 md:gap-5 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {loop.map((item, idx) => (
          <li
            key={`${item.label}-${idx}`}
            className="group relative w-[260px] shrink-0 overflow-hidden rounded-2xl bg-secondary ring-1 ring-border shadow-sm transition-shadow hover:shadow-lg sm:w-[300px] md:w-[340px]"
          >
            <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-secondary to-muted">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 340px, 260px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/70 to-transparent"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-card/95 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
                {item.label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ShowcaseMarquee() {
  return (
    <section aria-label="店舗看板の提案例" className="bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-widest text-accent md:text-sm">
            SHOWCASE
          </p>
          <h2 className="mt-2 text-balance text-lg font-bold text-primary md:text-2xl">
            店舗看板の提案例を見ながら、イメージを整理できます
          </h2>
        </div>
      </div>
      <div className="space-y-4 pb-10 md:space-y-5 md:pb-14">
        <MarqueeRow items={showcaseImages} />
        <div className="hidden md:block">
          <MarqueeRow items={[...showcaseImages].reverse()} reverse />
        </div>
      </div>
    </section>
  )
}
