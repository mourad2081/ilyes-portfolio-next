"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, TrendingUp, CheckCircle2, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { achievements } from "@/lib/data";
import TiltCard from "@/components/ui/tilt-card";

const accents = [
  { line: "var(--cyan)", icon: Trophy, rgb: "0,212,255" },
  { line: "var(--gold)", icon: TrendingUp, rgb: "232,160,32" },
  { line: "var(--cyan)", icon: Zap, rgb: "0,212,255" },
];

export default function AchievementsSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" ref={ref} className="py-28 px-4 relative" style={{ background: "var(--bg)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,100,180,0.06) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 relative"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-num">04</span>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1.5px]" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
              {t("ach_subtitle")}
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}
          >
            {t("ach_title")}
          </h2>
          <div className="divider-glow mt-6 max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach, i) => {
            const accent = accents[i % accents.length];
            const Icon = accent.icon;
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <TiltCard
                  className="card-dark rounded-2xl p-7 h-full flex flex-col"
                  intensity={7}
                  style={{ borderLeft: `2px solid ${accent.line}` } as React.CSSProperties}
                >
                  {/* Top: icon + big number */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `rgba(${accent.rgb},0.08)`, border: `1px solid rgba(${accent.rgb},0.15)` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: accent.line }} />
                    </div>
                    <span
                      className="text-5xl font-bold opacity-[0.07]"
                      style={{ fontFamily: "var(--font-display)", color: accent.line, letterSpacing: "0.02em" }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <h3
                    className="text-base font-bold mb-2 flex-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}
                  >
                    {ach.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-2)" }}>
                    {ach.action}
                  </p>

                  <div
                    className="flex items-start gap-2 pt-4"
                    style={{ borderTop: "1px solid rgba(0,212,255,0.06)" }}
                  >
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#22c55e" }} />
                    <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                      {ach.result}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
