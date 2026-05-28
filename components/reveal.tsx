"use client";

import { motion } from "framer-motion";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Reveal({
  children,
  className,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}