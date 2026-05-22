"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Login from "./Login";

const features = [
  {
    img: "/Assets/online-test.webp",
    title: "Streamlined Project Management",
    desc: "Efficient task allocation, milestone tracking, and deadline management keep every project on schedule and within budget.",
    color: "bg-violet-100",
  },
  {
    img: "/Assets/employee.webp",
    title: "A Dedicated Team of Experts",
    desc: "250+ skilled developers, designers, and marketers committed to delivering solutions that exceed client expectations.",
    color: "bg-indigo-100",
  },
  {
    img: "/Assets/hand-shake.webp",
    title: "On-Time Project Delivery",
    desc: "We follow structured timelines and agile methodologies so your project is always delivered on time — every time.",
    color: "bg-purple-100",
  },
];

const reasons = [
  "15+ years of proven industry experience",
  "Full-stack web, app & marketing under one roof",
  "Transparent communication throughout",
  "Post-launch support & maintenance",
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Projects Done" },
  { value: "250+", label: "Team Members" },
  { value: "120+", label: "Countries" },
];

const WhyChoose = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 xl:px-28 bg-gradient-to-br from-slate-100 via-violet-50 to-indigo-50/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left column ── */}
        <div>
          <span
            className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5 leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Future IT Touch
            </span>{" "}
            Ranks Among The Top Companies
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
            Our top IT company in India offers a diverse range of services — web
            development, software, and mobile apps — driving business growth and
            staying at the forefront of technology.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-violet-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                  {s.value}
                </p>
                <p className="text-xs text-gray-500 mt-1.5 font-medium leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Feature cards */}
          <div className="space-y-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-violet-100 transition-all duration-200"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  <Image
                    src={item.img}
                    width={26}
                    height={26}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-6">
          {/* Image card with floating badge */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-violet-100/60">
            <Image
              src="/Assets/company.webp"
              width={600}
              height={420}
              alt="Future IT Touch office"
              className="w-full h-[360px] object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 via-transparent to-transparent" />

            {/* Floating trust badge */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center justify-between shadow-lg border border-white/60">
              <div>
                <p className="text-xs text-gray-500 font-medium">Trusted Worldwide</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">
                  ISO Certified · Award-Winning IT Company
                </p>
              </div>
              <div className="flex -space-x-2">
                {["/Assets/badges-a.webp", "/Assets/badges-b.webp", "/Assets/badges-c.webp"].map((b, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-violet-50 flex items-center justify-center">
                    <Image src={b} width={36} height={36} alt="badge" className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed">
            As a top web development company, we create robust, scalable websites
            for diverse business objectives. Our skilled developers use the latest
            technologies to deliver flawless, on-time, and budget-friendly
            projects — making us a trusted partner for all your digital endeavors.
          </p>

          {/* CTA card */}
          <div className="bg-white border border-violet-100 rounded-2xl p-7 shadow-sm relative overflow-hidden">
            {/* Decorative gradient corner */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-violet-50 to-transparent rounded-bl-full pointer-events-none" />

            <h3 className="text-xl font-extrabold text-gray-900 mb-2 relative">
              Let&apos;s Start a{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                New Project
              </span>{" "}
              Together
            </h3>
            <p className="text-gray-500 text-sm mb-6 relative max-w-sm">
              Already have a project in mind? Fill out the form and let us know
              which direction it should go.
            </p>
            <div className="flex flex-wrap gap-3 relative">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request A Quote <FaArrowRight className="w-3 h-3" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-violet-200 text-violet-700 px-6 py-3 text-sm font-semibold rounded-full hover:bg-violet-50 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <Login handleClosePopup={() => setIsPopupOpen(false)} isPopupOpen={isPopupOpen} />
      )}
    </section>
  );
};

export default WhyChoose;
