"use client"

import { useState } from "react"
import { HelpCircle } from "lucide-react"

type TooltipProps = {
  label: string
}

export function Tooltip({ label }: TooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        aria-label="補足説明"
        className="inline-flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-primary"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
      >
        <HelpCircle className="h-4 w-4" />
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute left-1/2 top-7 z-20 w-64 -translate-x-1/2 rounded-md bg-primary px-3 py-2 text-xs leading-relaxed text-primary-foreground shadow-lg"
        >
          {label}
        </span>
      )}
    </span>
  )
}
