import React from "react";
import cwd from "../Assets/cwd.webp";
import devops from "../Assets/app-intro.webp";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import {
  FaPalette,
  FaCommentDots,
  FaGlobe,
  FaBookOpen,
  FaChartPie,
} from "react-icons/fa";
import { FaLightbulb, FaHandshake, FaUsers } from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to build your brand identity?",
  preTitle: "Create a Brand Identity That",
  highlight: "Inspires & Connects",
  postTitle: "",
  description:
    "Get a free consultation and discover how our creative team can craft compelling brand identities that drive recognition and business growth.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Brand strategy & positioning", sub: "Define your unique identity" },
    { label: "Visual identity design", sub: "Logo, colors & typography" },
    { label: "Brand guidelines document", sub: "Maintain consistency everywhere" },
    { label: "Digital & print assets", sub: "Ready for all platforms" },
    { label: "Ongoing brand support", sub: "We stay with you after delivery" },
  ],
  cardCta: { label: "Build Your Brand Identity", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Ecommerce = () => {
  const features = [
    {
      title: "Strategic Brand Positioning",
      description:
        "We help businesses define their unique brand voice, values, and positioning in the market. Our strategy ensures your brand stands out with purpose, clarity, and emotional connection to your audience.",
      icon: <FaLightbulb />,
    },
    {
      title: "Creative Visual Identity",
      description:
        "From logos to color palettes and typography, we create a cohesive and memorable visual identity that reflects your brand's personality and builds instant recognition across platforms.",
      icon: <FaPalette />,
    },
    {
      title: "Consistent Brand Messaging",
      description:
        "We craft compelling taglines, tone, and storytelling that communicate your brand's message consistently across all touchpoints — from websites and packaging to social media and campaigns.",
      icon: <FaCommentDots />,
    },
    {
      title: "Audience Research & Insights",
      description:
        "Understanding your target audience is key to impactful branding. We conduct in-depth research to identify customer expectations, perceptions, and preferences for better brand alignment.",
      icon: <FaUsers />,
    },
    {
      title: "Digital Presence & Engagement",
      description:
        "We strengthen your online identity through consistent visual and content strategies on digital platforms — ensuring your brand connects effectively with audiences across all channels.",
      icon: <FaGlobe />,
    },
    {
      title: "Brand Guidelines Development",
      description:
        "We design comprehensive brand guidelines that outline logo usage, color systems, fonts, and visual tone — ensuring your brand maintains uniformity and professionalism everywhere it appears.",
      icon: <FaBookOpen />,
    },
    {
      title: "Performance & Growth Analytics",
      description:
        "We track the effectiveness of your branding efforts through analytics, helping you measure brand engagement, awareness, and growth for continuous improvement and impact.",
      icon: <FaChartPie />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Strategic Brand Development",
      desc: "We help businesses define a clear brand vision and positioning strategy that connects emotionally with their audience and strengthens market presence.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Creative Visual Identity",
      desc: "Our creative designers craft unique logos, color palettes, and typography that reflect your brand's personality and ensure consistent recognition everywhere.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Approach",
      desc: "We work closely with clients to understand their goals and translate ideas into powerful brand visuals and messaging that inspire trust and loyalty.",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Visual Identity Design",
      desc: "We craft unique logos, color schemes, and typography systems that capture your brand's personality and create a consistent, memorable visual identity across all platforms.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Brand Strategy & Guidelines",
      desc: "Our team develops comprehensive brand strategies and guidelines to ensure every communication reflects your brand's vision, values, and voice consistently across channels.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "UI/UX Design",
      desc: "We design engaging and user-friendly interfaces that enhance the customer experience, reinforce your brand identity, and create lasting impressions on digital platforms.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Front-End Development",
      desc: "Our front-end developers translate brand designs into interactive and responsive web experiences, ensuring consistency, performance, and visually appealing layouts.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Back-End Development",
      desc: "We implement scalable and secure back-end systems to support your brand's online presence, including content management, integrations, and database management.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Digital Marketing & SEO",
      desc: "We optimize your online presence with SEO strategies, content marketing, and digital campaigns to enhance visibility, engage audiences, and strengthen your brand identity.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Brand Identity Solutions?",
      description:
        "Our services include logo design, color palettes, typography systems, brand messaging, visual guidelines, and digital presence strategies to create a cohesive and memorable brand identity.",
    },
    {
      title: "Can you customize branding for my business?",
      description:
        "Absolutely! We tailor every aspect of your brand identity — from visual elements to messaging — ensuring it reflects your unique vision, values, and business goals.",
    },
    {
      title: "How do you ensure brand consistency?",
      description:
        "We develop detailed brand guidelines and strategy documents that outline logo usage, color schemes, typography, tone of voice, and design principles to maintain consistency across all platforms.",
    },
    {
      title: "Do you provide digital branding solutions?",
      description:
        "Yes, we integrate your brand identity into websites, social media, marketing campaigns, and other digital touchpoints to ensure consistent and engaging online presence.",
    },
    {
      title: "Can you revamp an existing brand?",
      description:
        "Definitely! We can refresh your current brand by enhancing its visual identity, messaging, and digital presence to make it more modern, engaging, and aligned with your audience.",
    },
    {
      title: "Do you provide ongoing brand support?",
      description:
        "Yes, we offer continuous support to ensure your brand remains consistent and relevant. This includes updating brand assets, maintaining design standards, and guiding digital marketing efforts.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Creative Agency Branding",
        title: "Craft a Brand Identity That",
        highlight: "Stands Out & Inspires",
        description:
          "Future IT Touch Pvt. Ltd. is the governing creative branding agency in India. We sharpen branding strategies to attract your audience, combining creativity, innovation, and quality design to make your business stand out.",
        image: cwd,
        primaryCta: { label: "Build Your Brand Identity", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["250+ Brands Transformed", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Trusted Brand Identity & Strategy Development",
        title: "Crafting Brands That Speak,",
        highlight: "Connect, and Grow",
        description:
          "At Future IT Touch Pvt. Ltd. we help businesses establish strong, consistent brand identities through strategy, creativity, and design excellence that leaves a lasting impression.",
        ctaLabel: "Build Your Brand Identity",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Creative Agency Branding Solutions",
        title: "Building Powerful Brand Identities That Inspire & Connect",
        image: devops,
        items: features,
      }}
      benefits={{
        title: "Leading Brand Identity & Creative Agency in India",
        subtitle: "Crafting Unique Identities that Inspire & Connect",
        items: businessData,
      }}
      platforms={{
        title: "Brand Identity & Creative Solutions We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About Brand Identity & Creative Solutions",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Ecommerce;
