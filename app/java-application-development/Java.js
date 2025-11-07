import React from "react";

import app from "../Assets/ionic.webp";

import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import gm from "../Assets/java.webp";
import {
  FaJava,
  FaBug,
  FaBuilding,
  FaCloud,
  FaRocket,
  FaTools,
  FaServer,
  FaCogs,
  FaDatabase,
  FaLock,
} from "react-icons/fa";


const Java = () => {
const technolgyData = [
  {
    title: "Custom Java Application Development",
    icon: <FaJava className="text-[#306998] text-4xl" />,
    list: [
      "Developing secure, high-performance, and scalable enterprise applications using Java frameworks like Spring Boot and Java EE.",
      "Building tailor-made business applications optimized for reliability, performance, and future scalability.",
      "Designing modular architectures for enhanced maintainability and flexibility across large systems.",
      "Delivering cross-platform Java solutions for web, desktop, and cloud environments.",
    ],
  },
  {
    title: "Enterprise Software Development",
    icon: <FaBuilding className="text-[#306998] text-4xl" />,
    list: [
      "Creating robust enterprise-grade software for industries such as finance, healthcare, logistics, and eCommerce.",
      "Implementing microservices architecture for improved scalability and faster development cycles.",
      "Integrating enterprise tools, databases, and APIs to streamline workflows and automation.",
      "Ensuring high availability and fault-tolerant performance through advanced Java frameworks.",
    ],
  },
  {
    title: "API & Backend Development",
    icon: <FaCloud className="text-[#306998] text-4xl" />,
    list: [
      "Building secure and efficient RESTful and GraphQL APIs for smooth data exchange across systems.",
      "Implementing real-time data communication and seamless backend integrations.",
      "Connecting with cloud services like AWS, Google Cloud, and Azure for scalable backend deployment.",
      "Ensuring end-to-end security using JWT, OAuth, and encryption mechanisms.",
    ],
  },
  {
    title: "Java Application Testing & QA",
    icon: <FaBug className="text-[#306998] text-4xl" />,
    list: [
      "Conducting comprehensive unit, integration, and regression testing using tools like JUnit and Selenium.",
      "Ensuring performance, reliability, and stability across multiple environments.",
      "Performing load and stress testing to ensure applications handle real-world traffic efficiently.",
      "Delivering production-ready builds through automated CI/CD pipelines.",
    ],
  },
  {
    title: "Deployment & Optimization",
    icon: <FaRocket className="text-[#306998] text-4xl" />,
    list: [
      "Managing deployment across on-premise servers, cloud environments, and hybrid infrastructures.",
      "Optimizing application speed, scalability, and server performance for peak efficiency.",
      "Implementing containerization and orchestration using Docker and Kubernetes.",
      "Ensuring smooth release cycles with continuous monitoring and automated deployment workflows.",
    ],
  },
  {
    title: "Maintenance & Post-Launch Support",
    icon: <FaTools className="text-[#306998] text-4xl" />,
    list: [
      "Providing ongoing updates, performance improvements, and feature enhancements post-launch.",
      "Monitoring application performance and proactively addressing potential issues.",
      "Offering bug fixes, version upgrades, and framework updates to keep systems up-to-date.",
      "Delivering 24/7 technical support and maintenance for uninterrupted business operations.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis & Planning",
    description:
      "We start by analyzing your business requirements and defining a robust Java-based solution architecture aligned with your goals.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "System Architecture & UI Design",
    description:
      "Our architects design scalable system structures and intuitive user interfaces for seamless functionality and user experience.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Java Application Development",
    description:
      "Our skilled developers use Java frameworks like Spring Boot, Hibernate, and Java EE to build reliable and high-performance applications.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend Integration & API Development",
    description:
      "We develop secure APIs and integrate with external systems, databases, and third-party services to ensure smooth data flow.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Our QA engineers rigorously test applications to ensure flawless performance, scalability, and security before deployment.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Deployment & Cloud Setup",
    description:
      "We deploy your Java applications across cloud or on-premise environments, ensuring optimized performance and high availability.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Post-Launch Monitoring & Optimization",
    description:
      "We provide continuous support, performance monitoring, and upgrades to ensure long-term success of your Java applications.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaServer className="text-[#306998]" />,
    title: "Scalable Enterprise Solutions",
    desc: "We design and develop Java-based systems that scale efficiently with your business growth and operational demands.",
  },
  {
    icon: <FaCogs className="text-[#306998]" />,
    title: "Microservices Architecture",
    desc: "We leverage microservices for modular, flexible, and faster application deployment and updates.",
  },
  {
    icon: <FaDatabase className="text-[#306998]" />,
    title: "Database & API Integration",
    desc: "We build robust integrations with SQL/NoSQL databases and secure APIs for seamless connectivity and performance.",
  },
  {
    icon: <FaLock className="text-[#306998]" />,
    title: "Enterprise-Grade Security",
    desc: "We ensure top-tier security with data encryption, secure authentication, and compliance with industry standards.",
  },
  {
    icon: <FaRocket className="text-[#306998]" />,
    title: "Performance Optimization",
    desc: "We fine-tune application performance, reducing latency and improving efficiency through JVM optimization techniques.",
  },
  {
    icon: <FaTools className="text-[#306998]" />,
    title: "Long-Term Maintenance & Support",
    desc: "We offer continuous maintenance, bug fixing, and version updates to keep your Java apps running flawlessly.",
  },
];

const cards = [
  {
    count: "300+",
    title: "Java Applications Delivered",
    desc: "We’ve successfully developed over 300 Java applications across finance, healthcare, education, and enterprise sectors. Our projects are built for performance, scalability, and security — ensuring each application drives measurable business value.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "10+",
    title: "Years of Java Expertise",
    desc: "With a decade of experience in Java technologies, our developers excel at delivering robust, cloud-ready, and high-performing enterprise applications. We specialize in modern frameworks like Spring Boot, Hibernate, and Jakarta EE.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "400+",
    title: "Satisfied Global Clients",
    desc: "We’ve partnered with 400+ businesses globally to deliver custom Java solutions that power digital transformation and innovation across multiple industries.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Deployment Success Rate",
    desc: "Our proven development and testing methodology ensures a 99% successful deployment rate across cloud, on-premise, and hybrid environments — minimizing downtime and maximizing performance.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Technical Support",
    desc: "Our support team provides 24/7 assistance to ensure your Java applications remain secure, optimized, and continuously updated to meet evolving business requirements.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "Why choose Java for application development?",
    description:
      "Java offers unmatched stability, scalability, and security, making it ideal for developing enterprise-grade applications across platforms.",
  },
  {
    title: "Do you build enterprise-level Java solutions?",
    description:
      "Yes, we specialize in building large-scale, secure, and performance-optimized enterprise applications using advanced Java frameworks.",
  },
  {
    title: "Can you integrate Java applications with existing systems?",
    description:
      "Absolutely. We integrate Java apps with CRMs, ERPs, APIs, and databases for seamless interoperability and data synchronization.",
  },
  {
    title: "What Java frameworks do you use?",
    description:
      "We primarily use Spring Boot, Hibernate, Java EE, and Microservices architecture to build modern, efficient Java applications.",
  },
  {
    title: "Do you offer cloud deployment for Java apps?",
    description:
      "Yes, we deploy Java applications on AWS, Google Cloud, and Azure with optimized performance and auto-scaling capabilities.",
  },
  {
    title: "How do you ensure security in Java applications?",
    description:
      "We implement secure authentication, encryption, and access control measures to safeguard sensitive data and system integrity.",
  },
  {
    title: "Can you migrate existing applications to Java?",
    description:
      "Yes, we provide complete migration services to modernize legacy systems and rebuild them using Java’s latest frameworks and tools.",
  },
  {
    title: "Do you provide post-deployment support?",
    description:
      "We offer long-term maintenance, performance monitoring, and upgrades to ensure your Java applications stay efficient and up-to-date.",
  },
  {
    title: "Which industries benefit most from Java solutions?",
    description:
      "Our Java applications serve industries such as finance, healthcare, education, logistics, and eCommerce with custom-tailored solutions.",
  },
  {
    title: "Can Java handle high-traffic applications?",
    description:
      "Yes, Java is designed for high concurrency and scalability, making it ideal for applications that require handling large volumes of traffic efficiently.",
  },
];



  return (
    <>
      <CommonBanner
        img={gm}
        title="Java Blockchain Development Services"
        desc="If you are coming from a technical background, it makes sense to build on that knowledge and see what blockchain brings to the table. In the end, blockchain is a new technology, but it contains a combination of existing technologies with human behavior fueled by network effects. It is worth stating that the popular technologies such as Java, .NET, and relational databases are not common in the blockchain space. This space is primarily dominated by C, Go, Rust on the server side, and JavaScript on the client side. But if you know Java, there are a few projects and components written in Java that can be used as a leveraged entry point to the blockchain space."
      />

<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Powerful, Secure & Scalable Solutions with{" "}
      <span className="text-indigo-600">Java Application Development</span> ⚡
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking to develop high-performance, enterprise-grade applications that stand the test of time? 
      At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, 
      we specialize in delivering robust and scalable solutions through{" "}
      <span className="font-semibold text-indigo-600">Java Application Development</span> — 
      a versatile and secure platform trusted by global enterprises.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Our Java developers build efficient, modular, and maintainable applications using the latest frameworks 
      like Spring Boot, Hibernate, and Java EE. Whether it’s a web app, enterprise system, or API integration, 
      we ensure optimal performance, security, and scalability tailored to your business objectives.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From backend systems and cloud-based applications to full-stack Java solutions, we deliver 
      cutting-edge software engineered for reliability, speed, and seamless integration with modern technologies.
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
    Future IT Touch’s High-Performance Java Application Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empower your business with powerful, secure, and scalable applications built using Java. 
    Our expert developers craft enterprise-grade solutions that deliver exceptional performance, 
    seamless integration, and robust architecture — helping your brand achieve efficiency and innovation 
    across web, mobile, and cloud environments.
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
      <FaJava /> 
    </h6>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
      Java Web & <br />
      Enterprise App <br />
      <span className="">Development Approach</span>
    </h2>
    <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
      To deliver robust{" "}
      <span className="text-[#00ffe4]">
        - enterprise-grade applications with unmatched performance ⚡
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
      <CommonSlider cards={cards} />

      {/* upscale your buiness  */}

      <div className="px-5 md:px-12 xl:px-28 bg-[#0a2548] py-10 md:py-14 lg:py-16 m-6 md:m-10 rounded-2xl">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white font-extrabold w-full lg:w-[85%] mx-auto leading-snug">
Empower Your Business With Custom Java App Development Services

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

      <CommonFaqs
        faqData={faqData}
title="On Java App Development Services"
      />
      <BusinessIdea />
    </>
  );
};

export default Java;
