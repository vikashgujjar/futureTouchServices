import React from "react";

import Image from "next/image";
import d1 from "../Assets/graphic-and-logo-design-service.webp";
import gm from "../Assets/logo-1.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import {  FaUsers } from "react-icons/fa";
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

const Logo = () => {

const features = [
  {
    title: "Custom Business Logo Design",
    description:
      "We create fully customized logos that perfectly capture your business identity. Each design incorporates thoughtful color schemes, typography, and symbolic elements that align with your brand values and target audience. Our goal is to craft a logo that not only stands out visually but also communicates your brand story and helps establish a strong market presence. With attention to detail and strategic design, we ensure your logo creates a lasting impression.",
    icon: <FaBuilding />,
  },
  {
    title: "Icon & Symbol Design",
    description:
      "Our designers specialize in crafting memorable icons and symbols that serve as visual shorthand for your brand. By combining creativity with brand insights, we design symbols that are simple yet highly impactful, making your brand instantly recognizable. These elements can be used across digital and print media to strengthen brand recall, enhance customer engagement, and convey complex ideas in a visually appealing way.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Typography & Calligraphy Logos",
    description:
      "Typography and calligraphy logos are designed to give your brand a unique personality. We carefully select fonts, lettering styles, and artistic flourishes that reflect your brand’s tone, whether elegant, modern, playful, or professional. Every curve, spacing, and stroke is considered to ensure the logo communicates the intended message effectively while leaving a lasting visual impression on your audience.",
    icon: <FaChartLine />,
  },
  {
    title: "Brand Mascot Logos",
    description:
      "Brand mascot logos are an excellent way to build emotional connections with your audience. We create distinctive mascots that embody your brand’s values, personality, and story. These characters can be used in marketing campaigns, merchandise, and social media, helping your brand stand out in a crowded market. A well-designed mascot becomes a memorable symbol that people associate with trust, friendliness, and engagement.",
    icon: <FaBookOpen />,
  },
  {
    title: "Lettermark & Monogram Logos",
    description:
      "Lettermark and monogram logos are minimalistic yet powerful ways to represent your brand. We craft these logos using initials or short letter combinations, focusing on clean, sophisticated designs that convey professionalism and elegance. Ideal for luxury brands, corporate identities, and personal brands, these logos are versatile, scalable, and highly recognizable across all mediums, from digital platforms to print collateral.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Emblem & Badge Logos",
    description:
      "Emblem and badge logos are classic designs that convey authority, credibility, and heritage. We design logos that combine text and symbols into a cohesive unit, perfect for institutions, schools, government bodies, and formal organizations. Our approach ensures that your emblem logo communicates reliability, trustworthiness, and timeless professionalism while maintaining a visually appealing and balanced design.",
    icon: <FaFileAlt />,
  },
  {
    title: "Rebranding & Logo Refresh",
    description:
      "Rebranding and logo refresh services help established brands revitalize their visual identity for modern audiences. We analyze your existing brand image and craft updated logos that retain brand recognition while enhancing relevance, appeal, and versatility. Our team focuses on evolving the design to reflect growth, new values, or market positioning, ensuring your refreshed logo resonates with current and future customers while staying true to your brand’s essence.",
    icon: <FaFolderOpen />,
  },
];


const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Creative Logo Concepts",
    desc: "We craft innovative logo concepts that reflect your brand’s personality and values, making sure your logo stands out and leaves a lasting impression on your audience.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Custom Typography & Design",
    desc: "Our designers blend custom typography, colors, and graphical elements to create logos that are visually striking, professional, and perfectly aligned with your brand identity.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Collaborative Logo Design ",
    desc: "We work closely with you throughout the design journey, incorporating feedback and insights to ensure your logo captures your vision and effectively communicates your brand story.",
  },
];


