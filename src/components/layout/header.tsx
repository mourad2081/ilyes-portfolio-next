"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { personalInfo } from "@/lib/data";
import type { Lang } from "@/lib/translations";
import { Menu, X, ChevronDown, User, Wrench, FileText, FolderKanban, Trophy, BookMarked, Mail } from "lucide-react";

const navItems = [
  { key: "nav_about", href: "#about", icon: User },
  { key: "nav_services", href: "#services", icon: Wrench },
  { key: "nav_resume", href: "#resume", icon: FileText },
  { key: "nav_projects", href: "#projects", icon: FolderKanban },
  { key: "nav_achievements", href: "#achievements", icon: Trophy },
  { key: "nav_resources", href: "#resources", icon: BookMarked },
  { key: "nav_contact", href: "#contact", icon: Mail },
];

const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const currentLang = languages.find((l) => l.code === lang);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(3,7,18,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(0,212,255,0.15)", filter: "blur(8px)" }}
              />
              <div
                className="absolute inset-0 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.08))",
                  border: "1px solid rgba(0,212,255,0.2)",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.05em",
                }}
              >
                {personalInfo.initials}
              </div>
            </div>
            <div>
              <div
                className="text-sm font-bold leading-none"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)", letterSpacing: "0.08em" }}
              >
                ILYES
              </div>
              <div className="text-[9px] leading-none tracking-[0.2em] uppercase" style={{ color: "var(--cyan)" }}>
                BOUDISSA
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  className="relative flex items-center gap-1.5 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors group"
                  style={{ color: "var(--text-2)", fontFamily: "var(--font-body)" }}
                >
                  <Icon className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:text-white transition-colors">{t(item.key)}</span>
                  <span
                    className="absolute bottom-0 left-3 right-3 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"
                    style={{ background: "var(--cyan)" }}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-1">
            {/* Language */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors"
                style={{ color: "var(--text-2)", fontFamily: "var(--font-body)" }}
              >
                <span>{currentLang?.flag}</span>
                <span>{currentLang?.label}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 mt-2 w-28 rounded-xl overflow-hidden z-50"
                  style={{
                    background: "var(--bg-card-2)",
                    border: "1px solid rgba(0,212,255,0.12)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
                  }}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-left transition-colors"
                      style={{
                        color: lang === l.code ? "var(--cyan)" : "var(--text-2)",
                        background: lang === l.code ? "rgba(0,212,255,0.06)" : "transparent",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <span>{l.flag}</span> {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-2)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "rgba(3,7,18,0.97)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(0,212,255,0.06)",
          }}
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors"
                  style={{
                    color: "var(--text-2)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <Icon className="w-4 h-4 opacity-50" />
                  {t(item.key)}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
