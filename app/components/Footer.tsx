export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 py-16 border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          {/* Left — brand */}
          <div>
            <a
              href="#hero"
              className="inline-flex items-baseline gap-2 group mb-6"
            >
              <span className="font-display text-xl font-semibold tracking-[0.08em] text-warm-white">
                astilith
              </span>
              <span className="font-cn text-xs font-light tracking-widest text-gold-500">
                潮汐基石
              </span>
            </a>
            <p className="font-cn text-xs font-light text-warm-white/25 leading-relaxed max-w-xs">
              以洞察驱动战略，以结构塑造未来
            </p>
          </div>

          {/* Right — links + legal */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-4">
                Navigation
              </p>
              <div className="space-y-2">
                {[
                  { en: "About", cn: "关于我们", href: "#about" },
                  { en: "Services", cn: "核心服务", href: "#services" },
                  { en: "Advantages", cn: "优势亮点", href: "#advantages" },
                  { en: "Contact", cn: "联系我们", href: "#contact" },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block font-cn text-xs font-light text-warm-white/35 hover:text-gold-400 transition-colors duration-300"
                  >
                    {l.cn}
                    <span className="ml-1.5 text-[10px] text-warm-white/20 font-body">
                      {l.en}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-4">
                Services
              </p>
              <div className="space-y-2">
                {[
                  { en: "Strategic Planning", cn: "战略规划" },
                  { en: "Operational Excellence", cn: "运营卓越" },
                  { en: "Digital Transformation", cn: "数字化转型" },
                  { en: "Organization & Talent", cn: "组织与人才" },
                ].map((s) => (
                  <p
                    key={s.en}
                    className="font-cn text-xs font-light text-warm-white/25"
                  >
                    {s.cn}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-4">
                Legal
              </p>
              <div className="space-y-2">
                <p className="font-cn text-xs font-light text-warm-white/25">
                  隐私政策
                </p>
                <p className="font-cn text-xs font-light text-warm-white/25">
                  使用条款
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-navy-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-cn text-xs font-light text-warm-white/20">
            &copy; {currentYear} 潮汐基石企业管理咨询有限公司 — astilith
            Consulting. All rights reserved.
          </p>
          <p className="font-body text-[10px] tracking-[0.05em] text-warm-white/15">
            Insight-driven. Structure-built.
          </p>
        </div>
      </div>
    </footer>
  );
}
