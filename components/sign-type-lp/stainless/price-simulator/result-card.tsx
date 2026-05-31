"use client"

import Link from "next/link"
import { useMemo } from "react"
import { ArrowRight, Package, Wrench } from "lucide-react"
import {
  calcStainless,
  STAINLESS_FINISHES,
  STAINLESS_SIM_NOTES,
  type StainlessCalcResult,
} from "@/data/simulators/stainless-letter"
import { cn } from "@/lib/utils"
import type { SimulatorState } from "./types"

type Props = {
  state: SimulatorState
  result: StainlessCalcResult
  onChoiceChange: (choice: SimulatorState["choice"]) => void
}

function buildContactHref(state: SimulatorState, estimatedPrice: number): string {
  const finishInfo = STAINLESS_FINISHES.find((f) => f.id === state.finish)
  const finishName =
    state.finish === "塗装" && state.paintColor.trim()
      ? `${finishInfo?.name ?? state.finish}（${state.paintColor.trim()}）`
      : (finishInfo?.name ?? state.finish)

  const params = new URLSearchParams({
    st: "ステンレス切文字",
    finish: finishName,
    mounting: state.mounting,
    thickness: state.thickness,
    size: state.size,
    count: String(state.charCount),
    spacer: state.spacer ? "必要" : "不要",
    paint: state.paintColor,
    choice: state.choice === "install" ? "製作＋施工" : "製作のみ",
    price: String(estimatedPrice),
  })

  return `/contact?${params.toString()}`
}

export function ResultCard({ state, result, onChoiceChange }: Props) {
  const finishInfo = STAINLESS_FINISHES.find((f) => f.id === state.finish)
  const finishName =
    state.finish === "塗装" && state.paintColor.trim()
      ? `${finishInfo?.name ?? state.finish}（${state.paintColor.trim()}）`
      : (finishInfo?.name ?? state.finish)

  const calcBase = useMemo(
    () => ({
      finish: state.finish,
      mounting: state.mounting,
      thickness: state.thickness,
      size: state.size,
      charCount: state.charCount,
      spacer: state.spacer,
    }),
    [state.finish, state.mounting, state.thickness, state.size, state.charCount, state.spacer]
  )

  const onlyTotal = useMemo(
    () => calcStainless({ ...calcBase, withInstall: false }).total,
    [calcBase]
  )
  const installTotal = useMemo(
    () => calcStainless({ ...calcBase, withInstall: true }).total,
    [calcBase]
  )

  const estimatedPrice = state.choice === "install" ? installTotal : onlyTotal
  const contactHref = buildContactHref(state, estimatedPrice)
  const ctaSubLabel =
    state.choice === "install" ? "製作＋施工で見積もり依頼" : "製作のみで見積もり依頼"
  const valid = result.valid

  return (
    <div className="rounded-xl bg-card p-[18px] ring-1 ring-border">
      <div className="mb-3 border-b border-border pb-2.5 text-center text-sm font-medium text-primary">
        概算お見積り
      </div>

      <SummaryRow label="仕上げ" value={finishName} />
      <SummaryRow label="加工・板厚" value={`${state.mounting} / ${state.thickness}`} />
      <SummaryRow label="サイズ・文字数" value={`${state.size} / ${state.charCount}文字`} />
      <SummaryRow label="スペーサー" value={state.spacer ? "必要" : "不要"} />

      <PriceBlock
        icon={<Package className="h-4 w-4" />}
        label="製作のみ（自分で取付）"
        amount={onlyTotal}
        active={state.choice === "only"}
        showTilde={false}
        note="文字本体価格ベースの概算です。"
        disabled={!valid}
        onClick={() => onChoiceChange("only")}
      />
      <PriceBlock
        icon={<Wrench className="h-4 w-4" />}
        label="製作＋施工（職人1名）"
        amount={installTotal}
        active={state.choice === "install"}
        showTilde
        note="施工費+¥33,000(税込)を加算。設置場所により変動します。"
        disabled={!valid}
        onClick={() => onChoiceChange("install")}
      />

      <ul className="mt-2.5 space-y-1 text-xs text-muted-foreground">
        {STAINLESS_SIM_NOTES.map((note) => (
          <li key={note}>・{note}</li>
        ))}
      </ul>
      <div className="mt-2.5 text-center text-xs text-muted-foreground">
        （税込）※送料・取付金具別途
      </div>

      {valid ? (
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
      ) : (
        <button
          type="button"
          disabled
          className="mt-3.5 block w-full cursor-not-allowed rounded-md bg-[#F59E0B]/50 px-4 py-[18px] text-white"
        >
          <div className="flex items-center justify-center gap-1.5 text-[17px] font-medium leading-tight">
            <span>この内容で見積もり依頼</span>
            <ArrowRight className="h-4 w-4" />
          </div>
          <div className="mt-2 text-center text-[13px] leading-tight opacity-95">{ctaSubLabel}</div>
        </button>
      )}
    </div>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3 py-1 text-[13px]">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium text-primary">{value}</span>
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
  disabled,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  amount: number
  showTilde: boolean
  note: string
  active: boolean
  disabled?: boolean
  onClick: () => void
}) {
  const displayAmount = disabled ? "—" : `¥${amount.toLocaleString()}`

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "mt-3 w-full rounded-md border p-3.5 text-left transition-all",
        active
          ? "border-2 border-primary bg-primary/5 p-[13px]"
          : "border border-border bg-card hover:border-primary/40",
        disabled && "cursor-not-allowed opacity-60"
      )}
    >
      <div
        className={cn(
          "mb-1.5 flex items-center gap-1.5 text-[13px] font-medium",
          active ? "text-primary" : "text-muted-foreground"
        )}
      >
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-[26px] font-medium leading-none text-primary">
        {displayAmount}
        {!disabled && showTilde && (
          <span className="ml-0.5 text-[19px] text-muted-foreground">〜</span>
        )}
      </div>
      <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{note}</div>
    </button>
  )
}
