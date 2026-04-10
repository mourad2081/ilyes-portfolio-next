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
    <section className="py-28 px-4 relative" style={{ background: "var(--bg-2)" }}>
      <div className="absolute inset-0 hex-pattern opacity-30 pointer-events-none" aria-hidden />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-20 relative"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-num">02</span>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1.5px]" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
              {t("tools_subtitle")}
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}
          >
            {t("tools_title")}
          </h2>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="card-dark rounded-2xl p-6 flex flex-col items-center text-center gap-3 group"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg relative"
                style={{
                  backgroundColor: tool.color,
                  boxShadow: `0 8px 24px -4px ${tool.color}60`,
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
              >
                {/* Shine overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-30" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)" }} />
                <span className="relative z-10">{tool.name.charAt(0)}</span>
              </motion.div>
              <p
                className="text-sm font-semibold group-hover:text-gradient-cyan transition-colors"
                style={{ color: "var(--text)", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
              >
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Competencies */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1.5px]" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--cyan)" }}>
              {t("comp_subtitle")}
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-10"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}
          >
            {t("comp_title")}
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {competencies.map((comp, i) => (
            <motion.span
              key={comp}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: "rgba(0,212,255,0.04)",
                border: "1px solid rgba(0,212,255,0.12)",
                color: "var(--text-2)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.45 + 0.04 * i }}
              whileHover={{
                background: "rgba(0,212,255,0.1)",
                borderColor: "rgba(0,212,255,0.4)",
                color: "#e8f2ff",
                scale: 1.05,
              }}
            >
              {t(compKeys[comp] ?? comp)}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
