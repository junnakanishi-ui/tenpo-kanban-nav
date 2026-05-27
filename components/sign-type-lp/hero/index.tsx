import { ArrowRight, Calculator, Camera, CircleCheck } from "lucide-react"
import { FacadeGrid } from "./facade-grid"

const STATS = [
  { label: "対応エリア", value: "製作のみも施工も", emphasis: "全国ご対応！" },
  { label: "製作実績", value: "年間", num: "7,000", suffix: "件以上！" },
  { label: "デザイン実績", value: "年間", num: "2,000", suffix: "件以上！" },
] as const

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="hero-gradient relative overflow-hidden"
    >
      <div className="relative min-h-[560px] py-4 md:min-h-[750px] md:py-4">
        <FacadeGrid />

        <div className="absolute left-1/2 top-1/2 z-10 w-[92%] max-w-[930px] -translate-x-1/2 -translate-y-1/2 md:top-[calc(50%+15px)]">
          <div className="rounded-3xl bg-card/97 px-6 py-8 text-center shadow-2xl backdrop-blur-md md:px-[52px] md:py-10">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold tracking-wider text-primary md:mb-5 md:px-5 md:py-2 md:text-sm">
              <CircleCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              全国対応・製作のみ／施工込みの両方OK
            </div>

            <h1
              id="hero-heading"
              className="text-balance font-black text-primary"
            >
              <span className="block text-2xl font-black leading-[1.3] md:text-[40px] md:leading-[1.25] lg:text-[44px]">
                アルミ複合板プレート看板
              </span>
              <span className="mt-3 block text-lg font-bold leading-[1.4] text-muted-foreground md:mt-4 md:text-[22px] lg:text-2xl">
                デザイン・製作・全国施工まで一気通貫
              </span>
              <span className="mt-3 block text-lg leading-[1.4] md:mt-4 md:text-[24px] lg:text-[26px]">
                <span className="rounded bg-accent/15 px-1.5 py-0.5">
                  業界トップクラスの価格
                </span>
                に<span className="text-accent">挑戦中！</span>
              </span>
            </h1>

            <p className="mt-5 border-t border-border pt-5 text-sm leading-[1.85] text-muted-foreground md:text-[14.5px]">
              年間
              <span className="mx-0.5 font-black text-primary">7,000件超</span>
              の製作実績／
              <span className="mx-0.5 font-black text-primary">2,000件超</span>
              のデザイン実績。
              <br className="hidden sm:block" />
              店舗看板・会社看板・案内看板まで、製作のみも施工込みもご相談いただけます。
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              <a
                href="#simulator"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:scale-[1.02]"
              >
                <Calculator className="h-4 w-4" aria-hidden="true" />
                <span>概算価格を確認する</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#final-cta"
                className="inline-flex items-center gap-1.5 rounded-full bg-card px-6 py-3.5 text-sm font-bold text-primary ring-1 ring-primary/30 transition-colors hover:bg-secondary"
              >
                <Camera className="h-4 w-4" aria-hidden="true" />
                <span>写真を送って相談する</span>
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-border pt-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border">
              {STATS.map((stat, i) => (
                <li key={i} className="text-center sm:px-3">
                  <div className="text-[11px] font-bold tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="mt-1.5 text-sm font-black leading-tight text-primary">
                    {"num" in stat ? (
                      <>
                        {stat.value}
                        <span className="mx-0.5 text-2xl text-accent">
                          {stat.num}
                        </span>
                        {stat.suffix}
                      </>
                    ) : (
                      <>
                        {stat.value}
                        <br />
                        {stat.emphasis}
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
