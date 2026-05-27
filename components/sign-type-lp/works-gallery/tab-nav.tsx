"use client"

import {
  LayoutGrid,
  UtensilsCrossed,
  Scissors,
  Stethoscope,
  Building2,
  Briefcase,
  type LucideIcon,
} from "lucide-react"
import {
  WORK_CATEGORIES,
  type WorkCategory,
} from "@/data/sign-types/plate-sign"

type TabNavProps = {
  activeCategory: WorkCategory | "all"
  onCategoryChange: (category: WorkCategory | "all") => void
  countByCategory: Record<WorkCategory | "all", number>
}

const ICON_MAP: Record<string, LucideIcon> = {
  apps: LayoutGrid,
  kitchen: UtensilsCrossed,
  scissors: Scissors,
  stethoscope: Stethoscope,
  building: Building2,
  briefcase: Briefcase,
}

export function TabNav({
  activeCategory,
  onCategoryChange,
  countByCategory,
}: TabNavProps) {
  return (
    <div
      className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:pb-0"
      role="tablist"
      aria-label="施工事例カテゴリ"
    >
      {WORK_CATEGORIES.map((category) => {
        const Icon = ICON_MAP[category.icon]
        const isActive = activeCategory === category.id
        const count = countByCategory[category.id] ?? 0
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onCategoryChange(category.id)}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border-[1.5px] px-5 py-2.5 text-sm font-bold transition-colors ${
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>{category.label}</span>
            <span
              className={`text-xs ${
                isActive ? "opacity-80" : "opacity-60"
              }`}
            >
              ({count})
            </span>
          </button>
        )
      })}
    </div>
  )
}
