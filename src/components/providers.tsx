"use client"

import type { ReactNode } from "react"
import { ScrollProvider } from "@/contexts/scroll-context"
import { LanguageProvider } from "@/contexts/language-context"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ScrollProvider>{children}</ScrollProvider>
    </LanguageProvider>
  )
}

