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

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Close language dropdown on outside click
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/25">
              {personalInfo.initials}
            </div>
            <span className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-cyan-500 transition-colors">
              Ilyes.
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              ))}
            </button>

            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              >
                {currentLang?.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${langOpen ? "rotate-180" : ""}`}
                />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-24 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-white/10 overflow-hidden">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-left transition-colors hover:bg-slate-100 dark:hover:bg-white/10 ${
                        lang === l.code
                          ? "text-cyan-500 font-semibold"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200 dark:border-white/5">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4" />
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
