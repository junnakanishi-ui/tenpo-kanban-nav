import { ClipboardList, Calculator, Camera } from "lucide-react"

export function MobileStickyCta() {
  const items = [
    { icon: ClipboardList, label: "診断", href: "#start-here" },
    { icon: Calculator, label: "価格確認", href: "#price-ranges" },
    { icon: Camera, label: "写真相談", href: "#photo-guide" },
  ]

  return (
    <div
      role="navigation"
      aria-label="クイックアクション"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-3 gap-2">
        {items.map((item, idx) => {
          const Icon = item.icon
          const isPrimary = idx === 0
          return (
            <li key={item.label}>
              <a
                href={item.href}
                className={`flex h-14 flex-col items-center justify-center gap-0.5 rounded-2xl text-xs font-bold ${
                  isPrimary
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
