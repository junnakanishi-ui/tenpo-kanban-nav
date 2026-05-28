/**
 * 郵便番号から住所を取得するユーティリティ
 *
 * クライアントから直接 zipcloud API を叩くと CORS/CSP でブロックされる場合があるため、
 * 内部のサーバーサイドAPI(/api/zipcode)を経由する方式にしている。
 */

export type ZipcodeResult = {
  prefecture: string
  city: string
} | null

type ZipcodeApiResponse =
  | { ok: true; prefecture: string; city: string }
  | { ok: false; error: string }

/**
 * 郵便番号(ハイフン有無問わず)から住所を取得する
 * @param postalCode - 例: "460-0008" または "4600008"
 */
export async function fetchAddressByZipcode(
  postalCode: string
): Promise<ZipcodeResult> {
  // ハイフン除去・全角→半角変換
  const normalized = postalCode
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/-/g, '')
    .trim()

  if (!/^\d{7}$/.test(normalized)) {
    return null
  }

  try {
    const url = `/api/zipcode?code=${normalized}`
    const res = await fetch(url)

    const data = (await res.json()) as ZipcodeApiResponse

    if (!data.ok) {
      console.warn('[zipcode] API returned error:', data.error)
      return null
    }

    return {
      prefecture: data.prefecture,
      city: data.city,
    }
  } catch (err) {
    console.error('[zipcode] fetch error:', err)
    return null
  }
}
