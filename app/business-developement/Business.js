import React from "react";
import gm from "../Assets/gm.webp";
import Ism from "../Assets/lsm.gif";
import {
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaShareAlt,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaHeadset,
} from "react-icons/fa";
import { FaShoppingCart, FaClock } from "react-icons/fa";
import {
  FaWordpress,
  FaShoppingBag,
  FaCode,
  FaLaptopCode,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to launch your small business website?",
  preTitle: "Build a Business Website That",
  highlight: "Grows Your Brand",
  postTitle: "",
  description:
    "Get a free consultation with our web experts and discover how we can build a professional, affordable website tailored to your small business needs.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results in 30 days"],
  cardItems: [
    { label: "Custom professional design", sub: "Unique to your brand" },
    { label: "Mobile-responsive layout", sub: "Works on all devices" },
    { label: "SEO-friendly architecture", sub: "Built for Google from day 1" },
    { label: "Social media integration", sub: "Connect all your channels" },
    { label: "30-day post-launch support", sub: "We stay with you after go-live" },
  ],
  cardCta: { label: "Start Your Business Website", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Business = () => {
  const features = [
    {
      title: "Professional Website Design",
      description:
        "We create visually attractive and professional website designs for small businesses and startups. Our custom layouts are tailored to reflect your brand identity and engage your target audience effectively.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Mobile-Responsive Development",
      description:
        "Every website we build is fully responsive across all devices — desktops, tablets, and smartphones. Our responsive coding ensures optimal viewing experiences for every visitor, boosting engagement and retention.",
      icon: <FaMobileAlt />,
    },
    {
      title: "SEO-Friendly Architecture",
      description:
        "We build websites with search engine optimization baked in from the start. From clean code to proper metadata and structured content, your small business website is built to rank and be found online.",
      icon: <FaSearch />,
    },
    {
      title: "Social Media Integration",
      description:
        "We connect your website with your social media platforms to enhance your brand identity, increase reach, and make sharing easy — helping your small business grow its online presence organically.",
      icon: <FaShareAlt />,
    },
    {
      title: "Affordable Development Plans",
      description:
        "Our small business website design services are customized exclusively for startups at affordable rates. You get professional-grade web development without the enterprise price tag, ensuring the best ROI.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Fast Loading Performance",
      description:
        "Speed matters. We optimize every aspect of your website — from images to scripts — to ensure fast page load times, improving user experience and search engine rankings for your small business.",
      icon: <FaTachometerAlt />,
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "We provide post-launch support, updates, and maintenance to ensure your small business website remains functional, secure, and aligned with your evolving needs and market demands.",
      icon: <FaHeadset />,
    },
  ];

  const businessData = [
    {
      icons: <FaShoppingCart className="text-white w-8 h-8" />,
      title: "Specialized in Small Business Websites",
      desc: "Our small business website design services are customized exclusively for startups and SMBs at affordable rates, ensuring high quality without the enterprise cost.",
    },
    {
      icons: <FaPaintBrush className="text-white w-8 h-8" />,
      title: "Innovative Design Solutions",
      desc: "We use the latest technologies and create attractive design layouts with business-oriented features to upscale user experience and convert visitors into buyers.",
    },
    {
      icons: <FaClock className="text-white w-8 h-8" />,
      title: "On-Time Delivery",
      desc: "We ensure timely delivery of your small business website, meeting every deadline without compromising on design quality, performance, or functionality.",
    },
  ];

  const platforms = [
    {
      icon: <FaWordpress className="text-white w-6 h-6" />,
      title: "WordPress for Small Business",
      desc: "We build lightweight and easy-to-manage WordPress websites perfect for small businesses. With thousands of plugins and themes, we create sites that are beautiful, functional, and scalable.",
    },
    {
      icon: <FaShoppingBag className="text-white w-6 h-6" />,
      title: "WooCommerce Online Stores",
      desc: "We set up WooCommerce-powered online stores for small businesses looking to sell products online. From product listings to secure checkout, we handle everything for a smooth launch.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Custom HTML & CSS Websites",
      desc: "For businesses needing a unique online presence, we build fully custom HTML/CSS websites with modern designs, fast performance, and clean, maintainable code.",
    },
    {
      icon: <FaLaptopCode className="text-white w-6 h-6" />,
      title: "Landing Page Development",
      desc: "We design high-converting landing pages tailored for campaigns, product launches, and lead generation — helping small businesses capture more leads and grow their customer base.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Business Portfolio Websites",
      desc: "We create professional portfolio websites that showcase your work, services, and testimonials effectively — helping small businesses build credibility and attract new clients.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "Custom Web Solutions",
      desc: "Need a feature-rich custom web solution? We build tailor-made websites and web apps for small businesses using modern frameworks to meet your specific requirements and goals.",
    },
  ];

  const faqData = [
    {
      title: "How long does it take to build a small business website?",
      description:
        "Depending on the complexity and features required, a small business website typically takes 2 to 6 weeks. We provide a clear timeline before starting and ensure timely delivery.",
    },
    {
      title: "Can you customize the website to match my business needs?",
      description:
        "Absolutely! We tailor every aspect of your website — from design and layout to features and integrations — ensuring it perfectly represents your brand and meets your business objectives.",
    },
    {
      title: "Do you make small business websites mobile-friendly?",
      description:
        "Yes, all our websites are fully responsive and optimized for all devices, including smartphones, tablets, and desktops, ensuring a seamless experience for every visitor.",
    },
    {
      title: "Can you integrate social media into my small business website?",
      description:
        "Definitely! We link your website with social media platforms like Facebook, Instagram, and LinkedIn to boost brand identity, increase reach, and drive more traffic to your site.",
    },
    {
      title: "Do you offer affordable packages for startups?",
      description:
        "Yes, our small business website design services are exclusively tailored for startups and SMBs at competitive rates, ensuring you get professional quality within your budget.",
    },
    {
      title: "Do you provide ongoing maintenance after the website launches?",
      description:
        "We provide dedicated post-launch support, updates, and maintenance to ensure your small business website stays functional, secure, and optimized as your business grows.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Small Business Website Design",
        title: "Build a Website That",
        highlight: "Grows Your Business",
        description:
          "Future IT Touch Pvt. Ltd. provides professional small business website design services customized exclusively for startups at affordable rates. In the last 15 years, we have helped hundreds of small businesses enhance their growth online.",
        image: gm,
        primaryCta: { label: "Start Your Business Website", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["500+ Businesses Served", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Trusted Small Business Website Design",
        title: "Rise from a Startup to an",
        highlight: "Established Brand",
        description:
          "At Future IT Touch Pvt. Ltd. we build professional websites for small businesses and startups, creating strong digital presences that convert visitors into buyers and help businesses grow.",
        ctaLabel: "Start Your Business Website",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Professional Small Business Web Design",
        title: "Everything Your Small Business Website Needs to Succeed",
        image: Ism,
        items: features,
      }}
      benefits={{
        title: "Leading Small Business Website Design Company in India",
        subtitle: "Partner with Us for Growth & Online Success",
        items: businessData,
      }}
      platforms={{
        title: "Small Business Web Solutions We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About Small Business Website Design",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Business;
