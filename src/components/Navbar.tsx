'use client'

import { motion } from 'framer-motion'
import { FaDiscord, FaCode } from 'react-icons/fa'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl border-b border-white/10" />

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10 pointer-events-none" />

      {/* Animated Shine */}
      <motion.div
        animate={{
          x: ['-120%', '220%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 w-32 h-full bg-white/5 skew-x-12 blur-xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 text-white">

        {/* Logo */}
        <motion.h1
          whileHover={{
            scale: 1.04,
            textShadow: '0px 0px 12px rgba(255,255,255,0.7)',
          }}
          className="
            font-black
            text-sm sm:text-lg md:text-2xl
            tracking-[0.25em] sm:tracking-[0.35em]
            cursor-pointer
            select-none
            whitespace-nowrap
            relative
          "
        >
          COSANOSTRA

          {/* Small Glow Dot */}
          <motion.span
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(255,0,0,0.9)]"
          />
        </motion.h1>

        {/* Navigation */}
        <ul
          className="
            flex items-center
            gap-3 sm:gap-5 md:gap-7
            uppercase
            text-[9px] sm:text-xs md:text-sm
            font-medium
          "
        >

          {/* Hall Of Fame */}
          <motion.li whileHover={{ y: -2 }}>
            <a
              href="https://www.tiktok.com/@aintnine"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative group
                transition-all duration-300
                hover:text-white
                whitespace-nowrap
                text-gray-300
              "
            >
              Hall Of Fame

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.li>

          {/* Developer */}
          <motion.li whileHover={{ y: -2 }}>
            <a
              href="https://discord.gg/GFZZtQUFCR"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden sm:flex
                items-center gap-2
                relative group
                transition-all duration-300
                hover:text-white
                whitespace-nowrap
                text-gray-300
              "
            >

              {/* Icon Glow */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
              >
                <FaCode className="text-[11px] sm:text-sm text-red-400" />
              </motion.div>

              Want A Custom Website?

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.li>

          {/* Discord */}
          <motion.li whileHover={{ y: -2 }}>
            <a
              href="https://discord.gg/nCGexUsTVf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1 sm:gap-2
                relative group
                transition-all duration-300
                hover:text-white
                whitespace-nowrap
                text-gray-300
              "
            >
              <motion.div
                animate={{
                  y: [0, -1.5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <FaDiscord className="text-sm sm:text-base text-indigo-400" />
              </motion.div>

              Discord

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.li>

        </ul>
      </div>

      {/* Bottom Glow Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </motion.nav>
  )
}