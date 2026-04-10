"use client";

import { useLanguage } from "@/hooks/use-language";
import { personalInfo } from "@/lib/data";
import { ExternalLink, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#050c18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <span
                className="text-white text-[10px] font-bold"
                style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
              >
                {personalInfo.initials}
              </span>
            </div>
            <span className="text-sm font-semibold text-slate-900 dark:text-white"
              style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
            >
              Ilyes Boudissa
            </span>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-5">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} {t("footer_text")}
          </p>
        </div>
      </div>
    </footer>
  );
}
