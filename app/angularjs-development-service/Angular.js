import React from "react";
import { FaMicrosoft } from "react-icons/fa";

import { FaAngular } from "react-icons/fa";
import app from "../Assets/aglr.webp";


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




const Angular = () => {





 const technolgyData = [
  {
    title: "Custom AngularJS Web Development",
    icon: <FaAngular className="text-[#306998] text-4xl" />,
    list: [
      "Building dynamic, feature-rich single-page applications using AngularJS.",
      "Developing modular and maintainable front-end architectures.",
      "Ensuring seamless integration with RESTful APIs and backend systems.",
      "Creating fast, responsive, and scalable UI components.",
    ],
  },
  {
    title: "Enterprise AngularJS Application Development",
    icon: <FaServer className="text-[#306998] text-4xl" />,
    list: [
      "Designing enterprise-grade AngularJS applications with complex data flows.",
      "Implementing reusable components and directives for large-scale projects.",
      "Integrating backend services and real-time data handling with WebSockets.",
      "Optimizing code for high performance and scalability.",
    ],
  },
  {
    title: "Custom Module & Component Development",
    icon: <FaCogs className="text-[#306998] text-4xl" />,
    list: [
      "Creating reusable AngularJS components for consistent UI/UX.",
      "Building custom directives and services for specific business logic.",
      "Implementing routing, state management, and data binding efficiently.",
      "Ensuring high performance with lazy loading and AOT compilation.",
    ],
  },
  {
    title: "API Integration & Backend Connectivity",
    icon: <FaDatabase className="text-[#306998] text-4xl" />,
    list: [
      "Integrating AngularJS front-end with RESTful and GraphQL APIs.",
      "Seamless data synchronization between frontend and backend layers.",
      "Using RxJS for reactive programming and asynchronous operations.",
      "Handling authentication and data security using JWT and OAuth2.",
    ],
  },
  {
    title: "Security & Application Maintenance",
    icon: <FaLock className="text-[#306998] text-4xl" />,
    list: [
      "Protecting AngularJS apps from XSS, CSRF, and injection attacks.",
      "Implementing role-based access control and secure data flow.",
      "Regular patching, bug fixes, and dependency updates.",
      "Ensuring continuous monitoring and performance improvements.",
    ],
  },
  {
    title: "Ongoing Support & Optimization",
    icon: <FaTools className="text-[#306998] text-4xl" />,
    list: [
      "Providing 24/7 maintenance and optimization services.",
      "Upgrading AngularJS to Angular framework for better scalability.",
      "Enhancing performance with caching and code-splitting techniques.",
      "Delivering long-term support and technical consultancy.",
    ],
  },
];

 const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We start by understanding your business goals and technical needs to deliver an AngularJS solution aligned with your objectives and scalability expectations.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "UI/UX Design and Architecture",
    description:
      "We create intuitive UI/UX designs and define a robust AngularJS architecture to ensure efficient component communication and data handling.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Frontend Development",
    description:
      "Our developers build interactive and high-performing frontends using AngularJS, following modular architecture for easy maintenance.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "API Integration & Data Binding",
    description:
      "We connect AngularJS applications with RESTful APIs and implement two-way data binding for real-time synchronization and smooth interactions.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Testing & Debugging",
    description:
      "We conduct unit, end-to-end, and integration testing using Jasmine and Karma to ensure bug-free and reliable applications.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Performance Optimization",
    description:
      "Our team optimizes AngularJS apps through lazy loading, code splitting, and caching strategies to enhance speed and responsiveness.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Security Implementation",
    description:
      "We enforce advanced security practices, including data encryption, sanitization, and authentication to safeguard applications from threats.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment",
    description:
      "We deploy AngularJS applications using CI/CD pipelines on cloud platforms like AWS, Azure, or Firebase for scalable performance.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Support",
    description:
      "We provide continuous updates, version upgrades, and performance monitoring to ensure your AngularJS applications run smoothly.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

 const upScale = [
  {
    icon: <FaAngular className="text-[#306998]" />,
    title: "Custom AngularJS Development",
    desc: "We craft high-performing AngularJS applications tailored to your business needs, ensuring scalability, speed, and modular design.",
  },
  {
    icon: <FaCogs className="text-[#306998]" />,
    title: "Component-Based Architecture",
    desc: "We build reusable, modular components that enhance app maintainability, simplify scaling, and improve overall performance.",
  },
  {
    icon: <FaServer className="text-[#306998]" />,
    title: "API & Backend Integration",
    desc: "We ensure seamless communication between frontend and backend through well-structured APIs and secure data handling.",
  },
  {
    icon: <FaLock className="text-[#306998]" />,
    title: "Advanced Security Layers",
    desc: "We secure your AngularJS apps with advanced authentication, data validation, and protection against XSS and CSRF attacks.",
  },
  {
    icon: <FaRocket className="text-[#306998]" />,
    title: "Performance Enhancement",
    desc: "We optimize AngularJS apps using lazy loading, change detection optimization, and efficient state management techniques.",
  },
  {
    icon: <FaTools className="text-[#306998]" />,
    title: "Maintenance & Version Upgrades",
    desc: "We provide ongoing support and upgrades, ensuring your AngularJS apps remain up-to-date and fully optimized for performance.",
  },
];

const cards = [
  {
    count: "200+",
    title: "AngularJS Projects Delivered",
    desc: "We’ve successfully developed and delivered over 200 AngularJS applications across multiple industries, including eCommerce, healthcare, education, and finance. Each project is tailored to meet client goals with exceptional performance, responsive design, and a seamless user experience that scales effortlessly with business growth.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "8+",
    title: "Years of Frontend Expertise",
    desc: "With more than eight years of hands-on experience in front-end technologies, our team builds AngularJS solutions that are visually engaging, high-performing, and maintainable. We continuously adapt to the latest trends in UI/UX and framework advancements to ensure your application stays future-ready and competitive in the digital landscape.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "350+",
    title: "Global Clients Served",
    desc: "Our client base spans over 30 countries, delivering AngularJS solutions that help startups, SMBs, and enterprises achieve digital excellence. From custom dashboards to enterprise-grade applications, we focus on reliability, scalability, and innovation—earning the trust of 350+ satisfied global clients who return for continuous collaboration.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "We take pride in maintaining a 98% client satisfaction rate through our dedication to quality, transparent communication, and timely project delivery. Our AngularJS team ensures smooth integration, proactive issue resolution, and high-performing code that enhances customer engagement and drives measurable business results.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Technical Support",
    desc: "Our support team is available around the clock to provide immediate assistance and ongoing maintenance for your AngularJS applications. Whether it’s performance optimization, security updates, or feature enhancements, we ensure your digital platform remains reliable, secure, and fully optimized for continuous business success.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


 const faqData = [
  {
    title: "What is AngularJS used for?",
    description:
      "AngularJS is a front-end JavaScript framework used to build dynamic single-page web applications (SPAs) with interactive and responsive user interfaces.",
  },
  {
    title: "Is AngularJS still relevant for development?",
    description:
      "Yes, many enterprise systems still use AngularJS, and we also offer migration services to the latest Angular versions for enhanced performance and security.",
  },
  {
    title: "Can AngularJS integrate with backend APIs?",
    description:
      "Absolutely. AngularJS integrates seamlessly with RESTful APIs, enabling efficient data exchange and synchronization with backend systems.",
  },
  {
    title: "Do you offer AngularJS migration to newer versions?",
    description:
      "Yes, we provide complete migration services from AngularJS to modern Angular frameworks with improved performance, maintainability, and security.",
  },
  {
    title: "How secure is an AngularJS application?",
    description:
      "AngularJS applications can be secured using input sanitization, authentication mechanisms, and CSRF protection to safeguard against common vulnerabilities.",
  },
  {
    title: "Can AngularJS work with mobile apps?",
    description:
      "Yes, AngularJS can power hybrid mobile applications using frameworks like Ionic, ensuring smooth user experiences across devices.",
  },
  {
    title: "What tools do you use for testing AngularJS apps?",
    description:
      "We use Jasmine, Karma, and Protractor for testing AngularJS applications to ensure stability, reliability, and high performance.",
  },
  {
    title: "Do you offer support for existing AngularJS projects?",
    description:
      "Yes, we provide complete maintenance, version upgrades, and technical support for existing AngularJS-based applications.",
  },
  {
    title: "Can you integrate third-party APIs in AngularJS?",
    description:
      "Yes, we integrate various third-party services like payment gateways, CRM tools, and analytics APIs into AngularJS applications.",
  },
  {
    title: "Which industries benefit from AngularJS development?",
    description:
      "AngularJS is widely used in industries such as eCommerce, healthcare, education, fintech, and enterprise software solutions for scalable front-end systems.",
  },
];


  return (
    <>
      <CommonBanner
        img={app}
        title="ANGULAR DEVELOPMENT SERVICES"
        desc="Angular, an open source web development framework from Google, is used to build Single-Page Applications (SPAs). With the power of analyzing the page DOM and use of Angular-specific element attributes, Angular delivers cleaner codes which are easy to understand and less prone to error. A reputed Web and Mobile App Development Company in India, Future IT Touch Pvt. Ltd. leverages the power of MEAN Stack (MongoDB, Express Framework, Angular, and NodeJs) to develop dynamic and robust web applications. Avail our Angular development services for building secure and functional web & mobile applications those are easy to maintain."
      />


<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Dynamic, Responsive & Scalable Web Apps with{" "}
      <span className="text-indigo-600">AngularJS Development</span> 🚀
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking for expert developers who can create highly interactive,
      performance-driven web applications using{" "}
      <span className="font-semibold text-indigo-600">AngularJS</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in building dynamic, feature-rich, and scalable front-end
      solutions tailored to meet your business objectives.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether it’s a single-page application (SPA), enterprise dashboard, or
      complex web portal, our AngularJS developers leverage component-based
      architecture, two-way data binding, and reusable UI modules to ensure
      exceptional user experiences and maintainable code.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      As a trusted AngularJS development company, we deliver applications that
      are fast, responsive, and compatible across all devices. Our team ensures
      seamless integration with APIs and backend systems to support your
      business growth and digital transformation.
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
    Future IT Touch’s Dynamic AngularJS Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empower your business with responsive, high-performance web applications built 
    using the power of <span className="font-semibold text-indigo-600">AngularJS</span>. 
    Our team specializes in creating fast, scalable, and interactive single-page applications 
    (SPAs) that deliver seamless user experiences, enhanced functionality, and long-term scalability.
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
    <FaAngular /> {/* Recommended Icon for AngularJS */}
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    AngularJS <br />
    Framework <br />
    <span className="">Development Approach</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    To build dynamic{" "}
    <span className="text-[#00ffe4]">
      - interactive web apps with seamless user experiences ⚡
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
Empower Your Business With Custom AngularJS Development Services
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

<CommonFaqs faqData={faqData} title="On AngularJS Development Services" />
            <BusinessIdea />
      

     
    </>
  );
};

export default Angular;
