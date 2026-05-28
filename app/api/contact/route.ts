import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/contact/schema'
import {
  buildAdminEmailText,
  buildEmailSubject,
  buildUserThankYouEmailText,
  buildUserThankYouEmailSubject,
} from '@/lib/contact/email-template'
import type { ContactApiResponse } from '@/types/contact'

export const runtime = 'nodejs'

export async function POST(request: Request): Promise<NextResponse<ContactApiResponse>> {
  // 環境変数チェック
  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const toEmail = process.env.CONTACT_EMAIL_TO

  if (!apiKey || !fromEmail || !toEmail) {
    console.error('[contact] Missing environment variables')
    return NextResponse.json(
      { ok: false, error: 'サーバー設定エラーです。お手数ですがお電話でお問い合わせください。' },
      { status: 500 }
    )
  }

  // リクエストボディのパース
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: 'リクエストの形式が正しくありません。' },
      { status: 400 }
    )
  }

  // バリデーション
  const parseResult = contactFormSchema.safeParse(body)
  if (!parseResult.success) {
    const fieldErrors: Record<string, string[]> = {}
    for (const issue of parseResult.error.issues) {
      const path = issue.path.join('.')
      if (!fieldErrors[path]) fieldErrors[path] = []
      fieldErrors[path].push(issue.message)
    }
    return NextResponse.json(
      { ok: false, error: '入力内容に不備があります。', fieldErrors },
      { status: 400 }
    )
  }

  const values = parseResult.data
  const resend = new Resend(apiKey)

  // 管理者宛メール送信
  try {
    const adminResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: values.email,
      subject: buildEmailSubject(values),
      text: buildAdminEmailText(values),
    })

    if (adminResult.error) {
      console.error('[contact] Admin email error:', adminResult.error)
      return NextResponse.json(
        { ok: false, error: 'メール送信に失敗しました。時間をおいて再度お試しください。' },
        { status: 500 }
      )
    }
  } catch (err) {
    console.error('[contact] Admin email unexpected error:', err)
    return NextResponse.json(
      { ok: false, error: 'メール送信中にエラーが発生しました。' },
      { status: 500 }
    )
  }

  // ユーザー宛サンキューメール送信(失敗しても管理者宛は送信済みなのでokを返す)
  try {
    const userResult = await resend.emails.send({
      from: fromEmail,
      to: values.email,
      subject: buildUserThankYouEmailSubject(),
      text: buildUserThankYouEmailText(values),
    })

    if (userResult.error) {
      // ログだけ残してユーザーには成功を返す(管理者宛は送れているため)
      console.error('[contact] User thank-you email error:', userResult.error)
    }
  } catch (err) {
    // ログだけ残してユーザーには成功を返す
    console.error('[contact] User thank-you email unexpected error:', err)
  }

  return NextResponse.json({ ok: true })
}
