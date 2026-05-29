"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    period: "Sept 2023 – Present",
    color: "bg-blue-500",
    highlights: [
      "Shipped 4+ production mobile applications — enterprise mobility, government digitization, and client-facing platforms — from architecture to App Store / Play Store release.",
      "Led end-to-end redevelopment of a flagship mobile app, resulting in a 95% increase in user adoption over the legacy platform.",
      "Built a government digital data capture application for election workflows: OCR-based form digitization, secure auth, dashboards, advanced search, and Excel export.",
      "Designed and optimized Spring Boot APIs and scheduled backend jobs to automate critical platform workflows.",
      "Built real-time geospatial tracking systems using Google Maps SDK and backend location services for live fleet monitoring.",
      "Architected AWS infrastructure (Lambda, EC2, S3, CloudFront) for scalable backend services and web deployments.",
      "Improved release speed and user engagement via CI/CD pipelines, Shorebird OTA updates, and FCM / OneSignal push notifications.",
    ],
    tags: [
      "Flutter",
      "Spring Boot",
      "AWS",
      "Google Maps SDK",
      "FCM",
      "Shorebird",
      "CI/CD",
    ],
  },
  {
    role: "Software Engineer",
    period: "July 2021 – Aug 2023",
    color: "bg-purple-500",
    highlights: [
      "Built and maintained enterprise web applications supporting internal business operations and workflow management.",
      "Delivered frontend enhancements using React to improve usability and user experience across multiple product areas.",
      "Developed Java-based backend modules covering business logic, data handling, and feature releases.",
      "Resolved production issues and performance bottlenecks to keep systems running smoothly at scale.",
      "Mentored new engineers through onboarding, knowledge transfer, and release support.",
    ],
    tags: ["React", "Java", "Spring", "Enterprise"],
  },
];

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="experience"
      className="relative py-28 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[300px] bg-purple-300/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          Work <span className="text-purple-500">Experience</span>
        </h2>
        <p className="text-center text-gray-500 mb-16">
          4+ years of shipping real products to real users
        </p>

        <div className="relative border-l-2 border-gray-200 pl-8 space-y-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`absolute -left-[41px] top-2 w-5 h-5 ${exp.color} rounded-full ring-4 ring-white`}
              />

              <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5 text-gray-700 text-sm leading-relaxed">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-purple-400 mt-0.5 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-purple-50 text-purple-700 border border-purple-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards — about what I achieved, not where */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 p-7 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100"
        >
          <h4 className="text-lg font-bold text-gray-900 mb-5">
            🏆 Recognition
          </h4>
          <div className="grid sm:grid-cols-3 gap-5 text-sm text-gray-700">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
              <p className="text-2xl font-extrabold text-purple-600">×3</p>
              <p className="font-semibold mt-1">Employee of the Month</p>
              <p className="text-gray-500 text-xs mt-1">
                Leadership, feature delivery under tight deadlines, cross-team
                collaboration.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
              <p className="text-2xl font-extrabold text-blue-600">×2</p>
              <p className="font-semibold mt-1">Rookie of the Quarter</p>
              <p className="text-gray-500 text-xs mt-1">
                Outstanding early performance and impact — RISE Award recipient.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-indigo-100">
              <p className="text-2xl font-extrabold text-indigo-600">10+</p>
              <p className="font-semibold mt-1">Peer Appreciation Badges</p>
              <p className="text-gray-500 text-xs mt-1">
                Consistent ownership, delivery, and collaboration recognized by
                peers and leadership.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
