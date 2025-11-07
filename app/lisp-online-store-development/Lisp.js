import React from "react";


import { FaGem } from "react-icons/fa";
import gm from "../Assets/lisp.webp";


import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import { FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools } from "react-icons/fa";


const Lisp = () => {
const technolgyData = [
  {
    title: "Custom Lisp Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building efficient and high-performance online store applications using Lisp.",
      "Developing modular, scalable, and robust backend architectures for e-commerce.",
      "Creating enterprise-grade Lisp solutions for inventory, order, and payment management.",
      "Ensuring clean, reusable, and maintainable Lisp code with best practices.",
    ],
  },
  {
    title: "E-Commerce Solutions Powered by Lisp",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing advanced e-commerce features such as product catalogs, shopping carts, and checkout systems.",
      "Integrating payment gateways and secure transaction processing.",
      "Optimizing performance for high-traffic online stores.",
      "Building intelligent recommendation and inventory management systems using Lisp.",
    ],
  },
  {
    title: "Online Store Integration",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Connecting Lisp-based e-commerce apps with front-end platforms and third-party services.",
      "Developing APIs for seamless order, customer, and inventory management.",
      "Creating efficient data pipelines for product analytics and user behavior tracking.",
      "Enhancing performance with optimized Lisp algorithms for large product databases.",
    ],
  },
  {
    title: "API & Payment Gateway Development",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating RESTful APIs for product, order, and user management.",
      "Integrating secure payment processing and transaction validation.",
      "Developing dashboards for sales, inventory, and customer insights.",
      "Delivering scalable APIs with Lisp frameworks for e-commerce.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing robust security, encryption, and fraud prevention measures.",
      "Protecting customer data and payment information.",
      "Ensuring efficient resource management in high-traffic stores.",
      "Providing regular performance tuning, code updates, and patch management.",
    ],
  },
  {
    title: "Continuous Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Offering long-term maintenance for Lisp online store projects.",
      "Upgrading dependencies and optimizing backend performance.",
      "Monitoring system uptime, traffic, and server performance.",
      "Providing consultation for scalability, feature enhancements, and optimization.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We start by understanding your e-commerce goals, product catalog, and user experience needs. Our team identifies technical challenges and designs a roadmap for your Lisp online store.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "System Architecture Planning",
    description:
      "We design scalable architectures for online stores, ensuring smooth handling of high-traffic, secure transactions, and real-time inventory updates using Lisp.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Feature Design & Optimization",
    description:
      "Our engineers craft efficient algorithms for product search, recommendations, checkout, and payment processing to ensure smooth customer experiences.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend & API Development",
    description:
      "We build robust Lisp backends and APIs for order processing, inventory management, user authentication, and analytics.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Data Management & Analysis",
    description:
      "We manage and analyze product, user, and sales data to optimize inventory, pricing, and customer engagement strategies.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Integration & Deployment",
    description:
      "We integrate Lisp-based modules with front-end platforms, payment gateways, and third-party services, ensuring seamless deployment.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Performance & Security Optimization",
    description:
      "We optimize backend performance, implement caching, and ensure secure, scalable, and reliable online store operations.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Every component undergoes rigorous testing for functionality, security, and speed to deliver a bug-free, high-performance online store.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Monitoring",
    description:
      "We handle production deployment, server configuration, and real-time monitoring to ensure your Lisp store runs flawlessly under all traffic conditions.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Long-Term Support",
    description:
      "Post-launch, we provide continuous maintenance, updates, and performance audits — ensuring your Lisp online store remains secure, fast, and future-ready.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaCode />,
    title: "Custom Lisp Development",
    desc: "We develop Lisp-based online store applications that are fast, scalable, and fully customizable — ensuring reliability, security, and flexibility for e-commerce businesses.",
  },
  {
    icon: <FaCogs />,
    title: "High-Performance Store Management",
    desc: "Harness Lisp for inventory, order, and customer management with optimized backend logic and minimal latency.",
  },
  {
    icon: <FaServer />,
    title: "E-Commerce Integration",
    desc: "Integrate payment gateways, APIs, and analytics platforms to create a seamless shopping experience for your customers.",
  },
  {
    icon: <FaLock />,
    title: "Data Security & Compliance",
    desc: "We ensure that all customer and transactional data are secure, encrypted, and compliant with industry standards.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "Our developers fine-tune Lisp operations to achieve fast loading times, efficient transactions, and low server overhead.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Support & Optimization",
    desc: "We provide continuous monitoring, maintenance, and optimization for feature enhancements and high uptime of your Lisp store.",
  },
];

