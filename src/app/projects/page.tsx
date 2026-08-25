import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Ben Ronen.",
};

type Project = {
  title: string;
  status: string;
  description: string;
  stack?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Relay",
    status: "Building",
    description: "Claude Code for email. More soon.",
  },
  {
    title: "LocalRun",
    status: "Building",
    description:
      "A running-route app for learning a city on foot. Pick a start, distance, route shape, and what you want to see. LocalRun builds routes through parks, waterfronts, landmarks, and neighborhoods.",
    stack: "React Native / Expo / Mapbox",
    link: "https://github.com/bensronen/LocalRun",
  },
  {
    title: "NapPing",
    status: "Prototype",
    description:
      "A macOS app that watches a camera feed, detects sustained eye closure, and sends a notification when someone falls asleep.",
    stack: "Swift / AVFoundation / Vision",
    link: "https://github.com/bensronen/NapPing",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-4 pt-4 pb-12 sm:px-6 sm:pb-16">
      <div className="mx-auto w-full max-w-xl">
        <header className="mb-10 text-center sm:mb-16">
          <h1 className="mb-2 text-3xl font-bold">Projects</h1>
          <p>What I&apos;ve built.</p>
        </header>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border-b border-zinc-200 pb-8 last:border-0"
            >
              <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-xl font-semibold">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 transition-all hover:decoration-zinc-800"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                <span className="font-mono w-fit border-b border-zinc-300 pb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {project.status}
                </span>
              </div>
              <p className="leading-relaxed text-zinc-600">{project.description}</p>
              {project.stack && (
                <p className="font-mono mt-3 text-sm text-zinc-400">{project.stack}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
