'use client'

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'
import {
  FaDiscord,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
  FaHeart,
} from 'react-icons/fa'

const mainStaff = [
  { name: 'nine', role: 'Founder', avatar: '/images/sasuke.jpg', color: 'bg-green-400' },
  { name: 'crixxus', role: 'Chairman', avatar: '/images/crix.png', color: 'bg-green-400' },
  { name: 'sam', role: 'Area Handler', avatar: '/images/sam.png', color: 'bg-yellow-400' },
  { name: 'kaii', role: 'Area Handler', avatar: '/images/kai.png', color: 'bg-red-400' },
]

const otherMembers = [
  { name: 'aquarius', role: 'Admin', avatar: '/images/aqua.png' },
  { name: 'jiro', role: 'Admin', avatar: '/images/jiro.png' },
  { name: 'lau', role: 'Hall of Fame', avatar: '/images/lau.png' },
  { name: 'sica', role: 'Hall of Fame', avatar: '/images/sica.png' },
  { name: 'elie', role: 'Hall of Fame', avatar: '/images/elie.png' },
  { name: 'nadia', role: 'Hall of Fame', avatar: '/images/nadia.png' },
  { name: 'mik', role: 'Hall of Fame', avatar: '/images/mik.png' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  const offsetRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const fireflyRafRef = useRef<number | null>(null)

  const [selected, setSelected] = useState<any>(null)
  const [paused, setPaused] = useState(false)

  // 🎵 MUSIC STATES
  const [musicPaused, setMusicPaused] = useState(false)
  const [muted, setMuted] = useState(false)

  // ❤️ LIKE STATES
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(128)

  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, 80])

  // =========================
  // ❤️ LOAD SAVED HEART DATA
  // =========================
  useEffect(() => {
    const savedLikes = localStorage.getItem('cosanostra_likes')
    const savedLiked = localStorage.getItem('cosanostra_liked')

    if (savedLikes) {
      setLikes(Number(savedLikes))
    }

    if (savedLiked) {
      setLiked(savedLiked === 'true')
    }
  }, [])

  // =========================
  // 🔥 STABLE FIREFLY POSITIONS
  // =========================
  const fireflyPositions = useMemo(
    () =>
      [...Array(40)].map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        floatX: (Math.random() - 0.5) * 30,
        floatY: (Math.random() - 0.5) * 30,
        speed: 0.2 + Math.random() * 0.3,
      })),
    []
  )

  // =========================
  // 🔥 SLOW MOVING FIREFLIES
  // =========================
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const wrappers = Array.from(
      container.querySelectorAll('.firefly-wrapper')
    ) as HTMLElement[]

    const fireflies = Array.from(
      container.querySelectorAll('.firefly')
    ) as HTMLElement[]

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const animate = () => {
      const time = Date.now() * 0.001

      wrappers.forEach((wrapper, i) => {
        const data = fireflyPositions[i]

        const floatMoveX =
          Math.sin(time * data.speed + i) * data.floatX

        const floatMoveY =
          Math.cos(time * data.speed + i) * data.floatY

        wrapper.style.transform = `translate(${floatMoveX}px, ${floatMoveY}px)`
      })

      fireflies.forEach((f) => {
        const rect = f.getBoundingClientRect()

        const x = rect.left + rect.width / 2
        const y = rect.top + rect.height / 2

        const dx = mouseX - x
        const dy = mouseY - y

        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 180) {
          const angle = Math.atan2(dy, dx)
          const strength = (180 - distance) / 180

          const moveX = -Math.cos(angle) * 40 * strength
          const moveY = -Math.sin(angle) * 40 * strength

          f.style.transform = `translate(${moveX}px, ${moveY}px)`
          f.style.opacity = `${0.2 + strength}`
        } else {
          f.style.transform = `translate(0px, 0px)`
          f.style.opacity = '1'
        }
      })

      fireflyRafRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)

      if (fireflyRafRef.current) {
        cancelAnimationFrame(fireflyRafRef.current)
      }
    }
  }, [fireflyPositions])

  // =========================
  // 🔥 STABLE MARQUEE
  // =========================
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const speed = 0.6

    const loop = () => {
      if (!paused) {
        offsetRef.current += speed

        const max = el.scrollWidth / 2

        if (offsetRef.current >= max) {
          offsetRef.current = 0
        }

        el.style.transform = `translateX(-${offsetRef.current}px)`
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [paused])

  // =========================
  // 🎵 MUSIC CONTROLS
  // =========================
  const togglePause = () => {
    if (!audioRef.current) return

    if (musicPaused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }

    setMusicPaused(!musicPaused)
  }

  const toggleMute = () => {
    if (!audioRef.current) return

    audioRef.current.muted = !muted
    setMuted(!muted)
  }

  // =========================
  // ❤️ LIKE BUTTON
  // =========================
  const toggleLike = () => {
    let updatedLikes = likes

    if (liked) {
      updatedLikes = likes - 1
      setLikes(updatedLikes)
    } else {
      updatedLikes = likes + 1
      setLikes(updatedLikes)
    }

    const updatedLiked = !liked

    setLiked(updatedLiked)

    // SAVE TO LOCAL STORAGE
    localStorage.setItem('cosanostra_likes', updatedLikes.toString())
    localStorage.setItem('cosanostra_liked', updatedLiked.toString())
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <motion.img
        style={{ y: parallaxY }}
        src="/images/wao.gif"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="absolute inset-0 bg-black/70" />

      {/* FIREFLIES */}
      <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
        {fireflyPositions.map((pos, i) => (
          <span
            key={i}
            className="firefly-wrapper absolute"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
            }}
          >
            <span className="firefly block w-[3px] h-[3px] bg-white rounded-full blur-[1px]" />
          </span>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">

        <motion.h1 className="text-6xl md:text-[9rem] font-black uppercase">
          COSANOSTRA
        </motion.h1>

        <motion.p className="tracking-[8px] text-gray-400 text-sm mt-2">
          Global CosaNostra
        </motion.p>

        {/* MAIN STAFF */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {mainStaff.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              onClick={() => setSelected(item)}
              className="w-[170px] backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-5 text-center cursor-pointer"
            >
              <img
                src={item.avatar}
                className="w-20 h-20 mx-auto rounded-full object-cover border border-white/20"
              />

              <div className={`w-3 h-3 mx-auto mt-2 rounded-full ${item.color}`} />

              <h2 className="mt-3 text-sm font-semibold flex items-center justify-center gap-2">
                {item.name}
                <FaDiscord className="text-indigo-400" />
              </h2>

              <p className="text-xs text-gray-500">{item.role}</p>
            </motion.div>
          ))}
        </div>

        {/* MARQUEE */}
        <div
          className="mt-10 w-full flex justify-center overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="w-[850px] overflow-hidden">
            <div ref={trackRef} className="flex gap-4 w-max">
              {[...otherMembers, ...otherMembers].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelected(item)}
                  className="min-w-[140px] p-3 rounded-2xl bg-white/5 border border-white/10 text-center cursor-pointer hover:bg-white/10"
                >
                  <img
                    src={item.avatar}
                    className="w-10 h-10 mx-auto rounded-full mb-2 object-cover"
                  />

                  <p className="text-sm font-semibold">{item.name}</p>

                  <p className="text-xs text-gray-500">{item.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ❤️ HEART BUTTON */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={toggleLike}
          className="group flex items-center gap-3 px-5 py-3 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
        >
          <motion.div
            whileTap={{ scale: 1.3 }}
            animate={
              liked
                ? {
                    scale: [1, 1.25, 1],
                  }
                : {}
            }
            transition={{ duration: 0.4 }}
          >
            <FaHeart
              className={`text-lg transition ${
                liked ? 'text-red-500' : 'text-white'
              }`}
            />
          </motion.div>

          <span className="text-sm font-medium text-white">
            {likes}
          </span>
        </button>
      </motion.div>

      {/* 🎵 MUSIC PANEL */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <div className="w-[320px] backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-4 shadow-2xl">

          <div className="flex items-center gap-4">

            {/* COVER */}
            <motion.img
              animate={musicPaused ? {} : { rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: 'linear',
              }}
              src="/images/mosey.jpg"
              className="w-16 h-16 rounded-2xl object-cover border border-white/10"
            />

            {/* INFO */}
            <div className="flex-1 overflow-hidden">

              <h2 className="text-sm font-semibold truncate">
                Noticed
              </h2>

              <p className="text-xs text-gray-400 truncate">
                Lil Mosey
              </p>

              {/* CONTROLS */}
              <div className="flex items-center gap-3 mt-4">

                {/* PLAY / PAUSE */}
                <button
                  onClick={togglePause}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition"
                >
                  {musicPaused ? (
                    <FaPlay className="text-xs" />
                  ) : (
                    <FaPause className="text-xs" />
                  )}
                </button>

                {/* MUTE */}
                <button
                  onClick={toggleMute}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition"
                >
                  {muted ? (
                    <FaVolumeMute className="text-xs" />
                  ) : (
                    <FaVolumeUp className="text-xs" />
                  )}
                </button>

              </div>
            </div>

            {/* VISUALIZER */}
            <div className="flex items-end gap-[3px] h-10">
              {[12, 18, 9, 22].map((h, i) => (
                <motion.span
                  key={i}
                  animate={
                    musicPaused
                      ? { height: h }
                      : {
                          height: [h, h + 10, h - 4, h],
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 1 + i * 0.2,
                  }}
                  className="w-[3px] bg-white rounded-full"
                />
              ))}
            </div>
          </div>

          {/* AUDIO */}
          <audio ref={audioRef} autoPlay loop>
            <source src="/music/mosey.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.7, y: 80, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 80, opacity: 0 }}
              className="w-[320px] rounded-3xl bg-[#0f0f0f] border border-white/10 p-6 text-center"
            >
              <img
                src={selected.avatar}
                className="w-24 h-24 mx-auto rounded-full border border-white/20"
              />

              <h2 className="mt-4 text-xl font-bold flex items-center justify-center gap-2">
                {selected.name}
                <FaDiscord className="text-indigo-400" />
              </h2>

              <p className="text-gray-400 text-sm mt-1">{selected.role}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}