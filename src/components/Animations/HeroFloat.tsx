"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface HeroFloatProps {
  children: ReactNode;
  className: string;
  innerClassName?: string;
  rotate?: number;
  rotateAmount?: number;
  distance?: number;
  duration?: number;
}

export default function HeroFloat({
  children,
  className,
  innerClassName,
  rotate = 0,
  rotateAmount = 2,
  distance = 12,
  duration = 7,
}: HeroFloatProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <motion.div
        className={innerClassName}
        initial={false}
        animate={
          reduceMotion
            ? {
                y: 0,
                rotate,
              }
            : {
                y: [0, -distance, 0],
                rotate: [rotate, rotate + rotateAmount, rotate],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                duration,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
