import { cn } from "@/lib/utils"

type StepCardProps = {
  title: string
  hint?: string
  children: React.ReactNode
  className?: string
}

export function StepCard({ title, hint, children, className }: StepCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card p-5 ring-1 ring-border",
        className
      )}
    >
      <div className="mb-4">
        <div className="text-[17px] font-medium text-primary">{title}</div>
        {hint && <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{hint}</p>}
      </div>
      {children}
    </div>
  )
}
