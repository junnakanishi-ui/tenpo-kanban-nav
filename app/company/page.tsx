import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Palette,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { ContactChannels } from "@/components/site/contact-channels"
import {
  COMPANY_HISTORY,
  COMPANY_INFO,
  COMPANY_LOCATIONS,
  GROUP_SITES,
  RELATED_SITES,
} from "@/data/company"
import { SITE_CONTACT } from "@/data/site-contact"

const STRENGTHS = [
  {
    icon: Building2,
    title: "30年以上の看板専門実績",
    desc: "1990年の設立以来、サイン業界に特化。看板通販サインシティでは数百種類の看板を取り扱い、累計実績を重ねてきました。",
  },
  {
    icon: Palette,
    title: "デザイン〜製作〜施工までワンストップ",
    desc: "看板の企画・デザイン・製作・販売・施工まで一貫対応。オリジナル商品開発や看板材料販売も自社で行っています。",
  },
  {
    icon: Truck,
    title: "全国50拠点以上の施工ネットワーク",
    desc: "グリーンクロスグループのネットワークを活かし、名古屋本社を中心に東京・千葉・大阪・福岡・札幌から全国対応。",
  },
  {
    icon: ShieldCheck,
    title: "上場グループの信頼性",
    desc: "2015年より東証上場「グリーンクロス」グループの一員。確かな経営基盤のもと、安心してお任せいただけます。",
  },
] as const

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社トレード",
  foundingDate: "1990-07",
  url: "https://tenpo-kanban-navi.com/company",
  parentOrganization: {
    "@type": "Organization",
    name: "グリーンクロス",
  },
  address: {
    "@type": "PostalAddress",
    postalCode: "454-0011",
    addressRegion: "愛知県",
    addressLocality: "名古屋市",
    streetAddress: "中川区山王4-5-10 学宝社ビル3F",
    addressCountry: "JP",
  },
  telephone: "052-265-7603",
}

function telHref(tel: string) {
  return `tel:${tel.replace(/-/g, "")}`
}

function ExternalSiteCard({ name, url, desc }: { name: string; url: string; desc?: string }) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-2xl bg-card p-5 ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl md:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-primary">{name}</h3>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        {desc ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p> : null}
      </a>
    </li>
  )
}

