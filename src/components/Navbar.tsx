'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 text-white backdrop-blur-md">

      {/* Logo */}
      <h1 className="font-bold text-xl tracking-[0.3em] cursor-pointer">
        COSANOSTRA
      </h1>

      {/* Navigation */}
      <ul className="flex items-center gap-8 uppercase text-sm font-medium">

        {/* Hall Of Fame */}
        <li>
          <a
            href="https://www.tiktok.com/@aintnine"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-gray-300"
          >
            Hall Of Fame
          </a>
        </li>

        {/* Discord Server */}
        <li>
          <a
            href="https://discord.gg/nCGexUsTVf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-gray-300"
          >
            Discord Server
          </a>
        </li>

      </ul>

    </nav>
  )
}