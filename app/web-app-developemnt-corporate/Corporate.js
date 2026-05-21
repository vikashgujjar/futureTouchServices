import React from "react";
import cwd from "../Assets/cwd.webp";
import featImg from "../Assets/app-intro.webp";
import {
  FaPalette,
  FaCogs,
  FaChartBar,
  FaSearch,
  FaLaptopCode,
  FaUserCheck,
} from "react-icons/fa";
import { FaProjectDiagram, FaRobot, FaBars } from "react-icons/fa";
import {
  FaMagento,
  FaWordpress,
  FaShopify,
  FaOpencart,
  FaServer,
} from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to build your corporate web app?",
  preTitle: "Build a Corporate Website That",
  highlight: "Powers Your Business",
  postTitle: "",
  description:
    "Get a free consultation with our corporate web development experts and discover how we can build a scalable, secure, and high-performing web application for your enterprise.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Professional responsive design", sub: "Mobile, tablet & desktop" },
    { label: "SEO-friendly development", sub: "Built for Google from day 1" },
    { label: "Dynamic functionalities", sub: "PHP, JS & API integrations" },
    { label: "Cross-browser compatibility", sub: "Works everywhere seamlessly" },
    { label: "30-day post-launch support", sub: "We stay with you after go-live" },
  ],
  cardCta: { label: "Start Your Corporate Project", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Corporate = () => {
  const features = [
    {
      title: "Appealing Layout",
      description:
        "Our website layouts are sleek, minimalistic, and visually engaging. They leave a lasting impression on users and help them easily absorb content without distraction, reinforcing your brand's professional image.",
      icon: <FaPalette />,
    },
    {
      title: "Dynamic Functionalities",
      description:
        "We utilize modern technologies like PHP, JavaScript, CSS, and third-party APIs to craft interactive and dynamic web applications. From image galleries and CTA buttons to micro-interactions, every feature enhances user engagement.",
      icon: <FaCogs />,
    },
    {
      title: "Scalability",
      description:
        "Our web solutions grow with your business. Built with scalability in mind, your corporate website can easily expand its features and functionalities as your organization evolves.",
      icon: <FaChartBar />,
    },
    {
      title: "SEO-Friendly Content",
      description:
        "We integrate SEO best practices right into the development process. From clean code to optimized content, our corporate web apps are designed to boost search visibility and strengthen your brand presence online.",
      icon: <FaSearch />,
    },
    {
      title: "Responsive Solution",
      description:
        "Every solution we build is optimized for all devices and screen sizes. Whether it's a desktop, tablet, or mobile, your corporate website delivers a seamless and consistent user experience everywhere.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Excellent UI / UX",
      description:
        "We combine outstanding UI design with strong technical performance to ensure an exceptional user experience. Each interface is crafted to engage visitors and encourage meaningful interactions.",
      icon: <FaUserCheck />,
    },
  ];

  const businessData = [
    {
      icons: <FaProjectDiagram className="text-white w-8 h-8" />,
      title: "Dynamic Web Solutions",
      desc: "Out of the wide range of services we provide, corporate web app development is our expertise. We build fast, secure, and scalable solutions for enterprise success.",
    },
    {
      icons: <FaRobot className="text-white w-8 h-8" />,
      title: "Smart Automation",
      desc: "Our expert developers integrate automation and chatbot features to make your web applications more interactive, efficient, and user-friendly across all devices.",
    },
    {
      icons: <FaBars className="text-white w-8 h-8" />,
      title: "Seamless Navigation",
      desc: "As a leading corporate web development company, we ensure smooth navigation and responsive designs that deliver flawless user experiences on every platform.",
    },
  ];

  const platforms = [
    {
      icon: <FaOpencart className="text-white w-6 h-6" />,
      title: "OpenCart Development",
      desc: "OpenCart allows easy customization and lightweight websites using AJAX. With over 14,000 extensions, we create beautiful and functional online stores with enhanced features and PA-DSS compliant security.",
    },
    {
      icon: <FaMagento className="text-white w-6 h-6" />,
      title: "Magento Development",
      desc: "Magento handles thousands of products and heavy traffic with ease. Its modular structure allows deep customization for marketplaces and offers unmatched security due to PA-DSS compliance.",
    },
    {
      icon: <FaWordpress className="text-white w-6 h-6" />,
      title: "WordPress & WooCommerce",
      desc: "WordPress websites with WooCommerce are lightweight, fast, and easy to manage. Scalable and secure, we deliver fully functional eCommerce stores with REST API, configurable shipping, and payment options.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "PrestaShop Development",
      desc: "PrestaShop is free, lightweight, and easy to use. With multilingual support, we create unique eCommerce websites that allow global sales without complex coding requirements.",
    },
    {
      icon: <FaServer className="text-white w-6 h-6" />,
      title: "Custom Development",
      desc: "Need a feature-rich marketplace tailored to your business? We build custom eCommerce solutions using frameworks like Laravel, CakePHP, CodeIgniter, NodeJS, and databases like MySQL for seamless performance.",
    },
    {
      icon: <FaShopify className="text-white w-6 h-6" />,
      title: "Shopify Development",
      desc: "Shopify is a fully hosted platform for quick online store setup. Our Shopify developers build SEO-optimized storefronts with Drop Shipping, Fraud Prevention, Social Media Integration, and more.",
    },
  ];

  const faqData = [
    {
      title: "What types of corporate websites do you develop?",
      description:
        "We specialize in corporate portals, enterprise web applications, business dashboards, intranet solutions, and custom web platforms tailored to your organization's requirements.",
    },
    {
      title: "Can you customize my corporate website?",
      description:
        "Absolutely! Our developers provide deep customization for your corporate website, from front-end design to back-end functionalities, ensuring it matches your brand and business needs.",
    },
    {
      title: "Do you ensure website security?",
      description:
        "Yes, security is a top priority. We follow best practices including SSL, secure authentication, and data encryption to ensure your corporate website is safe and reliable.",
    },
    {
      title: "How do you handle scalability for large enterprises?",
      description:
        "We design websites with scalability in mind, using modular architectures and cloud-ready infrastructure so your platform can grow alongside your business.",
    },
    {
      title: "Do you offer mobile-friendly corporate websites?",
      description:
        "Yes, all our corporate websites are responsive and mobile-first, ensuring smooth experiences on smartphones, tablets, and desktops for employees and clients alike.",
    },
    {
      title: "Do you provide ongoing support after launch?",
      description:
        "We provide dedicated support, updates, and maintenance to ensure your corporate website remains functional, secure, and optimized for growth even after launch.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Corporate Website Design",
        title: "Make a Strong First",
        highlight: "Corporate Impression",
        description:
          "Future IT Touch Pvt. Ltd. corporate website design company is your right partner. From simple informative sites to complex web applications — we provide comprehensive, fast-loading, responsive, and user-friendly corporate web solutions.",
        image: cwd,
        primaryCta: { label: "Start Your Corporate Web App Project", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["250+ Corporate Apps Delivered", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Reliable Corporate Web App Development",
        title: "Building Powerful and Scalable",
        highlight: "Business Applications",
        description:
          "At Future IT Touch Pvt. Ltd. we craft secure and scalable web applications designed to streamline operations, enhance collaboration, and empower enterprises to achieve their digital goals with efficiency and precision.",
        ctaLabel: "Start Your Corporate Web App Project",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Trusted Business Web App Development Service",
        title: "Delivering Innovative & Scalable Web Solutions for Corporates",
        image: featImg,
        items: features,
      }}
      benefits={{
        title: "Leading Corporate Web Application Development Company in India",
        subtitle: "Partner with Us for Excellence & Innovation",
        items: businessData,
      }}
      platforms={{
        title: "Cutting-Edge Web Application Development for Corporates",
        items: platforms,
      }}
      faq={{
        title: "About Corporate Website Development",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Corporate;
