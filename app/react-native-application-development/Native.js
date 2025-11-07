import React from "react";

import cwd from "../Assets/swift.webp";
import gm from "../Assets/reactnative.webp";

import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import { FaLock, FaRocket } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

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


const Native = () => {
const technolgyData = [
  {
    title: "Custom React Native App Development",
    icon: <FaApple className="text-[#306998] text-4xl" />,
    list: [
      "Building high-performance, cross-platform mobile apps using React Native and modern frameworks.",
      "Developing secure, fast, and responsive applications for both iOS and Android platforms.",
      "Designing custom app architectures with reusable components and modular structure.",
      "Ensuring top-notch performance with optimized JavaScript code and native integrations.",
    ],
  },
  {
    title: "UI/UX Design for React Native Apps",
    icon: <FaPaintBrush className="text-[#306998] text-4xl" />,
    list: [
      "Designing intuitive, visually appealing interfaces for seamless cross-platform experiences.",
      "Creating consistent, responsive, and accessible layouts for all screen sizes and orientations.",
      "Incorporating smooth transitions, gestures, and animations for interactive user journeys.",
      "Delivering pixel-perfect designs with performance-optimized React Native components.",
    ],
  },
  {
    title: "API & Backend Integration",
    icon: <FaCloud className="text-[#306998] text-4xl" />,
    list: [
      "Connecting React Native apps with powerful backends via RESTful or GraphQL APIs.",
      "Enabling real-time data updates, push notifications, and analytics integrations.",
      "Integrating third-party services like Firebase, Stripe, Google Maps, and social logins.",
      "Ensuring secure data transfer with token-based authentication and encryption methods.",
    ],
  },
  {
    title: "Testing & Quality Assurance",
    icon: <FaBug className="text-[#306998] text-4xl" />,
    list: [
      "Conducting unit, integration, and UI testing for consistent multi-platform reliability.",
      "Using Jest, Detox, and CI/CD pipelines to streamline testing and deployment workflows.",
      "Maintaining clean code standards and smooth performance across all mobile devices.",
      "Performing real-device testing for optimal stability and usability on Android and iOS.",
    ],
  },
  {
    title: "App Deployment & Optimization",
    icon: <FaRocket className="text-[#306998] text-4xl" />,
    list: [
      "Managing end-to-end deployment on App Store and Google Play platforms.",
      "Improving visibility through App Store Optimization (ASO) and analytics setup.",
      "Implementing tracking tools for monitoring performance and crash reports.",
      "Ensuring compliance with Apple and Google’s latest release requirements.",
    ],
  },
  {
    title: "Maintenance & Ongoing Support",
    icon: <FaTools className="text-[#306998] text-4xl" />,
    list: [
      "Providing continuous updates, version upgrades, and performance improvements.",
      "Monitoring app analytics, performance metrics, and crash data in real-time.",
      "Optimizing speed, resource usage, and security for smooth cross-platform operation.",
      "Delivering reliable maintenance, bug fixes, and 24/7 technical assistance post-launch.",
    ],
  },
];

const steps = [
  {
    title: "Project Discovery & Planning",
    description:
      "We start by analyzing your goals, target audience, and key features to plan a scalable and effective React Native app strategy for your business.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "Wireframing & UI/UX Design",
    description:
      "Our design experts create user-friendly wireframes and prototypes for engaging, visually consistent experiences across Android and iOS devices.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "React Native App Development",
    description:
      "We build high-quality React Native applications using reusable components and optimized JavaScript code for speed and maintainability.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "API & Database Integration",
    description:
      "Our team integrates your app with robust APIs and databases for real-time data exchange, authentication, and secure connectivity.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We perform end-to-end testing to ensure your app runs seamlessly on all platforms with zero crashes and high performance.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "App Store & Play Store Deployment",
    description:
      "We handle the publishing process on both stores, ensuring compliance, visibility, and optimized metadata for maximum reach.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Post-Launch Monitoring",
    description:
      "After release, we monitor app stability, analytics, and user engagement to deliver updates and new feature improvements.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaMobileAlt className="text-[#306998]" />,
    title: "Cross-Platform App Development",
    desc: "We deliver robust and scalable React Native applications that work flawlessly across iOS and Android with native-like performance.",
  },
  {
    icon: <FaLaptopCode className="text-[#306998]" />,
    title: "Reusable Component Architecture",
    desc: "We craft efficient, maintainable UIs using reusable React components for faster development and consistent user experience.",
  },
  {
    icon: <FaCogs className="text-[#306998]" />,
    title: "Custom App Features",
    desc: "We integrate advanced features such as geolocation, push notifications, in-app chat, and third-party APIs to enhance functionality.",
  },
  {
    icon: <FaLock className="text-[#306998]" />,
    title: "Enhanced Security",
    desc: "We apply encryption, secure storage, and authentication mechanisms to safeguard user data and ensure compliance with standards.",
  },
  {
    icon: <FaRocket className="text-[#306998]" />,
    title: "App Store Optimization",
    desc: "We optimize app listings, performance, and analytics to increase your app’s ranking, engagement, and organic downloads.",
  },
  {
    icon: <FaTools className="text-[#306998]" />,
    title: "Continuous Maintenance & Support",
    desc: "We offer long-term support with updates, OS compatibility fixes, and enhancements to keep your app running flawlessly.",
  },
];

const cards = [
  {
    count: "200+",
    title: "React Native Apps Delivered",
    desc: "We’ve successfully built and launched over 200 React Native applications for industries such as healthcare, eCommerce, travel, and finance. Each app is crafted for speed, seamless navigation, and a consistent cross-platform user experience.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "7+",
    title: "Years of React Native Expertise",
    desc: "With 7+ years of React Native development experience, our team specializes in delivering efficient, reliable, and scalable mobile apps using React Native and modern libraries like Redux and Expo.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "250+",
    title: "Global Clients Served",
    desc: "We’ve partnered with over 250 clients globally, delivering customized React Native solutions that empower startups and enterprises to achieve their digital goals.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Deployment Success Rate",
    desc: "We maintain a 98% successful publishing rate by following app store guidelines and rigorous pre-launch testing to ensure stability and compliance across platforms.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Technical Support",
    desc: "Our React Native experts offer 24/7 technical support, ensuring your mobile app remains updated, secure, and compatible with all latest OS versions and devices.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "Why choose React Native for app development?",
    description:
      "React Native allows building cross-platform mobile apps using a single codebase, ensuring faster delivery and native-like performance on both iOS and Android.",
  },
  {
    title: "Can you build enterprise-grade React Native apps?",
    description:
      "Yes, we specialize in building secure, scalable React Native apps with backend integrations for CRMs, APIs, and enterprise systems.",
  },
  {
    title: "Do you create custom UI designs for React Native?",
    description:
      "Absolutely. We design smooth, interactive, and modern UI layouts tailored to your brand for an excellent user experience on all platforms.",
  },
  {
    title: "Can you migrate an existing native app to React Native?",
    description:
      "Yes, our developers can migrate your existing Android or iOS apps to React Native for improved maintainability and faster updates.",
  },
  {
    title: "Do you provide post-launch support?",
    description:
      "We offer continuous updates, maintenance, and optimization to ensure your React Native app performs efficiently post-deployment.",
  },
  {
    title: "Can you integrate APIs in React Native apps?",
    description:
      "Yes, we integrate third-party APIs, analytics, payment gateways, and cloud services for enhanced functionality and real-time data sync.",
  },
  {
    title: "How secure are React Native apps?",
    description:
      "We follow best security practices like data encryption, tokenization, and secure storage to keep your React Native app data protected.",
  },
  {
    title: "Do you handle app store publishing?",
    description:
      "Yes, we take care of the complete submission process for both Google Play and Apple App Store, ensuring compliance and visibility.",
  },
  {
    title: "Can you develop tablet or wearable apps?",
    description:
      "Yes, we build React Native apps optimized for tablets, wearables, and other smart devices to maximize reach and engagement.",
  },
  {
    title: "Which industries do you serve?",
    description:
      "We serve healthcare, fintech, travel, eCommerce, education, and entertainment industries with tailored React Native solutions.",
  },
];



  return (
    <>
      <CommonBanner
        img={gm}
        title="React Native App Development"
        desc="React Native is a JavaScript framework for creating natively rendering mobile applications for iOS and Android, that is based on React, Facebook’s JavaScript library for building user interfaces. React Native app is completely focused on mobile platforms to embed the real look and feel of the mobile app with its native functionality. It enables web developers to craft applications that really feel Native. React Native “bridge” invokes the native rendering APIs based on respective platforms. React Native also exposes JavaScript interfaces for platform APIs, so React Native apps can access platform features like the phone camera, or the user’s location."
      />
<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Fast, Scalable & Cross-Platform Mobile Apps with{" "}
      <span className="text-indigo-600">React Native Development</span> 🚀
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Want to create a high-performing mobile app for both iOS and Android? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in building stunning cross-platform mobile applications using{" "}
      <span className="font-semibold text-indigo-600">React Native</span> — a
      powerful framework by Meta for developing native-quality apps with a
      single codebase.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Our React Native developers focus on delivering lightning-fast
      performance, smooth animations, and a native-like user experience.
      Whether you’re a startup or an enterprise, we craft mobile solutions that
      blend speed, functionality, and design — helping you reach users across
      platforms seamlessly.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From MVP development to full-scale enterprise apps, we ensure efficient
      code, real-time updates, and strong backend integration — so your app
      performs flawlessly on both iOS and Android devices.
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
    Future IT Touch’s Expert React Native App Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Transform your business with powerful{" "}
    <span className="font-semibold text-indigo-600">React Native</span> app
    development solutions that deliver high performance, native-quality
    experiences, and seamless cross-platform functionality. Our expert
    developers build visually stunning, fast, and scalable mobile applications
    — helping you reach users on both iOS and Android with a single, efficient
    codebase.
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
    <FaReact /> 
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    React Native & <br />
    Cross-Platform App <br />
    <span className="">Development Approach</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    To craft seamless{" "}
    <span className="text-[#00ffe4]">
      - native-like mobile apps for high-performance innovation ⚡
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
Empower Your Business With Custom React Native App Development Services
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
title="On React Native App Development Services"
      />
      <BusinessIdea />
    </>
  );
};

export default Native;
