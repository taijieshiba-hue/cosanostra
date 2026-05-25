'use client'

import { motion } from 'framer-motion'

interface IntroProps {
  onEnter: () => void
}

export default function Intro({ onEnter }: IntroProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
    >

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-8xl font-bold tracking-tight"
        >
          COSANOSTRA
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="mt-10 border border-white px-8 py-4 uppercase tracking-[6px] text-white"
        >
          Click To Continue
        </motion.button>

      </div>

    </motion.div>
  )
}