import { ChevronDown } from "lucide-react"

const STAINLESS_FAQS = [
  {
    id: "outdoor-rust",
    question: "Q. 屋外でも錆びませんか？",
    answer:
      "A. SUS304は耐食性に優れさびにくく、屋外サインに適しています。沿岸部など環境により表面処理のご相談も可能です。",
  },
  {
    id: "tape-outdoor",
    question: "Q. 両面テープで屋外設置はできますか？",
    answer:
      "A. 落下リスクがあるため屋外・大型・重量物には不向きです。屋外はボルト出しを推奨します。両面テープは屋内のロゴ掲示やガラス面など、穴あけが難しい場所に適しています。",
  },
  {
    id: "finish-price",
    question: "Q. 一番安い仕上げ・高い仕上げは？",
    answer:
      "A. 最も安価はヘアライン、最も高級はチタンゴールドです。鏡面・塗装はその中間です。",
  },
  {
    id: "min-size",
    question: "Q. 製作できる最小サイズ・文字幅は？",
    answer:
      "A. 文字高はH15mm以上、最も細い線幅は2mm以上（ボルト出しは3.4mm以上）が目安です。書体により変わります。",
  },
  {
    id: "no-logo-data",
    question: "Q. ロゴデータがありませんが作れますか？",
    answer:
      "A. 文字情報やイメージからのデザイン相談・製作が可能です。データがなくてもお気軽にご相談ください。",
  },
  {
    id: "maintenance",
    question: "Q. お手入れ方法は？",
    answer:
      "A. ヘアライン・鏡面はアルコールでの拭き掃除、塗装・チタンゴールドは空拭きが推奨です。",
  },
] as const

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
            ステンレス切文字についてよく寄せられる質問にお答えします
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-3 md:mt-12">
          {STAINLESS_FAQS.map((faq) => (
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
              mainEntity: STAINLESS_FAQS.map((faq) => ({
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
