"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight, FaCheckCircle } from "react-icons/fa";
import Login from "./Login";

const features = [
  {
    img: "/Assets/online-test.webp",
    title: "Streamlined Project Management",
    desc: "Efficient task allocation, milestone tracking, and deadline management keep every project on schedule and within budget.",
  },
  {
    img: "/Assets/employee.webp",
    title: "A Dedicated Team of Experts",
    desc: "250+ skilled developers, designers, and marketers committed to delivering solutions that exceed client expectations.",
  },
  {
    img: "/Assets/hand-shake.webp",
    title: "On-Time Project Delivery",
    desc: "We follow structured timelines and agile methodologies so your project is always delivered on time — every time.",
  },
];

const reasons = [
  "15+ years of proven industry experience",
  "Full-stack web, app & marketing under one roof",
  "Transparent communication throughout",
  "Post-launch support & maintenance",
];

const WhyChoose = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 xl:px-28 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <span
            className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
              Future IT Touch
            </span>{" "}
            Ranks Among The Top Web & App Companies
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Our top IT company in India, known for innovation and top-notch
            solutions, offers a diverse range of services including web
            development, software, and mobile app development — driving business
            growth and staying at the forefront of technology.
          </p>

          {/* Quick reasons */}
          <ul className="space-y-3 mb-10">
            {reasons.map((r) => (
              <li key={r} className="flex items-center gap-3 text-gray-600">
                <FaCheckCircle className="text-violet-500 w-4 h-4 shrink-0" />
                <span className="text-sm font-medium">{r}</span>
              </li>
            ))}
          </ul>

          {/* Feature blocks */}
          <div className="space-y-7">
            {features.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Image
                    src={item.img}
                    width={32}
                    height={32}
                    alt={item.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-100 mb-8">
            <Image
              className="w-full h-80 object-cover"
              src="/Assets/company.webp"
              width={600}
              height={400}
              alt="Future IT Touch office"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent" />
          </div>

          <p className="text-gray-500 text-base leading-relaxed mb-8">
            As a top web development company, we create robust, scalable
            websites for diverse business objectives. Our skilled developers use
            the latest technologies to deliver flawless, on-time, and
            budget-friendly projects — making us a trusted partner for all your
            digital endeavors.
          </p>

          {/* CTA block */}
          <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Let&apos;s Start a{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
                New Project
              </span>{" "}
              Together
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Already have a project in mind? Fill out the form and let us know
              which direction it should go.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request A Quote <FaAngleRight />
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
