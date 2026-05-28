"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/magnetic-button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] px-6 pt-32">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        
        {/* Glow Left */}
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

        {/* Glow Right */}
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
              },

              scale: {
                duration: 0.8,
              },

              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative"
          >
            Software Architect & Mobile Developer
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Building
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              scalable digital{" "}
            </span>
            experiences for modern businesses.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            Senior software engineer specialized in mobile development,
            scalable architectures, web platforms, backend systems and
            AI-powered solutions for startups and enterprises.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl"
          >

            {/* Download CV */}
            <MagneticButton
              className="rounded-full bg-blue-500 px-8 py-4 font-medium text-white transition hover:scale-105 hover:bg-blue-600"
            >
              <a href="/cv.pdf" download>
                Download CV
              </a>
            </MagneticButton>

            {/* Contact */}
            <MagneticButton
              className="rounded-full px-8 py-4 font-medium text-white transition hover:bg-white/10"
            >
              <a
                href="https://wa.me/573136460357"
                target="_blank"
              >
                Contact Me
              </a>
            </MagneticButton>

          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-14 flex flex-wrap gap-4"
          >
            {[
              "Flutter",
              "Kotlin",
              "Swift",
              "React",
              "Spring Boot",
              "AI Solutions",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl" />
          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-blue-500/0 opacity-0 blur-3xl transition duration-700 group-hover:bg-blue-500/10 group-hover:opacity-100" />

          {/* Card */}
          <div className="group relative rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:border-blue-500/30">
            
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Digital Solutions
                </h3>

                <p className="text-zinc-400">
                  Architecture • Mobile • AI
                </p>
              </div>

              <div className="h-4 w-4 rounded-full bg-green-400" />
            </div>

            {/* Cards */}
            <div className="space-y-5">

              {/* Mobile */}
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6 transition duration-300 hover:border-blue-500/30 hover:bg-black/40">
                <h4 className="text-lg font-semibold text-white">
                  Mobile Development
                </h4>

                <p className="mt-2 text-zinc-400">
                  Flutter • Kotlin • Swift • Cross-platform
                </p>
              </div>

              {/* Backend */}
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6 transition duration-300 hover:border-blue-500/30 hover:bg-black/40">
                <h4 className="text-lg font-semibold text-white">
                  Backend & APIs
                </h4>

                <p className="mt-2 text-zinc-400">
                  Spring Boot • Node.js • PostgreSQL
                </p>
              </div>

              {/* AI */}
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6 transition duration-300 hover:border-blue-500/30 hover:bg-black/40">
                <h4 className="text-lg font-semibold text-white">
                  AI & Automation
                </h4>

                <p className="mt-2 text-zinc-400">
                  Intelligent workflows and scalable systems
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}