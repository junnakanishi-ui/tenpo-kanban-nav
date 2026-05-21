import { AlertTriangle, ShieldCheck } from "lucide-react"

type Item = {
  mistake: string
  solution: string
  emphasized?: boolean
}

const items: Item[] = [
  {
    mistake: "サイズが小さすぎて遠くから見えない",
    solution: "通行動線・速度・距離を考慮した適正サイズを最初に算出します。",
    emphasized: true,
  },
  {
    mistake: "業種に合わないデザインで集客できない",
    solution: "業種別の事例から、ターゲット顧客に届くトーンを提案します。",
  },
  {
    mistake: "屋外用でない素材を使い1〜2年で色あせ",
    solution: "屋外耐候・防水素材を標準採用。設置場所に合わせて選定します。",
  },
  {
    mistake: "施工後に追加費用が発生してしまう",
    solution: "現地調査または写真確認の段階で、追加費用の有無を明示します。",
    emphasized: true,
  },
  {
    mistake: "夜間の集客を考えず昼間しか見えない看板に",
    solution: "電飾・LEDの要否を、立地と営業時間から逆算して提案します。",
  },
  {
    mistake: "管理規約・条例違反で再設置に",
    solution: "屋外広告物条例・物件規約を確認し、適合する仕様で設計します。",
  },
]

export function CommonMistakes() {
  return (
    <section aria-labelledby="mistakes-heading" className="bg-secondary/60">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">PITFALLS</p>
          <h2 id="mistakes-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            よくある失敗と解決策
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            はじめての看板選びで起こりがちな「あるある」と、その回避策をまとめました。
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {items.map((item, idx) => {
            const isDark = item.emphasized
            return (
              <li
                key={idx}
                className={`flex flex-col gap-4 rounded-3xl p-6 md:p-7 ${
                  isDark
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/10"
                    : "bg-card text-foreground ring-1 ring-border"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      isDark ? "bg-accent/20 text-accent" : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    <AlertTriangle className="h-4 w-4" />
                  </span>
                  <div>
                    <p
                      className={`text-[11px] font-bold tracking-widest ${
                        isDark ? "text-accent" : "text-destructive"
                      }`}
                    >
                      よくある失敗
                    </p>
                    <p
                      className={`mt-1 text-base font-bold leading-snug md:text-lg ${
                        isDark ? "" : "text-primary"
                      }`}
                    >
                      {item.mistake}
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-start gap-3 rounded-2xl p-4 ${
                    isDark ? "bg-primary-foreground/10" : "bg-secondary"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      isDark ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p
                      className={`text-[11px] font-bold tracking-widest ${
                        isDark ? "text-accent" : "text-primary"
                      }`}
                    >
                      店舗看板ナビの解決策
                    </p>
                    <p
                      className={`mt-1 text-sm leading-relaxed md:text-base ${
                        isDark ? "text-primary-foreground/90" : "text-foreground"
                      }`}
                    >
                      {item.solution}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
