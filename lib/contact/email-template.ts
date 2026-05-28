import type { ContactFormValues } from '@/types/contact'
import { INQUIRY_TYPE_LABELS } from '@/types/contact'
import { EMAIL_SIGNATURE } from './email-signature'

/**
 * 管理者宛メール本文(プレーンテキスト)を生成
 */
export function buildAdminEmailText(values: ContactFormValues): string {
  const lines: string[] = []

  lines.push('店舗看板ナビからお問い合わせがありました。')
  lines.push('')
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  lines.push('【お客様情報】')
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  lines.push(`お名前: ${values.name}`)
  lines.push(`メールアドレス: ${values.email}`)
  lines.push(`電話番号: ${values.phone}`)
  if (values.companyName) {
    lines.push(`法人名/店舗名: ${values.companyName}`)
  }
  lines.push(`住所: 〒${values.postalCode}`)
  lines.push(`      ${values.prefecture}${values.city}`)
  lines.push(`      ${values.addressLine}`)
  lines.push('')
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  lines.push('【お問い合わせ内容】')
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  lines.push(`問い合わせ種別: ${INQUIRY_TYPE_LABELS[values.inquiryType]}`)
  lines.push('')
  lines.push('--- メッセージ ---')
  lines.push(values.message)
  lines.push('')

  if (values.gigafileUrl) {
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    lines.push('【ファイル(ギガファイル便)】')
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    lines.push(values.gigafileUrl)
    lines.push('')
  }

  if (values.simulatorData) {
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    lines.push('【シミュレーター情報】')
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    const sim = values.simulatorData
    if (sim.signType) lines.push(`看板タイプ: ${sim.signType}`)
    if (sim.width && sim.height) lines.push(`サイズ: ${sim.width}×${sim.height}mm`)
    if (sim.material) lines.push(`素材: ${sim.material}`)
    if (sim.installMethod) lines.push(`取付方法: ${sim.installMethod}`)
    if (sim.estimatedPrice) {
      lines.push(`概算金額: ¥${sim.estimatedPrice.toLocaleString()}`)
    }
    lines.push('')
  }

  lines.push('')
  lines.push(EMAIL_SIGNATURE)

  return lines.join('\n')
}

/**
 * ユーザー宛サンキューメール本文(プレーンテキスト)を生成
 */
export function buildUserThankYouEmailText(values: ContactFormValues): string {
  const lines: string[] = []

  lines.push(`${values.name} 様`)
  lines.push('')
  lines.push('この度は店舗看板ナビへお問い合わせいただき、誠にありがとうございます。')
  lines.push('以下の内容でお問い合わせを承りました。')
  lines.push('')
  lines.push('担当者より2営業日以内にご連絡いたしますので、今しばらくお待ちくださいませ。')
  lines.push('お急ぎの場合は、お電話(052-265-7603)にてお問い合わせください。')
  lines.push('')
  lines.push('※このメールは自動送信です。返信いただいてもお答えできません。')
  lines.push('')
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  lines.push('【ご入力内容】')
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  lines.push(`お名前: ${values.name}`)
  lines.push(`メールアドレス: ${values.email}`)
  lines.push(`電話番号: ${values.phone}`)
  if (values.companyName) {
    lines.push(`法人名/店舗名: ${values.companyName}`)
  }
  lines.push(`住所: 〒${values.postalCode}`)
  lines.push(`      ${values.prefecture}${values.city}`)
  lines.push(`      ${values.addressLine}`)
  lines.push('')
  lines.push(`問い合わせ種別: ${INQUIRY_TYPE_LABELS[values.inquiryType]}`)
  lines.push('')
  lines.push('--- メッセージ ---')
  lines.push(values.message)
  lines.push('')

  if (values.gigafileUrl) {
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    lines.push('【添付ファイル(ギガファイル便)】')
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    lines.push(values.gigafileUrl)
    lines.push('')
  }

  if (values.simulatorData) {
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    lines.push('【シミュレーター情報】')
    lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    const sim = values.simulatorData
    if (sim.signType) lines.push(`看板タイプ: ${sim.signType}`)
    if (sim.width && sim.height) lines.push(`サイズ: ${sim.width}×${sim.height}mm`)
    if (sim.material) lines.push(`素材: ${sim.material}`)
    if (sim.installMethod) lines.push(`取付方法: ${sim.installMethod}`)
    if (sim.estimatedPrice) {
      lines.push(`概算金額: ¥${sim.estimatedPrice.toLocaleString()}`)
    }
    lines.push('')
  }

  lines.push('')
  lines.push(EMAIL_SIGNATURE)

  return lines.join('\n')
}

/**
 * 管理者宛メール件名を生成
 */
export function buildEmailSubject(values: ContactFormValues): string {
  const typeLabel = INQUIRY_TYPE_LABELS[values.inquiryType]
  return `【店舗看板ナビ】${typeLabel}のお問い合わせ(${values.name}様)`
}

/**
 * ユーザー宛サンキューメール件名を生成
 */
export function buildUserThankYouEmailSubject(): string {
  return '【店舗看板ナビ】お問い合わせを承りました'
}
