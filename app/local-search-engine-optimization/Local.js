import React from "react";

import Image from "next/image";
import image2 from "../Assets/lss.webp";
import mrk from "../Assets/mrk.gif";
import cwd from "../Assets/loc.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import { FaUsers } from "react-icons/fa";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import {
  FaBuilding,
  FaBoxOpen,
  FaLayerGroup,
  FaFileAlt,
  FaFolderOpen,
} from "react-icons/fa";

import {
  FaPalette,
  FaCommentDots,
  FaGlobe,
  FaBookOpen,
  FaChartPie,
} from "react-icons/fa";

import { FaLightbulb, FaHandshake } from "react-icons/fa";

const Local = () => {

const features = [
  {
    title: "Local SEO Audit & Strategy",
    description:
      "We analyze your business’s local search presence and develop a tailored SEO strategy. By optimizing for location-based keywords, competitor insights, and audience behavior, we ensure your business ranks higher in local search results and attracts nearby customers.",
    icon: <FaBuilding />,
  },
  {
    title: "Google Business Profile Optimization",
    description:
      "Our team optimizes your Google Business Profile to improve visibility on Google Maps and local search results. From updating business info to adding images and posts, we ensure your profile drives clicks, calls, and visits.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Local Keyword & Content Optimization",
    description:
      "We target location-specific keywords and optimize website content to appear in local searches. By combining relevant local content, meta tags, and on-page SEO best practices, we increase your visibility and attract local customers actively searching for your services.",
    icon: <FaChartLine />,
  },
  {
    title: "Local Link Building & Citations",
    description:
      "We build high-quality local backlinks and citations across relevant directories to enhance your domain authority and local search rankings. This strengthens your online credibility and helps customers find your business easily.",
    icon: <FaBookOpen />,
  },
  {
    title: "Review & Reputation Management",
    description:
      "We help you manage online reviews and reputation to build trust and credibility. Our strategies encourage positive reviews, respond to customer feedback, and maintain a strong local presence that influences buying decisions.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Analytics & Performance Tracking",
    description:
      "We monitor your local SEO campaigns using metrics like search rankings, website traffic, and leads. Insights are used to refine strategies, optimize efforts, and ensure your business achieves maximum results in local search.",
    icon: <FaFileAlt />,
  },
  {
    title: "Local SEO Refresh & Optimization",
    description:
      "For businesses looking to improve local search visibility, we refresh and optimize existing SEO efforts. From website updates to citation corrections, we ensure your local presence remains strong, competitive, and effective.",
    icon: <FaFolderOpen />,
  },
];


const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Local SEO Strategy",
    desc: "We design customized local SEO strategies to help your business appear in nearby search results, increasing foot traffic, calls, and leads from customers in your area.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Website & Content Optimization",
    desc: "Our team optimizes your website content, meta tags, and location pages to ensure your business ranks higher for local searches and reaches customers searching for your products or services nearby.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Collaborative Local SEO Process",
    desc: "We work closely with your team to understand your business locations, services, and target audience, ensuring our local SEO efforts align with your goals and deliver measurable results.",
  },
];


const cards = [
  {
    count: "1000+",
    title: "Local Listings Optimized",
    desc: "We have optimized over 1000 local listings across directories and search platforms, helping businesses increase local visibility and attract more nearby customers effectively.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of SEO Expertise",
    desc: "With over 15 years of SEO experience, Future IT Touch Pvt. Ltd. delivers expert local search optimization strategies that improve rankings, traffic, and conversions for businesses worldwide.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by over 500 brands, we create local SEO campaigns that enhance online presence, improve visibility on maps, and drive measurable traffic from local searches.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our dedication to effective local SEO strategies has earned us a 98% satisfaction rate. We ensure each campaign drives results that meet business goals and increase local engagement.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Support",
    desc: "Our team provides continuous support for local SEO campaigns, including updates, reporting, and optimizations to ensure your business remains visible and competitive in your local area.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Local SEO Audits & Strategy",
    desc: "We perform detailed local SEO audits and develop tailored strategies to improve your visibility in location-based searches and attract nearby customers.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Google Business Profile Optimization",
    desc: "We optimize your Google Business Profile for maps and search, ensuring your business appears accurately and prominently in local searches.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "Local Content & Keyword Optimization",
    desc: "We enhance website content and target local keywords to improve search rankings, making it easier for nearby customers to find your products or services.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Local Link Building & Citations",
    desc: "We build quality local backlinks and citations across relevant directories to improve your domain authority and search visibility in local searches.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Review & Reputation Management",
    desc: "We monitor and manage online reviews to build trust and credibility, encouraging positive feedback and fostering strong local customer relationships.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Analytics & Continuous Optimization",
    desc: "We track local SEO performance using analytics, refining strategies to ensure sustained visibility, higher rankings, and increased local engagement.",
  },
];

