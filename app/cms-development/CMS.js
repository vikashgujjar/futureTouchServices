import React from "react";
import gm from "../Assets/gm.webp";
import image2 from "../Assets/gif.gif";
import {
  FaMoneyBillWave,
  FaEdit,
  FaFileAlt,
  FaGlobe,
  FaShareAlt,
  FaSearch,
} from "react-icons/fa";
import { FaLaptopCode, FaSync, FaExchangeAlt } from "react-icons/fa";
import {
  FaWordpress,
  FaShoppingBag,
  FaMagento,
  FaShopify,
  FaDrupal,
  FaCode,
} from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to launch your CMS website?",
  preTitle: "Build a CMS Website That",
  highlight: "Manages Itself",
  postTitle: "",
  description:
    "Get a free consultation with our CMS experts and discover how we can build a powerful, easy-to-manage website tailored to your business needs.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Custom CMS setup & design", sub: "Tailored to your brand" },
    { label: "Plugin & extension integration", sub: "Extend functionality easily" },
    { label: "SEO-optimized architecture", sub: "Built for Google from day 1" },
    { label: "Mobile-responsive layout", sub: "Works on all devices" },
    { label: "30-day post-launch support", sub: "We stay with you after go-live" },
  ],
  cardCta: { label: "Start Your CMS Project", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Ecommerce = () => {
  const features = [
    {
      title: "Affordable Website Management",
      description:
        "CMS development reduces ongoing maintenance costs by giving business owners the flexibility to manage and update their websites without constant developer support. This ensures cost-effectiveness and full control.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Easy-to-Use Editing Tools",
      description:
        "With an intuitive WYSIWYG editor, you can edit, format, and publish content effortlessly. No coding knowledge is required, making it simple for anyone to keep the site fresh and updated.",
      icon: <FaEdit />,
    },
    {
      title: "Better Content Organization",
      description:
        "CMS platforms provide structured content management, allowing you to upload, organize, and update text, media, and documents seamlessly. This ensures a clean, consistent, and user-friendly site.",
      icon: <FaFileAlt />,
    },
    {
      title: "Multilingual Capabilities",
      description:
        "Expand your reach by building and maintaining a multilingual website with ease. A CMS makes it simple to manage translations and cater to diverse global audiences without complex coding.",
      icon: <FaGlobe />,
    },
    {
      title: "Social Media Integration",
      description:
        "Connect your website to leading social media platforms, embed feeds, and share updates instantly. This boosts brand visibility and strengthens user engagement across multiple channels.",
      icon: <FaShareAlt />,
    },
    {
      title: "SEO-Friendly Structure",
      description:
        "Our CMS development ensures an SEO-optimized website with clean coding practices, metadata control, and keyword-ready architecture to improve your search engine rankings and online visibility.",
      icon: <FaSearch />,
    },
  ];

  const businessData = [
    {
      icons: <FaLaptopCode className="text-white w-8 h-8" />,
      title: "CMS Web Design & Development",
      desc: "We build mobile-responsive CMS websites that are feature-rich, user-friendly, and fully aligned with the latest design trends and technologies.",
    },
    {
      icons: <FaSync className="text-white w-8 h-8" />,
      title: "CMS Upgrade & Integration",
      desc: "Our team helps upgrade your existing CMS version and integrates plugins or components to extend functionality and keep your website modern and competitive.",
    },
    {
      icons: <FaExchangeAlt className="text-white w-8 h-8" />,
      title: "Existing CMS Migration",
      desc: "We ensure smooth migration of your website from one CMS platform to another without losing data, SEO ranking, or performance quality.",
    },
  ];

  const platforms = [
    {
      icon: <FaWordpress className="text-white w-6 h-6" />,
      title: "WordPress Development",
      desc: "We build lightweight and easy-to-manage WordPress websites. Using WooCommerce, we create scalable eCommerce stores with secure payments, shipping options, and modern features.",
    },
    {
      icon: <FaShoppingBag className="text-white w-6 h-6" />,
      title: "PrestaShop Development",
      desc: "PrestaShop is free, lightweight, and supports multiple languages. Our experts craft unique eCommerce websites that allow you to sell globally with ease and flexibility.",
    },
    {
      icon: <FaMagento className="text-white w-6 h-6" />,
      title: "Magento Development",
      desc: "We deliver powerful Magento-based eCommerce platforms with custom features, high scalability, and advanced integrations to ensure seamless online shopping experiences.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Custom Development",
      desc: "Our team creates tailor-made CMS solutions using Laravel, CodeIgniter, NodeJS, and other frameworks, ensuring robust, feature-rich, and scalable applications.",
    },
    {
      icon: <FaShopify className="text-white w-6 h-6" />,
      title: "Shopify Development",
      desc: "Shopify enables quick store setup with 100+ themes and plugins. We build storefronts with SEO, fraud prevention, drop-shipping support, and social media integration.",
    },
    {
      icon: <FaDrupal className="text-white w-6 h-6" />,
      title: "Drupal Development",
      desc: "Drupal is highly flexible and secure. We develop enterprise-grade CMS platforms with multi-language support, advanced customization, and strong community-driven modules.",
    },
  ];

  const faqData = [
    {
      title: "What types of CMS websites do you develop?",
      description:
        "We specialize in WordPress, PrestaShop, Magento, Shopify, Drupal, and custom CMS websites, tailored to meet your business goals and provide a seamless user experience.",
    },
    {
      title: "Can you customize CMS websites to my business needs?",
      description:
        "Absolutely! We offer full customization of themes, plugins, and features, ensuring your CMS website aligns perfectly with your brand and operational workflows.",
    },
    {
      title: "Are CMS websites secure and scalable?",
      description:
        "Yes, security and scalability are top priorities. We implement secure coding practices, configure SSL, and build CMS websites capable of handling high traffic and growing content needs.",
    },
    {
      title: "Can you integrate third-party tools and plugins?",
      description:
        "Definitely. We integrate payment gateways, marketing tools, analytics, social media plugins, and other third-party solutions to enhance your CMS website's functionality.",
    },
    {
      title: "Are the CMS websites mobile-friendly and responsive?",
      description:
        "Yes, all our CMS websites are fully responsive, mobile-optimized, and cross-browser compatible, ensuring a smooth user experience on desktops, tablets, and smartphones.",
    },
    {
      title: "Do you provide maintenance and support for CMS websites?",
      description:
        "We provide ongoing maintenance, updates, and technical support to keep your CMS website secure, fast, and fully functional even after launch.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "CMS Web Development Services",
        title: "Build a CMS Website That",
        highlight: "You Can Manage Easily",
        description:
          "A CMS allows you to control and manage your website content with little or no coding knowledge. Future IT Touch delivers custom CMS solutions using WordPress, Magento, Shopify, Drupal, and more.",
        image: gm,
        primaryCta: { label: "Start Your CMS Journey", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["100+ CMS Websites Delivered", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Custom CMS Development",
        title: "Building Flexible and Easy-to-Manage",
        highlight: "CMS Websites",
        description:
          "At Future IT Touch Pvt. Ltd. we deliver custom CMS solutions that make website management simple, efficient, and scalable. Our development ensures your content is well-structured, easy to update, and optimized for performance.",
        ctaLabel: "Start Your CMS Journey",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Trusted CMS Development Company",
        title: "Building Flexible & Easy-to-Manage CMS Websites",
        image: image2,
        items: features,
      }}
      benefits={{
        title: "Custom CMS Website Development Services",
        subtitle: "We would be happy to discuss the project with you in person",
        items: businessData,
      }}
      platforms={{
        title: "Our Comprehensive CMS Development Services",
        items: platforms,
      }}
      faq={{
        title: "About CMS Web Development",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Ecommerce;
