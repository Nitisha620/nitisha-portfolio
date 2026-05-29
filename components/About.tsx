"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
              Me
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            4+ years of building products that go live, scale, and matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <p>
              I'm a{" "}
              <span className="font-semibold text-black">Full Stack Software Engineer</span>{" "}
              who builds scalable mobile apps, backend systems, and live consumer products — from idea to production.
            </p>

            <p>
              I specialize in{" "}
              <span className="font-medium">Flutter</span> for mobile,{" "}
              <span className="font-medium">React</span> for web, and{" "}
              <span className="font-medium">Spring Boot</span> for backend —
              owning architecture, APIs, deployment, and product delivery end-to-end.
            </p>

            <p>
              I've shipped real-time multiplayer platforms, geospatial fleet tracking systems,
              government digitization tools, and live browser extensions — each one
              built with full ownership from design to deployment.
            </p>

            <p>
              I care deeply about{" "}
              <span className="font-medium">clean architecture</span>,{" "}
              <span className="font-medium">product impact</span>, and writing
              code that's maintainable long after the first release.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {[
              {
                title: "Mobile & Web",
                icon: "📱",
                desc: "Flutter & React — 4+ production apps shipped to real users across multiple platforms.",
              },
              {
                title: "Backend & Cloud",
                icon: "⚙️",
                desc: "Spring Boot APIs on AWS (EC2, S3, Lambda, CloudFront) with CI/CD and OTA delivery.",
              },
              {
                title: "Real-time Systems",
                icon: "🔴",
                desc: "WebSocket multiplayer games, geospatial live tracking, and push notification pipelines.",
              },
              {
                title: "Full Ownership",
                icon: "🏆",
                desc: "Led complete app redevelopments and solo-shipped live consumer products end-to-end.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-24 text-sm tracking-wide"
        >
          Focused on building products that are fast, scalable, and meaningful.
        </motion.p>
      </div>
    </section>
  );
}