"use client";

import Navbar from "@/sections/navbar/navbar";
import Hero from "@/sections/hero/hero";
import About from "@/sections/about/about";
import Services from "@/sections/services/services";
import Stack from "@/sections/stack/stack";
import Portfolio from "@/sections/portfolio/portfolio";
import Contact from "@/sections/contact/contact";
import Footer from "@/sections/footer/footer";
import CursorGlow from "@/components/cursor-glow";
import ScrollProgress from "@/components/scroll-progress";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import Particles from "@/components/particles";
import NoiseOverlay from "@/components/noise-overlay";
import Spotlight from "@/components/spotlight";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>

      <Loader loading={loading} />

      <Particles />
      <Spotlight />
      <NoiseOverlay />

      <ScrollProgress />
      <CursorGlow />

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stack />
      <Portfolio />
      <Contact />
      <Footer />

    </main>
  );
}