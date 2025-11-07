import React from "react";


import gm from "../Assets/solidity.webp";
import { FaPoll } from "react-icons/fa"; // Voting / Poll icon


import { SiCplusplus } from "react-icons/si";

import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import { FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools } from "react-icons/fa";


const Customer = () => {
const technolgyData = [
  {
    title: "Custom Blockchain Polling Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building secure, high-performance blockchain-based polling and voting applications.",
      "Developing modular, scalable, and transparent backend architectures for decentralized polls.",
      "Creating enterprise-grade solutions for secure vote tracking, tamper-proof results, and consensus management.",
      "Ensuring clean, reusable, and maintainable code following best practices for blockchain polling projects.",
    ],
  },
  {
    title: "Decentralized Poll & Voting Solutions",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing blockchain-based polling features with transparency, immutability, and verifiable results.",
      "Optimizing performance for high-concurrency voting networks.",
      "Building C++/Blockchain-powered solutions for customer surveys, elections, and decentralized decision-making.",
      "Integrating with DApps for secure, real-time vote collection and results verification.",
    ],
  },
  {
    title: "Smart Contract & DApp Integration",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Connecting blockchain polling systems with smart contracts and decentralized apps.",
      "Developing APIs for vote submission, result verification, and user authentication.",
      "Creating efficient pipelines for vote counting, validation, and auditing.",
      "Enhancing performance using optimized algorithms for secure and transparent voting.",
    ],
  },
  {
    title: "API & Node Development",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating RESTful APIs for poll submission, results, and user management.",
      "Integrating blockchain nodes into polling platforms for decentralized data integrity.",
      "Developing dashboards for vote analytics, reporting, and real-time monitoring.",
      "Delivering scalable APIs and node services for high-performance polling applications.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing secure coding, encryption, and tamper-proof vote storage.",
      "Protecting voter data, private keys, and blockchain records.",
      "Ensuring reliability and efficiency in high-volume polling networks.",
      "Providing regular updates, auditing, and maintenance for blockchain-based polls.",
    ],
  },
  {
    title: "Continuous Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Offering long-term support for blockchain polling platforms.",
      "Optimizing consensus mechanisms, smart contracts, and node performance.",
      "Monitoring systems for uptime, security, and transparent vote tracking.",
      "Providing expert consultation for scalability, polling improvements, and blockchain upgrades.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We start by understanding your polling needs, voter base, and security requirements. Our team designs a roadmap to build high-performance blockchain polling solutions.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "System Architecture Planning",
    description:
      "We design scalable and secure architectures for decentralized polls, voting nodes, and distributed ledger systems.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Consensus & Algorithm Design",
    description:
      "We develop consensus protocols, vote validation algorithms, and cryptographic operations to ensure transparent and tamper-proof results.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend & Node Development",
    description:
      "We implement blockchain nodes, APIs, and smart contract support for secure vote submission, counting, and result distribution.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Data Management & Security",
    description:
      "We securely manage voter data, ballots, and results, ensuring integrity, privacy, and transparency across the system.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Integration & Deployment",
    description:
      "We integrate blockchain polling modules with DApps, websites, and mobile apps for seamless participation and real-time results.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Performance & Security Optimization",
    description:
      "We optimize nodes, vote processing, and smart contracts for high-performance, low-latency, and secure polling operations.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Every blockchain polling component undergoes rigorous testing to ensure accuracy, security, and reliability of results.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Monitoring",
    description:
      "We handle network deployment, node configuration, and real-time monitoring to ensure smooth polling operations and secure results.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Long-Term Support",
    description:
      "Post-deployment, we provide updates, audits, and feature enhancements to maintain secure, transparent, and efficient blockchain polling systems.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaCode />,
    title: "Custom Blockchain Poll Development",
    desc: "We develop blockchain polling solutions that are secure, transparent, and scalable — ensuring reliable vote collection, tamper-proof results, and efficient participation.",
  },
  {
    icon: <FaCogs />,
    title: "High-Performance Polling Nodes",
    desc: "Harness blockchain technology to build robust nodes for vote validation, ledger management, and decentralized polling.",
  },
  {
    icon: <FaServer />,
    title: "Integration with DApps & Platforms",
    desc: "Integrate blockchain polls with websites, mobile apps, and decentralized platforms for real-time voting and analytics.",
  },
  {
    icon: <FaLock />,
    title: "Data Security & Privacy",
    desc: "Ensure all ballots, voter data, and results are secure, encrypted, and compliant with privacy regulations.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "Optimize blockchain nodes, smart contracts, and vote processing for fast, efficient, and reliable polling.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Support & Optimization",
    desc: "We provide continuous monitoring, maintenance, and improvements to ensure high availability, security, and reliability of blockchain polling systems.",
  },
];

