// import React from "react";

// import Image from "next/image";
// import Ism from "../Assets/lsm.gif";
// import gm from "../Assets/gm.webp";
// import cms from "../Assets/cms.gif";
// import { cmsData } from "../common/Service_comp";
// import {
//   FaAtom,
//   FaAudible,
//   FaBookOpen,
//   FaBookReader,
//   FaChevronRight,
//   FaHandHoldingUsd,
//   FaSearch,
// } from "react-icons/fa";

// import { developmentData } from "../common/Service_comp";
// import WhatCanDo from "../components/WhatCanDo";
// import RequestQuote from "../components/RequestQuote";
// import GetNewInsight from "../components/GetNewInsight";

// const CMS = () => {
//   const filteredData = developmentData.filter(
//     (item, index) => index >= 2 && index <= 5
//   );

//   return (
//     <>
//       <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
//       <div className="relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
//         <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
//           <div className="  ">
//             <h1 className="text-white font-bold text-4xl  max-sm:text-2xl">
//               CMS WEB DEVELOPMENT SERVICES
//             </h1>

//             <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
//               <p>
//                 A CMS (Content Management System) allows you to control and
//                 manage the content of your website with little or no knowledge
//                 of coding. It provides an easy interface to add / delete new
//                 pages and edit the content within. CMS offers a site-search tool
//                 for the visitors to find any specific content they are looking
//                 for. At Future IT Touch Pvt. Ltd., a leading CMS web development
//                 company in India, we deal with all types of open source content
//                 management systems and provide customized solutions to meet your
//                 needs.
//               </p>
//             </div>
//             <div className="flex gap-3 mt-5">
//               <a
//                 href="/contact"
//                 className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
//               >
//                 Quick Enquiry
//               </a>
//               <a
//                 href="tel:+917056937000"
//                 className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading "
//               >
//                 Call us - 7056937000
//               </a>
//             </div>
//           </div>
//           <Image
//             src={gm}
//             width={400}
//             height={400}
//             alt=""
//             className="w-96 pt-0 max-sm:pt-10 max-lg:mx-auto"
//           />
//         </div>
//       </div>

//    <section className="Trusted-eCommerc px-5 md:px-12 xl:px-28 py-10">
//   {/* Section Header */}
//   <div className="trusted-text">
//     <h4 className="text-2xl sm:text-3xl md:text-4xl text-[#050748] font-bold">
//       CMS Website Development
//     </h4>
//     <p className="text-base sm:text-lg text-[#6a6a8e] mt-3 max-sm:text-justify leading-relaxed">
//       Websites built on CMS have an edge over others because of their inherent
//       features and ease of management. Let us check out some other benefits of
//       CMS website development: website development company in India, we take
//       care of both the requirements by ensuring the following criteria for our
//       online store development services:
//     </p>
//   </div>

