"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    badge: "Digital Marketing Experts",
    heading: "Grow Your Business Online with",
    headingHighlight: "Professional Digital Marketing",
    description:
      "Improve your website visibility in search engines with White Hat SEO, PPC, Social Media Marketing, and content strategies that deliver measurable results.",
    image: "/images/HeroSection/newimg.webp",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentIndex];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-violet-50/60 to-indigo-50/80 min-h-screen flex items-center">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-violet-100 rounded-full blur-3xl opacity-50 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative w-full px-4 sm:px-6 md:px-12 xl:px-28 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              {slide.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              {slide.heading}{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {slide.headingHighlight}
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              {slide.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Get Free Consultation <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="tel:+917056937000"
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-full font-semibold hover:border-violet-300 hover:text-violet-600 transition-all duration-200 text-sm"
              >
                <FaPhone className="w-3.5 h-3.5" /> +91 70569-37000
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {trust.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm"
                >
                  <FaCheckCircle className="text-violet-500 w-3.5 h-3.5" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: image + floating cards */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-100 border border-white">
              <Image
                key={currentIndex}
                src={slide.image}
                width={640}
                height={520}
                alt={slide.heading}
                className="w-full h-[520px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating stat badges */}
            <div className="absolute -left-8 top-1/3 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100">
              <p className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                5000+
              </p>
              <p className="text-xs text-gray-500 font-medium whitespace-nowrap">
                Projects Delivered
              </p>
            </div>
            <div className="absolute -right-6 top-10 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100">
              <p className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                250+
              </p>
              <p className="text-xs text-gray-500 font-medium whitespace-nowrap">
                Expert Engineers
              </p>
            </div>
            <div className="absolute right-10 -bottom-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">4.9 / 5</p>
                <p className="text-xs text-gray-500">Client Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="flex items-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-violet-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gray-200 pt-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-sm text-gray-500 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
