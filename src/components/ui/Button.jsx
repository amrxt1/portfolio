"use client";

import { motion } from "motion/react";

const Button = ({
  children,
  primary = false,
  accent = false,
  tertiary = false,
  className = "",
}) => {
  return (
    <motion.button
      initial={false}
      whileHover={{
        y: -5,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.95,
        rotate: 1.5,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`${primary ? "bg-primary text-background border-primary" : ""} ${accent ? "bg-accent text-background border-accent" : ""} ${tertiary ? "bg-surface border-text/30" : ""} relative cursor-pointer rounded-md border px-4 py-1 font-bold ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
