"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMobileAlt,
  FaGlobe,
  FaShoppingCart,
  FaBolt,
  FaBullhorn,
  FaPaintBrush,
  FaArrowRight,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";

import icon1 from "../Assets/startup.webp";
import icon2 from "../Assets/team.webp";
import icon3 from "../Assets/mobile.webp";
import icon4 from "../Assets/computers.webp";
import icon5 from "../Assets/world.webp";
import icon6 from "../Assets/deal.webp";
import svg from "../Assets/ux.svg";
import apple from "../Assets/apple.svg";
import tablet from "../Assets/tablet.svg";
import android from "../Assets/android.svg";
import shopify from "../Assets/shopify.svg";
import php from "../Assets/php.svg";
import java from "../Assets/java.svg";
import magento from "../Assets/magento.svg";
import wordpress from "../Assets/wordpress.svg";
import reactjs from "../Assets/reactjs.webp";
import nodejs from "../Assets/nodejs.webp";
import angular from "../Assets/angular.webp";
import seo from "../Assets/seo.webp";
import cms from "../Assets/cms.webp";
import ppc from "../Assets/ppc.webp";
import smm from "../Assets/smm.webp";
import logo from "../Assets/logo.webp";
import brochure from "../Assets/brochure.webp";
import video from "../Assets/2d3d.webp";

import Login from "../components/Login";
import Testimonial from "../components/Testimonial";
import Location from "../components/Location";
import MutipleServices from "../components/MutipleServices";

const stats = [
  { src: icon1, counter: "20+", text: "Years Experience" },
  { src: icon2, counter: "250+", text: "Talented Squad" },
  { src: icon3, counter: "1200+", text: "Apps Developed" },
  { src: icon4, counter: "5000+", text: "Projects Delivered" },
  { src: icon5, counter: "120+", text: "Countries Served" },
  { src: icon6, counter: "100%", text: "Client Satisfaction" },
];

const serviceCards = [
  {
    icon: <FaMobileAlt className="w-6 h-6 text-white" />,
    title: "App Development",
    color: "from-violet-600 to-indigo-600",
    subLinks: [
      { label: "iPhone", href: "/ios-application-development" },
      { label: "Android", href: "/android-application-development" },
      { label: "Cross Platform", href: "/hybrid-application-development" },
    ],
    techs: [
      { src: android, alt: "Android" },
      { src: apple, alt: "Apple" },
      { src: tablet, alt: "Hybrid" },
    ],
    description:
      "Transform and mobilize your business anytime, anywhere with custom mobile app development services for Android, iOS & Hybrid platforms.",
    href: "/application-developement",
  },
  {
    icon: <FaGlobe className="w-6 h-6 text-white" />,
    title: "Web Development",
    color: "from-blue-600 to-cyan-500",
    subLinks: [
      { label: "Asp.net", href: "/asp-dot-net-service" },
      { label: "PHP", href: "/php-laravel-codeigniter-services" },
      { label: "Java", href: "/java-application-development" },
      { label: "WordPress", href: "/wordpress-and-shopify-development" },
    ],
    techs: [
      { src: svg, alt: "UX" },
      { src: php, alt: "PHP" },
      { src: java, alt: "Java" },
      { src: wordpress, alt: "WordPress" },
    ],
    description:
      "Your business can get a reliable facelift for long-term branding solutions across all verticals including e-commerce and open source CMS.",
    href: "/website-design",
  },
  {
    icon: <FaShoppingCart className="w-6 h-6 text-white" />,
    title: "eCommerce Development",
    color: "from-emerald-500 to-teal-600",
    subLinks: [
      { label: "Laravel", href: "/php-laravel-codeigniter-services" },
      { label: "Magento", href: "/wordpress-and-shopify-development" },
      { label: "React JS", href: "/reactjs-vuejs-nodejs-development-services" },
    ],
    techs: [
      { src: magento, alt: "Magento" },
      { src: shopify, alt: "Shopify" },
      { src: reactjs, alt: "React JS" },
    ],
    description:
      "We deliver cutting edge technology solutions for the online commerce industry. Our ecommerce solutions are built on the latest technology.",
    href: "/ecommerce-website-development",
  },
  {
    icon: <FaBolt className="w-6 h-6 text-white" />,
    title: "Trending Technologies",
    color: "from-orange-500 to-amber-500",
    subLinks: [
      { label: "React JS", href: "/reactjs-vuejs-nodejs-development-services" },
      { label: "Node JS", href: "/reactjs-vuejs-nodejs-development-services" },
      { label: "Angular", href: "/angularjs-development-service" },
    ],
    techs: [
      { src: reactjs, alt: "React" },
      { src: nodejs, alt: "Node" },
      { src: angular, alt: "Angular" },
    ],
    description:
      "We create winning business models through innovative product development practices, committed to delivering the right value.",
    href: "/trending-technology",
  },
  {
    icon: <FaBullhorn className="w-6 h-6 text-white" />,
    title: "Digital Marketing",
    color: "from-pink-500 to-rose-600",
    subLinks: [
      { label: "SEO", href: "/search-engine-optimization" },
      { label: "CMS", href: "/cms-development" },
      { label: "PPC", href: "/pay-per-click-service" },
      { label: "SMM", href: "/social-media-marketing-service" },
    ],
    techs: [
      { src: seo, alt: "SEO" },
      { src: cms, alt: "CMS" },
      { src: ppc, alt: "PPC" },
      { src: smm, alt: "SMM" },
    ],
    description:
      "Digital marketing is the best way to reach your audience. We provide all types of digital marketing tools like PPC, SMO, SEO, and SMM.",
    href: "/digital-marketing-service",
  },
  {
    icon: <FaPaintBrush className="w-6 h-6 text-white" />,
    title: "Design & Branding",
    color: "from-purple-500 to-violet-700",
    subLinks: [
      { label: "Logo", href: "/logo-design-services" },
      { label: "Brochure", href: "/brochure-design-service" },
      { label: "2D/3D Video", href: "/animated-services" },
    ],
    techs: [
      { src: logo, alt: "Logo" },
      { src: brochure, alt: "Brochure" },
      { src: video, alt: "Video" },
    ],
    description:
      "We serve all your designing needs: corporate identity, product branding, logo design, brochures, leaflets, animated 2D/3D videos & more.",
    href: "/graphic-design-services",
  },
];

