import Image from "next/image"
import { ACRYLIC_SPEC_GUIDE } from "@/data/sign-types/acrylic-sign"

export function SpecGuideSection() {
  return (
    <section id="spec-guide" aria-labelledby="spec-guide-heading" className="bg-muted/50">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">SPEC GUIDE</p>
          <h2 id="spec-guide-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            仕上げ・取付の選び方
          </h2>
        </div>
        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
          {ACRYLIC_SPEC_GUIDE.map((item) => (
            <li key={item.id} className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
              <div className="relative aspect-[4/3]">
                <Image src={item.imagePath} alt={item.imageAlt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="px-5 py-5">
                <h3 className="text-lg font-black text-primary">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
