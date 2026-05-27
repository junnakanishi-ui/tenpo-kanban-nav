"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, Info } from "lucide-react";

type FlowStep = {
  number: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tag?: {
    label: string;
    type: "highlight" | "info";
  };
  isFinal?: boolean;
};

const FULL_FLOW: FlowStep[] = [
  {
    number: 1,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-01-inquiry.jpg",
    imageAlt: "スマホでお問い合わせをしているシーン",
    title: "お問い合わせ",
    description: "電話・LINE・フォームからお気軽にどうぞ。お写真があれば添付ください。",
  },
  {
    number: 2,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-02-estimate.jpg",
    imageAlt: "見積書を作成しているシーン",
    title: "お見積もり",
    description: "概算見積もりをご提示。必要に応じて現地調査の上、本見積もりへ。",
    tag: { label: "現地調査(無料)あり", type: "info" },
  },
  {
    number: 3,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-03-payment.jpg",
    imageAlt: "スマホで決済確認をしているシーン",
    title: "ご入金",
    description: "金額にご納得いただけたら、お支払いをお願いします。",
  },
  {
    number: 4,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-04-design.jpg",
    imageAlt: "デザイナーがデザイン制作をしているシーン",
    title: "デザイン",
    description: "弊社デザイナーが制作。完成データを既にお持ちの場合は入稿もOK。",
    tag: { label: "入稿もOK", type: "info" },
  },
  {
    number: 5,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-05-production.jpg",
    imageAlt: "看板工場で製作しているシーン",
    title: "製作",
    description: "自社工場で看板を製作。品質管理も万全。",
  },
  {
    number: 6,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-06-installation.jpg",
    imageAlt: "施工完了のシーン",
    title: "施工",
    description: "ご希望日に合わせて施工。休日や夜間の作業もご相談OK。",
    tag: { label: "休日・夜間OK", type: "highlight" },
    isFinal: true,
  },
];

const PRODUCT_ONLY_FLOW: FlowStep[] = [
  {
    number: 1,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-01-inquiry.jpg",
    imageAlt: "スマホでお問い合わせをしているシーン",
    title: "お問い合わせ",
    description: "電話・LINE・フォームからお気軽にどうぞ。お写真があれば添付ください。",
  },
  {
    number: 2,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-02-estimate.jpg",
    imageAlt: "見積書を作成しているシーン",
    title: "お見積もり",
    description: "サイズ・仕様に応じて見積もりをご提示します。",
  },
  {
    number: 3,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-03-payment.jpg",
    imageAlt: "スマホで決済確認をしているシーン",
    title: "ご入金",
    description: "金額にご納得いただけたら、お支払いをお願いします。",
  },
  {
    number: 4,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-04-design.jpg",
    imageAlt: "デザイナーがデザイン制作をしているシーン",
    title: "デザイン",
    description: "弊社デザイナーが制作。完成データを既にお持ちの場合は入稿もOK。",
    tag: { label: "入稿もOK", type: "info" },
  },
  {
    number: 5,
    imageSrc: "/images/sign-types/plate-sign/flow/flow-product-05-delivery.jpg",
    imageAlt: "看板を梱包・配送しているシーン",
    title: "製作・納品",
    description: "自社工場で製作し、ご指定先へ配送。届いたらDIYで取付OK。",
    isFinal: true,
  },
];

type TabKey = "full" | "product";

function FlowStepTag({ tag }: { tag: NonNullable<FlowStep["tag"]> }) {
  if (tag.type === "highlight") {
    return (
      <span className="inline-block rounded bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
        {tag.label}
      </span>
    );
  }
  return (
    <span className="inline-block rounded bg-secondary px-2 py-0.5 text-[10px] font-bold text-primary">
      {tag.label}
    </span>
  );
}

function FlowStepCard({ step, isLast }: { step: FlowStep; isLast: boolean }) {
  return (
    <div className="relative">
      <div className="h-full overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all hover:-translate-y-0.5 hover:shadow-xl">
        <div className="relative aspect-[4/3] bg-muted">
          <Image
            src={step.imageSrc}
            alt={step.imageAlt}
            fill
            sizes="(max-width: 768px) 50vw, 16vw"
            className="object-cover"
          />
          <span
            className={`absolute left-2 top-2 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-black shadow-md ${
              step.isFinal
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {step.number}
          </span>
        </div>

        <div className="p-3 md:p-4">
          <h3 className="text-sm font-extrabold leading-snug text-primary md:text-[15px]">
            {step.title}
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {step.description}
          </p>
          {step.tag && (
            <div className="mt-2">
              <FlowStepTag tag={step.tag} />
            </div>
          )}
        </div>
      </div>

      {!isLast && (
        <div className="absolute right-[-10px] top-1/2 z-20 hidden -translate-y-1/2 md:flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
          <ChevronRight className="h-3 w-3" strokeWidth={3} />
        </div>
      )}
    </div>
  );
}

export default function FlowSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("full");

  const currentFlow = activeTab === "full" ? FULL_FLOW : PRODUCT_ONLY_FLOW;
  const gridCols = activeTab === "full" ? "md:grid-cols-6" : "md:grid-cols-5";

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-content px-4 py-14 md:px-6 md:py-24">
        <div className="text-center">
          <p className="text-sm font-bold tracking-widest text-accent">FLOW</p>
          <h2 className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            お問い合わせから納品・施工までの流れ
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            「製作+施工」と「製作のみ」、それぞれの流れをご紹介します。タブで切り替えてご覧ください。
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div
            role="tablist"
            aria-label="フロー切替"
            className="inline-flex gap-1 rounded-full border border-border bg-muted p-1.5"
          >
            <button
              role="tab"
              aria-selected={activeTab === "full"}
              onClick={() => setActiveTab("full")}
              className={
                activeTab === "full"
                  ? "rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all"
                  : "rounded-full bg-transparent px-6 py-2.5 text-sm font-bold text-slate-500 transition-all hover:text-primary"
              }
            >
              製作+施工
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "product"}
              onClick={() => setActiveTab("product")}
              className={
                activeTab === "product"
                  ? "rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all"
                  : "rounded-full bg-transparent px-6 py-2.5 text-sm font-bold text-slate-500 transition-all hover:text-primary"
              }
            >
              製作のみ
            </button>
          </div>
        </div>

        <div className={`mt-10 grid grid-cols-2 gap-3 ${gridCols}`}>
          {currentFlow.map((step, i) => (
            <FlowStepCard
              key={`${activeTab}-${step.number}`}
              step={step}
              isLast={i === currentFlow.length - 1}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl bg-secondary px-5 py-5 md:flex-row md:gap-4 md:px-6">
          <Info className="h-6 w-6 flex-shrink-0 text-primary" strokeWidth={2} />
          <p className="text-sm leading-relaxed text-primary">
            <span className="font-bold">納期について:</span>{" "}
            製作のみは最短7営業日、施工含む場合は10営業日が目安です。お急ぎの場合もまずはご相談ください。
            <span className="font-bold">サイズ・個数によって変動</span>
            するため、詳細はお問い合わせ時にご案内します。
          </p>
        </div>
      </div>
    </section>
  );
}
