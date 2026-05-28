"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] px-6 pt-32">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 backdrop-blur-xl"
          >
            Software Architect & Mobile Developer
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="/cv.pdf" download className="rounded-full bg-blue-500 px-8 py-4 font-medium text-white transition hover:scale-105 hover:bg-blue-600"            >
              Download CV
            </a>

            <a
              href="https://wa.me/573136460357"
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </motion.div>

          {/* TECH BADGES */}
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
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl" />

          <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            
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

            <div className="space-y-5">
              
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <h4 className="text-lg font-semibold text-white">
                  Mobile Development
                </h4>

                <p className="mt-2 text-zinc-400">
                  Flutter • Kotlin • Swift • Cross-platform
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <h4 className="text-lg font-semibold text-white">
                  Backend & APIs
                </h4>

                <p className="mt-2 text-zinc-400">
                  Spring Boot • Node.js • PostgreSQL
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
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