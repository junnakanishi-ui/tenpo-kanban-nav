import Image from "next/image"
import Link from "next/link"
import { KARUP_RELATED_SIGNS } from "@/data/sign-types/karup-letter"

export function RelatedLinksSection() {
  return (
    <section id="related-signs" aria-labelledby="related-signs-heading" className="bg-muted/50">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">RELATED</p>
          <h2
            id="related-signs-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            他の看板種類も気になる方へ
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            店舗の用途や目的に応じて、最適な看板種類は変わります
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
          {KARUP_RELATED_SIGNS.map((item) => {
            const content = (
              <>
                <div className={`relative aspect-[16/10] ${!item.ready ? "opacity-60" : ""}`}>
                  <Image
                    src={item.imagePath}
                    alt={item.imageAlt}
                    fill
                    className="rounded-t-2xl object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className={`p-5 md:p-6 ${!item.ready ? "opacity-60" : ""}`}>
                  <h3 className="text-lg font-bold text-primary">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <div className="mt-4">
                    {item.ready ? (
                      <span className="text-sm font-bold text-primary">詳細を見る →</span>
                    ) : (
                      <span className="rounded bg-muted px-1.5 py-0.5 text-xs font-bold text-muted-foreground">
                        準備中
                      </span>
                    )}
                  </div>
                </div>
              </>
            )

            if (item.ready) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {content}
                </Link>
              )
            }

            return (
              <article key={item.id} className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
                {content}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
