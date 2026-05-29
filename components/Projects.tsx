"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, ArrowRight, Sparkles } from "lucide-react";

export default function Projects() {
  const featuredProject = {
    title: "Book Insight",
    subtitle:
      "Instant AI-powered book summaries, ratings & prices anywhere you browse.",
    description:
      "A live Chrome extension that enhances book discovery across the web. Integrates the Gemini API to deliver real-time AI-generated book summaries, ratings, reading time, genres, author information, movie adaptations, and price comparisons — all without leaving the page.",
    tech: [
      "JavaScript",
      "Chrome Extension API",
      "Gemini API",
      "Cloudflare Workers",
      "REST APIs",
      "UI/UX",
      "Affiliate System",
    ],
    live: "https://chromewebstore.google.com/detail/dadnehdpeopkekhhnkajomacdfdlidcb?utm_source=item-share-cb",
  };

  const projects = [
    {
      title: "Imposter Word Game",
      description:
        "Cross-platform real-time multiplayer social deduction game. React web client + Flutter mobile app, powered by PartyKit WebSockets for live room sync and Supabase for 1000+ curated word pairs.",
      tech: ["React", "Flutter", "PartyKit", "WebSockets", "Supabase"],
      link: "#",
      emoji: "🎮",
      gradient: "from-violet-50 to-pink-50",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather experience with dynamic UI updates using Bloc state management and OpenWeather APIs.",
      tech: ["Flutter", "Bloc", "REST APIs"],
      link: "https://github.com/Nitisha620/weather_forecast",
      emoji: "🌦️",
      gradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "Route Tracker",
      description:
        "Live vehicle tracking system with playback timeline and route visualization using Google Maps SDK.",
      tech: ["Flutter", "Google Maps", "Riverpod"],
      link: "https://github.com/Nitisha620/flaperon",
      emoji: "📍",
      gradient: "from-green-50 to-emerald-50",
    },
    {
      title: "Production Monitoring System",
      description:
        "Enterprise-grade solution for tracking production metrics, assets, and operational workflows at scale.",
      tech: ["Flutter", "Spring Boot", "AWS"],
      link: "#",
      emoji: "🏭",
      gradient: "from-orange-50 to-amber-50",
    },
    {
      title: "Government Digitization App",
      description:
        "Election workflow digitization with OCR-based form capture, secure authentication, dashboards, and Excel export.",
      tech: ["Flutter", "Spring Boot", "OCR", "AWS"],
      link: "#",
      emoji: "🏛️",
      gradient: "from-slate-50 to-gray-100",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-28 px-6"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600">
            <Sparkles size={16} />
            Selected Work
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-6xl">
            Projects That{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Solve Real Problems
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500 md:text-lg">
            Live products, enterprise systems and open-source tools built with
            performance, design and user experience in mind.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl lg:grid-cols-2"
        >
          {/* Left Preview */}
          <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 p-8">
            <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute left-10 bottom-10 h-28 w-28 rounded-full bg-pink-400/20 blur-3xl" />

            {/* Browser Mockup */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_260px]">
                <div className="space-y-3">
                  <div className="h-4 w-2/3 rounded bg-white/10" />
                  <div className="h-4 w-5/6 rounded bg-white/10" />
                  <div className="h-4 w-1/2 rounded bg-white/10" />
                  <div className="mt-6 h-20 rounded-xl bg-white/5" />
                  <div className="h-20 rounded-xl bg-white/5" />
                </div>

                {/* Popup Mock */}
                <div className="rounded-2xl border border-white/10 bg-white p-4 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900">
                      📚 Book Insight
                    </p>
                    <span className="text-xs text-emerald-600 font-medium">
                      LIVE
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-1">
                    <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      AI-Powered
                    </span>
                    <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      Gemini
                    </span>
                  </div>

                  <div className="mt-3 h-4 w-3/4 rounded bg-gray-200" />
                  <div className="mt-2 h-3 w-1/2 rounded bg-gray-100" />

                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-pink-100 px-2 py-1 text-[10px] text-pink-600">
                      Summary
                    </span>
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] text-blue-600">
                      Ratings
                    </span>
                    <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] text-amber-700">
                      Prices
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="h-3 rounded bg-gray-100" />
                    <div className="h-3 rounded bg-gray-100" />
                    <div className="h-3 w-4/5 rounded bg-gray-100" />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-gray-50 p-2 text-center text-xs">
                      Amazon
                    </div>
                    <div className="rounded-lg bg-gray-50 p-2 text-center text-xs">
                      Flipkart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-12">
            <p className="font-semibold text-pink-500">
              Featured Project · Live Product
            </p>

            <h3 className="mt-3 text-3xl font-black text-gray-900 md:text-5xl">
              {featuredProject.title}
            </h3>

            <p className="mt-4 text-lg font-medium text-gray-700">
              {featuredProject.subtitle}
            </p>

            <p className="mt-5 leading-relaxed text-gray-500">
              {featuredProject.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={featuredProject.live}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-medium text-white transition hover:scale-105"
              >
                <Globe size={18} />
                View Extension
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Case Study
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900">More Projects</h3>

          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`rounded-2xl bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center`}
                >
                  <span className="text-5xl">{project.emoji}</span>
                </div>

                <h4 className="mt-6 text-xl font-bold text-gray-900">
                  {project.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 font-medium text-pink-500 hover:text-pink-600"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <p className="mt-6 text-xs text-gray-400 italic">
                    Enterprise / Private Project
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
