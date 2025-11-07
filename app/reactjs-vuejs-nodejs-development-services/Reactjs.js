import React from "react";

import Image from "next/image";
import Ism from "../Assets/lsm.gif";
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


const Reactjs = () => {
const technolgyData = [
  {
    title: "Custom React.js Web Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building fast, interactive, and scalable user interfaces with React.js.",
      "Creating reusable components for maintainable frontend systems.",
      "Integrating RESTful APIs and GraphQL for seamless data handling.",
      "Optimizing UI for performance, accessibility, and responsiveness.",
    ],
  },
  {
    title: "Vue.js Application Development",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing dynamic single-page applications using Vue.js.",
      "Leveraging Vuex and Composition API for state management.",
      "Building modular, lightweight, and responsive frontends.",
      "Integrating APIs for smooth communication with backend systems.",
    ],
  },
  {
    title: "Node.js Backend Development",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating scalable and event-driven backend systems with Node.js.",
      "Building RESTful and GraphQL APIs for robust communication.",
      "Utilizing Express.js and Nest.js for structured architecture.",
      "Ensuring fast performance and real-time data handling.",
    ],
  },
  {
    title: "API Integration & Microservices",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Designing and integrating secure RESTful and GraphQL APIs.",
      "Implementing microservice-based architecture for flexibility.",
      "Connecting applications with third-party APIs and cloud platforms.",
      "Managing authentication, sessions, and data transactions.",
    ],
  },
  {
    title: "Security & Performance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing JWT authentication and input validation.",
      "Protecting against XSS, CSRF, and injection attacks.",
      "Optimizing backend queries and frontend rendering.",
      "Conducting regular performance and vulnerability audits.",
    ],
  },
  {
    title: "Ongoing Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Continuous monitoring and performance improvement.",
      "Upgrading existing React, Vue, or Node.js applications.",
      "Refactoring for better scalability and maintainability.",
      "Providing expert consultation and technical support.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We begin by understanding your business needs, goals, and user expectations. Our team defines a clear plan for building React, Vue, or Node.js solutions tailored to your objectives.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "Architecture & Planning",
    description:
      "We design a scalable architecture using React for frontend and Node.js for backend. Our plan ensures high performance, easy maintenance, and future growth adaptability.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Frontend Development",
    description:
      "Using React.js or Vue.js, we create sleek, responsive, and dynamic interfaces. Our goal is to deliver an intuitive user experience optimized for speed and interactivity.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend Development",
    description:
      "We build powerful, secure backend systems with Node.js and Express.js. Our APIs are designed for speed, reliability, and seamless frontend integration.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Database Design & Management",
    description:
      "We implement optimized databases like MongoDB or PostgreSQL for smooth data handling. Our design ensures scalability, speed, and data security.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "API Integration",
    description:
      "Our team develops and integrates RESTful or GraphQL APIs for real-time communication between systems, ensuring efficient data exchange and flexibility.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Security & Performance Optimization",
    description:
      "We apply best practices for encryption, validation, and caching to secure your system and enhance performance across all environments.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Every feature undergoes thorough testing — from unit to end-to-end — ensuring stability, reliability, and flawless performance before launch.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Scaling",
    description:
      "We deploy your applications on reliable servers and cloud platforms, ensuring zero downtime, optimized performance, and easy scalability.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Support",
    description:
      "Our team provides continuous support, bug fixing, and updates for your React, Vue, or Node.js applications to keep them running efficiently.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaCode />,
    title: "React.js Frontend Development",
    desc: "We develop interactive and component-based React applications with high performance, optimized rendering, and intuitive UX for modern businesses.",
  },
  {
    icon: <FaCogs />,
    title: "Vue.js Progressive Apps",
    desc: "Our Vue experts build fast, modular, and SEO-friendly single-page applications that ensure smooth navigation and an engaging user experience.",
  },
    {
    icon: <FaServer />,
    title: "Node.js Backend Engineering",
    desc: "We design scalable and secure backend systems using Node.js and Express, ensuring efficient APIs and seamless communication with frontend layers.",
  },
  {
    icon: <FaLock />,
    title: "Advanced Security Integration",
    desc: "We enforce strict security protocols—JWT, HTTPS, input sanitization—to safeguard your applications from vulnerabilities and attacks.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "From code minification to server optimization, we enhance app speed, reduce load times, and improve overall user satisfaction.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Continuous Support",
    desc: "We ensure your React, Vue, and Node.js apps remain updated, secure, and high-performing with regular maintenance and monitoring.",
  },
];

