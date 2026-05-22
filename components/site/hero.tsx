import Image from "next/image"
import { ArrowRight, Camera, Calculator, Sparkles, Check } from "lucide-react"

const badges = [
  "製作のみOK",
  "全国施工相談OK",
  "店舗写真から相談OK",
  "デザイン作成も相談OK",
]

const stats = [
  { label: "対応エリア", value: "全国47都道府県" },
  { label: "見積もり目安", value: "当日〜翌営業日" },
  { label: "対応看板", value: "11種類以上" },
]

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-gradient relative overflow-hidden"
    >
      {/* Decorative thin lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"
      />
      <div className="mx-auto max-w-content px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16 lg:min-h-[760px]">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Copy (55%) */}
          <div className="fade-up lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              全国対応・製作のみ／施工込みの両方OK
            </div>

            <h1
              id="hero-heading"
              className="mt-5 text-pretty text-[32px] font-black leading-[1.2] tracking-tight text-primary [word-break:keep-all] [overflow-wrap:anywhere] sm:text-[40px] md:text-[52px] md:leading-[1.18] lg:text-[60px]"
            >
              <span className="inline-block">お店に合う看板が、</span>
              <br />
              <span className="inline-block">はじめてでもすぐわかる。</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 [word-break:keep-all] [overflow-wrap:anywhere] md:text-lg">
              <span className="inline-block">プレート看板、アクリル看板、カルプ文字、店頭幕、ウィンドウサインまで。</span>
              <br className="hidden md:block" />
              <span className="inline-block">種類・価格・設置方法をわかりやすく整理し、製作のみ・全国施工込みのご相談に対応します。</span>
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#start-here"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:bg-primary/95 md:text-base"
              >
                30秒で看板診断する
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#price-ranges"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-md transition-all hover:scale-[1.02] hover:brightness-105 md:text-base"
              >
                <Calculator className="h-4 w-4" aria-hidden="true" />
                概算価格を確認する
              </a>
              <a
                href="#photo-guide"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/80 px-6 py-3.5 text-sm font-bold text-primary backdrop-blur transition-colors hover:bg-card md:text-base"
              >
                <Camera className="h-4 w-4" aria-hidden="true" />
                写真を送って相談する
              </a>
            </div>

            {/* Trust badges */}
            <ul className="mt-7 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-card/70 px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-border backdrop-blur"
                >
                  <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Mini stats */}
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border/70 pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1 text-base font-bold text-primary md:text-xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: Bento (45%) */}
          <div className="fade-up lg:col-span-5">
            <div className="grid grid-cols-6 grid-rows-[auto_auto] gap-3 md:gap-4">
              {/* Main image card */}
              <figure className="col-span-6 group relative overflow-hidden rounded-3xl bg-secondary ring-1 ring-border shadow-sm">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/hero/hero-storefront-main.jpg"
                    alt="カフェの店舗外観に設置されたファサード看板の提案例"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                </div>
                <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl bg-primary/85 px-4 py-2.5 text-xs font-bold text-primary-foreground backdrop-blur md:text-sm">
                  <span>店舗正面の看板提案例</span>
                  <span className="text-accent">FACADE</span>
                </figcaption>
              </figure>

              {/* Small card 1: 立体文字 */}
              <figure className="col-span-3 group relative overflow-hidden rounded-2xl bg-secondary ring-1 ring-border">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/hero/hero-dimensional-letter.jpg"
                    alt="サロンの壁面に設置された立体文字看板の提案例"
                    fill
                    sizes="(min-width: 1024px) 240px, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <span className="absolute left-2.5 top-2.5 rounded-full bg-card/90 px-2.5 py-1 text-[11px] font-bold text-primary backdrop-blur">
                  立体文字
                </span>
              </figure>

              {/* Small card 2: 集客サイン */}
              <figure className="col-span-3 group relative overflow-hidden rounded-2xl bg-secondary ring-1 ring-border">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/hero/hero-promotion-sign.jpg"
                    alt="飲食店の店頭に掲げられた店頭幕の提案例"
                    fill
                    sizes="(min-width: 1024px) 240px, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <span className="absolute left-2.5 top-2.5 rounded-full bg-card/90 px-2.5 py-1 text-[11px] font-bold text-primary backdrop-blur">
                  集客サイン
                </span>
              </figure>

              {/* Info card */}
              <div className="col-span-6 flex items-center gap-4 rounded-2xl bg-primary p-4 text-primary-foreground md:p-5">
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"
                >
                  <Camera className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold md:text-base">写真1枚から相談OK</p>
                  <p className="mt-1 text-xs leading-relaxed text-primary-foreground/80 md:text-sm">
                    店舗外観を送るだけで、看板候補を整理できます。
                  </p>
                </div>
                <a
                  href="#photo-guide"
                  className="hidden shrink-0 items-center gap-1 rounded-full bg-accent px-3.5 py-2 text-xs font-bold text-accent-foreground md:inline-flex"
                >
                  詳しく
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
