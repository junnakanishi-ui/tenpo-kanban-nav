import Image from "next/image"

const CASES = [
  {
    id: "01",
    spec: "SUS切文字 塗装仕上げ",
    size: "文字H200×3t",
    price: "105,600円",
  },
  {
    id: "02",
    spec: "SUS切文字 塗装仕上げ2色",
    size: "W543×H200×4t",
    price: "72,600円",
  },
  {
    id: "03",
    spec: "SUS切文字 HL仕上げ＋ベース箱曲げ焼付塗装1色",
    size: "文字H161/H100×5t、ベースW1400×H500×D20",
    price: "171,600円",
  },
  {
    id: "04",
    spec: "SUS切文字 塗装仕上げ",
    size: "文字H76/H28×3t",
    price: "85,800円",
  },
  {
    id: "05",
    spec: "SUS切文字 黒マット塗装仕上げ",
    size: "W750×H265×3t",
    price: "92,400円",
  },
  {
    id: "06",
    spec: "SUS切文字 塗装＋HL仕上げ",
    size: "文字H120〜H370×4t",
    price: "171,600円",
  },
] as const

export function CaseSection() {
  return (
    <section id="works" aria-labelledby="works-heading" className="bg-muted">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">WORKS</p>
          <h2
            id="works-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            ステンレス切文字の参考価格・事例
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            仕様・サイズ・参考価格の目安です。設置場所や文字内容により変動します。
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {CASES.map((item) => (
            <li key={item.id} className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={`/images/sign-types/stainless-letter/case-${item.id}.jpg`}
                  alt={`${item.spec}の施工事例（${item.size}）`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-bold leading-snug text-primary">{item.spec}</p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="shrink-0 text-muted-foreground">サイズ</dt>
                    <dd className="text-right font-medium text-primary">{item.size}</dd>
                  </div>
                  <div className="flex justify-between gap-3 border-t border-border pt-2">
                    <dt className="shrink-0 text-muted-foreground">参考価格</dt>
                    <dd className="text-right text-base font-black text-accent">{item.price}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          ※ 参考価格は税込目安です。ベース付き・2色・箱曲げなど特殊仕様は別途見積もりとなります。
        </p>
      </div>
    </section>
  )
}
