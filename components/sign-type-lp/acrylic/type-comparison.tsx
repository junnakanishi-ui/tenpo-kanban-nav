import Image from "next/image"
import { ACRYLIC_TYPE_COMPARE } from "@/data/sign-types/acrylic-sign"

export function TypeComparison() {
  return (
    <section id="type-comparison" aria-labelledby="type-comparison-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">3 TYPES</p>
          <h2 id="type-comparison-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            透明・白・黒、3つのアクリル看板
          </h2>
        </div>
        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
          {ACRYLIC_TYPE_COMPARE.map((item) => (
            <li key={item.id} className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
              <div className="relative aspect-[4/3]">
                <Image src={item.imagePath} alt={item.imageAlt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <div className="space-y-3 px-5 py-5">
                <p className="text-sm font-bold text-accent">{item.catch}</p>
                <h3 className="text-lg font-black text-primary">{item.name}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {item.recommendedFor.map((tag) => (
                    <li key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">
                      {tag}
                    </li>
                  ))}
                </ul>
                {item.note && <p className="text-xs leading-relaxed text-muted-foreground">{item.note}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
