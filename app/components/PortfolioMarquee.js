"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const row1 = [
  "Web Development", "Mobile Apps", "E-Commerce", "UI/UX Design",
  "Digital Marketing", "Brand Strategy", "SEO Services", "Social Media",
  "Web Development", "Mobile Apps", "E-Commerce", "UI/UX Design",
  "Digital Marketing", "Brand Strategy", "SEO Services", "Social Media",
];

const row2 = [
  "Social Media", "SEO Services", "Brand Strategy", "Digital Marketing",
  "UI/UX Design", "E-Commerce", "Mobile Apps", "Web Development",
  "Social Media", "SEO Services", "Brand Strategy", "Digital Marketing",
  "UI/UX Design", "E-Commerce", "Mobile Apps", "Web Development",
];

const fadeEdge = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
};

export default function PortfolioMarquee() {
  return (
    <section className="py-16 overflow-hidden bg-gradient-to-b from-white to-violet-50/40 border-y border-gray-100">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <span
          className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest"
          style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
        >
          Digital Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 text-gray-900 uppercase tracking-tight">
          Our Work &{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            Expertise
          </span>
        </h2>
        <p className="mt-3 text-gray-500 text-base max-w-xl mx-auto">
          A snapshot of what we do — from design to deployment, for clients
          across 120+ countries.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative flex overflow-x-hidden py-4" style={fadeEdge}>
        <div className="marquee-track flex items-center gap-10">
          {row1.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 uppercase tracking-tight whitespace-nowrap"
            >
              {item}
              <span className="text-violet-500 text-2xl leading-none">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (outline text) */}
      <div className="relative flex overflow-x-hidden py-4 mt-1" style={fadeEdge}>
        <div className="marquee-track-reverse flex items-center gap-10">
          {row2.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight whitespace-nowrap stroke-text text-transparent"
            >
              {item}
              <span className="text-violet-300 text-2xl leading-none">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link
          href="/service"
          className="inline-flex items-center gap-2 text-violet-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          View All Our Services <FaArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
