"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] px-6 py-20">
      
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
        
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Victor<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-4 max-w-md text-zinc-400">
            Building scalable digital experiences through modern software
            engineering, AI and premium technologies.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-6 md:items-end">
          
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/victortiquepinto"
              className="text-zinc-400 transition hover:text-blue-400"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/victortiquepinto"
              className="text-zinc-400 transition hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-zinc-400 transition hover:text-blue-400"
            >
              Contact
            </a>
          </div>

          <p className="text-sm text-zinc-500">
            © 2026 Victor Tique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}