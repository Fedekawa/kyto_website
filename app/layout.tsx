import type { ReactNode } from "react"
import { Providers } from "@/components/providers"
import { Header } from "@/components/layout/header"
import { PageTransition } from "@/components/layout/page-transition"
import { BackgroundDecoration } from "@/components/layout/background-decoration"
import { FloatingChatWidget } from "@/components/chat/floating-chat-widget"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kyto | AI Implementation in Days, Not Months",
  description:
    "Transform your business with AI solutions that are 10x faster and more affordable. Enterprise-grade AI for SMBs.",
  keywords: "AI implementation, business automation, SMB solutions, artificial intelligence",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-background antialiased`}>
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
      </body>
    </html>
  )
}

