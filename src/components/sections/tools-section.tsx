"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { tools, competencies } from "@/lib/data";

const compKeys: Record<string, string> = {
  Negotiation: "comp_negot",
  Leadership: "comp_leadership",
  "Risk Mgmt": "comp_risk",
  "Global Sourcing": "comp_global",
  "Contract Law": "comp_contracts",
  "Cost Analysis": "comp_cost",
  Logistics: "comp_logistics",
  "Spend Analytics": "comp_analytics",
};

export default function ToolsSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-4 bg-slate-50/70 dark:bg-[#050c18]/50">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Tools header */}
        <motion.div
          className="mb-14 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="absolute -top-6 right-0 section-number" aria-hidden>02</span>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-amber-500 rounded" />
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em]">
              {t("tools_subtitle")}
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
          >
            {t("tools_title")}
          </h2>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="premium-card p-5 flex flex-col items-center text-center gap-3 group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-lg"
                style={{
                  backgroundColor: tool.color,
                  boxShadow: `0 8px 24px -4px ${tool.color}50`,
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3 * i,
                }}
              >
                {tool.name.charAt(0)}
              </motion.div>
              <p
                className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-cyan-500 transition-colors"
                style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
              >
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Competencies header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-cyan-500 rounded" />
            <span className="text-xs font-semibold text-cyan-500 uppercase tracking-[0.2em]">
              {t("comp_subtitle")}
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
          >
            {t("comp_title")}
          </h2>
        </motion.div>

        {/* Competency pills */}
        <motion.div
          className="flex flex-wrap gap-2.5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {competencies.map((comp, i) => (
            <motion.span
              key={comp}
              className="px-4 py-2 rounded-full text-sm font-medium border border-slate-200 dark:border-white/8 text-slate-600 dark:text-slate-300 hover:border-cyan-500/50 hover:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-500/8 transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.45 + 0.04 * i }}
            >
              {t(compKeys[comp] ?? comp)}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
