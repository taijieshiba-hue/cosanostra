'use client'

import { motion } from 'framer-motion'

export default function MotionText() {
  return (
    <section className="bg-black py-60 overflow-hidden">

      <motion.h2
        initial={{ x: '-100%' }}
        whileInView={{ x: 0 }}
        transition={{ duration: 4 }}
        className="text-[14vw] font-bold whitespace-nowrap text-white leading-none"
      >
       COSANOSTRA
      </motion.h2>

    </section>
  )
}