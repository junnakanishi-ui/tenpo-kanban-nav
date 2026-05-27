"use client"

import { Package, Wrench, BadgeCheck, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { SimulatorState, PriceChoice } from "./types"
import type { SimulatorResult } from "@/lib/price-simulator/calc"

type ResultCardProps = {
  state: SimulatorState
  result: SimulatorResult
  onChoiceChange: (choice: PriceChoice) => void
}

function buildFinishLabel(hole: boolean, edgeValue: string): string {
  const parts: string[] = []
  if (hole) parts.push("穴あけ加工")
  if (edgeValue !== "加工なし") parts.push(edgeValue)
  if (parts.length === 0) return "加工なし"
  return parts.join(" + ")
}

export function ResultCard({ state, result, onChoiceChange }: ResultCardProps) {
  const showTildeOnly = state.design.cost > 0 || state.light.cost > 0
  const sizeLabel = `${state.width}×${state.height}mm`
  const qtyLabel = `${state.qty}枚`
  const finishLabel = buildFinishLabel(state.hole, state.edge.value)

  const ctaSubLabel =
    state.choice === "install"
      ? "製作＋施工で見積もり依頼"
      : "製作のみで見積もり依頼"

  return (
    <div className="rounded-xl bg-white p-[18px]">
      <div className="mb-3 border-b border-slate-200 pb-2.5 text-center text-sm font-medium text-[#0F2742]">
        概算お見積り
      </div>

      <SummaryRow label="サイズ" value={sizeLabel} />
      <SummaryRow label="枚数" value={qtyLabel} />
      <SummaryRow label="データ" value={state.design.value} />
      <SummaryRow label="仕上げ" value={finishLabel} />
      <SummaryRow label="照明" value={state.light.value} />

      <PriceBlock
        icon={<Package className="h-4 w-4" />}
        label="製作のみ（自分で取付）"
        amount={result.onlyTotalInTax}
        showTilde={showTildeOnly}
        note="壁面へビス打ちで設置可能。DIYで取付されるお客様も多いです！"
        active={state.choice === "only"}
        onClick={() => onChoiceChange("only")}
      />

      <PriceBlock
        icon={<Wrench className="h-4 w-4" />}
        label="製作＋施工（プロが取付）"
        amount={result.installTotalInTax}
        showTilde
        note={`差額の¥${result.installFee.toLocaleString()}〜が施工費(${result.installWorkerLabel})。設置場所により変動します。`}
        active={state.choice === "install"}
        onClick={() => onChoiceChange("install")}
      />

      <div className="mt-2.5 text-center text-xs text-slate-500">
        （税込）※送料別途
      </div>

      <div className="mt-3.5 rounded-md border border-emerald-200 bg-emerald-50 p-3.5 text-center">
        <BadgeCheck className="mx-auto mb-1 h-5 w-5 text-emerald-700" />
        <div className="text-[13px] leading-relaxed text-emerald-800">
          <div className="text-sm font-medium">比較見積もりも大歓迎です！</div>
          <div>（施工全国ご対応可能です！）</div>
        </div>
      </div>

      <button
        type="button"
        className="mt-3.5 w-full rounded-md bg-[#F59E0B] px-4 py-[18px] text-white transition-colors hover:bg-[#D97706]"
        onClick={() => {
          alert(
            "見積もり依頼ボタンが押されました。本番ではフォーム画面へ遷移します。"
          )
        }}
      >
        <div className="flex items-center justify-center gap-1.5 text-[17px] font-medium leading-tight">
          <span>この内容で見積もり依頼</span>
          <ArrowRight className="h-4 w-4" />
        </div>
        <div className="mt-2 text-[13px] leading-tight opacity-95">
          {ctaSubLabel}
        </div>
      </button>
    </div>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-1 text-[13px]">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-[#0F2742]">{value}</span>
    </div>
  )
}

type PriceBlockProps = {
  icon: React.ReactNode
  label: string
  amount: number
  showTilde: boolean
  note: string
  active: boolean
  onClick: () => void
}

function PriceBlock({
  icon,
  label,
  amount,
  showTilde,
  note,
  active,
  onClick,
}: PriceBlockProps) {
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
        {showTilde && (
          <span className="ml-0.5 text-[19px] text-slate-500">〜</span>
        )}
      </div>
      <div className="mt-2 text-xs leading-relaxed text-slate-500">{note}</div>
    </button>
  )
}
