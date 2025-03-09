"use client"
import { useState, useRef } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Star, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations, type TranslationKey } from "@/lib/translations"
import { ChatPopup } from "@/components/chat/chat-popup"

type Stat = {
  key: TranslationKey
  value: string
}

const stats: Stat[] = [
  { key: "smbsSeekingAI", value: "78%" },
  { key: "productivityIncrease", value: "40%" },
  { key: "costReduction", value: "10x" },
]

const trustPoints: TranslationKey[] = ["noCodeImplementation", "resultsInDays", "payAsYouGrow"]

export function HeroSection() {
  const [chatInput, setChatInput] = useState("")
  const [isChatOpen, setIsChatOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatInput.trim()) {
      setIsChatOpen(true)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && chatInput.trim()) {
      e.preventDefault()
      setIsChatOpen(true)
    }
  }

  return (
    <section className="relative min-h-screen pt-24 bg-white">
      <div className="container relative z-10 mx-auto px-4 pt-16 md:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#002e88]/10 px-4 py-2"
          >
            <Star className="h-5 w-5 text-[#002e88]" fill="currentColor" />
            <span className="text-sm font-semibold text-[#002e88]">{t.trustedBySMBs}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block text-[#002e88]">{t.aiImplementationIn}</span>
            <span className="bg-gradient-to-r from-[#002e88] to-[#00e5e5] bg-clip-text text-transparent">{t.daysNotMonths}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mb-8 text-xl text-[#002e88]/80 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t.fasterMoreAffordable}
          </motion.p>

          {/* Chat Input (replacing CTA button) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto max-w-xl"
          >
            <form onSubmit={handleSubmit} className="relative">
              <input
                ref={inputRef}
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  language === "en" ? "Tell me what you want to automate..." : "Dime qué quieres automatizar..."
                }
                className="w-full rounded-full border border-gray-200 bg-white px-6 py-4 pr-14 text-[#002e88] shadow-lg focus:border-[#002e88] focus:outline-none focus:ring-2 focus:ring-[#002e88]/20"
              />
              <Button
                type="submit"
                variant="default"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 p-0"
                disabled={!chatInput.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>

            {/* Trust Points */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-[#002e88]/70">
                  <CheckCircle className="h-4 w-4 text-[#00e5e5]" />
                  <span className="text-sm font-medium">{t[point]}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="rounded-lg border border-border bg-white p-6 shadow-sm"
              >
                <div className="mb-2 text-3xl font-bold text-[#002e88]">{stat.value}</div>
                <div className="text-sm text-[#002e88]/70">{t[stat.key]}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Popup */}
      <ChatPopup isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} initialMessage={chatInput} />
    </section>
  )
}

