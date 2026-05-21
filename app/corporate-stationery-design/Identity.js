import React from "react";
import gm from "../Assets/cro.webp";
import d1 from "../Assets/logo-gif.webp";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaLightbulb, FaHandshake } from "react-icons/fa";
import {
  FaIdCard,
  FaEnvelopeOpenText,
  FaFolderOpen,
  FaPenFancy,
  FaFileInvoice,
  FaBullhorn,
  FaTools,
} from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to strengthen your brand identity?",
  preTitle: "Design Corporate Stationery That",
  highlight: "Impresses",
  postTitle: "",
  description:
    "Get a free design consultation and discover how professional corporate stationery can elevate your brand's credibility and professionalism.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Business card design", sub: "First impression perfected" },
    { label: "Letterhead & envelope design", sub: "Consistent corporate identity" },
    { label: "Print-ready formats", sub: "AI, PDF & high-res files" },
    { label: "Multiple revision rounds", sub: "Until you're 100% happy" },
    { label: "Brand consistency check", sub: "Aligned with your guidelines" },
  ],
  cardCta: { label: "Design Your Stationery", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Brochure = () => {
  const features = [
    {
      title: "Business Card Design",
      description:
        "We craft professional business cards that reflect your brand identity, leaving a strong and memorable impression on clients and partners.",
      icon: <FaIdCard />,
    },
    {
      title: "Letterhead & Envelope Design",
      description:
        "Our custom letterheads and envelopes ensure consistent branding across all corporate communication, enhancing professionalism and trust.",
      icon: <FaEnvelopeOpenText />,
    },
    {
      title: "Presentation Folder Design",
      description:
        "We design branded folders that organize and showcase important documents, making a polished and cohesive impression during client meetings.",
      icon: <FaFolderOpen />,
    },
    {
      title: "Corporate Stationery Sets",
      description:
        "Complete stationery sets including notepads, pens, and office supplies, designed to maintain visual consistency and reinforce your corporate image.",
      icon: <FaPenFancy />,
    },
    {
      title: "Invoice & Report Templates",
      description:
        "Professionally designed templates for invoices, reports, and proposals that reflect your brand identity and ensure uniformity across documents.",
      icon: <FaFileInvoice />,
    },
    {
      title: "Branded Marketing Collateral",
      description:
        "We create branded letterheads, envelopes, and other materials for marketing campaigns, ensuring your corporate identity is cohesive and recognizable.",
      icon: <FaBullhorn />,
    },
    {
      title: "Custom Stationery Solutions",
      description:
        "Tailored stationery solutions to meet your business needs — combining creativity, functionality, and brand consistency for maximum impact.",
      icon: <FaTools />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Innovative Stationery Concepts",
      desc: "We create thoughtful and professional stationery designs that communicate your brand identity effectively across business cards, letterheads, and envelopes.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Custom Layout & Branding",
      desc: "Our team develops visually cohesive layouts combining typography, colors, and graphics to ensure your stationery aligns perfectly with your corporate identity.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Client-Centric Collaboration",
      desc: "We engage closely with clients throughout the design process to ensure each stationery item reflects your brand personality, professionalism, and business goals.",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Creative Concepts & Branding",
      desc: "We develop unique stationery and brochure concepts that capture your brand's personality and communicate your message clearly to your target audience.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Layout & Visual Planning",
      desc: "Our team crafts detailed layouts and mockups for corporate stationery and brochures, ensuring perfect alignment of visuals, text, and branding elements.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "Custom Graphics & Illustrations",
      desc: "We create tailored graphics, icons, and illustrations to enhance the visual appeal of your brochures and stationery, making them professional and engaging.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Print-Ready & Digital Design",
      desc: "We prepare your brochures and stationery for high-quality printing or digital distribution, maintaining color accuracy, resolution, and format compatibility.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Marketing & Promotional Materials",
      desc: "We design brochures, letterheads, and stationery that effectively promote your products, services, and corporate message across various platforms.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Quality & Brand Consistency",
      desc: "Every design undergoes strict quality checks to ensure consistency with your brand guidelines and high professional standards for all print and digital materials.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Corporate Stationery & Brochure Design?",
      description:
        "Our services include concept creation, layout design, custom graphics, typography, print-ready preparation, and digital adaptation to deliver professional and visually engaging stationery and brochures.",
    },
    {
      title: "Can you customize stationery for my business?",
      description:
        "Absolutely! We tailor every piece of stationery — from letterheads and envelopes to brochures and flyers — ensuring it perfectly represents your brand identity and messaging.",
    },
    {
      title: "How do you ensure design quality and consistency?",
      description:
        "We follow a structured design process with detailed layouts, brand guidelines, and quality checks to maintain high-quality, consistent, and on-brand stationery across all projects.",
    },
    {
      title: "Do you provide designs for both print and digital formats?",
      description:
        "Yes, we create corporate stationery and brochures optimized for print, PDFs, email campaigns, and digital downloads to ensure accessibility and visual appeal across all channels.",
    },
    {
      title: "Can you redesign an existing stationery set or brochure?",
      description:
        "Definitely! We can refresh your current corporate stationery or brochures by updating layouts, visuals, typography, and messaging to make them modern, engaging, and brand-aligned.",
    },
    {
      title: "Do you provide ongoing support after delivery?",
      description:
        "Yes, we offer continuous support including design updates, print revisions, digital adaptations, and guidance to ensure your stationery and brochures remain effective and up-to-date.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Corporate Stationery Design",
        title: "Make a Strong First",
        highlight: "Brand Impression",
        description:
          "Your business card builds your first impression. A professionally designed corporate identity — letterheads, business cards, envelopes — enhances your public image and conveys credibility.",
        image: gm,
        primaryCta: { label: "Design Your Stationery", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["250+ Projects Delivered", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Professional Corporate Stationery Design",
        title: "Designing Stationery That Strengthens Your",
        highlight: "Brand Identity",
        description:
          "At Future IT Touch Pvt. Ltd. we create professional corporate stationery designs that convey consistency, professionalism, and brand personality across all office and business communication materials.",
        ctaLabel: "Design Your Corporate Stationery Today",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Corporate Stationery Design Services",
        title: "Crafting Consistent & Impactful Brand Identity Across Office Collateral",
        image: d1,
        items: features,
      }}
      benefits={{
        title: "Professional Corporate Stationery Design Company in India",
        subtitle: "Crafting Stationery That Strengthens Your Brand Identity",
        items: businessData,
      }}
      platforms={{
        title: "Corporate Stationery Solutions We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About Our Corporate Stationery Design Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Brochure;
