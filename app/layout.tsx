import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '店舗看板ナビ | 店舗看板の種類・価格・設置方法がはじめてでもわかる',
  description:
    'プレート看板、アクリル看板、カルプ文字、店頭幕、ウィンドウサインまで。看板選びに迷ったら、まずは診断と概算見積もりから。製作のみも全国施工込みも対応。',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#0F2742',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
