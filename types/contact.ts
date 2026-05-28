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

  // シミュレーター連動用
  simulatorData?: {
    signType?: string          // 看板タイプ（"プレート看板" 固定）
    width?: number             // 横幅(mm)
    height?: number            // 高さ(mm)
    material?: string          // ※実態では未使用（互換のため残す）
    installMethod?: string     // ※実態では未使用（互換のため残す）
    estimatedPrice?: number    // 概算金額(税込)
    // --- 以下、プレート看板シミュレーターの実態フィールド ---
    qty?: number               // 枚数
    design?: string            // データ（"データあり" / "デザイン依頼"）
    finish?: string            // 仕上げ（"加工なし" / "穴あけ加工 + 角R加工" 等）
    light?: string             // 照明（"不要" / "アームライト" 等）
    choice?: string            // "製作のみ" / "製作＋施工"
  }
}

export type ContactApiResponse =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> }
