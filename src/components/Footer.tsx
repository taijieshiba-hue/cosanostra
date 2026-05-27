'use client'

import { motion } from 'framer-motion'
import {
  FaCrown,
  FaDiscord,
  FaCode,
  FaHeart,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* MAIN GLOW */}
        <motion.div
          animate={{
            opacity: [0.06, 0.14, 0.06],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-white/10 blur-[130px] rounded-full"
        />

        {/* SHINE */}
        <motion.div
          animate={{
            x: ['-120%', '220%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'linear',
          }}
          className="absolute top-0 left-0 w-32 h-full bg-white/5 skew-x-12 blur-xl"
        />

      </div>

      {/* CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-12 z-10">

        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >

            {/* TOP LABEL */}
            <div className="flex items-center gap-2 mb-3">

              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(255,0,0,0.8)]"
              />

              <p className="text-[9px] uppercase tracking-[4px] text-gray-500">
                Worldwide Community
              </p>

            </div>

            {/* LOGO */}
            <motion.h2
              whileHover={{
                textShadow: '0 0 20px rgba(255,255,255,0.25)',
              }}
              className="
                relative
                text-3xl
                sm:text-5xl
                font-black
                tracking-[0.18em]
                uppercase
                inline-block
              "
            >

              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'linear',
                }}
                className="
                  bg-[linear-gradient(90deg,#ffffff,#9ca3af,#ffffff)]
                  bg-[length:200%_200%]
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_25px_rgba(255,255,255,0.12)]
                "
              >
                COSANOSTRA
              </motion.span>

              {/* RED DOT */}
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute -right-2 top-2 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_14px_rgba(255,0,0,0.8)]"
              />

            </motion.h2>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-[1px] bg-gradient-to-r from-white/40 to-transparent mt-4"
            />

            {/* SUBTEXT */}
            <p
              className="
                text-gray-400
                text-[10px]
                sm:text-xs
                tracking-[0.3em]
                uppercase
                mt-4
              "
            >
              Global CosaNostra
            </p>

            {/* DESCRIPTION */}
            <p
              className="
                text-white/35
                text-xs
                sm:text-sm
                mt-3
                leading-relaxed
                max-w-md
              "
            >
              Community built for everyone,
              Global CosaNostra community.
            </p>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              flex
              flex-col
              justify-end
              items-start lg:items-end
            "
          >

            {/* DEV CARD */}
            <motion.div
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(255,255,255,0.18)',
                boxShadow: '0 0 30px rgba(255,255,255,0.06)',
              }}
              className="
                relative
                overflow-hidden
                group
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                px-4 sm:px-5
                py-4
                rounded-[22px]
                transition-all duration-300
                w-full sm:w-[290px]
              "
            >

              {/* CARD GLOW */}
              <motion.div
                animate={{
                  opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="absolute -top-10 -left-10 w-28 h-28 bg-white/10 rounded-full blur-3xl"
              />

              <div className="relative flex items-center gap-3">

                {/* ICON */}
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="
                    w-11 h-11
                    rounded-2xl
                    bg-white/10
                    border border-white/10
                    flex items-center justify-center
                    flex-shrink-0
                  "
                >
                  <FaCrown className="text-sm text-white/90" />
                </motion.div>

                {/* TEXT */}
                <div className="flex-1 min-w-0">

                  <p className="
                    text-[9px]
                    text-gray-500
                    uppercase
                    tracking-[0.22em]
                  ">
                    Developer
                  </p>

                  <h3 className="
                    text-base
                    font-semibold
                    tracking-wide
                    mt-1
                    truncate
                  ">
                    Nine
                  </h3>

                  <p className="text-[10px] text-white/30 mt-1 truncate">
                    Founder
                  </p>

                </div>

                {/* ICONS */}
                <div className="flex flex-col gap-2">

                  <div className="w-7 h-7 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                    <FaDiscord className="text-indigo-400 text-[11px]" />
                  </div>

                  <div className="w-7 h-7 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                    <FaCode className="text-white text-[10px]" />
                  </div>

                </div>

              </div>

            </motion.div>

            {/* COPYRIGHT */}
            <div className="mt-5 text-left lg:text-right">

              <div className="flex items-center gap-2 justify-start lg:justify-end">

                <FaHeart className="text-[9px] text-red-500" />

                <p className="
                  text-white/20
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.18em]
                  uppercase
                ">
                  © 2020 Global CosaNostra
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    </footer>
  )
}