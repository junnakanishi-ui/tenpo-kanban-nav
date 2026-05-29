import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, CheckCircle2, Wrench } from "lucide-react"
import { ACRYLIC_CONSTRUCTION } from "@/data/sign-types/acrylic-sign"

function ChecklistCard({
  title,
  items,
  imagePath,
  imageAlt,
  titleIcon: TitleIcon,
  iconClassName,
}: {
  title: string
  items: string[]
  imagePath: string
  imageAlt: string
  titleIcon: typeof CheckCircle2
  iconClassName: string
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
      <div className="relative aspect-[4/3]">
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="flex items-center gap-2 text-lg font-bold text-primary">
          <TitleIcon className={`h-5 w-5 shrink-0 ${iconClassName}`} aria-hidden="true" />
          {title}
        </h3>
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function ConstructionSection() {
  const { lead, diyOk, proRecommend } = ACRYLIC_CONSTRUCTION

  return (
    <section id="installation" aria-labelledby="installation-heading" className="bg-muted/50">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">INSTALLATION</p>
          <h2
            id="installation-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            取付・施工について
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{lead}</p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
          <ChecklistCard
            title={diyOk.title}
            items={diyOk.items}
            imagePath={diyOk.imagePath}
            imageAlt={diyOk.imageAlt}
            titleIcon={CheckCircle2}
            iconClassName="text-accent"
          />
          <ChecklistCard
            title={proRecommend.title}
            items={proRecommend.items}
            imagePath={proRecommend.imagePath}
            imageAlt={proRecommend.imageAlt}
            titleIcon={Wrench}
            iconClassName="text-primary"
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:-translate-y-0.5"
          >
            現地確認・お見積もりを相談する
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
