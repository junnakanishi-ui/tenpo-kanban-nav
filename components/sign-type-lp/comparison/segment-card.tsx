import { Star, ArrowRight, ExternalLink } from "lucide-react"
import type { SegmentCardData } from "@/data/sign-types/plate-sign"

type SegmentCardProps = {
  segment: SegmentCardData
}

export function SegmentCard({ segment }: SegmentCardProps) {
  const baseClasses =
    "flex flex-col rounded-2xl border-[1.5px] p-5 md:p-6 transition-all"
  const featuredClasses = segment.isFeatured
    ? "border-primary bg-secondary/50 shadow-md"
    : "border-border bg-card hover:border-primary/50"

  return (
    <article className={`${baseClasses} ${featuredClasses}`}>
      <div className="mb-3 flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">
          {segment.emoji}
        </span>
        <span
          className={`text-xs font-bold tracking-wider ${
            segment.isFeatured ? "text-accent" : "text-muted-foreground"
          }`}
        >
          {segment.tagLabel}
        </span>
      </div>

      <h3 className="mb-1.5 text-lg font-black leading-tight text-primary md:text-xl">
        {segment.title}
      </h3>
      <p
        className={`mb-4 text-sm font-bold ${
          segment.isFeatured ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {segment.signName}
      </p>

      <ul className="mb-4 flex-1 space-y-1.5">
        {segment.features.map((feature, i) => (
          <li
            key={i}
            className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="absolute left-0 font-black text-accent">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mb-3 flex items-baseline gap-1.5 border-t border-dashed border-border pt-3">
        <span className="text-xs text-muted-foreground">価格</span>
        <span className="text-xl font-black text-primary md:text-2xl">
          {segment.priceLabel}
        </span>
      </div>

      {segment.isFeatured ? (
        <div className="inline-flex items-center gap-1 text-sm font-bold text-accent">
          <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
          <span>{segment.ctaLabel}</span>
        </div>
      ) : segment.ctaHref ? (
        <a
          href={segment.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1 rounded-md border border-border px-3 py-2 text-sm font-bold text-primary transition-colors hover:border-primary hover:bg-secondary"
        >
          <span>{segment.ctaLabel}</span>
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ) : (
        <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
          <span>{segment.ctaLabel}</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      )}
    </article>
  )
}
