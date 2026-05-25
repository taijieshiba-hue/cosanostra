'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="bg-black text-white py-40 px-8">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >

        <p className="uppercase tracking-[8px] text-gray-500 mb-6">
          About
        </p>

        <h2 className="text-4xl md:text-7xl font-bold leading-tight">
          CosaNostra crew is built for all bloxfruit players who want to have a good fellowship and a solid association in the game Bloxfruit. The crew has more than 500 members and is led by Founder Nine, it also currently has 20 global divisions.
        </h2>

      </motion.div>

    </section>
  )
}