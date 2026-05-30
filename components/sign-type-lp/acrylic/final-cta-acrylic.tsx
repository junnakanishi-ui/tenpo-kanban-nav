import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { ACRYLIC_FINAL_CTA } from "@/data/sign-types/acrylic-sign"
import { SITE_CONTACT } from "@/data/site-contact"

export function FinalCtaAcrylic() {
  return (
    <section id="final-cta-acrylic" aria-labelledby="final-cta-acrylic-heading" className="bg-secondary">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">{ACRYLIC_FINAL_CTA.label}</p>
          <h2
            id="final-cta-acrylic-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            {ACRYLIC_FINAL_CTA.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{ACRYLIC_FINAL_CTA.subtitle}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:-translate-y-0.5"
            >
              写真を送って相談する
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <a
              href={SITE_CONTACT.telHref}
              className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-bold text-primary ring-1 ring-border transition-colors hover:bg-background"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              電話で相談する
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
