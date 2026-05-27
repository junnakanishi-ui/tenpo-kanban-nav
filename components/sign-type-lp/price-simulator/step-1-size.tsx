"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { StepCard } from "./step-card"

type Step1Props = {
  width: number
  height: number
  qty: number
  onChange: (v: Partial<{ width: number; height: number; qty: number }>) => void
}

function sanitize(raw: string): string {
  const half = raw.replace(/[０-９]/g, (s) =>
    String.fromCharCode(s.charCodeAt(0) - 0xfee0)
  )
  return half.replace(/[^0-9]/g, "")
}

export function Step1Size({ width, height, qty, onChange }: Step1Props) {
  const [wStr, setWStr] = useState(String(width))
  const [hStr, setHStr] = useState(String(height))
  const [qStr, setQStr] = useState(String(qty))

  useEffect(() => {
    setWStr(String(width))
  }, [width])
  useEffect(() => {
    setHStr(String(height))
  }, [height])
  useEffect(() => {
    setQStr(String(qty))
  }, [qty])

  return (
    <StepCard
      stepNumber={1}
      title="サイズ・枚数"
      subtitle="仕上がりサイズと枚数を入力"
      hintKey="size"
      hintLabel="サイズの測り方"
    >
      <div className="flex items-end gap-3">
        <div className="flex-1">
          <Label className="mb-1.5 block text-[13px] text-slate-500">
            横幅 (W) mm
          </Label>
          <Input
            type="text"
            inputMode="numeric"
            value={wStr}
            className="text-base"
            onChange={(e) => {
              const v = sanitize(e.target.value)
              setWStr(v)
              onChange({ width: v === "" ? 0 : parseInt(v) })
            }}
            onBlur={() => {
              if (wStr === "" || parseInt(wStr) === 0) {
                setWStr("900")
                onChange({ width: 900 })
              }
            }}
          />
        </div>
        <div className="pb-2.5 text-lg text-slate-300">×</div>
        <div className="flex-1">
          <Label className="mb-1.5 block text-[13px] text-slate-500">
            高さ (H) mm
          </Label>
          <Input
            type="text"
            inputMode="numeric"
            value={hStr}
            className="text-base"
            onChange={(e) => {
              const v = sanitize(e.target.value)
              setHStr(v)
              onChange({ height: v === "" ? 0 : parseInt(v) })
            }}
            onBlur={() => {
              if (hStr === "" || parseInt(hStr) === 0) {
                setHStr("600")
                onChange({ height: 600 })
              }
            }}
          />
        </div>
        <div className="w-24">
          <Label className="mb-1.5 block text-[13px] text-slate-500">枚数</Label>
          <Input
            type="text"
            inputMode="numeric"
            value={qStr}
            className="text-base"
            onChange={(e) => {
              const v = sanitize(e.target.value)
              setQStr(v)
              onChange({ qty: v === "" ? 1 : parseInt(v) })
            }}
            onBlur={() => {
              if (qStr === "" || parseInt(qStr) === 0) {
                setQStr("1")
                onChange({ qty: 1 })
              }
            }}
          />
        </div>
      </div>
    </StepCard>
  )
}
