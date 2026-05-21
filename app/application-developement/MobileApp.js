import React from "react";
import devops from "../Assets/app-develops.webp";
import service1 from "../Assets/mob-1.webp";
import {
  FaApple,
  FaAndroid,
  FaLayerGroup,
  FaBug,
  FaPaintBrush,
  FaTachometerAlt,
  FaLock,
} from "react-icons/fa";
import { FaLightbulb, FaHandshake, FaCogs } from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to build your mobile app?",
  preTitle: "Create a Mobile App That",
  highlight: "Transforms Your Business",
  postTitle: "",
  description:
    "Get a free consultation with our mobile app development experts and discover how we can build a high-quality, user-friendly app for your business.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Custom app design & development", sub: "iOS, Android & cross-platform" },
    { label: "Secure payment integration", sub: "Multiple gateway options" },
    { label: "Push notifications setup", sub: "Real-time user engagement" },
    { label: "App Store submission", sub: "Guided launch on both stores" },
    { label: "30-day post-launch support", sub: "We stay with you after go-live" },
  ],
  cardCta: { label: "Start Your App Project", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const MobileApp = () => {
  const features = [
    {
      title: "iOS App Development",
      description:
        "We provide cutting-edge iOS app development services to turn your business app dreams into reality. With a proficient team of iOS developers, we build custom, high-performance apps for iPhone, iPad, and Apple Watch.",
      icon: <FaApple />,
    },
    {
      title: "Android App Development",
      description:
        "Powering over 2 billion devices globally, Android is one of the most sought-after platforms for mobile app development. We build robust, feature-rich Android apps optimized for performance and user experience.",
      icon: <FaAndroid />,
    },
    {
      title: "Cross Platform App Development",
      description:
        "Need an app for your business that runs seamlessly across Android and iOS? We develop cross-platform apps using React Native and Flutter that deliver native-like performance at a fraction of the cost.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Mobile App Testing",
      description:
        "We provide comprehensive mobile app testing services including functional, usability, performance, and security testing for iOS and Android apps, ensuring flawless performance across all devices.",
      icon: <FaBug />,
    },
    {
      title: "UI/UX Design for Mobile",
      description:
        "Our designers create intuitive and visually appealing mobile interfaces that enhance user engagement. We follow platform-specific design guidelines to ensure a seamless and delightful experience for every user.",
      icon: <FaPaintBrush />,
    },
    {
      title: "App Performance Optimization",
      description:
        "We optimize your mobile application for speed, efficiency, and reliability. From code reviews to memory management, our experts ensure your app delivers a smooth experience under any load condition.",
      icon: <FaTachometerAlt />,
    },
    {
      title: "App Security & Compliance",
      description:
        "Security is at the core of every app we build. We implement industry-standard security protocols, data encryption, and compliance measures to protect your users and meet regulatory requirements.",
      icon: <FaLock />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Custom Mobile App Strategy",
      desc: "We dive into your business ecosystem, explore the market, and build a truly custom app strategy to unlock the full potential of mobile technology for your company.",
    },
    {
      icons: <FaCogs className="text-white w-8 h-8" />,
      title: "End-to-End Development",
      desc: "From expert business analysis and design to development, launch, and integration, we handle every step of the mobile app development lifecycle for a seamless delivery.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Ongoing Optimization & Support",
      desc: "We provide further optimization, scale-up support, and maintenance after launch — ensuring your mobile application continues to perform, grow, and meet evolving user needs.",
    },
  ];

  const platforms = [
    {
      icon: <FaApple className="text-white w-6 h-6" />,
      title: "iOS App Development",
      desc: "We build high-quality, custom iOS applications for iPhone and iPad using Swift and Objective-C, delivering smooth and engaging user experiences on Apple devices.",
    },
    {
      icon: <FaAndroid className="text-white w-6 h-6" />,
      title: "Android App Development",
      desc: "Our Android development team creates powerful, scalable apps optimized for the diverse Android ecosystem — from budget devices to flagship smartphones.",
    },
    {
      icon: <FaLayerGroup className="text-white w-6 h-6" />,
      title: "Cross Platform Development",
      desc: "We use React Native and Flutter to build cross-platform apps that run natively on both iOS and Android, delivering consistent performance and reducing development time.",
    },
    {
      icon: <FaBug className="text-white w-6 h-6" />,
      title: "Mobile App Testing",
      desc: "Our dedicated testing team conducts functional, usability, performance, and security testing across devices to ensure your app is bug-free and ready for launch.",
    },
    {
      icon: <FaPaintBrush className="text-white w-6 h-6" />,
      title: "App UI/UX Design",
      desc: "We create intuitive, visually appealing mobile interfaces following platform-specific guidelines, ensuring every touchpoint is delightful, accessible, and conversion-focused.",
    },
    {
      icon: <FaTachometerAlt className="text-white w-6 h-6" />,
      title: "App Maintenance & Optimization",
      desc: "Post-launch, we continuously monitor and optimize your app's performance, push updates, resolve issues, and add new features to keep it relevant and competitive.",
    },
  ];

  const faqData = [
    {
      title: "What types of mobile apps do you develop?",
      description:
        "We develop native iOS and Android apps, cross-platform apps using React Native and Flutter, and hybrid apps tailored to your business requirements and target audience.",
    },
    {
      title: "How long does it take to develop a mobile app?",
      description:
        "App development timelines vary based on complexity and features. A basic app may take 6–10 weeks, while a feature-rich app can take 3–6 months. We provide a clear timeline before starting.",
    },
    {
      title: "Do you provide app design services along with development?",
      description:
        "Yes, our team includes experienced UI/UX designers who create intuitive, visually engaging mobile interfaces as part of our end-to-end app development service.",
    },
    {
      title: "Can you integrate third-party APIs and services?",
      description:
        "Absolutely! We integrate payment gateways, social logins, maps, notifications, cloud services, and other third-party APIs to enhance your app's functionality and user experience.",
    },
    {
      title: "Will the app work on both Android and iOS?",
      description:
        "Yes, we can develop cross-platform apps that work seamlessly on both iOS and Android, or build separate native apps for each platform depending on your requirements and budget.",
    },
    {
      title: "Do you provide support and maintenance after the app launch?",
      description:
        "We offer comprehensive post-launch support, including bug fixes, performance optimization, OS updates, and feature additions to ensure your app stays relevant and functional.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Mobile App Development Services",
        title: "Build Mobile Apps That",
        highlight: "Engage & Deliver Results",
        description:
          "Future IT Touch Pvt. Ltd. offers a comprehensive range of mobile app development services for iOS, Android, and cross-platform. With 50+ designers and developers, we've been serving a global clientele since 2017.",
        image: devops,
        primaryCta: { label: "Start Your App Journey", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["800+ Apps Delivered", "15+ Years Expertise", "95% Repeat Business"],
      }}
      intro={{
        badge: "Custom Mobile App Solutions",
        title: "Get a Complete Strategy for",
        highlight: "Mobile App Development",
        description:
          "At Future IT Touch Pvt. Ltd. we dive into your business ecosystem, explore the market, and build a truly custom strategy to unlock the full potential of mobile technology for your company.",
        ctaLabel: "Start Your App Journey",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Full-Stack Mobile App Development",
        title: "Comprehensive Mobile App Services for Every Platform",
        image: service1,
        items: features,
      }}
      benefits={{
        title: "Your Trusted Mobile App Development Partner",
        subtitle: "From Idea to Launch — We Build Apps That Grow Your Business",
        items: businessData,
      }}
      platforms={{
        title: "Mobile App Development Services We Offer",
        items: platforms,
      }}
      faq={{
        title: "About Mobile App Development",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default MobileApp;
