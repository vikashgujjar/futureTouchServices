import React from "react";


import { FaGem } from "react-icons/fa";
import gm from "../Assets/Haskell.webp";

import { SiHaskell } from "react-icons/si";

import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import { FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools } from "react-icons/fa";


const Haskell = () => {
const technolgyData = [
  {
    title: "Custom Haskell Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building efficient and high-performance AI & ML applications using Haskell.",
      "Developing modular, scalable, and robust backend architectures for intelligent systems.",
      "Creating enterprise-grade Haskell solutions for data processing, model training, and prediction pipelines.",
      "Ensuring clean, reusable, and maintainable Haskell code following best practices for AI & ML projects.",
    ],
  },
  {
    title: "AI & ML Solutions Powered by Haskell",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing advanced AI & ML features including predictive models, neural networks, and data pipelines.",
      "Optimizing performance for large-scale machine learning computations.",
      "Building Haskell-powered data workflows for real-time analytics and intelligent automation.",
      "Integrating Haskell with ML frameworks for high-performance, accurate solutions.",
    ],
  },
  {
    title: "Machine Learning Integration",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Connecting Haskell-based AI applications with frontend and backend platforms.",
      "Developing APIs for seamless data exchange and model deployment.",
      "Creating efficient pipelines for large datasets and model training workflows.",
      "Enhancing performance using optimized Haskell algorithms for ML workloads.",
    ],
  },
  {
    title: "API & Data Processing Development",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating RESTful APIs to serve AI & ML models and analytics.",
      "Integrating Haskell pipelines into existing systems for data-driven insights.",
      "Developing dashboards and visualization tools for ML model results.",
      "Delivering scalable APIs and services using Haskell frameworks for AI & ML workloads.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing secure coding practices, encryption, and safe data handling.",
      "Protecting sensitive data used in AI & ML computations.",
      "Ensuring resource efficiency and robustness in computation-heavy projects.",
      "Providing regular updates, performance tuning, and maintenance for Haskell AI systems.",
    ],
  },
  {
    title: "Continuous Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Offering long-term support for Haskell AI & ML projects.",
      "Optimizing algorithms, dependencies, and model performance.",
      "Monitoring systems for uptime, efficiency, and resource utilization.",
      "Providing expert consultation for scalability, AI pipeline improvements, and system optimization.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We start by understanding your AI & ML goals, datasets, and computational needs. Our team identifies challenges and designs a roadmap to build Haskell-powered AI solutions optimized for performance and scalability.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "System Architecture Planning",
    description:
      "We design robust architectures for ML workflows, ensuring scalability, parallel computations, and seamless integration with Haskell applications.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Algorithm Design & Optimization",
    description:
      "Our engineers craft efficient Haskell algorithms for AI & ML models, optimizing training time, computational accuracy, and predictive performance.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend & API Development",
    description:
      "We develop Haskell backends and APIs for data processing, model training, inference, and integration with other systems.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Data Management & Analysis",
    description:
      "We manage, clean, and analyze large datasets to feed AI & ML pipelines, enabling actionable insights and accurate predictions.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Integration & Deployment",
    description:
      "We integrate Haskell-based modules with existing platforms or cloud services, deploying AI & ML models efficiently and reliably.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Performance & Security Optimization",
    description:
      "We optimize code efficiency, implement caching, and ensure secure, high-performance AI & ML pipelines in Haskell.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Every Haskell AI component undergoes rigorous testing for accuracy, reliability, and performance to deliver robust AI & ML systems.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Monitoring",
    description:
      "We handle deployment, server configuration, and real-time monitoring to ensure Haskell-based AI & ML applications run smoothly under all workloads.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Long-Term Support",
    description:
      "Post-deployment, we provide ongoing support, updates, and performance audits to ensure your Haskell AI & ML solutions remain future-ready and reliable.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaCode />,
    title: "Custom Haskell Development",
    desc: "We develop Haskell-powered AI & ML applications that are fast, scalable, and fully customizable — ensuring performance, reliability, and maintainability for your AI workflows.",
  },
  {
    icon: <FaCogs />,
    title: "High-Performance AI & ML Pipelines",
    desc: "Harness Haskell for building robust ML workflows, model training, and data pipelines with optimized backend logic and minimal latency.",
  },
  {
    icon: <FaServer />,
    title: "Integration with AI & ML Frameworks",
    desc: "Integrate Haskell modules with AI/ML frameworks, data analytics tools, and frontend platforms for seamless intelligent solutions.",
  },
  {
    icon: <FaLock />,
    title: "Data Security & Compliance",
    desc: "Ensure sensitive data, AI models, and computation pipelines are secure, encrypted, and compliant with industry standards.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "Our engineers fine-tune Haskell operations to achieve low-latency computation, fast model training, and efficient resource utilization.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Support & Optimization",
    desc: "We provide continuous monitoring, maintenance, and optimization to ensure high availability and scalable AI & ML solutions.",
  },
];

