import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Hero } from "@/components/sign-type-lp/hero"
import { WhatIsSection } from "@/components/sign-type-lp/what-is-section"
import { WorksGallery } from "@/components/sign-type-lp/works-gallery"
import { PriceSimulator } from "@/components/sign-type-lp/price-simulator"
import { PriceList } from "@/components/sign-type-lp/price-list"
import { SignComparison } from "@/components/sign-type-lp/comparison"
import ConstructionSection from "@/components/sign-type-lp/construction-section"
import PreparationSection from "@/components/sign-type-lp/preparation-section"
import FlowSection from "@/components/sign-type-lp/flow-section"
import FaqSection from "@/components/sign-type-lp/faq-section"
import RelatedLinksSection from "@/components/sign-type-lp/related-links-section"
import { FinalCtaSection } from "@/components/sign-type-lp/final-cta-section"

export const metadata = {
  title:
    "アルミ複合板プレート看板｜デザイン・製作・全国施工｜店舗看板ナビ",
  description:
    "アルミ複合板プレート看板のデザイン・製作・全国施工まで一気通貫で対応。年間7,000件超の製作実績。概算価格シミュレーターでサイズと仕様を選ぶだけですぐに目安価格がわかります。",
}

export default function PlateSignPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />

        <WhatIsSection />
        <WorksGallery />

        <section
          id="simulator"
          aria-labelledby="simulator-heading"
          className="bg-primary"
        >
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">
                PRICE SIMULATOR
              </p>
              <h2
                id="simulator-heading"
                className="mt-3 text-balance text-2xl font-black text-primary-foreground md:text-4xl"
              >
                プレート看板 料金シミュレーション
              </h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/70">
                ご希望のサイズ・仕様を選ぶだけで、概算価格がすぐにわかります。
              </p>
            </div>
            <div className="mt-10 md:mt-12">
              <PriceSimulator />
            </div>
          </div>
        </section>

        <PriceList />
        <SignComparison />
        <ConstructionSection />
        <PreparationSection />
        <FlowSection />
        <FaqSection />
        <RelatedLinksSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
