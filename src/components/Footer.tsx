'use client'

import { motion } from 'framer-motion'
import { FaCrown } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-52 sm:w-72 h-52 sm:h-72 bg-white/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-44 sm:w-60 h-44 sm:h-60 bg-white/5 blur-[90px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20 z-10">

        <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >

            {/* LOGO */}
            <motion.h2
              whileHover={{
                textShadow: '0 0 15px rgba(255,255,255,0.35)',
              }}
              className="
                text-2xl
                sm:text-4xl
                md:text-5xl
                font-black
                tracking-[0.18em]
                sm:tracking-[0.25em]
                uppercase
                leading-tight
                break-words
              "
            >
              COSANOSTRA
            </motion.h2>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 110 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-[1px] bg-white/30 mt-5"
            />

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="
                text-gray-400
                mt-5
                text-[10px]
                sm:text-sm
                md:text-base
                tracking-[0.2em]
                sm:tracking-[0.3em]
                uppercase
              "
            >
              Global CosaNostra
            </motion.p>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
              className="
                text-white/30
                text-xs
                sm:text-sm
                mt-4
                leading-relaxed
                max-w-md
              "
            >
              Built with precision, loyalty, and cinematic design.
              Elevating the digital presence of Global CosaNostra.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              flex
              flex-col
              justify-end
              items-start md:items-end
            "
          >

            {/* DEVELOPER CARD */}
            <motion.div
              whileHover={{
                scale: 1.03,
                borderColor: 'rgba(255,255,255,0.25)',
                boxShadow: '0 0 30px rgba(255,255,255,0.06)',
              }}
              className="
                group
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                px-5 sm:px-6
                py-4
                rounded-2xl
                transition-all duration-300
                w-full sm:w-auto
              "
            >
              <div className="flex items-center gap-3">

                {/* ICON */}
                <div className="
                  w-10 h-10
                  rounded-full
                  bg-white/10
                  flex items-center justify-center
                  group-hover:bg-white/20
                  transition-all duration-300
                ">
                  <FaCrown className="text-sm text-white/80" />
                </div>

                {/* TEXT */}
                <div>
                  <p className="
                    text-[10px]
                    sm:text-xs
                    text-gray-500
                    uppercase
                    tracking-[0.22em]
                  ">
                    Developer
                  </p>

                  <h3 className="
                    text-base
                    sm:text-lg
                    font-semibold
                    tracking-wide
                  ">
                    Nine
                  </h3>
                </div>

              </div>
            </motion.div>

            {/* COPYRIGHT */}
            <p className="
              text-white/20
              text-[10px]
              sm:text-xs
              mt-6
              tracking-[0.18em]
              sm:tracking-[0.25em]
              uppercase
              text-left md:text-right
            ">
              © 2020 Global CosaNostra
            </p>

          </motion.div>

        </div>

      </div>

    </footer>
  )
}