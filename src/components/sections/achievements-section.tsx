"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, TrendingUp, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { achievements } from "@/lib/data";

const accentColors = [
  { line: "#06b6d4", glow: "rgba(6,182,212,0.12)", iconBg: "rgba(6,182,212,0.1)", iconColor: "#06b6d4" },
  { line: "#f59e0b", glow: "rgba(245,158,11,0.12)", iconBg: "rgba(245,158,11,0.1)", iconColor: "#f59e0b" },
  { line: "#06b6d4", glow: "rgba(6,182,212,0.12)", iconBg: "rgba(6,182,212,0.1)", iconColor: "#06b6d4" },
];

const icons = [Trophy, TrendingUp, Trophy];

export default function AchievementsSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="absolute -top-6 right-0 section-number" aria-hidden>04</span>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-amber-500 rounded" />
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em]">
              {t("ach_subtitle")}
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
          >
            {t("ach_title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach, i) => {
            const accent = accentColors[i % accentColors.length];
            const Icon = icons[i] ?? Trophy;

            return (
              <motion.div
                key={ach.title}
                className="premium-card p-7 flex flex-col group"
                style={{ borderLeft: `3px solid ${accent.line}` }}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.13 }}
              >
                {/* Icon + number */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: accent.iconBg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent.iconColor }} />
                  </div>
                  <span
                    className="text-4xl font-extrabold opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{
                      fontFamily: "var(--font-syne, Syne, sans-serif)",
                      color: accent.line,
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3
                  className="text-base font-bold text-slate-900 dark:text-white mb-2"
                  style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
                >
                  {ach.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                  {ach.action}
                </p>

                {/* Result badge */}
                <div className="flex items-start gap-2 pt-4 border-t border-slate-100 dark:border-white/6">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {ach.result}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
