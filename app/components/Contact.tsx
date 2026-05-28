"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 lg:py-40 bg-navy-950 grain-overlay overflow-hidden"
    >
      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-gold-500/5 rounded-tl-[80px] hidden lg:block" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <div>
            <div className="reveal">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">
                Get in Touch
              </p>
              <h2 className="font-cn text-3xl lg:text-4xl font-medium tracking-[0.04em] text-warm-white mb-4">
                联系我们
              </h2>
              <div className="gold-line-left mb-10" />
            </div>

            <div className="reveal space-y-8" style={{ transitionDelay: "100ms" }}>
              <div>
                <p className="font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-2">
                  Email
                </p>
                <p className="font-body text-base font-light text-warm-white/70">
                  contact@aestilith.com
                </p>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-2">
                  Phone
                </p>
                <p className="font-body text-base font-light text-warm-white/70">
                  +86 400-XXX-XXXX
                </p>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-2">
                  Address
                </p>
                <p className="font-cn text-sm font-light text-warm-white/50 leading-relaxed">
                  中国 · 北京
                </p>
                <p className="font-body text-xs font-light text-warm-white/30 mt-0.5">
                  Beijing, China
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" style={{ transitionDelay: "200ms" }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-gold-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-body text-lg font-medium text-warm-white mb-2">
                  Thank you.
                </p>
                <p className="font-cn text-sm font-light text-warm-white/40">
                  感谢您的留言，我们会尽快回复。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-2">
                    Name <span className="font-cn text-[10px]">姓名</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-navy-600 px-0 py-3 font-body text-sm text-warm-white placeholder:text-warm-white/15 focus:outline-none focus:border-gold-500/60 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-2">
                    Email <span className="font-cn text-[10px]">邮箱</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-navy-600 px-0 py-3 font-body text-sm text-warm-white placeholder:text-warm-white/15 focus:outline-none focus:border-gold-500/60 transition-colors duration-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.1em] uppercase text-warm-white/30 mb-2">
                    Message <span className="font-cn text-[10px]">留言</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-navy-600 px-0 py-3 font-body text-sm text-warm-white placeholder:text-warm-white/15 focus:outline-none focus:border-gold-500/60 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gold-500/10 border border-gold-500/40 text-gold-400 font-body text-sm font-medium tracking-[0.06em] uppercase hover:bg-gold-500/20 hover:border-gold-500/60 transition-all duration-500"
                >
                  Send Message
                  <span className="font-cn text-xs font-light tracking-widest text-gold-500/60 group-hover:text-gold-400 transition-colors">
                    发送
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
