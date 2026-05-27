import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Info } from "lucide-react"

type RelatedLink = {
  id: string
  href: string
  isExternal?: boolean
  tag: string
  tagType: "type" | "all"
  imageSrc: string
  imageAlt: string
  title: string
  priceLabel: string
  description: string
  ctaLabel: string
  highlighted?: boolean
}

const RELATED_LINKS: RelatedLink[] = [
  {
    id: "acrylic",
    href: "https://trade-sign.com/main/acryl-sign/index.html",
    isExternal: true,
    tag: "看板の種類",
    tagType: "type",
    imageSrc: "/images/sign-types/plate-sign/related/related-01-acrylic.jpg",
    imageAlt: "アクリル看板の事例",
    title: "アクリル看板",
    priceLabel: "¥8,800〜",
    description:
      "透明感のある質感で、表札・店舗ロゴ・社名プレートに最適。浮かしビスで存在感もUP。",
    ctaLabel: "詳しく見る",
  },
  {
    id: "culp",
    href: "https://trade-sign.com/main/culp-moji-sign/index.html",
    isExternal: true,
    tag: "看板の種類",
    tagType: "type",
    imageSrc: "/images/sign-types/plate-sign/related/related-02-culp.jpg",
    imageAlt: "カルプ文字の事例",
    title: "カルプ文字",
    priceLabel: "文字数次第",
    description:
      "発泡素材をカットした立体文字。ファサードや店舗内装にシンプルに立体表現を加えたい時に。",
    ctaLabel: "詳しく見る",
  },
  {
    id: "stainless",
    href: "https://trade-sign.com/main/sus-moji-sign/index.html",
    isExternal: true,
    tag: "看板の種類",
    tagType: "type",
    imageSrc: "/images/sign-types/plate-sign/related/related-03-stainless.jpg",
    imageAlt: "ステンレス切文字の事例",
    title: "ステンレス切文字",
    priceLabel: "¥3,630〜",
    description:
      "金属の質感で高級感あり。店舗名・マンション名・会社銘板など長期使用に最適。",
    ctaLabel: "詳しく見る",
  },
  {
    id: "all",
    href: "/sign-types",
    tag: "すべて見る",
    tagType: "all",
    imageSrc: "/images/sign-types/plate-sign/related/related-04-all.jpg",
    imageAlt: "看板の種類すべてのコラージュ",
    title: "看板の種類すべて",
    priceLabel: "14種類以上",
    description:
      "プレート・アクリル・カルプ・ステンレスのほか、電飾看板・自立看板・突き出しなど、すべての看板種類を一覧できます。",
    ctaLabel: "一覧を見る",
    highlighted: true,
  },
]

function RelatedCard({ link }: { link: RelatedLink }) {
  const cardClasses = `group block h-full overflow-hidden rounded-2xl bg-card transition-all hover:-translate-y-1 hover:shadow-xl ${
    link.highlighted
      ? "ring-2 ring-accent"
      : "ring-1 ring-border hover:ring-primary/30"
  }`

  const inner = (
    <>
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={link.imageSrc}
          alt={link.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <span
          className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold ${
            link.tagType === "all"
              ? "bg-accent text-accent-foreground"
              : "bg-secondary text-primary"
          }`}
        >
          {link.tag}
        </span>
        <h3 className="mt-2 text-lg font-extrabold leading-snug text-primary">
          {link.title}
        </h3>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">
          {link.priceLabel}
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
          {link.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
          {link.ctaLabel}
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            strokeWidth={3}
          />
        </span>
      </div>
    </>
  )

  if (link.isExternal) {
    return (
      <a
        href={link.href}
        className={cardClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={link.href} className={cardClasses}>
      {inner}
    </Link>
  )
}

export default function RelatedLinksSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="text-center">
          <p className="text-sm font-bold tracking-widest text-accent">
            RELATED
          </p>
          <h2 className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            他の看板も見てみる
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            プレート看板以外にも、お店の規模や雰囲気に合わせて選べる看板があります。それぞれの特徴を見比べてみてください。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RELATED_LINKS.map((link) => (
            <RelatedCard key={link.id} link={link} />
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl bg-secondary px-5 py-4 md:px-6">
          <Info
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
            strokeWidth={2.2}
          />
          <p className="text-sm leading-relaxed text-primary">
            <span className="font-bold">業種別の看板事例ページも準備中。</span>
            飲食店・サロン・クリニック・不動産など、業種ごとの実例を見比べられるコンテンツも順次公開予定です。
          </p>
        </div>
      </div>
    </section>
  )
}
