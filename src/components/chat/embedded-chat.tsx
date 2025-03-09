"use client"

import type { ReactNode } from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Loader2, Languages } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function EmbeddedChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault()

    if (!input.trim()) return

    const userMessage = input
    setInput("")
    setIsLoading(true)

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])

    try {
      // Generate response from OpenAI
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: `${userMessage}

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

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <div className="mx-auto max-w-4xl w-full">
      {/* Chat Messages */}
      <div className="mb-6 space-y-4 min-h-[400px] max-h-[600px] overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
            <h2 className="mb-2 text-2xl font-semibold text-primary">
              {language === "en" ? "What would you like to automate?" : "¿Qué te gustaría automatizar?"}
            </h2>
            <p className="text-primary/70">
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
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === "user" ? "bg-primary text-white" : "bg-gray-100 text-primary border border-gray-200"
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
      <div className="relative">
        <form onSubmit={handleSendMessage} className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={language === "en" ? "Tell me what you want to automate..." : "Dime qué quieres automatizar..."}
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 pr-24 text-primary placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            disabled={isLoading}
          />
          <div className="absolute right-2 flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="h-10 w-10 rounded-full hover:bg-gray-100"
            >
              <Languages className="h-5 w-5 text-primary/70" />
            </Button>
            <Button type="submit" disabled={isLoading || !input.trim()} className="h-10 w-10 rounded-full p-0">
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

