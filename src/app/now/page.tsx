import { prisma } from "../../lib/prisma";

import { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
    title: "Now",
    description: "What I'm up to right now."
};

export default async function Now() {
    const updates = await prisma.nowUpdate.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return (

        <main className="relative flex min-h-screen flex-col items-center gap-8 px-4 pt-4 pb-12 sm:gap-12 sm:px-6 sm:pb-16 md:pt-4">


            <div className="w-full max-w-xl space-y-12">
                <div className="text-center max-w-xl mb-6 sm:mb-16">
                    <h1 className="text-3xl font-bold mb-2">Now</h1>
                    <p>What I&apos;m up to.</p>
                </div>
            </div>


            <div className="w-full max-w-5xl flex flex-col gap-8 text-left items-start sm:gap-12 md:flex-row">
                {/* Reading */}
                <section className="flex-1 w-full">
                    <h2 className="font-bold text-xl mb-4">Reading</h2>
                    {updates.filter((update) => update.category === "READING").map((update) => (
                        <div key={update.id} className="border-l-2 border-zinc-200 pl-4 py-1">
                            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                                <time dateTime={update.createdAt.toISOString()}>
                                    {update.createdAt.toLocaleDateString()}
                                </time>
                            </div>
                            <p className="text-zinc-800 leading-relaxed">{update.content}</p>
                        </div>
                    ))}
                </section>

                {/* Thinking */}
                <section className="flex-1 w-full">
                    <h2 className="font-bold text-xl mb-4">Thinking</h2>
                    {updates.filter((update) => update.category === "THINKING").map((update) => (
                        <div key={update.id} className="border-l-2 border-zinc-200 pl-4 py-1">
                            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                                <time dateTime={update.createdAt.toISOString()}>
                                    {update.createdAt.toLocaleDateString()}
                                </time>
                            </div>
                            <p className="text-zinc-800 leading-relaxed">{update.content}</p>
                        </div>
                    ))}
                </section>

                {/* Working On / Doing */}
                <section className="flex-1 w-full">
                    <h2 className="font-bold text-xl mb-4">Doing</h2>
                    {updates.filter((update) => update.category === "DOING").map((update) => (
                        <div key={update.id} className="border-l-2 border-zinc-200 pl-4 py-1">
                            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                                <time dateTime={update.createdAt.toISOString()}>
                                    {update.createdAt.toLocaleDateString()}
                                </time>
                            </div>
                            <p className="text-zinc-800 leading-relaxed">{update.content}</p>
                        </div>
                    ))}
                </section>
                {updates.length === 0 && (
                    <p className="text-center text-zinc-500">No updates yet.</p>
                )}
            </div>

        </main>
    )
}
