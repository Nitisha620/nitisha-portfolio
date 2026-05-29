"use client";
import { motion } from "framer-motion";

export default function TechStack() {
  const techStack = [
    {
      title: "Languages",
      items: ["Dart", "Java", "Python", "C++", "SQL"],
      icon: "💻",
    },
    {
      title: "Frontend & Mobile",
      items: ["Flutter", "React", "React Native"],
      icon: "📱",
    },
    {
      title: "Backend",
      items: ["Spring Boot", "Spring Security", "REST APIs", "PartyKit", "WebSockets"],
      icon: "⚙️",
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB", "Supabase"],
      icon: "🗄️",
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS CloudFront", "CI/CD", "Shorebird OTA"],
      icon: "☁️",
    },
    {
      title: "Maps & Real-time",
      items: ["Google Maps SDK", "WebSockets", "FCM", "OneSignal"],
      icon: "📡",
    },
    {
      title: "AI & APIs",
      items: ["Gemini API", "Chrome Extension APIs", "REST APIs"],
      icon: "🤖",
    },
    {
      title: "Tools",
      items: [
        "Git", "Bitbucket", "Postman", "Jira", "PuTTY",
        "VS Code", "Android Studio", "Play Console", "App Store Connect",
      ],
      icon: "🛠️",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="tech"
      className="relative py-28 px-6 bg-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-indigo-300/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-blue-200/20 blur-[100px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-4">
          Tech{" "}
          <span className="text-indigo-500">Stack</span>
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Tools and technologies I use to build scalable, production-grade systems
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gray-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                <span>{section.icon}</span> {section.title}
              </h3>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs bg-white border border-gray-200 rounded-full hover:bg-indigo-50 hover:border-indigo-200 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}