import { PriceSimulator } from "@/components/sign-type-lp/price-simulator"

export const metadata = {
  title: "プレート看板 シミュレーター（プレビュー）｜店舗看板ナビ",
  robots: { index: false, follow: false },
}

export default function SimulatorPreviewPage() {
  return (
    <main>
      {/* フルワイドネイビー背景セクション */}
      <section className="bg-[#0F2742] py-12 sm:py-16">
        <div className="mx-auto max-w-content px-4">
          <div className="mb-8 text-center sm:mb-10">
            <h1 className="text-2xl font-medium text-white sm:text-3xl">
              プレート看板 料金シミュレーション
            </h1>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              ご希望のサイズ・仕様を選ぶだけで、概算価格がすぐにわかります。
            </p>
          </div>
          <PriceSimulator />
        </div>
      </section>
    </main>
  )
}
