import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Hero } from "@/components/sign-type-lp/karup/hero"
import { WhatIsSection } from "@/components/sign-type-lp/karup/what-is-section"
// F-2以降で追加：
// import { MaterialFinishSection } from "@/components/sign-type-lp/karup/material-finish-section"
// import { PriceSimulator } from "@/components/sign-type-lp/karup/price-simulator"
// import { SpecGuideSection } from "@/components/sign-type-lp/karup/spec-guide-section"
// import { PriceList } from "@/components/sign-type-lp/karup/price-list"
// import { VsOthersSection } from "@/components/sign-type-lp/karup/vs-others-section"
// import { IndustrySection } from "@/components/sign-type-lp/karup/industry-section"
// import { VariationSection } from "@/components/sign-type-lp/karup/variation-section"
// import { ConstructionSection } from "@/components/sign-type-lp/karup/construction-section"
// import { FaqSection } from "@/components/sign-type-lp/karup/faq-section"
// import { RelatedLinksSection } from "@/components/sign-type-lp/karup/related-links-section"
// import { FinalCtaKarup } from "@/components/sign-type-lp/karup/final-cta-karup"
import { ContactChannels } from "@/components/site/contact-channels"

export const metadata = {
  title: "カルプ文字（立体文字）｜デザイン・製作・全国施工｜店舗看板ナビ",
  description:
    "カルプ文字（立体文字）のデザイン・製作・全国施工まで対応。軽量でコスパが良く、店舗ファサード・オフィス受付・内装サインに人気。文字高・厚み・仕上げを選ぶだけで概算がわかる料金シミュレーター付き。製作のみ・施工込みどちらもご相談可能。",
}

export default function KarupLetterPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <WhatIsSection />
        {/* F-2以降でここにセクションを順次追加 */}
        <ContactChannels />
      </main>
      <SiteFooter />
    </div>
  )
}
