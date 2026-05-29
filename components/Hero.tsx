"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] -z-10"></div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Open to opportunities
      </motion.div>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
          Nitisha Jain
        </span>
      </h1>

      {/* Role */}
      <p className="mt-4 text-lg text-gray-500 tracking-wide">
        Full Stack Engineer • 4+ Years Experience • Mobile Specialist
      </p>

      {/* Description */}
      <p className="mt-6 text-xl text-gray-600 max-w-2xl leading-relaxed">
        Product-focused engineer who builds scalable mobile apps, backend
        systems, and live consumer products. From real-time multiplayer games to
        government digitization — I own the full stack.
      </p>

      {/* Tech Stack */}
      <p className="mt-4 text-gray-400 text-sm">
        Flutter • React • Spring Boot • AWS • REST APIs • System Design
      </p>

      {/* Buttons */}
      <motion.div className="mt-10 flex gap-4 flex-wrap justify-center">
        <a
          href="https://github.com/Nitisha620"
          target="_blank"
          className="px-6 py-3 bg-black text-white rounded-xl shadow-lg hover:scale-105 hover:bg-gray-800 transition-all duration-300"
        >
          🚀 View Github
        </a>

        <a
          href="https://linkedin.com/in/nitisha-jain-2099"
          target="_blank"
          className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://drive.google.com/uc?export=download&id=1IxmT21kU1dGU_RUkansOjM77T3PxiDt9"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
        >
          📄 Resume
        </a>
      </motion.div>

      {/* Bottom subtle scroll hint */}
      <div className="absolute bottom-6 text-gray-400 text-sm animate-bounce">
        ↓ Scroll to explore
      </div>
    </section>
  );
}
