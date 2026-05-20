"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "看板に詳しくないのですが、相談できますか？",
    a: "もちろんです。むしろ「はじめての方」がメインのお客様です。業種・予算・設置場所をお伺いし、専門用語を使わずおすすめの看板をご提案します。",
  },
  {
    q: "見積もりは無料ですか？",
    a: "はい、お見積もりは無料です。写真でのご相談・現地調査いずれも費用は発生しません。仕様確定までしつこい営業もいたしません。",
  },
  {
    q: "製作だけお願いできますか？",
    a: "可能です。看板本体のみを製作し全国へ配送いたします。取付業者がすでに決まっている法人さま・店舗さまでも問題ありません。",
  },
  {
    q: "施工エリアはどこまで対応していますか？",
    a: "全国47都道府県に対応しております。離島や山間部などは別途お見積もりとなる場合がございます。",
  },
  {
    q: "デザインデータがないのですが、依頼できますか？",
    a: "デザインからご相談いただけます。ロゴ・店舗名・営業時間など、入れたい情報をお知らせいただければ、ラフ案を無料でお作りします。",
  },
  {
    q: "納期はどれくらいですか？",
    a: "看板の種類によりますが、店頭幕やプレート看板で最短1週間、チャンネル文字など電飾系で3〜5週間が目安です。",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-secondary/60">
      <div className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
        <div className="text-center">
          <p className="text-sm font-bold tracking-wider text-accent">FAQ</p>
          <h2 id="faq-heading" className="mt-3 text-balance text-2xl font-black text-primary md:text-4xl">
            よくある質問
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/70">
            お問い合わせの前に、よく聞かれる質問をまとめました。
          </p>
        </div>

        <ul className="mt-10 space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = open === idx
            return (
              <li key={idx} className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/40 md:px-6 md:py-5"
                >
                  <span className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground"
                    >
                      Q
                    </span>
                    <span className="text-base font-bold text-primary md:text-lg">{item.q}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  hidden={!isOpen}
                  className="border-t border-border bg-secondary/40 px-5 py-4 md:px-6 md:py-5"
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground"
                    >
                      A
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/85 md:text-base">{item.a}</p>
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
