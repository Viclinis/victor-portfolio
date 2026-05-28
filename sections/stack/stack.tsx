"use client";

import { motion } from "framer-motion";

const technologies = [
  "Flutter",
  "Kotlin",
  "Swift",
  "React",
  "Next.js",
  "TypeScript",
  "Spring Boot",
  "Node.js",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "Git",
  "REST APIs",
  "TailwindCSS",
  "Framer Motion",
  "AI Solutions",
];

export default function Stack() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-32">
      
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            Technology Stack
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Modern technologies for scalable digital products.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            Building modern applications using enterprise-grade technologies,
            scalable architectures and high-performance frameworks.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/10"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
              </div>

              {/* Tech Name */}
              <div className="relative flex items-center justify-center">
                <h3 className="text-center text-2xl font-semibold text-white">
                  {tech}
                </h3>
              </div>

              {/* Bottom Accent */}
              <div className="relative mt-8 h-px w-full bg-white/10">
                <div className="absolute left-0 top-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}