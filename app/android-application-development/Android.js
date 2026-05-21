import React from "react";
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
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to launch your Android app?",
  preTitle: "Turn Your Idea into a",
  highlight: "Powerful App",
  postTitle: "",
  description:
    "Get a free consultation with our Android development experts and discover how we can build your next mobile app.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Custom Android app design", sub: "Material Design guidelines" },
    { label: "Google Play Store submission", sub: "Guided launch process" },
    { label: "In-app payment integration", sub: "Multiple gateway options" },
    { label: "Push notifications setup", sub: "Real-time user engagement" },
    { label: "30-day post-launch support", sub: "We stay with you after go-live" },
  ],
  cardCta: { label: "Start Your Android Project", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

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
        "We integrate secure and reliable payment gateways to simplify in-app purchases and transactions. Users can make payments effortlessly using credit cards, UPI, wallets, or other methods — ensuring convenience and boosting your business's cashless operations.",
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
      desc: "Our Android developers excel at creating stunning and engaging apps. In today's competitive market, only a creative, intuitive, and user-friendly app can truly stand out and capture user attention.",
    },
    {
      icons: <FaMobileAlt className="text-white w-8 h-8" />,
      title: "Customized User Interface",
      desc: "We don't rely on generic templates — every Android app we build is tailored to your business niche and audience. Our customized UI ensures your app perfectly reflects your brand identity.",
    },
    {
      icons: <FaSyncAlt className="text-white w-8 h-8" />,
      title: "Updated with the Latest Technologies",
      desc: "Our team stays ahead of industry trends, leveraging the latest Android frameworks and tools to deliver high-performing, future-ready applications that align with evolving user expectations.",
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
      desc: "We support your business growth by building scalable mobility solutions. Launch MVPs to gain a competitive edge, then expand features as needed. We also integrate third-party APIs to extend your app's functionality seamlessly.",
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
    <ServicePageTemplate
      hero={{
        badge: "Android App Development",
        title: "Build Powerful",
        highlight: "Android Apps",
        description:
          "Powering 2 Billion mobile devices globally, Android is one of the most sought-after platforms. We develop innovative, scalable, and interactive Android apps tailored for your business needs.",
        image: app,
        primaryCta: { label: "Start Your Android App", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["250+ Apps Delivered", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Reliable Android App Development",
        title: "Crafting Powerful, Scalable, and",
        highlight: "User-Friendly Android Apps",
        description:
          "At Future IT Touch Pvt. Ltd. we specialize in building high-performance Android applications tailored to your business needs — designed for speed, security, and a seamless user experience across all devices.",
        ctaLabel: "Start Your Android App Project",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Trusted Android Development",
        title: "Building Innovative & High-Performance Android Apps",
        image: ec,
        items: features,
      }}
      benefits={{
        title: "Benefits of Our Android App Development Services",
        subtitle: "Leverage the Power of Android to Reach a Global Audience",
        items: businessData,
      }}
      platforms={{
        title: "Android App Development Services We Offer",
        items: platforms,
      }}
      faq={{
        title: "Frequently Asked Questions",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Android;
