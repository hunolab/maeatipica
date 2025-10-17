
"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface PointerProps {
  children: React.ReactNode;
  className?: string;
}

export const Pointer: React.FC<PointerProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        x.set(e.clientX - ref.current.offsetWidth / 2);
        y.set(e.clientY - ref.current.offsetHeight / 2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring, position: "fixed", pointerEvents: "none", zIndex: 9999 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};