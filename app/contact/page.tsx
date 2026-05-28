import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactHero } from './_components/contact-hero'

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

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactHero />
        <section className="bg-muted/30">
          <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
