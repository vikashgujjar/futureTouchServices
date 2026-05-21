import React from "react";
import cwd from "../Assets/ppc-new.webp";
import { FaSearch, FaLaptopCode } from "react-icons/fa";
import {
  FaBullhorn,
  FaEnvelopeOpenText,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import ServicePageTemplate from "../components/ServicePageTemplate";

const CTA_DATA = {
  badge: "Ready to drive more leads?",
  preTitle: "Maximize ROI with",
  highlight: "Expert PPC",
  postTitle: "",
  description:
    "Get a free PPC audit and discover how our certified experts can bring ready-to-buy customers to your website through targeted ad campaigns.",
  primaryCta: { label: "Get Free PPC Audit", href: "/contact" },
  secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
  trustItems: ["No contracts", "Free audit", "Results in 30 days"],
  cardItems: [
    { label: "Custom campaign strategy", sub: "Tailored to your goals & budget" },
    { label: "Ad creative design", sub: "Compelling visuals & copy" },
    { label: "Bid & keyword optimization", sub: "Maximize your ad spend" },
    { label: "Conversion tracking setup", sub: "Measure every lead & sale" },
    { label: "Weekly performance reports", sub: "Full transparency on results" },
  ],
  cardCta: { label: "Start Your PPC Campaign", href: "/contact" },
  cardFootnote: "Free quote · No commitment required",
};

const PPC = () => {
  const features = [
    {
      title: "Targeted Campaigns",
      description:
        "We design PPC campaigns that reach your ideal audience with precision, ensuring your ads are shown to users who are most likely to convert. By analyzing demographics, search behavior, and interests, we optimize each campaign for maximum ROI and ad relevance. Our approach guarantees that every click has the potential to turn into a valuable lead or sale, helping you achieve measurable business growth.",
      icon: <FaBullhorn />,
    },
    {
      title: "Keyword Optimization",
      description:
        "Our PPC experts research and select high-performing keywords that accurately represent your products or services. By targeting the right search terms, we drive qualified traffic to your website while minimizing wasted ad spend. We continuously monitor keyword performance, identify emerging trends, and adjust bids to ensure your campaigns stay competitive and deliver optimal results over time.",
      icon: <FaSearch />,
    },
    {
      title: "Compelling Ad Copies",
      description:
        "We craft attention-grabbing ad copies that resonate with your audience across Google Ads, Facebook, YouTube, and other platforms. Each ad is carefully written to highlight unique selling points, encourage clicks, and drive conversions. Our team tests multiple variations, refines messaging, and optimizes calls-to-action to maximize engagement and ensure the best possible ROI for every campaign.",
      icon: <FaEnvelopeOpenText />,
    },
    {
      title: "Landing Page Optimization",
      description:
        "An effective PPC campaign requires high-converting landing pages. We design and optimize landing pages with clear messaging, persuasive calls-to-action, and a seamless user experience. From mobile responsiveness to fast load times and visually engaging layouts, we ensure that visitors are guided toward conversion efficiently, increasing your overall campaign performance and ROI.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Paid Social Advertising",
      description:
        "We manage PPC campaigns on social platforms such as Facebook, Instagram, LinkedIn, and X (Twitter). Using precise audience targeting, carousel ads, video ads, and dynamic creatives, we increase brand visibility and engagement. Our team continuously tests ad formats, messaging, and placements to maximize reach and conversions while optimizing your ad spend for the highest possible ROI.",
      icon: <FaUsers />,
    },
    {
      title: "Performance Analytics & Reporting",
      description:
        "Our team continuously monitors campaign performance, adjusts bids, and optimizes ad placements to ensure maximum effectiveness. Detailed analytics reports track impressions, clicks, conversions, and ROI, helping us make data-driven decisions. We refine campaigns based on real-time performance metrics, ensuring that your PPC investment delivers measurable results and continuous growth for your business.",
      icon: <FaChartLine />,
    },
  ];

  const businessData = [
    {
      icons: <FaBullhorn className="text-white w-8 h-8" />,
      title: "Targeted PPC Campaigns",
      desc: "We design precision-driven PPC campaigns to reach your ideal audience. By analyzing search behavior, demographics, and interests, we ensure maximum visibility and conversion potential for your ads.",
    },
    {
      icons: <FaSearch className="text-white w-8 h-8" />,
      title: "Keyword Research & Optimization",
      desc: "Our PPC experts research high-performing keywords, optimize bids, and continuously monitor performance. This ensures your ads appear to the right audience, driving qualified traffic and maximizing ROI.",
    },
    {
      icons: <FaLaptopCode className="text-white w-8 h-8" />,
      title: "Landing Page Optimization",
      desc: "We create high-converting landing pages tailored to your campaigns. With clear CTAs, fast load times, and mobile-friendly design, we maximize user engagement and boost conversion rates.",
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
        badge: "PPC Management Services",
        title: "Drive Leads with",
        highlight: "Expert PPC Campaigns",
        description:
          "Looking for the quickest way to bring ready-to-buy customers to your website? As a leading PPC management company in India, we specialize in Google Ads, Facebook, and YouTube advertisements.",
        image: cwd,
        primaryCta: { label: "Start Your PPC Campaign", href: "/contact" },
        secondaryCta: { label: "Call: 7056937000", href: "tel:+917056937000" },
        trustItems: ["1500+ Campaigns", "10+ Years Expertise", "98% Satisfaction"],
      }}
      intro={{
        badge: "Result-Oriented PPC Management",
        title: "Driving Targeted Traffic & Maximizing ROI with",
        highlight: "PPC Campaigns",
        description:
          "At Future IT Touch Pvt. Ltd. we create highly effective Pay-Per-Click campaigns to bring ready-to-buy customers to your website. Our certified PPC experts specialize in Google Ads, Facebook Ads, YouTube Ads, and more.",
        ctaLabel: "Start Your PPC Campaign Today",
        ctaHref: "tel:+917056937000",
      }}
      features={{
        badge: "Trusted PPC Management Services",
        title: "Delivering Result-Driven Paid Campaigns for Maximum ROI",
        items: features,
      }}
      benefits={{
        title: "Leading PPC Management Company in India",
        subtitle: "Maximize Conversions & ROI with Expert PPC Strategies",
        items: businessData,
      }}
      platforms={{
        title: "Comprehensive PPC Management Services",
        items: platforms,
      }}
      faq={{
        title: "About PPC Management Services",
        items: faqData,
      }}
      cta={CTA_DATA}
    />
  );
};

export default PPC;
