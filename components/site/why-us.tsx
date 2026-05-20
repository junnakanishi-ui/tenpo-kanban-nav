import { Sparkles, MapPin, Layers, MessageSquareHeart } from "lucide-react"

const reasons = [
  {
    icon: Layers,
    title: "9種類の看板を中立に比較",
    desc: "特定の素材を売りたいわけではないから、業種・立地に合った看板を中立的に提案できます。",
  },
  {
    icon: MapPin,
    title: "全国対応・47都道府県",
    desc: "全国の協力施工店ネットワークで、北海道から沖縄まで施工込みのご相談が可能です。",
  },
  {
    icon: MessageSquareHeart,
    title: "看板はじめての方に最適化",
    desc: "専門用語ゼロの説明と、写真1枚から始まる相談フロー。やり取りはチャット・メール・電話どれでもOK。",
  },
  {
    icon: Sparkles,
    title: "見積もり前に概算がわかる",
    desc: "サイト上のシミュレーターと診断で、相見積もり前に相場を掴めます。",
  },
]

export function WhyUs() {
  return (
    <section aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-wider text-accent">WHY US</p>
          <h2 id="why-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            店舗看板ナビが選ばれる理由
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-foreground/70">
            看板は数年使うもの。だから、はじめての方にこそ「失敗しないナビゲーション」が必要だと考えています。
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <li
                key={r.title}
                className="flex items-start gap-5 rounded-3xl bg-card p-6 ring-1 ring-border md:p-8"
              >
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-bold tracking-widest text-accent">REASON 0{i + 1}</p>
                  <h3 className="mt-1 text-lg font-bold text-primary md:text-xl">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75 md:text-base">{r.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
