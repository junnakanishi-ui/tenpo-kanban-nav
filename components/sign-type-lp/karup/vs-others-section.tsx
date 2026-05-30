import Link from "next/link"
import { Check } from "lucide-react"
import { KARUP_VS_CONCLUSION, KARUP_VS_ROWS } from "@/data/sign-types/karup-letter"

function WinnerBadge() {
  return (
    <span className="mt-1 inline-flex items-center gap-0.5 text-xs font-bold text-accent">
      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
    </span>
  )
}

function ConclusionCard({
  title,
  points,
  className,
  href,
  ready,
}: {
  title: string
  points: string[]
  className: string
  href?: string
  ready?: boolean
}) {
  return (
    <div className={`rounded-2xl p-6 md:p-7 ${className}`}>
      <h3 className="text-lg font-black text-primary md:text-xl">{title}</h3>
      <ul className="mt-4 space-y-2">
        {points.map((point) => (
          <li key={point} className="flex gap-2 text-sm leading-relaxed text-primary">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {ready === true && href && (
        <Link
          href={href}
          className="mt-5 inline-block text-sm font-bold text-primary hover:underline"
        >
          アクリル看板の詳細を見る →
        </Link>
      )}
      {ready === false && (
        <span className="mt-5 inline-block rounded bg-muted px-1.5 py-0.5 text-xs font-bold text-muted-foreground">
          準備中
        </span>
      )}
    </div>
  )
}

export function VsOthersSection() {
  const { karup, others } = KARUP_VS_CONCLUSION

  return (
    <section id="vs-others" aria-labelledby="vs-others-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">VS OTHERS</p>
          <h2
            id="vs-others-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            カルプ文字・ステンレス切文字・アクリル切文字の違い
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            立体文字には複数の素材があります。コスト・質感・耐久性で選び方が変わります
          </p>
        </div>

        <div className="mt-10 overflow-x-auto md:mt-12">
          <table className="min-w-[720px] w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-border px-4 py-3 font-bold text-muted-foreground">
                  比較項目
                </th>
                <th className="border-b border-border bg-secondary px-4 py-3 font-black text-primary">
                  カルプ文字
                </th>
                <th className="border-b border-border bg-muted px-4 py-3 font-black text-primary">
                  ステンレス切文字
                </th>
                <th className="border-b border-border bg-muted px-4 py-3 font-black text-primary">
                  アクリル切文字
                </th>
              </tr>
            </thead>
            <tbody>
              {KARUP_VS_ROWS.map((row) => (
                <tr key={row.axis} className="border-b border-border/70 last:border-b-0">
                  <td className="px-4 py-3 font-bold text-muted-foreground">{row.axis}</td>
                  <td className="bg-secondary/30 px-4 py-3 text-primary">
                    <span className="inline-flex flex-col">
                      {row.karup}
                      {row.winner === "karup" && <WinnerBadge />}
                    </span>
                  </td>
                  <td className="bg-muted/30 px-4 py-3 text-primary">
                    <span className="inline-flex flex-col">
                      {row.stainless}
                      {row.winner === "stainless" && <WinnerBadge />}
                    </span>
                  </td>
                  <td className="bg-muted/30 px-4 py-3 text-primary">
                    <span className="inline-flex flex-col">
                      {row.acrylic}
                      {row.winner === "acrylic" && <WinnerBadge />}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-5">
          <ConclusionCard
            title={karup.title}
            points={karup.points}
            className="bg-secondary"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {others.map((item) => (
              <ConclusionCard
                key={item.title}
                title={item.title}
                points={item.points}
                className="bg-muted"
                href={item.href}
                ready={item.ready}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
