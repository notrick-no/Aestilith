"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "20+", en: "Years Experience", cn: "年行业经验" },
  { value: "300+", en: "Clients Served", cn: "服务客户" },
  { value: "15", en: "Industry Sectors", cn: "覆盖行业" },
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
      {/* Subtle texture line */}
      <div className="absolute top-0 inset-x-0 gold-line opacity-30" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — decorative element + section header */}
          <div>
            <div className="reveal" style={{ transitionDelay: "0ms" }}>
              <div className="gold-line-left mb-8" />
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-600 mb-4">
                About Us
              </p>
              <h2 className="font-cn text-3xl lg:text-4xl font-medium tracking-[0.04em] text-navy-900 mb-4">
                关于潮汐基石
              </h2>
              <p className="font-display text-xl font-light italic tracking-[0.02em] text-navy-700/50">
                Where insight meets structure.
              </p>
            </div>
          </div>

          {/* Right — content */}
          <div className="space-y-6">
            <div className="reveal" style={{ transitionDelay: "100ms" }}>
              <p className="font-cn text-base font-light leading-relaxed text-navy-800/80">
                <span className="font-medium text-navy-900">
                  潮汐基石企业管理咨询有限公司
                </span>
                ，英文品牌名
                <span className="font-display text-lg font-medium italic text-navy-900">
                  {" "}
                  astilith
                </span>
                ，是一家专注于战略管理与组织效能提升的综合型咨询机构。
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: "200ms" }}>
              <p className="font-body text-sm font-light leading-relaxed text-navy-800/60">
                astilith is a strategic management consulting firm dedicated to
                empowering organizations through insight-driven strategy,
                structural excellence, and transformative leadership. We bridge
                the gap between vision and execution — helping enterprises
                navigate complexity, unlock growth, and build lasting
                competitive advantage.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: "300ms" }}>
              <p className="font-cn text-sm font-light leading-relaxed text-navy-800/60">
                我们以&ldquo;洞察&rdquo;为锚点，以&ldquo;结构&rdquo;为方法论，为各行业领先企业提供从战略规划到落地执行的全周期管理咨询服务。无论您是寻求业务突破的成长型企业，还是面临转型挑战的成熟组织，潮汐基石都将是您最值得信赖的合作伙伴。
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 mt-24 lg:mt-32">
          {stats.map((s, i) => (
            <div
              key={s.en}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <p className="font-display text-4xl lg:text-5xl font-semibold text-navy-900 mb-2">
                {s.value}
              </p>
              <p className="font-body text-xs font-light tracking-[0.05em] text-navy-700/60">
                {s.en}
              </p>
              <p className="font-cn text-xs font-light text-navy-700/40 mt-0.5">
                {s.cn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
