"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 py-32"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl"
        >
          <div className="grid lg:grid-cols-2">
            
            {/* LEFT */}
            <div className="relative overflow-hidden p-10 lg:p-16">
              
              {/* Glow */}
              <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                  Contact
                </p>

                <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                  Let’s build something amazing together.
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
                  Open to collaborations, freelance projects, startup ideas and
                  innovative digital solutions focused on scalability and
                  performance.
                </p>

                {/* Contact Cards */}
                <div className="mt-12 space-y-5">
                  
                  <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      <Mail size={26} />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">Email</p>
                      <p className="text-white">
                        victortique.dev@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      <FaLinkedinIn size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">LinkedIn</p>
                      <p className="text-white">
                        linkedin.com/in/victortiquepinto
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      <FaGithub size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">GitHub</p>
                      <p className="text-white">
                        github.com/victortiquepinto
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="border-l border-white/10 p-10 lg:p-16">
              
              <form className="space-y-6">
                
                <div>
                  <label className="mb-3 block text-sm text-zinc-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-blue-500/40"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm text-zinc-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-blue-500/40"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm text-zinc-400">
                    Project Details
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-blue-500/40"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-500 px-6 py-4 font-medium text-white transition duration-300 hover:scale-[1.02] hover:bg-blue-600"
                >
                  Send Message

                  <MessageCircle size={20} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}