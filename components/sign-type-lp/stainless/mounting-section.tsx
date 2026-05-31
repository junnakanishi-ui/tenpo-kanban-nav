import Image from "next/image"
import { Check, CircleAlert } from "lucide-react"
import { STAINLESS_MOUNTINGS, type StainlessMounting } from "@/data/simulators/stainless-letter"

const MOUNTING_IMAGES: Record<StainlessMounting, { src: string; alt: string }> = {
  ボルト出し: {
    src: "/images/sign-types/stainless-letter/mounting-bolt.jpg",
    alt: "スタッドボルトで壁面から浮かせて取り付けたステンレス切文字。屋外ファサードの強度と立体感を示す事例",
  },
  両面テープ: {
    src: "/images/sign-types/stainless-letter/mounting-tape.jpg",
    alt: "オフィス内装のガラス面に両面テープで取り付けたステンレス切文字ロゴ。穴あけ不要の装飾サイン事例",
  },
}

export function MountingSection() {
  return (
    <section id="mounting" aria-labelledby="mounting-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">MOUNTING</p>
          <h2
            id="mounting-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            2つの取り付け方法
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            設置場所と用途に合わせて、ボルト出しと両面テープ式から選べます。
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
          {STAINLESS_MOUNTINGS.map((mounting) => {
            const image = MOUNTING_IMAGES[mounting.id]
            return (
              <li
                key={mounting.id}
                className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary to-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="px-5 py-5">
                  <h3 className="text-lg font-black text-primary">{mounting.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{mounting.desc}</p>

                  <ul className="mt-4 space-y-1.5">
                    {mounting.pros.map((pro) => (
                      <li key={pro} className="flex gap-2 text-sm text-primary">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-3 space-y-1.5">
                    {mounting.cons.map((con) => (
                      <li key={con} className="flex gap-2 text-sm text-muted-foreground">
                        <CircleAlert
                          className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm font-bold text-primary">{mounting.scene}</p>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
          <div className="rounded-2xl bg-secondary p-6 ring-1 ring-border">
            <h3 className="text-base font-black text-primary md:text-lg">
              屋外の店舗サインなら → ボルト出しで強度を確保
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              店舗ファサードや社名サインなど、長期間の屋外設置にはスタッドボルト式が安心。壁から浮かせて影を出すスペーサー加工も選べます。
            </p>
          </div>
          <div className="rounded-2xl bg-secondary p-6 ring-1 ring-border">
            <h3 className="text-base font-black text-primary md:text-lg">
              オフィス・店内のロゴ掲示なら → 両面テープ式で穴あけ不要
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              原寸大の位置合わせ用紙を同封するので、自分でもきれいに設置しやすい方式です。ガラス面や穴あけが難しい内装壁にも向きます。
            </p>
          </div>
        </div>

        <p className="mt-6 rounded-xl bg-muted/60 p-4 text-sm leading-relaxed text-muted-foreground">
          両面テープ式は板厚3mm・文字高H150以下に限定され、スペーサー加工は不可です。屋外・大型・重量物には不向きのため、該当する場合はボルト出しをお選びください。
        </p>
      </div>
    </section>
  )
}
