import { Building2, Droplets, ShieldCheck, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

const FEATURES: Feature[] = [
  {
    id: "premium",
    title: "圧倒的な高級感・重厚感",
    description:
      "金属ならではの重厚な質感が、店舗ファサードからオフィス内装まで“格”を上げます。鏡面やチタンゴールドなど、仕上げで印象を自在にコントロールできます。",
    icon: Sparkles,
  },
  {
    id: "weather",
    title: "屋外でもさびにくく長寿命",
    description:
      "SUS304は耐食性・耐熱性・強度に優れたステンレス。雨風や紫外線にも強く、屋外の社名サインや店舗看板として長期間美しさを保てます。",
    icon: ShieldCheck,
  },
  {
    id: "maintenance",
    title: "汚れに強くメンテが簡単",
    description:
      "ヘアラインや鏡面はアルコール拭き、塗装やチタンゴールドは空拭きで手入れできます。金属素材なので経年劣化も緩やかです。",
    icon: Droplets,
  },
  {
    id: "versatile",
    title: "屋外サインにも内装ロゴにも",
    description:
      "ボルト出しで屋外の大型サインに、両面テープ式でオフィス内装のロゴ掲示に。設置場所や用途に合わせて最適な取付方法を選べます。",
    icon: Building2,
  },
]

export function WhatIsSection() {
  return (
    <section id="what-is" aria-labelledby="what-is-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">WHAT IS</p>
          <h2
            id="what-is-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            ステンレス切文字とは？
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            ステンレス切文字とは、ステンレス（SUS304）をレーザーカットで文字・ロゴ・記号の形に加工した金属の切文字サインです。SUS304は耐食性・耐熱性・強度に優れ「さびにくい」金属として知られ、屋外でも長期間美しさを保てます。当社では3mm・5mmの板厚を採用。金属ならではの重厚感・高級感が、店舗ファサードからオフィス内装まで空間の格を一段上げます。
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <li
                key={feature.id}
                className="rounded-2xl bg-card p-6 ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-black text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
