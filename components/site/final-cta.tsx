import { ArrowRight, Calculator, Camera } from "lucide-react"

export function FinalCta() {
  return (
    <section id="final-cta" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground md:px-12 md:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-sub/20 blur-3xl"
          />
          <div className="relative max-w-3xl">
            <p className="text-sm font-bold tracking-wider text-accent">GET STARTED</p>
            <h2
              id="final-cta-heading"
              className="mt-3 text-balance text-3xl font-black leading-tight md:text-5xl"
            >
              まずは30秒の看板診断から、
              <br className="hidden md:block" />
              はじめませんか？
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed opacity-90 md:text-lg">
              業種と設置場所をお選びいただくだけで、あなたのお店にぴったりの看板候補と概算価格がわかります。
              診断・お見積もりはすべて無料、しつこい営業はいたしません。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.02] md:text-base"
              >
                30秒で看板診断する
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#price-ranges"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background/10 px-6 py-3.5 text-sm font-bold text-primary-foreground backdrop-blur-sm ring-1 ring-primary-foreground/30 hover:bg-background/20 md:text-base"
              >
                <Calculator className="h-4 w-4" aria-hidden="true" />
                概算価格を確認する
              </a>
              <a
                href="#photo-guide"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-bold text-primary hover:scale-[1.02] md:text-base"
              >
                <Camera className="h-4 w-4" aria-hidden="true" />
                写真を送って相談する
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
