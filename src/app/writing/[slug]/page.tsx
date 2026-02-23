import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.frontmatter.title,
        description: post.frontmatter.description || `Read ${post.frontmatter.title} on Ben Ronen's blog.`,
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description || `Read ${post.frontmatter.title} on Ben Ronen's blog.`,
            type: 'article',
            publishedTime: new Date(post.frontmatter.date).toISOString(),
            authors: ['Ben Ronen'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.frontmatter.title,
            description: post.frontmatter.description || `Read ${post.frontmatter.title} on Ben Ronen's blog.`,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen md:min-h-0 md:h-[calc(100dvh-5rem)] md:overflow-y-auto flex flex-col items-center px-6 pt-4 md:pt-4 pb-16 gap-12 relative">
            <article className="w-full max-w-xl prose prose-zinc prose-headings:font-bold prose-h1:text-3xl prose-a:text-black prose-a:no-underline hover:prose-a:underline">

                {/* Back Link */}
                <div className="mb-10">
                    <Link href="/writing" className="text-zinc-500 hover:text-black transition-colors no-underline">
                        ← Back
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-16 text-center">
                    <h1 className="mb-2">{post.frontmatter.title}</h1>
                    {post.frontmatter.subtitle && (
                        <h3 className="mt-0 mb-4 text-xl font-medium text-zinc-600">{post.frontmatter.subtitle}</h3>
                    )}
                    <time className="text-zinc-400 text-sm block">
                        {new Date(post.frontmatter.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </header>

                {/* Content */}
                <MDXRemote source={post.content} />

                {/* Back Link */}
                <div className="h-16" />
                <div className="pt-8 border-t border-zinc-200">
                    <Link href="/writing" className="text-zinc-500 hover:text-black transition-colors no-underline">
                        ← Back to Writing
                    </Link>
                </div>

            </article>
        </main>
    );
}
