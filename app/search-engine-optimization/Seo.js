import React from "react";
import cwd from "../Assets/seotwo.webp";
import featureImage from "../Assets/seo-new.webp";
import { FaSearch, FaLaptopCode } from "react-icons/fa";
import {
  FaBullhorn,
  FaEnvelopeOpenText,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import {
  FaGlobe,
  FaUserTie,
  FaFileAlt,
  FaListUl,
  FaBuilding,
} from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to rank higher?",
  preTitle: "Dominate",
  highlight: "Search Results",
  postTitle: "Today",
  description:
    "Get a free SEO consultation with our experts and discover how we can boost your organic traffic, rankings, and leads.",
  primaryCta: { label: "Get Free SEO Audit", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free consultation", "Results in 90 days"],
  cardItems: [
    { label: "Keyword research & strategy", sub: "Target the right audience" },
    { label: "On-page SEO optimization", sub: "Content & meta tags optimized" },
    { label: "Technical SEO audit", sub: "Speed, structure & crawlability" },
    { label: "Link building campaigns", sub: "Authority-boosting backlinks" },
    { label: "Monthly performance reports", sub: "Track every ranking gain" },
  ],
  cardCta: { label: "Start Your SEO Campaign", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const Seo = () => {
  const features = [
    {
      title: "Website Analysis",
      description:
        "Using powerful SEO tools like SEMrush and Ahrefs, we thoroughly analyze your website to ensure it aligns with search engine algorithm standards. From checking and modifying URL structures to fixing indexation issues and optimizing sitemaps, we offer complete technical SEO solutions that enhance your site's visibility and performance.",
      icon: <FaGlobe />,
    },
    {
      title: "On-Page SEO",
      description:
        "We perform detailed keyword and competitor research to optimize your website's on-page elements. This includes improving content, meta tags, header tags, schema markup, robots.txt setup, image alt tags, and fixing broken links to ensure your pages are both search-engine and user-friendly.",
      icon: <FaSearch />,
    },
    {
      title: "Competitor Analysis",
      description:
        "Understanding your competitors' SEO strategies helps identify opportunities to outperform them. Our team studies your niche and competition closely to craft a data-driven SEO approach that positions your business ahead in the digital landscape.",
      icon: <FaUserTie />,
    },
    {
      title: "Content Marketing",
      description:
        "We create and promote high-quality, engaging content to build authority and attract backlinks. From blogs, infographics, and press releases to videos and social interactions, our content marketing strengthens your brand presence and drives referral traffic for long-term growth.",
      icon: <FaFileAlt />,
    },
    {
      title: "Keyword Research",
      description:
        "Our SEO experts conduct extensive keyword research to identify the most relevant and profitable terms for your business. We share keyword recommendations tailored to your goals and integrate them strategically into your on-page and off-page SEO efforts.",
      icon: <FaListUl />,
    },
    {
      title: "Set Up Business Listing",
      description:
        "We help your business appear in local searches by setting up and optimizing Google My Business profiles and listings on reputed online directories. This enhances your local SEO performance, improves visibility, and drives more targeted traffic to your website.",
      icon: <FaBuilding />,
    },
  ];

  const businessData = [
    {
      icons: <FaBullhorn className="text-white w-8 h-8" />,
      title: "Comprehensive Website Analysis",
      desc: "We perform detailed website audits using tools like SEMrush and Ahrefs to identify technical issues, check responsiveness, fix indexing problems, and improve your site's overall SEO performance.",
    },
    {
      icons: <FaSearch className="text-white w-8 h-8" />,
      title: "Strategic Keyword Targeting",
      desc: "We identify the most relevant and high-traffic keywords for your industry to ensure your website appears in front of the right audience. Our data-driven approach improves visibility and drives consistent organic growth.",
    },
    {
      icons: <FaLaptopCode className="text-white w-8 h-8" />,
      title: "On-Page & Technical SEO",
      desc: "We enhance your website's on-page structure — from meta tags and headings to schema markup and page speed — ensuring it aligns with Google's ranking algorithms for maximum search visibility.",
    },
  ];

  const platforms = [
    {
      icon: <FaBullhorn className="text-white w-6 h-6" />,
      title: "Targeted Campaign Planning",
      desc: "We research keywords, demographics, and user behavior to design campaigns that reach the right audience with precision, improving ad relevance and ROI.",
    },
    {
      icon: <FaSearch className="text-white w-6 h-6" />,
      title: "Keyword & Ad Optimization",
      desc: "Our experts continually optimize keywords, bids, and ad copies to ensure your campaigns drive high-quality traffic and maximum conversions.",
    },
    {
      icon: <FaLaptopCode className="text-white w-6 h-6" />,
      title: "Landing Page Optimization",
      desc: "We design and optimize PPC landing pages to increase engagement and conversion rates, ensuring your investment generates measurable results.",
    },
    {
      icon: <FaUsers className="text-white w-6 h-6" />,
      title: "Paid Social Advertising",
      desc: "We run highly targeted social media PPC campaigns on Facebook, Instagram, LinkedIn, and X (Twitter), using precise audience targeting and engaging ad creatives.",
    },
    {
      icon: <FaChartLine className="text-white w-6 h-6" />,
      title: "Performance Analytics & Reporting",
      desc: "Detailed reports and continuous monitoring allow us to measure campaign success, optimize strategies, and deliver data-driven decisions for maximum impact.",
    },
    {
      icon: <FaEnvelopeOpenText className="text-white w-6 h-6" />,
      title: "Retargeting & Lead Nurturing",
      desc: "We implement retargeting strategies to re-engage visitors who didn't convert initially, improving overall campaign efficiency and lead generation.",
    },
  ];

  const faqData = [
    {
      title: "What is included in your PPC management service?",
      description:
        "Our PPC service includes campaign strategy, keyword research, ad copy creation, landing page optimization, bid management, retargeting, analytics tracking, and ongoing optimization across platforms like Google, Facebook, LinkedIn, and YouTube.",
    },
    {
      title: "Can you manage multiple PPC platforms simultaneously?",
      description:
        "Yes, we handle campaigns across multiple platforms, ensuring consistent targeting, messaging, and performance tracking for Google Ads, Bing Ads, Facebook, Instagram, LinkedIn, and YouTube.",
    },
    {
      title: "Do you provide custom ad creatives?",
      description:
        "Absolutely! We create engaging and high-converting ad creatives, including images, videos, carousel ads, and dynamic product ads tailored to your brand and campaign objectives.",
    },
    {
      title: "How do you measure PPC performance?",
      description:
        "We track conversions, click-through rates (CTR), cost-per-click (CPC), return on ad spend (ROAS), and other key metrics using advanced analytics tools to continuously optimize your campaigns.",
    },
    {
      title: "Can PPC help my business grow quickly?",
      description:
        "Yes, PPC is a fast and measurable way to drive qualified traffic to your website or app. With properly targeted campaigns, you can generate leads, sales, and brand awareness quickly.",
    },
    {
      title: "Do you provide ongoing campaign support?",
      description:
        "Yes, our team provides continuous monitoring, bid optimization, ad updates, performance reports, and campaign adjustments to ensure sustained results and ROI.",
    },
  ];

  return (
    <ServicePageTemplate
      hero={{
        badge: "SEO Services",
        title: "Boost Rankings with",
        highlight: "Expert SEO",
        description:
          "75% of people never scroll past the first page. Our niche-specific, data-driven SEO strategies enhance your rank on the SERP and fuel your business growth organically.",
        image: cwd,
        primaryCta: { label: "Start Your SEO Campaign", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["1500+ Campaigns", "10+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Result-Driven SEO Services",
        title: "Boost Organic Traffic & Rankings with",
        highlight: "Proven SEO Strategies",
        description:
          "At Future IT Touch Pvt. Ltd. we offer comprehensive Search Engine Optimization services that help your business achieve higher visibility, better search rankings, and consistent organic traffic.",
        ctaLabel: "Start Your SEO Campaign Today",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Result-Oriented SEO Services",
        title: "Drive Quality Traffic, Boost Rankings & Grow Organically",
        image: featureImage,
        items: features,
      }}
      benefits={{
        title: "Leading SEO Company in India",
        subtitle: "Drive Organic Growth & Boost Your Rankings with Expert SEO Strategies",
        items: businessData,
      }}
      platforms={{
        title: "Comprehensive SEO Services We Deliver",
        items: platforms,
      }}
      faq={{
        title: "About SEO Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default Seo;
