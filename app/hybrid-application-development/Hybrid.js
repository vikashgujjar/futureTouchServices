import React from "react";

import Image from "next/image";
import io from "../Assets/io.webp";
import ec  from "../Assets/ios-application-development.webp";
import app from "../Assets/hhh.gif";

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
  FaLightbulb,
  FaDraftingCompass,
  FaCode,
  FaBug,
  FaCloudUploadAlt,
} from "react-icons/fa";

import {
  SiReact,
  SiFlutter,
  SiGooglecloud,
  SiSecurityscorecard,
} from "react-icons/si";
import {
  MdOutlineApi,
  MdOutlineBuildCircle,
  MdOutlineSecurity,
} from "react-icons/md";
import { RiTestTubeLine } from "react-icons/ri";

const Hybrid = () => {
const features = [
  {
    title: "Idea & Strategy",
    description:
      "Every successful app begins with a great idea and a solid strategy. We start by understanding your vision, business goals, and target audience. Our team then defines the app’s core features, competitive advantage, and monetization model to create a clear, results-driven roadmap that aligns with your long-term business objectives.",
    icon: <FaLightbulb />,
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX experts design visually stunning and user-friendly interfaces that reflect Apple’s Human Interface Guidelines. We focus on delivering seamless navigation, pixel-perfect layouts, and intuitive user journeys that enhance engagement, retention, and overall satisfaction — ensuring a delightful experience for every user.",
    icon: <FaDraftingCompass />,
  },
  {
    title: "App Development",
    description:
      "Using the latest technologies like Swift, SwiftUI, and Xcode, our developers bring your app to life with precision and performance. We follow agile methodologies to ensure flexibility and transparency at every stage. From front-end interfaces to back-end logic and APIs, we build secure, scalable, and high-performing iOS applications tailored to your business needs.",
    icon: <FaCode />,
  },
  {
    title: "Testing & QA",
    description:
      "Quality assurance is a vital part of our process. Our QA engineers perform rigorous testing, including functionality, performance, usability, and device compatibility checks. We use both manual and automated testing tools to ensure your app is free from bugs, stable under real-world conditions, and delivers a flawless experience on every iPhone and iPad model.",
    icon: <FaBug />,
  },
  {
    title: "App Deployment",
    description:
      "Once your app is tested and approved, we manage the entire App Store submission process. From preparing metadata, screenshots, and descriptions to meeting Apple’s compliance requirements, we ensure a smooth and successful launch. Our goal is to get your app live quickly and efficiently without any delays or rejections.",
    icon: <FaCloudUploadAlt />,
  },
  {
    title: "App Marketing",
    description:
      "Building a great app is just the beginning — getting users to discover it is the next challenge. Our marketing team uses proven strategies like App Store Optimization (ASO), social media campaigns, and influencer outreach to increase your app’s visibility, downloads, and engagement. We also analyze user data to improve retention and boost ROI.",
    icon: <FaChartLine />,
  },
  {
    title: "Support & Maintenance",
    description:
      "We continue to stand by your side even after your app goes live. Our maintenance services include regular updates, performance monitoring, bug fixes, and feature enhancements to keep your app optimized and secure. We ensure it remains compatible with the latest iOS versions and Apple devices, providing a consistent experience for your users.",
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
    count: "300+",
    title: "Hybrid Apps Delivered",
    desc: "We’ve successfully built and launched over 300 hybrid mobile applications for Android and iOS using React Native, Flutter, and Ionic. Each app offers native-like performance and seamless functionality across all devices.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Industry Experience",
    desc: "With over 15 years of expertise in mobile app development, Future IT Touch Pvt. Ltd. specializes in creating cost-effective and scalable hybrid applications for businesses worldwide.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Satisfied Global Clients",
    desc: "Our hybrid app solutions have empowered over 500 clients globally, from startups to enterprises. We ensure every app aligns with business objectives and provides a consistent cross-platform experience.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our commitment to innovation, transparency, and quality has earned us a 98% client satisfaction rate. We ensure your hybrid app delivers outstanding value and reliability across platforms.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support & Maintenance",
    desc: "We offer round-the-clock support and maintenance to ensure your hybrid applications remain up-to-date, secure, and high-performing — long after deployment.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


const platforms = [
  {
    icon: <SiReact className="text-white w-6 h-6" />,
    title: "React Native Development",
    desc: "We craft cross-platform apps using React Native that offer native-like performance and faster delivery.",
  },
  {
    icon: <SiFlutter className="text-white w-6 h-6" />,
    title: "Flutter App Development",
    desc: "Our Flutter experts build beautiful, high-performing apps that run smoothly on both Android and iOS.",
  },
  {
    icon: <SiGooglecloud className="text-white w-6 h-6" />,
    title: "Cloud Integration",
    desc: "We integrate apps with secure cloud platforms like Firebase, AWS, and Azure for real-time performance.",
  },
  {
    icon: <MdOutlineSecurity className="text-white w-6 h-6" />,
    title: "Security & Compliance",
    desc: "We ensure enterprise-grade app security with encryption, secure APIs, and global compliance standards.",
  },
  {
    icon: <MdOutlineApi className="text-white w-6 h-6" />,
    title: "API & Backend Integration",
    desc: "Our team builds and connects APIs for real-time data flow and scalable backend architecture.",
  },
  {
    icon: <RiTestTubeLine className="text-white w-6 h-6" />,
    title: "Testing & Maintenance",
    desc: "We perform rigorous multi-device testing and provide ongoing updates to keep your app flawless.",
  },
];
const faqData = [
  {
    title: "What is hybrid app development?",
    description:
      "Hybrid app development allows you to build mobile apps using a single codebase that works on both Android and iOS platforms. It combines the benefits of web and native technologies, reducing cost and time-to-market.",
  },
  {
    title: "Which technologies do you use for hybrid app development?",
    description:
      "We use leading frameworks like React Native, Flutter, and Ionic, along with cloud services and secure APIs to build high-performing hybrid applications that feel and function like native apps.",
  },
  {
    title: "Are hybrid apps as good as native apps?",
    description:
      "Yes! With modern frameworks like React Native and Flutter, hybrid apps deliver near-native performance, smooth animations, and an exceptional user experience across devices.",
  },
  {
    title: "Can you convert my existing app into a hybrid app?",
    description:
      "Absolutely! Our experts can migrate or rebuild your existing mobile app into a hybrid solution, improving cross-platform compatibility and reducing maintenance costs.",
  },
  {
    title: "Will my hybrid app work across Android and iOS?",
    description:
      "Yes, hybrid apps are designed to work seamlessly on both platforms, ensuring consistent UI/UX, performance, and feature availability across all devices.",
  },
  {
    title: "Do you provide post-launch support for hybrid apps?",
    description:
      "Yes, we offer continuous maintenance, updates, and technical support to keep your hybrid app optimized, secure, and compatible with the latest OS versions.",
  },
];



  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={app}
        title="HYBRID APP DEVELOPMENT SERVICES"
        desc="Need an app for your business that can run seamlessly across Android and iPhone yet limited by budget constraints? A Hybrid App is the answer. It is a mixture of Native and Web Apps, giving you a cross-platform experience along with scalable features in a highly customized Mobile Application. Few most popular technologies for developing hybrid apps include Ionic, a PhoneGap / Cordova based HTML5 framework and Flutter, Google’s UI toolkit for building beautiful, natively compiled apps. Future IT Touch Pvt. Ltd. is an certified mobile app development agency with substantial experience in cross-platform app development. Our team of expert developers specialize in providing Hybrid App Development Services as per your business requirements."
      />

      <TechMarquee />
<div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
      Trusted Hybrid Application Development
    </span>

    <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
      Building Powerful Cross-Platform Mobile Apps
    </h4>

    <p className="text-base md:text-lg text-gray-600">
      At{" "}
      <span className="font-semibold text-indigo-600">
        Future IT Touch Pvt. Ltd.
      </span>{" "}
      we specialize in creating hybrid mobile applications that deliver native-like performance,
      consistent UI, and seamless user experiences across Android, iOS, and the web — all from a single codebase.
    </p>

    {/* Main Description */}
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Our hybrid app development services help businesses save time and cost while reaching a wider audience.
      Using the latest frameworks like React Native, Flutter, and Ionic, we build fast, reliable, and scalable apps 
      that work smoothly on multiple platforms.
      <br /> <br />
      <span className="font-semibold text-gray-900">Our Expertise Includes:</span>{" "}
      Cross-platform UI/UX design, API integration, native performance optimization,
      secure data handling, real-time syncing, and app store deployment.
      <br /> <br />
      <span className="font-semibold text-gray-900">
        Why Choose Us:
      </span>{" "}
      Faster time-to-market, cost-effective solutions, reusable code architecture,
      consistent user experience, and full post-launch support.
      <br /> <br />
      With over 15 years of experience, we’ve helped startups and enterprises bring their ideas to life 
      using robust hybrid technologies. Partner with{" "}
      <span className="font-semibold text-indigo-600">
        our hybrid app development experts
      </span>{" "}
      to build high-quality, cross-platform applications that perform flawlessly across all devices.
    </p>

    {/* CTA */}
    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
      >
        Start Your Hybrid App Project
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
    Trusted iOS app developers in India, delivering seamless and innovative apps.
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
      Leading Hybrid App Development Company in India
  </h5>
  <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
      Build Powerful Apps That Work on Every Platform
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
        <h5 className="text-xl md:text-2xl font-bold mb-2">{elm.title}</h5>
        <p className="text-gray-700 text-sm md:text-base">{elm.desc}</p>
      </div>
    ))}
  </div>
      </div>

<CustomSlider
  cards={cards}
  title="Delivering Powerful Hybrid App Experiences with"
/>

<WhyFutureITTouch
  platforms={platforms}
  title="Hybrid App Development Technologies We Use"
/>

<FAQSection
  faqData={faqData}
  title="About Hybrid Application Development"
/>


      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Hybrid;
