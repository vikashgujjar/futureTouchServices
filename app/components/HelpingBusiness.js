import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const industries = [
  { id: 1, src: "/Assets/icon-1.webp", text: "Social Networking", color: "bg-blue-50 border-blue-100" },
  { id: 2, src: "/Assets/icon-2.webp", text: "Digital Marketing", color: "bg-green-50 border-green-100" },
  { id: 3, src: "/Assets/icon-3.webp", text: "Ecommerce", color: "bg-purple-50 border-purple-100" },
  { id: 4, src: "/Assets/icon-4.webp", text: "Video Service", color: "bg-yellow-50 border-yellow-100" },
  { id: 5, src: "/Assets/icon-5.webp", text: "Banking Service", color: "bg-red-50 border-red-100" },
  { id: 6, src: "/Assets/icon-6.webp", text: "Enterprise", color: "bg-pink-50 border-pink-100" },
  { id: 7, src: "/Assets/icon-7.webp", text: "Education", color: "bg-indigo-50 border-indigo-100" },
  { id: 8, src: "/Assets/icon-8.webp", text: "Tour & Travels", color: "bg-amber-50 border-amber-100" },
  { id: 9, src: "/Assets/icon-9.webp", text: "Health Service", color: "bg-sky-50 border-sky-100" },
  { id: 10, src: "/Assets/icon-10.webp", text: "Event & Ticket", color: "bg-lime-50 border-lime-100" },
  { id: 11, src: "/Assets/icon-11.webp", text: "Restaurant", color: "bg-orange-50 border-orange-100" },
  { id: 12, src: "/Assets/icon-12.webp", text: "Business Consulting", color: "bg-teal-50 border-teal-100" },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 xl:px-28 bg-gray-50">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <span
            className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Helping Businesses{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
              In All Domains
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-5">
            We develop websites that build businesses. We believe there is no
            room for a one-size-fits-all approach in web development — each
            website needs a personal touch to meet specific business needs.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            As a reputable website development company in India, we've assisted
            hundreds of companies worldwide to achieve their goals, drive
            business growth, and create happy customers. From static sites to
            complex web apps — we do it all!
          </p>
          <Link
            href="/service"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            Explore Our Services <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Right: industry cards grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {industries.map((card) => (
            <div
              key={card.id}
              className={`${card.color} border rounded-2xl flex flex-col items-center justify-center p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200`}
            >
              <Image
                src={card.src}
                width={48}
                height={48}
                alt={card.text}
                className="w-10 h-10 mb-3 object-contain"
              />
              <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 leading-tight">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
