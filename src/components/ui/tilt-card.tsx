"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glareEnabled?: boolean;
  intensity?: number;
}

export default function TiltCard({
  children,
  className = "",
  style,
  glareEnabled = true,
  intensity = 12,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawGlareX = useMotionValue(50);
  const rawGlareY = useMotionValue(50);

  const springConfig = { stiffness: 200, damping: 24, mass: 0.8 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]), springConfig);
  const glareX = useSpring(rawGlareX, { stiffness: 150, damping: 20 });
  const glareY = useSpring(rawGlareY, { stiffness: 150, damping: 20 });

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(0,212,255,0.12) 0%, transparent 60%)`
  );

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(x);
    rawY.set(y);
    rawGlareX.set(((e.clientX - rect.left) / rect.width) * 100);
    rawGlareY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    rawGlareX.set(50);
    rawGlareY.set(50);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="perspective-1000"
    >
      <motion.div
        className={`relative preserve-3d ${className}`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      >
        {children}
        {glareEnabled && (
          <motion.div
            className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
            style={{ background: glareBackground }}
          />
        )}
      </motion.div>
    </div>
  );
}
