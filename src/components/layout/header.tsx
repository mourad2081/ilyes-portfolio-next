"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/hooks/use-language";
import { personalInfo } from "@/lib/data";
import type { Lang } from "@/lib/translations";
import {
  Sun,
  Moon,
  ChevronDown,
  Menu,
  X,
  User,
  Briefcase,
  FileText,
  FolderOpen,
  Star,
  Database,
  Mail,
} from "lucide-react";

const navItems = [
  { key: "nav_about", href: "#about", icon: User },
  { key: "nav_services", href: "#services", icon: Briefcase },
  { key: "nav_resume", href: "#resume", icon: FileText },
  { key: "nav_projects", href: "#projects", icon: FolderOpen },
  { key: "nav_achievements", href: "#achievements", icon: Star },
  { key: "nav_resources", href: "#resources", icon: Database },
  { key: "nav_contact", href: "#contact", icon: Mail },
];

const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const currentLang = languages.find((l) => l.code === lang);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#050c18]/90 backdrop-blur-lg border-b border-black/5 dark:border-white/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo mark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-20 group-hover:opacity-40 transition-opacity" />
              {/* Inner */}
              <div className="absolute inset-[2px] rounded-md bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <span
                  className="text-white text-xs font-bold tracking-wider"
                  style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
                >
                  {personalInfo.initials}
                </span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors"
                style={{ fontFamily: "var(--font-syne, Syne, sans-serif)" }}
              >
                Ilyes
              </span>
              <span className="text-[9px] font-medium text-cyan-500 tracking-[0.2em] uppercase">
                Boudissa
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="relative px-3 py-2 text-[13px] font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-1">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 transition-all"
              aria-label="Toggle theme"
            >
              {mounted && (
                theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )
              )}
            </button>

            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2.5 py-2 text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 rounded-lg transition-all"
              >
                <span>{currentLang?.flag}</span>
                <span>{currentLang?.label}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 rounded-xl bg-white dark:bg-[#0d1829] shadow-xl border border-black/8 dark:border-white/8 overflow-hidden">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-left transition-colors hover:bg-cyan-50 dark:hover:bg-cyan-500/10 ${
                        lang === l.code
                          ? "text-cyan-500 font-semibold"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      <span>{l.flag}</span>
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/8 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#050c18]/98 backdrop-blur-xl border-t border-black/5 dark:border-white/5">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/8 rounded-xl transition-all"
                >
                  <Icon className="w-4 h-4 text-cyan-500" />
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
