import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Hero } from "@/components/sign-type-lp/acrylic/hero"
import { WhatIsSection } from "@/components/sign-type-lp/acrylic/what-is-section"
import { TypeComparison } from "@/components/sign-type-lp/acrylic/type-comparison"
import { PriceSimulator } from "@/components/sign-type-lp/acrylic/price-simulator"
import { SpecGuideSection } from "@/components/sign-type-lp/acrylic/spec-guide-section"
import { PriceList } from "@/components/sign-type-lp/acrylic/price-list"
import { VsPlateSection } from "@/components/sign-type-lp/acrylic/vs-plate-section"
import { IndustrySection } from "@/components/sign-type-lp/acrylic/industry-section"
import { VariationSection } from "@/components/sign-type-lp/acrylic/variation-section"
import { ConstructionSection } from "@/components/sign-type-lp/acrylic/construction-section"
// import PreparationSection from "@/components/sign-type-lp/acrylic/preparation-section"
// import FlowSection from "@/components/sign-type-lp/acrylic/flow-section"
// import FaqSection from "@/components/sign-type-lp/acrylic/faq-section"
// import RelatedLinksSection from "@/components/sign-type-lp/acrylic/related-links-section"
import { ContactChannels } from "@/components/site/contact-channels"

export const metadata = {
  title:
    "アクリル看板｜透明感・高級感のある店舗表札・会社看板のデザイン製作・全国施工｜店舗看板ナビ",
  description:
    "透明・白・黒のアクリル看板をデザイン・製作・全国施工まで対応。クリニック・サロン・オフィス・教室の入口サインや会社表札に。概算価格シミュレーターでサイズと仕様を選ぶだけですぐに目安価格がわかります。製作のみ・施工込みどちらもご相談可能。",
}

export default function AcrylicSignPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <WhatIsSection />
        <TypeComparison />
        <section id="simulator" aria-labelledby="acrylic-simulator-heading" className="bg-primary">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">PRICE SIMULATOR</p>
              <h2
                id="acrylic-simulator-heading"
                className="mt-3 text-balance text-2xl font-black text-primary-foreground md:text-4xl"
              >
                アクリル看板 料金シミュレーション
              </h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/70">
                タイプ・サイズ・仕様を選ぶだけで、概算価格がすぐにわかります。
              </p>
            </div>
            <div className="mt-10 md:mt-12">
              <PriceSimulator />
            </div>
          </div>
        </section>
        <SpecGuideSection />
        <PriceList />
        <VsPlateSection />
        <IndustrySection />
        <VariationSection />
        <ConstructionSection />
        <ContactChannels />
      </main>
      <SiteFooter />
    </div>
  )
}
