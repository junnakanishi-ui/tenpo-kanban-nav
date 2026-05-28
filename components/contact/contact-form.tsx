'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from './form-fields/text-field'
import { TextareaField } from './form-fields/textarea-field'
import { RadioGroupField } from './form-fields/radio-group-field'
import { AddressFields } from './form-fields/address-fields'
import { contactFormSchema } from '@/lib/contact/schema'
import { INQUIRY_TYPE_LABELS } from '@/types/contact'
import type { ContactFormValues, ContactApiResponse } from '@/types/contact'

type SubmitState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success' }
  | { status: 'error'; message: string }

type Props = {
  defaultValues?: Partial<ContactFormValues>
}

const INQUIRY_OPTIONS = (Object.keys(INQUIRY_TYPE_LABELS) as Array<keyof typeof INQUIRY_TYPE_LABELS>).map(
  (key) => ({
    value: key,
    label: INQUIRY_TYPE_LABELS[key],
  })
)

export function ContactForm({ defaultValues }: Props) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      inquiryType: 'production_only',
      postalCode: '',
      prefecture: '',
      city: '',
      addressLine: '',
      message: '',
      gigafileUrl: '',
      ...defaultValues,
    },
  })

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = form

  const [submitState, setSubmitState] = useState<SubmitState>({ status: 'idle' })

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState({ status: 'submitting' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const data = (await res.json()) as ContactApiResponse

      if (data.ok) {
        setSubmitState({ status: 'success' })
        form.reset()
        // 完了表示までスクロール
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else {
        setSubmitState({ status: 'error', message: data.error })
      }
    } catch {
      setSubmitState({
        status: 'error',
        message: '通信エラーが発生しました。時間をおいて再度お試しください。',
      })
    }
  }

  if (submitState.status === 'success') {
    return (
      <div className="rounded-2xl bg-card p-8 text-center ring-1 ring-border md:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
          <svg
            className="h-8 w-8 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-black text-primary">送信が完了しました</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          お問い合わせありがとうございます。
          <br />
          内容を確認の上、担当者より2営業日以内にご連絡いたします。
          <br />
          自動返信メールは送信されませんので、ご了承ください。
        </p>
        <button
          type="button"
          onClick={() => setSubmitState({ status: 'idle' })}
          className="mt-8 rounded-full bg-card px-6 py-3 text-sm font-bold text-primary ring-1 ring-primary/30 hover:bg-muted"
        >
          別の問い合わせを送る
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* シミュレーター結果カード */}
      {defaultValues?.simulatorData && (
        <div className="rounded-2xl bg-secondary p-5 ring-1 ring-primary/15 md:p-7">
          <p className="text-sm font-bold tracking-widest text-accent">
            SIMULATOR RESULT
          </p>
          <h3 className="mt-2 text-lg font-black text-primary">
            シミュレーターでお選びいただいた内容
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            この内容でお見積もりのご依頼を承ります。修正がある場合は下記フォームの内容欄にご記入ください。
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {defaultValues.simulatorData.signType && (
              <SimRow label="看板タイプ" value={defaultValues.simulatorData.signType} />
            )}
            {defaultValues.simulatorData.width &&
              defaultValues.simulatorData.height && (
                <SimRow
                  label="サイズ"
                  value={`${defaultValues.simulatorData.width}×${defaultValues.simulatorData.height}mm`}
                />
              )}
            {defaultValues.simulatorData.qty && (
              <SimRow label="枚数" value={`${defaultValues.simulatorData.qty}枚`} />
            )}
            {defaultValues.simulatorData.design && (
              <SimRow label="データ" value={defaultValues.simulatorData.design} />
            )}
            {defaultValues.simulatorData.finish && (
              <SimRow label="仕上げ" value={defaultValues.simulatorData.finish} />
            )}
            {defaultValues.simulatorData.light && (
              <SimRow label="照明" value={defaultValues.simulatorData.light} />
            )}
            {defaultValues.simulatorData.choice && (
              <SimRow label="ご希望" value={defaultValues.simulatorData.choice} />
            )}
            {defaultValues.simulatorData.estimatedPrice && (
              <SimRow
                label="概算金額"
                value={`¥${defaultValues.simulatorData.estimatedPrice.toLocaleString()}（税込）`}
              />
            )}
          </dl>
        </div>
      )}

      {/* 基本情報 */}
      <div className="rounded-2xl bg-card p-5 ring-1 ring-border md:p-7">
        <h3 className="mb-5 text-lg font-black text-primary">お客様情報</h3>
        <div className="space-y-4">
          <TextField
            label="お名前"
            required
            placeholder="山田 太郎"
            autoComplete="name"
            error={errors.name?.message}
            {...register('name')}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TextField
              label="メールアドレス"
              required
              type="email"
              placeholder="example@example.com"
              autoComplete="email"
              error={errors.email?.message}
              {...register('email')}
            />
            <TextField
              label="電話番号"
              required
              type="tel"
              placeholder="052-265-7603"
              autoComplete="tel"
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>
          <TextField
            label="法人名 / 店舗名"
            placeholder="株式会社○○ / ○○店"
            autoComplete="organization"
            error={errors.companyName?.message}
            {...register('companyName')}
          />
        </div>
      </div>

      {/* 住所 */}
      <div className="rounded-2xl bg-card p-5 ring-1 ring-border md:p-7">
        <h3 className="mb-5 text-lg font-black text-primary">ご住所</h3>
        <AddressFields form={form} />
      </div>

      {/* 問い合わせ内容 */}
      <div className="rounded-2xl bg-card p-5 ring-1 ring-border md:p-7">
        <h3 className="mb-5 text-lg font-black text-primary">お問い合わせ内容</h3>
        <div className="space-y-5">
          <RadioGroupField
            label="お問い合わせの種別"
            name="inquiryType"
            options={INQUIRY_OPTIONS}
            value={watch('inquiryType')}
            onChange={(v) =>
              setValue('inquiryType', v as ContactFormValues['inquiryType'], {
                shouldValidate: true,
              })
            }
            required
            error={errors.inquiryType?.message}
          />
          <TextareaField
            label="お問い合わせ内容"
            required
            rows={8}
            placeholder="看板のサイズ、ご希望の納期、設置場所などをお書きください。"
            error={errors.message?.message}
            {...register('message')}
          />
          <TextField
            label="ギガファイル便URL"
            type="url"
            placeholder="https://xx.gigafile.nu/xxxxx-xxxxxxxx"
            error={errors.gigafileUrl?.message}
            hint={
              '入稿データや参考画像がある場合は、ギガファイル便(https://gigafile.nu/)にアップロードしてURLを貼り付けてください。'
            }
            {...register('gigafileUrl')}
          />
        </div>
      </div>

      {/* 送信エラー */}
      {submitState.status === 'error' && (
        <div className="rounded-lg bg-red-50 p-4 ring-1 ring-red-200">
          <p className="text-sm font-bold text-red-600">{submitState.message}</p>
        </div>
      )}

      {/* 送信ボタン */}
      <div className="flex flex-col items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={submitState.status === 'submitting'}
          className="w-full max-w-md rounded-full bg-accent px-7 py-4 text-base font-black text-accent-foreground shadow-md shadow-accent/30 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 md:text-lg"
        >
          {submitState.status === 'submitting' ? '送信中...' : 'この内容で送信する'}
        </button>
        <p className="text-xs text-muted-foreground">
          ※ 送信後、2営業日以内に担当者よりご連絡いたします
        </p>
      </div>
    </form>
  )
}

function SimRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-primary/10 py-1.5 text-sm">
      <dt className="shrink-0 text-muted-foreground">{label}</dt>
      <dd className="text-right font-bold text-primary">{value}</dd>
    </div>
  )
}
