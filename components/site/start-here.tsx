import { ClipboardList, Calculator, Camera, ArrowRight } from "lucide-react"

const items = [
  {
    icon: ClipboardList,
    eyebrow: "STEP 01",
    title: "30秒で看板診断",
    desc: "業種・設置場所・予算を選ぶだけ。あなたのお店に合う看板の種類を提案します。",
    cta: "診断をはじめる",
    href: "#",
    tone: "primary" as const,
  },
  {
    icon: Calculator,
    eyebrow: "STEP 02",
    title: "概算価格シミュレーター",
    desc: "サイズ・素材・施工有無から、見積もり前に相場感をチェックできます。",
    cta: "価格をシミュレートする",
    href: "#price-ranges",
    tone: "accent" as const,
  },
  {
    icon: Camera,
    eyebrow: "STEP 03",
    title: "写真を送って相談",
    desc: "店舗外観の写真を1枚送るだけで、最適な看板の種類とサイズをご提案します。",
    cta: "写真で相談する",
    href: "#photo-guide",
    tone: "outline" as const,
  },
]

export function StartHere() {
  return (
    <section id="start-here" aria-labelledby="start-here-heading" className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-wider text-accent">START HERE</p>
          <h2 id="start-here-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            まずはここから。3つの入り口
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-foreground/70">
            看板選びは、ここから始めれば大丈夫。診断・価格・写真相談、お好きな入り口からどうぞ。
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {items.map((item) => {
            const Icon = item.icon
            const card =
              item.tone === "primary"
                ? "bg-primary text-primary-foreground"
                : item.tone === "accent"
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-foreground ring-1 ring-border"
            const eyebrowColor =
              item.tone === "primary" ? "text-accent" : item.tone === "accent" ? "text-primary" : "text-accent"
            return (
              <li
                key={item.title}
                className={`flex flex-col rounded-3xl p-6 shadow-sm transition-shadow hover:shadow-lg md:p-8 ${card}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/15 backdrop-blur-sm"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className={`text-xs font-bold tracking-widest ${eyebrowColor}`}>{item.eyebrow}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-snug md:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-90 md:text-base">{item.desc}</p>
                <a
                  href={item.href}
                  className={`mt-6 inline-flex items-center gap-1.5 self-start rounded-full px-5 py-2.5 text-sm font-bold transition-transform hover:translate-x-0.5 ${
                    item.tone === "outline"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background/15 text-current backdrop-blur-sm hover:bg-background/25"
                  }`}
                >
                  {item.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
