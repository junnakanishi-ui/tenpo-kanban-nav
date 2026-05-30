import Image from "next/image"
import Link from "next/link"
import { KARUP_VARIATIONS } from "@/data/sign-types/karup-letter"

export function VariationSection() {
  return (
    <section id="variations" aria-labelledby="variations-heading" className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-accent">VARIATIONS</p>
          <h2
            id="variations-heading"
            className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl"
          >
            文字だけじゃない、自由な立体表現
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 md:mt-12">
          {KARUP_VARIATIONS.map((item) => (
            <li
              key={item.id}
              className="overflow-hidden rounded-xl bg-card ring-1 ring-border"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.imagePath}
                  alt={item.imageAlt}
                  fill
                  className="rounded-t-xl object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-bold text-primary">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          特殊な形・大型もご相談ください。{" "}
          <Link href="/contact" className="font-bold text-primary hover:underline">
            お問い合わせはこちら
          </Link>
        </p>
      </div>
    </section>
  )
}
