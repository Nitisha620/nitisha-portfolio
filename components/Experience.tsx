"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="experience"
      className="py-24 px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Flutter Developer</h3>
            <p className="text-gray-600">Company Name • 2023 – Present</p>
            <p className="text-gray-700 mt-3 max-w-3xl">
              Working on mobile applications involving asset tracking,
              production monitoring, and enterprise dashboards. Responsible for
              UI development, API integration, and state management using Bloc
              architecture.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
