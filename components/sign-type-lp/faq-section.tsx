"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";

type FaqCategory = "price" | "schedule" | "design" | "edit" | "other";

type FaqItem = {
  id: number;
  category: FaqCategory;
  question: string;
  answer: React.ReactNode;
};

const CATEGORY_LABEL: Record<FaqCategory, string> = {
  price: "価格",
  schedule: "納期",
  design: "デザイン",
  edit: "修正",
  other: "その他",
};

const CATEGORY_CLASSES: Record<FaqCategory, string> = {
  price: "bg-blue-100 text-blue-800",
  schedule: "bg-emerald-100 text-emerald-800",
  design: "bg-violet-100 text-violet-800",
  edit: "bg-amber-100 text-amber-800",
  other: "bg-rose-100 text-rose-800",
};

const FAQS: FaqItem[] = [
  {
    id: 1,
    category: "price",
    question: "表示されている料金以外に追加費用はかかりますか?",
    answer: (
      <>
        サイズ・価格早見表に記載の<b className="font-bold text-primary">製作費</b>がベースとなります。施工をご依頼の場合、現場の条件(高所・大型など)に応じて<b className="font-bold text-primary">施工費が別途加算</b>されます。穴あけ加工をご希望の場合は+800円です。すべて<b className="font-bold text-primary">事前にお見積もりでご提示</b>するため、後から追加請求が発生することはありません。
      </>
    ),
  },
  {
    id: 2,
    category: "price",
    question: "支払い方法は何がありますか?",
    answer: (
      <>
        <b className="font-bold text-primary">銀行振込・クレジットカード</b>に対応しております。法人様で請求書払いをご希望の場合もご相談ください。詳細はお見積もり時にご案内いたします。
      </>
    ),
  },
  {
    id: 3,
    category: "schedule",
    question: "注文から完成までどれくらいかかりますか?",
    answer: (
      <>
        <b className="font-bold text-primary">製作のみは最短7営業日、施工含む場合は10営業日</b>が目安です。サイズや個数によって変動するため、お見積もり時に正確な納期をお伝えします。お急ぎの場合もまずはご相談ください。
      </>
    ),
  },
  {
    id: 4,
    category: "schedule",
    question: "急ぎで看板が必要なのですが対応できますか?",
    answer: (
      <>
        サイズや在庫状況、デザインの進行具合によっては<b className="font-bold text-primary">特急対応も可能</b>です。「いつまでに必要」というご希望をお伝えいただければ、できる限り合わせられるよう調整します。お気軽にご相談ください。
      </>
    ),
  },
  {
    id: 5,
    category: "design",
    question: "デザインデータがなくても依頼できますか?",
    answer: (
      <>
        もちろん大丈夫です。<b className="font-bold text-primary">弊社のデザイナーが一から制作</b>しますので、店舗名・ロゴのイメージ・希望の雰囲気などをお伝えください。手書きラフやスマホで撮ったメモ画像でもOKです。すでにデザインデータをお持ちの場合は<b className="font-bold text-primary">入稿いただくこと</b>もできます。
      </>
    ),
  },
  {
    id: 6,
    category: "design",
    question: "入稿データの形式は何が良いですか?",
    answer: (
      <>
        Illustrator(.ai)・PDF・SVGなど<b className="font-bold text-primary">ベクターデータ</b>を推奨しています。写真などラスター画像を含む場合は<b className="font-bold text-primary">解像度300dpi以上</b>でお願いします。データ形式に不安があれば、メールやLINEで事前に確認できますのでお気軽にお送りください。
      </>
    ),
  },
  {
    id: 7,
    category: "edit",
    question: "デザインの修正は何回までできますか?",
    answer: (
      <>
        <b className="font-bold text-primary">2〜3回程度までは無料</b>で対応いたします。ただし大幅なデザイン変更(コンセプトを変える・配置を一から組み直すなど)が必要な場合は、<b className="font-bold text-primary">追加費用</b>をいただく場合があります。お見積もり時にしっかりご説明しますのでご安心ください。
      </>
    ),
  },
  {
    id: 8,
    category: "edit",
    question: "注文後にキャンセルはできますか?",
    answer: (
      <>
        製作開始前であればキャンセル可能です。<b className="font-bold text-primary">デザイン制作着手後</b>はデザイン費用が発生する場合があります。<b className="font-bold text-primary">製作開始後はキャンセル不可</b>となりますのでご了承ください。詳細はお見積もり時にご案内します。
      </>
    ),
  },
  {
    id: 9,
    category: "other",
    question: "複数の看板を同時に依頼できますか?",
    answer: (
      <>
        もちろん可能です。<b className="font-bold text-primary">同一店舗内で複数枚</b>や、<b className="font-bold text-primary">多店舗展開のチェーン店様</b>の対応実績も豊富です。一括でのご依頼の場合、納期や費用について別途調整できることもありますので、まずは枚数とご希望をお知らせください。
      </>
    ),
  },
  {
    id: 10,
    category: "other",
    question: "製品の不具合があった場合の対応は?",
    answer: (
      <>
        弊社の製造工程に起因する不具合(印刷不良・加工ミスなど)が確認できた場合、<b className="font-bold text-primary">無償で再製作・対応</b>いたします。施工に起因する不具合についても、弊社施工分は対応いたしますのでまずはご連絡ください。
      </>
    ),
  },
];

