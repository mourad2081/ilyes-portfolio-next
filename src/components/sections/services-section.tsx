"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Users, Zap, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Users,
  Zap,
};

const accentColors = [
  { border: "#06b6d4", glow: "rgba(6, 182, 212, 0.15)", icon: "rgba(6, 182, 212, 0.1)", text: "#06b6d4" },
  { border: "#f59e0b", glow: "rgba(245, 158, 11, 0.15)", icon: "rgba(245, 158, 11, 0.1)", text: "#f59e0b" },
  { border: "#06b6d4", glow: "rgba(6, 182, 212, 0.15)", icon: "rgba(6, 182, 212, 0.1)", text: "#06b6d4" },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span
            className="absolute -top-6 right-0 section-number"
            aria-hidden
          >
            01
          </span>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-cyan-500 rounded" />
            <span className="text-xs font-semibold text-cyan-500 uppercase tracking-[0.2em]">
              {t("services_subtitle")}
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
          >
            {t("services_title")}
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Search;
            const accent = accentColors[i % accentColors.length];
            return (
              <motion.div
                key={service.id}
                className="premium-card p-7 group"
                style={{ borderLeft: `3px solid ${accent.border}` }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.12 * i }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: accent.icon }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent.text }} />
                </div>

                {/* Number */}
                <div
                  className="text-xs font-bold mb-2 tracking-widest"
                  style={{ color: accent.text, fontFamily: "var(--font-syne, Syne, sans-serif)" }}
                >
                  0{i + 1}
                </div>

                <h3
                  className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors"
                  style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
