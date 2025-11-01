import React from "react";

import Image from "next/image";
import gm from "../Assets/cro.webp";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import devops from "../Assets/app-intro.webp";

import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import { FaPencilRuler, FaDesktop, FaCode, FaSearch } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import d1 from "../Assets/logo-gif.webp";


import {
  FaPalette,

} from "react-icons/fa";

import { FaLightbulb, FaHandshake } from "react-icons/fa";
import { 
  FaIdCard, 
  FaEnvelopeOpenText, 
  FaFolderOpen, 
  FaPenFancy, 
  FaFileInvoice, 
  FaBullhorn, 
  FaTools 
} from "react-icons/fa";
const Brochure = () => {
const features = [
  {
    title: "Business Card Design",
    description:
      "We craft professional business cards that reflect your brand identity, leaving a strong and memorable impression on clients and partners.",
    icon: <FaIdCard />,
  },
  {
    title: "Letterhead & Envelope Design",
    description:
      "Our custom letterheads and envelopes ensure consistent branding across all corporate communication, enhancing professionalism and trust.",
    icon: <FaEnvelopeOpenText />,
  },
  {
    title: "Presentation Folder Design",
    description:
      "We design branded folders that organize and showcase important documents, making a polished and cohesive impression during client meetings.",
    icon: <FaFolderOpen />,
  },
  {
    title: "Corporate Stationery Sets",
    description:
      "Complete stationery sets including notepads, pens, and office supplies, designed to maintain visual consistency and reinforce your corporate image.",
    icon: <FaPenFancy />,
  },
  {
    title: "Invoice & Report Templates",
    description:
      "Professionally designed templates for invoices, reports, and proposals that reflect your brand identity and ensure uniformity across documents.",
    icon: <FaFileInvoice />,
  },
  {
    title: "Branded Marketing Collateral",
    description:
      "We create branded letterheads, envelopes, and other materials for marketing campaigns, ensuring your corporate identity is cohesive and recognizable.",
    icon: <FaBullhorn />,
  },
  {
    title: "Custom Stationery Solutions",
    description:
      "Tailored stationery solutions to meet your business needs — combining creativity, functionality, and brand consistency for maximum impact.",
    icon: <FaTools />,
  },
];


const businessData = [
  {
    icons: <FaLightbulb className="text-white w-8 h-8" />,
    title: "Innovative Stationery Concepts",
    desc: "We create thoughtful and professional stationery designs that communicate your brand identity effectively across business cards, letterheads, and envelopes.",
  },
  {
    icons: <FaPalette className="text-white w-8 h-8" />,
    title: "Custom Layout & Branding",
    desc: "Our team develops visually cohesive layouts combining typography, colors, and graphics to ensure your stationery aligns perfectly with your corporate identity.",
  },
  {
    icons: <FaHandshake className="text-white w-8 h-8" />,
    title: "Client-Centric Collaboration",
    desc: "We engage closely with clients throughout the design process to ensure each stationery item reflects your brand personality, professionalism, and business goals.",
  },
];


const cards = [
  {
    count: "250+",
    title: "Brochures Successfully Delivered",
    desc: "We’ve designed over 250 professional brochures that clearly communicate brand messages and create strong impressions. From startups to enterprises, our brochures drive engagement and brand recognition.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Design Expertise",
    desc: "With more than 15 years of experience in corporate stationery and brochure design, Future IT Touch Pvt. Ltd. delivers visually compelling and strategically effective designs.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by over 500 brands worldwide, we produce brochures and corporate stationery that enhance brand communication and visibility across digital and print media.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our focus on design quality, attention to detail, and client collaboration has earned us a 98% satisfaction rate. We create brochures that reflect your brand identity effectively.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Design Support",
    desc: "Our team provides ongoing support for revisions, print preparation, and digital adaptation, ensuring your corporate stationery and brochures meet the highest standards.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const platforms = [
  {
    icon: <FaPalette className="text-white w-6 h-6" />,
    title: "Creative Concepts & Branding",
    desc: "We develop unique stationery and brochure concepts that capture your brand’s personality and communicate your message clearly to your target audience.",
  },
  {
    icon: <FaPencilRuler className="text-white w-6 h-6" />,
    title: "Layout & Visual Planning",
    desc: "Our team crafts detailed layouts and mockups for corporate stationery and brochures, ensuring perfect alignment of visuals, text, and branding elements.",
  },
  {
    icon: <FaDesktop className="text-white w-6 h-6" />,
    title: "Custom Graphics & Illustrations",
    desc: "We create tailored graphics, icons, and illustrations to enhance the visual appeal of your brochures and stationery, making them professional and engaging.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Print-Ready & Digital Design",
    desc: "We prepare your brochures and stationery for high-quality printing or digital distribution, maintaining color accuracy, resolution, and format compatibility.",
  },
  {
    icon: <FaChartLine className="text-white w-6 h-6" />,
    title: "Marketing & Promotional Materials",
    desc: "We design brochures, letterheads, and stationery that effectively promote your products, services, and corporate message across various platforms.",
  },
  {
    icon: <FaSearch className="text-white w-6 h-6" />,
    title: "Quality & Brand Consistency",
    desc: "Every design undergoes strict quality checks to ensure consistency with your brand guidelines and high professional standards for all print and digital materials.",
  },
];

const faqData = [
  {
    title: "What services are included in Corporate Stationery & Brochure Design?",
    description:
      "Our services include concept creation, layout design, custom graphics, typography, print-ready preparation, and digital adaptation to deliver professional and visually engaging stationery and brochures.",
  },
  {
    title: "Can you customize stationery for my business?",
    description:
      "Absolutely! We tailor every piece of stationery — from letterheads and envelopes to brochures and flyers — ensuring it perfectly represents your brand identity and messaging.",
  },
  {
    title: "How do you ensure design quality and consistency?",
    description:
      "We follow a structured design process with detailed layouts, brand guidelines, and quality checks to maintain high-quality, consistent, and on-brand stationery across all projects.",
  },
  {
    title: "Do you provide designs for both print and digital formats?",
    description:
      "Yes, we create corporate stationery and brochures optimized for print, PDFs, email campaigns, and digital downloads to ensure accessibility and visual appeal across all channels.",
  },
  {
    title: "Can you redesign an existing stationery set or brochure?",
    description:
      "Definitely! We can refresh your current corporate stationery or brochures by updating layouts, visuals, typography, and messaging to make them modern, engaging, and brand-aligned.",
  },
  {
    title: "Do you provide ongoing support after delivery?",
    description:
      "Yes, we offer continuous support including design updates, print revisions, digital adaptations, and guidance to ensure your stationery and brochures remain effective and up-to-date.",
  },
];

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={gm}
        title="The first impression is the best one"
        desc="Your business card builds your first impression. A professionally designed letterhead containing your business proposal increases your chances of acquiring the project. We start the process of crafting a corporate stationary design by knowing the ins and outs of your business so as to offer you with the best solution. Being a leading graphic design company in India, our aim is to uphold the corporate culture of your business and enhance its public image through our corporate identity design services."
      />

      <TechMarquee />
  <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
      Professional & Cohesive Corporate Stationery Design Services
    </span>

    <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
      Designing Corporate Stationery That Strengthens Your Brand Identity
    </h4>

    <p className="text-base md:text-lg text-gray-600">
      At{" "}
      <span className="font-semibold text-indigo-600">
        Future IT Touch Pvt. Ltd.
      </span>{" "}
      we create professional corporate stationery designs that convey consistency, professionalism, and brand personality across all office and business communication materials.
    </p>

    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Corporate stationery is more than just letterheads and business cards — it reflects your company’s professionalism and attention to detail. Our team crafts designs that align with your brand identity and communicate credibility.
      <br /> <br />
      <span className="font-semibold text-gray-900">For Businesses:</span>{" "}
      We design letterheads, business cards, envelopes, and office templates that enhance brand recognition, maintain consistency, and reinforce a professional image.
      <br /> <br />
      <span className="font-semibold text-gray-900">For Audiences:</span>{" "}
      Our designs leave a lasting impression on clients, partners, and stakeholders by combining clarity, creativity, and functional design that reflects your brand values.
      <br /> <br />
      With over 15 years of design expertise, our{" "}
      <span className="font-semibold text-indigo-600">
        Corporate Stationery Design Services
      </span>{" "}
      help businesses establish a consistent, professional, and trustworthy brand presence.
    </p>

    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
      >
        Design Your Corporate Stationery Today
      </a>
    </div>
  </div>
</div>


      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
    Professional Corporate Stationery Design
          </h5>
          <h4 className="font-bold text-gray-900">
    Crafting Consistent & Impactful Brand Identity Across All Office Collateral
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
      Professional Corporate Stationery Design Company in India
          </h5>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
      Crafting Stationery That Strengthens Your Brand Identity
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
  title="Creating Professional Corporate Stationery That Strengthens Your Brand"
/>

<WhyFutureITTouch
  platforms={platforms}
  title="Corporate Stationery Solutions We Deliver"
/>

<FAQSection
  faqData={faqData}
  title="About Our Corporate Stationery Design Services"
/>


      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Brochure;
