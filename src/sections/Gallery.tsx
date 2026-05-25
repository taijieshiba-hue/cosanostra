'use client'

import { motion } from 'framer-motion'

export default function Gallery() {
  return (
    <section className="bg-black text-white px-6 py-32">

      <div className="mb-16">
        <p className="uppercase tracking-[8px] text-gray-500">
          Gallery
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src="/images/c.png"
            className="w-full h-[600px] object-cover"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src="/images/wer.png"
            className="w-full h-[600px] object-cover"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src="/images/wert.png"
            className="w-full h-[600px] object-cover"
          />
        </motion.div>

      </div>

    </section>
  )
}