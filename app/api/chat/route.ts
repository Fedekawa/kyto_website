import { OpenAI } from "openai"
import { functions, SYSTEM_PROMPT } from "@/lib/openai"
import { NextResponse } from "next/server"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
})

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      functions,
      temperature: 0.7,
      max_tokens: 500,
      store: true
    })

    const choice = response.choices[0]
    return NextResponse.json({
      message: choice.message,
      function_call: choice.message.function_call,
    })
  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    )
  }
} 