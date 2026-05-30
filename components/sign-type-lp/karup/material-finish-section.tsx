import Image from "next/image"
import { KARUP_COLORS } from "@/data/simulators/karup-letter"
import {
  KARUP_COLOR_IMAGES,
  KARUP_FINISH_SHOWCASE,
} from "@/data/sign-types/karup-letter"

export function MaterialFinishSection() {
  return (
    <section id="material-finish" aria-labelledby="material-finish-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">MATERIAL & FINISH</p>
          <h2
            id="material-finish-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            白・黒 × 仕上げで自由に表現
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            ベースの白/黒カルプに、素地・シート貼り・塗装の仕上げを組み合わせて、イメージ通りの立体文字に仕上げられます。
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
          {KARUP_COLORS.map((color) => {
            const image = KARUP_COLOR_IMAGES[color.id]
            return (
              <li
                key={color.id}
                className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.imagePath}
                    alt={image.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="px-5 py-5">
                  <h3 className="text-lg font-black text-primary">{color.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{color.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {color.recommendedFor.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>

        <h3 className="mt-14 text-center text-xl font-black text-primary md:mt-16">
          仕上げは3種類から選べます
        </h3>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {KARUP_FINISH_SHOWCASE.map((item) => (
            <li
              key={item.id}
              className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.imagePath}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="px-5 py-5">
                <h4 className="text-lg font-black text-primary">{item.name}</h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
