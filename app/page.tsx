import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 overflow-x-hidden">
      
      {/* Hero */}
      <section>
        <Hero />
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* About */}
      <section className="py-10">
        <About />
      </section>

      {/* Tech */}
      <section className="py-10 bg-white">
        <TechStack />
      </section>

      {/* Experience */}
      <section className="py-10">
        <Experience />
      </section>

      {/* Projects */}
      <section className="py-10 bg-white">
        <Projects />
      </section>

      {/* Contact */}
      <section className="py-10">
        <Contact />
      </section>

    </main>
  );
}