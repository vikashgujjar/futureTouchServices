import React from "react";

import Image from "next/image";
import app from "../Assets/asp.webp";
import gm from "../Assets/php.webp";
import d1 from "../Assets/d1.webp";
import d2 from "../Assets/portfolio-img-6.webp";
import { FaMicrosoft } from "react-icons/fa";


import { FaChevronRight } from "react-icons/fa";
import { businessData } from "../common/Service_comp";
import GetNewInsight from "../components/GetNewInsight";
import { FaCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

import BusinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import { FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools } from "react-icons/fa";


const Asp = () => {
 const technolgyData = [
  {
    title: "Custom ASP.NET Web Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building high-performance, scalable web applications with ASP.NET.",
      "Developing secure and enterprise-grade backend systems.",
      "Creating robust CMS and ERP solutions with .NET architecture.",
      "Ensuring modular, clean, and maintainable C# code.",
    ],
  },
  {
    title: "ASP.NET MVC Application Development",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing structured MVC-based ASP.NET web solutions.",
      "Implementing RESTful APIs for seamless cross-platform integration.",
      "Using Entity Framework for efficient database operations.",
      "Integrating authentication, caching, and routing with precision.",
    ],
  },
  {
    title: "ASP.NET Core Development",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating lightweight, fast, and cross-platform ASP.NET Core apps.",
      "Ensuring modern architecture with high scalability and security.",
      "Integrating third-party APIs and cloud-based services.",
      "Optimizing response time and server-side performance.",
    ],
  },
  {
    title: "API Integration & Backend Services",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing RESTful APIs with ASP.NET Core Web API.",
      "Connecting apps with CRM, ERP, and external platforms.",
      "Managing data flow between frontend and backend layers.",
      "Implementing JWT authentication and secure token systems.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing SSL, OAuth, and data encryption standards.",
      "Protecting against SQL injection, XSS, and CSRF attacks.",
      "Regular system updates and vulnerability scans.",
      "Providing 24/7 technical assistance and monitoring.",
    ],
  },
  {
    title: "Ongoing Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Continuous monitoring and updates for .NET web apps.",
      "Upgrading legacy ASP.NET systems to .NET Core versions.",
      "Enhancing system performance and scalability.",
      "Delivering expert consultation and post-deployment support.",
    ],
  },
];

const steps = [
  {
    title: "Understanding Your Requirements",
    description:
      "We begin by analyzing your business goals, audience, and technical needs. This helps us design a custom ASP.NET solution that fits your objectives and lays the groundwork for a successful project.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "Planning and Architecture",
    description:
      "We design a well-structured backend and database model for your ASP.NET application. This ensures top-tier scalability, maintainability, and long-term performance.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Design and Frontend Integration",
    description:
      "Our frontend and backend teams collaborate to deliver engaging, responsive UIs seamlessly integrated with the ASP.NET backend for smooth performance.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend Development",
    description:
      "Using ASP.NET Core or MVC, we build secure server-side logic and APIs. Our modular code design follows Microsoft’s best practices for reliability and scalability.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Database Design & Management",
    description:
      "We use SQL Server or PostgreSQL for building efficient, secure databases. Our approach ensures smooth data transactions and long-term reliability.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "API Development & Integration",
    description:
      "We develop RESTful APIs using ASP.NET Core to integrate your app with cloud platforms, CRMs, or mobile applications effortlessly.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Security & Performance Optimization",
    description:
      "We apply multi-layered security practices like data encryption, HTTPS, and secure authentication, while fine-tuning app speed and performance.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Our QA team runs comprehensive manual and automated tests to ensure flawless functionality, security, and overall user experience.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Server Setup",
    description:
      "We handle deployment on Azure, AWS, or private servers, ensuring smooth configuration, scaling, and zero downtime during launch.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Ongoing Support",
    description:
      "We offer continuous updates, monitoring, and troubleshooting. From bug fixes to performance upgrades, we keep your .NET applications optimized and secure.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaCode />,
    title: "Custom ASP.NET Solutions",
    desc: "We build dynamic and secure ASP.NET web applications that align with business objectives. Our clean, efficient coding ensures top performance and flexibility.",
  },
  {
    icon: <FaCogs />,
    title: "ASP.NET Core Development",
    desc: "We create feature-rich, high-performance web apps using ASP.NET Core, ensuring fast execution, modular design, and future-ready architecture.",
  },
  {
    icon: <FaServer />,
    title: "MVC-Based Web Applications",
    desc: "Our team specializes in MVC framework-based ASP.NET projects that provide strong separation of logic and consistent maintainability.",
  },
  {
    icon: <FaLock />,
    title: "Enterprise Security Implementation",
    desc: "We integrate top-tier security layers such as role-based access, identity management, and secure token authentication for complete system protection.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "We enhance .NET applications with caching, asynchronous operations, and optimized queries for lightning-fast performance and scalability.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance and Support",
    desc: "Our experts provide 24/7 monitoring, upgrades, and troubleshooting to ensure your ASP.NET applications stay efficient, secure, and always up-to-date.",
  },
];

