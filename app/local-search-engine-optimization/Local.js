import React from "react";
import cwd from "../Assets/loc.webp";
import image2 from "../Assets/lss.webp";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import {
  FaBuilding,
  FaBoxOpen,
  FaLayerGroup,
  FaFileAlt,
  FaFolderOpen,
  FaBookOpen,
} from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaLightbulb, FaHandshake } from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to attract local customers?",
  preTitle: "Dominate",
  highlight: "Local Search Results",
  postTitle: "",
  description:
    "Get a free local SEO audit and discover how we can help your business rank higher in local searches and attract more nearby customers.",
  primaryCta: { label: "Get Free Local SEO Audit", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free audit", "Results in 90 days"],
  cardItems: [
    { label: "Google My Business optimization", sub: "Show up in local maps" },
    { label: "Local citation building", sub: "Consistent NAP across directories" },
    { label: "Local keyword optimization", sub: "Rank for nearby searches" },
    { label: "Review management strategy", sub: "Build your local reputation" },
    { label: "Monthly performance reports", sub: "Track every local ranking gain" },
  ],
  cardCta: { label: "Start Your Local SEO Campaign", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Local = () => {
  const features = [
    {
      title: "Local SEO Audit & Strategy",
      description:
        "We analyze your business's local search presence and develop a tailored SEO strategy. By optimizing for location-based keywords, competitor insights, and audience behavior, we ensure your business ranks higher in local search results and attracts nearby customers.",
      icon: <FaBuilding />,
    },
    {
      title: "Google Business Profile Optimization",
      description:
        "Our team optimizes your Google Business Profile to improve visibility on Google Maps and local search results. From updating business info to adding images and posts, we ensure your profile drives clicks, calls, and visits.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Local Keyword & Content Optimization",
      description:
        "We target location-specific keywords and optimize website content to appear in local searches. By combining relevant local content, meta tags, and on-page SEO best practices, we increase your visibility and attract local customers actively searching for your services.",
      icon: <FaChartLine />,
    },
    {
      title: "Local Link Building & Citations",
      description:
        "We build high-quality local backlinks and citations across relevant directories to enhance your domain authority and local search rankings. This strengthens your online credibility and helps customers find your business easily.",
      icon: <FaBookOpen />,
    },
    {
      title: "Review & Reputation Management",
      description:
        "We help you manage online reviews and reputation to build trust and credibility. Our strategies encourage positive reviews, respond to customer feedback, and maintain a strong local presence that influences buying decisions.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Analytics & Performance Tracking",
      description:
        "We monitor your local SEO campaigns using metrics like search rankings, website traffic, and leads. Insights are used to refine strategies, optimize efforts, and ensure your business achieves maximum results in local search.",
      icon: <FaFileAlt />,
    },
    {
      title: "Local SEO Refresh & Optimization",
      description:
        "For businesses looking to improve local search visibility, we refresh and optimize existing SEO efforts. From website updates to citation corrections, we ensure your local presence remains strong, competitive, and effective.",
      icon: <FaFolderOpen />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Local SEO Strategy",
      desc: "We design customized local SEO strategies to help your business appear in nearby search results, increasing foot traffic, calls, and leads from customers in your area.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Website & Content Optimization",
      desc: "Our team optimizes your website content, meta tags, and location pages to ensure your business ranks higher for local searches and reaches customers searching for your products or services nearby.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Local SEO Process",
      desc: "We work closely with your team to understand your business locations, services, and target audience, ensuring our local SEO efforts align with your goals and deliver measurable results.",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Local SEO Audits & Strategy",
      desc: "We perform detailed local SEO audits and develop tailored strategies to improve your visibility in location-based searches and attract nearby customers.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Google Business Profile Optimization",
      desc: "We optimize your Google Business Profile for maps and search, ensuring your business appears accurately and prominently in local searches.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Local Content & Keyword Optimization",
      desc: "We enhance website content and target local keywords to improve search rankings, making it easier for nearby customers to find your products or services.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Local Link Building & Citations",
      desc: "We build quality local backlinks and citations across relevant directories to improve your domain authority and search visibility in local searches.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Review & Reputation Management",
      desc: "We monitor and manage online reviews to build trust and credibility, encouraging positive feedback and fostering strong local customer relationships.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Analytics & Continuous Optimization",
      desc: "We track local SEO performance using analytics, refining strategies to ensure sustained visibility, higher rankings, and increased local engagement.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Local SEO?",
      description:
        "Our services include local SEO audits, Google Business Profile optimization, location-based content, citation building, review management, and continuous analytics monitoring to improve local search performance.",
    },
    {
      title: "Can you optimize my business for local searches?",
      description:
        "Absolutely! We customize strategies to improve your local search rankings, ensuring customers nearby can easily find your business and engage with your services.",
    },
    {
      title: "Do you manage Google Maps and local listings?",
      description:
        "Yes, we optimize and manage your listings on Google Maps and other local directories to improve visibility, accuracy, and trust with potential customers in your area.",
    },
    {
      title: "Can you help my existing website rank locally?",
      description:
        "Definitely! We optimize your website, content, and local pages to rank higher in search results for relevant local keywords, driving targeted traffic and conversions.",
    },
    {
      title: "How do you track the success of local SEO campaigns?",
      description:
        "We track metrics such as local search rankings, traffic from local searches, leads generated, and customer engagement to measure campaign success and refine strategies accordingly.",
    },
    {
      title: "Do you provide ongoing local SEO support?",
      description:
        "Yes, we offer continuous support including campaign updates, optimization, reporting, and strategic adjustments to maintain and improve your local search visibility over time.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Local SEO Services",
        title: "Attract Nearby Customers with",
        highlight: "Local SEO",
        description:
          "With 46% of all Google searches featuring a local intent, Future IT Touch helps your business rank higher in local results — driving foot traffic, calls, and conversions from customers nearby.",
        image: cwd,
        primaryCta: { label: "Improve Local Visibility", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["1000+ Listings Optimized", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Professional & Result-Oriented Local SEO Services",
        title: "Optimizing Your Local Presence to",
        highlight: "Attract Nearby Customers",
        description:
          "At Future IT Touch Pvt. Ltd. we create comprehensive local SEO strategies that help your business rank higher in local searches, attract relevant customers, and drive conversions.",
        ctaLabel: "Improve Your Local Search Visibility Today",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Result-Oriented Local SEO Services",
        title: "Boosting Your Online Presence to Drive Local Customers",
        image: image2,
        items: features,
      }}
      benefits={{
        title: "Professional Local SEO Company in India",
        subtitle: "Boosting Local Visibility to Attract Nearby Customers",
        items: businessData,
      }}
      platforms={{
        title: "Local SEO Solutions We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About Our Local SEO Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Local;
