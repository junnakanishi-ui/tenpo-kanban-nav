import Image from "next/image"
import {
  STAINLESS_FINISHES,
  STAINLESS_FINISH_ORDER,
  type StainlessFinish,
} from "@/data/simulators/stainless-letter"

const FINISH_IMAGE_SLUG: Record<StainlessFinish, string> = {
  ヘアライン: "hairline",
  鏡面: "mirror",
  塗装: "paint",
  チタンゴールド: "titanium-gold",
}

export function FinishSection() {
  const finishById = Object.fromEntries(STAINLESS_FINISHES.map((f) => [f.id, f])) as Record<
    StainlessFinish,
    (typeof STAINLESS_FINISHES)[number]
  >

  return (
    <section id="finish" aria-labelledby="finish-heading" className="bg-muted">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">FINISH</p>
          <h2
            id="finish-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            用途で選べる4つの仕上げ
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            仕上げによって印象もメンテナンス方法も変わります。設置場所やブランドイメージに合わせてお選びください。
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
          {STAINLESS_FINISH_ORDER.map((id) => {
            const finish = finishById[id]
            const slug = FINISH_IMAGE_SLUG[id]
            return (
              <li
                key={id}
                className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary to-muted">
                  <Image
                    src={`/images/sign-types/stainless-letter/finish-${slug}.jpg`}
                    alt={`${finish.name}仕上げのステンレス切文字の事例`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="px-5 py-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-black text-primary">{finish.name}</h3>
                    {finish.badge && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold text-accent">
                        {finish.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{finish.desc}</p>
                  <p className="mt-3 text-sm font-bold text-primary">{finish.scene}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    メンテナンス：{finish.maintenance}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
