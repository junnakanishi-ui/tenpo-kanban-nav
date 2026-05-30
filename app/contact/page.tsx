import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactHero } from './_components/contact-hero'
import {
  decodeAcrylicParams,
  decodeKarupParams,
  decodeSimulatorParams,
  inquiryTypeFromChoice,
} from '@/lib/simulator-params'
import type { ContactFormValues } from '@/types/contact'

export const metadata: Metadata = {
  title: 'お問い合わせ | 店舗看板ナビ',
  description:
    '店舗看板ナビへのお問い合わせはこちらから。看板の製作・施工に関するご質問、お見積もりのご依頼、ご相談など、お気軽にお寄せください。2営業日以内にご返信いたします。',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'お問い合わせ | 店舗看板ナビ',
    description: '看板の製作・施工に関するご質問、お見積もりのご依頼、ご相談はこちらから。',
    type: 'website',
  },
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const stRaw = sp['st']
  const stVal = Array.isArray(stRaw) ? stRaw[0] : stRaw
  const simulatorData =
    stVal === 'アクリル看板'
      ? decodeAcrylicParams(sp)
      : stVal === 'カルプ文字'
        ? decodeKarupParams(sp)
        : decodeSimulatorParams(sp)

  const defaultValues: Partial<ContactFormValues> | undefined = simulatorData
    ? {
        simulatorData,
        inquiryType: inquiryTypeFromChoice(simulatorData.choice),
      }
    : undefined

  return (
    <>
      <SiteHeader />
      <main>
        <ContactHero />
        <section className="bg-muted/30">
          <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
            <ContactForm defaultValues={defaultValues} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
