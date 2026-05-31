"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
  signTypes,
  USE_CATEGORY_LABELS,
  PRICE_CATEGORY_LABELS,
  USE_CATEGORY_ORDER,
  PRICE_CATEGORY_ORDER,
  type UseCategory,
  type PriceCategory,
  type SignType,
} from "@/data/signTypes"

type UseFilter = UseCategory | "all"
type PriceFilter = PriceCategory | "all"

export function SignTypesExplorer() {
  const [selectedUse, setSelectedUse] = useState<UseFilter>("all")
  const [selectedPrice, setSelectedPrice] = useState<PriceFilter>("all")

  const filtered = useMemo(() => {
    const list = signTypes.filter((s) => {
      const useOk = selectedUse === "all" || s.useCategories.includes(selectedUse)
      const priceOk = selectedPrice === "all" || s.priceCategory === selectedPrice
      return useOk && priceOk
    })
    return [...list].sort((a, b) => Number(b.ready) - Number(a.ready))
  }, [selectedUse, selectedPrice])

  const reset = () => {
    setSelectedUse("all")
    setSelectedPrice("all")
  }

  return (
    <div>
      <div className="rounded-2xl bg-card p-5 ring-1 ring-border md:p-6">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm font-bold text-primary">用途で選ぶ</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <FilterButton
                active={selectedUse === "all"}
                onClick={() => setSelectedUse("all")}
                label="すべて"
              />
              {USE_CATEGORY_ORDER.map((key) => (
                <FilterButton
                  key={key}
                  active={selectedUse === key}
                  onClick={() => setSelectedUse(key)}
                  label={USE_CATEGORY_LABELS[key]}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-primary">価格帯で選ぶ</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <FilterButton
                active={selectedPrice === "all"}
                onClick={() => setSelectedPrice("all")}
                label="すべて"
              />
              {PRICE_CATEGORY_ORDER.map((key) => (
                <FilterButton
                  key={key}
                  active={selectedPrice === key}
                  onClick={() => setSelectedPrice(key)}
                  label={PRICE_CATEGORY_LABELS[key]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm font-bold text-muted-foreground" aria-live="polite">
        全{signTypes.length}種中 {filtered.length}種を表示
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-2xl bg-muted p-10 text-center ring-1 ring-border">
          <p className="text-sm font-bold text-primary">
            条件に合う看板が見つかりませんでした。条件を変えてお試しください。
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 inline-flex rounded-full bg-card px-6 py-3 text-sm font-bold text-primary ring-1 ring-primary/30 hover:ring-primary/60"
          >
            絞り込みをリセット
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((sign) => (
            <li key={sign.slug}>
              <SignCard sign={sign} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={
        active
          ? "rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
          : "rounded-full bg-card px-4 py-2 text-sm font-bold text-primary ring-1 ring-border transition hover:ring-primary/30"
      }
    >
      {label}
    </button>
  )
}

function SignCard({ sign }: { sign: SignType }) {
  if (sign.ready) {
    return (
      <Link
        href={sign.href}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl hover:ring-primary/30"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-secondary to-muted">
          <Image
            src={sign.img || "/placeholder.svg"}
            alt={sign.alt}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold text-primary">{sign.name}</h3>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </div>
          <p className="mt-1 text-sm font-bold text-accent">{sign.price}</p>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{sign.desc}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {sign.uses.map((u) => (
              <li
                key={u}
                className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-bold text-primary"
              >
                {u}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    )
  }

  return (
    <div
      aria-disabled="true"
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-muted opacity-70 ring-1 ring-border"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-secondary to-muted">
        <Image
          src={sign.img || "/placeholder.svg"}
          alt={sign.alt}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover grayscale"
        />
        <span className="absolute left-3 top-3 rounded-full bg-muted px-2.5 py-1 text-[11px] font-bold text-muted-foreground ring-1 ring-border backdrop-blur">
          準備中
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-primary">{sign.name}</h3>
        <p className="mt-1 text-sm font-bold text-muted-foreground">{sign.price}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{sign.desc}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {sign.uses.map((u) => (
            <li
              key={u}
              className="rounded-full bg-card px-2.5 py-1 text-[11px] font-bold text-muted-foreground ring-1 ring-border"
            >
              {u}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
