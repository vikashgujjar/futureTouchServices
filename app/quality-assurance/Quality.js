import React from "react";
import gm from "../Assets/qa.webp";
import d1 from "../Assets/cr.webp";
import {
  FaShieldAlt,
  FaClipboardCheck,
  FaTools,
  FaHandshake,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import {
  FaFlask,
  FaGlobe,
  FaCloud,
  FaRobot,
  FaCode,
  FaMobileAlt,
  FaComments,
  FaCheckCircle,
  FaTachometerAlt,
  FaPuzzlePiece,
  FaTabletAlt,
} from "react-icons/fa";
import { FaBug, FaUserShield } from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to ensure quality?",
  preTitle: "Deliver",
  highlight: "Bug-Free Software",
  postTitle: "Every Time",
  description:
    "Get a free consultation with our QA experts and discover how we can ensure your applications are flawless before they reach your users.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Functional & regression testing", sub: "Complete feature validation" },
    { label: "Cross-browser & device testing", sub: "Works everywhere seamlessly" },
    { label: "Performance benchmarking", sub: "Speed & load tested" },
    { label: "Security & vulnerability assessment", sub: "Data protection assured" },
    { label: "Detailed QA reports delivered", sub: "Actionable insights included" },
  ],
  cardCta: { label: "Get QA Quote", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Quality = () => {
  const features = [
    {
      title: "Reliable Brand Experience",
      description:
        "We create a trustworthy digital brand experience by ensuring every website and application functions flawlessly. From link validation to spelling accuracy, our QA experts eliminate issues that can harm your brand's credibility.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Comprehensive Quality Assurance",
      description:
        "Quality assurance isn't just testing—it's ensuring usability, reliability, and performance. We make sure every feature works seamlessly so users can confidently engage with your digital platform.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Efficient QA Tools & Automation",
      description:
        "We bring the best QA tools and automation frameworks to make testing more efficient. From automated regression tests to manual validation, we optimize workflows for consistent results.",
      icon: <FaTools />,
    },
    {
      title: "Agency-Focused Testing Approach",
      description:
        "Our team has a proven track record of working with digital agencies, adapting to their workflows, communication styles, and deadlines while maintaining top-notch QA standards.",
      icon: <FaHandshake />,
    },
    {
      title: "Actionable QA Insights",
      description:
        "We translate testing results into actionable insights that development teams can easily implement, bridging the gap between QA findings and technical execution.",
      icon: <FaChartLine />,
    },
    {
      title: "Transparent Cost Estimation",
      description:
        "We provide clear cost estimates for QA and testing phases in upcoming projects, allowing clients to plan accurately while maintaining quality benchmarks.",
      icon: <FaMoneyBillWave />,
    },
  ];

  const businessData = [
    {
      icons: <FaBug className="text-white w-8 h-8" />,
      title: "Comprehensive Testing Process",
      desc: "We conduct end-to-end manual and automated testing to ensure your web applications perform seamlessly, meet all functional requirements, and remain error-free across devices.",
    },
    {
      icons: <FaCogs className="text-white w-8 h-8" />,
      title: "Automation & Performance Testing",
      desc: "Our QA team leverages the latest tools and frameworks to automate testing cycles, improve speed, and validate system performance under various real-world conditions.",
    },
    {
      icons: <FaUserShield className="text-white w-8 h-8" />,
      title: "Security & Usability Assurance",
      desc: "We ensure your digital product is not only secure but also user-friendly. Our QA experts check for data protection, smooth navigation, and overall usability to guarantee a flawless user experience.",
    },
  ];

  const platforms = [
    {
      icon: <FaFlask className="text-white w-6 h-6" />,
      title: "Prototype Testing",
      desc: "We validate early-stage prototypes to identify design and functionality flaws before full-scale development, saving time and cost.",
    },
    {
      icon: <FaGlobe className="text-white w-6 h-6" />,
      title: "Cross-Browser Testing",
      desc: "Ensure your web application performs flawlessly across all major browsers and devices, providing consistent user experiences.",
    },
    {
      icon: <FaCloud className="text-white w-6 h-6" />,
      title: "Cloud-Based Testing",
      desc: "We leverage scalable cloud environments for fast, secure, and collaborative QA execution across multiple test scenarios.",
    },
    {
      icon: <FaRobot className="text-white w-6 h-6" />,
      title: "Test Automation",
      desc: "Accelerate your QA process with automated scripts that ensure repeatable and accurate testing for faster releases.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Web Application Testing",
      desc: "Comprehensive end-to-end testing to identify functional, UI, and performance issues in web-based applications.",
    },
    {
      icon: <FaMobileAlt className="text-white w-6 h-6" />,
      title: "Desktop/Mobile App Testing",
      desc: "Thorough testing of mobile and desktop applications to ensure responsive designs, smooth performance, and minimal crashes.",
    },
    {
      icon: <FaComments className="text-white w-6 h-6" />,
      title: "QA Consulting",
      desc: "Our experts provide strategic QA consultation to improve testing processes, enhance software quality, and reduce risk.",
    },
    {
      icon: <FaCheckCircle className="text-white w-6 h-6" />,
      title: "Functionality & Usability Testing",
      desc: "We assess user workflows, features, and interfaces to ensure your software is functional, intuitive, and user-friendly.",
    },
    {
      icon: <FaTachometerAlt className="text-white w-6 h-6" />,
      title: "Performance Testing",
      desc: "We simulate real-world conditions to ensure your application can handle peak loads and deliver optimal performance.",
    },
    {
      icon: <FaPuzzlePiece className="text-white w-6 h-6" />,
      title: "Integrated Systems Testing",
      desc: "End-to-end system integration testing to verify that all components work seamlessly together in complex architectures.",
    },
    {
      icon: <FaTabletAlt className="text-white w-6 h-6" />,
      title: "Device Compatibility Testing",
      desc: "We test across multiple devices, resolutions, and operating systems to guarantee flawless performance everywhere.",
    },
    {
      icon: <FaShieldAlt className="text-white w-6 h-6" />,
      title: "Security Testing",
      desc: "We identify vulnerabilities and ensure your application is protected against data breaches, malware, and cyber threats.",
    },
  ];

  const faqData = [
    {
      title: "What eCommerce platforms do you develop on?",
      description:
        "We work with major eCommerce platforms including Shopify, Magento, WooCommerce, OpenCart, and PrestaShop. We also build fully custom eCommerce websites for businesses that need tailored features and scalability.",
    },
    {
      title: "Can you create a fully customized online store?",
      description:
        "Yes, our team specializes in building unique and customized eCommerce websites. From design to advanced back-end functionality, we ensure your store reflects your brand identity and delivers an engaging user experience.",
    },
    {
      title: "How do you ensure website security?",
      description:
        "Security is our top priority. We implement SSL encryption, data protection, and follow industry standards like PA-DSS compliance to keep your online store safe from vulnerabilities and cyber threats.",
    },
    {
      title: "Can your websites handle large product inventories?",
      description:
        "Absolutely. Our eCommerce solutions are optimized to manage thousands of products, high traffic, and complex inventory structures while maintaining fast load times and smooth performance.",
    },
    {
      title: "Are your eCommerce websites mobile-friendly?",
      description:
        "Yes, every eCommerce website we create is fully responsive and mobile-first, ensuring an intuitive and seamless shopping experience across smartphones, tablets, and desktops.",
    },
    {
      title: "Do you provide post-launch support and maintenance?",
      description:
        "Yes, we offer 24/7 support and regular maintenance to ensure your website remains secure, updated, and running smoothly. Our team helps with performance optimization, updates, and troubleshooting when needed.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Quality Assurance",
        title: "Flawless Software Through",
        highlight: "Expert QA Testing",
        description:
          "Clients expect their digital agency to guard the reputation of their products. Quality assurance testing protects your brand by ensuring every customer experience is consistently positive.",
        image: gm,
        primaryCta: { label: "Start QA Testing", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["250+ Projects Tested", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Reliable Software Quality Assurance Services",
        title: "Ensuring Excellence Through",
        highlight: "Comprehensive QA and Testing",
        description:
          "At Future IT Touch Pvt. Ltd. we deliver end-to-end Quality Assurance and software testing services to ensure your applications run flawlessly, perform seamlessly, and meet the highest standards of reliability and security.",
        ctaLabel: "Start Your QA and Testing Project",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Trusted Quality Assurance Services",
        title: "Creating Flawless Digital Experiences Through Rigorous Testing",
        image: d1,
        items: features,
      }}
      benefits={{
        title: "Leading QA & Testing Company in India",
        subtitle: "Partner with Us for Flawless Digital Performance",
        items: businessData,
      }}
      platforms={{
        title: "Comprehensive QA & Testing Solutions",
        items: platforms,
      }}
      faq={{
        title: "About Quality Assurance & Testing",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Quality;
