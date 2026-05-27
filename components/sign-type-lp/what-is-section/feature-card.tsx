import Image from "next/image"
import type { WhatIsFeature } from "@/data/sign-types/plate-sign"

type FeatureCardProps = {
  feature: WhatIsFeature
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <li className="flex flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl">
      <div className="relative aspect-square w-full overflow-hidden bg-secondary">
        <Image
          src={feature.imagePath}
          alt={feature.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-xl font-bold text-primary md:text-2xl">
          {feature.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {feature.description}
        </p>
      </div>
    </li>
  )
}
