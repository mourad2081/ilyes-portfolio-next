"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Mail, ArrowDown } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { personalInfo, stats } from "@/lib/data";
import ParticleCanvas from "@/components/ui/particle-canvas";
import MagneticButton from "@/components/ui/magnetic-button";
import AnimatedCounter from "@/components/ui/animated-counter";

const statLabels: Record<string, string> = {
  years_exp: "stat_years",
  managed: "stat_spend",
  compliance: "stat_comp",
};

const statIcons = ["⏱", "💼", "✓"];

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Particle mesh background */}
      <ParticleCanvas />

      {/* Radial gradient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,100,180,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Top-right geometric decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none overflow-hidden" aria-hidden>
        <motion.div
          className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full"
          style={{
            border: "1px solid rgba(0,212,255,0.06)",
            boxShadow: "inset 0 0 80px rgba(0,212,255,0.04)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[-40px] right-[-40px] w-[280px] h-[280px] rounded-full"
          style={{ border: "1px solid rgba(232,160,32,0.06)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <div
          className="absolute top-4 right-4 w-2 h-2 rounded-full"
          style={{ background: "var(--cyan)", boxShadow: "0 0 12px var(--cyan-glow)" }}
        />
      </div>

      {/* Bottom-left decoration */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none overflow-hidden" aria-hidden>
        <motion.div
          className="absolute bottom-[-80px] left-[-80px] w-[240px] h-[240px] rounded-full"
          style={{ border: "1px solid rgba(232,160,32,0.05)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* Left column: Main content */}
          <div>
            {/* Eyebrow + location */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
                style={{
                  background: "rgba(0,212,255,0.06)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  color: "var(--cyan)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--cyan)", boxShadow: "0 0 6px var(--cyan-glow)", animation: "pulse-dot 2s ease infinite" }}
                />
                {t("hero_welcome")}
              </div>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-2)" }}>
                <MapPin className="w-3.5 h-3.5" style={{ color: "var(--gold)" }} />
                {t("hero_location")}
                <span className="font-mono ml-2" style={{ color: "var(--text-3)" }}>52.52°N 13.40°E</span>
              </div>
            </motion.div>

            {/* Giant headline — Bebas Neue */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "var(--font-display)", lineHeight: 0.92 }}
                className="text-[clamp(4rem,12vw,9rem)] tracking-wide text-gradient-cyan"
              >
                ILYES
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "var(--font-display)", lineHeight: 0.92, color: "var(--text)" }}
                className="text-[clamp(4rem,12vw,9rem)] tracking-wide"
              >
                BOUDISSA
              </motion.h1>
            </div>

            {/* Role with gold accent bar */}
            <motion.div
              className="flex items-center gap-4 mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-12 h-[2px]" style={{ background: "var(--gold)" }} />
              <p
                className="text-sm font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
              >
                {t("hero_role")}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="max-w-xl text-base leading-relaxed mb-10"
              style={{ color: "var(--text-2)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex items-center gap-4 flex-wrap mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46 }}
            >
              <MagneticButton
                as="a"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #0099cc)",
                  boxShadow: "0 8px 32px rgba(0,212,255,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
                } as React.CSSProperties}
              >
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </MagneticButton>

              <MagneticButton
                as="a"
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: "rgba(10,22,40,0.8)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  color: "var(--text)",
                } as React.CSSProperties}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {t("hero_email_btn") || "Email"}
              </MagneticButton>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              className="flex items-center gap-2 text-xs tracking-widest uppercase"
              style={{ color: "var(--text-3)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              Scroll to explore
            </motion.div>
          </div>

          {/* Right column: Stats cards */}
          <div className="hidden lg:flex flex-col gap-4 min-w-[220px]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="card-dark p-6 rounded-2xl"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{statIcons[i]}</span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: i === 1 ? "var(--gold)" : "var(--cyan)", boxShadow: i === 1 ? "0 0 8px var(--gold-glow)" : "0 0 8px var(--cyan-glow)" }}
                  />
                </div>
                <AnimatedCounter
                  value={stat.value}
                  className="block text-3xl font-extrabold mb-1 text-gradient-cyan"
                  style={{ fontFamily: "var(--font-serif)" } as React.CSSProperties}
                />
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-2)" }}>
                  {t(statLabels[stat.label] ?? stat.label)}
                </p>
              </motion.div>
            ))}

            {/* Location card */}
            <motion.div
              className="rounded-2xl p-4 flex items-center gap-3"
              style={{
                border: "1px dashed rgba(0,212,255,0.12)",
                background: "rgba(0,212,255,0.02)",
              }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.56 }}
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan-glow)" }} />
                <div className="absolute inset-0 rounded-full animate-pulse-ring" style={{ border: "1px solid var(--cyan)", opacity: 0.4 }} />
              </div>
              <div>
                <p className="text-xs font-mono" style={{ color: "var(--text-2)" }}>Berlin, Germany</p>
                <p className="text-xs font-mono" style={{ color: "var(--text-3)" }}>Available · Open to opportunities</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile stats row */}
        <motion.div
          className="grid grid-cols-3 gap-3 mt-10 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="card-dark p-4 text-center rounded-xl">
              <AnimatedCounter
                value={stat.value}
                className="block text-xl font-extrabold text-gradient-cyan"
              />
              <p className="text-[10px] uppercase tracking-wider mt-1" style={{ color: "var(--text-2)" }}>
                {t(statLabels[stat.label] ?? stat.label)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
