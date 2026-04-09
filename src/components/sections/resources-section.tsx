"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Table, ClipboardList, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { resources } from "@/lib/data";

const colorMap: Record<string, { icon: string }> = {
  green: { icon: "text-green-500 bg-green-50 dark:bg-green-500/10" },
  blue: { icon: "text-blue-500 bg-blue-50 dark:bg-blue-500/10" },
  purple: { icon: "text-purple-500 bg-purple-50 dark:bg-purple-500/10" },
};

const iconList = [Table, ClipboardList, Table];

export default function ResourcesSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="resources"
      ref={ref}
      className="py-24 bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 rounded-full mb-4">
            {t("res_subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            {t("res_title")}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {resources.map((resource, i) => {
            const colors = colorMap[resource.color] ?? colorMap.green;
            const Icon = iconList[i] ?? Table;

            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  {/* Icon container */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.icon}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        {resource.title}
                      </h3>
                      <span className="inline-block px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 rounded-md">
                        {resource.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {resource.desc}
                    </p>
                  </div>

                  {/* Access button */}
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-600 rounded-xl transition-colors flex-shrink-0"
                  >
                    {t("res_btn")}
                    <ExternalLink className="w-4 h-4" />
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
