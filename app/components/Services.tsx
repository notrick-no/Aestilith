"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    en: "Strategic Planning",
    cn: "战略规划",
    descEn:
      "Define your north star. We facilitate executive alignment, market foresight, and actionable roadmaps that turn ambition into measurable outcomes.",
    descCn:
      "明确战略方向，凝聚核心共识。我们协助企业高管团队进行市场前瞻分析与可执行路线图设计，将愿景转化为可衡量的成果。",
  },
  {
    en: "Operational Excellence",
    cn: "运营卓越",
    descEn:
      "Build systems that scale. From process redesign to performance management, we help organizations achieve efficiency without sacrificing agility.",
    descCn:
      "构建可扩展的运营体系。从流程再造到绩效管理，帮助组织在提升效率的同时保持敏捷与韧性。",
  },
  {
    en: "Digital Transformation",
    cn: "数字化转型",
    descEn:
      "Navigate the digital frontier. We guide enterprises through technology-enabled change — aligning tools, talent, and culture for the next era.",
    descCn:
      "引领数字化前沿。我们在技术驱动的变革中为企业导航，实现工具、人才与文化的三位一体协同进化。",
  },
  {
    en: "Organization & Talent",
    cn: "组织与人才",
    descEn:
      "Unlock human potential. We design org structures, leadership programs, and talent strategies that foster resilience, innovation, and sustainable growth.",
    descCn:
      "释放人才潜力。通过组织架构设计、领导力发展与人才战略，培育韧性、创新力与可持续增长的文化基因。",
  },
];

export default function Services() {
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
      id="services"
      className="relative py-32 lg:py-40 bg-navy-900 grain-overlay overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-12 right-[5%] w-32 h-32 border border-gold-500/5 rounded-full hidden lg:block" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="reveal text-center mb-20">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">
            Core Services
          </p>
          <h2 className="font-cn text-3xl lg:text-4xl font-medium tracking-[0.04em] text-warm-white mb-4">
            核心服务
          </h2>
          <div className="gold-line max-w-[120px] mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px bg-navy-700/30">
          {services.map((s, i) => (
            <div
              key={s.en}
              className="reveal group relative bg-navy-800 p-10 lg:p-14 transition-colors duration-500 hover:bg-navy-800/80"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <span className="absolute top-6 right-8 font-display text-6xl font-semibold text-navy-700/40 group-hover:text-gold-500/10 transition-colors duration-500 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="font-body text-xl font-medium tracking-[0.03em] text-warm-white mb-1">
                {s.en}
              </h3>
              <p className="font-cn text-sm font-light tracking-[0.04em] text-gold-500 mb-5">
                {s.cn}
              </p>

              {/* Gold accent on hover */}
              <div className="w-8 h-px bg-gold-500/40 group-hover:w-16 transition-all duration-500 mb-5" />

              <p className="font-cn text-sm font-light leading-relaxed text-warm-white/55 mb-3">
                {s.descCn}
              </p>
              <p className="font-body text-sm font-light leading-relaxed text-warm-white/35">
                {s.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
