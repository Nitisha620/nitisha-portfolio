"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // your original states (unchanged)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // chat states
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey 👋 I'm Nitisha. What's your name?" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);

  const questions = [
    {
      key: "name",
      setter: setName,
      next: "Nice to meet you! What's your email?",
    },
    { key: "email", setter: setEmail, next: "What’s this about?" },
    { key: "subject", setter: setSubject, next: "Tell me more 👇" },
    { key: "message", setter: setMessage, next: null },
  ];

  // your SAME API logic (unchanged)
  const handleSubmit = async () => {
    const discordMessage = {
      embeds: [
        {
          title: "Message from a recruiter hopefully 🤞🏻",
          color: 5814783,
          fields: [
            { name: "👤 Name", value: name || "N/A", inline: true },
            { name: "📧 Email", value: email || "N/A", inline: true },
            { name: "Subject", value: subject || "N/A" },
            { name: "💬 Message", value: message || "N/A" },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      setLoading(true);
      await axios.post("/api/contact", discordMessage);

      setSuccess(true);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "✅ Message sent successfully!" },
      ]);

      // reset
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setStep(0);
    } catch (e) {
      console.error(e);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "❌ Failed to send message." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const current = questions[step];

    // save to state (your existing states)
    current.setter(input);

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");

    // move to next question or submit
    if (step < questions.length - 1) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", text: current.next! }]);
      }, 400);
      setStep(step + 1);
    } else {
      await handleSubmit();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="py-28 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE (unchanged identity) */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Let’s build something{" "}
            <span className="text-blue-500">impactful</span>.
          </h1>

          <p className="mt-6 text-gray-500 max-w-md">
            Have an idea or opportunity? Reach out — I’d love to collaborate.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center">
              <FiMail className="text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-xs">EMAIL</p>
              <p className="font-semibold">nitishajain94@gmail.com</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://linkedin.com/in/nitisha-jain-2099"
              target="_blank"
              className="px-5 py-3 bg-black text-white rounded-xl flex gap-2 items-center"
            >
              <FiLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/Nitisha620"
              target="_blank"
              className="px-5 py-3 border rounded-xl flex gap-2 items-center"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </div>

        <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6 flex flex-col h-[520px] overflow-hidden">
          {/* Glow background */}
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-blue-300/20 blur-[120px] rounded-full" />

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center text-sm font-bold shadow">
                N
              </div>
              <div>
                <p className="text-sm font-semibold">Nitisha Assistant</p>
                <p className="text-xs text-gray-400">
                  Typically replies instantly
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed rounded-2xl ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-sm shadow-md"
                      : "bg-white border border-gray-200 text-gray-700 rounded-tl-sm shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Section */}
          <div className="mt-6">
            <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your response..."
                className="flex-1 outline-none text-sm bg-transparent"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition"
              >
                Send
                <FiSend size={14} />
              </button>
            </div>

            {/* Status */}
            {loading && (
              <p className="text-xs text-gray-400 mt-2">Sending message...</p>
            )}

            {success && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Message delivered successfully
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
