import { Phone, MessageCircle, Mail } from "lucide-react"

const CHANNELS = [
  {
    id: "tel",
    icon: Phone,
    title: "電話で相談",
    description:
      "その場でサクッと聞きたい方向け。サイズや業種を教えていただければ、すぐに概算をお伝えできます。",
    action: "052-265-7603",
    buttonLabel: "電話で相談する",
    href: "tel:0522657603",
    tone: "accent" as const,
    isExternal: false,
  },
  {
    id: "line",
    icon: MessageCircle,
    title: "LINEで相談",
    description:
      "写真をそのまま送れて便利。「こんな看板にしたい」「この場所に付けたい」を画像で共有できます。",
    action: "公式LINEを追加して相談",
    buttonLabel: "LINEで相談する",
    href: "https://page.line.me/432obmvm",
    tone: "line" as const,
    isExternal: true,
  },
  {
    id: "form",
    icon: Mail,
    title: "フォームで相談",
    description:
      "詳しく書いて送りたい方向け。シミュレーションの結果と合わせて送ると、よりスムーズにご対応できます。",
    action: "24時間いつでも送信OK",
    buttonLabel: "問い合わせフォームへ",
    // TODO: フォームURLが確定したら更新
    href: "/contact",
    tone: "white" as const,
    isExternal: false,
  },
] as const

const HOURS = [
  { label: "電話受付", value: "平日 9:00 〜 18:00" },
  { label: "LINE・フォーム", value: "24時間受付・翌営業日までに返信" },
  { label: "見積もり目安", value: "当日〜翌営業日" },
] as const

function getButtonStyle(tone: "accent" | "line" | "white") {
  switch (tone) {
    case "accent":
      return "bg-accent text-accent-foreground hover:bg-accent/90"
    case "line":
      return "bg-[#06C755] text-white hover:bg-[#05a847]"
    case "white":
      return "bg-card text-primary hover:bg-secondary"
  }
}

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="bg-primary"
    >
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">
            CONTACT
          </p>
          <h2
            id="final-cta-heading"
            className="mt-3 text-balance text-2xl font-black text-primary-foreground md:text-4xl"
          >
            専門知識を持ったスタッフが
            <br className="hidden md:block" />
            随時ご対応！
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/70">
            <span className="font-bold text-primary-foreground">
              大体のサイズと業種さえ教えていただければ
            </span>
            、概算をすぐにお出しできます。
            <br className="hidden sm:block" />
            電話・LINE・フォームからお気軽にどうぞ。
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {CHANNELS.map((ch) => {
            const Icon = ch.icon
            return (
              <li
                key={ch.id}
                className="flex flex-col rounded-3xl bg-primary-foreground/[0.06] p-6 text-center ring-1 ring-primary-foreground/10 transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/10 md:p-8"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary-foreground">
                  {ch.title}
                </h3>
                <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-primary-foreground/65">
                  {ch.description}
                </p>
                <p className="mt-4 text-base font-bold text-primary-foreground md:text-lg">
                  {ch.action}
                </p>
                {ch.isExternal ? (
                  <a
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-colors ${getButtonStyle(ch.tone)}`}
                  >
                    {ch.buttonLabel}
                  </a>
                ) : (
                  <a
                    href={ch.href}
                    className={`mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-colors ${getButtonStyle(ch.tone)}`}
                  >
                    {ch.buttonLabel}
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4 md:mt-12">
          {HOURS.map((h) => (
            <li
              key={h.label}
              className="rounded-2xl bg-primary-foreground/[0.04] px-4 py-3.5 text-center ring-1 ring-primary-foreground/[0.08]"
            >
              <div className="text-xs font-bold tracking-widest text-primary-foreground/50">
                {h.label}
              </div>
              <div className="mt-1 text-sm font-bold text-primary-foreground/85">
                {h.value}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
