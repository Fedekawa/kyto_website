"use client"

import type { ReactNode } from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Loader2, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

type Message = {
  role: "user" | "assistant"
  content: string
}

interface ChatPopupProps {
  isOpen: boolean
  onClose: () => void
  initialMessage?: string
}

export function ChatPopup({ isOpen, onClose, initialMessage = "" }: ChatPopupProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState(initialMessage)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { language } = useLanguage()
  const t = translations[language]

  // Reset input when initialMessage changes
  useEffect(() => {
    if (initialMessage) {
      setInput(initialMessage)
    }
  }, [initialMessage])

  // Focus input when popup opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Send initial message if provided
  useEffect(() => {
    if (isOpen && initialMessage && messages.length === 0) {
      handleSendMessage(undefined, initialMessage)
    }
  }, [isOpen, initialMessage])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e?: React.FormEvent, overrideMessage?: string) => {
    e?.preventDefault()

    const messageToSend = overrideMessage || input
    if (!messageToSend.trim()) return

    setInput("")
    setIsLoading(true)

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: messageToSend }])

    try {
      // Generate response from OpenAI
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: `${messageToSend}

You are Kyto's AI assistant. Your role is to help potential customers understand how Kyto can automate their business processes. Focus on practical solutions and quick implementation.`,
        system:
          "You are an automation expert helping businesses identify processes that can be automated. Keep responses concise and focused on actionable solutions.",
      })

      // Add assistant message to chat
      setMessages((prev) => [...prev, { role: "assistant", content: text }])
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            language === "en"
              ? "I'm sorry, I couldn't process your request. Please try again later."
              : "Lo siento, no pude procesar tu solicitud. Por favor, inténtalo más tarde.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => window.removeEventListener("keydown", handleEscKey)
  }, [isOpen, onClose])

  // Prevent body scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div className={`${isOpen ? "fixed inset-0 z-50 flex items-center justify-center" : "hidden"}`}>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Chat Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-[95%] max-w-2xl rounded-xl bg-white shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-primary">
                  {language === "en" ? "AI Automation Assistant" : "Asistente de Automatización IA"}
                </h3>
                <button
                  onClick={onClose}
                  className="rounded-full p-1 text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="max-h-[70vh] h-[400px] overflow-y-auto p-4 md:p-6">
                {messages.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
                    <h2 className="mb-2 text-xl font-semibold text-primary">
                      {language === "en" ? "What would you like to automate?" : "¿Qué te gustaría automatizar?"}
                    </h2>
                    <p className="text-primary/70 max-w-md">
                      {language === "en"
                        ? "Describe your process and I'll help you find automation opportunities."
                        : "Describe tu proceso y te ayudaré a encontrar oportunidades de automatización."}
                    </p>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-primary border border-gray-200"
                        }`}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="border-t border-gray-200 p-3 md:p-4">
                <form onSubmit={handleSendMessage} className="relative flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                      language === "en" ? "Tell me what you want to automate..." : "Dime qué quieres automatizar..."
                    }
                    className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-primary placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="absolute right-1 h-10 w-10 rounded-full p-0"
                  >
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                  </Button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

