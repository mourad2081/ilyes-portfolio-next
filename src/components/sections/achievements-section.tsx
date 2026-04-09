"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { achievements } from "@/lib/data";

const colorMap: Record<string, { border: string; icon: string; bg: string }> = {
  blue: {
    border: "border-t-blue-500",
    icon: "text-blue-500 bg-blue-50 dark:bg-blue-500/10",
    bg: "from-blue-500/5",
  },
  green: {
    border: "border-t-green-500",
    icon: "text-green-500 bg-green-50 dark:bg-green-500/10",
    bg: "from-green-500/5",
  },
  purple: {
    border: "border-t-purple-500",
    icon: "text-purple-500 bg-purple-50 dark:bg-purple-500/10",
    bg: "from-purple-500/5",
  },
};

const icons = [Trophy, Star, Trophy];

export default function AchievementsSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 rounded-full mb-4">
            {t("ach_subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            {t("ach_title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((ach, i) => {
            const colors = colorMap[ach.color] ?? colorMap.blue;
            const Icon = icons[i] ?? Trophy;

            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 rounded-2xl border-t-4 ${colors.border} p-8 hover:shadow-lg transition-shadow`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colors.icon}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">
                  {ach.title}
                </h3>

                {/* Action */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {ach.action}
                </p>

                {/* Result */}
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {ach.result}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
