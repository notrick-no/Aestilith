"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = el.querySelectorAll(".reveal");
    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 lg:py-40 bg-navy-950 grain-overlay overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-gold-500/5 rounded-tl-[80px] hidden lg:block" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="reveal text-center mb-16">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">
            Contact Us
          </p>
          <h2 className="font-cn text-3xl lg:text-4xl font-medium tracking-[0.04em] text-warm-white mb-4">
            联系我们
          </h2>
          <p className="font-body text-sm font-normal tracking-[0.03em] text-warm-white/30">
            Welcome to reach us through the following ways
          </p>
          <div className="gold-line max-w-[100px] mx-auto mt-6" />
        </div>

        {/* Contact info boxes */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="reveal bg-navy-900/50 border border-navy-700/30 p-8 text-center hover:border-gold-500/20 transition-colors duration-500">
            <p className="font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-4">
              E-mail
            </p>
            <p className="font-body text-sm font-normal text-warm-white/60">
              contact@aestilith.com
            </p>
          </div>

          <div
            className="reveal bg-navy-900/50 border border-navy-700/30 p-8 text-center hover:border-gold-500/20 transition-colors duration-500"
            style={{ transitionDelay: "100ms" }}
          >
            <p className="font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-4">
              Telephone
            </p>
            <p className="font-body text-sm font-normal text-warm-white/60">
              +86 400-XXX-XXXX
            </p>
          </div>

          <div
            className="reveal bg-navy-900/50 border border-navy-700/30 p-8 text-center hover:border-gold-500/20 transition-colors duration-500"
            style={{ transitionDelay: "200ms" }}
          >
            <p className="font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-4">
              Address
            </p>
            <p className="font-cn text-sm font-normal text-warm-white/50">
              中国 · 上海
            </p>
            <p className="font-body text-xs font-normal text-warm-white/30 mt-1">
              Shanghai, China
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
