"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            {t("contact_title")}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
            {t("contact_text")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email button */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-600 rounded-xl transition-colors shadow-lg shadow-cyan-500/25"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>

            {/* LinkedIn button */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 border-2 border-slate-300 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-white/10">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} {t("footer_text")}
          </p>
        </div>
      </div>
    </section>
  );
}
