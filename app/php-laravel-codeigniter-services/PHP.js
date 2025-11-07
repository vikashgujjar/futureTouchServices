import React from "react";

import Image from "next/image";
import Ism from "../Assets/lsm.gif";
import gm from "../Assets/php.webp";
import d1 from "../Assets/d1.webp";
import d2 from "../Assets/portfolio-img-6.webp";
import { FaPhp } from "react-icons/fa";

import { FaChevronRight } from "react-icons/fa";
import { businessData } from "../common/Service_comp";
import GetNewInsight from "../components/GetNewInsight";
import { FaCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

import phone from "../Assets/ec.webp";
import app from "../Assets/vjs.webp";
import Link from "next/link";
import CustomSlider from "../components/CustomSlider";
import BusinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import { FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools } from "react-icons/fa";


const PHP = () => {
 const technolgyData = [
  {
    title: "Custom PHP Web Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building high-performance, dynamic web applications with PHP.",
      "Developing secure and scalable backend systems.",
      "Creating custom CMS and enterprise-grade solutions.",
      "Ensuring clean, maintainable, and reusable code.",
    ],
  },
  {
    title: "Laravel Framework Development",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Crafting robust and feature-rich Laravel applications.",
      "Implementing RESTful APIs for seamless integration.",
      "Utilizing Eloquent ORM for efficient database management.",
      "Integrating authentication, queues, and caching efficiently.",
    ],
  },
  {
    title: "CodeIgniter Application Development",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building lightweight and fast web applications with CodeIgniter.",
      "Ensuring MVC architecture for clean, maintainable code.",
      "Integrating custom modules and third-party APIs.",
      "Optimizing app performance and response time.",
    ],
  },
  {
    title: "API Integration & Backend Services",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing secure and scalable RESTful APIs.",
      "Connecting applications with third-party platforms.",
      "Handling data exchange between frontend and backend.",
      "Implementing authentication and token-based security.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing advanced security layers and validation.",
      "Protecting against SQL injection, XSS, and CSRF attacks.",
      "Regular performance tuning and vulnerability checks.",
      "Providing round-the-clock technical support.",
    ],
  },
  {
    title: "Ongoing Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Continuous monitoring and maintenance of web apps.",
      "Upgrading existing PHP, Laravel, or CodeIgniter systems.",
      "Enhancing app performance and scalability.",
      "Providing expert consultation and technical support.",
    ],
  },
];

