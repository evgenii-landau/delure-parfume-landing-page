import type { Metadata, Viewport } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DELURE | Luxury Perfume',
  description: 'DELURE composes niche fragrances by hand in Grasse, built from rare materials and made to become your own.',
  keywords: ['luxury perfume', 'fragrance', 'signature scent', 'premium perfume', 'DELURE'],
  authors: [{ name: 'DELURE' }],
  openGraph: {
    title: 'DELURE | Luxury Perfume',
    description: 'DELURE composes niche fragrances by hand in Grasse, built from rare materials and made to become your own.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f3ef',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
