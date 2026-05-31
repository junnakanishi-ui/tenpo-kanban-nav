import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { STAINLESS_FINISHES } from "@/data/simulators/stainless-letter"

const SPEC_ROWS = [
  { label: "文字高の目安", value: "H15mm以上（価格表はH80以下〜H500の6段階）" },
  { label: "最小線幅", value: "最も細い箇所で2mm以上（ボルト出しの場合は3.4mm以上）" },
  { label: "板厚", value: "3mm / 5mm（両面テープ式は3mmのみ）" },
  {
    label: "最大サイズの目安",
    value: "板厚0.8〜5mmで1500×3000mmまで製作可。500角を超える大型文字は箱文字を推奨",
  },
  { label: "書体", value: "角ゴシックが基準。書体・文字内容により製作可否・価格が変わります" },
] as const

export function SpecRangeSection() {
  const maintenanceFinishes = STAINLESS_FINISHES.filter((f) =>
    ["ヘアライン", "鏡面", "塗装", "チタンゴールド"].includes(f.id)
  )

  return (
    <section id="specifications" aria-labelledby="specifications-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">SPECIFICATIONS</p>
          <h2
            id="specifications-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            製作可能なサイズとお手入れについて
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            ステンレス切文字の製作可能範囲と、仕上げごとのお手入れ方法をまとめました。
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl md:mt-12">
          <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th scope="col" className="px-5 py-3 font-bold text-primary md:px-6">
                      項目
                    </th>
                    <th scope="col" className="px-5 py-3 font-bold text-primary md:px-6">
                      内容
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SPEC_ROWS.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-b-0">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 align-top font-bold text-primary md:px-6"
                      >
                        {row.label}
                      </th>
                      <td className="px-5 py-4 leading-relaxed text-muted-foreground md:px-6">
                        {row.value}
                        {row.label === "最大サイズの目安" && (
                          <>
                            {" "}
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-1 font-bold text-accent hover:underline"
                            >
                              大型文字はご相談ください
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </Link>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-border px-5 py-3 text-xs leading-relaxed text-muted-foreground md:px-6">
              ※ 書体・文字内容・設置環境により製作可否・価格が変わります。詳細はお見積もり時にご確認ください。
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-card p-5 ring-1 ring-border md:p-6">
            <h3 className="text-lg font-black text-primary">仕上げ別のお手入れ方法</h3>
            <ul className="mt-4 space-y-3">
              {maintenanceFinishes.map((finish) => (
                <li key={finish.id} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                  <span className="shrink-0 font-bold text-primary">{finish.name}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {finish.maintenance}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl bg-secondary p-5 ring-1 ring-primary/10 md:p-6">
            <h3 className="text-lg font-black text-primary">ロゴデータがなくても製作可能</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              入稿用のロゴデータ（AI・PDF等）がなくても、文字情報やイメージからデザイン相談・製作が可能です。
              「社名だけ入れたい」「雰囲気はこんな感じ」といった段階でもお気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
