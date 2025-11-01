import React from "react";

import Image from "next/image";
import ec from "../Assets/or.gif";
import featureImage from "../Assets//seo-new.webp"
import cwd from "../Assets/seotwo.webp";
import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";

import {
  FaMagento,
  FaWordpress,
  FaShopify,
  FaOpencart,
  FaCogs,
  FaServer,
} from "react-icons/fa";

import { FaProjectDiagram, FaRobot, FaBars } from "react-icons/fa";

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

const Seo = () => {
  const features = [
    {
      title: "Website Analysis",
      description:
        "Using powerful SEO tools like SEMrush and Ahrefs, we thoroughly analyze your website to ensure it aligns with search engine algorithm standards. From checking and modifying URL structures to fixing indexation issues and optimizing sitemaps, we offer complete technical SEO solutions that enhance your site’s visibility and performance.",
      icon: <FaGlobe />,
    },
    {
      title: "On-Page SEO",
      description:
        "We perform detailed keyword and competitor research to optimize your website’s on-page elements. This includes improving content, meta tags, header tags, schema markup, robots.txt setup, image alt tags, and fixing broken links to ensure your pages are both search-engine and user-friendly.",
      icon: <FaSearch />,
    },
    {
      title: "Competitor Analysis",
      description:
        "Understanding your competitors’ SEO strategies helps identify opportunities to outperform them. Our team studies your niche and competition closely to craft a data-driven SEO approach that positions your business ahead in the digital landscape.",
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
    desc: "We perform detailed website audits using tools like SEMrush and Ahrefs to identify technical issues, check responsiveness, fix indexing problems, and improve your site’s overall SEO performance.",
  },
{
  icons: <FaSearch className="text-white w-8 h-8" />,
  title: "Strategic Keyword Targeting",
  desc: "We identify the most relevant and high-traffic keywords for your industry to ensure your website appears in front of the right audience. Our data-driven approach improves visibility and drives consistent organic growth.",
}
,
  {
    icons: <FaLaptopCode className="text-white w-8 h-8" />,
    title: "On-Page & Technical SEO",
    desc: "We enhance your website’s on-page structure — from meta tags and headings to schema markup and page speed — ensuring it aligns with Google’s ranking algorithms for maximum search visibility.",
  },
];


  const cards = [
    {
      count: "1500+",
      title: "PPC Campaigns Successfully Executed",
      desc: "We’ve executed over 1500 result-driven PPC campaigns across Google, Facebook, YouTube, and LinkedIn. Each campaign is crafted to maximize reach, engagement, and ROI, ensuring high-quality leads and conversions.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "10+",
      title: "Years of PPC Expertise",
      desc: "With over 10 years of experience in PPC management, our team delivers data-driven strategies that optimize ad spend, improve campaign performance, and help businesses achieve measurable growth.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Satisfied Global Clients",
      desc: "Trusted by more than 500 brands worldwide, we manage PPC campaigns that increase visibility, attract ready-to-buy customers, and generate tangible ROI for businesses of all sizes.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our focus on delivering high-performing campaigns has earned a 98% client satisfaction rate. We ensure transparent reporting, timely execution, and constant optimization for each client.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Ongoing Campaign Monitoring",
      desc: "Our PPC experts provide round-the-clock monitoring to optimize bids, tweak ads, and refine targeting strategies, ensuring your campaigns always perform at their peak.",
      image: "/Assets/seerviceSlider/slide5.webp",
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
      desc: "We implement retargeting strategies to re-engage visitors who didn’t convert initially, improving overall campaign efficiency and lead generation.",
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
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={cwd}
        title="SEO SERVICES"
        desc="Digital revolution has contributed to a crowded Search Engine Result Page (SERP) and studies reveal 75% of people never scroll past the first page. Businesses across industries are trying to outrank each other and achieve a top rank in the leading search engines.In such a competitive landscape, you cannot ace the ranking race without having a proper SEO strategy in place. And this is where we come in. Our niche-specific, data-driven, strategic SEO services can enhance your rank on the SERP. As a reliable SEO agency in India, we appoint the best minds in the industry to collaborate and fuel your business growth. Get a chance to focus on your business while we take."
      />

      <TechMarquee />

      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Result-Driven SEO Services
          </span>

          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
            Boost Organic Traffic & Rankings with Proven SEO Strategies
          </h4>

          <p className="text-base md:text-lg text-gray-600">
            At{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>
            , we offer comprehensive Search Engine Optimization (SEO) services
            that help your business achieve higher visibility, better search
            rankings, and consistent organic traffic. Our SEO experts specialize
            in on-page, off-page, and technical SEO to deliver sustainable
            growth for your brand.
          </p>

          {/* Main Description */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Our SEO strategies are data-driven and tailored to your business
            goals — ensuring long-term success in competitive markets.
            <br /> <br />
            <span className="font-semibold text-gray-900">For Businesses:</span>
            Keyword research, content optimization, backlink building, and local
            SEO techniques designed to attract high-intent visitors and improve
            conversions.
            <br /> <br />
            <span className="font-semibold text-gray-900">
              For Marketing Teams:
            </span>
            Detailed performance analytics, competitor insights, and monthly
            reports to measure keyword rankings, traffic growth, and ROI
            effectively.
            <br /> <br />
            With over 10 years of SEO expertise, we’ve helped brands across
            industries achieve top rankings and drive organic leads. Partner
            with{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            to dominate search results and grow your online presence
            organically.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="tel:+917056937000"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              Start Your SEO Campaign Today
            </a>
          </div>
        </div>
      </div>

      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
            Result-Oriented SEO Services
          </h5>

          <h4 className="font-bold text-gray-900">
             Drive Quality Traffic, Boost Rankings & Grow Your Business Organically

          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={featureImage}
              alt="eCommerce Development"
              width={100}
              height={100}
              className="w-full rounded-xl shadow-lg h-full  transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 gap-12 lg:gap-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-4 p-6 border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex -mt-14 text-[#7C4DDA] text-3xl bg-white justify-center items-center p-4 rounded w-20 h-20 border border-gray-400">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-sm lg:text-base text-gray-700 text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TurnYourBusiness */}

      <div className="business-idea mx-5 py-8 md:py-12 xl:py-16 my-8 lg:my-16 px-5 md:px-12 xl:px-28 bg-gradient-to-r rounded-3xl">
        <div className="text-center">
            <h5 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
      Leading SEO Company in India
    </h5>
    <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
      Drive Organic Growth & Boost Your Rankings with Expert SEO Strategies
    </h4>
        </div>

        <div className="mt-10 grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {businessData.map((elm) => (
            <div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-start text-start"
              key={elm.title}
            >
              <div className="bg-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {elm.icons}
              </div>
              <h5 className="text-xl md:text-2xl font-bold mb-2">
                {elm.title}
              </h5>
              <p className="text-gray-700 text-sm md:text-base">{elm.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CustomSlider
        cards={cards}
        title="Maximize Conversions with Expert PPC Management Solutions "
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Comprehensive PPC Management Services – Target, Engage & Convert Your Audience Effectively"
      />

      <FAQSection faqData={faqData} title=" About PPC Management Services" />

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Seo;
