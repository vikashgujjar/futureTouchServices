import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    icon: "/Assets/data.webp",
    gradient: "from-violet-600 to-indigo-600",
    bg: "bg-violet-50",
    title: "Web Development",
    href: "/website-design",
    description:
      "Future-ready websites built for performance, branding, and growth across all verticals.",
    tags: [
      { label: "PHP", href: "/php-laravel-codeigniter-services" },
      { label: ".Net", href: "/asp-dot-net-service" },
      { label: "Java", href: "/java-application-development" },
      { label: "React JS", href: "/reactjs-vuejs-nodejs-development-services" },
    ],
  },
  {
    icon: "/Assets/shopping-cart.webp",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
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
    icon: "/Assets/app-development.webp",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
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
    icon: "/Assets/future.webp",
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
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
    icon: "/Assets/marketing.webp",
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
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
    icon: "/Assets/marketing.webp",
    gradient: "from-purple-500 to-violet-700",
    bg: "bg-purple-50",
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
    <section className="py-20 px-4 sm:px-6 md:px-12 xl:px-28 bg-white">
      <div className="text-center mb-14">
        <span
          className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
          style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
        >
          Our Services
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
          We Empower Clients{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            To Be Loved
          </span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          We think big and have hands in all leading technology platforms to
          provide you a wide array of services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div
              className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}
            >
              <Image
                src={s.icon}
                width={32}
                height={32}
                alt={s.title}
                className="w-8 h-8 object-contain"
              />
            </div>

            <h3
              className={`text-xl font-bold mb-3 bg-gradient-to-r ${s.gradient} text-transparent bg-clip-text`}
            >
              {s.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
              {s.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {s.tags.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="text-xs font-semibold text-violet-700 bg-violet-50 hover:bg-violet-100 px-3 py-1 rounded-full transition-colors"
                >
                  {tag.label}
                </Link>
              ))}
            </div>

            <Link
              href={s.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 group-hover:gap-3 transition-all"
            >
              Explore More <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/service"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 transition-all duration-200"
        >
          View All Services <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
