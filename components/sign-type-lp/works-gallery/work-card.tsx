import Image from "next/image"
import type { WorkExample } from "@/data/sign-types/plate-sign"

type WorkCardProps = {
  work: WorkExample
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={work.imagePath}
          alt={work.imageAlt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span className="mb-2 inline-block w-fit rounded-full bg-secondary px-3 py-1 text-[10px] font-bold tracking-wider text-primary">
          {work.categoryLabel}
        </span>
        <h3 className="text-sm font-bold leading-tight text-primary">
          {work.storeName}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          {work.detail}
        </p>
      </div>
    </li>
  )
}
