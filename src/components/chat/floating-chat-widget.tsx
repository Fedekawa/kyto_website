"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-to-br from-[#002e88] to-[#1a4cad] p-0 shadow-lg hover:shadow-xl"
        >
          <Sparkles className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Popup */}
      <ChatPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

