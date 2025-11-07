import React from "react";
import { FaMicrosoft } from "react-icons/fa";

import { FaAngular } from "react-icons/fa";
import gm from "../Assets/wsj.webp";


import { FaCheck } from "react-icons/fa6";


import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import {  FaServer, FaDatabase,  FaTools } from "react-icons/fa";

import {
  FaCogs,
} from "react-icons/fa";


import { FaWordpress, FaShopify, FaShoppingCart} from "react-icons/fa";


const Shopify = () => {





const technolgyData = [
  {
    title: "Custom WordPress & Shopify Development",
    icon: <FaWordpress className="text-[#306998] text-4xl" />,
    list: [
      "Building custom, feature-rich WordPress and Shopify websites tailored to your business goals.",
      "Developing fast, responsive, and SEO-optimized online stores and CMS platforms.",
      "Ensuring seamless integration with third-party plugins, APIs, and payment gateways.",
      "Creating secure, scalable, and high-performing websites for all industries.",
    ],
  },
  {
    title: "eCommerce Website Development",
    icon: <FaShoppingCart className="text-[#306998] text-4xl" />,
    list: [
      "Designing and developing powerful eCommerce stores using Shopify and WooCommerce.",
      "Implementing multi-store management, product filtering, and inventory control systems.",
      "Integrating secure payment gateways and real-time order tracking features.",
      "Optimizing stores for performance, conversions, and responsive shopping experiences.",
    ],
  },
  {
    title: "Custom Theme & Plugin Development",
    icon: <FaCogs className="text-[#306998] text-4xl" />,
    list: [
      "Creating visually stunning and performance-oriented custom WordPress themes.",
      "Developing Shopify apps and plugins to enhance store functionality and automation.",
      "Implementing reusable and scalable design components for brand consistency.",
      "Ensuring lightweight and optimized code for faster page loading and performance.",
    ],
  },
  {
    title: "API Integration & Data Connectivity",
    icon: <FaDatabase className="text-[#306998] text-4xl" />,
    list: [
      "Integrating APIs for payments, shipping, CRM, ERP, and marketing tools.",
      "Ensuring real-time data exchange between WordPress, Shopify, and backend systems.",
      "Implementing secure authentication using OAuth and encrypted data transfers.",
      "Automating workflows and synchronizing data across multiple platforms seamlessly.",
    ],
  },
  {
    title: "Security & Website Maintenance",
    icon: <FaLock className="text-[#306998] text-4xl" />,
    list: [
      "Protecting websites from malware, DDoS, and unauthorized access attempts.",
      "Implementing SSL, secure backups, and role-based access control systems.",
      "Regular updates for themes, plugins, and server environments to ensure stability.",
      "Continuous monitoring and site optimization for performance and security.",
    ],
  },
  {
    title: "Ongoing Support & Optimization",
    icon: <FaTools className="text-[#306998] text-4xl" />,
    list: [
      "Providing 24/7 support for troubleshooting, upgrades, and site enhancements.",
      "Improving website speed, mobile responsiveness, and user experience.",
      "Migrating existing websites to WordPress or Shopify with zero downtime.",
      "Delivering long-term maintenance and growth-driven technical support.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We begin by understanding your business model, goals, and design vision to create a WordPress or Shopify solution that aligns with your growth strategy and branding.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "Our designers create intuitive, conversion-optimized interfaces and prototypes that reflect your brand identity and enhance the shopping or browsing experience.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Theme Development & Customization",
    description:
      "We build or customize themes using clean, modular code to ensure responsive layouts and brand-consistent designs across all devices.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Plugin & App Integration",
    description:
      "We integrate essential plugins and Shopify apps to extend functionality, from SEO and analytics to payments, shipping, and marketing automation.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "API Integration & Payment Setup",
    description:
      "Our experts ensure smooth API connections with CRMs, ERP systems, and payment gateways for secure transactions and operational efficiency.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We conduct in-depth performance, cross-browser, and usability testing to ensure flawless operation, responsiveness, and user satisfaction.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Security Implementation",
    description:
      "We secure your WordPress and Shopify sites with firewalls, SSL encryption, and malware protection to safeguard your business and customer data.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Launch",
    description:
      "We deploy your website on fast, secure servers ensuring full functionality, smooth navigation, and optimal load speed across all devices.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Support",
    description:
      "Post-launch, we offer continuous updates, performance optimization, and technical support to ensure your site remains fast, secure, and user-friendly.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaWordpress className="text-[#306998]" />,
    title: "Custom WordPress Development",
    desc: "We craft tailored WordPress websites that are fast, secure, and SEO-friendly — ensuring smooth content management and superior user experience.",
  },
  {
    icon: <FaShopify className="text-[#306998]" />,
    title: "Shopify Store Development",
    desc: "We build fully customized Shopify stores designed to maximize sales, streamline operations, and deliver seamless eCommerce experiences.",
  },
  {
    icon: <FaCogs className="text-[#306998]" />,
    title: "Theme & Plugin Customization",
    desc: "We create and customize plugins, themes, and apps to add unique features and enhance your site’s overall functionality and branding.",
  },
  {
    icon: <FaLock className="text-[#306998]" />,
    title: "Advanced Security Layers",
    desc: "We protect your websites with SSL, secure payment integrations, firewalls, and malware scanning to ensure complete digital safety.",
  },
  {
    icon: <FaRocket className="text-[#306998]" />,
    title: "Performance Optimization",
    desc: "We enhance loading speed, responsiveness, and SEO performance through caching, image optimization, and efficient code practices.",
  },
  {
    icon: <FaTools className="text-[#306998]" />,
    title: "Maintenance & Upgrades",
    desc: "We provide ongoing updates, plugin management, and support to keep your WordPress or Shopify site secure, fast, and feature-rich.",
  },
];

const cards = [
  {
    count: "250+",
    title: "Websites Successfully Delivered",
    desc: "We’ve built and launched over 250 WordPress and Shopify websites for global clients, combining creativity with functionality to deliver impactful digital experiences. Each project focuses on speed, scalability, and user-centric design to help brands grow and stay competitive online.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "10+",
    title: "Years of Development Expertise",
    desc: "With over a decade of experience in CMS and eCommerce development, we specialize in delivering responsive, secure, and conversion-driven websites. Our expertise ensures that your WordPress or Shopify project is built on the latest technologies and optimized for growth.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "400+",
    title: "Satisfied Global Clients",
    desc: "We’ve successfully served 400+ clients worldwide, helping businesses establish a strong online presence through modern WordPress and Shopify solutions. Our focus on transparency, innovation, and measurable results builds long-term client relationships.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "We pride ourselves on a 98% client satisfaction rate by delivering top-notch designs, flawless performance, and timely delivery. Every WordPress and Shopify project we undertake is guided by quality assurance and ongoing customer support.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Technical Support",
    desc: "Our dedicated team offers 24/7 technical support and proactive maintenance for your WordPress or Shopify website. From quick fixes to full-scale upgrades, we ensure your online store or CMS platform stays secure and performs flawlessly around the clock.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "Why choose WordPress or Shopify for your website?",
    description:
      "WordPress and Shopify are user-friendly, flexible, and scalable platforms ideal for building websites and online stores that deliver exceptional performance and easy management.",
  },
  {
    title: "Do you provide custom theme development?",
    description:
      "Yes, we specialize in creating fully custom WordPress and Shopify themes designed to reflect your brand and provide optimal user experiences.",
  },
  {
    title: "Can you integrate third-party APIs and plugins?",
    description:
      "Absolutely. We integrate payment gateways, CRM tools, analytics, and other third-party APIs to enhance functionality and business operations.",
  },
  {
    title: "Do you offer WooCommerce development services?",
    description:
      "Yes, we develop custom WooCommerce stores within WordPress, providing full control, scalability, and eCommerce functionality tailored to your brand.",
  },
  {
    title: "Is Shopify better for eCommerce?",
    description:
      "Shopify is perfect for eCommerce businesses due to its built-in tools, security, and scalability. We customize it for your unique store requirements and branding.",
  },
  {
    title: "Can you migrate my site to WordPress or Shopify?",
    description:
      "Yes, we handle complete website migration with zero downtime, ensuring that your data, design, and SEO remain intact throughout the process.",
  },
  {
    title: "How do you ensure website security?",
    description:
      "We implement SSL encryption, firewalls, malware scanning, and regular updates to keep your WordPress or Shopify website completely secure.",
  },
  {
    title: "Do you provide SEO-friendly development?",
    description:
      "Yes, all our WordPress and Shopify websites are developed with SEO best practices, clean code, and optimized structures for better search rankings.",
  },
  {
    title: "Do you offer post-launch maintenance?",
    description:
      "We provide ongoing maintenance, updates, and support to ensure your site remains up-to-date, secure, and high-performing after launch.",
  },
  {
    title: "Which industries do you serve?",
    description:
      "We deliver WordPress and Shopify solutions for eCommerce, fashion, real estate, healthcare, education, and many other industries across the globe.",
  },
];


  return (
    <>
      <CommonBanner
        img={gm}
        title="WORDPRESS AND SHOPIFY DEVELOPMENT"
        desc="We are a full-fledged, on-time and on-budget Joomla website design company in India. Hire our Joomla developers to build a wide variety of websites namely an eCommerce store, a directory site, a gallery site or a membership site at quite reasonable prices. We design and develop powerful websites with Joomla CMS customization. Our Joomla template design, is also considered among the best within the industry. Get in touch with us to know details about the Joomla development services we offer. ."
      />


<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Powerful, Scalable & Conversion-Focused Websites with{" "}
      <span className="text-indigo-600">WordPress & Shopify Development</span> 🚀
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Want to launch a stunning online store or a dynamic business website? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in building high-performing, SEO-friendly, and fully
      customizable websites using{" "}
      <span className="font-semibold text-indigo-600">WordPress</span> and{" "}
      <span className="font-semibold text-indigo-600">Shopify</span> platforms.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From seamless eCommerce functionality to intuitive CMS design, our expert
      developers create websites that are visually captivating, responsive, and
      optimized for maximum conversions. We tailor every solution to reflect
      your brand identity and enhance user engagement.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need a sleek Shopify storefront or a flexible WordPress site
      with custom plugins and integrations, we ensure top-notch performance,
      security, and scalability to help your business grow in the competitive
      digital landscape.
    </p>

    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 text-white font-medium bg-indigo-600 rounded-xl shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
      >
        Let’s Discuss Your Project
      </a>
    </div>
  </div>
</div>




      {/* High-Performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 xl:py-12">
 <div className="text-center space-y-5">
  <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
    Future IT Touch’s Expert WordPress & Shopify Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Transform your online presence with <span className="font-semibold text-indigo-600">WordPress</span> 
    and <span className="font-semibold text-indigo-600">Shopify</span> development solutions designed 
    to elevate your business. Our team builds fast, secure, and conversion-driven websites that blend 
    aesthetic appeal with powerful functionality — helping you attract more visitors and boost sales.
  </p>
</div>



      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
  {technolgyData.map((elm, index) => (
    <div
      key={index}
      className="p-6 bg-white rounded-2xl border border-gray-300"
    >
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
          {elm.title}
        </h4>
        <div>{elm.icon}</div>
      </div>

      <div className="mt-5 space-y-3 grid grid-cols-2 gap-y-3">
        {elm.list.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <FaCheck className="text-blue-500 mt-1.5 min-w-[20px]" />
            <p className="text-gray-700 font-semibold underline text-sm md:text-base">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

        <div className="flex justify-center items-center">
          <a
            href="+917056937000"
            className="mt-10   px-6 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
          >
            i want speak with expert
          </a>
        </div>
      </div>

      {/* Approach We Follow */}

      <div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        <div className="relative w-full lg:w-[55%] lg:sticky lg:top-24 self-start">
          <div className="rounded-2xl overflow-hidden shadow-2xl  ">
            <img
              src="/images/appdevelopment/appbg.webp"
              alt="High Performance"
              className="w-full h-full absolute inset-0  rounded-2xl object-cover hover:scale-105 transition-transform duration-700"
            />

  <div className="relative z-10 h-full bg-gradient-to-t rounded-2xl from-black/70 via-black/40 to-transparent flex flex-col justify-start p-8">
<div className="text-left capitalize leading-tight text-white space-y-4 font-bold">
  <h6 className="text-6xl lg:text-7xl">
    <FaWordpress /> {/* Recommended Icon for WordPress & Shopify */}
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    WordPress & <br />
    Shopify <br />
    <span className="">Development Approach</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    To build powerful{" "}
    <span className="text-[#00ffe4]">
      - scalable online stores with seamless shopping experiences 🛍️
    </span>
  </p>
</div>



</div>


          </div>
        </div>

        <div className="w-full lg:w-[65%] grid grid-cols-1 gap-6">
          {steps.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 p-6 rounded-2xl border border-gray-200 shadow-md group hover:bg-[#0E395E] hover:shadow-2xl transition-all duration-300"
            >
              <h4 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                {feature.title}
              </h4>
              <p className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-gray-100 leading-relaxed text-justify transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <CustomSlider/> */}
      <CommonSlider cards={cards}/>

      {/* upscale your buiness  */}

   <div className="px-5 md:px-12 xl:px-28 bg-[#0a2548] py-10 md:py-14 lg:py-16 m-6 md:m-10 rounded-2xl">
  <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white font-extrabold w-full lg:w-[85%] mx-auto leading-snug">
  Empower Your Business With Custom WordPress & Shopify Development Services
  </h4>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {upScale.map((elm, index) => (
      <div key={index} className="flex flex-col gap-y-4 text-white">
        <span className="text-4xl text-indigo-400">{elm.icon}</span>
        <h5 className="text-xl md:text-2xl font-bold">{elm.title}</h5>
        <p className="text-sm md:text-base text-gray-100 leading-relaxed">
          {elm.desc}
        </p>
      </div>
    ))}
  </div>
</div>


      {/* faq  */}

<CommonFaqs faqData={faqData} title="On WordPress & Shopify Development Services" />
            <BusinessIdea />
      

     
    </>
  );
};

export default Shopify;