const cards = [
  {
    count: "150+",
    title: "Lisp Stores Delivered",
    desc: "We’ve successfully built over 150 Lisp-powered online stores — delivering high-performance, scalable, and reliable e-commerce solutions for businesses worldwide. Each store is crafted with attention to seamless user experience, optimized product catalogs, fast checkout processes, and smooth backend operations, ensuring your customers enjoy a robust and engaging shopping journey.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "8+",
    title: "Years of Lisp Expertise",
    desc: "With 8+ years of experience, our developers craft robust Lisp online store solutions that optimize performance, transaction handling, and user experience. Our expertise ensures stores can handle large product inventories, high traffic volumes, and complex integrations while maintaining reliability, security, and lightning-fast responsiveness.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "200+",
    title: "Clients Empowered Globally",
    desc: "We’ve partnered with 200+ organizations, delivering Lisp-based e-commerce solutions that enhance sales, automation, and user engagement worldwide. From custom storefront designs to advanced inventory management and automated payment workflows, our solutions help businesses scale efficiently and provide superior online shopping experiences for customers across the globe.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Optimization Success Rate",
    desc: "Our optimization strategies achieve up to 99% efficiency in backend computations and transaction processing, ensuring fast and reliable store operations. By fine-tuning database queries, implementing caching mechanisms, and optimizing server-side logic, we make sure your Lisp online store runs flawlessly even under heavy traffic and complex e-commerce operations.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support & Monitoring",
    desc: "We offer 24/7 monitoring, updates, and optimization to keep your Lisp online store stable, secure, and performing at peak efficiency at all times. Our proactive support includes troubleshooting issues, updating dependencies, monitoring server health, and implementing performance improvements to ensure your store delivers uninterrupted service and excellent customer experiences.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


const faqData = [
  {
    title: "What is Lisp?",
    description:
      "Lisp is a high-performance programming language suitable for building complex, dynamic applications, including online store platforms.",
  },
  {
    title: "Why use Lisp for online stores?",
    description:
      "Lisp provides flexibility, scalability, and high performance — ideal for building secure, feature-rich, and customizable e-commerce solutions.",
  },
  {
    title: "Can Lisp handle large product catalogs?",
    description:
      "Yes, Lisp is optimized for managing large datasets, inventory, and transaction processing efficiently.",
  },
  {
    title: "Is Lisp suitable for payment and transaction processing?",
    description:
      "Absolutely. Lisp can integrate with payment gateways and ensure secure, fast, and reliable transactions for online stores.",
  },
  {
    title: "Do you integrate Lisp into existing platforms?",
    description:
      "Yes, we can integrate Lisp modules into your current e-commerce systems or cloud infrastructure for enhanced performance and features.",
  },
  {
    title: "How secure are Lisp online stores?",
    description:
      "We implement encryption, secure API practices, and compliance measures to ensure your store and customer data remain protected.",
  },
  {
    title: "Can you optimize existing Lisp store code?",
    description:
      "Definitely. We enhance performance, scalability, and security of your existing Lisp e-commerce applications.",
  },
  {
    title: "Do you provide long-term support for Lisp stores?",
    description:
      "Yes, we offer ongoing maintenance, performance audits, and feature updates to keep your Lisp store running efficiently.",
  },
  {
    title: "Which industries benefit from Lisp online stores?",
    description:
      "Retail, wholesale, subscription services, and niche e-commerce businesses leverage Lisp for high-performance, customized online stores.",
  },
  {
    title: "Can Lisp be integrated with analytics and reporting tools?",
    description:
      "Yes, Lisp online stores can connect with analytics, reporting, and marketing tools to optimize sales and business insights.",
  },
];




  return (
    <>
      <CommonBanner
        img={gm}
        title="lisp Online Store Development"
        desc="JLISP or List Processor language remains the principal language for AI work in the United States. LISP was invented at the Massachusetts Institute of Technology (MIT) by John McCarthy, who coined the term “artificial intelligence”. Lisp is the second-oldest high-level programming language in use today, and has become the programming language of choice for AI applications after its publication in 1960. LISP operates on Read–Eval–Print Loop (REPL), also known as an interactive top level or language shell, in an interactive computer programming environment that codes, compiles, and runs the code in 30+ programming languages including JavaScript and Python."
      />
<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build High-Performance, Scalable & Intelligent Systems with{" "}
      <span className="text-indigo-600">
        Julia Development Services
      </span>{" "}
      ⚡
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking to develop fast, reliable, and data-intensive applications using{" "}
      <span className="font-semibold text-indigo-600">Julia</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in creating high-performance software solutions that leverage Julia’s
      speed, numerical computing capabilities, and elegant syntax for scientific and
      data-driven projects.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From scientific simulations and numerical modeling to AI workflows and optimization
      tasks, our developers craft Julia-based solutions designed for performance,
      accuracy, and scalability.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need real-time computations, large-scale data processing, or custom
      scientific applications, our team ensures clean code, efficient algorithms, and
      seamless system integration to empower your business with actionable insights.
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
    Future IT Touch’s High-Performance Lisp Online Store Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empowering businesses with high-performance, scalable, and feature-rich online stores using Lisp — delivering optimized, reliable, and intelligent e-commerce solutions for seamless shopping experiences, fast checkout workflows, and large-scale product management.
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
    <FaGem /> {/* Recommended Icon for Lisp Online Store Development */}
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    Lisp <br />
    Online Store <br />
    <span className="">Development Solutions That Boost E-Commerce</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    Build intelligent{" "}
    <span className="text-[#00ffe4]">
      - scalable, feature-rich online stores ⚡
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
    Accelerate Your Business With Custom Lisp Online Store Development Services
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

<CommonFaqs faqData={faqData} title="On Lisp Online Store Development" />


            <BusinessIdea />
      

     
    </>
  );
};

export default Lisp;
