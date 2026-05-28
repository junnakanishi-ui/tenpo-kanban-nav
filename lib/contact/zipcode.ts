/**
 * 郵便番号から住所を取得するユーティリティ
 * zipcloud API (https://zipcloud.ibsnet.jp/) を使用
 */

export type ZipcodeResult = {
  prefecture: string
  city: string
} | null

type ZipcloudResponse = {
  status: number
  message: string | null
  results:
    | {
        zipcode: string
        prefcode: string
        address1: string // 都道府県
        address2: string // 市区町村
        address3: string // 町域
        kana1: string
        kana2: string
        kana3: string
      }[]
    | null
}

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
    const url = `https://zipcloud.ibsnet.jp/api/search?zipcode=${normalized}`
    const res = await fetch(url, {
      // クライアントサイドキャッシュを活用
      cache: 'force-cache',
    })

    if (!res.ok) return null

    const data = (await res.json()) as ZipcloudResponse

    if (data.status !== 200 || !data.results || data.results.length === 0) {
      return null
    }

    const first = data.results[0]
    return {
      prefecture: first.address1,
      city: `${first.address2}${first.address3}`,
    }
  } catch {
    return null
  }
}
