import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'お名前を入力してください')
    .max(100, 'お名前は100文字以内で入力してください'),

  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email('正しいメールアドレスを入力してください'),

  phone: z
    .string()
    .min(1, '電話番号を入力してください')
    .regex(/^[\d\-+()\s]+$/, '電話番号の形式が正しくありません'),

  companyName: z.string().max(100).optional().or(z.literal('')),

  inquiryType: z.enum(['production_only', 'production_with_installation', 'other'], {
    message: '問い合わせ種別を選択してください',
  }),

  postalCode: z
    .string()
    .min(1, '郵便番号を入力してください')
    .regex(/^\d{3}-?\d{4}$/, '郵便番号は7桁の数字で入力してください(例: 460-0008)'),

  prefecture: z.string().min(1, '都道府県を入力してください'),

  city: z.string().min(1, '市区町村を入力してください'),

  addressLine: z
    .string()
    .min(1, '番地・建物名を入力してください')
    .max(200, '住所は200文字以内で入力してください'),

  message: z
    .string()
    .min(10, 'お問い合わせ内容は10文字以上で入力してください')
    .max(3000, 'お問い合わせ内容は3000文字以内で入力してください'),

  gigafileUrl: z
    .string()
    .url('正しいURLを入力してください')
    .max(500)
    .optional()
    .or(z.literal('')),

  simulatorData: z
    .object({
      signType: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
      material: z.string().optional(),
      installMethod: z.string().optional(),
      estimatedPrice: z.number().optional(),
      qty: z.number().optional(),
      design: z.string().optional(),
      finish: z.string().optional(),
      light: z.string().optional(),
      choice: z.string().optional(),
      thickness: z.string().optional(),
      bevel: z.string().optional(),
      mount: z.string().optional(),
    })
    .optional(),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
