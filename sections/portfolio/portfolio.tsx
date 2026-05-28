"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ParallaxCard from "@/components/parallax-card";  

const projects = [
  {
    title: "Tourism Multimedia App",
    category: "Mobile Development",
    description:
      "Interactive tourism mobile application with multimedia content, augmented reality and integrated navigation experience.",
    tech: ["Flutter", "Google Maps", "Firebase"],
    image: "/projects/app1.png",
  },

  {
    title: "Smart Tourism Maps",
    category: "Maps & Navigation",
    description:
      "Modern geolocation platform designed to guide tourists through ecological routes, landmarks and interactive experiences.",
    tech: ["Google Maps API", "React Native", "Location Services"],
    image: "/projects/app2.png",
  },

  {
    title: "Digital Pet Identity Card",
    category: "UI/UX Design",
    description:
      "Premium digital pet identification system with QR verification, responsive layout and elegant modern design.",
    tech: ["Figma", "UI Design", "QR System"],
    image: "/projects/app3.png",
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
        <ParallaxCard>
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
         </ParallaxCard>

        {/* Projects */}
        <div className="space-y-16">
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
                    <div className="relative min-h-[420px] overflow-hidden">
                    
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

                    {/* Bottom Fade */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
                    

                    {/* Glow */}
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 transition duration-700 group-hover:opacity-100" />
                    </div>

                {/* RIGHT CONTENT */}
                <div className="flex flex-col justify-center p-10 lg:p-14">
                  
                  <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold text-white md:text-4xl">
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