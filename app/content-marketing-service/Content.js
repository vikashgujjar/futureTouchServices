import React from "react";
import cwd from "../Assets/contone.webp";
import mrk from "../Assets/mrk.gif";
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
  badge: "Ready to grow with content?",
  preTitle: "Build Authority through",
  highlight: "Content Marketing",
  postTitle: "",
  description:
    "Get a free content strategy consultation and discover how compelling content can drive traffic, leads, and long-term brand authority for your business.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Content strategy development", sub: "Tailored to your goals" },
    { label: "SEO-optimized articles & blogs", sub: "Rank & drive organic traffic" },
    { label: "Social media content", sub: "Engaging posts for all platforms" },
    { label: "Content calendar planning", sub: "Consistent publishing schedule" },
    { label: "Monthly performance reports", sub: "Track traffic & engagement" },
  ],
  cardCta: { label: "Start Your Content Strategy", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Logo = () => {
  const features = [
    {
      title: "Strategic Content Planning",
      description:
        "We develop comprehensive content strategies tailored to your business goals. By analyzing your audience, industry trends, and brand voice, we create a roadmap that ensures your content drives engagement, builds brand awareness, and supports lead generation across all platforms.",
      icon: <FaBuilding />,
    },
    {
      title: "Social Media Content Creation",
      description:
        "Our team crafts engaging content specifically designed for social media channels. From visually compelling graphics to concise, persuasive copy, we create posts that resonate with your audience, encourage interactions, and increase your brand's reach and visibility online.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Blog & Article Marketing",
      description:
        "We write informative, SEO-optimized blogs and articles that position your brand as an authority in your industry. By linking new content to existing posts and maintaining valuable keywords, we enhance search engine rankings and drive consistent, qualified traffic to your website.",
      icon: <FaChartLine />,
    },
    {
      title: "Content Amplification & Promotion",
      description:
        "Beyond creating content, we strategically share it to maximize reach. We identify the right channels, leverage trending topics, participate in relevant groups, and time publications to ensure your content reaches the right audience and has the highest potential for engagement and virality.",
      icon: <FaBookOpen />,
    },
    {
      title: "Audience Engagement & Community Building",
      description:
        "We help you build meaningful relationships with your audience by joining discussions, responding to comments, and fostering communities around your brand. Our goal is to enhance loyalty, encourage brand advocacy, and turn followers into long-term customers.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Content Analysis & Optimization",
      description:
        "We continually analyze the performance of your content using metrics like engagement, traffic, and conversions. Based on insights, we refine strategies, improve messaging, and optimize content to achieve better results and maximize ROI for your content marketing campaigns.",
      icon: <FaFileAlt />,
    },
    {
      title: "Rebranding & Content Refresh",
      description:
        "For businesses looking to revitalize their online presence, we refresh existing content to align with current trends, brand messaging, and audience expectations. This ensures your content remains relevant, engaging, and impactful while maintaining SEO value and brand consistency.",
      icon: <FaFolderOpen />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Creative Content Strategy",
      desc: "We develop innovative content strategies tailored to your brand, ensuring that every piece of content aligns with your business goals, engages your audience, and drives measurable results.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Content Creation & Design",
      desc: "Our team produces high-quality, visually appealing content — from blogs and articles to social media posts and graphics — designed to educate, inspire, and captivate your target audience.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Marketing Process",
      desc: "We work closely with you to understand your brand voice and objectives, incorporating feedback at every stage to ensure content resonates with your audience and effectively promotes your brand message.",
    },
  ];

  const platforms = [
    {
      icon: <FaPalette className="text-white w-6 h-6" />,
      title: "Content Strategy & Planning",
      desc: "We create data-driven content strategies that align with your brand goals, identify target audiences, and establish a roadmap for engaging, informative, and high-performing content campaigns.",
    },
    {
      icon: <FaPencilRuler className="text-white w-6 h-6" />,
      title: "Content Creation & Design",
      desc: "Our team produces high-quality blogs, articles, social media posts, graphics, and videos that are tailored to resonate with your audience, reinforce brand messaging, and drive meaningful engagement.",
    },
    {
      icon: <FaDesktop className="text-white w-6 h-6" />,
      title: "SEO & Performance Optimization",
      desc: "We optimize all content for search engines, using keyword strategy, internal linking, and analytics insights to improve organic traffic, increase visibility, and ensure measurable marketing results.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Social Media Marketing",
      desc: "We craft content for social media channels that sparks engagement, encourages sharing, and strengthens your online presence, helping your brand connect with followers and grow a loyal audience.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Content Amplification & Promotion",
      desc: "Beyond creation, we strategically distribute and promote content to maximize reach, participate in relevant communities, and capitalize on trending topics for viral marketing potential.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Analytics & Continuous Improvement",
      desc: "We monitor content performance using analytics tools, adjusting strategies, optimizing messaging, and refining campaigns to ensure content consistently meets audience needs and business objectives.",
    },
  ];

  const faqData = [
    {
      title: "What services are included in Content Marketing?",
      description:
        "Our services include content strategy development, content creation for blogs, articles, and social media, SEO optimization, content promotion, analytics monitoring, and ongoing support to ensure consistent and high-performing campaigns.",
    },
    {
      title: "Can you create custom content for my business?",
      description:
        "Absolutely! We tailor every content piece to match your brand voice, target audience, and business goals. From written content to visual assets, everything is designed to engage, educate, and convert effectively.",
    },
    {
      title: "Do you optimize content for SEO and engagement?",
      description:
        "Yes, all content is crafted with SEO best practices and engagement strategies in mind. We ensure keyword relevance, proper linking, readability, and compelling storytelling to boost organic traffic and audience interaction.",
    },
    {
      title: "Can you manage social media content as part of the marketing strategy?",
      description:
        "Definitely! We create and schedule social media content, engage with your followers, and manage campaigns to increase brand awareness, grow community interaction, and drive traffic to your website.",
    },
    {
      title: "How do you measure content marketing success?",
      description:
        "We track metrics like website traffic, engagement rates, social shares, lead generation, and conversions. Regular reports and insights allow us to continuously refine content strategy and improve ROI.",
    },
    {
      title: "Do you provide ongoing content marketing support?",
      description:
        "Yes, we offer ongoing support including content updates, campaign optimization, analytics monitoring, and strategic adjustments to ensure your content marketing efforts remain effective and aligned with your business objectives.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Content Marketing Services",
        title: "Grow Your Brand through",
        highlight: "Content Marketing",
        description:
          "Content is the root of every digital marketing campaign. Future IT Touch creates content that ranks and pulls your business up — building awareness, driving leads, and establishing authority in your industry.",
        image: cwd,
        primaryCta: { label: "Start Your Content Strategy", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["1000+ Pieces Delivered", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Professional & Strategic Content Marketing",
        title: "Crafting Content That",
        highlight: "Engages, Educates & Converts",
        description:
          "At Future IT Touch Pvt. Ltd. we create compelling content strategies that resonate with your audience, drive engagement, and support your business goals. Effective content marketing builds trust, authority, and lasting relationships.",
        ctaLabel: "Start Your Content Strategy Today",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Strategic Content Marketing Services",
        title: "Creating Engaging Content That Educates, Inspires & Converts",
        image: mrk,
        items: features,
      }}
      benefits={{
        title: "Professional Content Marketing Company in India",
        subtitle: "Crafting Content That Engages, Educates & Converts Your Audience",
        items: businessData,
      }}
      platforms={{
        title: "Content Marketing Solutions We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About Our Content Marketing Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Logo;
