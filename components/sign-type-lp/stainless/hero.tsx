import Image from "next/image"
import { ArrowRight, Calculator, Phone } from "lucide-react"
import { SITE_CONTACT } from "@/data/site-contact"

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="bg-secondary">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="text-sm font-bold tracking-widest text-accent">STAINLESS LETTER</p>
            <h1
              id="hero-heading"
              className="mt-3 text-balance text-3xl font-black leading-tight text-primary md:text-5xl"
            >
              ステンレス切文字看板
            </h1>
            <p className="mt-4 text-lg font-bold text-primary">
              金属の質感が生む、ワンランク上の高級感。
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              屋外の店舗ファサード・社名サインとしての耐久性と重厚感に加え、オフィスやショールームの内装ロゴ掲示など、屋内の装飾サインとしても人気です。SUS304製のヘアライン・鏡面・塗装・チタンゴールドから選べ、デザイン・製作から全国の取付施工まで対応します。
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#simulator"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Calculator className="h-4 w-4" aria-hidden="true" />
                料金シミュレーションを試す
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SITE_CONTACT.telHref}
                className="inline-flex items-center gap-1.5 rounded-full bg-card px-6 py-3 text-sm font-bold text-primary ring-1 ring-border transition-colors hover:bg-background"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                電話で相談
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-muted ring-1 ring-border">
            <Image
              src="/images/sign-types/stainless-letter/hero.jpg"
              alt="モダンな建物ファサードに取り付けられたヘアライン仕上げのステンレス切文字看板。金属の質感が高級感を演出する店舗サインの事例"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
