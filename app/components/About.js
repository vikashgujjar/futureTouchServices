import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const highlights = [
  "Full-stack web & mobile solutions",
  "250+ in-house developers & designers",
  "Agile delivery — on time, every time",
  "Trusted by clients in 120+ countries",
];

const progressBars = [
  { label: "Brand Strategy & Art Direction", percent: 75 },
  { label: "UX/UI Design & Website / App Design", percent: 82 },
  { label: "Trending Designing Experience", percent: 70 },
  { label: "Creative Development & Innovation", percent: 88 },
];

const badges = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Projects Done" },
  { value: "250+", label: "Team Members" },
  { value: "100%", label: "Satisfaction" },
];

export default function About() {
  return (
    <section
      className="relative min-h-[700px] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/Assets/hero-about-1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark gradient overlay — heavier on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0720]/95 via-[#1a0b3a]/88 to-[#1a0b3a]/55" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative w-full px-4 sm:px-6 md:px-12 xl:px-28 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Left col: main content ── */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold text-violet-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              About Future IT Touch
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Creative Problem{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                Solving &amp;
              </span>{" "}
              Innovation
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
              Founded in 2017, Future IT Touch is a leading website designing and
              development company in India. We specialise in creating innovative,
              user-friendly digital solutions that help businesses thrive in the
              online world — powered by a team of 250+ experts.
            </p>

            {/* Highlights — 2 col grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <FaCheckCircle className="text-violet-400 w-4 h-4 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Progress bars */}
            <div className="space-y-4 mb-10">
              {progressBars.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-white/70 text-sm font-medium">
                      {item.label}
                    </span>
                    <span className="text-violet-300 text-sm font-bold">
                      {item.percent}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-400 to-indigo-400"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Read More About Us <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-200 text-sm"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* ── Right col: stat cards + secondary image ── */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* 2×2 stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-6 text-center hover:bg-white/15 hover:-translate-y-1 transition-all duration-200"
                >
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
                    {b.value}
                  </p>
                  <p className="text-white/60 text-xs font-medium mt-2 leading-snug">
                    {b.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Secondary image card */}
            <div className="relative h-60 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
              <Image
                src="/Assets/h2-about-img-right.webp"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                alt="Our creative solutions"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 to-transparent" />
              <p className="absolute bottom-3 left-4 text-white text-sm font-semibold">
                Creative Digital Solutions
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
