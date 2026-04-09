"use client";

import { useLanguage } from "@/hooks/use-language";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {t("footer_text")}
        </p>
      </div>
    </footer>
  );
}
