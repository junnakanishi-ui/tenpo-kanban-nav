import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronDown, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { ContactChannels } from "@/components/site/contact-channels"
import { SignTypesExplorer } from "@/components/sign-type-lp/sign-types-explorer"
import { SITE_CONTACT } from "@/data/site-contact"

const FAQ_ITEMS = [
  {
    question: "看板の種類が多くて選べません。どう選べばいい？",
    answer:
      "まず設置場所と予算から絞るのがおすすめです。店舗ファサードならプレート看板・アクリル看板・立体文字、表札・銘板ならプレートやアクリル、案内・誘導ならスタンド看板や自立看板、販促・期間限定なら店頭幕・のぼり旗が向いています。このページの用途・価格帯フィルターで候補を絞り込んだうえで、各看板の詳細ページもご覧ください。",
  },
  {
    question: "一番安く作れる看板は？",
    answer:
      "店頭幕・オリジナルのぼり旗・スタンド看板など、1〜5万円台から製作できる看板があります。用途は販促や期間限定の告知向きで、短納期・低コストが魅力です。恒久的な店舗ファサード用にはプレート看板（目安3〜10万円）がバランス良く選ばれています。",
  },
  {
    question: "高級感を出したい場合は？",
    answer:
      "ステンレス切文字・チャンネル文字・アクリル看板が候補です。金属の質感を活かすならステンレス切文字、夜間の視認性を重視するならLED内蔵のチャンネル文字、透明感と上品さならアクリル看板が向いています。",
  },
  {
    question: "立体的な文字看板の違いは？",
    answer:
      "カルプ文字は発泡材を切り出した軽量な立体文字で、コスパ良く存在感を出せます。ステンレス切文字は金属の高級感が特徴で、ブランド店舗やオフィス向きです。チャンネル文字は内蔵LEDで発光し、夜間営業の飲食店などで視認性に優れます。",
  },
  {
    question: "価格はどうやって分かる？",
    answer:
      "プレート看板・アクリル看板・カルプ文字は、各ページの価格シミュレーターでサイズと仕様を選ぶだけ概算がわかります。その他の看板種類は、お問い合わせフォームや電話でご希望をお伝えいただければお見積もりいたします。",
  },
  {
    question: "製作だけ・施工込みどちらも頼める？",
    answer:
      "どちらも対応しています。製作のみのご依頼、全国への施工込みのご依頼、どちらもお選びいただけます。お問い合わせフォームでは「製作のみ」「施工込み」を種別としてお選びいただけます。",
  },
] as const

const COMPARISON_ROWS = [
  {
    type: "プレート看板",
    price: "3〜10万円",
    uses: "店舗ファサード・表札",
    feature: "コスパと耐久性のバランス◎。初めての一枚に",
  },
  {
    type: "アクリル看板",
    price: "5〜20万円",
    uses: "ファサード・表札",
    feature: "透明感と高級感。内照式とも好相性",
  },
  {
    type: "カルプ文字",
    price: "5〜15万円",
    uses: "ファサード",
    feature: "軽量な立体文字。コスパ良く存在感",
  },
  {
    type: "ステンレス切文字",
    price: "15〜40万円",
    uses: "ファサード・銘板",
    feature: "金属の高級感。ブランド店舗向き",
  },
  {
    type: "チャンネル文字",
    price: "20〜60万円",
    uses: "ファサード",
    feature: "内蔵LEDで夜間も視認性抜群",
  },
  {
    type: "店頭幕・のぼり",
    price: "1〜5万円",
    uses: "販促・期間限定",
    feature: "短納期・低コスト。イベント訴求に",
  },
  {
    type: "スタンド看板",
    price: "1〜8万円",
    uses: "案内・誘導",
    feature: "歩道で通行人にアピール",
  },
] as const

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export const metadata: Metadata = {
  title: "看板の種類一覧｜店舗看板11種を用途・価格で比較 | 店舗看板ナビ",
  description:
    "店舗看板11種類を用途・価格帯で比較できる一覧ページ。プレート看板・アクリル看板・カルプ文字ほか、看板の種類選びに役立つ比較表・FAQも掲載。詳細ページでは価格シミュレーションも可能。",
  alternates: {
    canonical: "https://tenpo-kanban-navi.com/sign-types",
  },
  openGraph: {
    title: "看板の種類一覧｜店舗看板11種を用途・価格で比較 | 店舗看板ナビ",
    description:
      "店舗看板11種類を用途・価格帯で比較できる一覧ページ。プレート看板・アクリル看板・カルプ文字ほか、看板の種類選びに役立つ比較表・FAQも掲載。詳細ページでは価格シミュレーションも可能。",
    url: "https://tenpo-kanban-navi.com/sign-types",
    type: "website",
  },
}

