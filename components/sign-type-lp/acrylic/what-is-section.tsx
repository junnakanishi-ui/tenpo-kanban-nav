import Image from "next/image"
import {
  ACRYLIC_WHAT_IS_FEATURES,
  ACRYLIC_WHAT_IS_LEAD,
} from "@/data/sign-types/acrylic-sign"

export function WhatIsSection() {
  return (
    <section id="what-is" aria-labelledby="what-is-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">WHAT IS</p>
          <h2
            id="what-is-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            アクリル看板とは？
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {ACRYLIC_WHAT_IS_LEAD}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
          {ACRYLIC_WHAT_IS_FEATURES.map((feature) => (
            <li
              key={feature.id}
              className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={feature.imagePath}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="text-lg font-black text-primary">{feature.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
