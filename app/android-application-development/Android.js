import React from "react";

import Image from "next/image";
import cwd from "../Assets/cwd.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import app from "../Assets/app.webp";
import ec from "../Assets/and.gif";
import { FaLightbulb, FaMobileAlt, FaSyncAlt } from "react-icons/fa";

import {
  FaPalette,
  FaCogs,
  FaGooglePlay,
  FaCheckCircle,
  FaLifeRing,
} from "react-icons/fa";

import {
  FaProjectDiagram,
  FaMapMarkerAlt,
  FaBell,
  FaShareAlt,
  FaCreditCard,
  FaBluetooth,
} from "react-icons/fa";

const Android = () => {
  const features = [
    {
      title: "Android Architecture Pattern",
      description:
        "We follow the MVVM (Model-View-ViewModel) architecture to ensure clean, maintainable, and scalable code. The Model manages data, the View handles user interactions, and the ViewModel connects them seamlessly — creating a balanced ecosystem for better performance and readability.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "GPS Integration",
      description:
        "We can integrate GPS functionality into your Android app based on your project requirements. This feature improves navigation and user experience, giving your application a competitive edge through location-based services and mapping accuracy.",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Push Notifications",
      description:
        "Push notifications are powerful tools to engage users and boost retention. From promoting new offers and sending reminders to alerting users about updates, we integrate smart notification systems that help you drive meaningful user actions.",
      icon: <FaBell />,
    },
    {
      title: "Social Media Integration",
      description:
        "Our Android apps allow seamless integration with popular social platforms. This lets users share content, connect their accounts, and stay updated with your brand — enhancing engagement and visibility through effortless social sharing.",
      icon: <FaShareAlt />,
    },
    {
      title: "Payment Gateways",
      description:
        "We integrate secure and reliable payment gateways to simplify in-app purchases and transactions. Users can make payments effortlessly using credit cards, UPI, wallets, or other methods — ensuring convenience and boosting your business’s cashless operations.",
      icon: <FaCreditCard />,
    },
    {
      title: "Communicating over BLE & NFC",
      description:
        "Our Android applications support communication using BLE (Bluetooth Low Energy) and NFC (Near-Field Communication). These technologies enable device-to-device interaction, real-time data exchange, and innovative features like indoor navigation and contactless operations.",
      icon: <FaBluetooth />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creativity at its Best",
      desc: "Our Android developers excel at creating stunning and engaging apps. In today’s competitive market, only a creative, intuitive, and user-friendly app can truly stand out and capture user attention.",
    },
    {
      icons: <FaMobileAlt className="text-white w-8 h-8" />,
      title: "Customized User Interface",
      desc: "We don’t rely on generic templates — every Android app we build is tailored to your business niche and audience. Our customized UI ensures your app perfectly reflects your brand identity.",
    },
    {
      icons: <FaSyncAlt className="text-white w-8 h-8" />,
      title: "Updated with the Latest Technologies",
      desc: "Our team stays ahead of industry trends, leveraging the latest Android frameworks and tools to deliver high-performing, future-ready applications that align with evolving user expectations.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Android Apps Delivered",
      desc: "We’ve successfully developed over 250 custom Android applications that empower businesses to reach and engage users effectively. Each app is optimized for performance, security, and a seamless mobile experience.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Mobile Development Expertise",
      desc: "With more than 15 years in Android app development, Future IT Touch Pvt. Ltd. delivers cutting-edge mobile solutions. Our deep industry experience ensures every app combines innovation, scalability, and exceptional user experience.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 businesses worldwide, we build Android applications tailored to diverse industries — from startups to large enterprises. Our apps help brands expand their reach and achieve measurable success.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-first approach has earned us a 98% satisfaction rate. We focus on intuitive design, smooth performance, and delivering Android apps that exceed expectations while driving long-term business growth.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated App Support",
      desc: "We offer 24/7 technical support to ensure your Android applications run without interruption. From maintenance to version updates, our dedicated team keeps your app secure, stable, and future-ready.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaMobileAlt className="text-white w-6 h-6" />,
      title: "Custom App Development",
      desc: "Looking to craft spectacular and user-friendly Android apps? We offer diverse tailor-made solutions that run seamlessly across all Android devices. Our expert team has successfully created numerous customized apps for cross-industry verticals within quick turnaround times, addressing the specific needs of small and large enterprises.",
    },
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Stunning UI/UX",
      desc: "With extensive experience in UI/UX design, we blend futuristic designs and top-notch functionality to deliver reliable applications that provide an exceptional user experience. Hire our dedicated Android app developers to bring your innovative idea to life and elevate your business.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "Feature Extension",
      desc: "We support your business growth by building scalable mobility solutions. Launch MVPs to gain a competitive edge, then expand features as needed. We also integrate third-party APIs to extend your app’s functionality seamlessly.",
    },
    {
      icon: <FaGooglePlay className="text-white w-6 h-6" />,
      title: "Deployment",
      desc: "Our team expertly handles Google Play Store deployment, managing app submission, description, asset listing, and optimization. We ensure your Android application is fully ready to gain visibility and perform efficiently in the app store.",
    },
    {
      icon: <FaCheckCircle className="text-white w-6 h-6" />,
      title: "App Testing",
      desc: "We perform rigorous testing to identify bugs and deliver a market-ready, glitch-free application. From functionality and usability to accessibility and performance, we ensure your app works flawlessly across multiple Android devices.",
    },
    {
      icon: <FaLifeRing className="text-white w-6 h-6" />,
      title: "Support & Maintenance",
      desc: "Regular maintenance keeps your Android app agile and user-friendly. We provide extensive support including security review, upgrades, UI improvements, bug fixes, and performance optimization, letting you focus on your core business while we handle your app.",
    },
  ];

  const faqData = [
    {
      title: "Which eCommerce platforms do you specialize in?",
      description:
        "We specialize in OpenCart, Magento, WordPress/WooCommerce, PrestaShop, Shopify, and custom eCommerce solutions tailored to your business requirements.",
    },
    {
      title: "Can you customize my eCommerce store?",
      description:
        "Absolutely! Our developers provide deep customization for your online store, from front-end design to back-end functionalities, ensuring it matches your brand and business needs.",
    },
    {
      title: "Do you ensure website security?",
      description:
        "Yes, security is a top priority. We follow best practices and use PA-DSS compliant platforms to ensure your eCommerce website is safe, secure, and reliable.",
    },
    {
      title: "Can you handle large product catalogs?",
      description:
        "Definitely. Platforms like Magento and custom solutions can store thousands of products and manage heavy traffic seamlessly, without compromising performance.",
    },
    {
      title: "Do you offer mobile-friendly websites?",
      description:
        "Yes, all our eCommerce websites are responsive and mobile-first, ensuring smooth shopping experiences on smartphones, tablets, and desktops.",
    },
    {
      title: "Do you provide ongoing support after launch?",
      description:
        "We provide dedicated support, updates, and maintenance to ensure your online store remains functional, secure, and optimized for growth even after launch.",
    },
  ];

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={app}
        title="ANDROID APP DEVELOPMENT SERVICES"
        desc="Powering 2 Billion mobile devices across the globe, Android inevitably stands out as one of the most sought-after platforms for mobile app development. Future IT Touch Pvt. Ltd. is an certified leading Android app development company in India empowering the businesses of a global clientele with innovative, scalable, and interactive mobility solutions for years. Reach us for industry-standard android app development services at a competitive rate."
      />

      <TechMarquee />

      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Reliable Android Application Development
          </span>

          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
            Crafting Powerful, Scalable, and User-Friendly Android Apps
          </h4>

          <p className="text-base md:text-lg text-gray-600">
            At{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            we specialize in building high-performance Android applications
            tailored to your business needs — designed for speed, security, and
            a seamless user experience across all devices.
          </p>

          {/* Main Description */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Our team combines creativity with cutting-edge technology to develop
            Android apps that empower brands, improve customer engagement, and
            boost business efficiency. From concept to deployment, we ensure
            every app delivers value and scalability.
            <br /> <br />
            <span className="font-semibold text-gray-900">
              For Businesses:
            </span>{" "}
            Custom Android solutions for eCommerce, enterprise management, and
            service-based industries with robust integrations, analytics, and
            smooth performance.
            <br /> <br />
            <span className="font-semibold text-gray-900">For Users:</span>{" "}
            Intuitive UI/UX design, fast loading times, offline functionality,
            and secure data handling to ensure a delightful experience on every
            Android device.
            <br /> <br />
            With over 15 years of expertise in mobile development, we’ve
            delivered innovative Android apps for startups and global
            enterprises alike. Choose our{" "}
            <span className="font-semibold text-indigo-600">
              custom Android app development services
            </span>{" "}
            to turn your ideas into engaging digital experiences that drive
            results.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="tel:+917056937000"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              Start Your Android App Project
            </a>
          </div>
        </div>
      </div>

      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
            Trusted Android Application Development Service
          </h5>
          <h4 className="font-bold text-gray-900">
            Building Innovative, Scalable & High-Performance Android Apps
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={ec}
              alt="eCommerce Development"
              width={100}
              height={100}
              className="w-full rounded-xl shadow-lg h-full  transition-transform duration-500"
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
            Benefits of Our Android App Development Services
          </h5>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
            Leverage the Power of Android to Reach a Global Audience
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
        title="Delivering Innovative Android Application Solutions
"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Cutting-Edge Android Application Development – End-to-End Robust Mobile Solutions for Your Business"
      />

      <FAQSection
        faqData={faqData}
        title="About eCommerce Website Developmen"
      />

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Android;
