import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

/**
 * Reusable CTA split-banner.
 *
 * Props:
 *  badge        – small tag text above the headline
 *  preTitle     – plain text before the gradient highlight
 *  highlight    – gradient-coloured word(s) in the headline
 *  postTitle    – plain text after the highlight
 *  description  – paragraph below the headline
 *  primaryCta   – { label, href }
 *  secondaryCta – { label, href }  (uses <a> so works for tel: links)
 *  trustItems   – string[]  shown as pills below the buttons
 *  cardLabel    – small uppercase eyebrow inside the right card
 *  cardTitle    – bold heading inside the right card header
 *  cardItems    – { label, sub }[]  checklist rows
 *  cardCta      – { label, href }  button at the bottom of the card
 *  cardFootnote – tiny text below the card button
 */
export default function CtaBanner({
  badge = "Ready to grow your business?",
  preTitle = "Transform Your",
  highlight = "Digital Presence",
  postTitle = "Today",
  description = "Get a free consultation with our experts and discover how we can turn your website into your most powerful sales channel.",
  primaryCta = { label: "Get Free Consultation", href: "/contact" },
  secondaryCta = { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems = ["No contracts", "Free consultation", "Results in 30 days"],
  cardLabel = "Your Project Includes",
  cardTitle = "Everything to Launch & Grow",
  cardItems = [],
  cardCta = { label: "Start Your Project Today", href: "/contact" },
  cardFootnote = "Free quote · No commitment required",
}) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50/60">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-violet-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-48 w-48 rounded-full bg-pink-100/40 blur-2xl" />
      {/* dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center">

          {/* ── Left: copy ── */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700 mb-6">
              <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
              {badge}
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.15]">
              {preTitle}{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                  {highlight}
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 260 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7C40 2 90 1 130 1C170 1 220 2 258 7"
                    stroke="url(#cta-banner-grad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="cta-banner-grad" x1="0" y1="0" x2="260" y2="0">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {postTitle ? ` ${postTitle}` : ""}
            </h2>

            <p className="mt-6 text-slate-500 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              {description}
            </p>

            {/* buttons */}
            <div className="mt-9 flex flex-wrap justify-center lg:justify-start gap-3">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-white font-bold text-base shadow-lg shadow-violet-300/50 hover:shadow-violet-400/60 hover:-translate-y-0.5 transition-all duration-200"
              >
                {primaryCta.label} <HiOutlineArrowRight className="text-lg" />
              </Link>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-slate-700 font-semibold text-base hover:border-violet-300 hover:text-violet-700 transition-all duration-200"
              >
                {secondaryCta.label}
              </a>
            </div>

            {/* trust pills */}
            {trustItems.length > 0 && (
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                {trustItems.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
                  >
                    <FaCheckCircle className="text-violet-500 flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: "What's included" card ── */}
          {cardItems.length > 0 && (
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <div className="relative rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-slate-200/60 overflow-hidden">
                {/* card header */}
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-violet-200 mb-1">
                    {cardLabel}
                  </p>
                  <p className="text-xl font-extrabold text-white">{cardTitle}</p>
                </div>

                {/* checklist */}
                <ul className="divide-y divide-slate-50 px-6">
                  {cardItems.map((item) => (
                    <li key={item.label} className="flex items-center gap-4 py-4">
                      <span className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 border border-violet-100">
                        <FaCheckCircle className="text-violet-600 text-sm" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 leading-tight">
                          {item.label}
                        </p>
                        {item.sub && (
                          <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* card footer */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={cardCta.href}
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-white font-bold text-sm shadow-lg shadow-violet-200 hover:-translate-y-0.5 hover:shadow-violet-300 transition-all duration-200"
                  >
                    {cardCta.label} <HiOutlineArrowRight />
                  </Link>
                  {cardFootnote && (
                    <p className="text-center text-xs text-slate-400 mt-3">
                      {cardFootnote}
                    </p>
                  )}
                </div>

                <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-indigo-100/60 blur-2xl" />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
