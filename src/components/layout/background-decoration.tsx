"use client"

import { motion } from "framer-motion"

interface BackgroundDecorationProps {
  className?: string
}

export function BackgroundDecoration({ className = "" }: BackgroundDecorationProps) {
  // Simplified background decoration with minimal visual elements
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          top: "10%",
          left: "5%",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          bottom: "10%",
          right: "5%",
        }}
      />
    </div>
  )
}