const faqData = [
  {
    title: "What services are included in Local SEO?",
    description:
      "Our services include local SEO audits, Google Business Profile optimization, location-based content, citation building, review management, and continuous analytics monitoring to improve local search performance.",
  },
  {
    title: "Can you optimize my business for local searches?",
    description:
      "Absolutely! We customize strategies to improve your local search rankings, ensuring customers nearby can easily find your business and engage with your services.",
  },
  {
    title: "Do you manage Google Maps and local listings?",
    description:
      "Yes, we optimize and manage your listings on Google Maps and other local directories to improve visibility, accuracy, and trust with potential customers in your area.",
  },
  {
    title: "Can you help my existing website rank locally?",
    description:
      "Definitely! We optimize your website, content, and local pages to rank higher in search results for relevant local keywords, driving targeted traffic and conversions.",
  },
  {
    title: "How do you track the success of local SEO campaigns?",
    description:
      "We track metrics such as local search rankings, traffic from local searches, leads generated, and customer engagement to measure campaign success and refine strategies accordingly.",
  },
  {
    title: "Do you provide ongoing local SEO support?",
    description:
      "Yes, we offer continuous support including campaign updates, optimization, reporting, and strategic adjustments to maintain and improve your local search visibility over time.",
  },
];

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={cwd}
        title="LOCAL SEO SERVICES"
        desc="Future IT Touch Pvt. Ltd. With about 46% of all the Google searches featuring a local intent, Google is placing more importance on delivering local results that offer an immediate solution to the customers. Also, studies reveal that 78% of location-oriented searches invariably lead to offline conversion. All these statistics are compelling businesses to prepare for proximity-based search. If your business is not optimized for geo-targeted search, it’s high time to avail local SEO services."
      />

      <TechMarquee />

      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Professional & Result-Oriented Local SEO Services
          </span>

          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
            Optimizing Your Local Presence to Attract Nearby Customers
          </h4>

          <p className="text-base md:text-lg text-gray-600">
            At{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            we create comprehensive local SEO strategies that help your business rank higher in local searches, attract relevant customers, and drive conversions. Effective local SEO builds visibility, trust, and a strong online reputation.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            From Google Business Profile optimization to local content creation, citations, and review management, we ensure your business stands out in your area. Our experienced SEO specialists combine technical expertise, analytics, and strategy to deliver measurable local search results.
            <br /> <br />
            With over 15 years of experience, we provide high-quality{" "}
            <span className="font-semibold text-indigo-600">
              Local SEO Services
            </span>{" "}
            tailored to your business locations and audience. We help you attract more local customers, increase engagement, and drive leads efficiently.
          </p>

          <div className="pt-4">
            <a
              href="tel:+917056937000"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              Improve Your Local Search Visibility Today
            </a>
          </div>
        </div>
      </div>

      {/* High performance */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
            Result-Oriented Local SEO Services
          </h5>
          <h4 className="font-bold text-gray-900">
            Boosting Your Online Presence to Drive Local Customers
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0">
            <Image
              src={image2}
              alt="Local SEO"
              className="w-full rounded-xl shadow-lg h-full object-cover hover:scale-105 md:min-h-[70vh] transition-transform duration-500"
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
            Professional Local SEO Company in India
          </h5>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
            Boosting Local Visibility to Attract Nearby Customers
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
        title="Improving Local Search Rankings & Customer Visibility"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Local SEO Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
        title="About Our Local SEO Services"
      />

      <BuinessIdea />
    </>
  );
};

export default Local;
