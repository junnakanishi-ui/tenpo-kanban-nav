import Link from "next/link"
import { Calculator, ArrowRight } from "lucide-react"
import { PriceCategory } from "./price-category"
import { PLATE_SIGN_PRICE_LIST } from "@/data/sign-types/plate-sign"

export function PriceList() {
  return (
    <section
      id="price-list"
      aria-labelledby="price-list-heading"
      className="bg-muted/50"
    >
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">
            PRICE LIST
          </p>
          <h2
            id="price-list-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            サイズ・価格早見表
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            よく選ばれる13規格の価格を、用途別に整理しました。
            <br className="hidden sm:block" />
            気になるサイズの行をタップすると、詳細な見積もりに進めます。
          </p>
        </div>

        <div className="mt-10 md:mt-14">
          {PLATE_SIGN_PRICE_LIST.map((category) => (
            <PriceCategory key={category.id} category={category} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-card p-6 text-center ring-1 ring-border md:mt-14 md:p-8">
          <h3 className="text-base font-black text-primary md:text-lg">
            他のサイズ・仕様で見積もりを取りたい方は
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            表に無いサイズ、穴あけ加工、シート巻き込み、照明オプションなどの
            <br className="hidden sm:block" />
            詳細を含めた概算は、シミュレーターからすぐに確認できます。
          </p>
          <Link
            href="#simulator"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:scale-[1.02]"
          >
            <Calculator className="h-4 w-4" aria-hidden="true" />
            <span>詳細条件で概算を確認する</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
