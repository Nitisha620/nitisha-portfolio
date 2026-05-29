"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Tech", href: "#tech" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero">
          <h1 className="text-xl font-bold tracking-wide">
            <span className="text-black">NITISHA</span>
          </h1>
        </a>
        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-gray-700 hover:text-black transition"
            >
              {link.name}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
