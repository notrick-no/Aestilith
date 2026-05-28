"use client";

import { useEffect, useRef } from "react";

const boxes = [
  {
    en: "Philosophy",
    cn: "理念",
    descEn:
      "Long-term partnership, deep insight. We believe value is measured by time, not transactions.",
    descCn:
      "长期陪伴，深度洞察。以时间为尺，丈量价值。信守初心，行稳致远。",
  },
  {
    en: "Focus Areas",
    cn: "专注领域",
    descEn:
      "Strategic planning, operational excellence, organizational transformation, digital evolution.",
    descCn:
      "战略规划、运营优化、组织变革、数字化转型。覆盖消费、制造、科技、能源等核心赛道。",
  },
  {
    en: "Approach",
    cn: "方法论",
    descEn:
      "Global frameworks, local wisdom. Every solution is tailored — rigorous, tested, never off-the-shelf.",
    descCn:
      "国际视野，本土智慧。融合全球方法论与本土实践，每套方案皆为定制，拒绝模板化交付。",
  },
  {
    en: "Commitment",
    cn: "承诺",
    descEn:
      "We stay until results materialize. Strategy without execution is just a document.",
    descCn:
      "从战略设计到落地执行，全程陪伴。不交报告，交成果。",
  },
];

export default function About() {
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
      id="about"
      className="relative py-32 lg:py-40 bg-cream overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 gold-line opacity-30" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — company intro + name origin */}
          <div>
            <div className="reveal" style={{ transitionDelay: "0ms" }}>
              <div className="gold-line-left mb-8" />
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-600 mb-4">
                About Us
              </p>
              <h2 className="font-cn text-3xl lg:text-4xl font-medium tracking-[0.04em] text-navy-900 mb-6">
                关于潮汐基石
              </h2>
            </div>
            <div className="reveal space-y-5" style={{ transitionDelay: "100ms" }}>
              <p className="font-cn text-base font-normal leading-relaxed text-navy-800/80">
                <span className="font-medium text-navy-900">
                  Aestilith（潮汐基石）
                </span>
                ，成立于上海。品牌之名取意&ldquo;潮汐&rdquo;与&ldquo;基石&rdquo;——潮汐喻示商业周期之律动与时机洞察，基石象征战略咨询所应具备的稳固根基与长远价值。一动一静，一张一弛，是我们对商业世界的根本理解。
              </p>
              <p className="font-body text-sm font-normal leading-relaxed text-navy-800/50">
                The name Aestilith fuses <span className="italic">aestus</span>{" "}
                (tide) with <span className="italic">lith</span> (stone). Tides
                embody rhythm, foresight, and the courage to move; stone embodies
                structure, stability, and the wisdom to endure. Together they
                define our philosophy: insight in motion, value in permanence.
              </p>
            </div>
          </div>

          {/* Right — icon boxes */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {boxes.map((b, i) => (
                <div
                  key={b.en}
                  className="reveal bg-warm-white/60 p-6 lg:p-8 hover:bg-warm-white transition-colors duration-500"
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <h4 className="font-body text-sm font-medium tracking-[0.06em] uppercase text-navy-900 mb-2">
                    {b.en}
                  </h4>
                  <p className="font-cn text-xs font-normal tracking-[0.04em] text-gold-600 mb-3">
                    {b.cn}
                  </p>
                  <p className="font-cn text-sm font-normal leading-relaxed text-navy-800/65 mb-2">
                    {b.descCn}
                  </p>
                  <p className="font-body text-xs font-normal leading-relaxed text-navy-800/40">
                    {b.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
