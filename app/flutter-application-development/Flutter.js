import React from "react";

import app from "../Assets/Flutter.webp";

import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import { FaLock, FaRocket } from "react-icons/fa";

import {  FaTools } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

import { FaCogs } from "react-icons/fa";


import {
  FaApple,
  FaPaintBrush,
  FaCloud,
  FaBug,
  FaMobileAlt,
  FaLaptopCode
} from "react-icons/fa";


const Flutter = () => {
const technolgyData = [
  {
    title: "Custom Flutter App Development",
    icon: <FaApple className="text-[#306998] text-4xl" />,
    list: [
      "Building high-performance, feature-rich mobile applications using Flutter and Dart frameworks.",
      "Developing secure, responsive, and user-friendly apps for both Android and iOS platforms.",
      "Designing custom app architectures for scalability, speed, and long-term maintainability.",
      "Ensuring optimal performance through clean coding, modular components, and native integrations.",
    ],
  },
  {
    title: "Cross-Platform App UI/UX Design",
    icon: <FaPaintBrush className="text-[#306998] text-4xl" />,
    list: [
      "Crafting visually appealing and intuitive interfaces with Flutter’s flexible widget system.",
      "Designing smooth, responsive, and accessible user experiences for all screen sizes.",
      "Integrating animations and micro-interactions to enhance engagement and retention.",
      "Ensuring pixel-perfect layouts with Material Design and Cupertino widget optimization.",
    ],
  },
  {
    title: "API & Backend Integration",
    icon: <FaCloud className="text-[#306998] text-4xl" />,
    list: [
      "Connecting Flutter apps with powerful backends using RESTful and GraphQL APIs.",
      "Implementing real-time features like chat, notifications, and data synchronization.",
      "Integrating third-party services like Firebase, Stripe, Google Maps, and social logins.",
      "Ensuring robust, secure communication between app and server with encryption and tokens.",
    ],
  },
  {
    title: "Flutter App Testing & Quality Assurance",
    icon: <FaBug className="text-[#306998] text-4xl" />,
    list: [
      "Performing unit, widget, and integration testing for consistent app reliability.",
      "Using Flutter’s testing tools and automated CI/CD pipelines for faster deployments.",
      "Ensuring high code quality, performance benchmarks, and crash-free experiences.",
      "Conducting real-device testing to deliver smooth performance across platforms.",
    ],
  },
  {
    title: "App Deployment & Optimization",
    icon: <FaRocket className="text-[#306998] text-4xl" />,
    list: [
      "Managing complete deployment on Google Play Store and Apple App Store.",
      "Optimizing your app listing with ASO (App Store Optimization) best practices.",
      "Implementing analytics tracking and crash reporting for ongoing performance insights.",
      "Ensuring compliance with store policies and latest OS updates for smooth approvals.",
    ],
  },
  {
    title: "Maintenance & Post-Launch Support",
    icon: <FaTools className="text-[#306998] text-4xl" />,
    list: [
      "Providing continuous updates, feature enhancements, and bug fixes for all versions.",
      "Monitoring app performance with analytics tools and real-time tracking systems.",
      "Optimizing app speed, memory usage, and responsiveness for better user experience.",
      "Delivering long-term support with 24/7 technical maintenance and version upgrades.",
    ],
  },
];

const steps = [
  {
    title: "Project Discovery & Planning",
    description:
      "We start by analyzing your business objectives, audience, and app goals to build a tailored roadmap for Flutter app development success.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "Wireframing & UI/UX Design",
    description:
      "Our designers craft intuitive, adaptive interfaces and prototypes using Flutter’s widget system, ensuring seamless multi-platform usability.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Flutter App Development",
    description:
      "Our developers write clean, modular, and scalable Dart code using Flutter’s framework for native-like performance and smooth animations.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "API & Database Integration",
    description:
      "We integrate your app with secure backends, APIs, and cloud databases for real-time connectivity and efficient data management.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Our QA experts conduct rigorous testing to ensure flawless performance, usability, and compatibility across Android and iOS devices.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "App Store Deployment",
    description:
      "We manage the entire deployment process, ensuring your Flutter app meets Play Store and App Store compliance standards.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Post-Launch Monitoring",
    description:
      "After launch, we monitor app performance and user engagement to implement updates and feature improvements regularly.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaMobileAlt className="text-[#306998]" />,
    title: "Cross-Platform Development",
    desc: "We build high-quality Flutter apps that run seamlessly across Android, iOS, web, and desktop with a single codebase.",
  },
  {
    icon: <FaLaptopCode className="text-[#306998]" />,
    title: "Widget-Based UI Design",
    desc: "We design dynamic, responsive, and interactive UIs with Flutter’s rich widget library for exceptional user experiences.",
  },
  {
    icon: <FaCogs className="text-[#306998]" />,
    title: "Custom App Features",
    desc: "We develop custom features like live chat, push notifications, in-app purchases, and more tailored to your business goals.",
  },
  {
    icon: <FaLock className="text-[#306998]" />,
    title: "Data Security & Encryption",
    desc: "We use best-in-class encryption methods and secure APIs to safeguard your Flutter app’s data and transactions.",
  },
  {
    icon: <FaRocket className="text-[#306998]" />,
    title: "App Store Optimization",
    desc: "We enhance your app’s performance and listing visibility to drive more downloads and engagement on both stores.",
  },
  {
    icon: <FaTools className="text-[#306998]" />,
    title: "Ongoing Maintenance & Support",
    desc: "We offer 24/7 technical support, continuous updates, and compatibility upgrades for your Flutter app.",
  },
];

const cards = [
  {
    count: "150+",
    title: "Flutter Apps Delivered",
    desc: "We’ve successfully designed, developed, and launched over 150 high-quality Flutter applications that have transformed user experiences across multiple industries — including finance, healthcare, travel, logistics, and eCommerce. Each app is crafted with pixel-perfect UI, native performance, and optimized backend integration to ensure seamless functionality and a consistent experience across Android, iOS, and the web. Our approach focuses on scalability, user engagement, and long-term maintainability for business success.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "8+",
    title: "Years of App Development Expertise",
    desc: "With more than 8 years of hands-on experience in mobile app development, our team has mastered the art of building cross-platform applications using Flutter and Dart. From architecting clean and modular codebases to integrating Firebase, REST APIs, and advanced state management solutions like Riverpod or Bloc, we ensure every app performs efficiently. Our experience extends to crafting enterprise-grade applications that meet the highest standards of reliability, security, and long-term scalability for both startups and global brands.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "200+",
    title: "Satisfied Global Clients",
    desc: "We take pride in serving over 200 satisfied clients from around the world, ranging from fast-growing startups to large enterprises. Our clients consistently recognize us for delivering robust, scalable, and visually stunning Flutter applications that align with their brand and business objectives. Whether it’s building MVPs for emerging entrepreneurs or end-to-end digital platforms for established corporations, we focus on delivering measurable value and fostering long-term partnerships built on trust, innovation, and performance excellence.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Deployment Success Rate",
    desc: "Our development process ensures a 99% deployment success rate on both the Google Play Store and Apple App Store. Every app goes through rigorous multi-device testing, performance optimization, and compliance validation to meet store policies and user expectations. From app size optimization to API security and accessibility compliance, we guarantee a flawless launch experience. Our QA team and CI/CD pipelines ensure that every release is stable, efficient, and perfectly tuned for smooth user onboarding and retention.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support Availability",
    desc: "We understand that continuous performance and uptime are critical for mobile applications. That’s why our Flutter experts offer 24/7 support, monitoring, and maintenance services. From crash analytics and bug fixing to performance upgrades and feature enhancements, we ensure your app stays future-ready. Our dedicated support engineers provide proactive updates for OS version changes, dependency upgrades, and device compatibility, allowing your business to operate without disruption and maintain peak user satisfaction across all platforms.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


const faqData = [
  {
    title: "Why choose Flutter for app development?",
    description:
      "Flutter enables building fast, native-like apps for Android and iOS using a single codebase — reducing cost and development time while maintaining high performance.",
  },
  {
    title: "Can you develop enterprise-level Flutter apps?",
    description:
      "Yes, we specialize in creating scalable enterprise-grade Flutter applications integrated with APIs, CRMs, and business analytics tools.",
  },
  {
    title: "Do you design custom Flutter UI/UX?",
    description:
      "Absolutely. We use Flutter’s widget library to create stunning, user-friendly interfaces optimized for responsiveness and smooth animations.",
  },
  {
    title: "Can you migrate existing apps to Flutter?",
    description:
      "Yes, we can migrate your existing Android or iOS apps to Flutter with improved performance, maintainability, and unified code management.",
  },
  {
    title: "Do you offer post-launch maintenance?",
    description:
      "We provide long-term support, bug fixes, and regular updates to ensure your Flutter app remains optimized and up-to-date.",
  },
  {
    title: "Can you integrate APIs and third-party tools?",
    description:
      "Yes, we integrate APIs for analytics, payments, notifications, and other services to enhance your app’s functionality.",
  },
  {
    title: "Is Flutter secure for mobile apps?",
    description:
      "Yes, we implement encryption, secure authentication, and data protection standards to ensure your app’s safety and integrity.",
  },
  {
    title: "Do you assist with app deployment?",
    description:
      "Yes, we manage end-to-end deployment processes for both Play Store and App Store, ensuring full compliance and visibility.",
  },
  {
    title: "Can Flutter apps run on web and desktop?",
    description:
      "Yes, Flutter supports web and desktop platforms, allowing your app to run seamlessly across multiple devices and OS environments.",
  },
  {
    title: "What industries do you work with?",
    description:
      "We develop Flutter apps for healthcare, finance, travel, eCommerce, education, and entertainment industries worldwide.",
  },
];


  return (
    <>
      <CommonBanner
        img={app}
        title="Flutter App Development Services"
        desc="Flutter is Google’s open-source UI toolkit that helps the developers to build dynamic and feature-rich applications for both Android and iOS platforms. At Future IT Touch Pvt. Ltd., we craft industry-standard cross-platform applications to streamline your business. Our next-gen Flutter app development services ensure future-ready applications for Android and iOS devices. As an experienced mobile app development agency, we offer end-to-end Flutter development services to craft expressive, agile, and flexible applications."
      />

<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build High-Performance, Secure & Scalable Apps with{" "}
      <span className="text-indigo-600">Flutter App Development</span> 🚀
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking to build fast, responsive, and visually stunning mobile
      applications? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>,
      we specialize in creating cross-platform apps using{" "}
      <span className="font-semibold text-indigo-600">Flutter</span> — Google’s
      powerful framework for building native-quality apps for iOS and Android.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Our Flutter developers design sleek interfaces, ensure smooth
      performance, and integrate robust functionalities tailored to your
      business goals. From startups to enterprises, we deliver scalable,
      high-performing mobile solutions that drive engagement and growth.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need a custom mobile app, enterprise solution, or Play Store
      and App Store launch support, we ensure seamless performance, security,
      and a unified user experience across all devices.
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
    Future IT Touch’s High-Performance Flutter Application Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empower your business with visually stunning, high-performance, and 
    cross-platform mobile applications built using Flutter. Our expert developers 
    craft smooth, responsive, and scalable apps that deliver native-like experiences — 
    helping your brand connect seamlessly with users across Android and iOS platforms.
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
    <SiFlutter /> 
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    Flutter Android & <br />
    iOS App <br />
    <span className="">Development Approach</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    To craft seamless{" "}
    <span className="text-[#00ffe4]">
      - cross-platform apps for high-performance experiences ⚡
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
Empower Your Business With Custom Flutter App Development Services

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
title="On Flutter App Development Services"
      />
      <BusinessIdea />
    </>
  );
};

export default Flutter;
