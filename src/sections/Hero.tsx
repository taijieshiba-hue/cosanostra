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
  FaTiktok,
} from 'react-icons/fa'

const mainStaff = [
  {
    name: 'nine',
    role: 'Founder',
    avatar: '/images/sasuke.jpg',
    banner: '/images/ninebanner.gif',
    color: 'bg-green-400',
    tiktokUrl: 'https://www.tiktok.com/@aintnine',
    description:
      'Founder of Global CosaNostra on Bloxfruit. Strategic, respected, and highly active within the organization.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-green-400',
  },

  {
    name: 'crixxus',
    role: 'Chairman',
    avatar: '/images/crix.png',
    banner: '/images/crixbanner.gif',
    color: 'bg-green-400',
    tiktokUrl: 'https://tiktok.com/',
    description:
      'Chairman of the Crew. Oversees internal operations and management.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-green-400',
  },

  {
    name: 'sam',
    role: 'Area Handler',
    avatar: '/images/sam.png',
    banner: '/images/sambanner.gif',
    color: 'bg-yellow-400',
    tiktokUrl: 'https://www.tiktok.com/@cosa_sam',
    description:
      'Responsible for coordinating members and maintaining activity.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-yellow-400',
  },

  {
    name: 'kaii',
    role: 'Area Handler',
    avatar: '/images/kai.png',
    banner: '/images/kaibanner.gif',
    color: 'bg-red-400',
    tiktokUrl: 'https://www.tiktok.com/@jisatsu.e',
    description:
      'Handles operations and supports Crew Management.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-red-400',
  },
]

const otherMembers = [
  {
    name: 'aquarius',
    role: 'Admin',
    avatar: '/images/aqua.png',

    description:
      'Trusted administrator of the community.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-green-400',
  },

  {
    name: 'jiro',
    role: 'Admin',
    avatar: '/images/jiro.png',

    description:
      'Experienced administrator and active member.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-green-400',
  },

  {
    name: 'lau',
    role: 'Hall of Fame',
    avatar: '/images/lau.png',

    description:
      'Recognized Hall of Fame.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-yellow-400',
  },

  {
    name: 'sica',
    role: 'Hall of Fame',
    avatar: '/images/sica.png',

    description:
      'Recognized Hall of Fame.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-yellow-400',
  },

  {
    name: 'elie',
    role: 'Hall of Fame',
    avatar: '/images/elie.png',

    description:
      'Known for loyalty and contributions.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-yellow-400',
  },

  {
    name: 'nadia',
    role: 'Hall of Fame',
    avatar: '/images/nadia.png',

    description:
      'Dedicated and highly respected member.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-yellow-400',
  },

  {
    name: 'mik',
    role: 'Hall of Fame',
    avatar: '/images/mik.png',

    description:
      'Recognized Hall of Fame.',
    discordUrl: 'https://discord.gg/GFZZtQUFCR',
    profileUrl: 'https://discord.gg/GFZZtQUFCR',
    statusColor: 'bg-yellow-400',
  },
]

