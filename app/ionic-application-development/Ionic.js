import React from "react";

import app from "../Assets/ionic.webp";

import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import { FaLock, FaRocket } from "react-icons/fa";

import {  FaTools } from "react-icons/fa";
import { SiIonic } from "react-icons/si";

import { FaCogs } from "react-icons/fa";


import {
  FaApple,
  FaPaintBrush,
  FaCloud,
  FaBug,
  FaMobileAlt,
  FaLaptopCode
} from "react-icons/fa";


const Ionic = () => {
const technolgyData = [
  {
    title: "Custom Ionic App Development",
    icon: <FaApple className="text-[#306998] text-4xl" />,
    list: [
      "Developing high-performance, cross-platform mobile applications using Ionic and Angular or React frameworks.",
      "Creating secure, responsive, and user-friendly apps for Android, iOS, and web platforms using a single codebase.",
      "Designing scalable architectures optimized for fast performance and seamless updates.",
      "Ensuring native-like performance through optimized UI components and hybrid integrations.",
    ],
  },
  {
    title: "Cross-Platform App UI/UX Design",
    icon: <FaPaintBrush className="text-[#306998] text-4xl" />,
    list: [
      "Designing clean, interactive, and adaptive interfaces using Ionic’s UI components.",
      "Creating consistent and intuitive designs that adapt smoothly across multiple screen sizes.",
      "Implementing animations, transitions, and touch gestures to enhance user engagement.",
      "Following modern design principles with Material Design and iOS Human Interface Guidelines.",
    ],
  },
  {
    title: "API & Backend Integration",
    icon: <FaCloud className="text-[#306998] text-4xl" />,
    list: [
      "Integrating Ionic apps with secure and scalable backend systems using RESTful or GraphQL APIs.",
      "Implementing real-time communication through sockets, push notifications, and live updates.",
      "Connecting with cloud services like Firebase, AWS, and third-party APIs for extended functionality.",
      "Ensuring data privacy and security through encryption and authentication protocols.",
    ],
  },
  {
    title: "Ionic App Testing & Quality Assurance",
    icon: <FaBug className="text-[#306998] text-4xl" />,
    list: [
      "Conducting comprehensive unit, integration, and end-to-end testing using modern testing frameworks.",
      "Ensuring app reliability through continuous testing and automated CI/CD workflows.",
      "Performing cross-platform testing to guarantee smooth performance on Android, iOS, and web browsers.",
      "Delivering optimized builds that meet performance and UX benchmarks.",
    ],
  },
  {
    title: "App Deployment & Optimization",
    icon: <FaRocket className="text-[#306998] text-4xl" />,
    list: [
      "Managing full deployment processes for Google Play Store, Apple App Store, and web environments.",
      "Optimizing app builds for faster load times, reduced bundle sizes, and improved SEO.",
      "Implementing in-depth analytics and monitoring tools for performance tracking.",
      "Ensuring compliance with app store guidelines and latest OS versions.",
    ],
  },
  {
    title: "Maintenance & Post-Launch Support",
    icon: <FaTools className="text-[#306998] text-4xl" />,
    list: [
      "Providing continuous updates, feature upgrades, and bug fixes post-deployment.",
      "Monitoring app performance with real-time analytics and crash reporting systems.",
      "Improving app responsiveness and speed based on user feedback and analytics.",
      "Delivering 24/7 technical support and ongoing version compatibility updates.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis & Planning",
    description:
      "We begin by understanding your business needs and defining a custom strategy for Ionic app development that aligns with your goals.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "Wireframing & UI/UX Design",
    description:
      "Our designers build interactive prototypes and layouts using Ionic’s powerful UI toolkit for a smooth user journey across devices.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Ionic App Development",
    description:
      "Our developers use Ionic with Angular, React, or Vue to build fast, scalable hybrid apps that deliver a near-native experience.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend & API Integration",
    description:
      "We integrate secure APIs and cloud backends to enable real-time synchronization, data management, and third-party integrations.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Our QA specialists rigorously test every feature to ensure seamless performance, responsiveness, and cross-platform consistency.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "App Store Deployment",
    description:
      "We handle the complete deployment process for both Play Store and App Store while ensuring compliance with all requirements.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Post-Launch Optimization",
    description:
      "After launch, we provide ongoing monitoring, analytics, and updates to enhance user engagement and maintain performance.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaMobileAlt className="text-[#306998]" />,
    title: "Hybrid Cross-Platform Development",
    desc: "We create high-performing Ionic apps that run efficiently across Android, iOS, and web platforms from a single codebase.",
  },
  {
    icon: <FaLaptopCode className="text-[#306998]" />,
    title: "Responsive UI Components",
    desc: "We use Ionic’s pre-built components to design elegant, fast-loading interfaces that adapt flawlessly to any device.",
  },
  {
    icon: <FaCogs className="text-[#306998]" />,
    title: "Custom Plugin & Feature Development",
    desc: "We integrate native device features like GPS, camera, and notifications through custom Cordova or Capacitor plugins.",
  },
  {
    icon: <FaLock className="text-[#306998]" />,
    title: "Advanced Security Solutions",
    desc: "We implement secure APIs, authentication protocols, and data encryption to protect your app and users’ data.",
  },
  {
    icon: <FaRocket className="text-[#306998]" />,
    title: "Performance & Store Optimization",
    desc: "We optimize app performance and visibility through effective App Store Optimization (ASO) strategies.",
  },
  {
    icon: <FaTools className="text-[#306998]" />,
    title: "Continuous Maintenance & Support",
    desc: "We offer regular updates, bug fixes, and feature improvements to ensure your Ionic app stays ahead of the curve.",
  },
];

const cards = [
  {
    count: "200+",
    title: "Ionic Apps Delivered",
    desc: "We’ve successfully developed and deployed over 200 Ionic applications across industries like finance, healthcare, logistics, and retail. Our Ionic apps are known for their hybrid flexibility, native-like performance, and visually stunning interfaces. Each project is tailored to meet business goals while ensuring scalability, security, and long-term reliability across all platforms.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "9+",
    title: "Years of Hybrid Development Expertise",
    desc: "With over 9 years of experience in hybrid app development, our team excels in Ionic, Angular, and Capacitor-based solutions. We specialize in building scalable apps that deliver native performance using shared codebases. From startups to enterprises, we provide end-to-end solutions that combine innovation with strong technical execution.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "250+",
    title: "Satisfied Global Clients",
    desc: "Our growing global clientele of 250+ businesses trusts us for building reliable and user-centric Ionic applications. From MVPs for emerging brands to complex enterprise platforms, we deliver measurable value through optimized performance, clean architecture, and engaging design.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Deployment Success Rate",
    desc: "Our structured development and testing process ensures a 99% deployment success rate across all app stores. We validate performance, optimize app bundles, and ensure full compliance with Android and iOS guidelines for a smooth go-live experience.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Technical Support",
    desc: "We offer 24/7 technical support to ensure your Ionic apps perform flawlessly post-deployment. From monitoring and bug fixing to implementing new updates and compatibility patches, our team ensures your app remains secure, stable, and up-to-date.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "Why choose Ionic for app development?",
    description:
      "Ionic enables building cross-platform apps using a single codebase, providing native-like performance and faster time to market.",
  },
  {
    title: "Can you develop enterprise-grade Ionic apps?",
    description:
      "Yes, we develop scalable Ionic applications that integrate with enterprise systems, CRMs, and third-party APIs.",
  },
  {
    title: "Do you design custom UI/UX for Ionic apps?",
    description:
      "Absolutely. We design responsive, visually appealing, and intuitive interfaces using Ionic’s component library.",
  },
  {
    title: "Can you migrate existing apps to Ionic?",
    description:
      "Yes, we can migrate your native or hybrid applications to Ionic for better performance, scalability, and maintainability.",
  },
  {
    title: "Do you offer post-launch support?",
    description:
      "We provide long-term maintenance, updates, and feature enhancements to keep your Ionic app optimized and secure.",
  },
  {
    title: "Can Ionic apps integrate with native features?",
    description:
      "Yes, Ionic allows seamless integration with device capabilities like GPS, camera, and push notifications via Capacitor plugins.",
  },
  {
    title: "Is Ionic secure for business applications?",
    description:
      "Yes, we follow advanced encryption, secure storage, and authentication methods to protect user data and app integrity.",
  },
  {
    title: "Do you handle app store deployment?",
    description:
      "Yes, we manage deployment for both Android and iOS platforms, ensuring compliance and store readiness.",
  },
  {
    title: "Can Ionic apps run on web and desktop?",
    description:
      "Yes, Ionic supports PWAs and desktop builds, allowing your app to run across multiple devices and operating systems.",
  },
  {
    title: "Which industries use Ionic apps?",
    description:
      "We build Ionic apps for healthcare, travel, fintech, retail, logistics, and educational industries worldwide.",
  },
];


  return (
    <>
      <CommonBanner
        img={app}
        title="IONIC DEVELOPMENT SERVICES"
        desc="Build amazing mobile apps quickly at low costs with our ionic development services to give your business the edge. Ionic is an HTML5 mobile app development framework used to build hybrid mobile apps. We are a leading ionic mobile app development company in India delivering the best in class services in building hybrid mobile apps using this framework.Get feature rich and impressive apps easily for all major platforms. App development through the Ionic framework is quicker, changes can be implemented faster, all at a much lower price point. Hybrid app development is only going to grow from here on in. ."
      />

<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Fast, Secure & Scalable Apps with{" "}
      <span className="text-indigo-600">Ionic App Development</span> ⚡
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Want to launch a high-performing app that runs seamlessly across Android,
      iOS, and the web? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>,
      we specialize in building cross-platform applications using{" "}
      <span className="font-semibold text-indigo-600">Ionic</span> — a powerful
      hybrid framework for delivering native-like experiences with a single
      codebase.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Our Ionic developers craft modern, responsive, and feature-rich apps with
      smooth animations, secure integrations, and clean architecture tailored to
      your business needs. From startups to global enterprises, we help you
      achieve faster development cycles and reduced costs without compromising
      on quality.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need a custom hybrid app, enterprise-grade solution, or
      end-to-end deployment on the App Store and Play Store, we ensure flawless
      performance, strong security, and a consistent user experience across all
      platforms.
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
    Future IT Touch’s Cutting-Edge Ionic Application Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Transform your business with robust, feature-rich, and cross-platform mobile applications built using Ionic. 
    Our skilled developers create fast, elegant, and scalable apps that deliver a native-like experience — 
    empowering your brand to engage users effortlessly across Android, iOS, and the web from a single codebase.
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
      <SiIonic /> 
    </h6>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
      Ionic Android & <br />
      iOS App <br />
      <span className="">Development Approach</span>
    </h2>
    <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
      To build powerful{" "}
      <span className="text-[#00ffe4]">
        - hybrid apps with native-like performance and flexibility ⚡
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
Empower Your Business With Custom Ionic App Development Services

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
title="On Ionic App Development Services"
      />
      <BusinessIdea />
    </>
  );
};

export default Ionic;