export default function SignTypesHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* ① ヒーロー */}
        <section aria-labelledby="sign-types-hero-heading">
          <div className="mx-auto max-w-content px-4 py-14 text-center md:px-6 md:py-24">
            <p className="text-sm font-bold tracking-widest text-accent">SIGN TYPES</p>
            <h1
              id="sign-types-hero-heading"
              className="mt-3 text-3xl font-black text-primary md:text-5xl"
            >
              店舗看板の種類一覧
            </h1>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
              <p>
                店舗看板にはプレート看板・アクリル看板・カルプ文字・チャンネル文字・店頭幕など、用途や予算に応じて選べる種類があります。このページでは代表的な11種類を用途・価格帯で比較できる看板種類一覧としてまとめ、店舗看板の比較検討に役立つ情報を掲載しています。
              </p>
              <p>
                初めて看板を検討する方でも、設置場所（ファサード・表札・案内・誘導・販促）や予算から絞り込めるよう整理しました。プレート看板・アクリル看板・カルプ文字の各詳細ページでは価格シミュレーションで概算も確認できます。店頭幕・スタンド看板・のぼり旗など、目的に合った看板を見つける起点としてご活用ください。
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={SITE_CONTACT.contactPath}
                className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:-translate-y-0.5"
              >
                価格・施工で相談する
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <a
                href={SITE_CONTACT.telHref}
                className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-bold text-primary ring-1 ring-border transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                電話で相談する
              </a>
            </div>
          </div>
        </section>

        {/* ② フィルター＋カード一覧 */}
        <section aria-labelledby="sign-types-explore-heading" className="bg-muted">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">EXPLORE</p>
              <h2
                id="sign-types-explore-heading"
                className="mt-3 text-2xl font-black text-primary md:text-4xl"
              >
                用途・価格帯から看板を探す
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                用途（ファサード・表札・案内・販促）と価格帯のフィルターで、11種類から条件に合う看板を絞り込めます。
              </p>
            </div>
            <div className="mt-10 md:mt-12">
              <SignTypesExplorer />
            </div>
          </div>
        </section>

        {/* ③ 選び方ガイド */}
        <section aria-labelledby="sign-types-guide-heading">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">HOW TO CHOOSE</p>
              <h2
                id="sign-types-guide-heading"
                className="mt-3 text-2xl font-black text-primary md:text-4xl"
              >
                看板の選び方ガイド
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                失敗しない看板選びのポイントは、設置場所・予算・耐久性・視認性の4つです。まず設置場所で候補を絞り、予算と見え方の優先度で比較しましょう。
              </p>
            </div>

            <div className="mt-10 overflow-x-auto md:mt-12">
              <table className="w-full min-w-[640px] overflow-hidden rounded-2xl bg-card text-sm ring-1 ring-border">
                <thead>
                  <tr className="bg-secondary text-primary">
                    <th scope="col" className="px-4 py-3 text-left font-bold">
                      タイプ
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-bold">
                      価格帯
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-bold">
                      向いている用途
                    </th>
                    <th scope="col" className="px-4 py-3 text-left font-bold">
                      特徴
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.type} className="border-t border-border">
                      <td className="px-4 py-3 font-bold text-primary">{row.type}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.price}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.uses}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              ※
              価格はサイズ・仕様・施工条件により変動する目安です。詳細な概算は各看板ページの価格シミュレーター、またはお問い合わせにてご確認ください。
            </p>
          </div>
        </section>

        {/* ④ FAQ */}
        <section aria-labelledby="sign-types-faq-heading" className="bg-muted">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
            />

            <div className="text-center">
              <p className="text-sm font-bold tracking-widest text-accent">FAQ</p>
              <h2
                id="sign-types-faq-heading"
                className="mt-3 text-2xl font-black text-primary md:text-4xl"
              >
                看板の種類に関するよくある質問
              </h2>
            </div>

            <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.question}
                  className="group overflow-hidden rounded-2xl bg-card ring-1 ring-border open:shadow-lg"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 text-left md:gap-4 md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-black text-primary">
                      Q
                    </span>
                    <span className="flex-1 text-sm font-bold leading-snug text-primary md:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="px-5 pb-5 pl-[60px] text-sm leading-relaxed text-muted-foreground md:px-6 md:pb-6 md:pl-[68px] md:text-[15px]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ⑤ 最終CTA */}
        <section id="final-cta" aria-labelledby="sign-types-final-cta-heading" className="bg-primary">
          <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold tracking-widest text-accent">CONTACT</p>
              <h2
                id="sign-types-final-cta-heading"
                className="mt-3 text-balance text-2xl font-black text-primary-foreground md:text-4xl"
              >
                どの看板が合うか、プロに相談しませんか？
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
                看板の種類選び・サイズ・価格まで、専門スタッフがまとめてご相談に応じます。電話・LINE・フォームからお気軽にどうぞ。
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={SITE_CONTACT.contactPath}
                  className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:-translate-y-0.5"
                >
                  価格・施工で相談する
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

        {/* ⑥ ContactChannels */}
        <ContactChannels />
      </main>
      <SiteFooter />
    </div>
  )
}