const eliteMembers = [
  {
    name: 'unknown',
    role: 'none',
    avatar: '/images/unk.png',

    description:
      'Elite unit member of Global CosaNostra.',
    discordUrl: 'https://discord.com/users/131313131313131313',
    profileUrl: 'https://yourwebsite.com/reign',
    statusColor: 'bg-red-400',
  },

  {
    name: 'unknown',
    role: 'none',
    avatar: '/images/unk.png',

    description:
      'Highly skilled and respected elite member.',
    discordUrl: 'https://discord.com/users/141414141414141414',
    profileUrl: 'https://yourwebsite.com/vex',
    statusColor: 'bg-red-400',
  },

  {
    name: 'unknown',
    role: 'none',
    avatar: '/images/unk.png',

    description:
      'Elite operative with strong reputation.',
    discordUrl: 'https://discord.com/users/151515151515151515',
    profileUrl: 'https://yourwebsite.com/akira',
    statusColor: 'bg-red-400',
  },

  {
    name: 'unknown',
    role: 'none',
    avatar: '/images/unk.png',

    description:
      'Recognized for skill and dedication.',
    discordUrl: 'https://discord.com/users/161616161616161616',
    profileUrl: 'https://yourwebsite.com/zane',
    statusColor: 'bg-red-400',
  },

  {
    name: 'unknown',
    role: 'none',
    avatar: '/images/unk.png',

    description:
      'Elite division member with strong leadership.',
    discordUrl: 'https://discord.com/users/171717171717171717',
    profileUrl: 'https://yourwebsite.com/nova',
    statusColor: 'bg-red-400',
  },
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-10">

        <motion.h1 className="text-4xl sm:text-5xl md:text-[9rem] font-black uppercase text-center leading-none">
          COSANOSTRA
        </motion.h1>

        <motion.p className="tracking-[4px] sm:tracking-[8px] text-gray-400 text-xs sm:text-sm mt-2 text-center">
          Global CosaNostra
        </motion.p>

 {/* MAIN STAFF */}
<div className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 px-2">
  {mainStaff.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: i * 0.1,
        duration: 0.5,
      }}
      whileHover={{
        y: -12,
        scale: 1.05,
      }}
      onClick={() => setSelected(item)}
      className="group relative w-[140px] sm:w-[180px] overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 text-center cursor-pointer"
    >

      {/* GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
      </div>

      {/* SHINE EFFECT */}
      <motion.div
        initial={{ x: '-120%' }}
        whileHover={{ x: '220%' }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-20 h-full bg-white/10 skew-x-12 blur-xl"
      />

      {/* AVATAR */}
      <div className="relative w-fit mx-auto">
        <motion.img
          whileHover={{
            scale: 1.08,
            rotate: 2,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          src={item.avatar}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/20 shadow-2xl"
        />

        {/* ONLINE DOT */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-black ${item.color}`}
        />
      </div>

      {/* NAME */}
      <motion.h2
        whileHover={{ scale: 1.05 }}
        className="mt-4 text-sm font-semibold flex items-center justify-center gap-2"
      >
        {item.name}
        <FaDiscord className="text-indigo-400" />
      </motion.h2>

      {/* ROLE */}
      <p className="text-xs text-gray-400 mt-1 tracking-wide">
        {item.role}
      </p>

      {/* BOTTOM LINE */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '60%' }}
        transition={{ duration: 0.3 }}
        className="h-[2px] bg-white/30 mx-auto mt-4 rounded-full"
      />
    </motion.div>
  ))}
</div>
        {/* FIRST MARQUEE */}
        <div
          className="mt-10 w-full flex justify-center overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="w-full max-w-[850px] overflow-hidden px-2">
            <div ref={trackRef} className="flex gap-4 w-max">
              {[...otherMembers, ...otherMembers].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelected(item)}
                  className="min-w-[110px] sm:min-w-[140px] p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/10 text-center cursor-pointer hover:bg-white/10"
                >
                  <img
                    src={item.avatar}
                    className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full mb-2 object-cover"
                  />

                  <p className="text-sm font-semibold">{item.name}</p>

                  <p className="text-xs text-gray-500">{item.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SECOND LOOPING LINE */}
        <div className="mt-3 w-full overflow-hidden flex justify-center">
          <div className="w-full max-w-[850px] overflow-hidden px-2">
            <motion.div
              animate={{
                x: [0, -900],
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: 'linear',
              }}
              className="flex gap-4 w-max"
            >
              {[...eliteMembers, ...eliteMembers, ...eliteMembers].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  onClick={() => setSelected(item)}
                  className="min-w-[110px] sm:min-w-[140px] p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/10 text-center cursor-pointer hover:bg-white/10"
                >
                  <img
                    src={item.avatar}
                    className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full mb-2 object-cover"
                  />

                  <p className="text-sm font-semibold">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ❤️ HEART BUTTON */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <button
          onClick={toggleLike}
          className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
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
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50"
      >
        <div className="w-[260px] sm:w-[320px] backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-4 shadow-2xl">

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
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl object-cover border border-white/10"
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-2xl overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
      />

      {/* CARD */}
      <motion.div
        initial={{
          scale: 0.7,
          opacity: 0,
          y: 100,
          rotateX: 20,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        exit={{
          scale: 0.7,
          opacity: 0,
          y: 100,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 14,
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-[92%] max-w-[420px] overflow-hidden rounded-[35px] border border-white/10 bg-[#080808]/90 backdrop-blur-3xl shadow-[0_0_100px_rgba(255,255,255,0.08)]"
      >

        {/* ANIMATED BORDER */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-20 blur-2xl"
          style={{
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.4), transparent, rgba(255,255,255,0.3))',
            backgroundSize: '200% 200%',
          }}
        />

        {/* BANNER */}
        <div className="relative h-[140px] sm:h-[170px] overflow-hidden">

          <motion.img
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
            }}
            src={selected.banner || '/images/wao.gif'}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#080808]" />

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
            className="absolute top-0 left-0 w-32 h-full bg-white/10 skew-x-12 blur-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="relative px-7 pb-7">

          {/* AVATAR */}
          <div className="relative w-fit mx-auto -mt-16">

            {/* GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute inset-0 rounded-full bg-white/20 blur-3xl"
            />

            {/* OUTER RING */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: 'linear',
              }}
              className="absolute inset-[-10px] rounded-full border border-white/20"
            />

            {/* IMAGE */}
            <motion.img
              whileHover={{
                scale: 1.05,
              }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              src={selected.avatar}
              className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-[3px] border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            />

            {/* STATUS */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className={`absolute bottom-3 right-3 w-5 h-5 rounded-full border-4 border-[#080808] ${selected.statusColor}`}
            />
          </div>

          {/* NAME */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-2xl sm:text-3xl font-black tracking-wide flex items-center justify-center gap-3"
          >
            {selected.name}

            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <FaDiscord className="text-indigo-400 text-xl" />
            </motion.div>
          </motion.h2>

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm mt-2 tracking-[3px] uppercase text-center"
          >
            {selected.role}
          </motion.p>

          {/* DIVIDER */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '70%' }}
            transition={{ delay: 0.4 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-6"
          />

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-300 leading-relaxed mt-6 text-center"
          >
            {selected.description}
          </motion.p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-7">

            {/* PROFILE */}
            <motion.a
              href={selected.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-5 py-3 rounded-2xl bg-white text-black text-sm font-semibold inline-flex items-center justify-center shadow-xl"
            >
              Profile
            </motion.a>

            {/* DISCORD */}
            <motion.a
              href={selected.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center"
            >
              <FaDiscord className="text-indigo-400 text-lg" />
            </motion.a>

            {/* TIKTOK */}
            <motion.a
              href={selected.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center"
            >
              <FaTiktok className="text-white text-lg" />
            </motion.a>

          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  )
}