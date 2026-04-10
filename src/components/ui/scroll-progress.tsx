"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[2px] transition-none pointer-events-none"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #06b6d4 0%, #f59e0b 100%)",
        boxShadow: "0 0 8px rgba(6, 182, 212, 0.6)",
      }}
    />
  );
}
