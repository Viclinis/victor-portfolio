"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  loading: boolean;
}

export default function Loader({
  loading,
}: Props) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#050816]"
        >
          {/* Background Glow */}
          <div className="absolute h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

          {/* Logo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative z-10"
          >
            <h1 className="text-6xl font-bold text-white md:text-8xl">
              Victor
              <span className="text-blue-500">.</span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                delay: 0.4,
                duration: 1,
              }}
              className="mt-4 h-[2px] bg-blue-500"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}