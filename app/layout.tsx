import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sakura Tech - 技術で未来を創る',
  description: '日本の美学とモダンテクノロジーの融合。最先端のソリューションを提供します。',
  keywords: 'テクノロジー, ソフトウェア, AI, 日本, イノベーション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="paper-texture">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
