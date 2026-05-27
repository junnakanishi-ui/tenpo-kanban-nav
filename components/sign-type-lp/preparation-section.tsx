import Image from "next/image";
import {
  Camera,
  MessageCircle,
  Calculator,
  Info,
  Lightbulb,
} from "lucide-react";

type PreparationItem = {
  number: number;
  imageSrc: string;
  imageAlt: string;
  badgeLabel: string;
  badgeType: "good" | "light";
  title: string;
  description: string;
  tip: string;
};

const PREPARATION_ITEMS: PreparationItem[] = [
  {
    number: 1,
    imageSrc: "/images/sign-types/plate-sign/preparation/scene-01-photo-place.jpg",
    imageAlt: "スマホで店舗の壁を撮影しているシーン",
    badgeLabel: "あると◎",
    badgeType: "good",
    title: "設置場所のお写真",
    description:
      "スマホで撮った1〜2枚でOK。設置したい壁や入口の様子がわかる写真があると、設置可否の判断が早くなります。",
    tip: "全体が写った1枚 + 近くで撮った1枚があれば十分です。",
  },
  {
    number: 2,
    imageSrc: "/images/sign-types/plate-sign/preparation/scene-02-size-measure.jpg",
    imageAlt: "メジャーや手で「1mぐらい」とサイズを示しているイメージ",
    badgeLabel: "おおよそでOK",
    badgeType: "good",
    title: "おおよそのサイズ",
    description:
      "横幅・縦の長さがざっくり分かれば概算金額をお出しできます。1cm単位の正確さは不要です。",
    tip: "「横1mくらい・縦50cmくらい」が「横1.1m・縦60cm」になっても価格は大きく変わりません。",
  },
  {
    number: 3,
    imageSrc: "/images/sign-types/plate-sign/preparation/scene-03-design-memo.jpg",
    imageAlt: "手書きラフメモやイメージ画像を示しているシーン",
    badgeLabel: "あれば",
    badgeType: "light",
    title: "イメージ・現状の看板",
    description:
      "「こんな感じにしたい」という参考画像や、もし今ある看板の写真があれば添付してください。",
    tip: "手書きラフやスマホで撮ったメモ画像でも全然OKです。",
  },
];

function BadgeLabel({ item }: { item: PreparationItem }) {
  if (item.badgeType === "good") {
    return (
      <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-bold text-accent">
        {item.badgeLabel}
      </span>
    );
  }
  return (
    <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-bold text-muted-foreground">
      {item.badgeLabel}
    </span>
  );
}

export default function PreparationSection() {
  return (
    <section className="bg-muted/50">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="text-center">
          <p className="text-sm font-bold tracking-widest text-accent">PREPARATION</p>
          <h2 className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            あると、よりスムーズに
            <br />
            お見積もりできます。
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            お写真とおおよそのサイズがあれば、
            <span className="font-bold text-primary">より詳細な金額をすぐにお伝え</span>
            できます。特に
            <span className="font-bold text-primary">
              施工までご依頼される場合は、お写真があるとスムーズ
            </span>
            です。
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 rounded-2xl bg-accent/10 px-5 py-5 md:flex-row md:gap-4 md:px-6">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-card">
            <Camera className="h-5 w-5 text-accent" strokeWidth={2.2} />
          </div>
          <p className="text-center text-sm leading-relaxed text-primary md:text-left">
            スマホでぱっと撮ったお写真と、おおよそのサイズが分かれば
            <span className="font-bold">すぐに概算をご案内</span>
            できます。「正確じゃないと…」と気にせず、お気軽にどうぞ。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PREPARATION_ITEMS.map((item) => (
            <div
              key={item.number}
              className="overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground">
                    {item.number}
                  </span>
                  <BadgeLabel item={item} />
                </div>
                <h3 className="mt-3 text-base font-extrabold text-primary md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-3 flex items-start gap-2 rounded-lg bg-secondary px-3 py-2.5">
                  <Lightbulb
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                    strokeWidth={2.2}
                  />
                  <p className="text-xs leading-relaxed text-primary">
                    <span className="font-bold">ポイント:</span> {item.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-secondary px-6 py-6 text-center">
          <Info className="mx-auto h-6 w-6 text-primary" strokeWidth={2} />
          <p className="mt-2 text-sm leading-relaxed text-primary md:text-[15px]">
            <span className="font-bold">もちろん、お写真がなくてもご相談OK!</span>
            <br className="hidden md:block" />
            必要に応じて<span className="font-bold">現地調査(無料)</span>
            もご対応しています。お写真で判断できるケースも多いので、まずは気軽にお問い合わせください。
          </p>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="#final-cta"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            写真を送って相談する
          </a>
          <a
            href="#simulator"
            className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-bold text-primary ring-1 ring-primary/30 transition-colors hover:bg-muted"
          >
            <Calculator className="h-4 w-4" strokeWidth={2.5} />
            シミュレーターで概算を見る
          </a>
        </div>
      </div>
    </section>
  );
}