export const metadata: Metadata = {
  title: "運営会社｜株式会社トレード（サインシティ）｜店舗看板ナビ",
  description:
    "店舗看板ナビは1990年設立・看板通販サインシティを運営する株式会社トレード（東証上場グリーンクロスグループ／全国50拠点以上）が運営。看板のデザイン・製作・全国施工まで対応。",
  alternates: {
    canonical: "https://tenpo-kanban-navi.com/company",
  },
  openGraph: {
    title: "運営会社｜株式会社トレード（サインシティ）｜店舗看板ナビ",
    description:
      "店舗看板ナビは1990年設立・看板通販サインシティを運営する株式会社トレード（東証上場グリーンクロスグループ／全国50拠点以上）が運営。看板のデザイン・製作・全国施工まで対応。",
    url: "https://tenpo-kanban-navi.com/company",
    type: "website",
  },
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <SiteHeader />
      <main>
        {/* ① ヒーロー */}
        <section aria-labelledby="company-hero-heading">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <p className="text-sm font-bold tracking-widest text-accent">COMPANY</p>
            <h1
              id="company-hero-heading"
              className="mt-3 text-3xl font-black text-primary md:text-5xl"
            >
              運営会社
            </h1>
            <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
              <p>
                店舗看板ナビは、1990年設立・ネット草創期から看板通販「サインシティ」を運営する
                <strong className="font-bold text-primary">株式会社トレード</strong>
                が運営しています。
              </p>
              <p>
                2015年からは全国50拠点以上をもつ東証上場
                <strong className="font-bold text-primary">グリーンクロスグループ</strong>
                の一員として、確かな基盤のもと看板のデザイン・製作・全国施工までトータルに対応しています。
              </p>
            </div>
          </div>
        </section>

        {/* ② 私たちについて */}
        <section aria-labelledby="company-about-heading" className="bg-muted">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">ABOUT</p>
              <h2
                id="company-about-heading"
                className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
              >
                看板の専門企業として、30年以上
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
              <div className="rounded-3xl bg-card p-6 ring-1 ring-border md:p-8">
                <h3 className="text-lg font-bold text-primary md:text-xl">看板通販の先駆企業</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  2001年から看板通販「サインシティ」を運営。数百種類の看板を取り扱い、デザインから製作・オリジナル商品開発まで、看板に関わるあらゆるニーズに応えてきた実績があります。
                </p>
              </div>
              <div className="rounded-3xl bg-card p-6 ring-1 ring-border md:p-8">
                <h3 className="text-lg font-bold text-primary md:text-xl">上場グループの確かな基盤</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  2015年よりグリーンクロスグループの一員。全国50拠点以上のネットワークを活かし、製作だけでなく全国の施工にも対応できる体制を整えています。
                </p>
              </div>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
              {STRENGTHS.map((s) => {
                const Icon = s.icon
                return (
                  <li
                    key={s.title}
                    className="rounded-3xl bg-card p-6 ring-1 ring-border md:p-7"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-bold text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* ③ 会社概要 */}
        <section aria-labelledby="company-profile-heading">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">PROFILE</p>
              <h2
                id="company-profile-heading"
                className="mt-3 text-2xl font-black text-primary md:text-4xl"
              >
                会社概要
              </h2>
            </div>

            <dl className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl bg-card ring-1 ring-border">
              {COMPANY_INFO.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid gap-1 px-5 py-4 sm:grid-cols-[140px_1fr] sm:gap-6 md:px-6 md:py-5 ${i > 0 ? "border-t border-border" : ""}`}
                >
                  <dt className="text-sm font-bold text-muted-foreground">{row.label}</dt>
                  <dd className="text-sm font-medium text-primary md:text-base">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ④ 沿革 */}
        <section aria-labelledby="company-history-heading" className="bg-muted">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">HISTORY</p>
              <h2
                id="company-history-heading"
                className="mt-3 text-2xl font-black text-primary md:text-4xl"
              >
                沿革
              </h2>
            </div>

            <ol className="relative mx-auto mt-10 max-w-2xl space-y-0">
              {COMPANY_HISTORY.map((item, i) => (
                <li key={item.year} className="relative flex gap-6 pb-10 last:pb-0">
                  {i < COMPANY_HISTORY.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-[7px] top-3 h-full w-px bg-border"
                    />
                  ) : null}
                  <span
                    aria-hidden="true"
                    className="relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full bg-accent ring-4 ring-muted"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-black tracking-wide text-accent">{item.year}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ⑤ 拠点一覧 */}
        <section aria-labelledby="company-locations-heading">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">LOCATIONS</p>
              <h2
                id="company-locations-heading"
                className="mt-3 text-2xl font-black text-primary md:text-4xl"
              >
                全国の拠点
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                名古屋本社を中心に、東京・千葉・大阪・福岡・札幌に営業所を構え、全国のお客様に対応しています。
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
              {COMPANY_LOCATIONS.map((loc) => (
                <li
                  key={loc.name}
                  className="rounded-2xl bg-card p-5 ring-1 ring-border md:p-6"
                >
                  <h3 className="font-bold text-primary">{loc.name}</h3>
                  <address className="mt-3 space-y-1.5 text-sm not-italic leading-relaxed text-muted-foreground">
                    <p>〒{loc.zip}</p>
                    <p>{loc.address}</p>
                    {loc.tel ? (
                      <p>
                        TEL{" "}
                        <a
                          href={telHref(loc.tel)}
                          className="font-medium text-primary hover:text-accent"
                        >
                          {loc.tel}
                        </a>
                      </p>
                    ) : null}
                    {loc.fax ? <p>FAX {loc.fax}</p> : null}
                  </address>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ⑥ 運営サイト・グループ会社 */}
        <section aria-labelledby="company-network-heading" className="bg-muted">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">NETWORK</p>
              <h2
                id="company-network-heading"
                className="mt-3 text-2xl font-black text-primary md:text-4xl"
              >
                運営サイト・グループ会社
              </h2>
            </div>

            <div className="mt-10 space-y-12">
              <div>
                <h3 className="text-center text-lg font-bold text-primary md:text-left">
                  運営サイト
                </h3>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
                  {RELATED_SITES.map((site) => (
                    <ExternalSiteCard key={site.url} {...site} />
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-center text-lg font-bold text-primary md:text-left">
                  グループ会社
                </h3>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
                  {GROUP_SITES.map((site) => (
                    <ExternalSiteCard key={site.url} {...site} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ⑦ 最終CTA */}
        <section id="final-cta" aria-labelledby="company-final-cta-heading" className="bg-primary">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">CONTACT</p>
              <h2
                id="company-final-cta-heading"
                className="mt-3 text-balance text-2xl font-black text-primary-foreground md:text-4xl"
              >
                看板のことなら、お気軽にご相談ください
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
                看板の種類選び・デザイン・製作・全国施工まで、専門スタッフがまとめてご相談に応じます。お見積もり・ご質問は無料です。
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={SITE_CONTACT.contactPath}
                  className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:-translate-y-0.5"
                >
                  お問い合わせフォームへ
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                </Link>
                <a
                  href={SITE_CONTACT.telHref}
                  className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full bg-primary-foreground/10 px-7 py-3.5 text-sm font-bold text-primary-foreground ring-1 ring-primary-foreground/30 transition-colors hover:bg-primary-foreground/20"
                >
                  <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                  電話で相談する
                </a>
              </div>
            </div>
          </div>
        </section>

        <ContactChannels />
      </main>
      <SiteFooter />
    </div>
  )
}
