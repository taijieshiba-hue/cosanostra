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
      className="
        fixed inset-0 z-[999]
        bg-black
        overflow-hidden
        flex items-center justify-center
      "
    >

      {/* BACKGROUND */}
      <motion.img
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        src="/images/wao.gif"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-30
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* GLOW */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          w-[300px] sm:w-[500px]
          h-[300px] sm:h-[500px]
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4">

        {/* TOP TEXT */}
        <motion.p
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            text-[9px] sm:text-xs
            uppercase
            tracking-[6px] sm:tracking-[12px]
            text-gray-500
            mb-4
          "
        >
          GLOBAL ORGANIZATION
        </motion.p>

        {/* TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            relative
            text-[2.7rem]
            sm:text-6xl
            md:text-[8rem]
            font-black
            uppercase
            leading-none
            tracking-tight
          "
        >

          {/* SHINE TEXT */}
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
              drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]
            "
          >
            COSANOSTRA
          </motion.span>

        </motion.h1>

        {/* SUBTITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="
            mt-4
            flex items-center justify-center gap-3
          "
        >

          <div className="w-8 sm:w-16 h-[1px] bg-white/20" />

          <p
            className="
              text-[10px] sm:text-sm
              uppercase
              tracking-[4px] sm:tracking-[10px]
              text-gray-300
              whitespace-nowrap
            "
          >
            Global CosaNostra
          </p>

          <div className="w-8 sm:w-16 h-[1px] bg-white/20" />

        </motion.div>

        {/* BUTTON */}
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={onEnter}
          className="
            group
            relative
            overflow-hidden
            mt-10
            px-8 sm:px-10
            py-4
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            text-white
            uppercase
            tracking-[4px] sm:tracking-[6px]
            text-xs sm:text-sm
            transition
          "
        >

          {/* BUTTON GLOW */}
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
              absolute inset-0
              bg-white/10
            "
          />

          {/* SHINE */}
          <motion.div
            animate={{
              x: ['-120%', '220%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'linear',
            }}
            className="
              absolute top-0 left-0
              w-20 h-full
              bg-white/10
              skew-x-12
              blur-xl
            "
          />

          <span className="relative z-10">
            Click To Continue
          </span>

        </motion.button>

      </div>

    </motion.div>
  )
}