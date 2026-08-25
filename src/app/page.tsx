import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const profile = [
  {
    label: "Role",
    value: "Forward Deployed Engineer at a stealth company.",
  },
  {
    label: "Education",
    value: "Computer Science and Philosophy, NYU. Class of 2026, cum laude.",
  },
  {
    label: "Location",
    value: "New York and the Bay Area.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 pb-10 pt-2 text-white sm:px-6 md:-mt-12 md:pb-12 md:pt-0">
      <section className="mx-auto grid w-full max-w-5xl gap-8 md:min-h-[calc(100dvh-5rem)] md:grid-cols-[minmax(18rem,0.82fr)_minmax(22rem,1.18fr)] md:items-center md:gap-12">
        <div className="relative mx-auto w-full max-w-[220px] md:max-w-none">
          <Image
            src="/ben_img_4_website.JPG"
            alt="Ben Ronen"
            width={420}
            height={420}
            priority
            className="h-auto w-full rounded-md border border-white/15 object-cover shadow-2xl shadow-black/30"
          />
        </div>

        <div>
          <h1 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">Ben Ronen</h1>

          <dl className="mt-8 grid border-t border-zinc-200 sm:mt-10 sm:grid-cols-2">
            {profile.map((item, index) => (
              <div
                key={item.label}
                className={`border-b border-zinc-200 py-5 ${index % 2 === 0 ? "sm:pr-6" : "sm:border-l sm:pl-6"}`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{item.label}</dt>
                <dd className="mt-2 leading-relaxed text-zinc-600">{item.value}</dd>
              </div>
            ))}
            <div className="border-b border-zinc-200 py-5 sm:pr-6">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">Contact</dt>
              <dd className="mt-2">
                <a href="mailto:benronen100@gmail.com" className="text-blue-600 underline decoration-zinc-300 underline-offset-4 hover:decoration-current">
                  benronen100@gmail.com
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex items-center gap-5 text-zinc-500">
            <a href="https://x.com/bensronen" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="X">
              <FaXTwitter className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/bensronen/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://github.com/bensronen" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="GitHub">
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
