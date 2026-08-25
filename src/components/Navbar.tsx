'use client';

import Link from 'next/link';
import Image from 'next/image';
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
        backgroundColor: 'rgba(5, 6, 10, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(27, 27, 24, 0.4)',
    };

    return (
        <nav
            style={navStyle}
            className="px-4 py-3 sm:px-6 md:py-4 flex justify-center items-center md:grid md:grid-cols-[minmax(40px,1fr)_auto_minmax(40px,1fr)]"
        >

            {/* Left Column: Logo */}
            <div className="hidden md:flex justify-self-start">
                <Link
                    href="/"
                    style={{ display: 'block', opacity: 0.9 }}
                    className="hover:opacity-100 transition-opacity"
                >
                    <Image
                        src="/logo.png"
                        alt="BR"
                        width={32}
                        height={32}
                        className="invert"
                        style={{ height: '32px', width: 'auto', display: 'block' }}
                    />
                </Link>
            </div>

            {/* Center Column: Navigation Links */}
            <div className="flex items-center justify-center gap-2.5 text-[13px] font-medium sm:gap-4 sm:text-[14px] md:gap-8 md:text-sm md:justify-self-center">
                <NavLink href="/" label="Home" active={isActive('/')} />
                <span className="text-zinc-300 select-none">/</span>
                <NavLink href="/projects" label="Projects" active={isActive('/projects')} />
                <span className="text-zinc-300 select-none">/</span>
                <NavLink href="/writing" label="Writing" active={isActive('/writing')} />
                <span className="text-zinc-300 select-none">/</span>
                <NavLink href="/resume" label="Resume" active={isActive('/resume')} />
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
