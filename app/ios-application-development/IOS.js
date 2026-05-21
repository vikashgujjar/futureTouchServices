import React from "react";
import io from "../Assets/io.webp";
import ec from "../Assets/iii.gif";
import { FaPaintBrush, FaClock, FaUsers } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaApple, FaSwift, FaCloud, FaLock } from "react-icons/fa";
import { FaMobileAlt, FaPalette, FaTools } from "react-icons/fa";
import { FaBriefcase, FaBullhorn } from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to launch your iOS app?",
  preTitle: "Build Your Next",
  highlight: "iOS App",
  postTitle: "with Experts",
  description:
    "Get a free consultation with our iOS development team and discover how we can craft a premium mobile experience for your brand.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Custom iOS app design", sub: "Apple HIG compliance" },
    { label: "App Store submission", sub: "Guided launch process" },
    { label: "In-app purchase setup", sub: "Seamless monetization" },
    { label: "Push notifications setup", sub: "Real-time user engagement" },
    { label: "30-day post-launch support", sub: "We stay with you after go-live" },
  ],
  cardCta: { label: "Start Your iOS Project", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const IOS = () => {
  const features = [
    {
      title: "Expertise in iOS Development",
      description:
        "iPhone app development is our core strength. We create high-performing, scalable, and feature-rich iOS applications that deliver seamless user experiences across iPhones and iPads, following Apple's best development standards.",
      icon: <FaApple />,
    },
    {
      title: "Innovative App Designs",
      description:
        "Our UI/UX designers craft visually appealing and intuitive app interfaces that follow Apple's Human Interface Guidelines. We ensure every design enhances engagement and leaves a lasting impression on users.",
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
        "With 15+ years in app development, we've built iPhone apps for startups, enterprises, and global brands across industries like eCommerce, healthcare, travel, and fintech—ensuring innovative and scalable solutions.",
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
        "Our responsibility doesn't end with app launch. We provide ongoing maintenance, updates, and support to ensure your iOS app stays secure, compatible, and high-performing across all Apple devices.",
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
      icon: <FaSwift className="text-white w-6 h-6" />,
      title: "Swift & SwiftUI Development",
      desc: "We specialize in building modern iOS apps using Swift and SwiftUI, ensuring high performance, clean architecture, and a smooth user experience optimized for Apple devices.",
    },
    {
      icon: <FaApple className="text-white w-6 h-6" />,
      title: "Native iOS App Development",
      desc: "We build robust native applications for iPhone, iPad, and Apple Watch using Xcode and Apple's latest frameworks, ensuring seamless performance and App Store compliance.",
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
        "We follow Apple's best security practices, implementing data encryption, secure authentication, and regular security audits to safeguard user data and app integrity.",
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
    <ServicePageTemplate
      hero={{
        badge: "iOS App Development",
        title: "Build Premium",
        highlight: "iOS Apps",
        description:
          "Future IT Touch provides cutting-edge iOS app development services using Swift, SwiftUI, and Objective-C. We craft highly interactive, innovative, and scalable apps that meet your business objectives.",
        image: io,
        primaryCta: { label: "Start Your iOS App", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["250+ Apps Delivered", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Trusted iOS Application Development",
        title: "Crafting High-Performance",
        highlight: "iOS Applications",
        description:
          "At Future IT Touch Pvt. Ltd. we specialize in developing iOS applications that combine elegant design, seamless performance, and intuitive functionality — helping businesses connect better with their users across iPhone, iPad, and Apple Watch.",
        ctaLabel: "Start Your iOS App Project",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Our iPhone App Development Process",
        title: "Trusted iOS Development — Seamless & Innovative Apps",
        image: ec,
        items: features,
      }}
      benefits={{
        title: "Leading iOS App Development Company in India",
        subtitle: "Partner with Us for Growth & Innovation",
        items: businessData,
      }}
      platforms={{
        title: "iOS App Development Technologies We Use",
        items: platforms,
      }}
      faq={{
        title: "About iOS Application Development",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default IOS;
