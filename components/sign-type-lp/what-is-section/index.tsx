import Link from "next/link"
import { ArrowRight, Calculator } from "lucide-react"
import { FeatureCard } from "./feature-card"
import { PLATE_SIGN_WHAT_IS_FEATURES } from "@/data/sign-types/plate-sign"

export function WhatIsSection() {
  return (
    <section id="what-is" aria-labelledby="what-is-heading">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">
            WHAT IS
          </p>
          <h2
            id="what-is-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            アルミ複合板プレート看板とは？
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            <span className="rounded bg-accent/15 px-1 font-bold text-primary">
              アルミ複合板
            </span>
            （薄いアルミ板で樹脂芯材を挟んだ素材）に印刷シートやカッティングシートを貼って仕上げる、もっとも
            <span className="rounded bg-accent/15 px-1 font-bold text-primary">
              定番の平面看板
            </span>
            です。店舗看板・会社看板・案内看板まで幅広い用途で選ばれています。
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {PLATE_SIGN_WHAT_IS_FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </ul>

        <div className="mt-10 text-center md:mt-12">
          <Link
            href="#simulator"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <Calculator className="h-4 w-4" aria-hidden="true" />
            自分のサイズで概算価格を確認
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            サイズと仕様を選ぶだけで、すぐに概算が表示されます
          </p>
        </div>
      </div>
    </section>
  )
}
