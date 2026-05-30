import { ChevronDown } from "lucide-react"
import { KARUP_FAQS } from "@/data/sign-types/karup-letter"

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">FAQ</p>
          <h2 id="faq-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            よくあるご質問
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            カルプ文字についてよく寄せられる質問にお答えします
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3 md:mt-12">
          {KARUP_FAQS.map((faq) => (
            <details key={faq.id} className="group rounded-2xl bg-card p-5 ring-1 ring-border md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-left font-bold text-primary">{faq.question}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pt-4 leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: KARUP_FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
