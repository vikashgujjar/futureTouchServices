import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const industries = [
  { id: 1,  src: "/Assets/icon-1.webp",  text: "Social Networking",    accent: "from-sky-500 to-blue-600",       glow: "group-hover:shadow-sky-500/30" },
  { id: 2,  src: "/Assets/icon-2.webp",  text: "Digital Marketing",    accent: "from-emerald-500 to-green-600",  glow: "group-hover:shadow-emerald-500/30" },
  { id: 3,  src: "/Assets/icon-3.webp",  text: "Ecommerce",            accent: "from-violet-500 to-purple-600",  glow: "group-hover:shadow-violet-500/30" },
  { id: 4,  src: "/Assets/icon-4.webp",  text: "Video Service",        accent: "from-rose-500 to-red-600",       glow: "group-hover:shadow-rose-500/30" },
  { id: 5,  src: "/Assets/icon-5.webp",  text: "Banking Service",      accent: "from-amber-500 to-yellow-600",   glow: "group-hover:shadow-amber-500/30" },
  { id: 6,  src: "/Assets/icon-6.webp",  text: "Enterprise",           accent: "from-indigo-500 to-blue-700",    glow: "group-hover:shadow-indigo-500/30" },
  { id: 7,  src: "/Assets/icon-7.webp",  text: "Education",            accent: "from-cyan-500 to-teal-600",      glow: "group-hover:shadow-cyan-500/30" },
  { id: 8,  src: "/Assets/icon-8.webp",  text: "Tour & Travels",       accent: "from-orange-500 to-amber-600",   glow: "group-hover:shadow-orange-500/30" },
  { id: 9,  src: "/Assets/icon-9.webp",  text: "Health Service",       accent: "from-pink-500 to-rose-600",      glow: "group-hover:shadow-pink-500/30" },
  { id: 10, src: "/Assets/icon-10.webp", text: "Event & Ticket",       accent: "from-fuchsia-500 to-violet-600", glow: "group-hover:shadow-fuchsia-500/30" },
  { id: 11, src: "/Assets/icon-11.webp", text: "Restaurant",           accent: "from-lime-500 to-green-600",     glow: "group-hover:shadow-lime-500/30" },
  { id: 12, src: "/Assets/icon-12.webp", text: "Business Consulting",  accent: "from-teal-500 to-cyan-600",      glow: "group-hover:shadow-teal-500/30" },
];

const highlights = [
  "Custom solutions for every industry vertical",
  "Scalable architecture built for growth",
  "End-to-end delivery — design to deployment",
];

export default function IndustriesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 xl:px-28 bg-[#07021a] relative overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

        {/* ── Left: content ── */}
        <div>
          <span
            className="text-4xl bg-gradient-to-r from-violet-400 to-indigo-300 text-transparent bg-clip-text tracking-widest block mb-2"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-6 leading-tight">
            Helping Businesses{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              In All Domains
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-4">
            We develop websites that build businesses. We believe there is no
            room for a one-size-fits-all approach in web development — each
            website needs a personal touch to meet specific business needs.
          </p>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            As a reputable website development company in India, we&apos;ve assisted
            hundreds of companies worldwide to achieve their goals, drive
            business growth, and create happy customers. From static sites to
            complex web apps — we do it all!
          </p>

          {/* Highlights */}
          <ul className="space-y-3 mb-10">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
                  <FaCheckCircle className="text-violet-400 w-3 h-3" />
                </span>
                <span className="text-white/70 text-sm font-medium">{h}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/service"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-7 py-4 rounded-full font-semibold shadow-lg shadow-violet-900/40 hover:shadow-violet-600/40 hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            Explore Our Services <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── Right: industry card grid ── */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
          {industries.map((card) => (
            <div
              key={card.id}
              className={`group flex flex-col items-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-4 hover:shadow-xl ${card.glow} hover:-translate-y-1 transition-all duration-250 cursor-default`}
            >
              {/* Colored gradient icon badge */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200 shrink-0`}>
                <Image
                  src={card.src}
                  width={26}
                  height={26}
                  alt={card.text}
                  className="w-6 h-6 object-contain brightness-0 invert"
                />
              </div>

              {/* Label */}
              <p className="text-center text-xs font-semibold text-white/65 group-hover:text-white leading-tight transition-colors duration-200">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
