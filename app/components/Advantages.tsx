"use client";

import { useEffect, useRef } from "react";

const team = [
  {
    name: "Linzy",
    role: "Founding Partner",
    cn: "联合创始人",
  },
  {
    name: "Chen",
    role: "Founding Partner",
    cn: "联合创始人",
  },
];

export default function Team() {
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
      id="team"
      className="relative py-32 lg:py-40 bg-warm-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal text-center mb-20">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-600 mb-4">
            Team
          </p>
          <h2 className="font-cn text-3xl lg:text-4xl font-medium tracking-[0.04em] text-navy-900 mb-4">
            团队
          </h2>
          <p className="font-body text-sm font-normal tracking-[0.03em] text-navy-700/40">
            Professional, Sincere and Dedicated
          </p>
          <div className="gold-line max-w-[100px] mx-auto mt-6" />
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 max-w-lg mx-auto gap-6">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="reveal text-center py-8 px-4 hover:bg-cream/50 transition-colors duration-500 rounded-sm"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h4 className="font-body text-base font-medium tracking-[0.03em] text-navy-900">
                {m.name}
              </h4>
              <p className="font-cn text-xs font-normal text-gold-600 mt-1">
                {m.cn}
              </p>
              <p className="font-body text-xs font-normal text-navy-700/40 mt-0.5">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
