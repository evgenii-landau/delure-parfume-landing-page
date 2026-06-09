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
  description: 'Discover your signature scent. DELURE creates exceptional fragrances that become an extension of your identity.',
  keywords: ['luxury perfume', 'fragrance', 'signature scent', 'premium perfume', 'DELURE'],
  authors: [{ name: 'DELURE' }],
  openGraph: {
    title: 'DELURE | Luxury Perfume',
    description: 'Discover your signature scent. DELURE creates exceptional fragrances that become an extension of your identity.',
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
