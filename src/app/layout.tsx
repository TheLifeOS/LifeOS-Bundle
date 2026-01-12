import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LifeOS Studio - Relatable Pain Products',
  description: 'Quantified tools for life decisions. Bundle. Cross-sell. Scale.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen`}>
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="text-center text-gray-600 py-8 border-t">
          <p>LifeOS Studio v1.0 • Launch every 7-10 days • One viral hit pays for 10 experiments</p>
        </footer>
      </body>
    </html>
  )
}
