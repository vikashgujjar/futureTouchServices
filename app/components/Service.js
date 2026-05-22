import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const services = [
  {
    number: "01",
    icon: "/Assets/data.webp",
    accent: "from-violet-500 to-indigo-600",
    glow: "hover:shadow-violet-500/20",
    border: "hover:border-violet-500/40",
    title: "Web Development",
    href: "/website-design",
    description:
      "Future-ready websites built for performance, branding, and growth across all verticals.",
    tags: [
      { label: "PHP Laravel", href: "/php-laravel-codeigniter-services" },
      { label: ".Net", href: "/asp-dot-net-service" },
      { label: "Java", href: "/java-application-development" },
      { label: "React JS", href: "/reactjs-vuejs-nodejs-development-services" },
    ],
  },
  {
    number: "02",
    icon: "/Assets/shopping-cart.webp",
    accent: "from-emerald-400 to-teal-600",
    glow: "hover:shadow-emerald-500/20",
    border: "hover:border-emerald-500/40",
    title: "Ecommerce Development",
    href: "/ecommerce-website-development",
    description:
      "Cutting-edge ecommerce solutions on the latest technology for maximum conversions and revenue.",
    tags: [
      { label: "Magento", href: "/wordpress-and-shopify-development" },
      { label: "Shopify", href: "/wordpress-and-shopify-development" },
      { label: "Laravel", href: "/php-laravel-codeigniter-services" },
    ],
  },
  {
    number: "03",
    icon: "/Assets/app-development.webp",
    accent: "from-sky-400 to-blue-600",
    glow: "hover:shadow-sky-500/20",
    border: "hover:border-sky-500/40",
    title: "Mobile App Development",
    href: "/application-developement",
    description:
      "Native and cross-platform mobile apps for Android and iOS that users love to use.",
    tags: [
      { label: "iPhone", href: "/ios-application-development" },
      { label: "Android", href: "/android-application-development" },
      { label: "Cross Platform", href: "/hybrid-application-development" },
    ],
  },
  {
    number: "04",
    icon: "/Assets/future.webp",
    accent: "from-orange-400 to-amber-500",
    glow: "hover:shadow-orange-500/20",
    border: "hover:border-orange-500/40",
    title: "Trending Technologies",
    href: "/trending-technology",
    description:
      "Innovative product development with React, Node.js, Angular, and the latest next-gen tech stack.",
    tags: [
      { label: "React.js", href: "/reactjs-vuejs-nodejs-development-services" },
      { label: "Node.js", href: "/reactjs-vuejs-nodejs-development-services" },
      { label: "Angular", href: "/angularjs-development-service" },
    ],
  },
  {
    number: "05",
    icon: "/Assets/marketing.webp",
    accent: "from-pink-500 to-rose-600",
    glow: "hover:shadow-pink-500/20",
    border: "hover:border-pink-500/40",
    title: "Digital Marketing",
    href: "/digital-marketing-service",
    description:
      "Data-driven SEO, PPC, SMM, and content strategies that drive real, measurable business growth.",
    tags: [
      { label: "SEO", href: "/search-engine-optimization" },
      { label: "PPC", href: "/pay-per-click-service" },
      { label: "SMM", href: "/social-media-marketing-service" },
    ],
  },
  {
    number: "06",
    icon: "/Assets/branding-.webp",
    accent: "from-purple-400 to-violet-700",
    glow: "hover:shadow-purple-500/20",
    border: "hover:border-purple-500/40",
    title: "Design & Branding",
    href: "/graphic-design-services",
    description:
      "From logo design to animated 2D/3D videos — complete creative branding that makes you unforgettable.",
    tags: [
      { label: "Logo Design", href: "/logo-design-services" },
      { label: "Brochure", href: "/brochure-design-service" },
      { label: "2D/3D Video", href: "/animated-services" },
    ],
  },
];

export default function Service() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 xl:px-28 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-violet-100/60 blur-3xl rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-16 relative">
        <span
          className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
          style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
        >
          Our Services
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
          Solutions That{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Drive Results
          </span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base">
          We think big and have hands in all leading technology platforms to
          provide you a wide array of services.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
        {services.map((s) => (
          <div
            key={s.title}
            className={`group relative bg-white border border-gray-100 ${s.border} rounded-2xl p-7 hover:shadow-xl ${s.glow} transition-all duration-300 flex flex-col overflow-hidden`}
          >
            {/* Large faded number — decorative background */}
            <span className="absolute -top-4 -right-2 text-[96px] font-extrabold text-gray-100 select-none leading-none pointer-events-none">
              {s.number}
            </span>

            {/* Top row: icon + number badge */}
            <div className="flex items-start justify-between mb-5">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Image
                  src={s.icon}
                  width={28}
                  height={28}
                  alt={s.title}
                  className="w-7 h-7 object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xs font-bold text-gray-300 font-mono mt-1">
                {s.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors duration-200">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
              {s.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {s.tags.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="text-xs font-semibold text-violet-700 bg-violet-50 hover:bg-violet-100 border border-violet-100 hover:border-violet-200 px-3 py-1 rounded-full transition-all duration-150"
                >
                  {tag.label}
                </Link>
              ))}
            </div>

            {/* CTA link */}
            <Link
              href={s.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 group-hover:gap-3 transition-all duration-200"
            >
              Explore Service <FaArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Bottom gradient line on hover */}
            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-14">
        <Link
          href="/service"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-violet-900/40 hover:shadow-violet-600/40 hover:-translate-y-0.5 transition-all duration-200"
        >
          View All Services <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
