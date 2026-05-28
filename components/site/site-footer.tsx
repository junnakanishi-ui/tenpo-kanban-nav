import Link from "next/link"
import { Phone, MessageCircle, Mail } from "lucide-react"
import { SITE_CONTACT } from "@/data/site-contact"

export function SiteFooter() {
  const cols = [
    {
      title: "看板の種類",
      links: [
        { label: "プレート看板", href: "/sign-types/plate-sign", ready: true },
        { label: "アクリル看板", href: "#", ready: false },
        { label: "カルプ文字", href: "#", ready: false },
        { label: "ステンレス切文字", href: "#", ready: false },
        { label: "チャンネル文字", href: "#", ready: false },
        { label: "すべて見る", href: "#", ready: false },
      ],
    },
    {
      title: "業種別",
      links: [
        { label: "飲食店", href: "#", ready: false },
        { label: "美容室・サロン", href: "#", ready: false },
        { label: "整体院・整骨院", href: "#", ready: false },
        { label: "クリニック", href: "#", ready: false },
        { label: "会社・オフィス", href: "#", ready: false },
      ],
    },
    {
      title: "サービス",
      links: [
        { label: "看板診断", href: "#", ready: false },
        { label: "価格シミュレーター", href: "/sign-types/plate-sign", ready: true },
        { label: "写真相談", href: "#", ready: false },
        { label: "全国施工", href: "#", ready: false },
        { label: "製作のみ依頼", href: "#", ready: false },
      ],
    },
    {
      title: "会社情報",
      links: [
        { label: "運営会社", href: "#", ready: false },
        { label: "お問い合わせ", href: "/contact", ready: true },
        { label: "プライバシーポリシー", href: "#", ready: false },
        { label: "利用規約", href: "#", ready: false },
        { label: "特定商取引法", href: "#", ready: false },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-content px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2" aria-label="店舗看板ナビ トップへ">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold"
              >
                看
              </span>
              <span className="text-base font-bold tracking-tight text-primary md:text-lg">店舗看板ナビ</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              店舗看板の種類・価格・設置方法が、はじめてでもわかる看板選びナビ。
              <br />
              tenpo-kanban-nav.com
            </p>
            <div className="mt-5 space-y-2.5">
              <a
                href={SITE_CONTACT.telHref}
                className="flex items-center gap-2 text-sm font-bold text-primary hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                {SITE_CONTACT.telDisplay}
              </a>
              <a
                href={SITE_CONTACT.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-[#06C755]" aria-hidden="true" />
                公式LINEで相談
              </a>
              <Link
                href={SITE_CONTACT.contactPath}
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
              >
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                お問い合わせフォーム
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">電話受付：{SITE_CONTACT.hours.tel}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
            {cols.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-bold text-primary">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.ready ? (
                        <Link href={l.href} className="text-sm text-foreground/70 transition-colors hover:text-primary">
                          {l.label}
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/50" aria-disabled="true">
                          {l.label}
                          <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground/70">
                            準備中
                          </span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">© 2026 店舗看板ナビ. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">tenpo-kanban-nav.com</p>
        </div>
      </div>
    </footer>
  )
}
