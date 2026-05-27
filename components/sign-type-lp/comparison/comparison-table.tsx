import { SIGN_COMPARISON_TABLE } from "@/data/sign-types/plate-sign"

function getCellClass(rank?: "best" | "good" | "ok"): string {
  if (rank === "best") return "text-accent font-black"
  if (rank === "good") return "text-primary font-bold"
  return "text-muted-foreground"
}

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm md:text-[15px]">
          <thead className="bg-muted/50">
            <tr>
              <th className="p-4 text-left font-black tracking-wider text-muted-foreground md:p-5">
                {/* 空 */}
              </th>
              <th className="bg-accent/10 p-4 text-left font-black tracking-wider text-primary md:p-5">
                プレート看板
              </th>
              <th className="p-4 text-left font-black tracking-wider text-muted-foreground md:p-5">
                アクリル看板
              </th>
              <th className="p-4 text-left font-black tracking-wider text-muted-foreground md:p-5">
                カルプ文字
              </th>
              <th className="p-4 text-left font-black tracking-wider text-muted-foreground md:p-5">
                ステンレス切文字
              </th>
            </tr>
          </thead>
          <tbody>
            {SIGN_COMPARISON_TABLE.map((row, i) => (
              <tr key={i} className="border-t border-border">
                <td className="bg-muted/30 p-4 font-bold text-muted-foreground md:p-5">
                  {row.category}
                </td>
                <td
                  className={`bg-accent/5 p-4 md:p-5 ${getCellClass(row.plateRank)}`}
                >
                  {row.plate}
                </td>
                <td className="p-4 text-muted-foreground md:p-5">{row.acrylic}</td>
                <td className="p-4 text-muted-foreground md:p-5">{row.culp}</td>
                <td className="p-4 text-muted-foreground md:p-5">{row.stainless}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
