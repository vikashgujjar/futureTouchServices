import React from "react";


import gm from "../Assets/block.webp";

import { SiCplusplus } from "react-icons/si";

import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import { FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools } from "react-icons/fa";


const Cblock = () => {
const technolgyData = [
  {
    title: "Custom C++ Blockchain Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building efficient, high-performance blockchain applications using C++.",
      "Developing modular, secure, and scalable backend architectures for blockchain systems.",
      "Creating enterprise-grade C++ solutions for smart contracts, transaction management, and consensus protocols.",
      "Ensuring clean, reusable, and maintainable C++ code following best practices for blockchain projects.",
    ],
  },
  {
    title: "Blockchain Solutions Powered by C++",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing advanced blockchain features such as distributed ledgers, consensus algorithms, and secure transactions.",
      "Optimizing performance for high-throughput blockchain networks.",
      "Building C++-powered solutions for cryptocurrency, tokenization, and decentralized apps.",
      "Integrating C++ with blockchain frameworks for robust, high-performance, and secure solutions.",
    ],
  },
  {
    title: "Smart Contract & DApp Integration",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Connecting C++ blockchain solutions with decentralized applications and frontend platforms.",
      "Developing APIs for seamless transaction, wallet, and contract interactions.",
      "Creating efficient pipelines for ledger updates, validation, and monitoring.",
      "Enhancing performance using optimized C++ algorithms for blockchain computations.",
    ],
  },
  {
    title: "API & Node Development",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating RESTful APIs for blockchain data, transactions, and smart contract operations.",
      "Integrating C++ nodes into existing networks or blockchain infrastructure.",
      "Developing dashboards for transaction tracking, analytics, and reporting.",
      "Delivering scalable APIs and node services for high-performance blockchain applications.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing secure coding practices, encryption, and transaction verification.",
      "Protecting sensitive blockchain data and private keys.",
      "Ensuring resource efficiency and robustness in high-performance blockchain networks.",
      "Providing regular updates, performance tuning, and maintenance for C++ blockchain systems.",
    ],
  },
  {
    title: "Continuous Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Offering long-term support for C++ blockchain projects.",
      "Optimizing consensus protocols, smart contracts, and node performance.",
      "Monitoring systems for uptime, efficiency, and network security.",
      "Providing expert consultation for scalability, blockchain upgrades, and optimization.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We start by understanding your blockchain goals, transaction workflows, and network requirements. Our team designs a roadmap to build high-performance C++ blockchain applications.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "System Architecture Planning",
    description:
      "We design scalable architectures for blockchain networks, nodes, and distributed ledger systems, ensuring secure, fast, and efficient operations using C++.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Consensus & Algorithm Design",
    description:
      "Our engineers develop and optimize consensus protocols, transaction validation algorithms, and cryptographic operations in C++ for blockchain networks.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend & Node Development",
    description:
      "We implement C++ nodes, smart contract support, and blockchain APIs to ensure reliable transaction processing, ledger updates, and network integration.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Data Management & Security",
    description:
      "We securely manage distributed ledger data, cryptographic keys, and transaction records, ensuring integrity, privacy, and high-performance operations.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Integration & Deployment",
    description:
      "We integrate C++ blockchain modules with wallets, DApps, exchanges, and third-party systems for seamless deployment and operation.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Performance & Security Optimization",
    description:
      "We optimize C++ blockchain nodes, transaction processing, and network throughput to ensure high-performance, secure, and resilient distributed systems.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Every C++ blockchain component undergoes rigorous testing for security, performance, and compliance to deliver reliable decentralized solutions.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Monitoring",
    description:
      "We handle network deployment, node configuration, and real-time monitoring to ensure your C++ blockchain applications run smoothly and securely.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Long-Term Support",
    description:
      "Post-deployment, we provide ongoing updates, performance audits, and feature enhancements to keep your C++ blockchain network secure, efficient, and future-ready.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaCode />,
    title: "Custom C++ Blockchain Development",
    desc: "We develop C++ blockchain applications that are fast, secure, and scalable — ensuring reliable and maintainable systems for decentralized networks, smart contracts, and transaction processing.",
  },
  {
    icon: <FaCogs />,
    title: "High-Performance Blockchain Nodes",
    desc: "Harness C++ for building robust blockchain nodes, validating transactions, and managing distributed ledgers with minimal latency.",
  },
  {
    icon: <FaServer />,
    title: "Integration with DApps & Networks",
    desc: "Integrate C++ blockchain modules with DApps, wallets, exchanges, and analytics platforms for seamless decentralized solutions.",
  },
  {
    icon: <FaLock />,
    title: "Data Security & Compliance",
    desc: "Ensure cryptographic keys, transaction data, and smart contracts are secure, encrypted, and compliant with blockchain standards.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "Our engineers fine-tune C++ nodes, smart contracts, and consensus operations to maximize throughput, minimize latency, and ensure efficient resource usage.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Support & Optimization",
    desc: "We provide continuous monitoring, maintenance, and optimization to ensure high availability, reliability, and scalability of your blockchain solutions.",
  },
];

