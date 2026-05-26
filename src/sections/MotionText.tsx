'use client'

import { motion } from 'framer-motion'

export default function MotionText() {
  return (
    <section className="relative bg-black py-60 overflow-hidden flex items-center justify-center">

      {/* TOP FADE MERGE */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* BOTTOM FADE MERGE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* MOVING LIGHT */}
      <motion.div
        animate={{
          x: ['-20%', '120%'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 w-[40%] h-full bg-white/5 blur-3xl rotate-12"
      />

      {/* MAIN TEXT */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 120,
          scale: 0.8,
          rotateX: 40,
          filter: 'blur(20px)',
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          filter: 'blur(0px)',
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          text-[14vw]
          font-black
          whitespace-nowrap
          leading-none
          tracking-[-0.08em]
          text-white
          select-none
        "
      >

        {/* OUTLINE LAYER */}
        <span
          className="absolute inset-0 text-transparent opacity-20"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.4)',
          }}
        >
          COSANOSTRA
        </span>

        {/* MAIN TEXT */}
        <motion.span
          animate={{
            textShadow: [
              '0 0 10px rgba(255,255,255,0.15)',
              '0 0 30px rgba(255,255,255,0.35)',
              '0 0 10px rgba(255,255,255,0.15)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative z-10 inline-block"
        >
          COSANOSTRA
        </motion.span>

        {/* SHIMMER */}
        <motion.div
          animate={{
            x: ['-120%', '120%'],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          }}
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            skew-x-12
            blur-md
            mix-blend-screen
          "
        />

      </motion.h2>
    </section>
  )
}