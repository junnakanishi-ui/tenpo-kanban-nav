import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { ShowcaseMarquee } from "@/components/site/showcase-marquee"
import { StartHere } from "@/components/site/start-here"
import { SignTypes } from "@/components/site/sign-types"
import { Industries } from "@/components/site/industries"
import { PriceRanges } from "@/components/site/price-ranges"
import { ServiceTypes } from "@/components/site/service-types"
import { PhotoGuide } from "@/components/site/photo-guide"
import { CommonMistakes } from "@/components/site/common-mistakes"
import { WhyUs } from "@/components/site/why-us"
import { Faq } from "@/components/site/faq"
import { FinalCta } from "@/components/site/final-cta"
import { ContactChannels } from "@/components/site/contact-channels"
import { SiteFooter } from "@/components/site/site-footer"
import { MobileStickyCta } from "@/components/site/mobile-sticky-cta"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pb-24 md:pb-0">
        <Hero />
        <ShowcaseMarquee />
        <StartHere />
        <SignTypes />
        <Industries />
        <PriceRanges />
        <ServiceTypes />
        <PhotoGuide />
        <CommonMistakes />
        <WhyUs />
        <Faq />
        <FinalCta />
        <ContactChannels />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  )
}
