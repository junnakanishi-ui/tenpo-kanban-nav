import { KARUP_PRICE_LIST, KARUP_PRICE_LIST_NOTE } from "@/data/sign-types/karup-letter"

export function PriceList() {
  return (
    <section id="price-list" aria-labelledby="price-list-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">PRICE LIST</p>
          <h2
            id="price-list-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            文字高×厚みの価格早見表
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl bg-card p-4 ring-1 ring-border md:mt-12 md:p-5">
          <table className="min-w-[480px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-primary">
                <th className="px-3 py-2 font-bold">文字高</th>
                <th className="px-3 py-2 font-bold">10mm</th>
                <th className="px-3 py-2 font-bold">20mm</th>
                <th className="px-3 py-2 font-bold">30mm</th>
              </tr>
            </thead>
            <tbody>
              {KARUP_PRICE_LIST.map((row) => (
                <tr key={row.height} className="border-b border-border/70 last:border-b-0">
                  <td className="px-3 py-2 font-medium text-primary">{row.height}</td>
                  <td className="px-3 py-2 text-primary">{row.t10}</td>
                  <td className="px-3 py-2 text-primary">{row.t20}</td>
                  <td className="px-3 py-2 text-primary">{row.t30}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{KARUP_PRICE_LIST_NOTE}</p>
      </div>
    </section>
  )
}
