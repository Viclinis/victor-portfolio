"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 25 });

export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      
      {particles.map((_, index) => {
        const size = Math.random() * 6 + 2;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}