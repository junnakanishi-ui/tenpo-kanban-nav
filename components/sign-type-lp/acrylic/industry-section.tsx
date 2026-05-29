import Image from "next/image"
import { ACRYLIC_INDUSTRIES, type IndustryItem } from "@/data/sign-types/acrylic-sign"

function typeBadgeClass(type: IndustryItem["recommendedType"]): string {
  switch (type) {
    case "transparent":
      return "bg-secondary text-primary"
    case "white":
      return "bg-card text-primary ring-1 ring-border"
    case "black":
      return "bg-primary text-primary-foreground"
  }
}

export function IndustrySection() {
  return (
    <section id="by-industry" aria-labelledby="by-industry-heading" className="bg-muted/50">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">BY INDUSTRY</p>
          <h2
            id="by-industry-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            業種別・おすすめのアクリル看板
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            業種ごとに合うタイプの目安をご紹介します
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {ACRYLIC_INDUSTRIES.map((item) => (
            <li
              key={item.id}
              className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.imagePath}
                  alt={item.imageAlt}
                  fill
                  className="rounded-t-2xl object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary">{item.industry}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.catch}</p>
                <p
                  className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${typeBadgeClass(item.recommendedType)}`}
                >
                  {item.recommendedTypeLabel}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
