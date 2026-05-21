import React from "react";
import cwd from "../Assets/soci.webp";
import soe from "../Assets/soe.webp";
import {
  FaUsers,
  FaChartLine,
  FaBullhorn,
  FaCameraRetro,
  FaHashtag,
  FaEnvelopeOpenText,
  FaLaptop,
  FaLightbulb,
  FaHandshake,
  FaPalette,
  FaGlobe,
  FaCommentDots,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPinterest,
  FaAd,
  FaPeopleArrows,
} from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to grow your social presence?",
  preTitle: "Build Your Brand on",
  highlight: "Social Media",
  postTitle: "",
  description:
    "Get a free consultation with our social media experts and discover how we can turn your followers into loyal customers.",
  primaryCta: { label: "Get Free Consultation", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results guaranteed"],
  cardItems: [
    { label: "Custom content strategy", sub: "Tailored to your brand & audience" },
    { label: "Regular post scheduling", sub: "Consistent daily presence" },
    { label: "Community management", sub: "Engage & grow your followers" },
    { label: "Paid campaign management", sub: "Targeted ads for more reach" },
    { label: "Monthly analytics reports", sub: "Track every engagement metric" },
  ],
  cardCta: { label: "Start Your Social Media Campaign", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Social = () => {
  const features = [
    {
      title: "Social Media Strategy & Planning",
      description:
        "We design a tailored social media marketing strategy to align with your brand goals. From defining audience personas to content calendar planning, we ensure every post drives engagement and builds brand loyalty.",
      icon: <FaBullhorn />,
    },
    {
      title: "Content Creation & Management",
      description:
        "Our creative team produces visually stunning graphics, engaging videos, and compelling posts that resonate with your audience. We handle all aspects of content management to maintain a consistent and impactful online presence.",
      icon: <FaCameraRetro />,
    },
    {
      title: "Content Creation & Marketing",
      description:
        "Using premium stock images, custom-made graphics, or unique assets provided by you, we create visual content including static images, videos, infographics, and carousels. Our in-house designers, copywriters, and marketing experts work together to craft engaging posts that drive attention and boost brand impression.",
      icon: <FaChartLine />,
    },
    {
      title: "Facebook Page Management",
      description:
        "From page creation and post designing to Facebook Ad management, campaign monitoring, and audience engagement — we handle everything to grow your follower base and improve visibility.",
      icon: <FaFacebookF />,
    },
    {
      title: "Twitter Account Management",
      description:
        "Our strategic Twitter marketing leverages powerful words and trending hashtags to strengthen your brand authority. We blend creativity and tactics to enhance your presence on this micro-blogging platform.",
      icon: <FaTwitter />,
    },
    {
      title: "LinkedIn Profile Management",
      description:
        "Reflect your business professionalism on LinkedIn. We help B2B and B2C brands establish a strong presence, connect with professionals, and build a credible network that drives opportunities.",
      icon: <FaLinkedin />,
    },
    {
      title: "Instagram Marketing",
      description:
        "Boost engagement with our Instagram marketing expertise. We craft eye-catching visuals, short videos, and shoppable content to drive conversions and elevate your brand image.",
      icon: <FaInstagram />,
    },
    {
      title: "Pinterest Marketing",
      description:
        "We blend creativity and strategy to optimize your Pins, Feeds, and Boards. Our Pinterest marketing ensures your visuals capture attention, keeping users engaged and generating quality leads.",
      icon: <FaPinterest />,
    },
    {
      title: "Social Media Advertising Campaigns",
      description:
        "We run high-performing ad campaigns across Facebook, Instagram, LinkedIn, and more — focusing on conversions, brand awareness, and audience growth with precision targeting and ROI-driven strategies.",
      icon: <FaAd />,
    },
    {
      title: "Influencer & Community Marketing",
      description:
        "We collaborate with trusted influencers and manage brand communities to enhance your reach and authenticity. Our team ensures genuine engagement that strengthens your brand reputation and trust.",
      icon: <FaUsers />,
    },
    {
      title: "Community Management",
      description:
        "Our social media activities help build a loyal community around your niche. Through meaningful, informative interactions, we ensure your brand stays connected and relevant in the competitive digital world.",
      icon: <FaPeopleArrows />,
    },
    {
      title: "Analytics & Performance Tracking",
      description:
        "Using advanced analytics, we monitor engagement, reach, and conversions to refine campaigns continuously — ensuring data-backed decisions and measurable success.",
      icon: <FaSearch />,
    },
    {
      title: "Brand Reputation & Engagement Management",
      description:
        "We actively manage brand mentions, respond to comments, and engage with your audience to build strong relationships. Our approach turns followers into loyal advocates for your brand.",
      icon: <FaCommentDots />,
    },
    {
      title: "Multi-Platform Optimization",
      description:
        "We optimize campaigns for each social platform — ensuring your content performs effectively whether on Facebook, Instagram, LinkedIn, or X (Twitter).",
      icon: <FaGlobe />,
    },
  ];

  const businessData = [
    {
      icons: <FaLightbulb className="text-white w-8 h-8" />,
      title: "Strategic Social Campaigns",
      desc: "Our data-driven campaigns are designed to maximize engagement, reach, and conversions — ensuring every post aligns with your brand's vision and audience interests.",
    },
    {
      icons: <FaPalette className="text-white w-8 h-8" />,
      title: "Creative Content & Visuals",
      desc: "We craft visually appealing designs, stories, and videos that not only grab attention but also communicate your brand message effectively across all social platforms.",
    },
    {
      icons: <FaHandshake className="text-white w-8 h-8" />,
      title: "Collaborative Marketing Approach",
      desc: "We work closely with your team to understand your goals and target audience, ensuring each campaign strengthens your online presence and brand identity.",
    },
  ];

  const platforms = [
    {
      icon: <FaBullhorn className="text-white w-6 h-6" />,
      title: "Strategic Campaign Planning",
      desc: "We plan campaigns that combine creativity, analytics, and audience insights to deliver meaningful engagement and brand visibility.",
    },
    {
      icon: <FaLaptop className="text-white w-6 h-6" />,
      title: "Content Creation & Scheduling",
      desc: "We produce and schedule high-quality content optimized for every platform — from carousel posts to reels and ad creatives.",
    },
    {
      icon: <FaUsers className="text-white w-6 h-6" />,
      title: "Community Building & Management",
      desc: "We grow your online communities, respond to followers, and encourage meaningful interactions to build strong brand loyalty.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Performance Analytics & Reporting",
      desc: "Our detailed reports track campaign results, helping you understand audience behavior and identify opportunities for growth.",
    },
    {
      icon: <FaHashtag className="text-white w-6 h-6" />,
      title: "Paid Social Advertising",
      desc: "We manage targeted ad campaigns to increase brand awareness, drive leads, and boost ROI across Facebook, Instagram, and LinkedIn.",
    },
    {
      icon: <FaEnvelopeOpenText className="text-white w-6 h-6" />,
      title: "Brand Reputation Management",
      desc: "We monitor brand mentions, respond to feedback, and ensure your business maintains a positive and engaging presence online.",
    },
  ];

  const faqData = [
    {
      title: "What does your Social Media Marketing service include?",
      description:
        "Our services include strategy planning, content creation, advertising, analytics tracking, and community management across platforms like Facebook, Instagram, LinkedIn, and Twitter (X).",
    },
    {
      title: "Can you manage multiple social media platforms for my brand?",
      description:
        "Yes, we handle multi-platform management — ensuring consistent branding and messaging across all social channels with unique, platform-specific strategies.",
    },
    {
      title: "Do you create custom content for social media?",
      description:
        "Absolutely! We design and write creative content tailored to your brand tone, audience preferences, and campaign goals.",
    },
    {
      title: "How do you measure social media performance?",
      description:
        "We track engagement, reach, clicks, conversions, and ROI through advanced analytics tools to measure campaign effectiveness and optimize future strategies.",
    },
    {
      title: "Can social media marketing help grow my business?",
      description:
        "Yes! Social media builds brand visibility, trust, and customer relationships — driving leads, conversions, and long-term growth.",
    },
    {
      title: "Do you provide ongoing social media support?",
      description:
        "Yes, we offer continuous monitoring, updates, performance reports, and optimization to ensure consistent brand engagement and growth.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "Social Media Marketing",
        title: "Amplify Your Brand with",
        highlight: "Social Media Marketing",
        description:
          "Future IT Touch provides dynamic and results-driven social media marketing services. We use futuristic strategies and creative designs to boost your presence on Facebook, Instagram, LinkedIn, and more.",
        image: cwd,
        primaryCta: { label: "Grow Your Brand Today", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["1500+ Campaigns", "15+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Creative & Data-Driven Social Media Marketing",
        title: "Amplify Your Brand Presence with",
        highlight: "Strategic Social Media",
        description:
          "At Future IT Touch Pvt. Ltd. we help businesses connect, engage, and grow through innovative social media strategies that turn followers into customers and customers into loyal brand advocates.",
        ctaLabel: "Grow Your Brand with Social Media Today",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Comprehensive Social Media Marketing",
        title: "Building Engagement & Driving Conversions Across Platforms",
        image: soe,
        items: features,
      }}
      benefits={{
        title: "Top Social Media Marketing Company in India",
        subtitle: "Engaging, Growing & Converting Audiences Organically",
        items: businessData,
      }}
      platforms={{
        title: "Our Social Media Marketing Process",
        items: platforms,
      }}
      faq={{
        title: "About Our Social Media Marketing Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Social;
