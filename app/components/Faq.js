"use client";
import { useState } from "react";
import Link from "next/link";
import { FaPlus, FaMinus, FaArrowRight, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const faqData = [
  {
    question: "What is a digital platform?",
    answer:
      "A digital platform is an online space that enables users to connect, communicate, or conduct business effectively using various digital tools and resources.",
  },
  {
    question: "How can a digital platform help your business grow?",
    answer:
      "Digital platforms expand your business reach, increase customer engagement, streamline operations, and provide valuable data insights to boost growth and efficiency.",
  },
  {
    question: "How do I book a meeting with your technical team?",
    answer:
      "You can schedule a meeting by visiting our website, selecting your preferred time slot, and completing the booking form — we'll confirm within 24 hours.",
  },
  {
    question: "How many projects have you completed so far?",
    answer:
      "We have successfully completed 5000+ projects, each tailored to our clients' unique requirements, ensuring quality and timely delivery across various industries.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in React.js, Node.js, Angular, PHP, Laravel, .Net, Java, React Native, Flutter, WordPress, Shopify, and more — covering web, mobile, and e-commerce.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes. We provide dedicated post-launch support, bug fixes, performance monitoring, and ongoing maintenance packages to ensure your product keeps running smoothly.",
  },
];

export default function Faq() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 xl:px-28 bg-white relative overflow-hidden">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-violet-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* ── Left: heading + CTA ── */}
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <span
            className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-5 leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            Our team continuously engages in professional development and
            industry events to stay abreast of the latest IT trends and
            technologies.
          </p>

          {/* Quick stat chips */}
          <div className="flex gap-3 mb-7">
            <div className="bg-violet-50 border border-violet-100 rounded-xl px-4 py-2.5 text-center flex-1">
              <p className="text-lg font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                {faqData.length}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">Questions</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-2.5 text-center flex-1">
              <p className="text-lg font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                24h
              </p>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">Response Time</p>
            </div>
          </div>

          {/* Contact card */}
          <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-6 text-white">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <FaPhoneAlt className="text-white w-4 h-4" />
            </div>
            <p className="font-extrabold text-base mb-1.5">Still have questions?</p>
            <p className="text-sm text-white/70 mb-5 leading-relaxed">
              Our team is happy to answer anything about our services, pricing,
              or process. Reach out any time.
            </p>
            <div className="space-y-2 mb-5">
              <a
                href="mailto:info@futureittouch.com"
                className="flex items-center gap-2.5 bg-white/15 hover:bg-white/25 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200"
              >
                <FaEnvelope className="w-3.5 h-3.5 text-white/80" />
                info@futureittouch.com
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-violet-700 px-6 py-2.5 text-sm font-bold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* ── Right: accordion ── */}
        <div className="lg:col-span-8 space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                active === index
                  ? "border-violet-200 bg-violet-50/60 shadow-sm shadow-violet-100"
                  : "border-gray-100 bg-white hover:border-violet-100"
              }`}
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left"
              >
                {/* Number badge */}
                <span
                  className={`shrink-0 w-9 h-9 rounded-xl text-xs font-extrabold flex items-center justify-center transition-all duration-200 ${
                    active === index
                      ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-300/40"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`flex-1 font-semibold text-base leading-snug transition-colors duration-200 ${
                    active === index ? "text-violet-700" : "text-gray-900"
                  }`}
                >
                  {item.question}
                </span>

                {/* Plus / Minus toggle */}
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    active === index
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-300/40"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {active === index ? (
                    <FaMinus className="w-3 h-3" />
                  ) : (
                    <FaPlus className="w-3 h-3" />
                  )}
                </span>
              </button>

              {active === index && (
                <div className="px-6 pb-5" style={{ paddingLeft: "76px" }}>
                  <div className="h-px bg-gradient-to-r from-violet-200 to-transparent mb-4" />
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
