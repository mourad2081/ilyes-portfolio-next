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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Tools header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4">
            {t("tools_subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {t("tools_title")}
          </h2>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-16">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 rounded-2xl p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4"
                style={{ backgroundColor: tool.color }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3 * i,
                }}
              >
                {tool.name.charAt(0)}
              </motion.div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Competencies header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4">
            {t("comp_subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {t("comp_title")}
          </h2>
        </motion.div>

        {/* Competency pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {competencies.map((comp, i) => (
            <motion.span
              key={comp}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 text-gray-700 dark:text-gray-200 hover:border-cyan-500/40 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.45 + 0.05 * i }}
            >
              {t(compKeys[comp] ?? comp)}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
