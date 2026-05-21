"use client";
import { useState } from "react";
import Link from "next/link";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";

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
    <section className="py-20 px-4 sm:px-6 md:px-12 xl:px-28 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: heading + CTA */}
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <span
            className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
            Our Expert{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
              Answers
            </span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Our team continuously engages in professional development and
            industry events to stay abreast of the latest IT trends and
            technologies.
          </p>

          <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 rounded-2xl p-6">
            <p className="font-bold text-gray-900 mb-2">Still have questions?</p>
            <p className="text-sm text-gray-500 mb-5">
              Our team is happy to answer any questions about our services,
              pricing, or process.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="lg:col-span-8 space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                active === index
                  ? "border-violet-200 shadow-sm"
                  : "border-gray-100"
              }`}
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span
                  className={`font-semibold text-base ${
                    active === index ? "text-violet-700" : "text-gray-900"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    active === index
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                      : "bg-gray-100 text-gray-500"
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
                <div className="px-6 pb-5">
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
