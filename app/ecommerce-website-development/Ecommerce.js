import React from "react";
import ecc from "../Assets/ecc.svg";
import image1 from "../Assets/SIT.webp";
import { FaShoppingCart, FaPaintBrush, FaClock } from "react-icons/fa";
import {
  FaMagento,
  FaWordpress,
  FaShopify,
  FaOpencart,
  FaCogs,
  FaServer,
} from "react-icons/fa";
import {
  FaSitemap,
  FaImages,
  FaLock,
  FaFilter,
  FaShippingFast,
  FaBoxes,
  FaChartLine,
} from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to launch your online store?",
  preTitle: "Build an eCommerce Store That",
  highlight: "Sells 24/7",
  postTitle: "",
  description:
    "Get a free consultation with our eCommerce experts and discover how we can build a high-converting online store tailored to your business.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results in 30 days"],
  cardItems: [
    { label: "Custom responsive design", sub: "Mobile, tablet & desktop" },
    { label: "SEO-ready architecture", sub: "Built for Google from day 1" },
    { label: "Secure payment gateway", sub: "Multiple payment options" },
    { label: "Inventory management", sub: "Easy admin dashboard" },
    { label: "30-day post-launch support", sub: "We stay with you after go-live" },
  ],
  cardCta: { label: "Start Your eCommerce Project", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Ecommerce = () => {
  const features = [
    {
      title: "Easy Navigation & Engaging Interface",
      description:
        "We design intuitive navigation structures and engaging user interfaces that allow visitors to browse effortlessly. A seamless navigation system not only improves the shopping experience but also ensures customers spend more time exploring your products, ultimately driving higher conversions.",
      icon: <FaSitemap />,
    },
    {
      title: "Multiple Product Images",
      description:
        "Visual appeal is critical in eCommerce. By offering multiple product images from different angles, customers get a realistic sense of your products. This increases trust and reduces return rates, ensuring buyers feel confident in their purchase decisions.",
      icon: <FaImages />,
    },
    {
      title: "Quick & Secure Checkout",
      description:
        "A smooth and secure checkout process is at the heart of a successful online store. We implement fast, one-page checkouts with trusted payment gateways, SSL encryption, and multiple payment options to ensure that customers complete their purchases without hesitation.",
      icon: <FaLock />,
    },
    {
      title: "Categories & Filters",
      description:
        "Advanced categorization and filtering options help users quickly locate products they're interested in. By creating smart product taxonomies and layered navigation, we make shopping intuitive and efficient for your customers.",
      icon: <FaFilter />,
    },
    {
      title: "Seamless Order Tracking",
      description:
        "Customers can track their orders in real time, from purchase confirmation to delivery. A transparent and accessible order tracking system builds trust, reduces customer service queries, and improves overall satisfaction.",
      icon: <FaShippingFast />,
    },
    {
      title: "Easy Order & Inventory Management",
      description:
        "Our admin-friendly dashboard allows you to manage orders, update product attributes, configure tax and shipping rules, apply discounts, and monitor stock levels with ease. With seamless automation, you save time and focus more on growing your business.",
      icon: <FaBoxes />,
    },
    {
      title: "Analytics & Insights",
      description:
        "We integrate powerful analytics tools that provide actionable insights into your eCommerce performance. From conversion tracking to sales trends and customer behavior analysis, you'll have the data you need to make informed business decisions and maximize ROI.",
      icon: <FaChartLine />,
    },
  ];

  const businessData = [
    {
      icons: <FaShoppingCart className="text-white w-8 h-8" />,
      title: "Specialized in eCommerce",
      desc: "Out of the wide range of services we provide, eCommerce web development is our specialization. We build online stores that are fast, secure, and optimized for conversions.",
    },
    {
      icons: <FaPaintBrush className="text-white w-8 h-8" />,
      title: "Innovative Designs",
      desc: "Our innovative eCommerce developers ensure your website stays up-to-date with the latest design trends, creating an engaging and seamless user experience for your customers.",
    },
    {
      icons: <FaClock className="text-white w-8 h-8" />,
      title: "On-Time Delivery",
      desc: "As a top eCommerce website design company, we ensure timely delivery of your online store, meeting deadlines without compromising on quality or performance.",
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
        badge: "eCommerce Website Development",
        title: "Build Online Stores That",
        highlight: "Drive Sales",
        description:
          "Planning to expand your business online? Future IT Touch delivers results-driven eCommerce websites with rich UI, payment gateway integration, advanced security, and easy inventory management.",
        image: ecc,
        primaryCta: { label: "Start Your eCommerce Journey", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["250+ Stores Delivered", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Trusted eCommerce Website Development",
        title: "Building Engaging",
        highlight: "Online Storefronts",
        description:
          "At Future IT Touch Pvt. Ltd. we specialize in creating eCommerce websites that deliver seamless user experiences and powerful management features for businesses worldwide.",
        ctaLabel: "Start Your eCommerce Journey",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Trusted eCommerce Development Company",
        title: "Creating Online Stores That Engage & Convert",
        image: image1,
        items: features,
      }}
      benefits={{
        title: "Leading eCommerce Website Design Company in India",
        subtitle: "Partner with Us for Growth & Innovation",
        items: businessData,
      }}
      platforms={{
        title: "eCommerce Platforms We Specialize In",
        items: platforms,
      }}
      faq={{
        title: "About eCommerce Website Development",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Ecommerce;
