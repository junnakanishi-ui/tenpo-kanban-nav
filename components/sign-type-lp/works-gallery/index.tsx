"use client"

import { useMemo, useState } from "react"
import { Calculator, ArrowRight } from "lucide-react"
import Link from "next/link"
import { TabNav } from "./tab-nav"
import { WorkCard } from "./work-card"
import {
  PLATE_SIGN_WORK_EXAMPLES,
  type WorkCategory,
} from "@/data/sign-types/plate-sign"

export function WorksGallery() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory | "all">(
    "all"
  )

  const countByCategory = useMemo(() => {
    const counts: Record<WorkCategory | "all", number> = {
      all: PLATE_SIGN_WORK_EXAMPLES.length,
      restaurant: 0,
      salon: 0,
      clinic: 0,
      realestate: 0,
      office: 0,
    }
    PLATE_SIGN_WORK_EXAMPLES.forEach((work) => {
      counts[work.category] += 1
    })
    return counts
  }, [])

  const filteredWorks = useMemo(() => {
    if (activeCategory === "all") return PLATE_SIGN_WORK_EXAMPLES
    return PLATE_SIGN_WORK_EXAMPLES.filter((w) => w.category === activeCategory)
  }, [activeCategory])

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">
            WORKS
          </p>
          <h2
            id="works-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            施工事例ギャラリー
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            業種別に絞り込んで、自分のお店に近い事例を見つけられます。
            <br className="hidden sm:block" />
            製作のみ・全国施工込み、どちらでもご相談いただけます。
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <TabNav
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            countByCategory={countByCategory}
          />
        </div>

        <ul
          className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 md:gap-5 lg:grid-cols-4"
          role="tabpanel"
        >
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </ul>

        <div className="mt-12 text-center md:mt-14">
          <Link
            href="#simulator"
            className="inline-flex items-center gap-1.5 rounded-full bg-card px-6 py-3 text-sm font-bold text-primary ring-1 ring-primary/30 transition-colors hover:bg-secondary"
          >
            <Calculator className="h-4 w-4" aria-hidden="true" />
            <span>気になる事例があれば、サイズと仕様で概算を確認</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
