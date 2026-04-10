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
      <section id="resume" className="py-28 px-4 relative" style={{ background: "var(--bg)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(232,160,32,0.04) 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="max-w-4xl mx-auto relative" ref={ref}>
          {/* Header */}
          <motion.div
            className="mb-16 relative"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-num">03</span>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1.5px]" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--cyan)" }}>
                {t("resume_subtitle")}
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}
            >
              {t("resume_title")}
            </h2>
          </motion.div>

          {/* Tab switcher */}
          <motion.div
            className="flex gap-1 p-1 rounded-2xl w-fit mb-14"
            style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.08)" }}
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
                  className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    color: isActive ? "#fff" : "var(--text-2)",
                    background: isActive ? "rgba(0,212,255,0.15)" : "transparent",
                    border: isActive ? "1px solid rgba(0,212,255,0.25)" : "1px solid transparent",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === "exp" ? (
              <motion.div
                key="exp"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="relative pl-10"
              >
                {/* Timeline line */}
                <div
                  className="absolute left-[7px] top-4 bottom-4 w-px"
                  style={{ background: "linear-gradient(180deg, var(--cyan) 0%, rgba(0,212,255,0.1) 80%, transparent 100%)" }}
                />

                <div className="space-y-7">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.id}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                    >
                      {/* Timeline dot */}
                      <div
                        className="absolute -left-10 top-5 w-3.5 h-3.5 rounded-full"
                        style={{
                          background: "var(--bg)",
                          border: "2px solid var(--cyan)",
                          boxShadow: "0 0 0 3px rgba(0,212,255,0.1)",
                        }}
                      />

                      <div
                        className="card-dark rounded-2xl p-6 group-hover:border-cyan-500/20 transition-all"
                        style={{ borderLeft: "2px solid rgba(0,212,255,0.2)" }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "var(--cyan)" }}>
                            <CalendarDays className="w-3.5 h-3.5" />
                            {exp.date}
                          </div>
                          <button
                            onClick={() => setSelectedExp(exp)}
                            className="flex items-center gap-1 text-xs transition-colors"
                            style={{ color: "var(--text-3)" }}
                          >
                            {t("btn_read_more")} <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>

                        <h3
                          className="text-base font-bold mb-1"
                          style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium mb-3" style={{ color: "var(--gold)" }}>
                          {exp.company}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.title}
                    className="card-dark rounded-2xl p-6"
                    style={{ borderLeft: "2px solid var(--cyan)" }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.12)" }}
                      >
                        <GraduationCap className="w-5 h-5" style={{ color: "var(--cyan)" }} />
                      </div>
                      <div>
                        <h3
                          className="text-base font-bold mb-0.5"
                          style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}
                        >
                          {edu.title}
                        </h3>
                        {edu.institution && (
                          <p className="text-sm" style={{ color: "var(--text-2)" }}>{edu.institution}</p>
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

      {/* Detail modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: "rgba(3,7,18,0.85)", backdropFilter: "blur(12px)" }}
              onClick={() => setSelectedExp(null)}
            />
            <motion.div
              className="relative z-10 w-full max-w-lg rounded-2xl p-7"
              style={{
                background: "var(--bg-card-2)",
                border: "1px solid rgba(0,212,255,0.15)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.08)",
              }}
              initial={{ opacity: 0, scale: 0.92, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 32 }}
              transition={{ duration: 0.22 }}
            >
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.1)" }}
              >
                <X className="w-4 h-4" style={{ color: "var(--text-2)" }} />
              </button>
              <div className="flex items-center gap-2 text-xs mb-3" style={{ color: "var(--cyan)" }}>
                <CalendarDays className="w-3.5 h-3.5" />
                {selectedExp.date}
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.02em" }}>
                {selectedExp.role}
              </h3>
              <p className="text-sm font-semibold mb-5" style={{ color: "var(--gold)" }}>
                {selectedExp.company}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                {selectedExp.fullDesc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
