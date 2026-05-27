import { Lightbulb } from "lucide-react"
import { SegmentCard } from "./segment-card"
import { ComparisonTable } from "./comparison-table"
import { SIGN_COMPARISON_SEGMENTS } from "@/data/sign-types/plate-sign"

export function SignComparison() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">
            COMPARE
          </p>
          <h2
            id="comparison-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            他の看板種類との違い
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            「プレート看板で本当に合ってる？」と気になった方へ、
            <br className="hidden sm:block" />
            看板4種類を比較しながら、お店に合うものを選びやすく整理しました。
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-accent/40 bg-accent/10 px-5 py-4 md:mt-10 md:px-6 md:py-5">
          <p className="text-sm leading-relaxed text-primary">
            <Lightbulb
              className="mr-1.5 inline h-4 w-4 align-text-bottom text-accent"
              aria-hidden="true"
            />
            <span className="font-black">看板選びの考え方：</span>
            看板はそれぞれに得意な用途があります。「どれが一番良い」ではなく、
            <span className="font-bold">
              お店の規模・デザイン・ご予算に合うものを選ぶ
            </span>
            のがおすすめです。当社では4種類すべて製作対応していますので、迷ったらお気軽にご相談ください。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {SIGN_COMPARISON_SEGMENTS.map((segment) => (
            <SegmentCard key={segment.id} segment={segment} />
          ))}
        </div>

        <div className="mt-14 md:mt-20">
          <div className="text-center">
            <h3 className="text-xl font-black text-primary md:text-2xl">
              詳しく比較したい方へ
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              プレート看板を基準に、他3種類との違いを項目別でご覧いただけます。
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <ComparisonTable />
          </div>

          <div className="mt-4 rounded-2xl border border-accent/40 bg-accent/5 px-5 py-4 md:px-6 md:py-5">
            <p className="text-sm leading-relaxed text-primary md:text-[15px]">
              <Lightbulb
                className="mr-1.5 inline h-4 w-4 align-text-bottom text-accent"
                aria-hidden="true"
              />
              <span className="font-black">
                プレート看板のサイズ自由度について：
              </span>
              アルミ複合板の1枚ものは規格最大（4880×1220mm）までですが、
              <span className="font-bold">
                「分割看板」として複数枚を貼り合わせる方法
              </span>
              に対応しています。隙間なく綺麗に設置し、シートはそれぞれに貼るため、遠目では繋ぎ目はほとんど目立ちません。結果としてビル全面看板・工場の社名看板など、サイズに上限なく対応可能です。
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-muted/50 p-6 md:mt-14 md:p-8">
          <h3 className="flex items-center gap-2 text-base font-black text-primary md:text-lg">
            <Lightbulb className="h-5 w-5 text-accent" aria-hidden="true" />
            迷ったら「プレート看板」がおすすめの理由
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground md:text-[14.5px]">
            プレート看板は
            <span className="font-bold text-primary">
              サイズ・デザインの自由度が高く、コスパも良い
            </span>
            ため、初めての方でも失敗が少ない選択肢です。「もっと高級感が欲しい」「立体感が欲しい」と感じてから他の看板へ検討を広げるのが、看板選びの王道パターン。当社では4種類すべて製作対応していますので、後から相談いただくのも全然OKです。
          </p>
        </div>
      </div>
    </section>
  )
}
