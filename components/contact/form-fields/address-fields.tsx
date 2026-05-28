'use client'

import { useState } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import { TextField } from './text-field'
import { fetchAddressByZipcode } from '@/lib/contact/zipcode'
import type { ContactFormValues } from '@/types/contact'

type Props = {
  form: UseFormReturn<ContactFormValues>
}

export function AddressFields({ form }: Props) {
  const [zipLoading, setZipLoading] = useState(false)
  const [zipError, setZipError] = useState<string | null>(null)

  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = form

  /**
   * 郵便番号入力欄の値が変わるたびに、7桁揃ったら自動で住所検索する
   */
  const handlePostalCodeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // 全角→半角、ハイフン除去、空白除去
    const normalized = value
      .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
      .replace(/[-\s]/g, '')
      .trim()

    // 7桁揃ったら検索開始
    if (normalized.length !== 7 || !/^\d{7}$/.test(normalized)) {
      setZipError(null)
      return
    }

    setZipError(null)
    setZipLoading(true)

    try {
      const result = await fetchAddressByZipcode(normalized)

      if (result) {
        setValue('prefecture', result.prefecture, { shouldValidate: true })
        setValue('city', result.city, { shouldValidate: true })
        setZipError(null)
        // 番地入力欄にフォーカスを移す(UX向上)
        setTimeout(() => {
          const addressLineInput = document.querySelector<HTMLInputElement>(
            'input[name="addressLine"]'
          )
          addressLineInput?.focus()
        }, 100)
      } else {
        setZipError('該当する住所が見つかりませんでした。直接入力してください。')
      }
    } catch (err) {
      console.error('[zipcode] fetch error:', err)
      setZipError('住所検索に失敗しました。直接入力してください。')
    } finally {
      setZipLoading(false)
    }
  }

  /**
   * 「住所検索」ボタンを押した時の処理(フォールバック用)
   */
  const handleManualSearch = async () => {
    const value = getValues('postalCode')
    if (!value) return

    const fakeEvent = {
      target: { value },
    } as React.ChangeEvent<HTMLInputElement>

    await handlePostalCodeChange(fakeEvent)
  }

  // register経由でonChangeを取得しつつ、独自のhandlerと合成する
  const postalCodeRegister = register('postalCode')

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[200px_1fr]">
        <div className="space-y-1.5">
          <label htmlFor="postalCode" className="block text-sm font-bold text-primary">
            郵便番号
            <span className="ml-1.5 rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-bold text-accent">
              必須
            </span>
          </label>
          <div className="flex gap-2">
            <input
              id="postalCode"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={8}
              placeholder="460-0008"
              aria-invalid={!!errors.postalCode}
              className={`min-w-0 flex-1 rounded-lg bg-card px-3.5 py-2.5 text-sm text-primary ring-1 ring-border placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.postalCode ? 'ring-red-400' : ''
              }`}
              {...postalCodeRegister}
              onChange={(e) => {
                postalCodeRegister.onChange(e)
                handlePostalCodeChange(e)
              }}
            />
            <button
              type="button"
              onClick={handleManualSearch}
              disabled={zipLoading}
              className="shrink-0 rounded-lg bg-primary/10 px-3 py-2.5 text-xs font-bold text-primary hover:bg-primary/15 disabled:opacity-50"
              title="郵便番号から住所を検索"
            >
              {zipLoading ? '検索中' : '住所検索'}
            </button>
          </div>
          {!errors.postalCode && (
            <p className="text-xs text-muted-foreground">
              {zipLoading ? '住所を検索中...' : '7桁入力で自動入力されます'}
            </p>
          )}
          {errors.postalCode && (
            <p className="text-xs font-bold text-red-500">{errors.postalCode.message}</p>
          )}
        </div>

        <TextField
          label="都道府県"
          required
          placeholder="愛知県"
          autoComplete="address-level1"
          error={errors.prefecture?.message}
          {...register('prefecture')}
        />
      </div>

      <TextField
        label="市区町村"
        required
        placeholder="名古屋市中区栄"
        autoComplete="address-level2"
        error={errors.city?.message}
        {...register('city')}
      />

      <TextField
        label="番地・建物名"
        required
        placeholder="3-5-12 ○○ビル2F"
        autoComplete="address-line1"
        error={errors.addressLine?.message}
        {...register('addressLine')}
      />

      {zipError && (
        <p className="text-xs font-bold text-amber-600">{zipError}</p>
      )}
    </div>
  )
}
