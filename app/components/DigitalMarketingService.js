import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaTrophy, FaBullseye } from "react-icons/fa";

const marketingServices = [
  {
    icon: "/Assets/search.webp",
    title: "Search Engine Optimisation",
    href: "/search-engine-optimization",
    description:
      "Boost your website's visibility with personalized SEO services designed to improve search rankings and connect you with your ideal audience.",
    badge: "SEO",
    accent: "from-violet-500 to-violet-700",
    glow: "group-hover:shadow-violet-500/20",
    hoverBorder: "hover:border-violet-200",
  },
  {
    icon: "/Assets/family.webp",
    title: "Social Media Marketing",
    href: "/social-media-marketing-service",
    description:
      "Enhance your brand's reach with customized Social Media Marketing services designed to authentically engage your audience and foster meaningful growth.",
    badge: "SMM",
    accent: "from-pink-500 to-rose-600",
    glow: "group-hover:shadow-pink-500/20",
    hoverBorder: "hover:border-pink-200",
  },
  {
    icon: "/Assets/digital-marketing.webp",
    title: "Search Engine Marketing / Paid Ads",
    href: "/pay-per-click-service",
    description:
      "Drive targeted traffic and enhance your online presence with specialized SEM and Paid Ads services crafted to optimize ROI and achieve measurable success.",
    badge: "PPC",
    accent: "from-indigo-500 to-blue-700",
    glow: "group-hover:shadow-indigo-500/20",
    hoverBorder: "hover:border-indigo-200",
  },
];

const highlights = [
  "Data-driven strategy & real-time reporting",
  "ROI-focused campaigns with measurable KPIs",
  "Dedicated marketing manager for your account",
];

const metrics = [
  { value: "3x", label: "Avg. ROI" },
  { value: "85%", label: "Client Retention" },
  { value: "120+", label: "Campaigns" },
];

export default function DigitalMarketingService() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 xl:px-28 bg-gradient-to-br from-slate-100 via-violet-50 to-indigo-50/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: content ── */}
        <div>
          <span
            className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Digital Marketing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5 leading-tight">
            We Make Finest Marketing With{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Great Passion
            </span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-5 max-w-lg">
            Digital marketing is the best way to reach your audience and create
            lasting relationships with clients. We provide data-driven strategies
            that deliver real, measurable results for your business.
          </p>

          {/* Highlights checklist */}
          <ul className="space-y-2.5 mb-8">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-violet-500/15 flex items-center justify-center shrink-0">
                  <FaCheckCircle className="text-violet-500 w-3 h-3" />
                </span>
                <span className="text-gray-600 text-sm font-medium">{h}</span>
              </li>
            ))}
          </ul>

          {/* Service cards */}
          <div className="space-y-4">
            {marketingServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group flex items-start gap-4 bg-white border border-gray-100 ${service.hoverBorder} rounded-2xl p-5 hover:shadow-lg ${service.glow} hover:-translate-y-0.5 transition-all duration-200`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-md`}
                >
                  <Image
                    src={service.icon}
                    width={26}
                    height={26}
                    alt={service.title}
                    className="w-6 h-6 object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="text-sm font-bold text-gray-900 leading-snug">
                      {service.title}
                    </h4>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 shrink-0">
                      {service.badge}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <FaArrowRight className="text-gray-300 group-hover:text-violet-500 w-3.5 h-3.5 shrink-0 mt-1 transition-colors duration-200" />
              </Link>
            ))}
          </div>

          <Link
            href="/digital-marketing-service"
            className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            Explore All Marketing Services <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── Right: illustration + floating cards ── */}
        <div className="relative flex flex-col items-center">
          {/* Central illustration */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-violet-200/50 to-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

            <Image
              className="relative w-full object-contain drop-shadow-2xl"
              src="/Assets/connect_img.webp"
              width={520}
              height={520}
              alt="Digital Marketing Illustration"
            />

            {/* Floating badge — top left */}
            <div className="absolute top-4 -left-4 sm:-left-8 bg-white border border-violet-100 rounded-2xl px-4 py-3 shadow-lg shadow-violet-100/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-sm">
                  <FaTrophy className="text-yellow-300 w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-gray-900 leading-none">Google Partner</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Certified Agency</p>
                </div>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div className="absolute bottom-8 -right-4 sm:-right-8 bg-white border border-indigo-100 rounded-2xl px-4 py-3 shadow-lg shadow-indigo-100/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-sm">
                  <FaBullseye className="text-white w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-lg font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                    3x ROI
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Avg. ad spend return</p>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics strip */}
          <div className="w-full max-w-md mt-6">
            <div className="bg-white border border-violet-100 rounded-2xl px-5 py-4 shadow-sm flex items-center justify-between gap-4">
              {metrics.map((m, i) => (
                <React.Fragment key={m.label}>
                  <div className="text-center flex-1">
                    <p className="text-xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                      {m.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 font-medium">{m.label}</p>
                  </div>
                  {i < metrics.length - 1 && (
                    <div className="w-px h-8 bg-gray-100 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
