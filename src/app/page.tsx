'use client'

import { useState } from 'react'

import Navbar from '@/components/Navbar'
import Intro from '@/components/Intro'

import Hero from '@/sections/Hero'
import Gallery from '@/sections/Gallery'
import MotionText from '@/sections/MotionText'
import Footer from '@/components/Footer'


export default function Home() {
  const [entered, setEntered] = useState(false)

  return (
    <main className="bg-black text-white overflow-hidden">

      {!entered && (
        <Intro onEnter={() => setEntered(true)} />
      )}

      {entered && (
        <>
          <Navbar />
          <Hero />
          <Gallery />
          <MotionText />
          <Footer />
        </>
      )}

    </main>
  )
}