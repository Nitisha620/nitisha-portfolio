import { nav } from "framer-motion/client";

export default function () {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 bg-white z-50">
      <h1 className="text-xl font-bold"
      >NITISHA</h1>

      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#tech">Tech Stack</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
