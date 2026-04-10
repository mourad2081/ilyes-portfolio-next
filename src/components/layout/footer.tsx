"use client";

import { useLanguage } from "@/hooks/use-language";
import { personalInfo } from "@/lib/data";
import { ExternalLink, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="relative border-t"
      style={{ background: "var(--bg-2)", borderColor: "rgba(0,212,255,0.06)" }}
    >
      <div className="absolute inset-0 hex-pattern opacity-15 pointer-events-none" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.06))",
                border: "1px solid rgba(0,212,255,0.15)",
              }}
            >
              <span className="text-[10px] font-bold" style={{ color: "var(--cyan)", fontFamily: "var(--font-display)" }}>
                {personalInfo.initials}
              </span>
            </div>
            <span className="text-sm font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.08em" }}>
              ILYES BOUDISSA
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: "var(--text-3)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: "var(--text-3)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
            >
              <Mail className="w-3.5 h-3.5" />
              {personalInfo.email}
            </a>
          </div>

          {/* Copyright + back to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs" style={{ color: "var(--text-3)", fontFamily: "var(--font-body)" }}>
              &copy; {new Date().getFullYear()} {t("footer_text")}
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: "rgba(0,212,255,0.06)",
                border: "1px solid rgba(0,212,255,0.1)",
                color: "var(--text-3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style.background = "rgba(0,212,255,0.12)");
                (e.currentTarget.style.color = "var(--cyan)");
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.background = "rgba(0,212,255,0.06)");
                (e.currentTarget.style.color = "var(--text-3)");
              }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
