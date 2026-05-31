import Link from "next/link"
import { Check } from "lucide-react"

type VsWinner = "stainless" | "karup" | "acrylic" | null

type VsRow = {
  axis: string
  stainless: string
  karup: string
  acrylic: string
  winner: VsWinner
}

const VS_ROWS: VsRow[] = [
  {
    axis: "質感・高級感",
    stainless: "◎ 金属の重厚感・最高級",
    karup: "○ 立体感のある樹脂",
    acrylic: "○ ツヤのある樹脂",
    winner: "stainless",
  },
  {
    axis: "耐久性（屋外）",
    stainless: "◎ さびにくく長寿命",
    karup: "○ 屋内外可（金属より劣る）",
    acrylic: "○ 屋内外可",
    winner: "stainless",
  },
  {
    axis: "重さ",
    stainless: "やや重い",
    karup: "◎ 非常に軽量",
    acrylic: "軽量",
    winner: "karup",
  },
  {
    axis: "価格帯",
    stainless: "高め（最高級）",
    karup: "◎ コスパ良",
    acrylic: "中程度",
    winner: "karup",
  },
  {
    axis: "厚み・立体感",
    stainless: "3mm/5mm（シャープ）",
    karup: "◎ 10〜30mm厚で立体的",
    acrylic: "3〜5mm程度",
    winner: "karup",
  },
  {
    axis: "向く用途",
    stainless: "高級店舗・社名サイン・オフィス内装",
    karup: "コスト重視の立体ロゴ",
    acrylic: "薄くツヤを出したい掲示",
    winner: null,
  },
]

function WinnerBadge() {
  return (
    <span className="mt-1 inline-flex items-center gap-0.5 text-xs font-bold text-accent">
      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
    </span>
  )
}

export function VsOthersSection() {
  return (
    <section id="vs-others" aria-labelledby="vs-others-heading" className="bg-muted">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">COMPARISON</p>
          <h2
            id="vs-others-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            立体文字看板の選び方｜ステンレス・カルプ・アクリル切文字
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            立体文字には素材ごとに質感・耐久性・価格帯の違いがあります。用途と予算に合わせて最適な素材を選びましょう。
          </p>
        </div>

        <div className="mt-10 overflow-x-auto md:mt-12">
          <div className="min-w-[720px] overflow-hidden rounded-2xl bg-card ring-1 ring-border">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-secondary text-primary">
                  <th className="border-b border-border px-4 py-3 font-bold">比較項目</th>
                  <th className="border-b border-border px-4 py-3 font-black">ステンレス切文字</th>
                  <th className="border-b border-border px-4 py-3 font-black">カルプ文字</th>
                  <th className="border-b border-border px-4 py-3 font-black">アクリル切文字</th>
                </tr>
              </thead>
              <tbody>
                {VS_ROWS.map((row) => (
                  <tr key={row.axis} className="border-b border-border/70 last:border-b-0">
                    <td className="px-4 py-3 font-bold text-muted-foreground">{row.axis}</td>
                    <td className="bg-secondary/30 px-4 py-3 text-primary">
                      <span className="inline-flex flex-col">
                        {row.stainless}
                        {row.winner === "stainless" && <WinnerBadge />}
                      </span>
                    </td>
                    <td className="bg-muted/30 px-4 py-3 text-primary">
                      <span className="inline-flex flex-col">
                        {row.karup}
                        {row.winner === "karup" && <WinnerBadge />}
                      </span>
                    </td>
                    <td className="bg-muted/30 px-4 py-3 text-primary">
                      <span className="inline-flex flex-col">
                        {row.acrylic}
                        {row.winner === "acrylic" && <WinnerBadge />}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          最高級の高級感・耐久性を求めるなら
          <span className="font-bold text-primary">「ステンレス切文字」</span>
          、立体感を出しつつコストを抑えるなら
          <Link href="/sign-types/karup-letter" className="font-bold text-primary hover:underline">
            「カルプ文字」
          </Link>
          、薄くツヤを出したい掲示なら
          <Link href="/sign-types/acrylic-sign" className="font-bold text-primary hover:underline">
            「アクリル切文字」
          </Link>
          がおすすめです。
        </p>
      </div>
    </section>
  )
}
