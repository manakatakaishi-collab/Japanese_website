'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { withBasePath } from '@/lib/base-path';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const normalizePath = (path: string | null) => {
    if (!path) return '/';

    const base = withBasePath('/');
    let normalized = path;

    if (base !== '/' && normalized.startsWith(base)) {
      normalized = normalized.slice(base.length - 1) || '/';
    }

    if (normalized.length > 1 && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }

    return normalized || '/';
  };

  const currentPath = normalizePath(pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Lessons & Fees', href: '/lessons' },
  ];

  return (
    <header className={`sticky top-0 z-[100] transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md border-gray-100 py-3 shadow-sm' : 'bg-white/85 backdrop-blur-sm border-gray-50 py-3'}`}>
      <div className="site-content site-x flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group text-left">
          {/* Custom Dual-Flag Logo */}
          <div className="relative flex items-center w-14 h-10 group-hover:scale-105 transition-transform duration-300">
            {/* French Flag (Bottom/Left) */}
            <div className="absolute left-0 w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden flex z-0 bg-slate-100">
              <div className="w-1/3 h-full bg-[#002395]"></div>
              <div className="w-1/3 h-full bg-white"></div>
              <div className="w-1/3 h-full bg-[#ED2939]"></div>
            </div>
            {/* Japanese Flag (Top/Right) */}
            <div className="absolute right-0 w-8 h-8 rounded-full border-2 border-white shadow-lg bg-white flex items-center justify-center overflow-hidden z-10 translate-x-1">
              <div className="w-4 h-4 bg-[#BC002D] rounded-full"></div>
            </div>
          </div>

          <h2 className="text-xl font-extrabold leading-tight tracking-tighter font-display uppercase text-slate-900 ml-1">
            Manaka<span className="text-primary">.</span>
          </h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`text-sm font-bold uppercase tracking-wider transition-all border-b-2 py-1 ${currentPath === item.href ? 'text-primary border-primary' : 'text-slate-500 border-transparent hover:text-primary'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/booking"
            className={`btn-lift hidden sm:block text-xs font-black uppercase tracking-[0.2em] px-6 py-3 rounded-none transition-all duration-300 ${currentPath === '/booking' ? 'bg-slate-900 text-white' : 'bg-primary text-white hover:bg-slate-900'}`}
          >
            Contact Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-900"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8 space-y-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black uppercase tracking-tighter text-left ${currentPath === item.href ? 'text-primary' : 'text-slate-900'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setIsMenuOpen(false)}
            className={`text-4xl font-black uppercase tracking-tighter text-left ${currentPath === '/booking' ? 'text-primary' : 'text-slate-900'}`}
          >
            Contact Me
          </Link>

          <div className="pt-12 border-t border-slate-100">
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">Get in touch</p>
            <p className="text-slate-900 font-bold">contact@manaka-japanese.fr</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
