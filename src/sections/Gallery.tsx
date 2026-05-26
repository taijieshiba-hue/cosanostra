'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaExpand, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const images = [
  {
    src: '/images/c.png',
    title: 'Global Crew',
    desc: 'Good Community, No Toxic and No Discrimination.',
  },
  {
    src: '/images/wer.png',
    title: 'Hangout Crew',
    desc: 'Good Community, No Toxic and No Discrimination.',
  },
  {
    src: '/images/wert.png',
    title: 'Organize Crew',
    desc: 'Good Community, No Toxic and No Discrimination.',
  },
]

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <section className="relative bg-black text-white px-6 py-32 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full pointer-events-none" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 relative z-10"
      >
        <p className="uppercase tracking-[8px] text-gray-500 text-sm mb-3">
          Gallery
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
          Moments <span className="text-white/40">Captured</span>
        </h2>

        <div className="mt-6 w-24 h-[2px] bg-white/20" />
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

        {images.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.01,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(item)}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm cursor-pointer"
          >

            {/* IMAGE */}
            <motion.img
              src={item.src}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.7 }}
              className="w-full h-[500px] md:h-[650px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

            {/* HOVER LIGHT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/[0.03]" />

            {/* SHINE */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-[120%] top-0 h-full w-[50%] rotate-12 bg-white/10 blur-3xl group-hover:left-[150%] transition-all duration-1000" />
            </div>

            {/* FLOATING PARTICLE */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white/5 blur-2xl"
            />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-6 w-full">

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-sm text-white/50 mb-1 tracking-[3px] uppercase">
                    CosaNostra
                  </p>

                  <h3 className="text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/60 max-w-[250px]">
                    {item.desc}
                  </p>
                </div>

                <motion.div
                  whileHover={{
                    rotate: 25,
                    scale: 1.15,
                  }}
                  className="w-14 h-14 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                >
                  <FaExpand className="text-sm" />
                </motion.div>

              </div>

            </div>

            {/* BORDER */}
            <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-white/20 transition duration-500 pointer-events-none" />

          </motion.div>
        ))}

      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >

            {/* CLOSE */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center"
            >
              <FaTimes />
            </motion.button>

            {/* MODAL CARD */}
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                type: 'spring',
                damping: 18,
              }}
              className="relative max-w-6xl w-full"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-white/10 blur-[120px] rounded-full" />

              {/* IMAGE */}
              <motion.img
                src={selected.src}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-h-[85vh] object-cover rounded-3xl border border-white/10 shadow-2xl"
              />

              {/* INFO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/90 to-transparent rounded-b-3xl"
              >
                <p className="uppercase tracking-[5px] text-white/40 text-sm mb-2">
                  CosaNostra
                </p>

                <h2 className="text-3xl md:text-5xl font-semibold mb-3">
                  {selected.title}
                </h2>

                <p className="text-white/60 max-w-2xl">
                  {selected.desc}
                </p>
              </motion.div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}