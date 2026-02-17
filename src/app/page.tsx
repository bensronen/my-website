import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFAF2] text-black px-6 pt-2 md:pt-0 md:-mt-12 md:pb-12 pb-10 flex flex-col items-center justify-start md:justify-center gap-10 relative">


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

          <div className="mt-4 space-y-2 text-sm md:text-base text-zinc-600">
            <p>Fourth year undergraduate studying Computer Science and Philosophy at NYU.</p>
            <p>Based in NYC and the Bay Area.</p>
            <p>You can contact me at benronen100@gmail.com</p>
          </div>

          <div className="mt-6 flex items-center gap-6 text-zinc-600">
            <a
              href="https://x.com/bensronen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-black transition-colors"
              aria-label="X"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/bensronen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/bensronen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>


    </main>
  )
}
