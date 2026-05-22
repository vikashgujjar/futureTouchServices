import React from "react";
import { FaBell, FaCheckCircle, FaEnvelope, FaRocket, FaLightbulb, FaChartLine } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const perks = [
  {
    icon: <FaRocket className="w-5 h-5 text-violet-400" />,
    title: "Latest Tech Trends",
    desc: "Stay updated with cutting-edge web & app development insights.",
  },
  {
    icon: <FaLightbulb className="w-5 h-5 text-indigo-400" />,
    title: "Expert Tips & Guides",
    desc: "Actionable strategies from our 250+ developers & designers.",
  },
  {
    icon: <FaChartLine className="w-5 h-5 text-purple-400" />,
    title: "Growth Strategies",
    desc: "Digital marketing tactics that drive real, measurable results.",
  },
];

export default function GetNewInsight() {
  return (
    <section className="relative overflow-hidden bg-[#07021a] py-24">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-purple-500/10 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-20">

        {/* ── Top: centered heading ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/15 px-4 py-1.5 text-sm font-semibold text-violet-300 mb-5">
            <FaBell className="text-violet-400 text-xs animate-pulse" />
            Weekly Newsletter
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Get Fresh{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Insights &amp; Updates
            </span>{" "}
            Every Week
          </h2>
          <p className="mt-4 text-white/50 text-base leading-relaxed">
            Stay ahead with the latest in web design, digital marketing, and
            tech — delivered straight to your inbox. No spam, ever.
          </p>
        </div>

        {/* ── Subscription form card ── */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/[0.06] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            {/* Form header */}
            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-900/40 shrink-0">
                <FaEnvelope className="text-white text-base" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-none">Subscribe for free</h3>
                <p className="text-white/45 text-xs mt-1">Join 5,000+ professionals getting smarter every week.</p>
              </div>
            </div>

            {/* Form fields */}
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                name="emails"
                required
                className="flex-1 min-w-0 rounded-xl border border-white/10 bg-white/8 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-violet-400/60 focus:bg-white/12 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-900/40 hover:shadow-violet-600/40 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe Now <HiOutlineArrowRight className="text-base" />
              </button>
            </form>

            {/* Privacy note */}
            <p className="mt-4 text-xs text-white/30 text-center">
              Your data is safe. Privacy policy applies. We never share your details.
            </p>

            {/* Divider + social proof */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-white/8" />
              <span className="text-xs text-white/30 whitespace-nowrap">trusted by professionals</span>
              <div className="flex-1 h-px bg-white/8" />
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex">
                {["V", "A", "R", "S", "M"].map((letter, i) => (
                  <span
                    key={i}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#07021a] bg-gradient-to-br from-violet-500 to-indigo-600 text-[10px] font-bold text-white shadow-sm"
                    style={{ marginLeft: i > 0 ? "-10px" : 0 }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <span className="text-xs text-white/45 font-medium ml-1">
                +5,000 subscribers already joined
              </span>
            </div>
          </div>

          {/* Trust chips below card */}
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["No spam guarantee", "Unsubscribe anytime", "Weekly cadence"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 text-xs text-white/40">
                <FaCheckCircle className="text-violet-500 w-3 h-3" />
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
