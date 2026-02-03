import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#FBFAF2] text-black px-6 py-10 flex flex-col items-center justify-center gap-10 relative">
      <div className="absolute top-4 right-4">
        <Link href="/">
          <img src="/logo.png" alt="BR Logo" className="w-12" />
        </Link>
      </div>

      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12">
        <img
          src="/ben_img_4_website.JPG"
          alt="Ben Ronen"
          className="w-60 sm:w-80 md:w-[420px] rounded-2xl shadow-sm"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Ben Ronen</h1>

          <p className="mt-5 text-lg md:text-xl leading-relaxed max-w-[34ch] md:max-w-[40ch] mx-auto md:mx-0 font-medium">
            I'm interested in how people think, how software and AI can extend human cognition,
            and the responsibilities that come with that.
          </p>

          <div className="mt-6 space-y-2 text-sm md:text-base text-zinc-600">
            <p>Fourth year undergraduate studying Computer Science and Philosophy at NYU.</p>
            <p>Based in NYC and the Bay Area.</p>
          </div>
        </div>
      </section>

      <nav className="flex gap-4 text-zinc-500 font-medium">
        <a href="/" className="text-black hover:font-bold transition-colors">Home</a>
        <span>/</span>
        <a href="/now" className="hover:text-zinc-700 transition-colors">Now</a>
        <span>/</span>
        <a href="/projects" className="hover:text-zinc-700 transition-colors">Projects</a>
        <span>/</span>
        <a href="/writing" className="hover:text-zinc-700 transition-colors">Writing</a>
      </nav>
    </main>
  )
}
