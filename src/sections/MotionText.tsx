'use client'

import { motion } from 'framer-motion'

export default function MotionText() {
  return (
    <section className="relative bg-black py-32 sm:py-40 overflow-hidden flex items-center justify-center">

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* MAIN GLOW */}
        <motion.div
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[850px] h-[250px] sm:h-[400px] bg-white/10 blur-[120px] rounded-full"
        />

        {/* RED SIDE GLOW */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 sm:w-72 h-40 sm:h-72 bg-red-500/10 blur-[100px]" />

        {/* GRID */}
        <div
          className="
            absolute inset-0 opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

      </div>

      {/* MOVING LIGHT */}
      <motion.div
        animate={{
          x: ['-120%', '220%'],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 w-32 sm:w-52 h-full bg-white/5 blur-3xl skew-x-12"
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* SMALL LABEL */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 mb-5"
        >

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_14px_rgba(255,0,0,0.9)]"
          />

          <p className="text-[9px] sm:text-xs uppercase tracking-[5px] sm:tracking-[8px] text-gray-500">
            Global CosaNostra
          </p>

          <motion.div
            animate={{
              opacity: [1, 0.4, 1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="w-2 h-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]"
          />

        </motion.div>

        {/* MAIN TEXT */}
        <motion.h2
  initial={{
    opacity: 0,
    y: 80,
    scale: 0.85,
    filter: 'blur(15px)',
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1.6,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    relative
    text-[18vw]
    sm:text-[13vw]
    font-black
    uppercase
    leading-none
    tracking-[-0.05em]
    select-none
    text-center
    antialiased
    [text-rendering:geometricPrecision]
    isolate
  "
>
  {/* OUTLINE */}
  <span
    className="absolute inset-0 text-white/10"
    style={{
      WebkitTextStroke: '1px rgba(255,255,255,0.25)',
    }}
  >
    COSANOSTRA
  </span>

  {/* MAIN TEXT (solid first for stability) */}
  <span className="relative z-10 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.12)]">
    COSANOSTRA
  </span>

  {/* SHIMMER (moved BEHIND text to avoid cutting letters) */}
  <motion.div
    animate={{
      x: ['-120%', '120%'],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatDelay: 1,
      ease: 'easeInOut',
    }}
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
      skew-x-12
      blur-xl
      mix-blend-screen
      z-0
      pointer-events-none
    "
  />
</motion.h2>

        {/* BOTTOM TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="
            mt-4 sm:mt-5
            text-[10px] sm:text-sm
            uppercase
            tracking-[4px] sm:tracking-[10px]
            text-gray-400
            text-center
          "
        >
          Worldwide Community
        </motion.p>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '70%' }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 1.2,
          }}
          className="
            mt-5
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
          "
        />

      </div>

    </section>
  )
}