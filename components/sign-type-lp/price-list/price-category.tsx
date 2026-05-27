import type { ReactNode } from "react"
import {
  ArrowDownSquare,
  Square,
  SquareEqual,
  SquarePlus,
  type LucideIcon,
} from "lucide-react"
import { PriceRow } from "./price-row"
import type { PriceListCategoryConfig } from "@/data/sign-types/plate-sign"

const ICON_MAP: Record<string, LucideIcon> = {
  arrowDownSquare: ArrowDownSquare,
  square: Square,
  squareHalf: SquareEqual,
  squarePlus: SquarePlus,
}

type PriceCategoryProps = {
  category: PriceListCategoryConfig
}

function renderNote(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-primary">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export function PriceCategory({ category }: PriceCategoryProps) {
  const Icon = ICON_MAP[category.iconName]

  return (
    <div className="mb-9 last:mb-0">
      <div className="mb-4 flex items-center gap-3 px-1">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card text-accent ring-1 ring-border">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-black text-primary md:text-lg">
            {category.title}
          </h3>
          <p className="text-xs text-muted-foreground">{category.description}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
        <div className="hidden border-b border-border bg-secondary/50 md:grid md:grid-cols-[2fr_1fr_1fr_2.5fr_auto] md:items-center md:gap-4 md:px-5 md:py-3">
          <div className="text-[11px] font-bold tracking-widest text-muted-foreground">
            サイズ
          </div>
          <div className="text-[11px] font-bold tracking-widest text-muted-foreground">
            製作のみ（税込）
          </div>
          <div className="text-[11px] font-bold tracking-widest text-muted-foreground">
            製作+施工（税込）
          </div>
          <div className="text-[11px] font-bold tracking-widest text-muted-foreground">
            用途例
          </div>
          <div></div>
        </div>

        <ul className="divide-y divide-border">
          {category.items.map((item, index) => (
            <li key={`${item.width}-${item.height}-${index}`}>
              <PriceRow item={item} />
            </li>
          ))}
        </ul>

        {category.note && (
          <div className="border-t border-dashed border-border bg-background px-5 py-4 text-xs leading-relaxed text-muted-foreground">
            <span className="mr-1">💡</span>
            {renderNote(category.note)}
          </div>
        )}
      </div>
    </div>
  )
}
