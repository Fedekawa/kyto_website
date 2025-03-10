import type { ChatCompletionMessageParam } from "openai/resources/chat/completions"

// Define function types
export type DiagramData = {
  input: string
  output: string
  description: string
}

// Define available functions
export const functions = [
  {
    name: "generate_integration_diagram",
    description: "Generate a diagram showing how two systems integrate through Kyto",
    parameters: {
      type: "object",
      properties: {
        input: {
          type: "string",
          description: "The input system or data source (e.g., WhatsApp, Email, Excel)",
        },
        output: {
          type: "string",
          description: "The output system or destination (e.g., CRM, Database, Analytics)",
        },
        description: {
          type: "string",
          description: "A brief description of what this integration does",
        },
      },
      required: ["input", "output", "description"],
    },
  },
]

// System prompt for the chat
export const SYSTEM_PROMPT = `You are Kyto's AI assistant, designed to help potential customers understand Kyto's services.

Key points about Kyto:
- Specializes in rapid AI implementation for businesses
- Delivers solutions in days, not months
- Focuses on document processing, AI agents, and process automation
- Makes AI accessible and affordable for businesses of all sizes

Guidelines:
1. Keep responses concise (under 120 words)
2. Be friendly and professional
3. Focus on practical benefits and quick implementation
4. When discussing integrations, use the generate_integration_diagram function
5. Highlight Kyto's fast deployment and cost-effectiveness

For integration questions:
- Explain the process clearly
- Use real-world examples
- Show how Kyto simplifies complex workflows`

// Helper function to generate chat completion
export async function generateChatCompletion(
  messages: ChatCompletionMessageParam[],
  shouldUseFunctions = true
) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    })

    if (!response.ok) {
      throw new Error("Failed to generate chat completion")
    }

    return await response.json()
  } catch (error) {
    console.error("Error generating chat completion:", error)
    throw error
  }
}

// Function to handle integration diagram generation
export function handleIntegrationDiagram(
  functionCall: any
): DiagramData | null {
  try {
    if (functionCall.name === "generate_integration_diagram") {
      const args = JSON.parse(functionCall.arguments)
      return {
        input: args.input,
        output: args.output,
        description: args.description,
      }
    }
    return null
  } catch (error) {
    console.error("Error handling integration diagram:", error)
    return null
  }
} 