const cards = [
  {
    count: "150+",
    title: "Projects Delivered Successfully",
    desc: "We’ve delivered over 150 custom React, Vue, and Node.js solutions—ensuring scalability, efficiency, and cutting-edge performance across industries.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "10+",
    title: "Years of Development Experience",
    desc: "With over a decade in full-stack development, our team brings proven expertise in modern JavaScript technologies and best coding practices.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "400+",
    title: "Global Clients Served",
    desc: "Trusted by 400+ clients worldwide, we deliver reliable full-stack development, integration, and long-term technical support services.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our customer-focused approach ensures 98% satisfaction through consistent communication, quality assurance, and ongoing optimization.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Support & Monitoring",
    desc: "We offer 24/7 support for React, Vue, and Node.js apps—handling performance checks, updates, and bug fixes efficiently.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "What is React.js development?",
    description:
      "React.js is a leading JavaScript library used to build fast and dynamic user interfaces. It allows developers to create modular, reusable components for seamless frontend experiences.",
  },
  {
    title: "Why should I choose Vue.js for my project?",
    description:
      "Vue.js offers simplicity, flexibility, and high performance for building lightweight yet powerful single-page applications. It’s ideal for fast, maintainable, and SEO-friendly interfaces.",
  },
  {
    title: "What are the advantages of using Node.js?",
    description:
      "Node.js enables high-speed, scalable backend development using a non-blocking event-driven architecture, perfect for real-time applications and APIs.",
  },
  {
    title: "Can React and Node.js be used together?",
    description:
      "Absolutely. React handles the frontend while Node.js powers the backend, allowing full-stack JavaScript development for efficient communication and high performance.",
  },
  {
    title: "Is Vue.js good for enterprise-level applications?",
    description:
      "Yes. Vue.js supports modular architecture and integrates smoothly with existing systems, making it a solid choice for scalable enterprise-grade applications.",
  },
  {
    title: "How secure are Node.js applications?",
    description:
      "We implement strict security protocols including JWT, HTTPS, input sanitization, and rate limiting to protect Node.js apps from common web vulnerabilities.",
  },
  {
    title: "Do you build APIs with Node.js?",
    description:
      "Yes, our team develops RESTful and GraphQL APIs with Node.js and Express, ensuring fast, secure, and reliable data communication between systems.",
  },
  {
    title: "Can you migrate existing apps to React or Vue?",
    description:
      "Definitely. We migrate legacy systems to modern frameworks like React and Vue for improved speed, maintainability, and cross-platform compatibility.",
  },
  {
    title: "Do you offer full-stack support?",
    description:
      "Yes, we handle complete frontend and backend development, including React, Vue, Node.js, database design, and server deployment.",
  },
  {
    title: "What industries use React–Vue–Node.js solutions?",
    description:
      "Our React, Vue, and Node.js solutions cater to industries like eCommerce, healthcare, education, fintech, and SaaS — offering secure, scalable, and high-performance apps.",
  },
];



  return (
    <>
      <CommonBanner
        img={app}
        title="Node JS, React JS, Next Js Development"
        desc="Node JS is considered as the perfect solution for developing data-intesive, real-time web and mobile apps. Based on JavaScript, Node JS can be used at the backend, making development simpler and easier. As a leading Node JS development company in India, we utilise this framework to develop high traffic-driven real-time applications, network applications and mobile applications of all sizes and scale. Avail our results-driven Node JS development services at a competitive rate.

"
      />


  <div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Modern, Scalable & High-Performance Apps with{" "}
      <span className="text-indigo-600">React.js, Vue.js & Node.js</span> 🚀
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking for expert developers who can create fast, secure, and dynamic web
      applications using{" "}
      <span className="font-semibold text-indigo-600">React.js</span>,{" "}
      <span className="font-semibold text-indigo-600">Vue.js</span>, and{" "}
      <span className="font-semibold text-indigo-600">Node.js</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in building powerful full-stack JavaScript applications tailored
      to your business goals.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need a feature-rich single-page app, real-time platform, or
      enterprise-grade system, our team leverages modern frameworks, reusable
      components, and RESTful or GraphQL APIs to deliver seamless performance and
      a flawless user experience.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      As a trusted JavaScript development company, we ensure every React, Vue, and
      Node.js solution is built for speed, scalability, and maintainability. Our
      experts deliver robust frontend and backend systems that empower your
      digital growth and keep your applications running smoothly.
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
      Future IT Touch’s High-Performance React.js, Vue.js & Node.js Development Services
    </h4>
    <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
      Delivering fast, scalable, and secure full-stack JavaScript applications that
      combine modern frameworks with powerful performance — designed to accelerate
      your business growth and digital innovation.
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
      href="tel:+917056937000"
      className="mt-10 px-6 py-3 rounded-xl bg-blue-500 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
    >
      I want to speak with an expert
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
       <div className=" relative z-10 h-full bg-gradient-to-t rounded-2xl from-black/70 via-black/40 to-transparent flex flex-col justify-start p-8">
                <div className="text-left capitalize leading-tight text-white space-y-4 font-bold">
                  <h6 className="text-6xl lg:text-7xl">
                    <FaReact />
                  </h6>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
                    ReactJS <br />
                    Development <br />
                    <span className="">Approach We Follow</span>
                  </h2>
                  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
                    To achieve high{" "}
                    <span className="text-[#00ffe4]">
                      - performance web app for rapid growth 🚀
                    </span>
                  </p>
                </div>
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
  Elevate Your Business with Custom React.js, Vue.js & Node.js Development Services
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

<CommonFaqs faqData={faqData} title="On React.js, Vue.js & Node.js Development" />
            <BusinessIdea />
      

     
    </>
  );
};

export default Reactjs;
