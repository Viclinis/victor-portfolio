"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Cpu,
  Bot,
  Layers3,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "High-performance mobile applications using Flutter, Kotlin and Swift for scalable user experiences.",
  },

  {
    icon: Globe,
    title: "Web Platforms",
    description:
      "Modern and responsive web applications with React, Next.js and scalable frontend architectures.",
  },

  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Robust backend systems, REST APIs and scalable architectures using Spring Boot and Node.js.",
  },

  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Intelligent workflows, automation strategies and AI-powered integrations for business optimization.",
  },

  {
    icon: Layers3,
    title: "Software Architecture",
    description:
      "Design of scalable, maintainable and enterprise-grade software architectures.",
  },

  {
    icon: Cpu,
    title: "Technology Consulting",
    description:
      "Digital transformation, technical leadership and strategic consulting for modern businesses.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050816] px-6 py-32"
    >
      {/* Background */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

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
            Services
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Premium digital solutions for modern businesses.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            Combining software engineering, architecture and innovation to build
            scalable digital products and intelligent systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/10"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
                </div>

                {/* Icon */}
                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Icon size={32} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="relative mt-10 h-px w-full bg-white/10">
                  <div className="absolute left-0 top-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}