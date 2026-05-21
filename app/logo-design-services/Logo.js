import React from "react";
import gm from "../Assets/logo-1.webp";
import d1 from "../Assets/graphic-and-logo-design-service.webp";
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
  badge: "Ready for a memorable logo?",
  preTitle: "Create a Logo That",
  highlight: "Defines Your Brand",
  postTitle: "",
  description:
    "Get a free design consultation and discover how our experienced logo designers can craft a unique visual identity for your business.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "3 revision rounds"],
  cardItems: [
    { label: "Custom logo concept", sub: "Unique to your brand identity" },
    { label: "Multiple design variations", sub: "Choose the best direction" },
    { label: "All file formats (AI, PNG, SVG)", sub: "Print & digital ready" },
    { label: "Brand color palette included", sub: "Consistent visual identity" },
    { label: "Commercial license included", sub: "Own your logo outright" },
  ],
  cardCta: { label: "Design Your Logo", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Logo = () => {
  const features = [
    {
      title: "Custom Business Logo Design",
      description:
        "We create fully customized logos that perfectly capture your business identity. Each design incorporates thoughtful color schemes, typography, and symbolic elements that align with your brand values and target audience. Our goal is to craft a logo that not only stands out visually but also communicates your brand story and helps establish a strong market presence.",
      icon: <FaBuilding />,
    },
    {
      title: "Icon & Symbol Design",
      description:
        "Our designers specialize in crafting memorable icons and symbols that serve as visual shorthand for your brand. By combining creativity with brand insights, we design symbols that are simple yet highly impactful, making your brand instantly recognizable across digital and print media.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Typography & Calligraphy Logos",
      description:
        "Typography and calligraphy logos are designed to give your brand a unique personality. We carefully select fonts, lettering styles, and artistic flourishes that reflect your brand's tone, whether elegant, modern, playful, or professional. Every curve, spacing, and stroke is considered to ensure the logo communicates the intended message effectively.",
      icon: <FaChartLine />,
    },
    {
      title: "Brand Mascot Logos",
      description:
        "Brand mascot logos are an excellent way to build emotional connections with your audience. We create distinctive mascots that embody your brand's values, personality, and story. These characters can be used in marketing campaigns, merchandise, and social media, helping your brand stand out in a crowded market.",
      icon: <FaBookOpen />,
    },
    {
      title: "Lettermark & Monogram Logos",
      description:
        "Lettermark and monogram logos are minimalistic yet powerful ways to represent your brand. We craft these logos using initials or short letter combinations, focusing on clean, sophisticated designs that convey professionalism and elegance — ideal for luxury brands, corporate identities, and personal brands.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Emblem & Badge Logos",
      description:
        "Emblem and badge logos are classic designs that convey authority, credibility, and heritage. We design logos that combine text and symbols into a cohesive unit, perfect for institutions, schools, government bodies, and formal organizations — communicating reliability and timeless professionalism.",
      icon: <FaFileAlt />,
    },
    {
      title: "Rebranding & Logo Refresh",
      description:
        "Rebranding and logo refresh services help established brands revitalize their visual identity for modern audiences. We analyze your existing brand image and craft updated logos that retain brand recognition while enhancing relevance, appeal, and versatility for current and future customers.",
      icon: <FaFolderOpen />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creative Logo Concepts",
      desc: "We craft innovative logo concepts that reflect your brand's personality and values, making sure your logo stands out and leaves a lasting impression on your audience.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Custom Typography & Design",
      desc: "Our designers blend custom typography, colors, and graphical elements to create logos that are visually striking, professional, and perfectly aligned with your brand identity.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Logo Design",
      desc: "We work closely with you throughout the design journey, incorporating feedback and insights to ensure your logo captures your vision and effectively communicates your brand story.",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Creative Logo Concepts",
      desc: "We develop unique logo concepts that capture your brand essence, combining symbolism, typography, and colors to create visually compelling designs that stand out in the market.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Custom Typography & Iconography",
      desc: "Our designers craft tailored typography and icons for each logo, ensuring that every element aligns with your brand identity and communicates your message effectively.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Versatile & Scalable Designs",
      desc: "We create logos that work seamlessly across digital and print mediums — from websites and social media to business cards and signage — maintaining clarity and impact at any size.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Brand Identity Integration",
      desc: "Our logo designs are integrated into your overall brand strategy, ensuring consistency with colors, fonts, and visual messaging to strengthen brand recognition.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Rebranding & Logo Refresh",
      desc: "We offer expert logo redesigns and rebranding services to modernize your visual identity while maintaining brand recall and appeal for existing and new audiences.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Quality & Satisfaction Guarantee",
      desc: "Every logo goes through thorough quality checks and client feedback rounds to ensure the final design meets your expectations and effectively represents your brand.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Logo Design?",
      description:
        "Our services cover logo concept creation, typography and iconography design, brand identity integration, versatile and scalable designs, and rebranding support to deliver professional, memorable logos.",
    },
    {
      title: "Can you create custom logos for my business?",
      description:
        "Absolutely! Every logo is uniquely crafted to match your business goals, brand personality, and target audience. We ensure the design is original, visually appealing, and aligned with your brand message.",
    },
    {
      title: "Do you provide logos suitable for both digital and print?",
      description:
        "Yes, we design logos that are optimized for all platforms, including websites, social media, business cards, packaging, and large-scale prints, ensuring consistent quality and visual impact.",
    },
    {
      title: "Can you refresh or redesign my existing logo?",
      description:
        "Definitely! We provide rebranding and logo refresh services to modernize your logo while maintaining brand recognition and enhancing its appeal to current and new audiences.",
    },
    {
      title: "How do you ensure logo design quality?",
      description:
        "Our process includes detailed brand analysis, multiple design concepts, iterative client feedback, and quality assurance checks to deliver logos that are professional, impactful, and on-brand.",
    },
    {
      title: "Do you offer ongoing support after logo delivery?",
      description:
        "Yes, we provide ongoing support including logo file updates, revisions, brand guidelines assistance, and guidance on how to maintain consistency across all digital and print materials.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Logo Design Services",
        title: "Design a Logo That",
        highlight: "Defines Your Brand",
        description:
          "A well-designed logo facilitates brand recognition. Our experienced logo designers know how to deliver a memorable logo that noticeably stands out — building a unique identity for your business.",
        image: gm,
        primaryCta: { label: "Design Your Logo", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["1000+ Logos Designed", "15+ Years Expertise", "99% Satisfaction"],
      }}
      intro={{
        badge: "Professional & Creative Logo Design Services",
        title: "Designing Logos That Inspire a",
        highlight: "Unique Brand Vision",
        description:
          "At Future IT Touch Pvt. Ltd. we go beyond templates to craft logos that truly reflect your brand's identity. A well-designed logo evokes emotions, builds recall, and helps grow your customer base.",
        ctaLabel: "Design Your Logo Today",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Creative Logo Design Services",
        title: "Transforming Brand Identities into Memorable Logos",
        image: d1,
        items: features,
      }}
      benefits={{
        title: "Professional Logo Design Company in India",
        subtitle: "Crafting Logos That Inspire, Engage & Build Brand Identity",
        items: businessData,
      }}
      platforms={{
        title: "Logo Design Solutions We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About Our Logo Design Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Logo;