const cards = [
  {
    count: "150+",
    title: "C++ Blockchain Solutions Delivered",
    desc: "We’ve successfully built over 150 C++ blockchain projects — delivering high-performance, secure, and scalable decentralized systems for smart contracts, cryptocurrency, and enterprise blockchain solutions. Each system is optimized for efficiency, reliability, and seamless integration across networks.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "8+",
    title: "Years of C++ Expertise",
    desc: "With 8+ years of experience, our developers craft robust C++ blockchain solutions that optimize transaction throughput, node efficiency, and network scalability. Our expertise ensures reliable and secure blockchain operations for complex decentralized ecosystems.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "200+",
    title: "Clients Empowered Globally",
    desc: "We’ve partnered with 200+ organizations, delivering C++ blockchain solutions that enhance decentralization, transparency, and trust. Our clients span finance, logistics, supply chain, and fintech industries worldwide.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Optimization Success Rate",
    desc: "Our optimization strategies achieve up to 99% efficiency in blockchain computations, transaction validation, and smart contract execution, ensuring secure and fast network performance.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support & Monitoring",
    desc: "We offer 24/7 monitoring, updates, and optimization to keep your C++ blockchain networks stable, secure, and performing at peak efficiency at all times. Our proactive support ensures uninterrupted network operations and continuous improvement.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "What is C++ Blockchain Development?",
    description:
      "C++ Blockchain Development involves using the C++ programming language to build high-performance, secure, and scalable decentralized applications, smart contracts, and blockchain nodes.",
  },
  {
    title: "Why use C++ for blockchain?",
    description:
      "C++ offers high performance, memory efficiency, and low-level control — making it ideal for building secure, fast, and scalable blockchain networks.",
  },
  {
    title: "Can C++ handle large-scale blockchain networks?",
    description:
      "Yes, C++ is highly efficient in handling large transaction volumes, distributed ledgers, and complex consensus protocols.",
  },
  {
    title: "Is C++ suitable for smart contracts and decentralized apps?",
    description:
      "Absolutely. C++ can be used to develop secure and optimized smart contracts, DApps, and blockchain infrastructure.",
  },
  {
    title: "Do you integrate C++ blockchain modules into existing systems?",
    description:
      "Yes, we integrate C++ blockchain modules with existing applications, wallets, and enterprise systems for seamless operations.",
  },
  {
    title: "How secure are C++ blockchain applications?",
    description:
      "We implement encryption, secure APIs, and best practices to ensure transaction integrity, data security, and trust across your blockchain network.",
  },
  {
    title: "Can you optimize existing C++ blockchain code?",
    description:
      "Definitely. We optimize performance, enhance transaction throughput, and refactor blockchain code for better reliability and scalability.",
  },
  {
    title: "Do you provide long-term support for C++ blockchain projects?",
    description:
      "Yes, we offer ongoing maintenance, monitoring, and updates to ensure your blockchain networks run smoothly and securely.",
  },
  {
    title: "Which industries benefit from C++ blockchain solutions?",
    description:
      "Finance, logistics, supply chain, fintech, and enterprise applications leverage C++ blockchain for secure, fast, and scalable decentralized solutions.",
  },
  {
    title: "Can C++ blockchain be integrated with analytics and reporting tools?",
    description:
      "Yes, C++ blockchain solutions can connect with analytics, reporting, and visualization tools for monitoring network performance, transaction metrics, and smart contract analytics.",
  },
];




  return (
    <>
      <CommonBanner
        img={gm}
        title="C++ Blockchain Development"
        desc="AI and machine learning are huge topics in technology. In this series, we'll explore how Haskell's unique features as a language can be valuable in crafting better AI programs. In particular, we'll explore some advanced concepts in type safety, and apply these to the machine learning framework Tensor Flow. Haskell has strong abstraction capabilities and built-in memory management. Its code is highly reusable and easy to understand. This language is favored by many developers because it increases productivity."
      />
<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build High-Performance, Secure & Scalable Systems with{" "}
      <span className="text-indigo-600">
        C++ Blockchain Development
      </span>{" "}
      ⚡
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking to develop fast, secure, and decentralized applications using{" "}
      <span className="font-semibold text-indigo-600">C++</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in creating high-performance blockchain solutions that leverage C++’s
      speed, memory efficiency, and robust system-level capabilities for secure
      decentralized projects.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From smart contracts and distributed ledger systems to secure transaction
      processing and decentralized apps, our developers craft C++ blockchain
      solutions optimized for performance, scalability, and reliability.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need enterprise blockchain solutions, cryptocurrency platforms, or
      secure transaction networks, our team ensures clean, maintainable C++ code,
      optimized algorithms, and seamless integration to empower your business with
      trustworthy and high-performance decentralized solutions.
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
    Future IT Touch’s High-Performance C++ Blockchain Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empowering businesses with high-performance, secure, and scalable blockchain solutions using C++ — delivering optimized, reliable, and efficient decentralized applications for smart contracts, distributed ledger systems, cryptocurrency platforms, and secure transaction networks.
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
      <SiCplusplus /> 
    </h6>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
      C++ <br />
      Blockchain <br />
      <span className="">Development Solutions That Empower Secure & Decentralized Systems</span>
    </h2>
    <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
      Build intelligent{" "}
      <span className="text-[#00ffe4]">
        - high-performance, secure blockchain applications ⚡
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
    Accelerate Your Business With Custom C++ Blockchain Development Services
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

<CommonFaqs faqData={faqData} title="On C++ Blockchain Development" />



            <BusinessIdea />
      

     
    </>
  );
};

export default Cblock;
