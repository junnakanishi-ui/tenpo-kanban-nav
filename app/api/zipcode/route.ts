import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type ZipcloudResponse = {
  status: number
  message: string | null
  results:
    | {
        zipcode: string
        prefcode: string
        address1: string
        address2: string
        address3: string
        kana1: string
        kana2: string
        kana3: string
      }[]
    | null
}

export type ZipcodeApiResponse =
  | { ok: true; prefecture: string; city: string }
  | { ok: false; error: string }

/**
 * 郵便番号から住所を取得するサーバーサイドAPI
 * クライアント側のCORS制限を回避するための中継APIとして機能する
 *
 * GET /api/zipcode?code=4600008
 */
export async function GET(
  request: Request
): Promise<NextResponse<ZipcodeApiResponse>> {
  const { searchParams } = new URL(request.url)
  const rawCode = searchParams.get('code') ?? ''

  // 入力の正規化(全角→半角、ハイフン除去、空白除去)
  const normalized = rawCode
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/[-\s]/g, '')
    .trim()

  if (!/^\d{7}$/.test(normalized)) {
    return NextResponse.json(
      { ok: false, error: '郵便番号は7桁の数字で指定してください。' },
      { status: 400 }
    )
  }

  try {
    const url = `https://zipcloud.ibsnet.jp/api/search?zipcode=${normalized}`

    console.log('[zipcode] fetching:', url)

    const res = await fetch(url, {
      next: { revalidate: 86400 },
    })

    if (!res.ok) {
      console.error('[zipcode] zipcloud responded with status:', res.status)
      return NextResponse.json(
        { ok: false, error: '住所検索サービスからエラーが返されました。' },
        { status: 502 }
      )
    }

    const data = (await res.json()) as ZipcloudResponse

    if (data.status !== 200 || !data.results || data.results.length === 0) {
      return NextResponse.json(
        { ok: false, error: '該当する住所が見つかりませんでした。' },
        { status: 404 }
      )
    }

    const first = data.results[0]
    return NextResponse.json({
      ok: true,
      prefecture: first.address1,
      city: `${first.address2}${first.address3}`,
    })
  } catch (err) {
    console.error('[zipcode] fetch error:', err)
    return NextResponse.json(
      { ok: false, error: '住所検索中にエラーが発生しました。' },
      { status: 500 }
    )
  }
}
