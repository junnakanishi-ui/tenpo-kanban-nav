// サイト共通の連絡先情報。電話・LINE・営業時間などはすべてここを参照する。
// ベタ書き禁止。変更時はこのファイルだけ直せば全箇所に反映される。

export const SITE_CONTACT = {
  /** 電話番号（表示用） */
  telDisplay: "052-265-7603",
  /** 電話番号（tel: リンク用・ハイフンなし） */
  telHref: "tel:0522657603",
  /** 公式LINE（QRモーダルが開く正しいURL） */
  lineUrl: "https://page.line.me/432obmvm?oat_content=url&openQrModal=true",
  /** 問い合わせフォームのパス */
  contactPath: "/contact",
  /** 営業時間など */
  hours: {
    tel: "平日 9:00 〜 18:00",
    lineForm: "24時間受付・翌営業日までに返信",
    estimate: "当日〜翌営業日",
  },
} as const
