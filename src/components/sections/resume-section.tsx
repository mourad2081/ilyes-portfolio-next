"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, X, CalendarDays, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { experiences, education, type Experience } from "@/lib/data";

export default function ResumeSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [activeTab, setActiveTab] = useState<"exp" | "edu">("exp");
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  const tabs = [
    { key: "exp" as const, label: t("tab_exp"), icon: Briefcase },
    { key: "edu" as const, label: t("tab_edu"), icon: GraduationCap },
  ];

  return (
    <>
      <section id="resume" className="py-24 px-4">
        <div className="max-w-4xl mx-auto" ref={ref}>
          {/* Section header */}
          <motion.div
            className="mb-14 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="absolute -top-6 right-0 section-number" aria-hidden>03</span>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-cyan-500 rounded" />
              <span className="text-xs font-semibold text-cyan-500 uppercase tracking-[0.2em]">
                {t("resume_subtitle")}
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
              style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
            >
              {t("resume_title")}
            </h2>
          </motion.div>

          {/* Tab switcher */}
          <motion.div
            className="flex gap-2 mb-12 p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl w-fit"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-white dark:bg-[#0d1829] text-cyan-500 shadow-md shadow-black/8"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {activeTab === "exp" ? (
              <motion.div
                key="exp"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.25 }}
                className="relative pl-10"
              >
                {/* Timeline vertical line */}
                <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan-500/60 via-cyan-500/20 to-transparent" />

                <div className="space-y-8">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.id}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.12 * i }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-10 top-5 w-3.5 h-3.5 rounded-full bg-cyan-500 border-2 border-white dark:border-[#050c18] shadow-[0_0_0_3px_rgba(6,182,212,0.2)]" />

                      <div className="premium-card p-6 group-hover:border-cyan-500/30">
                        {/* Date + expand button */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1.5 text-xs text-cyan-500 font-medium">
                            <CalendarDays className="w-3.5 h-3.5" />
                            {exp.date}
                          </div>
                          <button
                            onClick={() => setSelectedExp(exp)}
                            className="flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-500 transition-colors"
                          >
                            {t("btn_read_more")}
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>

                        <h3
                          className="text-base font-bold text-slate-900 dark:text-white mb-1"
                          style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-sm text-amber-500 font-medium mb-3">
                          {exp.company}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {exp.shortDesc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="edu"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.title}
                    className="premium-card p-6"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.12 * i }}
                    style={{ borderLeft: "3px solid #06b6d4" }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-cyan-500" />
                      </div>
                      <div>
                        <h3
                          className="text-base font-bold text-slate-900 dark:text-white mb-0.5"
                          style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
                        >
                          {edu.title}
                        </h3>
                        {edu.institution && (
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {edu.institution}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Experience detail modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedExp(null)}
            />
            <motion.div
              className="relative z-10 w-full max-w-lg bg-white dark:bg-[#0d1829] border border-slate-200 dark:border-white/8 rounded-2xl p-7 shadow-2xl"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.22 }}
            >
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/8 transition-colors"
              >
                <X className="w-4 h-4 text-slate-400" />
              </button>

              <div className="flex items-center gap-1.5 text-xs text-cyan-500 font-medium mb-3">
                <CalendarDays className="w-3.5 h-3.5" />
                {selectedExp.date}
              </div>
              <h3
                className="text-xl font-bold text-slate-900 dark:text-white mb-1"
                style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
              >
                {selectedExp.role}
              </h3>
              <p className="text-sm font-semibold text-amber-500 mb-5">
                {selectedExp.company}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedExp.fullDesc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
