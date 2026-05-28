'use client'

import { forwardRef, type InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  required?: boolean
  error?: string
  hint?: string
}

export const TextField = forwardRef<HTMLInputElement, Props>(function TextField(
  { label, required, error, hint, className, id, ...rest },
  ref
) {
  const inputId = id ?? rest.name

  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-bold text-primary">
        {label}
        {required && (
          <span className="ml-1.5 rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-bold text-accent">
            必須
          </span>
        )}
        {!required && (
          <span className="ml-1.5 text-[10px] font-bold text-muted-foreground">
            任意
          </span>
        )}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={`w-full rounded-lg bg-card px-3.5 py-2.5 text-sm text-primary ring-1 ring-border placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent ${
          error ? 'ring-red-400' : ''
        } ${className ?? ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        {...rest}
      />
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="text-xs font-bold text-red-500">
          {error}
        </p>
      )}
    </div>
  )
})
