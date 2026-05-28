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

export default function Home() {
  return (
    <main>
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