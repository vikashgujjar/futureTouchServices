import React from "react";
import { FaBell, FaCheckCircle, FaEnvelope } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function GetNewInsight() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950 py-20 md:py-24">
      {/* glowing blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-purple-500/10 blur-2xl" />
      {/* dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">

          {/* ── Left: copy ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* icon badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/15 px-4 py-1.5 text-sm font-semibold text-violet-300 mb-5">
              <FaBell className="text-violet-400 text-xs animate-pulse" />
              Weekly Newsletter
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Get Fresh{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                Insights &amp; Updates
              </span>{" "}
              Every Week
            </h2>

            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Stay ahead with the latest in web design, digital marketing, and
              tech — delivered straight to your inbox. No spam, ever.
            </p>

            {/* trust row */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2">
              {[
                "No spam guarantee",
                "Unsubscribe anytime",
                "5,000+ subscribers",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400"
                >
                  <FaCheckCircle className="text-violet-400 flex-shrink-0 text-xs" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: form card ── */}
          <div className="w-full lg:w-[480px] flex-shrink-0">
            <div className="relative rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 p-8">
              {/* decorative corner blob */}
              <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-violet-100/60 blur-xl" />

              {/* envelope icon */}
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-200 mb-5">
                <FaEnvelope className="text-white text-xl" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Subscribe for free
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Join 5,000+ professionals getting smarter every week.
              </p>

              <form className="space-y-3">
                {/* name field */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100 transition-all duration-200"
                  />
                </div>

                {/* email + button row */}
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    name="emails"
                    required
                    className="flex-1 min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-300/40 hover:shadow-violet-400/50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Subscribe <HiOutlineArrowRight className="text-base" />
                  </button>
                </div>
              </form>

              {/* privacy note */}
              <p className="mt-4 text-xs text-slate-400 text-center">
                Your data is safe.{" "}
                <span className="underline underline-offset-2 cursor-pointer hover:text-slate-600 transition-colors">
                  Privacy policy
                </span>{" "}
                applies. We never share your details.
              </p>

              {/* divider + social proof */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-100" />
                <span className="text-xs text-slate-400 whitespace-nowrap">trusted by professionals</span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>
              <div className="mt-4 flex items-center justify-center gap-1.5">
                {/* avatar stack */}
                {["V", "A", "R", "S", "M"].map((letter, i) => (
                  <span
                    key={i}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-violet-400 to-indigo-500 text-[10px] font-bold text-white shadow-sm"
                    style={{ marginLeft: i > 0 ? "-8px" : 0 }}
                  >
                    {letter}
                  </span>
                ))}
                <span className="ml-2 text-xs text-slate-500 font-medium">
                  +5,000 subscribers
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
