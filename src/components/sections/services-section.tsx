"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Users, Zap, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { services } from "@/lib/data";
import TiltCard from "@/components/ui/tilt-card";

const iconMap: Record<string, LucideIcon> = { Search, Users, Zap };

const accents = [
  { line: "var(--cyan)", glow: "var(--cyan-glow)", label: "#00d4ff", num: "01" },
  { line: "var(--gold)", glow: "var(--gold-glow)", label: "#e8a020", num: "02" },
  { line: "var(--cyan)", glow: "var(--cyan-glow)", label: "#00d4ff", num: "03" },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 px-4 relative" style={{ background: "var(--bg)" }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden
        style={{ background: "radial-gradient(ellipse 60% 40% at 20% 60%, rgba(0,100,180,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-20 relative"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-num">01</span>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1.5px]" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--cyan)" }}>
              {t("services_subtitle")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}>
            {t("services_title")}
          </h2>
          <div className="divider-glow mt-6 max-w-xs" />
        </motion.div>

        {/* 3D tilt cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Search;
            const accent = accents[i % accents.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <TiltCard
                  className="card-dark rounded-2xl p-8 h-full"
                  intensity={8}
                  style={{ borderLeft: `2px solid ${accent.line}` } as React.CSSProperties}
                >
                  {/* Inner glow on hover corner */}
                  <div
                    className="absolute top-0 left-0 w-20 h-20 rounded-2xl opacity-20 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top left, ${accent.line}, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative"
                    style={{ background: `rgba(${accent.label === "#00d4ff" ? "0,212,255" : "232,160,32"},0.08)`, border: `1px solid ${accent.line}22` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: accent.line }} />
                  </div>

                  {/* Number */}
                  <div className="text-[10px] font-bold tracking-[0.3em] mb-3" style={{ color: accent.line, fontFamily: "var(--font-body)" }}>
                    {accent.num}
                  </div>

                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.03em" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                    {service.desc}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
