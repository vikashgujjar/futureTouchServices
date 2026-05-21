import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const marketingServices = [
  {
    icon: "/Assets/search.webp",
    title: "Search Engine Optimisation",
    href: "/search-engine-optimization",
    description:
      "Boost your website's visibility with personalized SEO services designed to improve search rankings and connect you with your ideal audience.",
    badge: "SEO",
    badgeColor: "bg-violet-100 text-violet-700",
  },
  {
    icon: "/Assets/family.webp",
    title: "Social Media Marketing",
    href: "/social-media-marketing-service",
    description:
      "Enhance your brand's reach with customized Social Media Marketing services designed to authentically engage your audience and foster meaningful growth.",
    badge: "SMM",
    badgeColor: "bg-pink-100 text-pink-700",
  },
  {
    icon: "/Assets/digital-marketing.webp",
    title: "Search Engine Marketing / Paid Ads",
    href: "/pay-per-click-service",
    description:
      "Drive targeted traffic and enhance your online presence with specialized SEM and Paid Ads services crafted to optimize ROI and achieve measurable success.",
    badge: "PPC",
    badgeColor: "bg-indigo-100 text-indigo-700",
  },
];

export default function DigitalMarketingService() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 xl:px-28 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span
            className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            Digital Marketing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
            We Make Finest Marketing With{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
              Great Passion
            </span>
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Digital marketing is the best way to reach your audience and create
            lasting relationships with clients. We provide data-driven strategies
            that deliver real, measurable results for your business.
          </p>

          <div className="space-y-5">
            {marketingServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-violet-100 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <Image
                    src={service.icon}
                    width={32}
                    height={32}
                    alt={service.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-bold text-gray-900">
                      {service.title}
                    </h4>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <FaArrowRight className="text-gray-300 group-hover:text-violet-500 w-4 h-4 shrink-0 mt-1 transition-colors" />
              </Link>
            ))}
          </div>

          <Link
            href="/digital-marketing-service"
            className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            Explore All Marketing Services <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-violet-100 rounded-full blur-3xl opacity-30 scale-90" />
            <Image
              className="relative object-contain w-full max-w-md drop-shadow-xl"
              src="/Assets/connect_img.webp"
              width={480}
              height={480}
              alt="Digital Marketing Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
