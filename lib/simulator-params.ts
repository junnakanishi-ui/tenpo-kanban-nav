import type { ContactFormValues, InquiryType } from '@/types/contact'

type SimulatorData = NonNullable<ContactFormValues['simulatorData']>

/**
 * simulatorData を URLSearchParams 文字列に変換（result-card 側で使用）
 */
export function encodeSimulatorParams(data: SimulatorData): string {
  const params = new URLSearchParams()
  if (data.signType) params.set('st', data.signType)
  if (typeof data.width === 'number') params.set('w', String(data.width))
  if (typeof data.height === 'number') params.set('h', String(data.height))
  if (typeof data.qty === 'number') params.set('qty', String(data.qty))
  if (data.design) params.set('design', data.design)
  if (data.finish) params.set('finish', data.finish)
  if (data.light) params.set('light', data.light)
  if (data.choice) params.set('choice', data.choice)
  if (typeof data.estimatedPrice === 'number') {
    params.set('price', String(data.estimatedPrice))
  }
  return params.toString()
}

/**
 * searchParams から simulatorData を復元（contact/page 側で使用）
 * シミュレーターから来ていない（必須キーが無い）場合は undefined を返す
 */
export function decodeSimulatorParams(
  searchParams: Record<string, string | string[] | undefined>
): SimulatorData | undefined {
  const get = (key: string): string | undefined => {
    const v = searchParams[key]
    return Array.isArray(v) ? v[0] : v
  }

  const st = get('st')
  const w = get('w')
  const h = get('h')

  // シミュレーター由来と判定できる最低条件（看板タイプ＋サイズ）が無ければ無視
  if (!st || !w || !h) return undefined

  const toNum = (s: string | undefined): number | undefined => {
    if (s === undefined) return undefined
    const n = Number(s)
    return Number.isFinite(n) ? n : undefined
  }

  return {
    signType: st,
    width: toNum(w),
    height: toNum(h),
    qty: toNum(get('qty')),
    design: get('design'),
    finish: get('finish'),
    light: get('light'),
    choice: get('choice'),
    estimatedPrice: toNum(get('price')),
  }
}

/**
 * シミュレーターの choice 文字列から問い合わせ種別を判定
 * "製作＋施工" → production_with_installation / それ以外 → production_only
 */
export function inquiryTypeFromChoice(choice?: string): InquiryType {
  return choice === '製作＋施工'
    ? 'production_with_installation'
    : 'production_only'
}