const cards = [
  {
    count: "150+",
    title: "Haskell AI Solutions Delivered",
    desc: "We’ve successfully built over 150 Haskell-powered AI & ML solutions — delivering high-performance, scalable, and intelligent systems for predictive analytics, model training, and data-driven decision-making. Each solution is optimized for speed, accuracy, and seamless integration across platforms.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "8+",
    title: "Years of Haskell Expertise",
    desc: "With 8+ years of experience, our developers craft robust Haskell AI & ML solutions that optimize performance, model training efficiency, and scalability. Our expertise ensures reliable, maintainable, and secure AI systems for complex computational needs.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "200+",
    title: "Clients Empowered Globally",
    desc: "We’ve partnered with 200+ organizations, delivering Haskell AI & ML solutions that enhance predictive capabilities, automation, and data-driven insights worldwide. Our clients span industries including healthcare, finance, research, and logistics.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Optimization Success Rate",
    desc: "Our optimization strategies achieve up to 99% efficiency in Haskell AI & ML computations, ensuring fast model execution, accurate predictions, and minimal resource overhead. We implement parallel processing, caching, and algorithmic optimizations for peak performance.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support & Monitoring",
    desc: "We offer 24/7 monitoring, updates, and optimization to keep your Haskell AI & ML systems stable, secure, and performing at peak efficiency at all times. Our support ensures uninterrupted operation and continuous improvement of AI workflows.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "What is Haskell?",
    description:
      "Haskell is a high-performance functional programming language ideal for building robust, scalable, and maintainable AI & ML applications.",
  },
  {
    title: "Why use Haskell for AI and ML?",
    description:
      "Haskell combines performance, safety, and expressiveness — allowing efficient development of AI & ML applications with maintainable and high-quality code.",
  },
  {
    title: "Can Haskell handle large datasets?",
    description:
      "Yes, Haskell is optimized for handling large-scale data, computations, and complex ML workflows efficiently.",
  },
  {
    title: "Is Haskell suitable for machine learning and AI?",
    description:
      "Absolutely. Haskell can integrate with AI/ML frameworks, enabling high-performance computations for predictive models and intelligent automation.",
  },
  {
    title: "Do you integrate Haskell into existing systems?",
    description:
      "Yes, we integrate Haskell modules into existing applications or cloud environments for enhanced AI/ML performance and scalability.",
  },
  {
    title: "How secure are Haskell AI applications?",
    description:
      "We implement encryption, secure APIs, and environment isolation to ensure your Haskell-based AI systems are safe and reliable.",
  },
  {
    title: "Can you optimize existing Haskell code?",
    description:
      "Definitely. We refactor and optimize Haskell code for faster computations, improved ML performance, and enhanced scalability.",
  },
  {
    title: "Do you offer ongoing maintenance for Haskell projects?",
    description:
      "Yes, we provide long-term support including performance tuning, library updates, and system optimization for AI & ML solutions.",
  },
  {
    title: "Which industries benefit from Haskell AI solutions?",
    description:
      "Industries like healthcare, finance, logistics, and research leverage Haskell for high-performance computing and AI & ML solutions.",
  },
  {
    title: "Can Haskell be integrated with analytics and visualization tools?",
    description:
      "Yes, Haskell AI & ML solutions can connect with visualization libraries and analytics platforms to display computations, insights, and model predictions.",
  },
];




  return (
    <>
      <CommonBanner
        img={gm}
        title="Haskell AI/ML Development"
        desc="AI and machine learning are huge topics in technology. In this series, we'll explore how Haskell's unique features as a language can be valuable in crafting better AI programs. In particular, we'll explore some advanced concepts in type safety, and apply these to the machine learning framework Tensor Flow. Haskell has strong abstraction capabilities and built-in memory management. Its code is highly reusable and easy to understand. This language is favored by many developers because it increases productivity."
      />
<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build High-Performance, Scalable & Intelligent AI Systems with{" "}
      <span className="text-indigo-600">
        Haskell AI & ML Development
      </span>{" "}
      ⚡
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking to develop robust, efficient, and intelligent AI & ML applications using{" "}
      <span className="font-semibold text-indigo-600">Haskell</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in creating high-performance AI & ML solutions that leverage Haskell’s
      functional programming strengths, type safety, and parallel computation capabilities for advanced data-driven projects.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From machine learning pipelines and predictive modeling to neural networks and
      data analytics, our developers craft Haskell-based AI solutions optimized for
      performance, accuracy, and scalability.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need real-time AI computations, large-scale data processing, or
      custom ML applications, our team ensures clean functional code, efficient algorithms,
      and seamless integration to empower your business with actionable insights and intelligent automation.
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
    Future IT Touch’s High-Performance Haskell AI & ML Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empowering businesses with high-performance, scalable, and intelligent AI & ML solutions using Haskell — delivering optimized, reliable, and functional programming-driven applications for predictive modeling, machine learning pipelines, and large-scale data analytics.
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
    <SiHaskell /> 
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    Haskell <br />
    AI & ML <br />
    <span className="">Development Solutions That Empower Intelligent Systems</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    Build intelligent{" "}
    <span className="text-[#00ffe4]">
      - high-performance, AI-driven applications ⚡
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


<div className="px-5 md:px-12 xl:px-28 bg-[#0a2548] py-10 md:py-14 lg:py-16 m-6 md:m-10 rounded-2xl">
  <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white font-extrabold w-full lg:w-[85%] mx-auto leading-snug">
    Accelerate Your Business With Custom Haskell AI & ML Development Services
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

<CommonFaqs faqData={faqData} title="On Haskell AI & ML Development" />



            <BusinessIdea />
      

     
    </>
  );
};

export default Haskell;
