import { EmbeddedChat } from "@/components/chat/embedded-chat"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-primary">AI Process Automation Assistant</h1>
          <EmbeddedChat />
        </div>
      </div>
    </div>
  )
}

