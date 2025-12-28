'use client';

import * as React from 'react';
import Link from 'next/link';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > 50 && previous <= 50) {
            setIsScrolled(true);
        } else if (latest <= 50 && previous > 50) {
            setIsScrolled(false);
        }
    });

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-[var(--color-primary)] text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                        {/* Simple Logo Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M8 21v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                    </div>
                    <span className={cn(
                        "text-xl font-bold tracking-tight transition-colors",
                        isScrolled ? "text-slate-900" : "text-white"
                    )}>
                        Apartmen360
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Sewa', 'Jual', 'Properti Baru', 'Blog'].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-[var(--color-secondary)]",
                                isScrolled ? "text-slate-600" : "text-white/90"
                            )}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Search Icon Mobile */}
                    <button className={cn("md:hidden p-2 rounded-full hover:bg-white/10", isScrolled ? "text-slate-900" : "text-white")}>
                        <Search size={20} />
                    </button>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="ghost" className={cn(isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/20")}>
                            Masuk
                        </Button>
                        <Button variant={isScrolled ? "primary" : "secondary"} size="sm">
                            Daftar
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className={cn("md:hidden p-2 rounded-full hover:bg-white/10", isScrolled ? "text-slate-900" : "text-white")}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}
