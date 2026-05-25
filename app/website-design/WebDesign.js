"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import company from "../Assets/about-service.webp";
import service1 from "../Assets/service-img-1_1.webp";
import service2 from "../Assets/service-img-2.webp";
import service3 from "../Assets/service-img-3.webp";
import service4 from "../Assets/service-img-4.webp";
import GetNewInsight from "../components/GetNewInsight";
import CtaBanner from "../components/CtaBanner";
import { FaAngleRight, FaCheckCircle, FaCode, FaMobile, FaPalette, FaRocket } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const CTA_DATA = {
  badge: "Ready to grow your business?",
  preTitle: "Transform Your",
  highlight: "Digital Presence",
  postTitle: "Today",
  description:
    "Get a free consultation with our experts and discover how we can turn your website into your most powerful sales channel.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results in 30 days"],
  cardLabel: "Your Project Includes",
  cardTitle: "Everything to Launch & Grow",
  cardItems: [
    { label: "Custom responsive design", sub: "Mobile, tablet & desktop" },
    { label: "SEO-ready architecture", sub: "Built for Google from day 1" },
    { label: "3 rounds of revisions", sub: "Until you're 100% happy" },
    { label: "Speed & performance audit", sub: "Core Web Vitals optimised" },
    { label: "30-day post-launch support", sub: "We stay with you after go-live" },
  ],
  cardCta: { label: "Start Your Project Today", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const SERVICES = [
  {
    title: "Web Application Development",
    category: "APP",
    description:
      "Scalable, high-performance web apps built with modern frameworks and best practices.",
    href: "/web-app-development",
    image: service1,
    accent: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Small Business Website",
    category: "Marketing",
    description:
      "Professional, conversion-focused websites tailored for startups and growing SMBs.",
    href: "/business-developement",
    image: service2,
    accent: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    title: "CMS Web Development",
    category: "CMS",
    description:
      "Easy-to-manage content systems so your team stays in full control every day.",
    href: "/cms-development",
    image: service3,
    accent: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Website Design & Development",
    category: "Design",
    description:
      "Pixel-perfect, brand-aligned designs that turn first-time visitors into loyal customers.",
    href: "/web-app-developemnt-corporate",
    image: service4,
    accent: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

const SERVICE_ICONS = [
  <FaCode key="code" />,
  <FaRocket key="rocket" />,
  <FaPalette key="palette" />,
  <FaMobile key="mobile" />,
];

const WebDesign = () => {
  return (
    <div className="bg-white text-slate-800">
      {/* Spacer for fixed header */}
      {/* <div className="h-24 max-sm:h-[57px]" /> */}

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50 to-indigo-50 py-20 md:py-28 pt-24 md:pt-32! lg:pt-48!">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />
        {/* subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6366f1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700 mb-6">
                <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                Web Design &amp; Development
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-[3.6rem] font-extrabold leading-[1.15] text-slate-900">
                Websites That{" "}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                    Convert &amp; Inspire
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 9C60 3 120 1 150 1C180 1 240 3 298 9"
                      stroke="url(#underline-grad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="underline-grad"
                        x1="0"
                        y1="0"
                        x2="300"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="mt-7 text-lg text-slate-500 leading-relaxed max-w-lg">
                Future IT Touch builds responsive, SEO-ready, and blazing-fast
                websites for small businesses and startups worldwide — at prices
                that make real sense.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 text-white font-semibold text-base shadow-lg shadow-violet-300/40 hover:shadow-violet-400/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get Free Quote <HiOutlineArrowRight className="text-lg" />
                </Link>
                <a
                  href="tel:+917056937000"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-7 py-3.5 text-slate-700 font-semibold text-base hover:border-violet-300 hover:text-violet-700 transition-all duration-200"
                >
                  Call: 7056937000
                </a>
              </div>

              {/* trust pills */}
              <div className="mt-10 flex flex-wrap gap-3">
                {["500+ Projects Delivered", "15+ Years Experience", "98% Client Satisfaction"].map(
                  (t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
                    >
                      <FaCheckCircle className="text-violet-500 flex-shrink-0" />
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right — image with floating badges */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px]">
                {/* offset shadow card */}
                <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-3xl bg-gradient-to-br from-violet-300/60 to-indigo-300/60 blur-sm" />
                {/* main card */}
                <div className="relative z-10 rounded-3xl bg-white p-2.5 shadow-2xl shadow-violet-200/60 ring-1 ring-violet-100">
                  <Image
                    src={company}
                    alt="Website Design Preview"
                    className="rounded-2xl w-full h-auto object-cover"
                    width={500}
                    height={390}
                    priority
                  />
                </div>
                {/* badge — bottom left */}
                <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow">
                    <FaRocket className="text-white text-sm" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                      Avg. Load Time
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      &lt; 1 Second
                    </p>
                  </div>
                </div>
                {/* badge — top right */}
                <div className="absolute -top-4 -right-4 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow">
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                      Client Rating
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      5.0 ★★★★★
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / COMPANY ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[480px]">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-100 to-indigo-100 -z-10" />
                <Image
                  src={company}
                  alt="About Future IT Touch"
                  width={520}
                  height={440}
                  className="relative z-10 rounded-3xl w-full h-auto object-cover shadow-lg shadow-violet-100/80"
                />
                {/* floating experience badge */}
                <div className="absolute -right-6 bottom-8 z-20 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 px-5 py-4 text-center shadow-xl">
                  <p className="text-3xl font-extrabold text-white leading-none">15+</p>
                  <p className="text-xs font-medium text-violet-200 mt-0.5">Years of<br/>Excellence</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-violet-600">
                What our clients say about us
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug">
                Websites Built for{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                  Small Businesses &amp; Startups
                </span>
              </h2>
              <p className="mt-5 text-slate-500 leading-relaxed text-base sm:text-lg">
                Rise from a startup to an established brand. Whether you run a
                small business or have invested in a startup, we build
                professional websites at very reasonable prices using the latest
                technologies — creating attractive layouts and business-oriented
                features that convert visitors into buyers.
              </p>

              <ul className="mt-7 space-y-3.5">
                {[
                  "Fully responsive across all devices & screen sizes",
                  "SEO-friendly architecture built from the ground up",
                  "Ongoing maintenance & dedicated post-launch support",
                  "Affordable pricing with complete transparency",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                    <span className="mt-0.5 flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-violet-100">
                      <FaCheckCircle className="text-violet-600 text-xs" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 text-white font-semibold shadow-lg shadow-violet-300/40 hover:-translate-y-0.5 hover:shadow-violet-400/50 transition-all duration-200"
                >
                  Start Your Project <FaAngleRight />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-7 py-3.5 text-slate-700 font-semibold hover:border-violet-300 hover:text-violet-700 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-20">
          {/* heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-violet-600">
              Services We Provide
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our Web Development Services
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              End-to-end web solutions — from concept to launch — so you never
              need to look elsewhere.
            </p>
          </div>

          {/* 2×2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className={`group relative flex gap-5 rounded-3xl border-2 ${svc.border} ${svc.bg} p-6 sm:p-8 hover:shadow-2xl hover:shadow-violet-100 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden`}
              >
                {/* large faint image watermark */}
                <div className="pointer-events-none absolute right-4 bottom-0 opacity-[0.12] group-hover:opacity-20 transition-opacity duration-300">
                  <Image
                    src={svc.image}
                    alt=""
                    width={110}
                    height={110}
                    className="object-contain"
                  />
                </div>

                {/* icon */}
                <div
                  className={`relative z-10 flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${svc.accent} text-white text-xl shadow-md`}
                >
                  {SERVICE_ICONS[i]}
                </div>

                {/* text */}
                <div className="relative z-10 flex-1 min-w-0">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${svc.iconColor}`}>
                    {svc.category}
                  </span>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {svc.description}
                  </p>
                  <Link
                    href={svc.href}
                    className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${svc.iconColor} group/link`}
                  >
                    <span className="underline underline-offset-2 decoration-transparent group-hover/link:decoration-current transition-all duration-200">
                      Explore Service
                    </span>
                    <HiOutlineArrowRight className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner {...CTA_DATA} />

      {/* ── NEWSLETTER ── */}
      <GetNewInsight />
    </div>
  );
};

export default WebDesign;
