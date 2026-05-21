import Link from "next/link"
import { Menu, Phone } from "lucide-react"

export function SiteHeader() {
  const navItems = [
    { label: "看板の種類", href: "#sign-types" },
    { label: "業種から選ぶ", href: "#industries" },
    { label: "価格帯", href: "#price-ranges" },
    { label: "施工の違い", href: "#service-types" },
    { label: "よくある質問", href: "#faq" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="店舗看板ナビ トップへ">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold"
          >
            看
          </span>
          <span className="text-base font-bold tracking-tight text-primary md:text-lg">店舗看板ナビ</span>
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:0000000000"
            className="hidden items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-primary md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            電話相談
          </a>
          <a
            href="#final-cta"
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02] md:px-5"
          >
            無料見積もり
          </a>
          <button
            type="button"
            aria-label="メニューを開く"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