//   {/* CMS Features Grid */}
//   <div className="flex flex-col md:flex-row gap-10 mt-10">
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-[#6a6a8e]">
//       {[
//         {
//           icon: FaHandHoldingUsd,
//           title: "Affordability:",
//           desc: "It reduces the website maintenance cost by providing the website owners with the ease of managing their sites single-handedly.",
//         },
//         {
//           icon: FaBookOpen,
//           title: "What You See Is What You Get:",
//           desc: "Edit, modify and format your content easily with WYSIWYG editor.",
//         },
//         {
//           icon: FaBookReader,
//           title: "Better Content Management:",
//           desc: "A CMS supports seamless management of media and document files.",
//         },
//         {
//           icon: FaAudible,
//           title: "Multiple languages:",
//           desc: "Any Content Management System allows you to develop and maintain a multilingual website with little effort.",
//         },
//         {
//           icon: FaAtom,
//           title: "Social Media Integration:",
//           desc: "You can connect your website to your social media networks and integrate its feeds on your website with ease.",
//         },
//         {
//           icon: FaSearch,
//           title: "SEO Friendly Website Development:",
//           desc: "An SEO friendly coding structure helps rank your website at the top of search engine results.",
//         },
//       ].map((item, index) => (
//         <div key={index}>
//           <div className="flex flex-col lg:flex-row items-start gap-5">
//             <div className="rounded-full p-4 bg-white border-2 border-[#e33f70] flex items-center justify-center">
//               <item.icon className="text-4xl text-[#e33f70]" />
//             </div>
//             <div className="ml-0 lg:ml-2">
//               <p className="text-xl font-bold text-[#e33f70]">{item.title}</p>
//               <p className="mt-2 text-base sm:text-lg text-justify">{item.desc}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       <WhatCanDo/>

//    <div className="bg-[#f2f2f2] px-5 sm:px-10 md:px-12 xl:px-28 py-14">
//   <h3 className="text-2xl sm:text-[27px] md:text-3xl text-[#050748] font-bold">
//     Custom CMS Website Development Services
//   </h3>
//   <p className="text-base sm:text-lg text-[#6a6a8e] mt-3 max-sm:text-justify leading-relaxed">
//     Being a certified company, it is our responsibility to ensure the highest quality of services for our clients. Our effective custom CMS website development services ensure that the content on your website is properly organized, helping you manage it easily. Some important features of our CMS Solutions are:
//   </p>

//   <div className="flex flex-col xl:flex-row gap-10 mt-10">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#6a6a8e]">
//       {cmsData.map((item, index) => (
//         <div key={index}>
//           <div className="flex flex-col lg:flex-row items-start gap-5">
//             <div>
//               <item.icon className="text-4xl" style={{ color: item.color }} />
//             </div>
//             <div className="ml-0 lg:ml-2">
//               <p className="text-xl font-bold" style={{ color: item.color }}>
//                 {item.title}
//               </p>
//               <p className="mt-2 text-base sm:text-lg">{item.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     <div className="w-full max-sm:pt-10 flex justify-center">
//       <Image src={cms} width={400} height={400} alt="" className="max-w-full h-auto" />
//     </div>
//   </div>

//   <div className="pt-16">
//     <h3 className="text-2xl sm:text-[27px] md:text-3xl text-[#050748] font-bold">
//       CMS Web Development Using Open Source Platforms:
//     </h3>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-[#6a6a8e] text-base sm:text-lg">
//       {filteredData.map((item, index) => (
//         <div key={index} className="Development-text">
//           <div className="flex items-center gap-3 mb-2">
//             <Image
//               src={item.imgSrc}
//               width={400}
//               height={400}
//               alt={item.alt}
//               className="rounded-full w-12 h-12 object-cover"
//             />
//             <p className="text-lg text-[#e33f70]">{item.title}</p>
//           </div>
//           <p className="text-justify">{item.description}</p>
//         </div>
//       ))}
//     </div>
//     <p className="text-base sm:text-lg text-[#6a6a8e] mt-10 leading-relaxed">
//       We are a customer-oriented eCommerce website development company in India striving to go beyond your expectations of a bespoke online store. To get an impressive B2C or B2B eCommerce solution, call us today or request a free quote now.
//     </p>
//   </div>
// </div>

//     <RequestQuote/>

//    <div className="bg-[#f2f2f2] px-5 sm:px-10 md:px-12 xl:px-28 py-14">
//   <h3 className="text-2xl sm:text-[27px] md:text-3xl text-[#050748] font-bold">
//     Custom CMS Website Development Services
//   </h3>
//   <p className="text-base sm:text-lg text-[#6a6a8e] mt-2 max-sm:text-justify leading-relaxed">
//     We would be happy to discuss the project with you in person
//   </p>

//   <div className="flex flex-col lg:flex-row gap-10 mt-10">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#6a6a8e]">
//       {cmsData.map((item, index) => (
//         <div key={index}>
//           <div className="flex flex-col lg:flex-row items-start gap-5">
//             <div
//               className="rounded-full p-4 bg-white border-2 flex items-center justify-center"
//               style={{ borderColor: item.color }}
//             >
//               <item.icon className="text-4xl" style={{ color: item.color }} />
//             </div>
//             <div className="ml-0 lg:ml-2">
//               <p className="text-xl font-bold" style={{ color: item.color }}>
//                 {item.title}
//               </p>
//               <p className="mt-2 text-base sm:text-lg">{item.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//     <div className="w-full max-sm:pt-10 flex justify-center">
//       <Image
//         src={Ism}
//         width={400}
//         height={400}
//         alt=""
//         className="border-[18px] border-[#dfdfdf] max-w-full h-auto"
//       />
//     </div>
//   </div>

//   <p className="text-base sm:text-lg text-[#6a6a8e] mt-10 max-sm:text-justify leading-relaxed">
//     In the last 15 years, we have worked with hundreds of online retailers and delivered their customers with a beautiful online shopping experience. From startup to enterprise, single vendor to multi vendor, B2C to B2B business - we have provided effective eCommerce solutions to a global clientele. We have also built several eCommerce mobile apps as per the need of the businesses. <br /> Further, we can promote the online stores through effective digital marketing. SEO, SMM, online reputation management, content & email marketing - we do it all. Rely on us and we will offer the best digital solutions for your eCommerce business.
//   </p>
// </div>

//    <GetNewInsight/>
//     </>
//   );
// };

// export default CMS;

import React from "react";

import gg from "../Assets/gg.webp";
import gm from "../Assets/gm.webp";
import {  FaSync, FaExchangeAlt, FaHeadset, FaBriefcase, FaBullhorn } from "react-icons/fa";
import { FaWordpress, FaShoppingBag, FaMagento, FaShopify, FaDrupal } from "react-icons/fa";

import {
  FaLaptopCode,
  FaShoppingCart,
  FaBuilding,
  FaNetworkWired,
  FaCode,
} from "react-icons/fa";

import Image from "next/image";

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import { FaTools, FaDatabase } from "react-icons/fa";
import { FaCogs, FaServer } from "react-icons/fa";

import image2 from "../Assets/gif.gif";
import {
  FaMoneyBillWave,
  FaEdit,
  FaFileAlt,
  FaGlobe,
  FaShareAlt,
  FaSearch,
} from "react-icons/fa";

const Ecommerce = () => {
  const features = [
    {
      title: "Affordable Website Management",
      description:
        "CMS development reduces ongoing maintenance costs by giving business owners the flexibility to manage and update their websites without constant developer support. This ensures cost-effectiveness and control.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Easy-to-Use Editing Tools",
      description:
        "With an intuitive WYSIWYG editor, you can edit, format, and publish content effortlessly. No coding knowledge is required, making it simple for anyone to keep the site fresh and updated.",
      icon: <FaEdit />,
    },
    {
      title: "Better Content Organization",
      description:
        "CMS platforms provide structured content management, allowing you to upload, organize, and update text, media, and documents seamlessly. This ensures a clean, consistent, and user-friendly site.",
      icon: <FaFileAlt />,
    },
    {
      title: "Multilingual Capabilities",
      description:
        "Expand your reach by building and maintaining a multilingual website with ease. A CMS makes it simple to manage translations and cater to diverse global audiences.",
      icon: <FaGlobe />,
    },
    {
      title: "Social Media Integration",
      description:
        "Connect your website to leading social media platforms, embed feeds, and share updates instantly. This boosts brand visibility and strengthens user engagement across multiple channels.",
      icon: <FaShareAlt />,
    },
    {
      title: "SEO-Friendly Structure",
      description:
        "Our CMS development ensures an SEO-optimized website with clean coding practices, metadata control, and keyword-ready architecture to improve your search engine rankings.",
      icon: <FaSearch />,
    },
  ];

const businessData = [
  {
    icons: <FaLaptopCode className="text-white w-8 h-8" />,
    title: "CMS Web Design & Development",
    desc: "We build mobile-responsive CMS websites that are feature-rich, user-friendly, and fully aligned with the latest design trends and technologies.",
  },
  {
    icons: <FaSync className="text-white w-8 h-8" />,
    title: "CMS Upgrade & Integration",
    desc: "Our team helps upgrade your existing CMS version and integrates plugins or components to extend functionality and keep your website modern.",
  },
  {
    icons: <FaExchangeAlt className="text-white w-8 h-8" />,
    title: "Existing CMS Migration",
    desc: "We ensure smooth migration of your website from one CMS platform to another without losing data, SEO ranking, or performance quality.",
  },
];


const cards = [
  {
    count: "100+",
    title: "CMS Websites Delivered",
    desc: "We have successfully delivered over 100 CMS-based websites, ensuring responsive design, smooth functionality, and secure, scalable online platforms for clients worldwide.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "10+",
    title: "Years of Expertise",
    desc: "With over 10 years of experience in CMS and eCommerce development, our team applies modern technologies and best practices to build robust, user-friendly websites tailored to your business needs.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Clients Supported Globally",
    desc: "Trusted by over 500 businesses globally, we provide expert CMS development and maintenance. Our solutions span multiple industries, ensuring secure, fast, and efficient websites for all.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our client-centric approach in CMS and eCommerce development has earned a 98% satisfaction rate. We deliver intuitive, feature-rich websites with timely support and maintenance.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Support",
    desc: "We provide round-the-clock support for all CMS websites. Our team ensures smooth operation, timely updates, and quick resolution of any technical issues to keep your site reliable.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


const platforms = [
  {
    icon: <FaWordpress className="text-white w-6 h-6" />,
    title: "WordPress Development",
    desc: "We build lightweight and easy-to-manage WordPress websites. Using WooCommerce, we create scalable eCommerce stores with secure payments, shipping options, and modern features.",
  },
  {
    icon: <FaShoppingBag className="text-white w-6 h-6" />,
    title: "PrestaShop Development",
    desc: "PrestaShop is free, lightweight, and supports multiple languages. Our experts craft unique eCommerce websites that allow you to sell globally with ease and flexibility.",
  },
  {
    icon: <FaMagento className="text-white w-6 h-6" />,
    title: "Magento Development",
    desc: "We deliver powerful Magento-based eCommerce platforms with custom features, high scalability, and advanced integrations to ensure seamless online shopping experiences.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Custom Development",
    desc: "Our team creates tailor-made eCommerce solutions using Laravel, CodeIgniter, NodeJS, and other frameworks, ensuring robust, feature-rich, and scalable applications.",
  },
  {
    icon: <FaShopify className="text-white w-6 h-6" />,
    title: "Shopify Development",
    desc: "Shopify enables quick store setup with 100+ themes and plugins. We build storefronts with SEO, fraud prevention, drop-shipping support, and social media integration.",
  },
  {
    icon: <FaDrupal className="text-white w-6 h-6" />,
    title: "Drupal Development",
    desc: "Drupal is highly flexible and secure. We develop enterprise-grade CMS platforms with multi-language support, advanced customization, and strong community-driven modules.",
  },
];

const faqData = [
  {
    title: "What types of CMS websites do you develop?",
    description:
      "We specialize in WordPress, PrestaShop, Magento, Shopify, Drupal, and custom CMS websites, tailored to meet your business goals and provide a seamless user experience.",
  },
  {
    title: "Can you customize CMS websites to my business needs?",
    description:
      "Absolutely! We offer full customization of themes, plugins, and features, ensuring your CMS website aligns perfectly with your brand and operational workflows.",
  },
  {
    title: "Are CMS websites secure and scalable?",
    description:
      "Yes, security and scalability are top priorities. We implement secure coding practices, configure SSL, and build CMS websites capable of handling high traffic and growing content needs.",
  },
  {
    title: "Can you integrate third-party tools and plugins?",
    description:
      "Definitely. We integrate payment gateways, marketing tools, analytics, social media plugins, and other third-party solutions to enhance your CMS website’s functionality.",
  },
  {
    title: "Are the CMS websites mobile-friendly and responsive?",
    description:
      "Yes, all our CMS websites are fully responsive, mobile-optimized, and cross-browser compatible, ensuring a smooth user experience on desktops, tablets, and smartphones.",
  },
  {
    title: "Do you provide maintenance and support for CMS websites?",
    description:
      "We provide ongoing maintenance, updates, and technical support to keep your CMS website secure, fast, and fully functional even after launch.",
  },
];


  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={gm}
        title="CMS WEB DEVELOPMENT SERVICES"
        desc="A CMS (Content Management System) allows you to control and manage the content of your website with little or no knowledge of coding. It provides an easy interface to add / delete new pages and edit the content within. CMS offers a site-search tool for the visitors to find any specific content they are looking for. At Future IT Touch Pvt. Ltd., a leading CMS web development company in India, we deal with all types of open source content management systems and provide customized solutions to meet your needs."
      />

      <TechMarquee />

      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Custom CMS Development
          </span>

          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
            Building Flexible and Easy-to-Manage CMS Websites
          </h4>

          <p className="text-base md:text-lg text-gray-600">
            At{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            we deliver custom CMS solutions that make website management simple,
            efficient, and scalable. Our CMS development services ensure your
            content is well-structured, easy to update, and optimized for
            performance, giving you complete control over your digital presence.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Our CMS expertise covers everything from design and development to
            seamless migration and ongoing support. We build responsive CMS
            websites with modern features and smooth user experiences, ensuring
            you always stay ahead in the digital landscape. Whether it’s
            upgrading to the latest CMS version, integrating plugins and
            components, or migrating your website to a new platform, our team
            ensures a hassle-free process. With reliable support and maintenance
            services, we are always available to resolve issues, implement
            improvements, and keep your CMS website secure and efficient. With
            years of experience, we craft CMS solutions that help businesses
            manage content effortlessly while enhancing online performance and
            scalability.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="tel:+917056937000"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              Start Your CMS Journey
            </a>
          </div>
        </div>
      </div>

      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
            Trusted CMS Development Company
          </h5>
          <h4 className="font-bold text-gray-900">
            Building Flexible & Easy-to-Manage CMS Websites
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={image2}
              alt="eCommerce Development"
              className="w-full rounded-xl shadow-lg h-full object-cover hover:scale-105 transition-transform duration-500"
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
      Custom CMS Website Development Services
    </h5>
    <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
      We would be happy to discuss the project with you in person
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
        <h5 className="text-xl md:text-2xl font-bold mb-2">{elm.title}</h5>
        <p className="text-gray-700 text-sm md:text-base">{elm.desc}</p>
      </div>
    ))}
  </div>
</div>


      <CustomSlider
        cards={cards}
      title="Building Powerful & Scalable CMS Solutions for Your Business"
      />

      <WhyFutureITTouch
        platforms={platforms}
title="Our Comprehensive CMS Development Services"
      />

      <FAQSection
        faqData={faqData}
title="About CMS & eCommerce Website Development"
      />

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Ecommerce;
