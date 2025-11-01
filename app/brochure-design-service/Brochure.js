import React from "react";

import Image from "next/image";
import gm from "../Assets/bb.gif";
import d1 from "../Assets/bro.gif";

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

const Brochure = () => {
 const features = [
  {
    title: "Company Brochure Design",
    description:
      "We design professional company brochures that create a lasting impression and elevate your brand’s visibility in the market with clean, creative layouts.",
    icon: <FaBuilding />,
  },
  {
    title: "Product Catalog Design",
    description:
      "Our eye-catching product catalogs showcase your entire product range, emphasizing features and benefits in a well-structured, visually appealing format.",
    icon: <FaBoxOpen />,
  },
  {
    title: "Sales Brochure Design",
    description:
      "Boost your conversions with sales brochures that highlight new products, offers, or promotional events in an engaging and persuasive way.",
    icon: <FaChartLine />,
  },
  {
    title: "Bi-Fold Brochure Design",
    description:
      "We create elegant bi-fold brochures with 4 panels — perfect for concise presentations that balance visuals and key information effectively.",
    icon: <FaBookOpen />,
  },
  {
    title: "Tri-Fold Brochure Design",
    description:
      "Our tri-fold brochures feature 6 panels, giving you ample space to showcase your content in a neat, organized, and professional structure.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Gate Fold Brochure Design",
    description:
      "Designed for high-end marketing campaigns, our gate fold brochures open up with sophistication — making your message stand out instantly.",
    icon: <FaFileAlt />,
  },
  {
    title: "Insert & Folder Brochure Design",
    description:
      "We craft practical insert and folder brochures with pockets for product sheets or offers — ideal for corporate presentations and events.",
    icon: <FaFolderOpen />,
  },
];

const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Creative Brochure Concepts",
    desc: "We design visually stunning and concept-driven brochures that effectively capture your brand essence and engage your target audience with clarity and impact.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Custom Layout & Design",
    desc: "Our experts craft unique brochure layouts, blending colors, typography, and imagery to create professional designs tailored to your business goals.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Collaborative Design Process",
    desc: "We work hand-in-hand with clients throughout the design journey to ensure every brochure reflects your brand personality and marketing objectives perfectly.",
  },
];
;

  const cards = [
    {
      count: "250+",
      title: "Videos Successfully Delivered",
      desc: "We’ve produced over 250 high-quality explainer videos that simplify complex ideas and help businesses communicate their stories effectively. From startups to enterprises, our videos drive engagement and conversions.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Production Expertise",
      desc: "With more than 15 years of experience in creative storytelling and animation, Future IT Touch Pvt. Ltd. delivers impactful explainer videos that educate, inspire, and connect with audiences worldwide.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Clients Served",
      desc: "Trusted by over 500 international brands, we create explainer videos that enhance communication, strengthen marketing efforts, and increase brand visibility across digital platforms.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our commitment to creativity, clarity, and storytelling excellence has earned us a 98% satisfaction rate. We focus on delivering videos that truly represent your brand and connect with your audience.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Dedicated Video Support",
      desc: "Our creative team provides round-the-clock support — from script revisions to post-production edits — ensuring every video meets your goals and maintains top-tier quality at all times.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Brochure Concept & Design",
    desc: "We create visually appealing brochure concepts that reflect your brand identity and convey your message clearly to engage your target audience effectively.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Layout & Visual Planning",
    desc: "Our team designs detailed layouts and mockups for each brochure, ensuring proper alignment of visuals, typography, and content for maximum readability and impact.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "Custom Illustrations & Graphics",
    desc: "We craft high-quality graphics, icons, and illustrations to enhance your brochure’s visual appeal and make your message more engaging and memorable.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Print-Ready Design",
    desc: "We prepare your brochures with professional print standards, color calibration, and formats to ensure they look perfect in both digital and physical formats.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Marketing & Promotional Brochures",
    desc: "We design brochures tailored for promotions, campaigns, and events, helping your business communicate offers and messages clearly and persuasively.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Performance & Quality Assurance",
    desc: "We review every brochure for design quality, accuracy, and branding consistency to ensure your final product meets your business goals and audience expectations.",
  },
];

 const faqData = [
  {
    title: "What services are included in Brochure Design?",
    description:
      "Our services include concept creation, layout design, custom graphics, typography, print-ready preparation, and digital adaptation to deliver professional and visually engaging brochures.",
  },
  {
    title: "Can you customize brochures for my business?",
    description:
      "Absolutely! We tailor every brochure — from style, layout, and colors to imagery and messaging — ensuring it perfectly represents your brand and communicates your message effectively.",
  },
  {
    title: "How do you ensure design quality and consistency?",
    description:
      "We follow a structured design process with detailed layouts, visual guidelines, and quality checks to maintain high-quality, consistent, and on-brand brochures across all projects.",
  },
  {
    title: "Do you provide brochures for both print and digital use?",
    description:
      "Yes, we create brochures optimized for print, PDFs, email campaigns, and digital downloads to ensure your content is accessible and visually appealing on all platforms.",
  },
  {
    title: "Can you redesign an existing brochure?",
    description:
      "Definitely! We can refresh your current brochures by updating visuals, layouts, typography, and messaging to make them more modern, engaging, and aligned with your audience.",
  },
  {
    title: "Do you provide ongoing brochure support?",
    description:
      "Yes, we offer continuous support including design updates, print revisions, digital adaptations, and guidance to ensure your brochures remain relevant and effective.",
  },
];

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={gm}
        title="BROCHURE DESIGN SERVICES"
        desc="Future IT Touch Pvt. Ltd., an certified company, has the experience of crafting the right brand message and promoting your business through custom brochure design services. Our specialization includes corporate & business brochure design, product catalogues, leaflets, flyers and much more. With a team of skilled and experienced designers we create unique designs that stand apart. Hire our graphic designers to present your business in a professional and graceful manner."
      />

      <TechMarquee />
     <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
      Professional & Creative Brochure Design Services
    </span>

    <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
      Designing Brochures That Speak Your Brand’s Story
    </h4>

    <p className="text-base md:text-lg text-gray-600">
      At{" "}
      <span className="font-semibold text-indigo-600">
        Future IT Touch Pvt. Ltd.
      </span>{" "}
      we specialize in creating impactful brochure designs that blend creativity, clarity, and strategy to effectively showcase your products, services, and brand message.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      A brochure is more than just printed paper — it’s a visual storyteller for your business. Our team combines innovative design concepts, compelling copy, and strategic layouts to help you make a lasting impression.
      <br /> <br />
      <span className="font-semibold text-gray-900">For Businesses:</span>{" "}
      We design corporate, product, and marketing brochures that reflect professionalism, boost brand recognition, and communicate value with elegance and precision.
      <br /> <br />
      <span className="font-semibold text-gray-900">For Audiences:</span>{" "}
      Our designs engage the reader through attractive visuals, clear messaging, and a perfect balance of creativity and information that drives interest and action.
      <br /> <br />
      With over 15 years of creative expertise, our{" "}
      <span className="font-semibold text-indigo-600">
        Brochure Design Services
      </span>{" "}
      help brands build credibility, attract customers, and leave a memorable impression.
    </p>

    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
      >
        Design Your Brochure Today
      </a>
    </div>
  </div>
</div>


      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
    Creative Brochure Design Services
          </h5>
          <h4 className="font-bold text-gray-900">
    Transforming Brand Messages into Visually Stunning Print Designs
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
  Professional Brochure Design Company in India
          </h5>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
  Crafting Brochures That Attract, Inform & Inspire Customers
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
        title="Designing Impactful Brochures That Inspire, Inform & Impress"
      />

      <WhyFutureITTouch
        platforms={platforms}
  title="Brochure Design Solutions We Deliver"
      />

      <FAQSection
        faqData={faqData}
  title="About Our Brochure Design Services"
      />

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Brochure;
