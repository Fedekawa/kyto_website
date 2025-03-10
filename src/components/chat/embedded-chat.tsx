"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Loader2 } from "lucide-react"
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

export function EmbeddedChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

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

  return (
    <div className="mx-auto max-w-4xl p-4">
      {/* Chat Messages */}
      <div className="mb-4 h-[600px] overflow-y-auto rounded-lg border bg-gray-50 p-4">
        {messages.map((message, index) => (
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
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.typeYourMessage}
          className="flex-1 rounded-lg border border-gray-300 p-2 focus:border-[#002e88] focus:outline-none"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !input.trim()}>
          {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        </Button>
      </form>
    </div>
  )
}

