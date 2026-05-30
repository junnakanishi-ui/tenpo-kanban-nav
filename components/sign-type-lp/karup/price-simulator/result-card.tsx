"use client"

import Link from "next/link"
import { ArrowRight, Package, Wrench } from "lucide-react"
import { DESIGN_FEE } from "@/data/pricing-rules"
import {
  KARUP_COLORS,
  KARUP_FINISHES,
  KARUP_SIM_NOTES,
  type KarupCalcResult,
} from "@/data/simulators/karup-letter"
import { encodeKarupParams } from "@/lib/simulator-params"
import { cn } from "@/lib/utils"
import type { SimulatorState } from "./types"

type Props = {
  state: SimulatorState
  result: KarupCalcResult
  onChoiceChange: (choice: SimulatorState["choice"]) => void
}

export function ResultCard({ state, result, onChoiceChange }: Props) {
  const colorName = KARUP_COLORS.find((c) => c.id === state.color)?.name ?? ""
  const finishName = KARUP_FINISHES.find((f) => f.id === state.finish)?.name ?? ""
  const ctaSubLabel =
    state.choice === "install" ? "製作＋施工で見積もり依頼" : "製作のみで見積もり依頼"
  const estimatedPrice =
    state.choice === "install" ? result.installTotalInTax : result.onlyTotalInTax
  const contactHref = `/contact?${encodeKarupParams({
    signType: "カルプ文字",
    material: colorName,
    charHeight: state.charHeight,
    charCount: state.charCount,
    thickness: state.thickness,
    finish: finishName,
    design: state.design.value,
    choice: state.choice === "install" ? "製作＋施工" : "製作のみ",
    estimatedPrice,
  })}`

  return (
    <div className="rounded-xl bg-white p-[18px]">
      <div className="mb-3 border-b border-slate-200 pb-2.5 text-center text-sm font-medium text-[#0F2742]">
        概算お見積り
      </div>

      <SummaryRow label="色" value={colorName} />
      <SummaryRow
        label="文字高・厚み"
        value={`${state.charHeight}mm / ${state.thickness}`}
      />
      <SummaryRow
        label="仕上げ・文字数"
        value={`${finishName} / ${state.charCount}文字`}
      />
      <SummaryRow
        label="データ"
        value={state.design.value}
        suffix={state.design.cost > 0 ? `(+¥${DESIGN_FEE.toLocaleString()})` : undefined}
      />

      <PriceBlock
        icon={<Package className="h-4 w-4" />}
        label="製作のみ（自分で取付）"
        amount={result.onlyTotalInTax}
        active={state.choice === "only"}
        showTilde={false}
        note="本体価格ベースの概算です。"
        onClick={() => onChoiceChange("only")}
      />
      <PriceBlock
        icon={<Wrench className="h-4 w-4" />}
        label="製作＋施工（職人1名）"
        amount={result.installTotalInTax}
        active={state.choice === "install"}
        showTilde
        note="施工費+¥30,000を加算。設置場所により変動します。"
        onClick={() => onChoiceChange("install")}
      />

      <ul className="mt-2.5 space-y-1 text-xs text-slate-500">
        {KARUP_SIM_NOTES.map((note) => (
          <li key={note}>・{note}</li>
        ))}
      </ul>
      <div className="mt-2.5 text-center text-xs text-slate-500">（税込）※送料・取付金具別途</div>

      <Link
        href={contactHref}
        className="mt-3.5 block w-full rounded-md bg-[#F59E0B] px-4 py-[18px] text-white transition-colors hover:bg-[#D97706]"
      >
        <div className="flex items-center justify-center gap-1.5 text-[17px] font-medium leading-tight">
          <span>この内容で見積もり依頼</span>
          <ArrowRight className="h-4 w-4" />
        </div>
        <div className="mt-2 text-center text-[13px] leading-tight opacity-95">{ctaSubLabel}</div>
      </Link>
    </div>
  )
}

function SummaryRow({
  label,
  value,
  suffix,
}: {
  label: string
  value: string
  suffix?: string
}) {
  return (
    <div className="flex justify-between gap-3 py-1 text-[13px]">
      <span className="text-slate-500">{label}</span>
      <span className="text-right font-medium text-[#0F2742]">
        {value}
        {suffix && <span className="ml-1 text-xs font-normal text-slate-500">{suffix}</span>}
      </span>
    </div>
  )
}

function PriceBlock({
  icon,
  label,
  amount,
  showTilde,
  note,
  active,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  amount: number
  showTilde: boolean
  note: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "mt-3 w-full rounded-md border p-3.5 text-left transition-all",
        active
          ? "border-2 border-[#0F2742] bg-[#EAF4FF] p-[13px]"
          : "border border-slate-200 bg-white hover:border-slate-300"
      )}
    >
      <div
        className={cn(
          "mb-1.5 flex items-center gap-1.5 text-[13px] font-medium",
          active ? "text-[#0F2742]" : "text-slate-600"
        )}
      >
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-[26px] font-medium leading-none text-[#0F2742]">
        ¥{amount.toLocaleString()}
        {showTilde && <span className="ml-0.5 text-[19px] text-slate-500">〜</span>}
      </div>
      <div className="mt-2 text-xs leading-relaxed text-slate-500">{note}</div>
    </button>
  )
}
