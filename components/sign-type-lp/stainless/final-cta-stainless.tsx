import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { SITE_CONTACT } from "@/data/site-contact"

export function FinalCtaStainless() {
  return (
    <section id="final-cta-stainless" aria-labelledby="final-cta-stainless-heading" className="bg-primary">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">CONTACT</p>
          <h2
            id="final-cta-stainless-heading"
            className="mt-3 text-balance text-2xl font-black text-primary-foreground md:text-4xl"
          >
            高級感のあるステンレスサイン、まずは無料見積もりから
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
            製作のみ・施工込みどちらもご相談いただけます。仕上げ・サイズ・設置場所など、専門スタッフがお見積もりまでサポートします。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={SITE_CONTACT.contactPath}
              className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:-translate-y-0.5"
            >
              無料見積もりを依頼する
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <a
              href={SITE_CONTACT.telHref}
              className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full bg-primary-foreground/10 px-7 py-3.5 text-sm font-bold text-primary-foreground ring-1 ring-primary-foreground/30 transition-colors hover:bg-primary-foreground/20"
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
