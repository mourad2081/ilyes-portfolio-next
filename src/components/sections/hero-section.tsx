"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { personalInfo, stats } from "@/lib/data";

const statLabels: Record<string, string> = {
  years_exp: "stat_years",
  managed: "stat_spend",
  compliance: "stat_comp",
};

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      {/* Animated background blobs */}
      <div
        className="absolute top-1/4 -left-32 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"
        aria-hidden
      />
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl animate-pulse [animation-delay:2s]"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl animate-pulse [animation-delay:4s]"
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Welcome badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-6">
            {t("hero_welcome")}
          </span>
        </motion.div>

        {/* Name + cursor */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {personalInfo.name}
          <span className="inline-block w-[3px] h-[0.85em] ml-1 align-middle bg-cyan-500 animate-[blink_1s_steps(2)_infinite]" />
        </motion.h1>

        {/* Role */}
        <motion.p
          className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("hero_role")}
        </motion.p>

        {/* Location */}
        <motion.p
          className="flex items-center justify-center gap-1.5 text-gray-500 dark:text-gray-400 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MapPin className="w-4 h-4" />
          {t("hero_location")}
        </motion.p>

        {/* Bio */}
        <motion.p
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {personalInfo.bio}
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-white font-medium text-sm hover:bg-cyan-600 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-200 font-medium text-sm hover:border-cyan-500/50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 rounded-2xl p-5 text-center"
            >
              <p className="text-2xl font-bold text-cyan-500">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {t(statLabels[stat.label] ?? stat.label)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Blink keyframe — injected once */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