const cards = [
  {
    count: "1000+",
    title: "Logos Successfully Designed",
    desc: "We’ve created over 1000 unique and professional logos for businesses across industries. Each design is tailored to capture brand identity, engage audiences, and leave a lasting impression.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Design Expertise",
    desc: "With more than 15 years of experience in logo and brand design, Future IT Touch Pvt. Ltd. delivers creative and impactful logos that elevate brand perception and recognition globally.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by over 500 international brands, we craft logos that strengthen brand identity, improve visibility, and resonate with target audiences across multiple platforms.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Client Satisfaction Rate",
    desc: "Our dedication to creativity, precision, and client collaboration has earned us a 99% satisfaction rate. We ensure each logo meets your vision and brand strategy perfectly.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Ongoing Design Support",
    desc: "Our team provides continuous support — from revisions to final delivery — making sure your logo is polished, consistent, and ready for all branding needs.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Creative Logo Concepts",
    desc: "We develop unique logo concepts that capture your brand essence, combining symbolism, typography, and colors to create visually compelling designs that stand out in the market.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Custom Typography & Iconography",
    desc: "Our designers craft tailored typography and icons for each logo, ensuring that every element aligns with your brand identity and communicates your message effectively.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "Versatile & Scalable Designs",
    desc: "We create logos that work seamlessly across digital and print mediums — from websites and social media to business cards and signage — maintaining clarity and impact at any size.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Brand Identity Integration",
    desc: "Our logo designs are integrated into your overall brand strategy, ensuring consistency with colors, fonts, and visual messaging to strengthen brand recognition.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Rebranding & Logo Refresh",
    desc: "We offer expert logo redesigns and rebranding services to modernize your visual identity while maintaining brand recall and appeal for existing and new audiences.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Quality & Satisfaction Guarantee",
    desc: "Every logo goes through thorough quality checks and client feedback rounds to ensure the final design meets your expectations and effectively represents your brand.",
  },
];

const faqData = [
  {
    title: "What services are included in Logo Design?",
    description:
      "Our services cover logo concept creation, typography and iconography design, brand identity integration, versatile and scalable designs, and rebranding support to deliver professional, memorable logos.",
  },
  {
    title: "Can you create custom logos for my business?",
    description:
      "Absolutely! Every logo is uniquely crafted to match your business goals, brand personality, and target audience. We ensure the design is original, visually appealing, and aligned with your brand message.",
  },
  {
    title: "Do you provide logos suitable for both digital and print?",
    description:
      "Yes, we design logos that are optimized for all platforms, including websites, social media, business cards, packaging, and large-scale prints, ensuring consistent quality and visual impact.",
  },
  {
    title: "Can you refresh or redesign my existing logo?",
    description:
      "Definitely! We provide rebranding and logo refresh services to modernize your logo while maintaining brand recognition and enhancing its appeal to current and new audiences.",
  },
  {
    title: "How do you ensure logo design quality?",
    description:
      "Our process includes detailed brand analysis, multiple design concepts, iterative client feedback, and quality assurance checks to deliver logos that are professional, impactful, and on-brand.",
  },
  {
    title: "Do you offer ongoing support after logo delivery?",
    description:
      "Yes, we provide ongoing support including logo file updates, revisions, brand guidelines assistance, and guidance on how to maintain consistency across all digital and print materials.",
  },
];
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={gm}
        title="LOGO DESIGN SERVICES"
        desc="A well-designed logo is more than just a creative mark. It facilitates brand recognition. As an certified logo design company in India, our experienced logo designers know how to deliver a memorable logo that noticeably stands out, ultimately building a unique identity. Engage our logo design services to get a perfect emblem that best represents your brand."
      />

      <TechMarquee />
    <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
      Professional & Creative Logo Design Services
    </span>

    <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
      Designing Logos That Inspire a Unique Brand Vision
    </h4>

    <p className="text-base md:text-lg text-gray-600">
      At{" "}
      <span className="font-semibold text-indigo-600">
        Future IT Touch Pvt. Ltd.
      </span>{" "}
      we go beyond templates to craft logos that truly reflect your brand’s identity. A well-designed logo evokes emotions, builds recall, and helps grow your customer base.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Think about some of the iconic brands you remember – the moment you see their logo, the entire brand story comes to mind. Our experienced designers combine symbols, calligraphy, design art, and other aesthetic elements to create logos that leave a lasting impression.
      <br /> <br />
      With over 15 years of experience and a team of creative professionals, we deliver high-quality and unique{" "}
      <span className="font-semibold text-indigo-600">
        Business Logo Design Services
      </span>{" "}
      tailored for all your needs. As a trusted logo design company, we have served thousands of clients worldwide, helping brands establish credibility and visual identity.
    </p>

    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
      >
        Design Your Logo Today
      </a>
    </div>
  </div>
</div>



      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
        <h5 className="font-bold text-[#7C4DDA]">
    Creative Logo Design Services
  </h5>
  <h4 className="font-bold text-gray-900">
    Transforming Brand Identities into Memorable Logos
  </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={d1}
              alt="eCommerce Development"
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
      Professional Logo Design Company in India
          </h5>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
      Crafting Logos That Inspire, Engage & Build Brand Identity
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
  title="Designing Memorable Logos That Build Brand Identity & Recognition"
/>

   <WhyFutureITTouch
  platforms={platforms}
  title="Logo Design Solutions We Deliver"
/>

<FAQSection
  faqData={faqData}
  title="About Our Logo Design Services"
/>

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Logo;
