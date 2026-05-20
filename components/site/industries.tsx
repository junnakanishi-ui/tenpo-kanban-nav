import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { industries, type Industry } from "@/data/industries"

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
          {industries.map((item: Industry) => (
            <li key={item.slug}>
              <a
                href={item.href}
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
