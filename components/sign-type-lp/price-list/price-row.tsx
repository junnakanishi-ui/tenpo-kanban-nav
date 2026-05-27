import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { PriceListItem } from "@/data/sign-types/plate-sign"

type PriceRowProps = {
  item: PriceListItem
}

const BADGE_LABELS = {
  popular: "★人気",
  standard: "★標準規格",
} as const

function formatPrice(value: number | "consult"): string {
  if (value === "consult") return "要相談"
  return `¥${value.toLocaleString()}`
}

export function PriceRow({ item }: PriceRowProps) {
  const priceWithInstallText =
    item.priceWithInstall === "consult"
      ? "要相談"
      : `¥${item.priceWithInstall.toLocaleString()}〜`

  return (
    <Link
      href="#simulator"
      className="group block transition-colors hover:bg-secondary/40"
    >
      <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_2.5fr_auto] md:items-center md:gap-4 md:px-5 md:py-4">
        <div className="font-bold text-primary">
          {item.width.toLocaleString()} × {item.height.toLocaleString()} mm
          {item.badge && (
            <span className="ml-2 inline-block rounded bg-accent/15 px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
              {BADGE_LABELS[item.badge]}
            </span>
          )}
        </div>
        <div className="text-sm font-bold text-primary">
          {formatPrice(item.priceOnly)}
        </div>
        <div className="text-sm font-bold text-muted-foreground">
          {priceWithInstallText}
        </div>
        <div className="text-xs text-muted-foreground">{item.use}</div>
        <div className="inline-flex items-center gap-1 rounded-full bg-card px-3 py-1.5 text-xs font-bold text-primary ring-1 ring-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          詳細見積もり
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </div>
      </div>

      <div className="block px-4 py-4 md:hidden">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-base font-bold text-primary">
            {item.width.toLocaleString()} × {item.height.toLocaleString()} mm
          </div>
          {item.badge && (
            <span className="rounded bg-accent/15 px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
              {BADGE_LABELS[item.badge]}
            </span>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <div className="text-[10px] font-bold text-muted-foreground">
              製作のみ
            </div>
            <div className="font-bold text-primary">
              {formatPrice(item.priceOnly)}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-muted-foreground">
              製作+施工
            </div>
            <div className="font-bold text-muted-foreground">
              {priceWithInstallText}
            </div>
          </div>
        </div>
        <div className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
          {item.use}
        </div>
        <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-card px-3 py-1.5 text-xs font-bold text-primary ring-1 ring-border">
          詳細見積もり
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}
