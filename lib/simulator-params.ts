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

export function encodeAcrylicParams(data: SimulatorData): string {
  const params = new URLSearchParams()
  if (data.signType) params.set("st", data.signType)
  if (data.material) params.set("type", data.material)
  if (typeof data.width === "number") params.set("w", String(data.width))
  if (typeof data.height === "number") params.set("h", String(data.height))
  if (data.thickness) params.set("thk", data.thickness)
  if (data.bevel) params.set("bev", data.bevel)
  if (data.mount) params.set("mnt", data.mount)
  if (data.design) params.set("design", data.design)
  if (data.choice) params.set("choice", data.choice)
  if (typeof data.estimatedPrice === "number") params.set("price", String(data.estimatedPrice))
  return params.toString()
}

export function decodeAcrylicParams(
  searchParams: Record<string, string | string[] | undefined>
): SimulatorData | undefined {
  const get = (key: string): string | undefined => {
    const v = searchParams[key]
    return Array.isArray(v) ? v[0] : v
  }

  const st = get("st")
  const type = get("type")
  if (!st || !type) return undefined

  const toNum = (s: string | undefined): number | undefined => {
    if (s === undefined) return undefined
    const n = Number(s)
    return Number.isFinite(n) ? n : undefined
  }

  return {
    signType: st,
    material: type,
    width: toNum(get("w")),
    height: toNum(get("h")),
    thickness: get("thk"),
    bevel: get("bev"),
    mount: get("mnt"),
    design: get("design"),
    choice: get("choice"),
    estimatedPrice: toNum(get("price")),
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

// カルプ用：simulatorData を URL パラメータへ
export function encodeKarupParams(data: SimulatorData): string {
  const params = new URLSearchParams()
  if (data.signType) params.set('st', data.signType)
  if (data.material) params.set('color', data.material)
  if (typeof data.charHeight === 'number') params.set('h', String(data.charHeight))
  if (typeof data.charCount === 'number') params.set('cnt', String(data.charCount))
  if (data.thickness) params.set('thk', data.thickness)
  if (data.finish) params.set('fin', data.finish)
  if (data.design) params.set('design', data.design)
  if (data.choice) params.set('choice', data.choice)
  if (typeof data.estimatedPrice === 'number') params.set('price', String(data.estimatedPrice))
  return params.toString()
}

// カルプ用：searchParams から復元
export function decodeKarupParams(
  searchParams: Record<string, string | string[] | undefined>
): SimulatorData | undefined {
  const get = (k: string) => {
    const v = searchParams[k]
    return Array.isArray(v) ? v[0] : v
  }
  const st = get('st')
  const color = get('color')
  if (!st || !color) return undefined
  const toNum = (s?: string) => {
    if (s === undefined) return undefined
    const n = Number(s)
    return Number.isFinite(n) ? n : undefined
  }
  return {
    signType: st,
    material: color,
    charHeight: toNum(get('h')),
    charCount: toNum(get('cnt')),
    thickness: get('thk'),
    finish: get('fin'),
    design: get('design'),
    choice: get('choice'),
    estimatedPrice: toNum(get('price')),
  }
}

// ステンレス切文字用：simulatorData を URL パラメータへ
export function encodeStainlessParams(data: SimulatorData): string {
  const params = new URLSearchParams()
  if (data.signType) params.set('st', data.signType)
  if (data.finish) params.set('finish', data.finish)
  if (data.mounting) params.set('mounting', data.mounting)
  if (data.thickness) params.set('thickness', data.thickness)
  if (data.size) params.set('size', data.size)
  if (typeof data.charCount === 'number') params.set('count', String(data.charCount))
  if (data.spacer) params.set('spacer', data.spacer)
  if (data.choice) params.set('choice', data.choice)
  if (typeof data.estimatedPrice === 'number') params.set('price', String(data.estimatedPrice))
  return params.toString()
}

// ステンレス切文字用：searchParams から復元
export function decodeStainlessParams(
  searchParams: Record<string, string | string[] | undefined>
): SimulatorData | undefined {
  const get = (k: string) => {
    const v = searchParams[k]
    return Array.isArray(v) ? v[0] : v
  }
  const st = get('st')
  const finish = get('finish')
  // ステンレス由来と判定できる最低条件（看板タイプ＋仕上げ）
  if (!st || !finish) return undefined
  const toNum = (s?: string) => {
    if (s === undefined) return undefined
    const n = Number(s)
    return Number.isFinite(n) ? n : undefined
  }
  return {
    signType: st,
    finish,
    mounting: get('mounting'),
    thickness: get('thickness'),
    size: get('size'),
    charCount: toNum(get('count')),
    spacer: get('spacer'),
    choice: get('choice'),
    estimatedPrice: toNum(get('price')),
  }
}
