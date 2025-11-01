import React from "react";

import Image from "next/image";
import cwd from "../Assets/cwd.webp";

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

import { FaProjectDiagram, FaRobot, FaBars, FaVideo } from "react-icons/fa";

import {
  FaPalette,
  FaChartBar,
  FaSearch,
  FaLaptopCode,
  FaUserCheck,
} from "react-icons/fa";

const Corporate = () => {
  const features = [
    {
      title: "Appealing Layout",
      description:
        "Our website layouts are sleek, minimalistic, and visually engaging. They leave a lasting impression on users and help them easily absorb content without distraction, reinforcing your brand’s professional image.",
      icon: <FaPalette />,
    },
    {
      title: "Dynamic Functionalities",
      description:
        "We utilize modern technologies like PHP, JavaScript, CSS, and third-party APIs to craft interactive and dynamic web applications. From image galleries and CTA buttons to micro-interactions, every feature enhances user engagement.",
      icon: <FaCogs />,
    },
    {
      title: "Scalability",
      description:
        "Our web solutions grow with your business. Built with scalability in mind, your corporate website can easily expand its features and functionalities as your organization evolves.",
      icon: <FaChartBar />,
    },
    {
      title: "SEO-Friendly Content",
      description:
        "We integrate SEO best practices right into the development process. From clean code to optimized content, our corporate web apps are designed to boost search visibility and strengthen your brand presence online.",
      icon: <FaSearch />,
    },
    {
      title: "Responsive Solution",
      description:
        "Every solution we build is optimized for all devices and screen sizes. Whether it’s a desktop, tablet, or mobile, your corporate website delivers a seamless and consistent user experience everywhere.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Excellent UI / UX",
      description:
        "We combine outstanding UI design with strong technical performance to ensure an exceptional user experience. Each interface is crafted to engage visitors and encourage meaningful interactions.",
      icon: <FaUserCheck />,
    },
  ];

  const businessData = [
    {
      icons: <FaProjectDiagram className="text-white w-8 h-8" />,
      title: "Dynamic Web Solutions",
      desc: "Out of the wide range of services we provide, corporate web app development is our expertise. We build fast, secure, and scalable solutions for enterprise success.",
    },
    {
      icons: <FaRobot className="text-white w-8 h-8" />,
      title: "Smart Automation",
      desc: "Our expert developers integrate automation and chatbot features to make your web applications more interactive, efficient, and user-friendly across all devices.",
    },
    {
      icons: <FaBars className="text-white w-8 h-8" />,
      title: "Seamless Navigation",
      desc: "As a leading corporate web development company, we ensure smooth navigation and responsive designs that deliver flawless user experiences on every platform.",
    },
  ];

  const cards = [
    {
      count: "250+",
      title: "Corporate Web Apps Delivered",
      desc: "We’ve developed over 250+ corporate web applications that empower businesses to operate efficiently and engage users effectively. Each project is built for performance, reliability, and seamless digital interaction.",
      image: "/Assets/seerviceSlider/slide1.webp",
    },
    {
      count: "15+",
      title: "Years of Industry Expertise",
      desc: "With more than 15 years in corporate web development, Future IT Touch Pvt. Ltd. delivers robust and innovative web solutions. Our experience ensures every project blends technology, scalability, and exceptional user experience.",
      image: "/Assets/seerviceSlider/slide2.webp",
    },
    {
      count: "500+",
      title: "Global Businesses Served",
      desc: "Trusted by over 500 corporate clients worldwide, we create tailored web applications designed for growth and efficiency. Our expertise spans industries, delivering results that meet both local and global business goals.",
      image: "/Assets/seerviceSlider/slide3.webp",
    },
    {
      count: "98%",
      title: "Client Satisfaction Rate",
      desc: "Our client-first approach has earned us a 98% satisfaction rate. We focus on transparency, timely delivery, and building enterprise-grade web applications that exceed expectations and drive long-term success.",
      image: "/Assets/seerviceSlider/slide4.webp",
    },
    {
      count: "24/7",
      title: "Reliable Technical Support",
      desc: "We provide 24/7 support to ensure your corporate web applications run seamlessly. Our dedicated support team quickly resolves issues, applies updates, and maintains consistent system performance.",
      image: "/Assets/seerviceSlider/slide5.webp",
    },
  ];

  const platforms = [
    {
      icon: <FaOpencart className="text-white w-6 h-6" />,
      title: "OpenCart Development",
      desc: "OpenCart allows easy customization and lightweight websites using AJAX. With over 14,000 extensions, we create beautiful and functional online stores with enhanced features and PA-DSS compliant security.",
    },
    {
      icon: <FaMagento className="text-white w-6 h-6" />,
      title: "Magento Development",
      desc: "Magento handles thousands of products and heavy traffic with ease. Its modular structure allows deep customization for marketplaces and offers unmatched security due to PA-DSS compliance.",
    },
    {
      icon: <FaWordpress className="text-white w-6 h-6" />,
      title: "WordPress & WooCommerce",
      desc: "WordPress websites with WooCommerce are lightweight, fast, and easy to manage. Scalable and secure, we deliver fully functional eCommerce stores with REST API, configurable shipping, and payment options.",
    },
    {
      icon: <FaCogs className="text-white w-6 h-6" />,
      title: "PrestaShop Development",
      desc: "PrestaShop is free, lightweight, and easy to use. With multilingual support, we create unique eCommerce websites that allow global sales without complex coding requirements.",
    },
    {
      icon: <FaServer className="text-white w-6 h-6" />,
      title: "Custom Development",
      desc: "Need a feature-rich marketplace tailored to your business? We build custom eCommerce solutions using frameworks like Laravel, CakePHP, CodeIgniter, NodeJS, and databases like MySQL for seamless performance.",
    },
    {
      icon: <FaShopify className="text-white w-6 h-6" />,
      title: "Shopify Development",
      desc: "Shopify is a fully hosted platform for quick online store setup. Our Shopify developers build SEO-optimized storefronts with Drop Shipping, Fraud Prevention, Social Media Integration, and more.",
    },
  ];

  const faqData = [
    {
      title: "Which eCommerce platforms do you specialize in?",
      description:
        "We specialize in OpenCart, Magento, WordPress/WooCommerce, PrestaShop, Shopify, and custom eCommerce solutions tailored to your business requirements.",
    },
    {
      title: "Can you customize my eCommerce store?",
      description:
        "Absolutely! Our developers provide deep customization for your online store, from front-end design to back-end functionalities, ensuring it matches your brand and business needs.",
    },
    {
      title: "Do you ensure website security?",
      description:
        "Yes, security is a top priority. We follow best practices and use PA-DSS compliant platforms to ensure your eCommerce website is safe, secure, and reliable.",
    },
    {
      title: "Can you handle large product catalogs?",
      description:
        "Definitely. Platforms like Magento and custom solutions can store thousands of products and manage heavy traffic seamlessly, without compromising performance.",
    },
    {
      title: "Do you offer mobile-friendly websites?",
      description:
        "Yes, all our eCommerce websites are responsive and mobile-first, ensuring smooth shopping experiences on smartphones, tablets, and desktops.",
    },
    {
      title: "Do you provide ongoing support after launch?",
      description:
        "We provide dedicated support, updates, and maintenance to ensure your online store remains functional, secure, and optimized for growth even after launch.",
    },
  ];

  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={cwd}
        title="CORPORATE WEBSITE DESIGN"
        desc="An innovative and engaging website is crucial to maximize your business efficiency. Future IT Touch Pvt. Ltd. corporate website design company can be your right partner. From simple, informative blogging site to complex web applications and eCommerce website development – we provide a comprehensive web solution. Our team is adept at developing fast-loading, responsive, and user-friendly websites that have consistent accessibility across multiple devices and browsers. Backed with a long experience and industry exposure, we have satisfied a global clientele with a futuristic web solution. Transform your ideas into reality with us."
      />

      <TechMarquee />

      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-6 ">
          <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
            Reliable Corporate Web App Development
          </span>

          <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
            Building Powerful and Scalable Business Applications
          </h4>

          <p className="text-base md:text-lg text-gray-600">
            At{" "}
            <span className="font-semibold text-indigo-600">
              Future IT Touch Pvt. Ltd.
            </span>{" "}
            we craft secure and scalable web applications designed to streamline
            operations, enhance collaboration, and empower enterprises to
            achieve their digital goals with efficiency and precision.
          </p>

          {/* Main Description */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Our focus is on building robust web applications that simplify
            complex business processes and drive productivity across
            departments. With innovative tools and intuitive design, our
            corporate web apps deliver measurable results for businesses
            worldwide.
            <br /> <br />
            <span className="font-semibold text-gray-900">
              For Employees:
            </span>{" "}
            Easy access dashboards, intuitive interfaces, secure logins,
            workflow automation, real-time data sharing, and cloud integration
            for seamless performance. <br />
            <br />
            <span className="font-semibold text-gray-900">
              For Management:
            </span>{" "}
            Centralized control, detailed analytics, role-based access,
            performance tracking, communication tools, and data-driven
            decision-making.
            <br /> <br />
            With over 15 years of industry experience, we’ve delivered
            innovative web solutions for leading corporations. Choose our{" "}
            <span className="font-semibold text-indigo-600">
              custom web app development services
            </span>{" "}
            to transform your organization’s digital workflow and boost
            operational efficiency.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="tel:+917056937000"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              Start Your Corporate Web App Project
            </a>
          </div>
        </div>
      </div>

      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
            Trusted Business Web App Development Service
          </h5>
          <h4 className="font-bold text-gray-900">
            Delivering Innovative & Scalable Web Solutions for Corporates
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
            Leading Corporate Web Application Development Company in India
          </h5>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
            Partner with Us for Excellence & Innovation
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
        title="Delivering Innovative Corporate Web Solutions with
"
      />

      <WhyFutureITTouch
        platforms={platforms}
        title="Cutting-Edge Web Application Development for Corporates – End-to-End Robust Web Solutions for Your Business"
      />

      <FAQSection
        faqData={faqData}
        title="About eCommerce Website Developmen"
      />

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Corporate;
