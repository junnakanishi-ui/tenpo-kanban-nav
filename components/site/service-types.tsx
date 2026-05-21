import { Wrench, HardHat, PackageCheck, Check } from "lucide-react"

const plans = [
  {
    icon: PackageCheck,
    title: "製作のみ",
    subtitle: "Manufacturing Only",
    desc: "看板本体のみを製作・配送。取付業者がすでに決まっている方や、自社設備で取り付ける法人向け。",
    points: ["最も低コスト", "全国配送可", "取付は別手配が必要"],
    tone: "card",
  },
  {
    icon: Wrench,
    title: "自分で取付",
    subtitle: "DIY Install",
    desc: "両面テープやビス止めで取り付けられるサインに対応。取付方法のサポート資料もお渡しします。",
    points: ["小型サイン向け", "取付ガイド付き", "費用を抑えられる"],
    tone: "card",
  },
  {
    icon: HardHat,
    title: "施工込み",
    subtitle: "Full Service",
    desc: "現地調査・製作・取付・既存看板の撤去まで、看板まわりをまるごとお任せできます。",
    points: ["全国の協力施工店と連携", "高所・電飾も対応", "ワンストップで安心"],
    tone: "primary",
    recommended: true,
  },
]

export function ServiceTypes() {
  return (
    <section id="service-types" aria-labelledby="service-heading" className="bg-secondary/60">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-wider text-accent">SERVICE TYPE</p>
          <h2 id="service-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            製作のみ・自分で取付・施工込みの違い
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-foreground/70">
            予算と状況に合わせて選べる、3つの依頼方法。迷ったら「施工込み」がおすすめです。
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {plans.map((p) => {
            const Icon = p.icon
            const isPrimary = p.tone === "primary"
            return (
              <li
                key={p.title}
                className={`relative flex flex-col rounded-3xl p-6 md:p-8 ${
                  isPrimary
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20"
                    : "bg-card text-foreground ring-1 ring-border"
                }`}
              >
                {p.recommended && (
                  <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-sm">
                    おすすめ
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      isPrimary ? "bg-accent text-accent-foreground" : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p
                      className={`text-[11px] font-bold tracking-widest ${
                        isPrimary ? "text-accent" : "text-accent"
                      }`}
                    >
                      {p.subtitle}
                    </p>
                    <h3 className="text-xl font-bold leading-tight md:text-2xl">{p.title}</h3>
                  </div>
                </div>
                <p className={`mt-5 text-sm leading-relaxed md:text-base ${isPrimary ? "opacity-90" : "text-foreground/75"}`}>
                  {p.desc}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${isPrimary ? "text-accent" : "text-accent"}`}
                        aria-hidden="true"
                      />
                      <span className={isPrimary ? "opacity-90" : "text-foreground/80"}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