const cards = [
  {
    count: "100+",
    title: "Applications Developed & Maintained",
    desc: "We’ve successfully built and maintained over 100 ASP.NET web solutions, delivering reliable performance and long-term system stability across industries.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "10+",
    title: "Years of .NET Expertise",
    desc: "With 10+ years of ASP.NET experience, our developers create robust, secure, and scalable systems that power modern enterprises worldwide.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by 500+ clients globally, we deliver high-performance ASP.NET applications and continuous backend support tailored to each business domain.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our focus on innovation and consistent quality drives a 98% satisfaction rate. We deliver reliable, optimized .NET solutions that exceed client expectations.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Assistance Available",
    desc: "Our support team is available 24/7 to monitor, maintain, and upgrade your ASP.NET systems—ensuring peak performance and uninterrupted service.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "What is ASP.NET development?",
    description:
      "ASP.NET is Microsoft’s open-source web framework for building secure, scalable, and high-performance web applications using C#. It supports both MVC and Core architectures for modern solutions.",
  },
  {
    title: "Why choose ASP.NET Core for web development?",
    description:
      "ASP.NET Core is cross-platform, fast, and ideal for cloud-based applications. It provides superior performance, security, and scalability for enterprise-grade systems.",
  },
  {
    title: "What makes ASP.NET MVC development effective?",
    description:
      "ASP.NET MVC follows the Model-View-Controller pattern, enabling clean code structure, testability, and flexibility for complex web applications.",
  },
  {
    title: "Can ASP.NET handle enterprise-level applications?",
    description:
      "Yes. ASP.NET Core is designed for large-scale enterprise projects, offering modular design, advanced caching, authentication, and cloud integration.",
  },
  {
    title: "How secure are ASP.NET applications?",
    description:
      "We implement encryption, HTTPS, role-based authentication, and Microsoft Identity security. ASP.NET also provides built-in protection from SQL injection, XSS, and CSRF attacks.",
  },
  {
    title: "Is ASP.NET suitable for small projects?",
    description:
      "Yes. ASP.NET Core’s lightweight design and modular features make it suitable for startups and SMEs, offering fast development and lower maintenance costs.",
  },
  {
    title: "Can ASP.NET integrate with APIs and databases?",
    description:
      "Absolutely. ASP.NET easily integrates with RESTful APIs, SQL Server, MySQL, and Azure databases to create powerful, data-driven web solutions.",
  },
  {
    title: "Do you offer maintenance for ASP.NET applications?",
    description:
      "Yes, we provide full support and maintenance, including security patches, performance upgrades, and version migrations for all .NET-based systems.",
  },
  {
    title: "Can you migrate legacy systems to ASP.NET Core?",
    description:
      "Definitely. We specialize in upgrading old ASP.NET or other tech stacks to .NET Core for better performance, maintainability, and cloud compatibility.",
  },
  {
    title: "Which industries benefit from ASP.NET solutions?",
    description:
      "ASP.NET serves multiple industries like finance, healthcare, eCommerce, logistics, and education. Its flexibility makes it ideal for enterprise and business web platforms.",
  },
];


  return (
    <>
      <CommonBanner
        img={app}
        title="ASP.NET Development"
        desc="Microsoft ASP.NET is a set of technologies, built on top of the Microsoft .NET Framework, for building Web applications and XML Web services. ASP.NET web pages execute on a web server in IIS (Internet Information Server) and generate markup such as HTML and XML that is sent down to a desktop or mobile browser. This is important because the application does not require any installation on the client computer beyond a web browser. This means your application can be run from anywhere regardless of the hardware."
      />


    <div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Robust, Secure & Scalable Web Apps with{" "}
      <span className="text-indigo-600">
        ASP.NET, .NET Core & MVC Development
      </span>{" "}
      🚀
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking for experienced developers who can create reliable, high-performance
      web applications using{" "}
      <span className="font-semibold text-indigo-600">ASP.NET, .NET Core,</span> and{" "}
      <span className="font-semibold text-indigo-600">MVC architecture</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>,
      we specialize in developing secure, scalable, and enterprise-grade web
      applications tailored to meet your business objectives.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether it’s a corporate web portal, enterprise system, or cloud-based
      platform, our .NET developers use modern frameworks, structured MVC patterns,
      and optimized databases to ensure unmatched performance and flexibility.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      As a trusted ASP.NET development company, we deliver applications that are
      fast, secure, and easy to scale. Our .NET Core and MVC experts focus on building
      powerful backend systems that enable smooth user experiences and long-term
      business growth.
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
    Future IT Touch’s High-Performance ASP.NET, .NET Core & MVC Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Delivering robust, secure, and scalable web applications that blend modern
    .NET frameworks with high performance and clean architecture — crafted to
    accelerate your business growth and digital transformation.
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
    <FaMicrosoft /> {/* Recommended Icon */}
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    ASP.NET, .NET Core & <br />
    MVC <br />
    <span className="">Development Approach</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    To build powerful{" "}
    <span className="text-[#00ffe4]">
      - enterprise web apps for scalable success ⚡
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

<CommonFaqs faqData={faqData} title="On ASP.NET, .NET Core & MVC Development" />
            <BusinessIdea />
      

     
    </>
  );
};

export default Asp;
