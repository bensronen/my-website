import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Writing",
    description: "Essays and thoughts by Ben Ronen."
};

export default function Writing() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen flex flex-col items-center px-6 pt-4 md:pt-4 pb-16 gap-12 relative">

            <div className="w-full max-w-xl space-y-12">
                <div className="text-center max-w-xl mb-16">
                    <h1 className="text-3xl font-bold mb-2">Writing</h1>
                    <p>Essays and thoughts.</p>
                </div>
            </div>

            <div className="w-full max-w-xl space-y-8">
                {posts.map((post) => (
                    <article key={post.slug} className="group">
                        <Link href={`/writing/${post.slug}`} className="block">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-xl font-semibold group-hover:text-zinc-600 transition-colors">
                                    {post.frontmatter.title}
                                </h2>
                                <div className="text-sm text-zinc-400">
                                    <time>{new Date(post.frontmatter.date).toLocaleDateString()}</time>
                                </div>
                                {post.frontmatter.description && (
                                    <p className="text-zinc-600 mt-2">
                                        {post.frontmatter.description}
                                    </p>
                                )}
                            </div>
                        </Link>
                    </article>
                ))}

                {posts.length === 0 && (
                    <div className="text-center text-zinc-500 italic">
                        No posts yet. Check back soon!
                    </div>
                )}
            </div>

        </main >
    );
}