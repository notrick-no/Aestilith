"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#about", en: "About", cn: "关于我们" },
  { href: "#services", en: "Services", cn: "核心服务" },
  { href: "#team", en: "Team", cn: "团队" },
  { href: "#contact", en: "Contact", cn: "联系我们" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,169,98,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
          >
            <Image
              src="/logo.png"
              alt="Aestilith"
              width={40}
              height={40}
              className="shrink-0"
              priority
            />
            <span className="font-display text-2xl font-semibold tracking-[0.08em] text-warm-white">
              Aestilith
            </span>
            <span className="font-cn text-sm font-light tracking-widest text-gold-500">
              潮汐基石
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative font-body text-sm font-normal tracking-[0.05em] text-warm-white/70 hover:text-gold-400 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.en}
                <span className="ml-1.5 text-xs text-muted hidden lg:inline">
                  {l.cn}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-warm-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-warm-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-warm-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-80 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2 border-t border-navy-700">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-cn text-base font-light text-warm-white/70 hover:text-gold-400 transition-colors"
              >
                {l.cn}
                <span className="ml-2 text-xs text-muted font-body">
                  {l.en}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
