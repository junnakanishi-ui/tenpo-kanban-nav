import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calculator } from "lucide-react"
import { ACRYLIC_HERO } from "@/data/sign-types/acrylic-sign"

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="bg-secondary">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="text-sm font-bold tracking-widest text-accent">
              {ACRYLIC_HERO.label}
            </p>
            <h1
              id="hero-heading"
              className="mt-3 text-balance text-3xl font-black leading-tight text-primary md:text-5xl"
            >
              {ACRYLIC_HERO.title}
            </h1>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {ACRYLIC_HERO.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#simulator"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Calculator className="h-4 w-4" aria-hidden="true" />
                概算価格を確認する
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-card px-6 py-3 text-sm font-bold text-primary ring-1 ring-border transition-colors hover:bg-background"
              >
                写真を送って相談する
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border">
            <Image
              src={ACRYLIC_HERO.heroImage.src}
              alt={ACRYLIC_HERO.heroImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