const cards = [
  {
    count: "100+",
    title: "Blockchain Polls Delivered",
    desc: "We’ve successfully implemented over 100 blockchain-based polling systems — delivering transparent, secure, and tamper-proof voting solutions for elections, surveys, and customer feedback platforms.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "7+",
    title: "Years of Blockchain Expertise",
    desc: "With 7+ years of experience, our developers craft robust blockchain polling solutions that optimize transaction integrity, voting accuracy, and scalability.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "150+",
    title: "Clients Served Globally",
    desc: "We’ve partnered with 150+ organizations, delivering secure and transparent blockchain voting solutions for enterprises, government bodies, and research institutions.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Voting Integrity Success Rate",
    desc: "Our solutions achieve up to 99% reliability and tamper-proof accuracy in blockchain polling and voting systems, ensuring trustworthy results.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Support & Monitoring",
    desc: "We offer continuous monitoring, updates, and optimization to maintain stable, secure, and high-performance blockchain polling platforms at all times.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "What is Blockchain Polling?",
    description:
      "Blockchain Polling involves using blockchain technology to build secure, transparent, and tamper-proof voting or survey systems.",
  },
  {
    title: "Why use blockchain for customer polls?",
    description:
      "Blockchain ensures security, transparency, and immutability of poll results, reducing fraud and enhancing trust in voting or survey systems.",
  },
  {
    title: "Can blockchain handle large-scale polls?",
    description:
      "Yes, blockchain is highly scalable and capable of managing large numbers of voters and high-volume transactions efficiently.",
  },
  {
    title: "Is blockchain suitable for customer surveys and elections?",
    description:
      "Absolutely. Blockchain provides verifiable and tamper-proof systems suitable for online surveys, elections, and enterprise polls.",
  },
  {
    title: "Do you integrate blockchain polls into existing platforms?",
    description:
      "Yes, we integrate blockchain polling modules with websites, apps, and enterprise systems for seamless participation and analytics.",
  },
  {
    title: "How secure are blockchain polls?",
    description:
      "We implement encryption, smart contracts, and secure coding practices to ensure votes, ballots, and results are safe and tamper-proof.",
  },
  {
    title: "Can you optimize existing blockchain polling systems?",
    description:
      "Yes, we enhance performance, security, and scalability of existing blockchain polling applications.",
  },
  {
    title: "Do you provide long-term support for blockchain polls?",
    description:
      "Yes, we offer continuous maintenance, monitoring, and updates to keep your polling systems secure and reliable.",
  },
  {
    title: "Which industries benefit from blockchain polling?",
    description:
      "Enterprises, government bodies, research organizations, and market research companies leverage blockchain for secure and transparent polls.",
  },
  {
    title: "Can blockchain polls integrate with analytics tools?",
    description:
      "Yes, blockchain polling solutions can be connected to reporting and analytics platforms for real-time monitoring and insights.",
  },
];





  return (
    <>
      <CommonBanner
        img={gm}
        title="Customer Polls Blockchain Development"
        desc="Future IT Touch Pvt. Ltd. provides blockchain dedicated teams to help our clients in getting top-notch and secure solutions tailored to their specific needs. We help business owners to translate their ideas into blockchain solutions, assist in polishing and reviewing existing blockchain applications.  Being a blockchain app development company, Future IT Touch Pvt. Ltd. makes sure that each solution delivered ensures significant reduction in attack vulnerability. Our team has deep expertise in strengthening critical network and hardware requirements, as well as fixing data tampering issues by developing robust blockchain solutions."
      />
<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build High-Performance, Secure & Transparent Voting Systems with{" "}
      <span className="text-indigo-600">
        Customer Polls Blockchain
      </span>{" "}
      ⚡
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking to develop secure, transparent, and tamper-proof polling systems using{" "}
      <span className="font-semibold text-indigo-600">blockchain technology</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in creating high-performance polling solutions that leverage
      blockchain’s immutability, decentralized architecture, and cryptographic security
      for trustworthy voting and survey applications.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From enterprise surveys and customer feedback polls to online elections and
      decentralized voting platforms, our developers craft blockchain polling systems
      optimized for transparency, scalability, and reliability.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need secure customer polls, election platforms, or real-time voting
      analytics, our team ensures tamper-proof, auditable systems, optimized
      performance, and seamless integration to empower your business with transparent
      and reliable decentralized polling solutions.
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
    Future IT Touch’s High-Performance Customer Polls Blockchain Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empowering organizations with secure, transparent, and scalable blockchain-based polling solutions — delivering tamper-proof, reliable, and efficient systems for customer feedback, surveys, voting platforms, and real-time analytics with full auditability and decentralized integrity.
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
    <FaPoll />
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    Customer <br />
    Blockchain Polls <br />
    <span className="">
      Secure, Transparent & Tamper-Proof Voting Solutions
    </span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    Collect reliable customer feedback with{" "}
    <span className="text-[#00ffe4]">
      blockchain-powered polls 🔒 – verifiable, secure, and fully transparent
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
    Empower Your Business With Secure Customer Polls on Blockchain
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

<CommonFaqs faqData={faqData} title="On Customer Polls Blockchain Solutions" />




            <BusinessIdea />
      

     
    </>
  );
};

export default Customer;
