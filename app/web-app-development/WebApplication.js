



import React from "react";


import gg from "../Assets/gg.webp";

import { 
  FaLaptopCode,      
  FaShoppingCart,    
  FaBuilding,        
  FaNetworkWired,   
  FaCode,           
} from "react-icons/fa";



import Image from "next/image";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import { FaTools, FaDatabase } from "react-icons/fa";
import {

  FaCogs,
  FaServer,
} from "react-icons/fa";

import {

  FaShippingFast,
} from "react-icons/fa";


import { 
  FaCloud, 
  FaSms, 
  FaVideo, 
  FaMapMarkedAlt, 
  FaChartLine 
} from "react-icons/fa";
import image2 from "../Assets/gif.gif";


const Ecommerce = () => {
 const features = [
    {
      title: "Seamless Third-Party API Integration",
      description:
        "Our web applications are designed to seamlessly integrate with premium third-party APIs to enhance functionality and streamline your business processes. From payment gateways to messaging services, we ensure smooth and secure connections that empower your application.",
      icon: <FaCloud />,
    },
    {
      title: "Real-Time Communication & Notifications",
      description:
        "Integrating APIs like Twilio for SMS and video or Zoom for webinars, we enable your web applications to communicate in real-time. These features improve engagement, provide instant updates, and create interactive experiences for users across devices.",
      icon: <FaSms />,
    },
    {
      title: "Video & Streaming Integration",
      description:
        "With Vimeo and Zoom API integration, your applications can host live streams, webinars, and video content efficiently. This ensures high-quality streaming, interactive sessions, and an engaging user experience without the need for complex in-house setups.",
      icon: <FaVideo />,
    },
    {
      title: "Mapping & Geolocation Services",
      description:
        "Google Maps and other location-based APIs are integrated to offer precise geolocation features. Whether it's displaying store locations, tracking deliveries, or enabling location-based services, your users get a rich and interactive mapping experience.",
      icon: <FaMapMarkedAlt />,
    },
    {
      title: "Logistics & SMS Automation",
      description:
        "From xotel SMS & Call APIs to alamove for delivery logistics, we implement systems that automate communication and operations. This ensures timely notifications, efficient order tracking, and a smooth workflow for both businesses and end-users.",
      icon: <FaShippingFast />,
    },
    {
      title: "Custom Workflows & Configurations",
      description:
        "Our developers build custom logic and workflows using APIs like nableX to suit your unique business needs. This allows your web application to handle complex processes efficiently while remaining user-friendly and scalable.",
      icon: <FaCogs />,
    },
    {
      title: "Analytics & Insights Integration",
      description:
        "By connecting analytical APIs, we enable you to track user behavior, system performance, and operational metrics. This data-driven approach helps businesses make informed decisions, optimize features, and maximize ROI through actionable insights.",
      icon: <FaChartLine />,
    },
  ];

const businessData = [
  {
    icons: <FaTools className="text-white w-8 h-8" />,
    title: "Application Enhancement",
    desc: "We provide continuous improvement for your web applications by adding new features, enhancing functionality, and keeping your software up-to-date with evolving business needs.",
  },
  {
    icons: <FaServer className="text-white w-8 h-8" />,
    title: "Hosting Migration & Support",
    desc: "Our team ensures seamless hosting migration and ongoing support, keeping your web application secure, fast, and accessible for your users at all times.",
  },
  {
    icons: <FaDatabase className="text-white w-8 h-8" />,
    title: "Database Optimization",
    desc: "We optimize your databases for performance and scalability, ensuring smooth operations, faster data retrieval, and a reliable backend for your web applications.",
  },
];


const cards = [
  {
    count: "100+",
    title: "Applications Maintained",
    desc: "We have successfully maintained over 100 web applications, ensuring optimal performance, smooth functionality, and timely updates. Each application is carefully monitored to provide seamless experiences for your users.",
      image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "10+",
    title: "Years of Expertise",
    desc: "With over 10 years of experience in web application maintenance and support, our team brings deep technical knowledge to every project. We ensure best practices, modern technologies, and effective maintenance strategies are applied.",
      image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Clients Supported Globally",
    desc: "Trusted by over 500 clients worldwide, we provide reliable maintenance and support for diverse web applications. Our experience spans multiple industries, ensuring your app stays robust and fully functional across all platforms.",
      image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Satisfaction Rate",
    desc: "Our client-centric approach has earned a 98% satisfaction rate. We focus on delivering proactive maintenance, timely updates, and responsive support, ensuring every application operates smoothly and meets client expectations.",
      image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Support",
    desc: "We provide round-the-clock support for all web applications. Our dedicated team resolves technical issues quickly, optimizes performance, and ensures your applications remain reliable and accessible at all times.",
      image: "/Assets/seerviceSlider/slide5.webp",
  },
];


 const platforms = [
  {
    icon: <FaLaptopCode className="text-white w-6 h-6" />,
    title: "Web Portal Development",
    desc: "We build user-focused web portals that combine advanced functionality with intuitive design. Tailored to reflect your brand, these portals encourage user interaction while delivering seamless performance and robust features.",
  },
  {
    icon: <FaShoppingCart className="text-white w-6 h-6" />,
    title: "Ecommerce Website Development",
    desc: "Our team creates B2B, B2C, and multi-vendor eCommerce platforms that are visually appealing, secure, and optimized for conversions. From planning to deployment, we provide comprehensive web store development services.",
  },
  {
    icon: <FaBuilding className="text-white w-6 h-6" />,
    title: "Enterprise Application Development",
    desc: "We deliver scalable and secure enterprise-grade web applications designed to support business growth. Our solutions adapt to market changes while ensuring faster time-to-market and a competitive advantage.",
  },
  {
    icon: <FaNetworkWired className="text-white w-6 h-6" />,
    title: "Progressive Web App (PWA) Development",
    desc: "We develop lightweight, secure, and engaging Progressive Web Applications that work offline, send push notifications, and perform seamlessly across multiple devices and browsers, following Google’s guidelines.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Single Page Application (SPA) Development",
    desc: "We create interactive and fast-loading single-page applications with flexible architecture. Our SPAs are optimized for performance, cross-browser responsiveness, and an immersive user experience.",
  },
  {
    icon: <FaCogs className="text-white w-6 h-6" />,
    title: "Custom Web Application Development",
    desc: "We design feature-rich, tailor-made web applications using modern frameworks and technologies to meet unique business requirements, ensuring optimal performance, scalability, and security.",
  },
];


const faqData = [
  {
    title: "What types of web applications do you develop?",
    description:
      "We specialize in web portals, B2B/B2C web applications, enterprise applications, progressive web apps, and single-page applications tailored to your business needs.",
  },
  {
    title: "Can you customize applications to my business requirements?",
    description:
      "Absolutely! Our developers provide full customization for functionality, UI/UX, and integrations, ensuring the application aligns perfectly with your workflows and objectives.",
  },
  {
    title: "Do you provide secure and scalable solutions?",
    description:
      "Yes, security and scalability are top priorities. We follow industry best practices, integrate secure coding standards, and build applications capable of handling growing traffic and data needs.",
  },
  {
    title: "Can you integrate third-party APIs?",
    description:
      "Definitely. We integrate APIs like payment gateways, SMS/video services, cloud storage, maps, and other third-party solutions to enhance the functionality of your web application.",
  },
  {
    title: "Are the applications mobile-friendly and responsive?",
    description:
      "Yes, all our web applications are designed to be fully responsive and cross-browser compatible, ensuring seamless performance across desktops, tablets, and smartphones.",
  },
  {
    title: "Do you provide maintenance and ongoing support?",
    description:
      "We offer continuous maintenance, updates, and technical support to ensure your web applications remain secure, fast, and optimized even after deployment.",
  },
];


  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={gg}
        title="WEB APPLICATION DEVELOPMENT"
        desc="Future IT Touch Pvt. Ltd. is an award-winning website development company offering custom web application development services to startups, SMBs, and large enterprises. With an aim to driving business transformation, we are building quality web applications for diverse business domains since 2005. Leveraging cutting-edge technology frameworks, APIs, and databases, we can craft futuristic, conversion-driven, and highly optimized solutions that ensure excellent user experience..



"
      />

      <TechMarquee />

     <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
      Premium Web Application Development
    </span>

    <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
      Building Powerful and Scalable Web Applications
    </h4>

    <p className="text-base md:text-lg text-gray-600">
      At{" "}
      <span className="font-semibold text-indigo-600">
        Future IT Touch Pvt. Ltd.
      </span>{" "}
      we specialize in developing robust web applications that streamline business processes, improve operational efficiency, and provide seamless user experiences across devices. Our team leverages modern frameworks and technologies to craft scalable, secure, and high-performing solutions tailored to your business needs.
    </p>

    {/* Main Description */}
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      To ensure your web application delivers maximum value, we integrate a variety of third-party APIs to enhance functionality and enable smooth workflows. From cloud storage with Amazon S3 and CloudFront, real-time communication via Twilio and Zoom, to interactive maps using Google Maps API, our integrations cover a wide range of essential services. We also support video streaming through Vimeo, logistics integration with alamove, and advanced messaging with xotel and nableX APIs. By combining these powerful services with a user-friendly interface and seamless back-end operations, we create web applications that not only meet your business goals but also provide a superior experience to your users. With over 15 years of experience, we ensure that every project is delivered with performance, scalability, and security in mind.
    </p>

    {/* CTA */}
    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
      >
        Start Your Web App Journey
      </a>
    </div>
  </div>
</div>


      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
          Trusted Web App Development Company
          </h5>
          <h4 className="font-bold text-gray-900">
          Creating Web Applications That Are Powerful & Scalable
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={image2}
              alt="eCommerce Development"
              className="w-full rounded-xl shadow-lg h-full object-cover hover:scale-105 md:min-h-[60vh] xl:h-[70vh] transition-transform duration-500"
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
  Reliable Web Application Maintenance & Support
          </h5>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
  Ensuring Your Web Applications Run Smoothly & Efficiently
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
title="Ensuring Smooth & Reliable Web Application Performance"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Our Suite of Web Application Development Services"
      />

      <FAQSection
        faqData={faqData}
        title="About eCommerce Website Development"
      />

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Ecommerce;
