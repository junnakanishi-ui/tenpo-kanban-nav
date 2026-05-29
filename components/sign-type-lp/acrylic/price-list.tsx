import {
  ACRYLIC_PRICE_LIST_MEDIUM,
  ACRYLIC_PRICE_LIST_NOTE,
  ACRYLIC_PRICE_LIST_SMALL,
  ACRYLIC_THICKNESS_GUIDE,
} from "@/data/sign-types/acrylic-sign"

function PriceTable({ title, rows }: { title: string; rows: typeof ACRYLIC_PRICE_LIST_SMALL }) {
  return (
    <div className="rounded-2xl bg-card p-4 ring-1 ring-border md:p-5">
      <h3 className="text-lg font-black text-primary">{title}</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="min-w-[680px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-primary">
              <th className="px-3 py-2 font-bold">サイズ</th>
              <th className="px-3 py-2 font-bold">おすすめ用途</th>
              <th className="px-3 py-2 font-bold">透明3mm</th>
              <th className="px-3 py-2 font-bold">白・黒3mm</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${title}-${row.size}`} className="border-b border-border/70 last:border-b-0">
                <td className="px-3 py-2 font-medium text-primary">{row.size}</td>
                <td className="px-3 py-2 text-muted-foreground">{row.use}</td>
                <td className="px-3 py-2 text-primary">{row.transparent}</td>
                <td className="px-3 py-2 text-primary">{row.whiteBlack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function PriceList() {
  return (
    <section id="price-list" aria-labelledby="price-list-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">PRICE LIST</p>
          <h2 id="price-list-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            サイズ・価格早見表
          </h2>
        </div>
        <div className="mt-10 space-y-5 md:mt-12">
          <PriceTable title="小型サイズ" rows={ACRYLIC_PRICE_LIST_SMALL} />
          <PriceTable title="中型サイズ" rows={ACRYLIC_PRICE_LIST_MEDIUM} />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {ACRYLIC_THICKNESS_GUIDE.map((item) => (
            <div key={item.thickness} className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <h3 className="text-base font-black text-primary">{item.thickness}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{ACRYLIC_PRICE_LIST_NOTE}</p>
      </div>
    </section>
  )
}
