"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface IntegrationDiagramProps {
  input: string
  output: string
}

export function IntegrationDiagram({ input, output }: IntegrationDiagramProps) {
  return (
    <div className="flex items-center justify-between py-4">
      {/* Input */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex h-16 w-32 items-center justify-center rounded-lg bg-[#002e88]/10 text-center font-medium text-[#002e88]"
      >
        {input}
      </motion.div>

      {/* Flow Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-col items-center"
      >
        <ArrowRight className="h-6 w-6 text-[#00e5e5]" />
        <div className="mt-1 text-xs font-medium text-[#002e88]/70">Kyto</div>
      </motion.div>

      {/* Output */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex h-16 w-32 items-center justify-center rounded-lg bg-[#00e5e5]/10 text-center font-medium text-[#002e88]"
      >
        {output}
      </motion.div>
    </div>
  )
}