const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white" /> */}

      {/* Hero */}
      <section className="relative overflow-hidden pt-48! bg-gradient-to-br from-[#1a0533] via-[#2d1060] to-[#0f2460] py-20 sm:py-24">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative px-5 md:px-12 xl:px-28">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-sm text-violet-200 font-medium">
              Our Complete Service Portfolio
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Website, Mobile App &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Marketing
            </span>{" "}
            Services
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mb-8 leading-relaxed">
            We are a full-stack Branding, Website Development, App Development,
            Digital Marketing, and Web Designing company in Chandigarh. With a
            team of 250+ designers, developers, and marketing experts, we have
            been serving a global clientele since 2017.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all"
            >
              Quick Enquiry <FaArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="tel:+917056937000"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              <FaPhone className="w-4 h-4 rotate-90" /> Call: 7056937000
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            {[
              "15+ Years Experience",
              "1200+ Apps Delivered",
              "120+ Countries Served",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <FaCheckCircle className="text-violet-400 w-4 h-4" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-5 md:px-12 xl:px-28 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Image
                  src={s.src}
                  width={40}
                  height={40}
                  alt={s.text}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {s.counter}
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 pt-16 pb-20 px-5 md:px-12 xl:px-28">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm text-violet-700 font-semibold">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            We think big and have hands in all leading technology platforms to
            provide you a wide array of services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div
                className={`bg-gradient-to-r ${card.color} p-5 flex items-center gap-3`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{card.title}</h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-5">
                  {card.subLinks.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="text-xs font-semibold text-violet-700 bg-violet-50 hover:bg-violet-100 px-3 py-1 rounded-full transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
                <div className="flex gap-2 mb-5">
                  {card.techs.map((t, j) => (
                    <div
                      key={j}
                      className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2"
                    >
                      <Image
                        src={t.src}
                        width={32}
                        height={32}
                        alt={t.alt}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-indigo-700 group-hover:gap-3 transition-all"
                >
                  Explore More <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MutipleServices />
      <Testimonial />
      <Location />

      {isPopupOpen && (
        <Login
          handleClosePopup={() => setIsPopupOpen(false)}
          isPopupOpen={isPopupOpen}
        />
      )}
    </>
  );
};

export default Services;
