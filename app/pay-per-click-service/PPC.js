import React from "react";

import Image from "next/image";
import cwd from "../Assets/ppc-new.webp";

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
        title="PPC MANAGEMENT SERVICES"
        desc="Looking for the quickest way to bring ready-to-buy customers to your website and mobile app? PPC (Pay-per-Click) offers the perfect solution. As a leading PPC management company in India we specialize in various PPC management services such as Google Adwords, Facebook and YouTube advertisements. As an certified PPC service provider in India, we have been serving a global clientele from varied industries and demographic for the past ten years in the most efficient manner."
      />

      <TechMarquee />

      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Result-Oriented PPC Management
          </span>

          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
            Driving Targeted Traffic & Maximizing ROI with PPC Campaigns
          </h4>

          <p className="text-base md:text-lg text-gray-600">
            At{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            we create highly effective Pay-Per-Click (PPC) campaigns to bring
            ready-to-buy customers to your website or mobile app. Our certified
            PPC experts specialize in Google Ads, Facebook Ads, YouTube Ads, and
            more, delivering measurable results with cost-effective campaigns.
          </p>

          {/* Main Description */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Our PPC services are designed to maximize your visibility, drive
            targeted traffic, and generate high-quality leads that convert into
            sales.
            <br /> <br />
            <span className="font-semibold text-gray-900">For Businesses:</span>
            Targeted ad campaigns, strategic keyword bidding, precise audience
            segmentation, retargeting, and data-driven optimization to maximize
            ROI.
            <br /> <br />
            <span className="font-semibold text-gray-900">
              For Marketing Teams:
            </span>
            Detailed analytics, campaign performance tracking, budget
            optimization, and reporting to guide strategy and enhance results.
            <br /> <br />
            With over 10 years of experience in PPC management, we’ve delivered
            successful campaigns for clients across industries. Choose our{" "}
            <span className="font-semibold text-indigo-600">
              PPC management services
            </span>{" "}
            to boost your online presence, attract qualified leads, and increase
            conversions.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="tel:+917056937000"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              Start Your PPC Campaign Today
            </a>
          </div>
        </div>
      </div>

      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
            Trusted PPC Management Services
          </h5>
          <h4 className="font-bold text-gray-900">
            Delivering Result-Driven Paid Campaigns for Maximum ROI
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={"/ecommerce-website-development-img.webp"}
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
      Leading PPC Management Company in India
    </h5>
    <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
      Maximize Conversions & ROI with Expert PPC Strategies
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

<FAQSection
  faqData={faqData}
  title=" About PPC Management Services"
/>

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default PPC;
