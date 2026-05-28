import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-content px-4 py-10 md:px-6 md:py-14">
        {/* パンくず */}
        <nav aria-label="パンくずリスト" className="mb-6 md:mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">
                ホーム
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="font-bold text-primary" aria-current="page">
              お問い合わせ
            </li>
          </ol>
        </nav>

        {/* タイトル */}
        <div className="text-center">
          <p className="text-sm font-bold tracking-widest text-accent">CONTACT</p>
          <h1 className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            お問い合わせ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            看板の製作・施工に関するご質問、お見積もりのご依頼、
            <br className="hidden md:block" />
            ご相談など、お気軽にお寄せください。担当者より
            <strong className="font-bold text-primary">2営業日以内</strong>
            にご連絡いたします。
          </p>
        </div>
      </div>
    </section>
  )
}
