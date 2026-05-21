import React from "react";
import app from "../Assets/hhh.gif";
import ec from "../Assets/ios-application-development.webp";
import { FaPaintBrush, FaClock } from "react-icons/fa";
import { FaMobileAlt, FaTools } from "react-icons/fa";
import {
  FaLightbulb,
  FaDraftingCompass,
  FaCode,
  FaBug,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { SiReact, SiFlutter, SiGooglecloud } from "react-icons/si";
import { MdOutlineApi, MdOutlineSecurity } from "react-icons/md";
import { RiTestTubeLine } from "react-icons/ri";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to go cross-platform?",
  preTitle: "Build Apps for",
  highlight: "Every Platform",
  postTitle: "",
  description:
    "Get a free consultation with our hybrid app development experts and discover how we can deliver your app across Android and iOS from a single codebase.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Cross-platform app (iOS & Android)", sub: "Single codebase, dual platform" },
    { label: "Native-like performance", sub: "React Native or Flutter" },
    { label: "API & backend integration", sub: "Seamless data connectivity" },
    { label: "App Store & Play Store launch", sub: "Guided submission process" },
    { label: "30-day post-launch support", sub: "We stay with you after go-live" },
  ],
  cardCta: { label: "Start Your Hybrid App Project", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Hybrid = () => {
  const features = [
    {
      title: "Idea & Strategy",
      description:
        "Every successful app begins with a great idea and a solid strategy. We start by understanding your vision, business goals, and target audience. Our team then defines the app's core features, competitive advantage, and monetization model to create a clear, results-driven roadmap that aligns with your long-term business objectives.",
      icon: <FaLightbulb />,
    },
    {
      title: "UI/UX Design",
      description:
        "Our UI/UX experts design visually stunning and user-friendly interfaces that reflect Apple's Human Interface Guidelines. We focus on delivering seamless navigation, pixel-perfect layouts, and intuitive user journeys that enhance engagement, retention, and overall satisfaction — ensuring a delightful experience for every user.",
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
        "Once your app is tested and approved, we manage the entire App Store submission process. From preparing metadata, screenshots, and descriptions to meeting Apple's compliance requirements, we ensure a smooth and successful launch. Our goal is to get your app live quickly and efficiently without any delays or rejections.",
      icon: <FaCloudUploadAlt />,
    },
    {
      title: "App Marketing",
      description:
        "Building a great app is just the beginning — getting users to discover it is the next challenge. Our marketing team uses proven strategies like App Store Optimization (ASO), social media campaigns, and influencer outreach to increase your app's visibility, downloads, and engagement. We also analyze user data to improve retention and boost ROI.",
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
      desc: "Our design experts create visually stunning and intuitive app interfaces that align perfectly with Apple's Human Interface Guidelines, ensuring elegant and user-friendly experiences.",
    },
    {
      icons: <FaClock className="text-white w-8 h-8" />,
      title: "Timely Project Delivery",
      desc: "As a trusted iOS app development company, we prioritize meeting deadlines while maintaining top-tier quality, performance, and reliability in every project we deliver.",
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
    <ServicePageTemplate
      hero={{
        badge: "Hybrid App Development",
        title: "Cross-Platform Apps for",
        highlight: "Every Device",
        description:
          "Need an app for your business that runs seamlessly across Android and iPhone? A Hybrid App is the answer. We specialize in React Native and Flutter development for cost-effective, high-performance cross-platform solutions.",
        image: app,
        primaryCta: { label: "Start Your Hybrid App", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["300+ Apps Delivered", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Trusted Hybrid Application Development",
        title: "Building Powerful",
        highlight: "Cross-Platform Mobile Apps",
        description:
          "At Future IT Touch Pvt. Ltd. we specialize in creating hybrid mobile applications that deliver native-like performance, consistent UI, and seamless user experiences across Android, iOS, and the web — all from a single codebase.",
        ctaLabel: "Start Your Hybrid App Project",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Our Hybrid App Development Process",
        title: "Trusted Hybrid App Developers in India",
        image: ec,
        items: features,
      }}
      benefits={{
        title: "Leading Hybrid App Development Company in India",
        subtitle: "Build Powerful Apps That Work on Every Platform",
        items: businessData,
      }}
      platforms={{
        title: "Hybrid App Development Technologies We Use",
        items: platforms,
      }}
      faq={{
        title: "About Hybrid Application Development",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Hybrid;
