"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaPhone, FaCheckCircle, FaStar } from "react-icons/fa";

const slides = [
  {
    badge: "Award-Winning IT Company",
    heading: "Excellent Website Design &",
    headingHighlight: "Development Services",
    description:
      "Crafting unforgettable online experiences through exceptional website design and development — every detail tailored for a one-of-a-kind digital presence.",
    image: "/images/HeroSection/slider-img-1.webp",
  },
  {
    badge: "Mobile App Development",
    heading: "Build Powerful Apps That",
    headingHighlight: "Transform Your Business",
    description:
      "From iOS to Android, we deliver high-performance mobile applications that engage users, drive conversions, and scale with your growing business.",
    image: "/images/HeroSection/slider-img-3.webp",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Projects Done" },
  { value: "250+", label: "Expert Team" },
  { value: "120+", label: "Countries Served" },
];

const trust = ["15+ Years Experience", "1200+ Apps Built", "ISO Certified"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i) => {
    if (i === currentIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(i);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[currentIndex];

  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('${slide.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.6s ease-in-out",
      }}
    >
      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07021a]/97 via-[#0f0720]/88 to-[#1a0b3a]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07021a]/80 via-transparent to-[#07021a]/30" />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative ring */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-violet-500/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-32 right-32 w-48 h-48 rounded-full border border-violet-400/10 pointer-events-none hidden lg:block" />

      {/* Content */}
      <div className="relative w-full px-4 sm:px-6 md:px-12 xl:px-28 pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Left: main content ── */}
          <div className={`lg:col-span-7 transition-all duration-400 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold text-violet-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              {slide.badge}
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              {slide.heading}{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                {slide.headingHighlight}
              </span>
            </h1>

            <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-2xl">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-7 py-4 rounded-full font-semibold shadow-lg shadow-violet-900/40 hover:shadow-violet-600/40 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Get Free Consultation <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="tel:+917056937000"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/25 backdrop-blur-sm text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-200 text-sm"
              >
                <FaPhone className="w-3.5 h-3.5 text-violet-300 rotate-90" /> +91 70569-37000
              </Link>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3">
              {trust.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-white/8 border border-white/15 rounded-full px-3 py-1.5"
                >
                  <FaCheckCircle className="text-violet-400 w-3 h-3" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: floating stat cards ── */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 items-end">
            {/* Rating card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 flex items-center gap-4 hover:bg-white/15 transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0">
                <FaStar className="text-yellow-400 w-5 h-5" />
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-3.5 h-3.5" />
                  ))}
                </div>
                <p className="text-white font-bold text-lg leading-none">4.9 / 5.0</p>
                <p className="text-white/50 text-xs mt-0.5">200+ Google Reviews</p>
              </div>
            </div>

            {/* Projects card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 hover:bg-white/15 transition-all duration-200">
              <p className="text-4xl font-extrabold bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent leading-none">
                5000+
              </p>
              <p className="text-white/60 text-sm mt-1">Projects Successfully Delivered</p>
            </div>

            {/* Countries card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 hover:bg-white/15 transition-all duration-200">
              <p className="text-4xl font-extrabold bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent leading-none">
                120+
              </p>
              <p className="text-white/60 text-sm mt-1">Countries Served Worldwide</p>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="flex items-center gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-10 bg-gradient-to-r from-violet-400 to-indigo-400"
                  : "w-4 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
          <span className="ml-3 text-white/30 text-xs font-mono">
            {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-sm text-white/50 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
