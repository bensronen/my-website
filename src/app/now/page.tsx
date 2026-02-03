import Link from "next/link";

export default function Now() {
    return (
        <main className="min-h-dvh flex flex-col items-center justify-center px-6 gap-12 relative">
            <div className="absolute top-4 right-4">
                <Link href="/">
                    <img src="/logo.png" alt="BR Logo" className="w-12" />
                </Link>
            </div>
            <div className="text-center max-w-xl">
                <h1 className="text-3xl font-bold">Building...</h1>
                <p>Check back soon for updates!</p>
            </div>
            <nav className="flex gap-4 text-zinc-500 font-medium">
                <a href="/" className="hover:text-zinc-700 transition-colors">Home</a>
                <span>/</span>
                <a href="/now" className="text-black hover:font-bold transition-colors">Now</a>
                <span>/</span>
                <a href="/projects" className="hover:text-zinc-700 transition-colors">Projects</a>
                <span>/</span>
                <a href="/writing" className="hover:text-zinc-700 transition-colors">Writing</a>
            </nav>
        </main>
    )
}