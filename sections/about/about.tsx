"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] px-6 py-32"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

        <Reveal>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Creating scalable digital experiences through technology.
          </h2>
        </Reveal>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            Software Engineer and MSc in ICT specialized in mobile development,
            scalable architectures, backend systems and premium digital
            platforms.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Combining technical expertise, innovation and business-focused
            solutions to create modern applications with high performance and
            exceptional user experience.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-white">5+</h3>

              <p className="mt-2 text-zinc-400">
                Years of experience
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-white">20+</h3>

              <p className="mt-2 text-zinc-400">
                Technologies & frameworks
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl" />

          <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
            
            <div className="space-y-8">
              
              <div>
                <p className="mb-2 text-sm text-blue-400">
                  SPECIALIZATION
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  Mobile & Full Stack Development
                </h3>

                <p className="mt-3 text-zinc-400">
                  Flutter, Kotlin, Swift, React and scalable enterprise
                  architectures.
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <p className="mb-2 text-sm text-blue-400">
                  EXPERTISE
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  AI & Automation
                </h3>

                <p className="mt-3 text-zinc-400">
                  Intelligent workflows and scalable integrations focused on
                  business optimization.
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <p className="mb-2 text-sm text-blue-400">
                  APPROACH
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  Business-focused Technology
                </h3>

                <p className="mt-3 text-zinc-400">
                  Building scalable and impactful digital experiences through
                  modern software engineering.
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}