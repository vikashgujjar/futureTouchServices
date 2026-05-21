import React from "react";
import gg from "../Assets/gg.webp";
import image2 from "../Assets/gif.gif";
import {
  FaCloud,
  FaSms,
  FaVideo,
  FaMapMarkedAlt,
  FaShippingFast,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import { FaTools, FaDatabase, FaServer } from "react-icons/fa";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaBuilding,
  FaNetworkWired,
  FaCode,
} from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to launch your web application?",
  preTitle: "Build a Web Application That",
  highlight: "Scales with Your Business",
  postTitle: "",
  description:
    "Get a free consultation with our web application experts and discover how we can build a high-performing, scalable application tailored to your business.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results in 30 days"],
  cardItems: [
    { label: "Custom responsive web app", sub: "Mobile, tablet & desktop" },
    { label: "Third-party API integrations", sub: "Payments, maps, SMS & more" },
    { label: "Scalable & secure codebase", sub: "Built for growth from day 1" },
    { label: "Database optimization", sub: "Fast queries & reliable storage" },
    { label: "30-day post-launch support", sub: "We stay with you after go-live" },
  ],
  cardCta: { label: "Start Your Web App Project", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

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
      desc: "We develop lightweight, secure, and engaging Progressive Web Applications that work offline, send push notifications, and perform seamlessly across multiple devices and browsers, following Google's guidelines.",
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
    <ServicePageTemplate
      hero={{
        badge: "Web Application Development",
        title: "Build Web Applications That",
        highlight: "Drive Business Growth",
        description:
          "Future IT Touch Pvt. Ltd. is an award-winning web application development company offering custom solutions to startups, SMBs, and enterprises. Leveraging cutting-edge technology frameworks, APIs, and databases, we craft futuristic, conversion-driven, and highly optimized solutions.",
        image: gg,
        primaryCta: { label: "Start Your Web App Journey", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["100+ Apps Maintained", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Premium Web Application Development",
        title: "Building Powerful and Scalable",
        highlight: "Web Applications",
        description:
          "At Future IT Touch Pvt. Ltd. we specialize in developing robust web applications that streamline business processes, improve operational efficiency, and provide seamless user experiences across devices.",
        ctaLabel: "Start Your Web App Journey",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Trusted Web App Development Company",
        title: "Creating Web Applications That Are Powerful & Scalable",
        image: image2,
        items: features,
      }}
      benefits={{
        title: "Reliable Web Application Maintenance & Support",
        subtitle: "Ensuring Your Web Applications Run Smoothly & Efficiently",
        items: businessData,
      }}
      platforms={{
        title: "Our Suite of Web Application Development Services",
        items: platforms,
      }}
      faq={{
        title: "About Web Application Development",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Ecommerce;
