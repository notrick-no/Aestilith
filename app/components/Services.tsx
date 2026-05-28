"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    en: "Strategic Planning",
    cn: "战略规划",
    descEn:
      "Define the north star. Align leadership, sharpen foresight, and build roadmaps that turn ambition into results.",
    descCn:
      "明确方向，凝聚共识。以前瞻视野与可执行路径，将愿景转化为可衡量的战略成果。",
  },
  {
    en: "Operational Excellence",
    cn: "运营卓越",
    descEn:
      "Build systems that scale. Process redesign and performance systems for efficiency without sacrificing agility.",
    descCn:
      "构建可扩展的运营体系。从流程再造到绩效管理，实现效率与敏捷的兼得。",
  },
  {
    en: "Digital Transformation",
    cn: "数字化转型",
    descEn:
      "Navigate the digital shift. Align technology, talent, and culture for the next era of your enterprise.",
    descCn:
      "引领数字化变革。在技术、人才与文化之间建立协同，为企业下一阶段增长奠基。",
  },
  {
    en: "Organization & Talent",
    cn: "组织与人才",
    descEn:
      "Unlock human potential. Design structures and leadership programs that foster resilience and innovation.",
    descCn:
      "释放人才潜力。通过组织设计与领导力发展，培育韧性、创新与可持续增长的文化土壤。",
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
              <p className="font-cn text-sm font-normal tracking-[0.04em] text-gold-500 mb-4">
                {s.cn}
              </p>

              <div className="w-8 h-px bg-gold-500/40 group-hover:w-16 transition-all duration-500 mb-5" />

              <p className="font-cn text-sm font-normal leading-relaxed text-warm-white/55 mb-3">
                {s.descCn}
              </p>
              <p className="font-body text-sm font-normal leading-relaxed text-warm-white/35">
                {s.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
