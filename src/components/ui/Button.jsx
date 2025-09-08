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
      whileHover={{
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" },
        boxShadow: "",
      }}
      whileTap={{
        scale: 0.95,
        rotate: 2,
        transition: { duration: 0.1, ease: "easeOut" },
      }}
      className={`${primary ? "bg-primary text-background shadow-primary/40 border-primary" : ""} ${accent ? "bg-accent shadow-accent/40 text-background border-accent" : ""} ${tertiary ? "bg-surface shadow-surface/40 border-text/30" : ""} relative cursor-pointer rounded-md border px-4 py-1 font-bold hover:shadow-[0_4px_22px] ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
