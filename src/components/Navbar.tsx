'use client'

import { motion } from 'framer-motion'
import { FaDiscord } from 'react-icons/fa'

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
          "
        >
          COSANOSTRA
        </motion.h1>

        {/* Navigation */}
        <ul
          className="
            flex items-center
            gap-4 sm:gap-6 md:gap-8
            uppercase
            text-[10px] sm:text-xs md:text-sm
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
              "
            >
              Hall Of Fame

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
              "
            >
              <FaDiscord className="text-sm sm:text-base" />
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