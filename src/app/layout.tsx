import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

// Update this single value when the site moves to a custom domain.
const SITE_URL = 'https://borngreat-ikwutah.vercel.app'

export const metadata: Metadata = {
  title: 'Borngreat Ikwutah',
  description:
    'Frontend Software Engineer and Mobile Developer based in Nigeria. Passionate about creating beautiful and functional web and mobile applications using React, Next.js, and React Native.',
  keywords: [
    'Frontend Developer',
    'Software Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'React Native',
    'Mobile Developer',
    'Cross-platform Development',
    'Nigeria',
  ],
  authors: [{ name: 'Borngreat Ikwutah' }],
  creator: 'Borngreat Ikwutah',
  publisher: 'Borngreat Ikwutah',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Borngreat Ikwutah - Frontend & Mobile Developer',
    description:
      'Frontend Software Engineer and Mobile Developer based in Nigeria. Passionate about creating beautiful and functional web and mobile applications using React, Next.js, and React Native.',
    url: SITE_URL,
    siteName: 'Borngreat Ikwutah Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Borngreat Ikwutah - Frontend & Mobile Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Borngreat Ikwutah - Frontend & Mobile Developer',
    description:
      'Frontend Software Engineer and Mobile Developer based in Nigeria. Passionate about creating beautiful and functional web and mobile applications using React, Next.js, Tanstack Start and React Native.',
    images: ['/og-image.jpg'],
    creator: '@borngreatik23',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <body
          className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans`}
        >
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <main className="w-full overflow-x-hidden">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
