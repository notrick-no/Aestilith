"use client";

import { useEffect, useRef } from "react";

const advantages = [
  {
    en: "Deep Local Insight",
    cn: "深耕本土洞察",
    descEn:
      "We understand the Chinese business landscape intimately — regulatory dynamics, cultural nuance, and market rhythms that global firms often miss.",
    descCn:
      "深谙中国商业生态的底层逻辑——从政策走向到行业脉动，我们提供国际视野与本土智慧兼具的深度洞察。",
  },
  {
    en: "Global Methodology",
    cn: "国际化方法论",
    descEn:
      "Our frameworks draw from world-class consulting traditions while adapting to local context — rigorous, tested, and tailored, never off-the-shelf.",
    descCn:
      "融合全球顶尖咨询方法论与本土实践经验，每一套方案都经过精心打磨与定制，拒绝千篇一律的模板化交付。",
  },
  {
    en: "End-to-End Partnership",
    cn: "全周期陪伴",
    descEn:
      "We don't drop a deck and walk away. From strategy design through implementation support, we stay with you until results materialize.",
    descCn:
      "从战略设计到落地执行，我们全程陪伴。不是交完报告就离开，而是与您并肩直至成果显现。",
  },
  {
    en: "Measurable Impact",
    cn: "可量化成果",
    descEn:
      "We tie every engagement to concrete metrics — revenue growth, margin improvement, market share — because consulting without accountability is just advice.",
    descCn:
      "每一个项目都与具体指标挂钩——收入增长、利润率提升、市场占有率——没有可衡量结果的咨询只是空谈。",
  },
];

export default function Advantages() {
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
      id="advantages"
      className="relative py-32 lg:py-40 bg-warm-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-20">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-600 mb-4">
            Why astilith
          </p>
          <h2 className="font-cn text-3xl lg:text-4xl font-medium tracking-[0.04em] text-navy-900 mb-4">
            为什么选择我们
          </h2>
          <div className="gold-line-left" />
        </div>

        {/* Advantages list — alternating layout */}
        <div className="space-y-1">
          {advantages.map((a, i) => (
            <div
              key={a.en}
              className="reveal group grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 py-10 border-b border-navy-900/5 last:border-b-0 hover:bg-cream/50 transition-colors duration-500 px-4 -mx-4 rounded-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Left — title */}
              <div>
                <span className="font-display text-5xl font-semibold text-navy-900/6 group-hover:text-gold-500/15 transition-colors duration-500 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-body text-xl font-medium tracking-[0.03em] text-navy-900 mt-2">
                  {a.en}
                </h3>
                <p className="font-cn text-sm font-light tracking-[0.04em] text-gold-600 mt-1">
                  {a.cn}
                </p>
              </div>

              {/* Right — description */}
              <div className="space-y-3">
                <p className="font-cn text-sm font-light leading-relaxed text-navy-800/70">
                  {a.descCn}
                </p>
                <p className="font-body text-sm font-light leading-relaxed text-navy-800/45">
                  {a.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
