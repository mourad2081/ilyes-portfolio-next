"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { experiences, education, type Experience } from "@/lib/data";

export default function ResumeSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [activeTab, setActiveTab] = useState<"exp" | "edu">("exp");
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  const tabs = [
    { key: "exp" as const, label: t("tab_exp"), icon: Briefcase },
    { key: "edu" as const, label: t("tab_edu"), icon: GraduationCap },
  ];

  return (
    <>
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto" ref={ref}>
          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-4">
              {t("resume_subtitle")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {t("resume_title")}
            </h2>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="flex justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
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
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-cyan-500 text-white"
                      : "bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 text-gray-600 dark:text-gray-300 hover:border-cyan-500/40"
                  }`}
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="relative pl-8"
              >
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 dark:bg-white/10" />

                <div className="space-y-10">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.id}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.15 * i }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-8 top-1.5 w-[14px] h-[14px] rounded-full bg-cyan-500 border-[3px] border-white dark:border-slate-900" />

                      <div className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 rounded-2xl p-6">
                        <p className="text-xs font-medium text-cyan-500 mb-1">
                          {exp.date}
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {exp.shortDesc}
                        </p>
                        <button
                          onClick={() => setSelectedExp(exp)}
                          className="text-sm font-medium text-cyan-500 hover:text-cyan-400 transition-colors"
                        >
                          {t("btn_read_more")}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="edu"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.title}
                    className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 * i }}
                  >
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-cyan-500 shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.title}
                        </h3>
                        {edu.institution && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
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
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedExp(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Dialog */}
            <motion.div
              className="relative z-10 w-full max-w-lg bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-7 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
              <p className="text-xs font-medium text-cyan-500 mb-1">
                {selectedExp.date}
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {selectedExp.role}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                {selectedExp.company}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedExp.fullDesc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
