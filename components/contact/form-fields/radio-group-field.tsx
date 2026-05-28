'use client'

import { forwardRef } from 'react'

type Option = {
  value: string
  label: string
  description?: string
}

type Props = {
  label: string
  name: string
  options: Option[]
  value?: string
  onChange?: (value: string) => void
  required?: boolean
  error?: string
}

export const RadioGroupField = forwardRef<HTMLDivElement, Props>(function RadioGroupField(
  { label, name, options, value, onChange, required, error },
  ref
) {
  return (
    <div ref={ref} className="space-y-2">
      <p className="block text-sm font-bold text-primary">
        {label}
        {required && (
          <span className="ml-1.5 rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-bold text-accent">
            必須
          </span>
        )}
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {options.map((opt) => {
          const checked = value === opt.value
          return (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-3 text-sm font-bold transition ${
                checked
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border bg-card text-primary hover:border-accent/50'
              }`}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={checked}
                onChange={() => onChange?.(opt.value)}
                className="h-4 w-4 accent-accent"
              />
              <span>{opt.label}</span>
            </label>
          )
        })}
      </div>
      {error && <p className="text-xs font-bold text-red-500">{error}</p>}
    </div>
  )
})
