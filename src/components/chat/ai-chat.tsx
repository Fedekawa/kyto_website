"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"
import { IntegrationDiagram } from "./integration-diagram"
import { generateChatCompletion, handleIntegrationDiagram, SYSTEM_PROMPT } from "@/lib/openai"
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions"

type Message = {
  role: "user" | "assistant"
  content: string
  showDiagram?: boolean
  diagramData?: {
    input: string
    output: string
    description: string
  }
}

export function AiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
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

    // If this is the first message, show the modal
    if (messages.length === 0) {
      setShowModal(true)
    }

    const userMessage = input
    setInput("")
    setIsLoading(true)

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])

    try {
      // Prepare messages for OpenAI
      const chatMessages: ChatCompletionMessageParam[] = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
        { role: "user", content: userMessage },
      ]

      // Generate response from OpenAI
      const completion = await generateChatCompletion(chatMessages)

      if (!completion) {
        throw new Error("No completion generated")
      }

      // Check for function calls
      if (completion.function_call) {
        const diagramData = handleIntegrationDiagram(completion.function_call)
        
        // Add assistant message with diagram
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: completion.message.content || "",
            showDiagram: !!diagramData,
            diagramData: diagramData || undefined,
          },
        ])
      } else {
        // Add regular assistant message
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: completion.message.content || "",
          },
        ])
      }
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

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#002e88] text-white shadow-lg hover:bg-[#00e5e5] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-md rounded-xl bg-white shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between bg-[#002e88] p-4 text-white">
              <h3 className="font-semibold">{t.chatWithKyto}</h3>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-white/20 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
                  <MessageSquare className="mb-2 h-12 w-12 text-[#002e88]/30" />
                  <p className="mb-1 font-medium">{t.chatWelcomeTitle}</p>
                  <p className="text-sm">{t.chatWelcomeMessage}</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div key={index} className="mb-4">
                    <div
                      className={`flex max-w-[85%] rounded-lg p-3 ${
                        message.role === "user" ? "ml-auto bg-[#002e88] text-white" : "bg-gray-200 text-[#002e88]"
                      }`}
                    >
                      {message.content}
                    </div>

                    {/* Integration Diagram */}
                    {message.showDiagram && message.diagramData && (
                      <div className="mt-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
                        <p className="text-sm text-[#002e88] mb-3 font-medium">{message.diagramData.description}</p>
                        <IntegrationDiagram 
                          input={message.diagramData.input} 
                          output={message.diagramData.output} 
                        />
                      </div>
                    )}
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="border-t p-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.typeYourMessage}
                  className="flex-1 rounded-lg border border-gray-300 p-2 focus:border-[#002e88] focus:outline-none"
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading || !input.trim()} className="h-10 w-10 rounded-full p-0">
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* First Message Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="mb-4 text-xl font-bold text-[#002e88]">{t.welcomeToKyto}</h3>
              <p className="mb-6 text-[#002e88]/70">{t.welcomeModalMessage}</p>
              <div className="flex justify-end">
                <Button onClick={() => setShowModal(false)}>
                  {t.continue} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

