"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Enterprise Mobile Platform",
    category: "Mobile Development",
    description:
      "Scalable cross-platform mobile application with modern architecture and enterprise integrations.",
    tech: ["Flutter", "Firebase", "REST API"],
  },

  {
    title: "AI Automation Dashboard",
    category: "AI & Automation",
    description:
      "Intelligent workflow automation platform with analytics, integrations and scalable backend systems.",
    tech: ["React", "Node.js", "AI"],
  },

  {
    title: "Modern Web Platform",
    category: "Full Stack Development",
    description:
      "Responsive and high-performance web application focused on scalability and user experience.",
    tech: ["Next.js", "PostgreSQL", "Tailwind"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050816] px-6 py-32"
    >
      {/* Background */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

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
            Portfolio
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Selected projects & digital experiences.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            A selection of modern applications, scalable systems and premium
            digital solutions focused on performance and business impact.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl"
            >
              <div className="grid gap-0 lg:grid-cols-2">
                
                {/* LEFT IMAGE */}
                <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent">
                  
                  {/* Glow */}
                  <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />

                  {/* Fake Dashboard */}
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    
                    <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                      
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {project.title}
                          </h3>

                          <p className="text-sm text-zinc-400">
                            {project.category}
                          </p>
                        </div>

                        <div className="h-3 w-3 rounded-full bg-green-400" />
                      </div>

                      <div className="space-y-4">
                        <div className="h-4 rounded-full bg-white/10" />
                        <div className="h-4 w-3/4 rounded-full bg-white/10" />
                        <div className="h-24 rounded-2xl bg-blue-500/10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex flex-col justify-center p-10 lg:p-14">
                  
                  <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-bold text-white md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="mt-10 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition duration-300 hover:border-blue-500/30 hover:bg-white/10">
                    View Case Study

                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}