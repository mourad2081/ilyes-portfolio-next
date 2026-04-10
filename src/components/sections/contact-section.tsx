"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { personalInfo } from "@/lib/data";
import MagneticButton from "@/components/ui/magnetic-button";

export default function ContactSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-28 px-4 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Large glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,80,160,0.12) 0%, transparent 70%)" }}
        aria-hidden
      />
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        {[400, 600, 800].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              border: `1px solid rgba(0,212,255,${0.04 - i * 0.01})`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--cyan))" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--cyan)" }}>
              {t("nav_contact")}
            </span>
            <div className="w-10 h-[1px]" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)" }} />
          </div>

          <h2
            className="text-5xl sm:text-6xl font-bold mb-5 text-gradient-cyan"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}
          >
            {t("contact_title")}
          </h2>
          <p className="text-base leading-relaxed mb-12 max-w-xl mx-auto" style={{ color: "var(--text-2)" }}>
            {t("contact_text")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              as="a"
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white rounded-2xl transition-all"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #0099cc)",
                boxShadow: "0 8px 32px rgba(0,212,255,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              } as React.CSSProperties}
            >
              <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              {t("hero_email_btn") || "Email"}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </MagneticButton>

            <MagneticButton
              as="a"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-2xl transition-all"
              style={{
                background: "rgba(0,212,255,0.05)",
                border: "1px solid rgba(0,212,255,0.2)",
                color: "var(--text)",
              } as React.CSSProperties}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
