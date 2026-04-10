"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

function extractNumber(val: string): { prefix: string; num: number; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: val };
  return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
}

export default function AnimatedCounter({ value, className = "", style }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { prefix, num, suffix } = extractNumber(value);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20, mass: 1 });

  useEffect(() => {
    if (!inView) return;
    const unsubscribe = spring.on("change", (v) => {
      if (ref.current) {
        const isFloat = num % 1 !== 0;
        ref.current.textContent = prefix + (isFloat ? v.toFixed(1) : Math.round(v).toString()) + suffix;
      }
    });
    motionVal.set(num);
    return unsubscribe;
  }, [inView, num, prefix, suffix, motionVal, spring]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}0{suffix}
    </span>
  );
}
