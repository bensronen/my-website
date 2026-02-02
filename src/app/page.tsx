export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFAF2] text-black flex flex-col items-center justify-center px-6 gap-12 relative">
      <div className="absolute bottom-8 right-8">
        <img src="/logo.png" alt="BR Logo" className="w-16" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <img src="/ben_img_4_website.JPG" alt="Ben Ronen" className="w-64 md:w-128 rounded-lg" />
        <div className="text-center md:text-left max-w-xl leading-[1.8]">
          <h1 className="text-3xl font-bold">Ben Ronen</h1>
          <p>Fourth year undergraduate student at NYU studying Computer Science & Philosophy</p>
          <p>Based in NYC and the Bay Area</p>
        </div>
      </div>

      {/* <nav className="flex gap-4 text-zinc-500 font-medium">
        <a href="/" className="hover:text-black transition-colors">Home</a>
        <span>/</span>
        <a href="/now" className="hover:text-black transition-colors">Now</a>
        <span>/</span>
        <a href="/projects" className="hover:text-black transition-colors">Projects</a>
        <span>/</span>
        <a href="/writing" className="hover:text-black transition-colors">Writing</a>
      </nav> */}
    </main>
  )
}
