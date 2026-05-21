"use client";
import React from "react";
import devops from "../Assets/digitalmarketing.webp";
import service1 from "../Assets/seoOne.webp";
import {
  FaChartLine,
  FaGlobe,
  FaMoneyBillWave,
  FaUsers,
  FaBullhorn,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import { FaLightbulb, FaHandshake, FaCogs } from "react-icons/fa";
import {
  FaShareAlt,
  FaDollarSign,
  FaFileAlt,
  FaEnvelope,
  FaStar,
} from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to grow your business online?",
  preTitle: "Launch Digital Marketing That",
  highlight: "Drives Real Results",
  postTitle: "",
  description:
    "Get a free digital marketing consultation and discover how our data-driven strategies can increase your leads, sales, and revenue.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Proven ROI"],
  cardItems: [
    { label: "Custom digital strategy", sub: "Tailored to your business goals" },
    { label: "SEO & PPC campaigns", sub: "Maximize your search visibility" },
    { label: "Social media marketing", sub: "Engage your target audience" },
    { label: "Monthly analytics reports", sub: "Track every rupee spent" },
    { label: "Dedicated account manager", sub: "Your success is our priority" },
  ],
  cardCta: { label: "Request A Quote", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Marketing = () => {
  const features = [
    {
      title: "Data-Driven Strategy & Analytics",
      description:
        "We craft digital strategies backed by valuable data and analytics. Using advanced tools, we analyze your audience, competitors, and market trends to create campaigns that deliver measurable results and maximum ROI.",
      icon: <FaChartLine />,
    },
    {
      title: "Global Digital Reach",
      description:
        "Our digital marketing services expand your brand's online visibility across search engines, social media, and digital platforms — reaching your target audience wherever they are and driving qualified traffic to your business.",
      icon: <FaGlobe />,
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "Digital marketing is significantly more cost-effective than traditional marketing. We deliver more leads, sales, and revenue within your budget, ensuring every rupee spent generates a strong return for your business.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Audience Targeting & Segmentation",
      description:
        "We identify and target your ideal customers with precision. Through audience segmentation, behavioral data, and targeted campaigns, we ensure your marketing message reaches the right people at the right time.",
      icon: <FaUsers />,
    },
    {
      title: "Brand Reputation & Trust Building",
      description:
        "We build your brand's online reputation through strategic content, reviews management, and consistent messaging — earning people's trust and turning your brand into a credible authority in your industry.",
      icon: <FaBullhorn />,
    },
    {
      title: "Improved Search Visibility",
      description:
        "From on-page SEO to technical optimization and link building, we improve your search engine rankings to ensure your business is found by customers actively searching for your products or services.",
      icon: <FaSearch />,
    },
    {
      title: "Higher ROI from Campaigns",
      description:
        "Every campaign we run is optimized for maximum return. By continuously testing, analyzing, and refining our approach, we ensure your marketing budget delivers higher revenues and better ROI over time.",
      icon: <FaShieldAlt />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Custom Digital Strategy",
      desc: "As a towering Digital Marketing Agency in Chandigarh, we move clients from mere digital tactics to a well-crafted digital strategy, ensuring every campaign is purposeful and results-driven.",
    },
    {
      icons: <FaCogs className="text-white w-8 h-8" />,
      title: "Innovative Campaign Execution",
      desc: "Our trust levels are a direct result of unwavering commitment to innovative ideas, quality work, and time-bound deadlines — delivering all-encompassing digital marketing campaigns that perform.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Unbiased Expert Judgment",
      desc: "Our clients have realized our digital agency is capable of unbiased judgment when creating and launching campaigns — always prioritizing your business growth above all else.",
    },
  ];

  const platforms = [
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Search Engine Optimization",
      desc: "If you are looking to grow your business nationwide, our advanced skillset can deliver just that. With high-end tools and proven processes, we help you generate a strong market position and drive more conversions.",
    },
    {
      icon: <FaShareAlt className="text-white w-6 h-6" />,
      title: "Social Media Marketing",
      desc: "The social media is a powerful platform to reach your prospective customers. More than 70% of people are daily active on leading platforms like Facebook, Instagram, Twitter, and LinkedIn.",
    },
    {
      icon: <FaDollarSign className="text-white w-6 h-6" />,
      title: "Pay Per Click (PPC)",
      desc: "Cost-effective and measurable PPC marketing is a powerful way to instantly improve your online visibility. Our result-driven PPC service ensures you get the highest returns from your campaigns.",
    },
    {
      icon: <FaFileAlt className="text-white w-6 h-6" />,
      title: "Content Marketing",
      desc: "Our creative content marketing services are SEO-centric, ROI-focused, and customer-driven. We create a well-defined, goal-oriented strategy before plunging into full-fledged content development and marketing.",
    },
    {
      icon: <FaEnvelope className="text-white w-6 h-6" />,
      title: "Email Marketing",
      desc: "We design and execute targeted email marketing campaigns that nurture leads, re-engage customers, and drive conversions — delivering personalized messages that resonate with your audience.",
    },
    {
      icon: <FaStar className="text-white w-6 h-6" />,
      title: "Online Reputation Management",
      desc: "We monitor and manage your brand's online reputation, responding to reviews and building a positive digital presence that builds trust, credibility, and long-term customer loyalty.",
    },
  ];

  const faqData = [
    {
      title: "What digital marketing services do you offer?",
      description:
        "We offer SEO, social media marketing, PPC advertising, content marketing, email marketing, and online reputation management — providing a complete suite of digital marketing solutions.",
    },
    {
      title: "How long does it take to see results from digital marketing?",
      description:
        "Results vary by channel. SEO typically shows results in 3–6 months, while PPC can deliver immediate traffic. We provide regular reports so you can track progress and ROI from day one.",
    },
    {
      title: "Do you provide custom digital marketing strategies?",
      description:
        "Absolutely! We create tailored digital marketing strategies based on your industry, target audience, and business goals — ensuring every campaign is relevant, targeted, and effective.",
    },
    {
      title: "Can you help improve our search engine rankings?",
      description:
        "Yes, our SEO experts use proven on-page, off-page, and technical SEO techniques to improve your search rankings and drive organic traffic to your website consistently.",
    },
    {
      title: "Do you manage social media accounts?",
      description:
        "Yes, we offer complete social media management including content creation, scheduling, community management, and paid advertising across all major social media platforms.",
    },
    {
      title: "Do you provide performance reports and analytics?",
      description:
        "Yes, we provide detailed monthly performance reports covering traffic, leads, conversions, and ROI metrics — ensuring you always have a clear picture of how your campaigns are performing.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Professional Digital Marketing Services",
        title: "Grow Your Business with Results-Driven ",
        highlight: "Digital Marketing",
        description:
          "As a towering Digital Marketing Agency in Chandigarh, Future IT Touch ensures clients move from mere digital tactics to a well-crafted strategy — delivering innovative campaigns, quality work, and time-bound results.",
        image: devops,
        primaryCta: { label: "Request A Quote", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["800+ Campaigns Delivered", "15+ Years Expertise", "95% Repeat Business"],
      }}
      intro={{
        badge: "Digital Marketing Services for Growing Companies",
        title: "More Leads. More Sales.",
        highlight: "More Revenue.",
        description:
          "At Future IT Touch Pvt. Ltd. we help your business impact the metrics that matter most — from traffic to revenue. With custom strategies and data-driven insights, your digital presence will work harder for you.",
        ctaLabel: "Request A Quote",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Proven Digital Marketing Agency",
        title: "Online Marketing Services Proven to Increase Leads, Sales & Revenue",
        image: service1,
        items: features,
      }}
      benefits={{
        title: "Leading Digital Marketing Agency in India",
        subtitle: "Innovative Campaigns. Measurable Results. Trusted Expertise.",
        items: businessData,
      }}
      platforms={{
        title: "Digital Marketing Services We Offer",
        items: platforms,
      }}
      faq={{
        title: "About Digital Marketing Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Marketing;