const FAQ_ANSWERS_PLAIN: Record<number, string> = {
  1: "サイズ・価格早見表に記載の製作費がベースとなります。施工をご依頼の場合、現場の条件(高所・大型など)に応じて施工費が別途加算されます。穴あけ加工をご希望の場合は+800円です。すべて事前にお見積もりでご提示するため、後から追加請求が発生することはありません。",
  2: "銀行振込・クレジットカードに対応しております。法人様で請求書払いをご希望の場合もご相談ください。詳細はお見積もり時にご案内いたします。",
  3: "製作のみは最短7営業日、施工含む場合は10営業日が目安です。サイズや個数によって変動するため、お見積もり時に正確な納期をお伝えします。お急ぎの場合もまずはご相談ください。",
  4: "サイズや在庫状況、デザインの進行具合によっては特急対応も可能です。「いつまでに必要」というご希望をお伝えいただければ、できる限り合わせられるよう調整します。お気軽にご相談ください。",
  5: "もちろん大丈夫です。弊社のデザイナーが一から制作しますので、店舗名・ロゴのイメージ・希望の雰囲気などをお伝えください。手書きラフやスマホで撮ったメモ画像でもOKです。すでにデザインデータをお持ちの場合は入稿いただくこともできます。",
  6: "Illustrator(.ai)・PDF・SVGなどベクターデータを推奨しています。写真などラスター画像を含む場合は解像度300dpi以上でお願いします。データ形式に不安があれば、メールやLINEで事前に確認できますのでお気軽にお送りください。",
  7: "2〜3回程度までは無料で対応いたします。ただし大幅なデザイン変更(コンセプトを変える・配置を一から組み直すなど)が必要な場合は、追加費用をいただく場合があります。お見積もり時にしっかりご説明しますのでご安心ください。",
  8: "製作開始前であればキャンセル可能です。デザイン制作着手後はデザイン費用が発生する場合があります。製作開始後はキャンセル不可となりますのでご了承ください。詳細はお見積もり時にご案内します。",
  9: "もちろん可能です。同一店舗内で複数枚や、多店舗展開のチェーン店様の対応実績も豊富です。一括でのご依頼の場合、納期や費用について別途調整できることもありますので、まずは枚数とご希望をお知らせください。",
  10: "弊社の製造工程に起因する不具合(印刷不良・加工ミスなど)が確認できた場合、無償で再製作・対応いたします。施工に起因する不具合についても、弊社施工分は対応いたしますのでまずはご連絡ください。",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: FAQ_ANSWERS_PLAIN[faq.id],
    },
  })),
};

function FaqAccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all ${
        isOpen ? "shadow-lg" : "hover:shadow-md"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-3 px-5 py-4 text-left md:gap-4 md:px-6 md:py-5"
      >
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-black text-primary">
          Q
        </span>
        <span className="flex-1 text-sm font-bold leading-snug text-primary md:text-base">
          <span
            className={`mr-2 inline-block rounded px-2 py-0.5 align-middle text-[10px] font-bold ${
              CATEGORY_CLASSES[faq.category]
            }`}
          >
            {CATEGORY_LABEL[faq.category]}
          </span>
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="px-5 pb-5 pl-[60px] text-sm leading-relaxed text-muted-foreground md:px-6 md:pb-6 md:pl-[68px] md:text-[15px]">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set([1]));

  const toggle = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="bg-muted/50">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />

        <div className="text-center">
          <p className="text-sm font-bold tracking-widest text-accent">FAQ</p>
          <h2 className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            よくあるご質問
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            プレート看板に関して、お客様からよくいただくご質問をまとめました。
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
          {FAQS.map((faq) => (
            <FaqAccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openIds.has(faq.id)}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-primary px-6 py-8 text-center text-primary-foreground md:px-10 md:py-10">
          <h3 className="text-lg font-extrabold md:text-xl">
            解決しない疑問はありませんか?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
            お気軽にお問い合わせください。専門スタッフが個別にご回答します。
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/30 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              問い合わせる
            </a>
            <a
              href="tel:0522657603"
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3.5 text-sm font-bold text-primary-foreground ring-1.5 ring-primary-foreground/50 transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              電話で相談する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
