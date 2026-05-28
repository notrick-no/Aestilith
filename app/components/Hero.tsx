"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950 grain-overlay"
    >
      {/* Ambient gold glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,98,0.6) 0%, transparent 70%)",
          transform: "translate(var(--mx,0px), var(--my,0px))",
          transition: "transform 0.8s ease-out",
        }}
      />

      {/* Geometric accents */}
      <div className="absolute top-1/4 left-[8%] w-px h-32 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-[10%] w-24 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent hidden lg:block" />
      <div className="absolute top-[15%] right-[15%] w-16 h-16 border border-gold-500/10 rounded-full hidden lg:block" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Chinese name first — subtle */}
        <p className="font-cn text-sm font-light tracking-[0.3em] text-gold-500 mb-6 opacity-0 animate-[fadeUp_1s_ease-out_0.2s_forwards]">
          潮汐基石企业管理咨询
        </p>

        {/* Brand name — massive */}
        <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-[0.04em] text-warm-white mb-8 opacity-0 animate-[fadeUp_1s_ease-out_0.4s_forwards]">
          astilith
        </h1>

        {/* Gold divider */}
        <div className="gold-line max-w-[200px] mx-auto mb-8 opacity-0 animate-[fadeUp_1s_ease-out_0.6s_forwards]" />

        {/* Tagline */}
        <p className="font-body text-lg sm:text-xl font-light tracking-[0.03em] text-warm-white/60 mb-4 opacity-0 animate-[fadeUp_1s_ease-out_0.8s_forwards]">
          Strategic Management Consulting
        </p>
        <p className="font-cn text-base font-light tracking-[0.05em] text-warm-white/40 mb-12 opacity-0 animate-[fadeUp_1s_ease-out_1s_forwards]">
          以洞察驱动战略，以结构塑造未来
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeUp_1s_ease-out_1.2s_forwards]">
          <a
            href="#services"
            className="group inline-flex items-center gap-3 px-8 py-3.5 border border-gold-500/40 text-gold-400 font-body text-sm font-medium tracking-[0.06em] uppercase hover:bg-gold-500/10 hover:border-gold-500/60 transition-all duration-500"
          >
            Explore Our Services
            <span className="font-cn text-xs font-light tracking-widest text-gold-500/60 group-hover:text-gold-400 transition-colors">
              探索服务
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeUp_1s_ease-out_1.6s_forwards]">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-warm-white/25">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-500/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
