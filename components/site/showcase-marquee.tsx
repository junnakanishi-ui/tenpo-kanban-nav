import Image from "next/image"
import { signTypes, type SignType } from "@/data/signTypes"

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: SignType[]
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
            key={`${item.slug}-${idx}`}
            className="group relative w-[260px] shrink-0 overflow-hidden rounded-2xl bg-secondary ring-1 ring-border shadow-sm transition-shadow hover:shadow-lg sm:w-[300px] md:w-[340px]"
          >
            <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-secondary to-muted">
              <Image
                src={item.img || "/placeholder.svg"}
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
                {item.name}
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
      <div className="mx-auto max-w-content px-4 py-10 md:px-6 md:py-14">
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
        <MarqueeRow items={signTypes} />
        <div className="hidden md:block">
          <MarqueeRow items={[...signTypes].reverse()} reverse />
        </div>
      </div>
    </section>
  )
}
