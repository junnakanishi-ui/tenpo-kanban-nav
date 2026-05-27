"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"
import { HINT_CONTENTS, type HintKey } from "@/data/simulators/plate-sign"

type HintModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  hintKey: HintKey
}

export function HintModal({ open, onOpenChange, hintKey }: HintModalProps) {
  const content = HINT_CONTENTS[hintKey]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[#0F2742]">{content.title}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
          <Image
            src={content.imagePath}
            alt={content.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 448px"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = "none"
            }}
          />
        </div>
        <DialogDescription className="text-sm leading-relaxed text-slate-700">
          {content.description}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
