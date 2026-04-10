"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  style,
  strength = 30,
  as: Tag = "button",
  href,
  target,
  rel,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 300, damping: 20, mass: 0.5 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rawX.set(((e.clientX - cx) / rect.width) * strength);
    rawY.set(((e.clientY - cy) / rect.height) * strength);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const props = {
    href,
    target,
    rel,
    onClick,
    className,
    style,
  };

  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="inline-block">
      <motion.div style={{ x, y }}>
        {Tag === "a" ? (
          <a {...props}>{children}</a>
        ) : (
          <button {...props}>{children}</button>
        )}
      </motion.div>
    </div>
  );
}
