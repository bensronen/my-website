import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f5] text-black px-6 pt-2 md:pt-0 md:-mt-12 md:pb-12 pb-10 flex flex-col items-center justify-start md:justify-center gap-10 relative">


      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12">
        <Image
          src="/ben_img_4_website.JPG"
          alt="Ben Ronen"
          width={420}
          height={420}
          className="w-60 sm:w-80 md:w-[420px] rounded-2xl shadow-sm h-auto"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Ben Ronen</h1>

          <p className="mt-5 text-lg md:text-xl leading-relaxed max-w-[34ch] md:max-w-[40ch] mx-auto md:mx-0 font-medium">
            I&apos;m interested in how people think, how software and AI can extend human cognition,
            and the responsibilities that come with that.
          </p>

          <div className="mt-4 space-y-2 text-sm md:text-base text-zinc-600">
            <p>Fourth year undergraduate studying Computer Science and Philosophy at NYU.</p>
            <p>Based in NYC and the Bay Area.</p>
            <p>You can contact me at benronen100@gmail.com</p>
            <p>
              <a href="/resume" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                View my Resume
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </p>
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
