import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the directory where posts are stored
const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export type Post = {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        description?: string;
        subtitle?: string;
        author?: string;
        [key: string]: unknown;
    };
    content: string;
};

// Get all posts sorted by date
export function getAllPosts(): Post[] {
    // Create directory if it doesn't exist to prevent errors on fresh install
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

    const allPosts = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const { data, content } = matter(fileContents);

            return {
                slug,
                frontmatter: data as Post['frontmatter'],
                content,
            };
        });

    // Sort posts by date (newest first)
    return allPosts.sort((a, b) => {
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
}

// Get a single post by slug
export function getPostBySlug(slug: string): Post | null {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data as Post['frontmatter'],
        content,
    };
}
