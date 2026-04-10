"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileSpreadsheet, ClipboardList, Table2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { resources } from "@/lib/data";

const iconList = [FileSpreadsheet, ClipboardList, Table2];
const accents = [
  { line: "var(--cyan)", rgb: "0,212,255" },
  { line: "var(--gold)", rgb: "232,160,32" },
  { line: "var(--cyan)", rgb: "0,212,255" },
];

export default function ResourcesSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resources" ref={ref} className="py-28 px-4 relative" style={{ background: "var(--bg-2)" }}>
      <div className="absolute inset-0 hex-pattern opacity-20 pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 relative"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-num">05</span>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1.5px]" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--cyan)" }}>
              {t("res_subtitle")}
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}
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
                className="card-dark rounded-2xl p-6 group"
                style={{ borderLeft: `2px solid ${accent.line}` }}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{
                      background: `rgba(${accent.rgb},0.08)`,
                      border: `1px solid rgba(${accent.rgb},0.15)`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: accent.line }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <h3
                        className="text-base font-bold"
                        style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}
                      >
                        {resource.title}
                      </h3>
                      <span
                        className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded"
                        style={{ background: "rgba(0,212,255,0.08)", color: "var(--cyan)", border: "1px solid rgba(0,212,255,0.12)" }}
                      >
                        {resource.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                      {resource.desc}
                    </p>
                  </div>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl shrink-0 transition-all"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff, #0099cc)",
                      color: "#fff",
                      boxShadow: "0 4px 16px rgba(0,212,255,0.2)",
                    }}
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
