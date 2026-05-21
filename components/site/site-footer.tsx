import Link from "next/link"

export function SiteFooter() {
  const cols = [
    {
      title: "看板の種類",
      links: ["プレート看板", "アクリル看板", "カルプ文字", "ステンレス切文字", "チャンネル文字"],
    },
    {
      title: "業種別",
      links: ["飲食店", "美容室・サロン", "整体院・整骨院", "クリニック", "会社・オフィス"],
    },
    {
      title: "サービス",
      links: ["看板診断", "価格シミュレーター", "写真相談", "全国施工", "製作のみ依頼"],
    },
    {
      title: "会社情報",
      links: ["運営会社", "お問い合わせ", "プライバシーポリシー", "利用規約", "特定商取引法"],
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
              tenpo-kanban-navi.jp
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
            {cols.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-bold text-primary">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-foreground/70 hover:text-primary">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">© 2026 店舗看板ナビ. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">tenpo-kanban-navi.jp</p>
        </div>
      </div>
    </footer>
  )
}
