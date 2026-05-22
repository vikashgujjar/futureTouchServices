import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We understand your business goals, target audience, and requirements to craft a precise strategic roadmap for success.",
    color: "from-violet-500 to-violet-700",
    lightBg: "bg-violet-50",
    border: "border-violet-200",
    textAccent: "text-violet-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our creative team crafts stunning designs and interactive prototypes aligned with your brand identity and user expectations.",
    color: "from-indigo-500 to-indigo-700",
    lightBg: "bg-indigo-50",
    border: "border-indigo-200",
    textAccent: "text-indigo-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development & Coding",
    description:
      "Our expert developers bring designs to life using cutting-edge technologies, ensuring optimal performance and scalability.",
    color: "from-purple-500 to-purple-700",
    lightBg: "bg-purple-50",
    border: "border-purple-200",
    textAccent: "text-purple-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your project seamlessly and provide ongoing support for smooth operation, continuous improvement, and growth.",
    color: "from-fuchsia-500 to-fuchsia-700",
    lightBg: "bg-fuchsia-50",
    border: "border-fuchsia-200",
    textAccent: "text-fuchsia-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 xl:px-28 bg-white relative overflow-hidden">
      {/* Subtle dot bg */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Heading */}
      <div className="text-center mb-16 relative">
        <span
          className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
          style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
        >
          Our Process
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 text-gray-900 leading-tight">
          How We{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Work
          </span>
        </h2>
        <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
          A streamlined four-step process that transforms your vision into a
          high-performing digital product.
        </p>
      </div>

      {/* Steps */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Desktop connector line */}
        <div className="hidden lg:block absolute top-[52px] left-[calc(0%+28px)] right-[calc(0%+28px)] h-px border-t-2 border-dashed border-violet-200 z-0" />

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 group flex flex-col">
            {/* Top: icon circle + arrow connector */}
            <div className="flex items-center gap-3 mb-6">
              {/* Icon circle */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 shrink-0`}>
                {step.icon}
              </div>
              {/* Arrow connector — only between steps, not after last */}
              {idx < steps.length - 1 && (
                <div className="flex-1 hidden sm:flex lg:hidden items-center">
                  <div className="flex-1 h-px border-t-2 border-dashed border-gray-200" />
                  <FaArrowRight className="text-gray-300 w-3 h-3 ml-1 shrink-0" />
                </div>
              )}
            </div>

            {/* Card */}
            <div className={`flex-1 ${step.lightBg} border ${step.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
              {/* Large faded number */}
              <span className="absolute -bottom-3 -right-2 text-[80px] font-extrabold text-white/70 select-none leading-none pointer-events-none">
                {step.number}
              </span>

              {/* Step number badge */}
              <span className={`text-xs font-bold ${step.textAccent} bg-white border ${step.border} rounded-full px-3 py-1 inline-block mb-3`}>
                Step {step.number}
              </span>

              <h3 className="text-base font-extrabold text-gray-900 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed relative">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all duration-200 text-sm"
        >
          Start Your Project <FaArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
