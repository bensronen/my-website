'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    // Simplified inline styles (only for sticky/blur/border, layout moved to className)
    const navStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(250, 249, 245, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(228, 228, 231, 0.4)',
    };

    return (
        <nav
            style={navStyle}
            className="px-6 md:px-6 py-2 md:py-4 flex justify-center items-center md:grid md:grid-cols-[minmax(40px,1fr)_auto_minmax(40px,1fr)]"
        >

            {/* Left Column: Logo */}
            <div className="hidden md:flex justify-self-start">
                <Link
                    href="/"
                    style={{ display: 'block', opacity: 0.9 }}
                    className="hover:opacity-100 transition-opacity"
                >
                    <img
                        src="/logo.png"
                        alt="BR"
                        style={{ height: '32px', width: 'auto', display: 'block' }}
                    />
                </Link>
            </div>

            {/* Center Column: Navigation Links */}
            <div className="flex items-center justify-center gap-4 md:gap-8 font-medium text-[14px] md:text-sm md:justify-self-center">
                <NavLink href="/" label="Home" active={isActive('/')} />
                <span className="text-zinc-300 select-none">/</span>
                <NavLink href="/now" label="Now" active={isActive('/now')} />
                <span className="text-zinc-300 select-none">/</span>
                <NavLink href="/projects" label="Projects" active={isActive('/projects')} />
                <span className="text-zinc-300 select-none">/</span>
                <NavLink href="/writing" label="Writing" active={isActive('/writing')} />
            </div>

            {/* Right Column: Empty spacer to balance the grid */}
            <div />

        </nav>
    );
}

function NavLink({ href, label, active }: { href: string, label: string, active: boolean }) {
    return (
        <Link
            href={href}
            className={`transition-colors duration-200 cursor-pointer no-underline ${active
                ? 'text-black font-semibold'
                : 'text-zinc-500 hover:text-zinc-700'
                }`}
        >
            {label}
        </Link>
    );
}
