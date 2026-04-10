"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, Mail, ArrowDown } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { personalInfo, stats } from "@/lib/data";

const statLabels: Record<string, string> = {
  years_exp: "stat_years",
  managed: "stat_spend",
  compliance: "stat_comp",
};

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 pt-28 pb-20">
      {/* Dot-grid texture */}
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden />

      {/* Ambient glow orbs */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.07] dark:opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.05] dark:opacity-[0.09]"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Editorial text column */}
          <div>
            {/* Location + coordinates */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                {t("hero_location")}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">52.52°N · 13.40°E</span>
            </motion.div>

            {/* Giant display name */}
            <motion.h1
              className="mb-3 leading-none"
              style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
              {...fadeUp(0.08)}
            >
              <span className="block text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                Ilyes
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight gradient-text-cyan">
                Boudissa
              </span>
            </motion.h1>

            {/* Role tag */}
            <motion.div className="flex items-center gap-3 mb-6" {...fadeUp(0.16)}>
              <div className="w-8 h-[2px] bg-amber-500 rounded" />
              <p
                className="text-sm font-semibold text-amber-500 uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
              >
                {t("hero_role")}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mb-8"
              {...fadeUp(0.24)}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div className="flex items-center gap-3 flex-wrap mb-12" {...fadeUp(0.32)}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-cyan-500/50 hover:bg-cyan-50 dark:hover:bg-cyan-500/8 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {t("hero_email_btn") || "Email"}
              </a>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500"
              {...fadeUp(0.4)}
            >
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              <span className="tracking-widest uppercase">Scroll to explore</span>
            </motion.div>
          </div>

          {/* Right: Stats + decorative */}
          <div className="hidden lg:flex flex-col gap-5">
            {/* Stats as editorial cards */}
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="premium-card p-6 flex items-center justify-between"
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: EASE }}
              >
                <div>
                  <p
                    className="text-4xl font-extrabold gradient-text-cyan mb-1"
                    style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t(statLabels[stat.label] ?? stat.label)}
                  </p>
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl opacity-40"
                  style={{ background: i === 1 ? "rgba(245, 158, 11, 0.1)" : "rgba(6, 182, 212, 0.1)" }}
                >
                  {i === 0 ? "⏱" : i === 1 ? "💼" : "✓"}
                </div>
              </motion.div>
            ))}

            {/* Decorative coordinates label */}
            <motion.div
              className="px-6 py-4 rounded-2xl border border-dashed border-slate-200 dark:border-white/8 flex items-center gap-4"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_2px_rgba(6,182,212,0.5)]" />
              <div>
                <p className="text-xs font-mono text-slate-400 dark:text-slate-500">Berlin, Germany</p>
                <p className="text-xs font-mono text-slate-300 dark:text-slate-600">Open to opportunities</p>
              </div>
              <div className="ml-auto">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile stats row */}
        <motion.div
          className="grid grid-cols-3 gap-3 mt-10 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="premium-card p-4 text-center"
            >
              <p
                className="text-xl font-extrabold gradient-text-cyan"
                style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
              >
                {stat.value}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {t(statLabels[stat.label] ?? stat.label)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
