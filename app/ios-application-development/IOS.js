import React from "react";

import Image from "next/image";
import io from "../Assets/io.webp";
import ec  from "../Assets/iii.gif";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import image1 from "../Assets/SIT.webp";
import { FaShoppingCart, FaPaintBrush, FaClock, FaUsers } from "react-icons/fa";
import {

  FaCogs,
} from "react-icons/fa";

import {
  FaApple,
  FaSwift,
  FaCloud,
  FaLock,
} from "react-icons/fa";

import {

  FaChartLine,
} from "react-icons/fa";

import {
  FaMobileAlt,
  FaPalette,
 
  FaTools,
} from "react-icons/fa";

import {
  FaBriefcase,
  FaBullhorn,
} from "react-icons/fa";

const IOS = () => {
const features = [
  {
    title: "Expertise in iOS Development",
    description:
      "iPhone app development is our core strength. We create high-performing, scalable, and feature-rich iOS applications that deliver seamless user experiences across iPhones and iPads, following Apple’s best development standards.",
    icon: <FaApple />,
  },
  {
    title: "Innovative App Designs",
    description:
      "Our UI/UX designers craft visually appealing and intuitive app interfaces that follow Apple’s Human Interface Guidelines. We ensure every design enhances engagement and leaves a lasting impression on users.",
    icon: <FaPalette />,
  },
  {
    title: "On-Time Project Delivery",
    description:
      "We follow agile methodologies to ensure every iPhone app project is delivered on schedule. Our efficient planning and execution guarantee timely launches without compromising on quality or performance.",
    icon: <FaClock />,
  },
  {
    title: "Dedicated iOS Development Team",
    description:
      "Our experienced iOS developers, designers, and QA engineers collaborate to deliver custom mobile apps tailored to your business goals. From concept to launch, we manage every stage with precision and care.",
    icon: <FaUsers />,
  },
  {
    title: "Proven Industry Experience",
    description:
      "With 15+ years in app development, we’ve built iPhone apps for startups, enterprises, and global brands across industries like eCommerce, healthcare, travel, and fintech—ensuring innovative and scalable solutions.",
    icon: <FaBriefcase />,
  },
  {
    title: "App Marketing & Optimization",
    description:
      "Beyond development, we help you grow your app with App Store Optimization (ASO), mobile marketing, and user engagement strategies that maximize downloads and ROI.",
    icon: <FaBullhorn />,
  },
  {
    title: "Continuous Support & Maintenance",
    description:
      "Our responsibility doesn’t end with app launch. We provide ongoing maintenance, updates, and support to ensure your iOS app stays secure, compatible, and high-performing across all Apple devices.",
    icon: <FaTools />,
  },
];


const businessData = [
  {
    icons: <FaMobileAlt className="text-white w-8 h-8" />,
    title: "Specialized in iOS Development",
    desc: "We focus on building robust, high-performing iOS applications tailored for iPhone, iPad, and Apple Watch. Our apps deliver seamless functionality and exceptional user experiences.",
  },
  {
    icons: <FaPaintBrush className="text-white w-8 h-8" />,
    title: "Innovative & Intuitive Design",
    desc: "Our design experts create visually stunning and intuitive app interfaces that align perfectly with Apple’s Human Interface Guidelines, ensuring elegant and user-friendly experiences.",
  },
  {
    icons: <FaClock className="text-white w-8 h-8" />,
    title: "Timely Project Delivery",
    desc: "As a trusted iOS app development company, we prioritize meeting deadlines while maintaining top-tier quality, performance, and reliability in every project we deliver.",
  },
];
const cards = [
  {
    count: "250+",
    title: "iOS Apps Delivered",
    desc: "We’ve developed and launched over 250 iOS applications across diverse industries. Each app is crafted to deliver superior performance, engaging design, and seamless user experience for iPhone and iPad users.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Experience",
    desc: "With over 15 years of mobile app development expertise, Future IT Touch Pvt. Ltd. has mastered the art of building scalable, secure, and high-quality iOS applications using Swift, SwiftUI, and modern frameworks.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "We’ve successfully delivered iOS apps for more than 500 global clients. From startups to enterprises, our team ensures each app meets unique business goals and Apple’s design and security standards.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our client-first approach and commitment to quality have earned us a 98% satisfaction rate. We focus on transparency, communication, and creating apps that exceed expectations.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support",
    desc: "Our dedicated support team ensures your iOS application runs flawlessly post-launch. From updates to troubleshooting, we’re available 24/7 to maintain performance and reliability.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const platforms = [
  {
    icon: <FaSwift className="text-white w-6 h-6" />,
    title: "Swift & SwiftUI Development",
    desc: "We specialize in building modern iOS apps using Swift and SwiftUI, ensuring high performance, clean architecture, and a smooth user experience optimized for Apple devices.",
  },
  {
    icon: <FaApple className="text-white w-6 h-6" />,
    title: "Native iOS App Development",
    desc: "We build robust native applications for iPhone, iPad, and Apple Watch using Xcode and Apple’s latest frameworks, ensuring seamless performance and App Store compliance.",
  },
  {
    icon: <FaCloud className="text-white w-6 h-6" />,
    title: "Cloud Integration",
    desc: "Our team integrates apps with iCloud, Firebase, and AWS to enable secure data storage, real-time synchronization, and smooth performance across devices.",
  },
  {
    icon: <FaLock className="text-white w-6 h-6" />,
    title: "Security & Compliance",
    desc: "We implement strong data encryption, secure authentication, and GDPR compliance, ensuring your iOS applications meet the highest security and privacy standards.",
  },
  {
    icon: <FaCogs className="text-white w-6 h-6" />,
    title: "API & Backend Development",
    desc: "We create powerful RESTful and GraphQL APIs and integrate them seamlessly with your iOS apps, enabling real-time communication and efficient data flow.",
  },
  {
    icon: <FaTools className="text-white w-6 h-6" />,
    title: "App Testing & Maintenance",
    desc: "We conduct rigorous app testing using TestFlight and automated tools. Our ongoing maintenance ensures consistent app performance, updates, and feature enhancements.",
  },
];
 const faqData = [
  {
    title: "What technologies do you use for iOS app development?",
    description:
      "We primarily use Swift, SwiftUI, and Objective-C, along with Xcode, UIKit, CoreData, and various Apple SDKs to build modern, high-performing iOS applications.",
  },
  {
    title: "Can you help with publishing my app on the App Store?",
    description:
      "Yes, we handle the entire App Store submission process, including compliance checks, app signing, and deployment support to ensure a smooth launch.",
  },
  {
    title: "Do you provide custom iOS app development?",
    description:
      "Absolutely! We develop custom iPhone and iPad applications tailored to your unique business needs, ensuring optimal performance and a great user experience.",
  },
  {
    title: "How do you ensure app security?",
    description:
      "We follow Apple’s best security practices, implementing data encryption, secure authentication, and regular security audits to safeguard user data and app integrity.",
  },
  {
    title: "Will my iOS app work on all Apple devices?",
    description:
      "Yes, we build responsive iOS apps compatible across iPhone, iPad, and Apple Watch devices, ensuring consistent functionality and design on all screen sizes.",
  },
  {
    title: "Do you provide post-launch support?",
    description:
      "Yes, we offer continuous maintenance, updates, and support to keep your iOS app up-to-date with the latest iOS versions and new feature integrations.",
  },
];


  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={io}
        title="IOS APP DEVELOPMENT SERVICES"
        desc="Future IT Touch Pvt. Ltd. provides cutting-edge mobile app development services to turn your dreams of a business app into reality. We have a proficient team for custom iOS app development, well versed in the latest frameworks, Objective C and Swift. We give our best efforts into creating highly interactive, innovative and scalable apps that meet your business objectives. By far, we have developed about 150+ mobile apps for a worldwide client base - from start-ups to SMBs and large enterprises. Engage our iOS app development services to craft dynamic, feature-rich, and industry-standard mobile applications that seamlessly run on the latest versions of iOS.

"
      />

      <TechMarquee />

 <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
      Trusted iOS Application Development
    </span>

    <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
      Crafting High-Performance iOS Applications
    </h4>

    <p className="text-base md:text-lg text-gray-600">
      At{" "}
      <span className="font-semibold text-indigo-600">
        Future IT Touch Pvt. Ltd.
      </span>{" "}
      we specialize in developing iOS applications that combine elegant design,
      seamless performance, and intuitive functionality — helping businesses
      connect better with their users across iPhone, iPad, and Apple Watch.
    </p>

    {/* Main Description */}
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Our iOS app development process focuses on building secure, scalable, and
      feature-rich mobile experiences that meet Apple’s highest standards.
      Whether you need a customer-facing app, enterprise solution, or startup
      MVP, we deliver results that stand out on the App Store.
      <br /> <br />
      <span className="font-semibold text-gray-900">Our Expertise Includes:</span>{" "}
      UI/UX design tailored for iOS, Swift and SwiftUI development, API
      integration, performance optimization, push notifications, and advanced
      app analytics. <br />
      <br />
      <span className="font-semibold text-gray-900">
        Why Choose Us:
      </span>{" "}
      End-to-end app development, strict security protocols, seamless backend
      integration, App Store deployment support, and post-launch maintenance.
      <br />
      <br />
      With over 15 years of experience, we’ve helped global brands and startups
      transform ideas into successful iOS apps. Partner with{" "}
      <span className="font-semibold text-indigo-600">
        our iOS development experts
      </span>{" "}
      to turn your vision into a premium mobile experience.
    </p>

    {/* CTA */}
    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
      >
        Start Your iOS App Project
      </a>
    </div>
  </div>
</div>

      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
<div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
  <h5 className="font-bold text-[#7C4DDA]">
    Our iPhone App Development Process
  </h5>
  <h4 className="font-bold text-gray-900">
  We’re a trusted iOS app development company in India, building seamless and innovative apps.

  </h4>
</div>


        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={ec}
              alt="ios-application-development"
              className="w-full rounded-xl shadow-lg h-full object-cover hover:scale-105 md:h-[70vh] transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 gap-12 lg:gap-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-4 p-6 border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex -mt-14 text-[#7C4DDA] text-3xl bg-white justify-center items-center p-4 rounded w-20 h-20 border border-gray-400">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-sm lg:text-base text-gray-700 text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TurnYourBusiness */}

      <div className="business-idea mx-5 py-8 md:py-12 xl:py-16 my-8 lg:my-16 px-5 md:px-12 xl:px-28 bg-gradient-to-r rounded-3xl">
       <div className="text-center">
  <h5 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
    Leading iOS App Development Company in India
  </h5>
  <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
    Partner with Us for Growth & Innovation
  </h4>
</div>

        <div className="mt-10 grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {businessData.map((elm) => (
            <div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-start text-start"
              key={elm.title}
            >
              <div className="bg-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {elm.icons}
              </div>
              <h5 className="text-xl md:text-2xl font-bold mb-2">
                {elm.title}
              </h5>
              <p className="text-gray-700 text-sm md:text-base">{elm.desc}</p>
            </div>
          ))}
        </div>
      </div>

<CustomSlider
  cards={cards}
  title="Delivering Innovative iOS App Experiences with"
/>

<WhyFutureITTouch
  platforms={platforms}
  title="iOS App Development Technologies We Use"
/>

<FAQSection
  faqData={faqData}
  title="About iOS Application Development"
/>

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default IOS;
