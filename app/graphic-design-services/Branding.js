import React from "react";
import devops from "../Assets/graphic-design.webp";
import brand from "../Assets/branding-.webp";
import {
  FaPaintBrush,
  FaBoxOpen,
  FaFolderOpen,
  FaShareAlt,
  FaIdCard,
  FaBuilding,
  FaImages,
} from "react-icons/fa";
import { FaLightbulb, FaHandshake, FaCogs } from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready for stunning graphic design?",
  preTitle: "Design Graphics That",
  highlight: "Captivate & Communicate",
  postTitle: "",
  description:
    "Get a free design consultation and discover how our creative team can craft professional graphic designs that make your brand stand out from the crowd.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "3 revision rounds"],
  cardItems: [
    { label: "Creative concept development", sub: "Unique to your brand" },
    { label: "High-resolution file delivery", sub: "AI, PNG, SVG & PDF formats" },
    { label: "Multiple revision rounds", sub: "Until you're 100% happy" },
    { label: "Print & digital formats", sub: "Ready for all platforms" },
    { label: "Commercial license included", sub: "Own your designs outright" },
  ],
  cardCta: { label: "Request A Quote", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Branding = () => {
  const features = [
    {
      title: "Logo Design",
      description:
        "A logo is considered to be a brand's silent ambassador. Our experienced graphic designers create logos that build instant brand recognition and deliver your message spontaneously — making a strong market appeal.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Business Stationery Design",
      description:
        "The right design on corporate stationery creates a professional impression. Our expertise as a leading graphic design company has elevated many brands with creative stationery designs that reinforce brand identity.",
      icon: <FaIdCard />,
    },
    {
      title: "Brochure & Print Design",
      description:
        "Our compelling brochure designs capture attention, ensure visibility, and create excellent brand recall with clean layouts, great images, and innovative ideas that communicate your message clearly.",
      icon: <FaFolderOpen />,
    },
    {
      title: "Social Media Post Design",
      description:
        "Our visually-arresting social media posts boost engagement and brand recall. We design impactful, witty, and topical posts that stand out in crowded feeds and strengthen your social media presence.",
      icon: <FaShareAlt />,
    },
    {
      title: "Packaging Design",
      description:
        "We create eye-catching packaging designs that attract customers, communicate your product's value, and stand out on shelves. Our packaging solutions combine creativity, functionality, and brand alignment.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Corporate Branding",
      description:
        "We develop comprehensive corporate branding solutions that maintain visual consistency across all materials — from business cards and letterheads to presentations and marketing collateral.",
      icon: <FaBuilding />,
    },
    {
      title: "Digital Graphic Assets",
      description:
        "We create high-resolution digital graphics, banners, infographics, and visual assets for websites, email campaigns, and online advertising — ensuring your brand looks professional everywhere.",
      icon: <FaImages />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creative Graphic Concepts",
      desc: "Simplicity, creativity, a dash of humor, and good typography are essential elements of our graphic designs. We infuse fun and colors to ensure every design carries a clear, impactful message.",
    },
    {
      icons: <FaCogs className="text-white w-8 h-8" />,
      title: "Advanced Design Tools",
      desc: "We use advanced graphic designing tools to create impressive ideas. Vibrant, high-resolution visuals and explanatory graphics help your customers better understand your products and services.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Client-Focused Collaboration",
      desc: "We invest our creativity, innovative minds, and technology to attain your graphic design requirements — working closely with you to ensure every design reflects your vision and brand identity.",
    },
  ];

  const platforms = [
    {
      icon: <FaPaintBrush className="text-white w-6 h-6" />,
      title: "Logo Designing",
      desc: "We create memorable logos that build instant brand recognition and deliver your message effectively — combining symbolism, typography, and color to craft a unique visual identity for your business.",
    },
    {
      icon: <FaIdCard className="text-white w-6 h-6" />,
      title: "Business Stationery Design",
      desc: "The right stationery design creates a professional impression. We design letterheads, business cards, envelopes, and office materials that reinforce your brand identity consistently.",
    },
    {
      icon: <FaFolderOpen className="text-white w-6 h-6" />,
      title: "Brochure Design",
      desc: "Our compelling brochure designs capture attention and create excellent brand recall with clean layouts, great images, and innovative ideas that communicate your message clearly and professionally.",
    },
    {
      icon: <FaShareAlt className="text-white w-6 h-6" />,
      title: "Social Media Post Design",
      desc: "We design visually-arresting social media posts that boost engagement and brand recall — creating impactful, on-brand visuals for Facebook, Instagram, LinkedIn, and more.",
    },
    {
      icon: <FaBoxOpen className="text-white w-6 h-6" />,
      title: "Packaging & Product Design",
      desc: "We create packaging designs that attract customers and communicate your product's value. Our solutions combine creativity, functionality, and brand consistency to make your products stand out.",
    },
    {
      icon: <FaImages className="text-white w-6 h-6" />,
      title: "Digital Banners & Ads",
      desc: "We design professional digital banners, infographics, and ad creatives for online advertising, email marketing, and website visuals — ensuring a strong and consistent brand presence online.",
    },
  ];

  const faqData = [
    {
      title: "What graphic design services do you offer?",
      description:
        "We offer logo design, business stationery, brochure design, social media post design, packaging design, corporate branding, and digital graphic assets for all your visual communication needs.",
    },
    {
      title: "Can you create custom graphic designs for my business?",
      description:
        "Absolutely! Every design is uniquely crafted to match your brand personality, values, and target audience. We ensure originality, creativity, and professional quality in every project we deliver.",
    },
    {
      title: "What file formats do you deliver the designs in?",
      description:
        "We deliver designs in all standard formats including AI, EPS, PDF, PNG, JPEG, and SVG — ensuring your designs are ready for both print and digital use across all platforms.",
    },
    {
      title: "How many revision rounds do you provide?",
      description:
        "We provide multiple revision rounds to ensure complete client satisfaction. Our collaborative process includes regular feedback sessions to refine the design until it perfectly meets your expectations.",
    },
    {
      title: "Can you redesign or refresh existing graphic designs?",
      description:
        "Definitely! We can refresh your current branding materials — from logos and stationery to social media visuals — making them more modern, professional, and aligned with your evolving brand identity.",
    },
    {
      title: "Do you provide ongoing graphic design support?",
      description:
        "Yes, we offer continuous graphic design support for ongoing marketing campaigns, new product launches, seasonal promotions, and any new visual assets your business requires.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Graphic Design Services",
        title: "Design Graphics That Give You",
        highlight: "The Design Edge",
        description:
          "Simplicity, creativity, a dash of humor, and good typography are essential elements of graphic designs at Future IT Touch Pvt. Ltd. As a leading Graphic Designing Company in Chandigarh, we ensure every design carries a clear, powerful message.",
        image: devops,
        primaryCta: { label: "Request A Quote", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["800+ Designs Delivered", "15+ Years Expertise", "400+ Happy Clients"],
      }}
      intro={{
        badge: "Custom Graphic Design Services",
        title: "Advanced Graphic Designing Tools to",
        highlight: "Create Impressive Ideas",
        description:
          "At Future IT Touch Pvt. Ltd. we invest creativity, innovation, and technology into every design. Vibrant visuals and engaging graphics help potential customers understand your products and services at a glance.",
        ctaLabel: "Request A Quote",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Leading Graphic Design Company in Chandigarh",
        title: "Graphic Design Services We Offer for Your Business",
        image: brand,
        items: features,
      }}
      benefits={{
        title: "Top Graphic Design Company in India",
        subtitle: "Creating Designs That Communicate, Captivate & Convert",
        items: businessData,
      }}
      platforms={{
        title: "Graphic Design Solutions We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About Graphic Design Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Branding;
