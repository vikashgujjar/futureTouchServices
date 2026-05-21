import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business goals, target audience, and requirements to craft a precise strategic roadmap for success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="url(#grad1)" strokeWidth="1.5">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our creative team crafts stunning designs and interactive prototypes perfectly aligned with your brand identity and user expectations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="url(#grad2)" strokeWidth="1.5">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development & Coding",
    description:
      "Our expert developers bring your designs to life using cutting-edge technologies, ensuring optimal performance and scalability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="url(#grad3)" strokeWidth="1.5">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your project seamlessly and provide ongoing support to ensure smooth operation, continuous improvement, and growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="url(#grad4)" strokeWidth="1.5">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 xl:px-28 bg-gray-50">
      <div className="text-center mb-16">
        <span
          className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest"
          style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
        >
          Our Process
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-gray-900">
          How We{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            Work
          </span>
        </h2>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          A streamlined four-step process that transforms your vision into a
          high-performing digital product.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connector line on desktop */}
        <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-violet-600 to-indigo-600 opacity-30 z-0" />

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 group">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start">
              {/* Number badge */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold text-lg mb-5 shadow-md group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
