export type InquiryType = 'production_only' | 'production_with_installation' | 'other'

export const INQUIRY_TYPE_LABELS: Record<InquiryType, string> = {
  production_only: '製作のみ',
  production_with_installation: '製作+施工',
  other: 'その他',
}

export type ContactFormValues = {
  // 基本情報
  name: string
  email: string
  phone: string
  companyName?: string

  // 問い合わせ種別
  inquiryType: InquiryType

  // 住所
  postalCode: string
  prefecture: string
  city: string
  addressLine: string

  // 問い合わせ内容
  message: string

  // ギガファイル便URL(任意)
  gigafileUrl?: string

  // シミュレーター連動用(依頼書Cで活用、ここでは型のみ)
  simulatorData?: {
    signType?: string
    width?: number
    height?: number
    material?: string
    installMethod?: string
    estimatedPrice?: number
  }
}

export type ContactApiResponse =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> }
