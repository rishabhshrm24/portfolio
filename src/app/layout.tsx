import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Sora } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/providers/theme-provider'

const bodyFont = Sora({
  subsets: ['latin'],
  variable: '--font-body',
})

const displayFont = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Rishabh Sharma | Product & UX Design Portfolio',
  description: 'UX design portfolio showcasing product thinking, user research, and impactful case studies by Rishabh Sharma.',
  icons: {
    icon: '/RS logo.png',
    shortcut: '/RS logo.png',
    apple: '/RS logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} bg-bg text-text overflow-x-hidden antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
