import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Providers } from "@/components/providers"
import { Header } from "@/components/layout/header"
import { PageTransition } from "@/components/layout/page-transition"
import { BackgroundDecoration } from "@/components/layout/background-decoration"
import { FloatingChatWidget } from "@/components/chat/floating-chat-widget"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kyto.ai'),
  title: {
    template: "%s | Kyto - AI Implementation",
    default: "Kyto - AI Implementation in Weeks, Not Months",
  },
  description: "Transform your business with enterprise-grade AI solutions. 10x faster, 10x more affordable AI implementation for SMBs. No code required, results in weeks.",
  keywords: [
    "AI implementation",
    "business automation",
    "document processing",
    "AI agents",
    "process automation",
    "SMB AI solutions",
    "enterprise AI",
    "no-code AI",
    "rapid AI deployment",
    "AI consulting"
  ],
  authors: [{ name: "Kyto" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    title: "Kyto - Implementación de IA en Semanas, No Meses",
    description: "Transforma tu negocio con soluciones de IA de nivel empresarial. Implementación de IA 10 veces más rápida y económica para PYMEs.",
    siteName: "Kyto",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kyto Implementación de IA"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyto - Implementación de IA en Semanas, No Meses",
    description: "Transforma tu negocio con soluciones de IA. 10 veces más rápido y económico.",
    images: ["/twitter-image.jpg"],
    creator: "@kyto_ai"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kyto.ai",
    languages: {
      'es-ES': 'https://kyto.ai',
      'en-US': 'https://kyto.ai/en'
    }
  },
  verification: {
    google: "your-google-verification-code",
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#002e88" />
      </head>
      <body className={`${inter.className} min-h-full bg-background antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kyto",
              url: "https://kyto.ai",
              logo: "https://kyto.ai/logo.png",
              description: "Implementación de soluciones de IA para empresas",
              sameAs: [
                "https://twitter.com/kyto_ai",
                "https://linkedin.com/company/kyto-ai"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+34-XXX-XXX-XXX",
                contactType: "customer service",
                availableLanguage: ["English", "Spanish"]
              },
              offers: {
                "@type": "Offer",
                description: "Implementación de IA empresarial para PYMEs"
              }
            })
          }}
        />
        <LanguageProvider>
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <PageTransition>
                <BackgroundDecoration />
                {children}
              </PageTransition>
              <FloatingChatWidget />
            </div>
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  )
}

