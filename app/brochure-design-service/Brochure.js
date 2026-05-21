import React from "react";
import gm from "../Assets/bb.gif";
import d1 from "../Assets/bro.gif";
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
  badge: "Ready for a stunning brochure?",
  preTitle: "Design Brochures That",
  highlight: "Attract & Convert",
  postTitle: "",
  description:
    "Get a free design consultation and discover how our creative team can craft professional brochures that make your brand unforgettable.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "3 revision rounds"],
  cardItems: [
    { label: "Custom brochure concept", sub: "Unique to your brand" },
    { label: "Print-ready files delivered", sub: "CMYK & bleed-ready" },
    { label: "Multiple revision rounds", sub: "Until you're 100% happy" },
    { label: "Digital PDF version", sub: "Share online effortlessly" },
    { label: "Commercial license included", sub: "Own your designs outright" },
  ],
  cardCta: { label: "Design Your Brochure", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Brochure = () => {
  const features = [
    {
      title: "Company Brochure Design",
      description:
        "We design professional company brochures that create a lasting impression and elevate your brand's visibility in the market with clean, creative layouts.",
      icon: <FaBuilding />,
    },
    {
      title: "Product Catalog Design",
      description:
        "Our eye-catching product catalogs showcase your entire product range, emphasizing features and benefits in a well-structured, visually appealing format.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Sales Brochure Design",
      description:
        "Boost your conversions with sales brochures that highlight new products, offers, or promotional events in an engaging and persuasive way.",
      icon: <FaChartLine />,
    },
    {
      title: "Bi-Fold Brochure Design",
      description:
        "We create elegant bi-fold brochures with 4 panels — perfect for concise presentations that balance visuals and key information effectively.",
      icon: <FaBookOpen />,
    },
    {
      title: "Tri-Fold Brochure Design",
      description:
        "Our tri-fold brochures feature 6 panels, giving you ample space to showcase your content in a neat, organized, and professional structure.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Gate Fold Brochure Design",
      description:
        "Designed for high-end marketing campaigns, our gate fold brochures open up with sophistication — making your message stand out instantly.",
      icon: <FaFileAlt />,
    },
    {
      title: "Insert & Folder Brochure Design",
      description:
        "We craft practical insert and folder brochures with pockets for product sheets or offers — ideal for corporate presentations and events.",
      icon: <FaFolderOpen />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creative Brochure Concepts",
      desc: "We design visually stunning and concept-driven brochures that effectively capture your brand essence and engage your target audience with clarity and impact.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Custom Layout & Design",
      desc: "Our experts craft unique brochure layouts, blending colors, typography, and imagery to create professional designs tailored to your business goals.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Design Process",
      desc: "We work hand-in-hand with clients throughout the design journey to ensure every brochure reflects your brand personality and marketing objectives perfectly.",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Brochure Concept & Design",
      desc: "We create visually appealing brochure concepts that reflect your brand identity and convey your message clearly to engage your target audience effectively.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Layout & Visual Planning",
      desc: "Our team designs detailed layouts and mockups for each brochure, ensuring proper alignment of visuals, typography, and content for maximum readability and impact.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Custom Illustrations & Graphics",
      desc: "We craft high-quality graphics, icons, and illustrations to enhance your brochure's visual appeal and make your message more engaging and memorable.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Print-Ready Design",
      desc: "We prepare your brochures with professional print standards, color calibration, and formats to ensure they look perfect in both digital and physical formats.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Marketing & Promotional Brochures",
      desc: "We design brochures tailored for promotions, campaigns, and events, helping your business communicate offers and messages clearly and persuasively.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Performance & Quality Assurance",
      desc: "We review every brochure for design quality, accuracy, and branding consistency to ensure your final product meets your business goals and audience expectations.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Brochure Design?",
      description:
        "Our services include concept creation, layout design, custom graphics, typography, print-ready preparation, and digital adaptation to deliver professional and visually engaging brochures.",
    },
    {
      title: "Can you customize brochures for my business?",
      description:
        "Absolutely! We tailor every brochure — from style, layout, and colors to imagery and messaging — ensuring it perfectly represents your brand and communicates your message effectively.",
    },
    {
      title: "How do you ensure design quality and consistency?",
      description:
        "We follow a structured design process with detailed layouts, visual guidelines, and quality checks to maintain high-quality, consistent, and on-brand brochures across all projects.",
    },
    {
      title: "Do you provide brochures for both print and digital use?",
      description:
        "Yes, we create brochures optimized for print, PDFs, email campaigns, and digital downloads to ensure your content is accessible and visually appealing on all platforms.",
    },
    {
      title: "Can you redesign an existing brochure?",
      description:
        "Definitely! We can refresh your current brochures by updating visuals, layouts, typography, and messaging to make them more modern, engaging, and aligned with your audience.",
    },
    {
      title: "Do you provide ongoing brochure support?",
      description:
        "Yes, we offer continuous support including design updates, print revisions, digital adaptations, and guidance to ensure your brochures remain relevant and effective.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Brochure Design Services",
        title: "Design Brochures That",
        highlight: "Tell Your Brand Story",
        description:
          "Future IT Touch has the experience of crafting the right brand message through custom brochure design. We create unique corporate brochures, product catalogues, leaflets, and flyers that stand apart.",
        image: gm,
        primaryCta: { label: "Design Your Brochure", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["250+ Brochures Delivered", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Professional & Creative Brochure Design",
        title: "Designing Brochures That",
        highlight: "Speak Your Brand's Story",
        description:
          "At Future IT Touch Pvt. Ltd. we specialize in creating impactful brochure designs that blend creativity, clarity, and strategy to effectively showcase your products, services, and brand message.",
        ctaLabel: "Design Your Brochure Today",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Creative Brochure Design Services",
        title: "Transforming Brand Messages into Visually Stunning Print Designs",
        image: d1,
        items: features,
      }}
      benefits={{
        title: "Professional Brochure Design Company in India",
        subtitle: "Crafting Brochures That Attract, Inform & Inspire Customers",
        items: businessData,
      }}
      platforms={{
        title: "Brochure Design Solutions We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About Our Brochure Design Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Brochure;
