"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    name: "About",
    href: "#about",
  },

  {
    name: "Services",
    href: "#services",
  },

  {
    name: "Portfolio",
    href: "#portfolio",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/40 py-4 backdrop-blur-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          
          {/* LOGO */}
          <h1 className="text-2xl font-bold text-white">
            Victor<span className="text-blue-500">.</span>
          </h1>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button className="hidden rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-blue-600 md:block">
            Let’s Talk
          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed left-0 top-0 z-40 h-screen w-full bg-black/80 backdrop-blur-3xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-10">
              
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-semibold text-white"
                >
                  {item.name}
                </a>
              ))}

              <button className="mt-10 rounded-full bg-blue-500 px-8 py-4 text-white">
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}