"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = (lang: "en" | "es") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
        aria-label={language === "en" ? "Change language" : "Cambiar idioma"}
      >
        <Globe className="h-4 w-4" />
        <span>{language === "en" ? "EN" : "ES"}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-lg z-50"
          >
            <div className="py-1">
              <button
                onClick={() => toggleLanguage("en")}
                className={`block w-full px-4 py-2 text-left text-sm ${
                  language === "en" ? "bg-primary/10 text-primary font-medium" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                English
              </button>
              <button
                onClick={() => toggleLanguage("es")}
                className={`block w-full px-4 py-2 text-left text-sm ${
                  language === "es" ? "bg-primary/10 text-primary font-medium" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Español
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

