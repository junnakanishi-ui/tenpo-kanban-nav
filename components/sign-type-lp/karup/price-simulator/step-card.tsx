type StepCardProps = {
  stepNumber: number
  title: string
  subtitle?: string
  tooltip?: React.ReactNode
  children: React.ReactNode
}

export function StepCard({ stepNumber, title, subtitle, tooltip, children }: StepCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F2742] text-base font-medium text-white">
          {stepNumber}
        </span>
        <div className="flex flex-1 items-center gap-2">
          <div>
            <div className="text-[17px] font-medium text-[#0F2742]">{title}</div>
            {subtitle && <div className="mt-0.5 text-[13px] text-slate-500">{subtitle}</div>}
          </div>
          {tooltip}
        </div>
      </div>
      {children}
    </div>
  )
}
