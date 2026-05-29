import Link from "next/link"
import { Check } from "lucide-react"
import {
  ACRYLIC_VS_PLATE_CONCLUSION,
  ACRYLIC_VS_PLATE_ROWS,
} from "@/data/sign-types/acrylic-sign"

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
  link,
}: {
  title: string
  points: string[]
  className: string
  link?: { href: string; label: string }
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
      {link && (
        <Link
          href={link.href}
          className="mt-5 inline-block text-sm font-bold text-primary hover:underline"
        >
          {link.label} →
        </Link>
      )}
    </div>
  )
}

export function VsPlateSection() {
  const { acrylic, plate } = ACRYLIC_VS_PLATE_CONCLUSION

  return (
    <section id="vs-plate" aria-labelledby="vs-plate-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">VS PLATE</p>
          <h2
            id="vs-plate-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            アクリルとアルミ複合板プレート、どちらが良い？
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            店舗の入口を上品に見せたいか、大きく目立たせたいか。用途で選び方が変わります
          </p>
        </div>

        <div className="mt-10 overflow-x-auto md:mt-12">
          <table className="min-w-[640px] w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-border px-4 py-3 font-bold text-muted-foreground">
                  比較項目
                </th>
                <th className="border-b border-border bg-secondary px-4 py-3 font-black text-primary">
                  アクリル看板
                </th>
                <th className="border-b border-border bg-muted px-4 py-3 font-black text-primary">
                  アルミ複合板プレート
                </th>
              </tr>
            </thead>
            <tbody>
              {ACRYLIC_VS_PLATE_ROWS.map((row) => (
                <tr key={row.axis} className="border-b border-border/70 last:border-b-0">
                  <td className="px-4 py-3 font-bold text-muted-foreground">{row.axis}</td>
                  <td className="bg-secondary/30 px-4 py-3 text-primary">
                    <span className="inline-flex flex-col">
                      {row.acrylic}
                      {row.winner === "acrylic" && <WinnerBadge />}
                    </span>
                  </td>
                  <td className="bg-muted/30 px-4 py-3 text-primary">
                    <span className="inline-flex flex-col">
                      {row.plate}
                      {row.winner === "plate" && <WinnerBadge />}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <ConclusionCard
            title={acrylic.title}
            points={acrylic.points}
            className="bg-secondary"
          />
          <ConclusionCard
            title={plate.title}
            points={plate.points}
            className="bg-muted"
            link={{ href: plate.href, label: plate.linkLabel }}
          />
        </div>
      </div>
    </section>
  )
}
