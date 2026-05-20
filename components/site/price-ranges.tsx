import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { priceRanges, type PriceRange } from "@/data/priceRanges"

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
          {priceRanges.map((plan: PriceRange, i) => {
            const isRec = plan.recommended
            return (
              <li key={plan.slug} className="relative">
                {isRec && (
                  <span className="absolute -top-3 left-6 z-10 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-md">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    人気の価格帯
                  </span>
                )}
                <a
                  href={plan.href}
                  className={`group flex h-full flex-col overflow-hidden rounded-3xl bg-card transition-all hover:-translate-y-0.5 hover:shadow-xl ${
                    isRec ? "ring-2 ring-accent shadow-lg" : "ring-1 ring-border hover:ring-primary/30"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-secondary to-muted">
                    <Image
                      src={plan.img || "/placeholder.svg"}
                      alt={plan.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <span className="text-xs font-bold tracking-widest text-accent">PLAN 0{i + 1}</span>
                    <h3 className="mt-2 text-2xl font-black text-primary md:text-3xl">{plan.label}</h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{plan.range}</p>
                    <div className="mt-5 rounded-2xl bg-secondary/70 p-4">
                      <p className="text-[11px] font-bold tracking-widest text-primary">この価格で選べる看板</p>
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground">{plan.types}</p>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{plan.note}</p>
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
