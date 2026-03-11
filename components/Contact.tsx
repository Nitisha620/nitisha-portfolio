"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const discordMessage = {
      embeds: [
        {
          title: "Message from a recuiter hopefully 🤞🏻",
          color: 5814783,
          fields: [
            {
              name: "👤 Name",
              value: name,
              inline: true,
            },
            {
              name: "📧 Email",
              value: email,
              inline: true,
            },
            {
              name: "Subject",
              value: subject,
            },
            {
              name: "💬 Message",
              value: message,
            },
          ],
          timeStamp: new Date().toISOString(),
        },
      ],
    };

    try {
      setLoading(true);
      await axios.post(
        "/api/contact",
        discordMessage,
      );
      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (e) {
      setLoading(false);
      console.error(e);
      alert("Failed to send message");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl">Let's Build Something Together.</h1>
            <p className="mt-6 text-gray-400 max-w-md">
              Have a groundbreaking idea or a complex problem to solve? I'm
              ready to help you architect and develop your next digital
              masterpiece.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center">
                <FiMail color="white" size={22} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">EMAIL ME AT</p>
                <p className="font-semibold">nitishajain94@gmail.com</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://linkedin.com/in/nitisha-jain-2099"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition text-white flex items-center gap-2"
              >
                <FiLinkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Nitisha620"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition text-white flex items-center gap-2"
              >
                <FiGithub size={18} />
                Github
              </a>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-white shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-6">Drop a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="text"
                placeholder="Project Inquiry"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows={5}
                placeholder="Tell me about your projects..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-medium transition transform hover:scale-[1.02] flex gap-2 items-center justify-center "
              >
                {loading ? "Sending... " : "Send Message"}
                <FiSend />
              </button>
              {success && (
                <p className="text-green-600 mt-4">
                  Message Sent Successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
