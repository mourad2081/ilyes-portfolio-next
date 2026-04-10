"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Table2, ClipboardList, ExternalLink, FileSpreadsheet } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { resources } from "@/lib/data";

const iconList = [FileSpreadsheet, ClipboardList, Table2];

const accents = [
  { line: "#06b6d4", iconBg: "rgba(6,182,212,0.1)", iconColor: "#06b6d4" },
  { line: "#f59e0b", iconBg: "rgba(245,158,11,0.1)", iconColor: "#f59e0b" },
  { line: "#06b6d4", iconBg: "rgba(6,182,212,0.1)", iconColor: "#06b6d4" },
];

export default function ResourcesSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="resources"
      ref={ref}
      className="py-24 px-4 bg-slate-50/70 dark:bg-[#050c18]/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="absolute -top-6 right-0 section-number" aria-hidden>05</span>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-cyan-500 rounded" />
            <span className="text-xs font-semibold text-cyan-500 uppercase tracking-[0.2em]">
              {t("res_subtitle")}
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
          >
            {t("res_title")}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {resources.map((resource, i) => {
            const Icon = iconList[i] ?? Table2;
            const accent = accents[i % accents.length];

            return (
              <motion.div
                key={resource.title}
                className="premium-card p-6 group"
                style={{ borderLeft: `3px solid ${accent.line}` }}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.13 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                    style={{ background: accent.iconBg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: accent.iconColor }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <h3
                        className="text-base font-bold text-slate-900 dark:text-white"
                        style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
                      >
                        {resource.title}
                      </h3>
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/8 text-slate-500 dark:text-slate-400 rounded-md">
                        {resource.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {resource.desc}
                    </p>
                  </div>

                  {/* Button */}
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 rounded-xl transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 flex-shrink-0"
                  >
                    {t("res_btn")}
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
