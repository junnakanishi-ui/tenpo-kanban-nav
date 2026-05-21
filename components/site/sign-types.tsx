import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { signTypes, type SignType } from "@/data/signTypes"

export function SignTypes() {
  const [featured, ...rest] = signTypes

  return (
    <section id="sign-types" aria-labelledby="sign-types-heading">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-widest text-accent">SIGN TYPES</p>
            <h2 id="sign-types-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
              看板の種類から選ぶ
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              代表的な11種類の店舗看板を、写真と特徴・価格帯でわかりやすく比較できます。
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 self-start text-sm font-bold text-primary hover:underline md:self-auto"
          >
            すべての看板種類を見る
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {/* Featured large card */}
          <li className="lg:col-span-2 lg:row-span-1">
            <SignCard sign={featured} large />
          </li>

          {rest.map((sign) => (
            <li key={sign.slug}>
              <SignCard sign={sign} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SignCard({ sign, large = false }: { sign: SignType; large?: boolean }) {
  return (
    <a
      href={sign.href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl hover:ring-primary/30"
    >
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-secondary to-muted">
        <div className={`relative w-full ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
          <Image
            src={sign.img || "/placeholder.svg"}
            alt={sign.alt}
            fill
            sizes={
              large
                ? "(min-width: 1024px) 66vw, (min-width: 640px) 100vw, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-card/95 px-2.5 py-1 text-[11px] font-bold text-primary backdrop-blur">
          {sign.price}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className={`font-bold text-primary ${large ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
          {sign.name}
        </h3>
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
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">
          詳細を見る
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </a>
  )
}
