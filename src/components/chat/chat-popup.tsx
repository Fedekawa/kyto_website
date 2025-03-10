"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Loader2, Sparkles, RotateCcw } from "lucide-react"
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

interface ChatPopupProps {
  isOpen: boolean
  onClose: () => void
  initialMessage?: string
}

export function ChatPopup({ isOpen, onClose, initialMessage = "" }: ChatPopupProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState(initialMessage)
  const [isLoading, setIsLoading] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (initialMessage && messages.length === 0) {
      handleSendMessage()
    }
  }, [])

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault()

    if (!input.trim()) return

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

  const handleReset = async () => {
    setIsResetting(true)
    try {
      // Clear all messages
      setMessages([])
      setInput("")
      // Add a small delay to show the reset animation
      await new Promise(resolve => setTimeout(resolve, 500))
    } finally {
      setIsResetting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          >
            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ 
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 0.15
              }}
              className="relative w-[95%] max-w-3xl rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden font-sans"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[#002e88] to-[#1a4cad] p-6 text-white">
                <h3 className="text-xl font-semibold tracking-tight">{t.chatWithKyto}</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleReset}
                    disabled={messages.length === 0 || isResetting}
                    className="rounded-full p-2.5 hover:bg-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm bg-white/10"
                    title={language === "en" ? "Reset conversation" : "Reiniciar conversación"}
                  >
                    <RotateCcw className={`h-5 w-5 ${isResetting ? "animate-spin" : ""}`} />
                  </button>
                  <button 
                    onClick={onClose} 
                    className="rounded-full p-2.5 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm bg-white/10"
                    title={language === "en" ? "Close chat" : "Cerrar chat"}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-[70vh] overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
                {messages.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
                    <div className="rounded-full bg-gradient-to-br from-[#002e88]/5 to-[#1a4cad]/5 p-6">
                      <Sparkles className="h-16 w-16 text-[#002e88]/40" />
                    </div>
                    <p className="mt-6 mb-3 text-2xl font-medium text-[#002e88] tracking-tight">{t.chatWelcomeTitle}</p>
                    <p className="text-base text-[#002e88]/70 max-w-md leading-relaxed">{t.chatWelcomeMessage}</p>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div key={index} className="mb-6">
                      {/* Only show message bubble if there's content */}
                      {message.content && (
                        <div
                          className={`flex max-w-[85%] rounded-2xl p-4 shadow-sm ${
                            message.role === "user" 
                              ? "ml-auto bg-gradient-to-br from-[#002e88]/90 to-[#1a4cad]/90 text-white backdrop-blur-sm" 
                              : "bg-white shadow-md border border-gray-100 text-[#002e88]"
                          }`}
                        >
                          <div className="prose prose-sm leading-relaxed">
                            {message.content.split('\n').map((paragraph, i) => {
                              // Handle numbered lists
                              if (paragraph.match(/^\d+\./)) {
                                return (
                                  <p key={i} className="mb-2">
                                    {paragraph.split('**').map((part, j) => (
                                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                                    ))}
                                  </p>
                                );
                              }
                              // Handle regular paragraphs
                              return (
                                <p key={i} className="mb-2 last:mb-0">
                                  {paragraph.split('**').map((part, j) => (
                                    j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                                  ))}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Integration Diagram - make it match message width */}
                      {message.showDiagram && message.diagramData && (
                        <div className="mt-4 mb-6 max-w-[85%] bg-white rounded-2xl shadow-md border border-gray-100">
                          <p className="text-sm text-[#002e88] p-4 font-medium tracking-tight border-b border-gray-100">
                            {message.diagramData.description}
                          </p>
                          <div className="p-4">
                            <IntegrationDiagram 
                              input={message.diagramData.input} 
                              output={message.diagramData.output} 
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="border-t border-gray-100 p-6 bg-white">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t.typeYourMessage}
                    className="flex-1 rounded-xl border border-gray-200 p-4 text-base focus:border-[#002e88] focus:outline-none focus:ring-2 focus:ring-[#002e88]/10 transition-all duration-200"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading || !input.trim()} 
                    className="h-14 w-14 rounded-xl p-0 bg-gradient-to-br from-[#002e88] to-[#1a4cad] hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
                  >
                    {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : <Send className="h-6 w-6" />}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