const steps = [
  {
    title: "Understanding Your Requirements",
    description:
      "We start by learning about your business goals, audience, and technical needs. This helps us plan a PHP, Laravel, or CodeIgniter solution that fits your exact requirements and sets the foundation for a successful project.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "Planning and Architecture",
    description:
      "We carefully design the architecture and database structure of your web application. A strong backend foundation ensures better scalability, security, and performance for future growth.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Design and Frontend Integration",
    description:
      "Once the structure is set, we move on to the user interface. Our frontend and backend teams collaborate to create a smooth and cohesive experience that looks great and performs flawlessly.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend Development",
    description:
      "Using PHP, Laravel, or CodeIgniter, we build robust server-side logic and APIs. Our code follows MVC architecture, ensuring clean, modular, and maintainable development that adapts easily to new features.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Database Design & Management",
    description:
      "We create optimized, secure databases using MySQL or PostgreSQL. Our goal is to make data handling fast, reliable, and scalable for your growing business needs.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "API Development & Integration",
    description:
      "We develop RESTful APIs that connect your application to third-party services or mobile apps. This ensures seamless data exchange and enhances your system’s overall functionality.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Security & Performance Optimization",
    description:
      "We implement strong security measures like CSRF protection, input validation, and encryption. Alongside, we fine-tune performance to ensure fast response times and smooth user experiences.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Our QA team conducts detailed manual and automated testing to ensure every function, form, and feature runs without errors. We deliver a stable, high-performing backend solution every time.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Server Setup",
    description:
      "We handle the complete deployment process — from configuring servers and databases to launching your application on live environments with zero downtime.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Ongoing Support",
    description:
      "After deployment, we continue to monitor, maintain, and update your app. Whether it’s bug fixes, performance tuning, or new feature additions, we keep your system running at its best.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];


const upScale = [
  {
    icon: <FaCode />,
    title: "Custom PHP Development",
    desc: "We craft dynamic and scalable PHP web solutions that meet modern business demands. Our clean, secure code ensures long-term reliability and efficient backend performance.",
  },
  {
    icon: <FaCogs />,
    title: "Laravel Framework Solutions",
    desc: "We build feature-rich Laravel applications using elegant syntax and modular architecture, ensuring faster deployment, high scalability, and robust backend functionality.",
  },
  {
    icon: <FaServer />,
    title: "CodeIgniter App Development",
    desc: "Our experts use CodeIgniter to develop lightweight, efficient, and high-speed applications with easy customization and strong integration capabilities for businesses.",
  },
  {
    icon: <FaLock />,
    title: "Advanced Security Integration",
    desc: "We implement multi-layer security features, including authentication, encryption, and threat prevention, to protect your data and maintain complete system integrity.",
  },
  {
    icon: <FaRocket />,
    title: "App Performance Optimization",
    desc: "Our team fine-tunes every aspect of your application using caching, database optimization, and efficient code execution for seamless speed and smooth user experiences.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Maintenance Support",
    desc: "We provide 24/7 monitoring, regular updates, and version upgrades to keep your PHP, Laravel, or CodeIgniter applications stable, secure, and consistently high-performing.",
  },
];

  
const cards = [
  {
    count: "100+",
    title: "Applications Maintained",
    desc: "We’ve successfully maintained over 100 PHP, Laravel, and CodeIgniter web apps—ensuring peak performance, seamless functionality, and regular updates that keep every platform running smoothly.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "10+",
    title: "Years of Expertise",
    desc: "With 10+ years of backend development expertise, our team applies proven coding standards, secure architecture, and best practices to maintain and scale enterprise-grade web applications effectively.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Clients Supported Globally",
    desc: "Serving 500+ global clients, we deliver reliable backend support and maintenance across industries—ensuring your PHP, Laravel, or CodeIgniter applications stay stable, secure, and optimized.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our client-first approach drives a 98% satisfaction rate. We provide proactive maintenance, performance tuning, and fast issue resolution to keep your systems running flawlessly around the clock.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Technical Support",
    desc: "Our support team is available 24/7 to handle maintenance requests, fix bugs, monitor uptime, and implement updates—keeping your backend systems secure and high-performing at all times.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "What is PHP development?",
    description:
      "PHP is a powerful open-source scripting language used for server-side development. It allows developers to build secure, scalable, and high-performing dynamic web applications with flexible backend integration and database connectivity.",
  },
  {
    title: "Why should I choose Laravel for web development?",
    description:
      "Laravel is one of the most popular PHP frameworks, known for its elegant syntax, built-in security, and scalability. It simplifies complex coding tasks, accelerates development, and ensures robust web application architecture for businesses.",
  },
  {
    title: "What makes CodeIgniter a good choice?",
    description:
      "CodeIgniter is a lightweight and fast PHP framework ideal for building dynamic and efficient web apps. Its simplicity, flexibility, and minimal configuration make it a preferred choice for projects requiring quick deployment.",
  },
  {
    title: "Can Laravel handle enterprise-level applications?",
    description:
      "Yes, Laravel is highly suitable for large-scale enterprise applications. It offers modular structure, advanced caching, built-in authentication, and queue management for handling complex and data-driven projects efficiently.",
  },
  {
    title: "How secure are PHP and Laravel applications?",
    description:
      "We follow best security practices, including input validation, data encryption, and secure API integration. Laravel comes with built-in protection against SQL injection, CSRF, and XSS attacks, ensuring maximum data safety.",
  },
  {
    title: "Is CodeIgniter better for small projects?",
    description:
      "Yes. CodeIgniter’s lightweight framework and minimal setup make it perfect for small to medium-scale projects. It delivers quick performance, lower hosting requirements, and easy maintenance with clean and simple code.",
  },
  {
    title: "Can PHP applications integrate with APIs and databases?",
    description:
      "Absolutely. PHP and its frameworks like Laravel and CodeIgniter seamlessly integrate with RESTful APIs and popular databases such as MySQL, PostgreSQL, and MongoDB for powerful and flexible data-driven solutions.",
  },
  {
    title: "Do you offer maintenance for Laravel and PHP applications?",
    description:
      "Yes, we provide complete maintenance and support services, including bug fixes, performance optimization, security updates, and feature enhancements to ensure your application remains stable and up-to-date.",
  },
  {
    title: "Can you migrate an existing app to Laravel?",
    description:
      "Definitely. Our developers specialize in migrating legacy or outdated PHP systems to Laravel. The process ensures minimal downtime, improved code structure, better security, and enhanced overall performance.",
  },
  {
    title: "What industries benefit from PHP–Laravel solutions?",
    description:
      "PHP and Laravel cater to diverse industries, including eCommerce, healthcare, real estate, education, and fintech. Their flexibility and scalability make them ideal for building custom, business-focused web applications.",
  },
];


  return (
    <>
      <CommonBanner
        img={gm}
        title="PHP-Laravel, Codeigniter SERVICES"
        desc=" Laravel/MySQL/PHP retains its immense value even after so many years of its inception. Being easy to code and manage with strong features and capabilities of developing robust custom web applications, PHP/Laravel inevitably stands out from other programming languages of today. Being an open-source platform, it helps developers create cost-effective and customized solutions to meet the specific needs of the client. Avail our custom PHP/Laravel development services to build robust and secure web applications.

"
      />


     <div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Powerful, Secure & Scalable Web Apps with{" "}
      <span className="text-indigo-600">
        PHP, Laravel & CodeIgniter Development
      </span>{" "}
      🚀
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking for expert developers who can craft reliable, high-performance
      web applications using <span className="font-semibold text-indigo-600">PHP, Laravel,</span> and{" "}
      <span className="font-semibold text-indigo-600">CodeIgniter</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>,
      we specialize in building secure, scalable, and feature-rich applications
      tailored to your business needs.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether it’s a custom web portal, enterprise-grade software, or an
      eCommerce platform, our skilled developers leverage the MVC architecture,
      clean coding standards, and optimized database management to deliver
      exceptional performance and flexibility.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      As a trusted PHP development company, we ensure your applications are
      fast, secure, and easy to maintain. Our Laravel and CodeIgniter experts
      focus on delivering robust backend systems that support seamless user
      experiences and long-term scalability for your business.
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
    Future IT Touch’s High-Performance PHP, Laravel & CodeIgniter Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Delivering robust, secure, and scalable web applications that combine clean
    code architecture with exceptional performance — designed to accelerate your
    business growth and digital transformation.
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
      <FaPhp /> {/* Recommended Icon */}
    </h6>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
      PHP, Laravel & <br />
      CodeIgniter <br />
      <span className="">Development Approach</span>
    </h2>
    <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
      To build secure{" "}
      <span className="text-[#00ffe4]">
        - dynamic web apps for scalable success ⚡
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
    Upscale Your Business With Custom PHP, Laravel & CodeIgniter Development Services
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

      <CommonFaqs faqData={faqData}  title="On PHP & Laravel Development"/>
            <BusinessIdea />
      

     
    </>
  );
};

export default PHP;
