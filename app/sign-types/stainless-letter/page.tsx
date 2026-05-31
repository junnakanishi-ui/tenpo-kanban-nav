import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Hero } from "@/components/sign-type-lp/stainless/hero"
import { WhatIsSection } from "@/components/sign-type-lp/stainless/what-is-section"
import { FinishSection } from "@/components/sign-type-lp/stainless/finish-section"
import { MountingSection } from "@/components/sign-type-lp/stainless/mounting-section"
import { PriceSimulator } from "@/components/sign-type-lp/stainless/price-simulator"
import { VsOthersSection } from "@/components/sign-type-lp/stainless/vs-others-section"
import { SpecRangeSection } from "@/components/sign-type-lp/stainless/spec-range-section"
import { CaseSection } from "@/components/sign-type-lp/stainless/case-section"
import { FaqSection } from "@/components/sign-type-lp/stainless/faq-section"
import { FinalCtaStainless } from "@/components/sign-type-lp/stainless/final-cta-stainless"
import { ContactChannels } from "@/components/site/contact-channels"

export const metadata = {
  title: "ステンレス切文字看板｜高級感のある金属サイン・全国施工｜店舗看板ナビ",
  description:
    "ステンレス切文字（SUS304）のデザイン・製作・全国施工まで対応。屋外の店舗ファサード・社名サインから、オフィス内装のロゴ掲示まで。ヘアライン・鏡面・塗装・チタンゴールドの4仕上げ、ボルト出し／両面テープから選べます。仕上げとサイズを選ぶだけで1文字あたりの概算がわかる料金シミュレーター付き。製作のみ・施工込みどちらもご相談可能。",
}

export default function StainlessLetterPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <WhatIsSection />
        <FinishSection />
        <MountingSection />
        <section id="simulator" aria-labelledby="stainless-simulator-heading" className="bg-primary">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">PRICE SIMULATOR</p>
              <h2
                id="stainless-simulator-heading"
                className="mt-3 text-balance text-2xl font-black text-primary-foreground md:text-4xl"
              >
                ステンレス切文字 料金シミュレーション
              </h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/70">
                仕上げ・板厚・サイズ・文字数を選ぶだけで、1文字あたりの概算価格がすぐにわかります。
              </p>
            </div>
            <div className="mt-10 md:mt-12">
              <PriceSimulator />
            </div>
          </div>
        </section>
        <VsOthersSection />
        <SpecRangeSection />
        <CaseSection />
        <FaqSection />
        <FinalCtaStainless />
        <ContactChannels />
      </main>
      <SiteFooter />
    </div>
  )
}
