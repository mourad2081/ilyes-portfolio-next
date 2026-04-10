"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[2px] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #00d4ff, #e8a020, #00d4ff)",
        backgroundSize: "200% 100%",
        animation: "shimmer-text 2s linear infinite",
        boxShadow: "0 0 12px rgba(0,212,255,0.8), 0 0 24px rgba(0,212,255,0.4)",
      }}
    />
  );
}
