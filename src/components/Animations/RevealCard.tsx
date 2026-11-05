"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealCardProps = {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
};

const variants = {
  left: {
    opacity: 0,
    x: -55,
    y: 10,
  },

  right: {
    opacity: 0,
    x: 55,
    y: 10,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

export default function RevealCard({
  children,
  direction = "left",
  delay = 0,
  className,
}: RevealCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={variants}
      initial={reduceMotion ? false : direction}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
        margin: "0px",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
