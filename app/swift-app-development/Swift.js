import React from "react";

import cwd from "../Assets/swift.webp";

import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import { FaLock, FaRocket } from "react-icons/fa";

import { FaServer, FaDatabase, FaTools } from "react-icons/fa";

import { FaCogs } from "react-icons/fa";


import {
  FaApple,
  FaPaintBrush,
  FaCloud,
  FaBug,
  FaMobileAlt,
  FaLaptopCode
} from "react-icons/fa";


const Swift = () => {
const technolgyData = [
  {
    title: "Custom Swift App Development",
    icon: <FaApple className="text-[#306998] text-4xl" />,
    list: [
      "Building high-performance, feature-rich iOS applications using Swift and the latest Apple frameworks.",
      "Developing secure, responsive, and user-friendly mobile apps for startups and enterprises.",
      "Designing custom app architectures for scalability, speed, and long-term maintainability.",
      "Ensuring optimal performance through clean coding, modular components, and native integrations.",
    ],
  },
  {
    title: "iOS App UI/UX Design",
    icon: <FaPaintBrush className="text-[#306998] text-4xl" />,
    list: [
      "Crafting visually appealing and intuitive interfaces following Apple’s Human Interface Guidelines.",
      "Designing smooth, responsive, and accessible user journeys for all device sizes.",
      "Integrating animations and micro-interactions to enhance user engagement and retention.",
      "Ensuring pixel-perfect layouts with performance-optimized SwiftUI and UIKit designs.",
    ],
  },
  {
    title: "API & Backend Integration",
    icon: <FaCloud className="text-[#306998] text-4xl" />,
    list: [
      "Connecting Swift apps with powerful backends using RESTful and GraphQL APIs.",
      "Implementing real-time features like chat, notifications, and analytics integrations.",
      "Integrating third-party services like Firebase, Stripe, and social logins.",
      "Ensuring robust, secure communication between app and server with encryption and tokenization.",
    ],
  },
  {
    title: "Swift App Testing & Quality Assurance",
    icon: <FaBug className="text-[#306998] text-4xl" />,
    list: [
      "Performing unit, integration, and UI testing for consistent app reliability.",
      "Using XCTest and automated CI/CD pipelines for faster deployment cycles.",
      "Ensuring high code quality, performance benchmarks, and crash-free experiences.",
      "Conducting real-device testing to deliver smooth experiences on all iOS devices.",
    ],
  },
  {
    title: "App Store Deployment & Optimization",
    icon: <FaRocket className="text-[#306998] text-4xl" />,
    list: [
      "Managing the complete App Store submission and approval process.",
      "Optimizing your app listing with ASO (App Store Optimization) techniques.",
      "Implementing analytics tracking and crash reporting for performance monitoring.",
      "Ensuring compliance with Apple’s policies and latest OS updates.",
    ],
  },
  {
    title: "Maintenance & Post-Launch Support",
    icon: <FaTools className="text-[#306998] text-4xl" />,
    list: [
      "Providing continuous updates, feature enhancements, and security patches.",
      "Monitoring app performance with real-time analytics and crash logs.",
      "Optimizing battery, memory usage, and speed for better user experience.",
      "Delivering long-term maintenance with 24/7 technical support and upgrades.",
    ],
  },
];

const steps = [
  {
    title: "Project Discovery & Planning",
    description:
      "We begin by analyzing your business goals, user requirements, and target audience to create a roadmap for Swift app development that ensures clarity and success.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "Wireframing & UI/UX Design",
    description:
      "Our designers craft intuitive interfaces and interactive prototypes aligned with Apple’s design philosophy, ensuring seamless usability and brand consistency.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Swift App Development",
    description:
      "Our developers write clean, modular, and maintainable Swift code that leverages frameworks like SwiftUI and Combine for high performance and responsiveness.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "API & Database Integration",
    description:
      "We connect your app with secure backends, APIs, and databases to enable real-time data exchange and functionality across platforms.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Our QA experts perform comprehensive testing to ensure stability, performance, and smooth operation across all iOS versions and devices.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "App Store Deployment",
    description:
      "We handle the complete deployment process, ensuring your app meets Apple’s guidelines and stands out with optimized listings and metadata.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Post-Launch Monitoring",
    description:
      "After launch, we continuously monitor app performance and user feedback to deliver timely updates and feature enhancements.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaMobileAlt className="text-[#306998]" />,
    title: "Native Swift Development",
    desc: "We build robust and scalable iOS applications using Swift for maximum performance, security, and seamless Apple ecosystem integration.",
  },
  {
    icon: <FaLaptopCode className="text-[#306998]" />,
    title: "SwiftUI-Based UI Design",
    desc: "We develop elegant and interactive interfaces with SwiftUI, ensuring smooth transitions, responsive layouts, and a superior user experience.",
  },
  {
    icon: <FaCogs className="text-[#306998]" />,
    title: "Custom App Functionality",
    desc: "We create unique app features like real-time chat, push notifications, and in-app purchases tailored to your business goals.",
  },
  {
    icon: <FaLock className="text-[#306998]" />,
    title: "Enterprise-Grade Security",
    desc: "We integrate Face ID, Touch ID, and encryption to ensure your app data and transactions remain completely secure.",
  },
  {
    icon: <FaRocket className="text-[#306998]" />,
    title: "App Store Optimization",
    desc: "We optimize your Swift app’s performance and listing to increase visibility, downloads, and user engagement on the App Store.",
  },
  {
    icon: <FaTools className="text-[#306998]" />,
    title: "Ongoing Maintenance & Support",
    desc: "We provide continuous updates, OS compatibility fixes, and technical support to keep your Swift app running at its best.",
  },
];

const cards = [
  {
    count: "150+",
    title: "Swift Apps Delivered",
    desc: "We’ve successfully built, tested, and launched over 150 high-performance Swift-based iOS applications across industries like fintech, healthcare, travel, and eCommerce. Each project is tailored for seamless performance, intuitive navigation, and engaging user experiences that align with Apple’s best design practices.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "8+",
    title: "Years of iOS Expertise",
    desc: "With over 8 years of hands-on experience in iOS app development, our Swift developers bring deep technical proficiency in Apple frameworks, SwiftUI, and Xcode. We focus on delivering efficient, secure, and visually appealing applications optimized for long-term business growth and user retention.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "200+",
    title: "Satisfied Global Clients",
    desc: "Our client-centric approach has helped us serve more than 200 clients globally, from startups to established enterprises. We pride ourselves on building trusted partnerships and delivering innovative, reliable, and high-performing Swift applications that drive measurable business outcomes and digital success.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "App Launch Success Rate",
    desc: "We maintain a 99% App Store approval rate by following Apple’s Human Interface Guidelines and rigorous testing standards. From design validation to performance tuning, we ensure every Swift app is bug-free, fully compliant, and ready for smooth deployment on the App Store without rejections or delays.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support Availability",
    desc: "Our dedicated Swift development team provides 24/7 technical support, continuous monitoring, and proactive maintenance. Whether it’s a post-launch update, API integration, or performance optimization, we ensure your iOS app runs flawlessly and adapts quickly to new Apple OS versions and user demands.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


const faqData = [
  {
    title: "Why choose Swift for iOS app development?",
    description:
      "Swift is Apple’s powerful, modern programming language known for speed, safety, and maintainability — ideal for building scalable and high-performance iOS applications.",
  },
  {
    title: "Can you develop custom enterprise Swift apps?",
    description:
      "Yes, we specialize in building enterprise-grade iOS apps that integrate with CRMs, APIs, and analytics tools for seamless business operations.",
  },
  {
    title: "Do you use SwiftUI for app design?",
    description:
      "Absolutely. We use SwiftUI to craft beautiful, adaptive, and smooth user interfaces that perform exceptionally well on all Apple devices.",
  },
  {
    title: "Can you migrate my Objective-C app to Swift?",
    description:
      "Yes, our team can refactor and migrate your existing Objective-C codebase to Swift, ensuring improved performance and maintainability.",
  },
  {
    title: "Do you offer post-launch app maintenance?",
    description:
      "We provide continuous updates, bug fixes, and optimization to ensure your Swift app remains secure and performs smoothly across iOS versions.",
  },
  {
    title: "Can you integrate third-party APIs into Swift apps?",
    description:
      "Yes, we integrate APIs for analytics, payments, cloud storage, and more, enabling richer functionality and connected experiences.",
  },
  {
    title: "Is my app data secure?",
    description:
      "We implement Apple’s best security practices, encryption, and authentication methods like Touch ID and Face ID for complete data safety.",
  },
  {
    title: "Do you provide App Store publishing assistance?",
    description:
      "Yes, we manage the full publishing process including metadata setup, ASO optimization, and compliance with Apple’s app submission rules.",
  },
  {
    title: "Do you support iPad and WatchOS apps?",
    description:
      "Yes, we develop cross-device Swift apps optimized for iPhones, iPads, and Apple Watch to maximize your app’s reach and usability.",
  },
  {
    title: "What industries do you serve?",
    description:
      "We build Swift apps for healthcare, finance, education, eCommerce, travel, and entertainment industries — customized for unique needs.",
  },
];


  return (
    <>
      <CommonBanner
        img={cwd}
        title="SWIFT MOBILE APP DEVELOPMENT SERVICES"
        desc="Introduced by Apple for the development of iOS and Mac Apps, Swift is an efficient and feature-rich high-level programming language. The iOS apps built on Swift run very fast and are quite interactive. Besides developing new apps for a range of platforms namely, iOS, macOS, watchOS, tvOS, Swift can also be used in revamping existing apps. Future IT Touch Pvt. Ltd. has a dedicated team of skilled and experienced iOS app developers who are well versed in the language to develop a wide variety of apps swiftly. Our Swift mobile app development services are customized to your specific business requisites."
      />
<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build High-Performance, Secure & Scalable iOS Apps with{" "}
      <span className="text-indigo-600">Swift App Development</span> 🚀
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking to create a fast, intuitive, and feature-rich iOS application? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>,
      we specialize in building custom iOS apps using{" "}
      <span className="font-semibold text-indigo-600">Swift</span> — Apple’s
      modern programming language for developing high-performance and secure
      mobile applications.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Our Swift app developers craft pixel-perfect interfaces, ensure seamless
      navigation, and integrate powerful functionalities tailored to your
      business needs. From startups to enterprises, we deliver scalable and
      future-ready iOS solutions that enhance engagement and drive growth.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need a custom iPhone app, enterprise-grade iOS solution, or
      App Store optimization support, we guarantee exceptional performance,
      robust security, and a seamless user experience across all Apple devices.
    </p>

    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 text-white font-medium bg-indigo-600 rounded-xl shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
      >
        Let’s Discuss Your Project
      </a>
    </div>
  </div>
</div>


      {/* High-Performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 xl:py-12">
       <div className="text-center space-y-5">
  <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
    Future IT Touch’s Expert Swift App Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empower your business with cutting-edge{" "}
    <span className="font-semibold text-indigo-600">Swift</span> app development
    solutions designed for performance, security, and scalability. Our team
    creates sleek, intuitive, and high-performing iOS applications that deliver
    exceptional user experiences — helping you engage customers and drive
    measurable growth across all Apple platforms.
  </p>
</div>


        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {technolgyData.map((elm, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-gray-300"
            >
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {elm.title}
                </h4>
                <div>{elm.icon}</div>
              </div>

              <div className="mt-5 space-y-3 grid grid-cols-2 gap-y-3">
                {elm.list.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheck className="text-blue-500 mt-1.5 min-w-[20px]" />
                    <p className="text-gray-700 font-semibold underline text-sm md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <a
            href="+917056937000"
            className="mt-10   px-6 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
          >
            i want speak with expert
          </a>
        </div>
      </div>

      {/* Approach We Follow */}

     <div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
           <div className="relative w-full lg:w-[55%] lg:sticky lg:top-24 self-start">
             <div className="rounded-2xl overflow-hidden shadow-2xl  ">
               <img
                 src="/images/appdevelopment/appbg.webp"
                 alt="High Performance"
                 className="w-full h-full absolute inset-0  rounded-2xl object-cover hover:scale-105 transition-transform duration-700"
               />
   
    <div className="relative z-10 h-full bg-gradient-to-t rounded-2xl from-black/70 via-black/40 to-transparent flex flex-col justify-start p-8">
  <div className="text-left capitalize leading-tight text-white space-y-4 font-bold">
    <h6 className="text-6xl lg:text-7xl">
      <FaApple /> {/* Recommended Icon for Swift App Development */}
    </h6>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
      Swift iOS & <br />
      macOS App <br />
      <span className="">Development Approach</span>
    </h2>
    <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
      To craft seamless{" "}
      <span className="text-[#00ffe4]">
        - native Apple apps for high-performance innovation ⚡
      </span>
    </p>
  </div>
</div>

   
             </div>
           </div>
   
           <div className="w-full lg:w-[65%] grid grid-cols-1 gap-6">
             {steps.map((feature, index) => (
               <div
                 key={index}
                 className="flex flex-col items-start gap-2 p-6 rounded-2xl border border-gray-200 shadow-md group hover:bg-[#0E395E] hover:shadow-2xl transition-all duration-300"
               >
                 <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                   {feature.title}
                 </h4>
                 <p className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-gray-100 leading-relaxed text-justify transition-colors">
                   {feature.description}
                 </p>
               </div>
             ))}
           </div>
         </div>

      {/* <CustomSlider/> */}
      <CommonSlider cards={cards} />

      {/* upscale your buiness  */}

      <div className="px-5 md:px-12 xl:px-28 bg-[#0a2548] py-10 md:py-14 lg:py-16 m-6 md:m-10 rounded-2xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white font-extrabold w-full lg:w-[85%] mx-auto leading-snug">
          Empower Your Business With Custom Swift App Development Services

        </h4>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {upScale.map((elm, index) => (
            <div key={index} className="flex flex-col gap-y-4 text-white">
              <span className="text-4xl text-indigo-400">{elm.icon}</span>
              <h5 className="text-xl md:text-2xl font-bold">{elm.title}</h5>
              <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                {elm.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* faq  */}

      <CommonFaqs
        faqData={faqData}
title="On Swift App Development Services"
      />
      <BusinessIdea />
    </>
  );
};

export default Swift;
