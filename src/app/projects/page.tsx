import Link from "next/link";
import { prisma } from "@/lib/prisma";

import { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
    title: "Projects",
    description: "A collection of my work and projects."
};

export default async function Projects() {
    const projects = await prisma.projectUpdate.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (
        <main className="min-h-screen flex flex-col items-center px-6 pt-4 md:pt-4 pb-16 gap-12 relative">


            <div className="w-full max-w-xl space-y-12">
                <div className="text-center max-w-xl mb-16">
                    <h1 className="text-3xl font-bold mb-2">Projects</h1>
                    <p>A collection of my work.</p>
                </div>
            </div>

            <div className="w-full max-w-xl space-y-8">
                {projects.map((project) => (
                    <div key={project.id} className="border-b border-zinc-200 pb-8 last:border-0 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-8 gap-y-2 mb-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold">
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-800 transition-all"
                                        >
                                            {project.title}
                                        </a>
                                    ) : (
                                        project.title
                                    )}
                                </h2>
                                <p className="text-zinc-600">{project.description}</p>
                            </div>
                            <div className="flex flex-col items-start md:items-end text-sm text-zinc-400">
                                <span className="uppercase tracking-wider">{project.type}</span>
                                <time>{new Date(project.createdAt).toLocaleDateString()}</time>
                            </div>
                        </div>
                    </div>
                ))}

                {projects.length === 0 && (
                    <div className="text-center text-zinc-500 italic">
                        No projects found. Check back later!
                    </div>
                )}
            </div>


        </main>
    )
}