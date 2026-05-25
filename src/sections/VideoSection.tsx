export default function VideoSection() {
  return (
    <section className="relative h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/w.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex items-center justify-center h-full">

        <h2 className="text-5xl md:text-8xl font-bold text-white text-center">
          WORLDWIDE MOVEMENT
        </h2>

      </div>

    </section>
  )
}