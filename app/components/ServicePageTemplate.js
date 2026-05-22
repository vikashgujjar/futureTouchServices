"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import CtaBanner from "./CtaBanner";
import GetNewInsight from "./GetNewInsight";

/**
 * Shared template for all service pages.
 *
 * Props
 * ─────
 * hero        { badge, title, highlight, description, image, primaryCta, secondaryCta, trustItems }
 * intro       { badge, title, highlight, description, ctaLabel, ctaHref }
 * features    { badge, title, subtitle, image, items: [{title, description, icon}] }
 * benefits    { title, subtitle, items: [{icons, title, desc}] }
 * platforms   { badge, title, subtitle, items: [{icon, title, desc}] }
 * faq         { title, items: [{title, description}] }
 * cta         CtaBanner props (spread)
 */
export default function ServicePageTemplate({
  hero = {},
  intro = {},
  features = {},
  benefits = {},
  platforms = {},
  faq = {},
  cta = {},
}) {
  const [openFaq, setOpenFaq] = useState(null);

  const {
    badge: heroBadge = "Our Services",
    title: heroTitle = "Professional Services",
    highlight: heroHighlight = "",
    description: heroDesc = "",
    image: heroImage = null,
    primaryCta = { label: "Get Free Quote", href: "/contact" },
    secondaryCta = { label: "Call: 7056937000", href: "tel:+917056937000" },
    trustItems = ["500+ Projects", "15+ Years", "98% Satisfaction"],
  } = hero;

  const {
    badge: introBadge = "",
    title: introTitle = "",
    highlight: introHighlight = "",
    description: introDesc = "",
    ctaLabel = "Get Started",
    ctaHref = "/contact",
  } = intro;

  const {
    badge: featuresBadge = "Features",
    title: featuresTitle = "",
    subtitle: featuresSubtitle = "",
    image: featuresImage = null,
    items: featureItems = [],
  } = features;

  const {
    title: benefitsTitle = "",
    subtitle: benefitsSubtitle = "",
    items: benefitItems = [],
  } = benefits;

  const {
    badge: platformsBadge = "Platforms",
    title: platformsTitle = "",
    subtitle: platformsSubtitle = "",
    items: platformItems = [],
  } = platforms;

  const { title: faqTitle = "Frequently Asked Questions", items: faqItems = [] } = faq;

  return (
    <div className="bg-white text-slate-800">
      {/* Spacer for fixed header */}
      {/* <div className="h-24 max-sm:h-[57px]" /> */}

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50 to-indigo-50 py-20 md:py-28 pt-48!">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700 mb-6">
                <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                {heroBadge}
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold leading-[1.15] text-slate-900">
                {heroHighlight ? (
                  <>
                    {heroTitle}{" "}
                    <span className="relative whitespace-nowrap">
                      <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                        {heroHighlight}
                      </span>
                      <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 300 10" fill="none" aria-hidden="true">
                        <path d="M2 8C60 2 140 1 150 1C160 1 240 2 298 8" stroke="url(#hero-ul)" strokeWidth="2.5" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="hero-ul" x1="0" y1="0" x2="300" y2="0">
                            <stop offset="0%" stopColor="#7c3aed" />
                            <stop offset="100%" stopColor="#6366f1" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </>
                ) : (
                  heroTitle
                )}
              </h1>

              <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg">{heroDesc}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 text-white font-semibold shadow-lg shadow-violet-300/40 hover:shadow-violet-400/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {primaryCta.label} <HiOutlineArrowRight className="text-lg" />
                </Link>
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-7 py-3.5 text-slate-700 font-semibold hover:border-violet-300 hover:text-violet-700 transition-all duration-200"
                >
                  {secondaryCta.label}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustItems.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                    <FaCheckCircle className="text-violet-500 flex-shrink-0" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right image card */}
            {heroImage && (
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[420px]">
                  <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-3xl bg-gradient-to-br from-violet-300/60 to-indigo-300/60 blur-sm" />
                  <div className="relative z-10 rounded-3xl bg-white p-2.5 shadow-2xl shadow-violet-200/60 ring-1 ring-violet-100">
                    <Image
                      src={heroImage}
                      alt={heroTitle}
                      className="rounded-2xl w-full h-auto object-cover"
                      width={500}
                      height={390}
                      priority
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      {introTitle && (
        <section className="py-20 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-6 md:px-12 xl:px-20 text-center">
            {introBadge && (
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-semibold text-violet-700 mb-5">
                {introBadge}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug">
              {introHighlight ? (
                <>
                  {introTitle}{" "}
                  <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                    {introHighlight}
                  </span>
                </>
              ) : (
                introTitle
              )}
            </h2>
            <p className="mt-5 text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">{introDesc}</p>
            {ctaLabel && (
              <div className="mt-8">
                <a
                  href={ctaHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 text-white font-semibold shadow-lg shadow-violet-300/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {ctaLabel} <HiOutlineArrowRight />
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── FEATURES ── */}
      {featureItems.length > 0 && (
        <section className="py-20 md:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-20">
            <div className="text-center max-w-2xl mx-auto mb-14">
              {featuresBadge && (
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-violet-600">{featuresBadge}</span>
              )}
              {featuresTitle && (
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">{featuresTitle}</h2>
              )}
              {featuresSubtitle && (
                <p className="mt-3 text-slate-500 text-base sm:text-lg">{featuresSubtitle}</p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-10">
              {/* Sticky image */}
              {featuresImage && (
                <div className="sticky top-30 lg:flex lg:col-span-2 justify-center">
                  <div className="sticky top-28 w-full">
                    <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-gradient-to-br from-violet-200/60 to-indigo-200/60" />
                    <Image
                      src={featuresImage}
                      alt={featuresTitle}
                      className="relative rounded-3xl w-full h-auto object-cover shadow-xl shadow-violet-100/60 max-h-[70vh]"
                      width={480}
                      height={600}
                    />
                  </div>
                </div>
              )}  

              {/* Feature cards */}
              <div className={`${featuresImage ? "lg:col-span-3" : "lg:col-span-5"} grid grid-cols-1 gap-6`}>
                {featureItems.map((f, i) => (
                  <div
                    key={i}
                    className="relative flex gap-5 rounded-2xl bg-white border border-slate-100 p-6 hover:border-violet-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white text-xl shadow-md shadow-violet-200">
                      {f.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-base">{f.title}</h3>
                      <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BENEFITS ── */}
      {benefitItems.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-20">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{benefitsTitle}</h2>
              {benefitsSubtitle && (
                <p className="mt-3 text-slate-500 text-base sm:text-lg">{benefitsSubtitle}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitItems.map((b, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col gap-5 rounded-3xl border border-slate-100 bg-slate-50 p-7 hover:border-violet-200 hover:bg-violet-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-200 text-white text-2xl">
                    {b.icons}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PLATFORMS / SERVICES ── */}
      {platformItems.length > 0 && (
        <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-violet-50/40 to-indigo-50/40">
          <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-20">
            <div className="text-center max-w-2xl mx-auto mb-14">
              {platformsBadge && (
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-violet-600">{platformsBadge}</span>
              )}
              {platformsTitle && (
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">{platformsTitle}</h2>
              )}
              {platformsSubtitle && (
                <p className="mt-3 text-slate-500 text-base sm:text-lg">{platformsSubtitle}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformItems.map((p, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-2xl bg-white border border-slate-100 p-6 hover:border-violet-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md shadow-violet-200 text-white text-xl">
                    {p.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 text-sm">{p.title}</h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faqItems.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-violet-600">FAQ</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">{faqTitle}</h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden">
                  <button
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-slate-900 text-sm sm:text-base">{item.title}</span>
                    <FaChevronDown
                      className={`flex-shrink-0 text-violet-500 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CtaBanner {...cta} />

      {/* ── NEWSLETTER ── */}
      <GetNewInsight />
    </div>
  );
}
