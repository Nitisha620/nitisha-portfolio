import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Hero />

      <About />

      <TechStack />

      <Experience />

      <Projects />
      
      <Contact />
    </main>
  );
}
