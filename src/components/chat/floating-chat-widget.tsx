"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { ChatPopup } from "@/components/chat/chat-popup"

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={language === "en" ? "Open chat" : "Abrir chat"}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Chat Popup */}
      <ChatPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

