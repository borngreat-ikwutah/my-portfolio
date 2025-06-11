import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Borngreat Ikwutah',
  description: 'Frontend Software Engineer and Mobile Developer based in Nigeria. Passionate about creating beautiful and functional web and mobile applications using React, Next.js, and React Native.',
  keywords: ['Frontend Developer', 'Software Engineer', 'React', 'Next.js', 'TypeScript', 'React Native', 'Mobile Developer', 'Cross-platform Development', 'Nigeria'],
  authors: [{ name: 'Borngreat Ikwutah' }],
  creator: 'Borngreat Ikwutah',
  publisher: 'Borngreat Ikwutah',
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Borngreat Ikwutah - Frontend & Mobile Developer',
    description: 'Frontend Software Engineer and Mobile Developer based in Nigeria. Passionate about creating beautiful and functional web and mobile applications using React, Next.js, and React Native.',
    url: 'https://your-domain.com',
    siteName: 'Borngreat Ikwutah Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Add an Open Graph image to your public folder
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
    description: 'Frontend Software Engineer and Mobile Developer based in Nigeria. Passionate about creating beautiful and functional web and mobile applications using React, Next.js, Tanstack Start and React Native.',
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
    icon: '/favicon.ico',
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
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-foreground mx-auto w-[750px] max-w-full px-5 pt-28 pb-10">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
