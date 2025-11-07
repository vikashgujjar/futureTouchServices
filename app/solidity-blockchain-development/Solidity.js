import React from "react";


import gm from "../Assets/solidity.webp";


import { FaEthereum } from "react-icons/fa";

import { FaCheck } from "react-icons/fa6";


import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import { FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools } from "react-icons/fa";


const Solidity = () => {
const technolgyData = [
  {
    title: "Custom Solidity Blockchain Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building secure, efficient, and high-performance smart contracts using Solidity.",
      "Developing modular, scalable, and transparent blockchain applications.",
      "Creating enterprise-grade solutions for token management, DeFi platforms, and NFT marketplaces.",
      "Ensuring clean, reusable, and maintainable code following Solidity best practices.",
    ],
  },
  {
    title: "Decentralized Applications (DApps) Solutions",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing DApps with transparency, immutability, and verifiable transactions.",
      "Optimizing performance for high-concurrency decentralized networks.",
      "Building Solidity-powered solutions for finance, gaming, and enterprise applications.",
      "Integrating with Ethereum and other EVM-compatible chains for real-time interactions.",
    ],
  },
  {
    title: "Smart Contract & DApp Integration",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Connecting blockchain applications with smart contracts and DApps.",
      "Developing APIs for token transfers, user authentication, and contract interactions.",
      "Creating efficient pipelines for automated transactions and contract verification.",
      "Enhancing performance using optimized algorithms for secure and transparent execution.",
    ],
  },
  {
    title: "API & Node Development",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating RESTful APIs for interacting with smart contracts and blockchain nodes.",
      "Integrating Ethereum/Polygon nodes into DApps for decentralized data management.",
      "Developing dashboards for blockchain analytics, reporting, and real-time monitoring.",
      "Delivering scalable APIs and node services for high-performance Solidity applications.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing secure coding, auditing, and tamper-proof smart contracts.",
      "Protecting private keys, wallets, and sensitive blockchain data.",
      "Ensuring reliability and efficiency in high-volume decentralized applications.",
      "Providing regular updates, audits, and maintenance for Solidity-based solutions.",
    ],
  },
  {
    title: "Continuous Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Offering long-term support for Solidity smart contracts and DApps.",
      "Optimizing contract performance, gas efficiency, and blockchain interactions.",
      "Monitoring systems for uptime, security, and transaction verification.",
      "Providing expert consultation for scalability, DApp improvements, and blockchain upgrades.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We analyze your business needs, smart contract requirements, and blockchain goals to design an optimal Solidity solution roadmap.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "System Architecture Planning",
    description:
      "We design scalable and secure blockchain architectures for Solidity smart contracts, DApps, and distributed ledger systems.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Smart Contract & Algorithm Design",
    description:
      "We develop Solidity contracts, transaction algorithms, and cryptographic operations for secure and transparent execution.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend & Node Development",
    description:
      "We implement blockchain nodes, APIs, and smart contract interfaces for decentralized applications.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Data Management & Security",
    description:
      "We securely manage wallet addresses, transactions, and contract states to ensure integrity, privacy, and transparency.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Integration & Deployment",
    description:
      "We integrate Solidity smart contracts with DApps, websites, and mobile apps for seamless operations and real-time transaction tracking.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Performance & Security Optimization",
    description:
      "We optimize smart contracts, gas usage, and blockchain interactions for high-performance, low-latency, and secure applications.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "All Solidity contracts undergo rigorous testing to ensure accuracy, security, and reliability before deployment.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Monitoring",
    description:
      "We handle contract deployment, node setup, and monitoring to ensure smooth blockchain operations and secure transactions.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Long-Term Support",
    description:
      "Post-deployment, we provide updates, audits, and feature enhancements to maintain secure, transparent, and efficient Solidity solutions.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaCode />,
    title: "Custom Solidity Smart Contracts",
    desc: "We develop secure, efficient, and transparent smart contracts for DApps, DeFi platforms, and token systems.",
  },
  {
    icon: <FaCogs />,
    title: "High-Performance Blockchain Nodes",
    desc: "Harness Ethereum or EVM-compatible nodes for transaction validation, ledger management, and DApp operations.",
  },
  {
    icon: <FaServer />,
    title: "Integration with DApps & Platforms",
    desc: "Integrate Solidity contracts with web and mobile applications for real-time transactions and analytics.",
  },
  {
    icon: <FaLock />,
    title: "Data Security & Privacy",
    desc: "Secure wallets, transactions, and contract data with encryption and best practices.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "Optimize smart contracts, gas consumption, and blockchain interactions for fast and efficient operations.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Support & Optimization",
    desc: "Continuous monitoring, updates, and improvements to ensure reliable and secure Solidity applications.",
  },
];

const cards = [
  {
    count: "100+",
    title: "Solidity Contracts Delivered",
    desc: "We’ve successfully developed and deployed 100+ smart contracts and blockchain applications across DeFi, NFT marketplaces, and enterprise-grade DApps, ensuring high security, optimized gas efficiency, and seamless integration with existing platforms.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "7+",
    title: "Years of Blockchain Expertise",
    desc: "Our team brings over 7 years of in-depth Solidity and blockchain development experience, delivering solutions that combine cutting-edge decentralized technologies, robust smart contract logic, and best practices for secure, scalable, and maintainable systems.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "150+",
    title: "Clients Served Globally",
    desc: "We’ve partnered with more than 150 organizations worldwide, helping startups, enterprises, and innovative projects implement secure, transparent, and scalable blockchain solutions. Our focus is on building trustless systems that enhance operational efficiency and user confidence.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Contract Reliability Success Rate",
    desc: "Our Solidity smart contracts achieve up to 99% reliability by implementing rigorous testing, audits, and verification processes. This ensures secure transactions, minimal vulnerabilities, and high-performance execution for DApps, DeFi platforms, and NFT ecosystems.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Support & Monitoring",
    desc: "We provide round-the-clock monitoring, maintenance, and optimization for your Solidity smart contracts and blockchain platforms. Our team ensures smooth operation, timely updates, and immediate issue resolution to maintain security, performance, and uninterrupted service for your users.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


const faqData = [
  {
    title: "What is Solidity Blockchain Development?",
    description:
      "Solidity Blockchain Development involves creating smart contracts and DApps on Ethereum or EVM-compatible blockchains.",
  },
  {
    title: "Why use Solidity for smart contracts?",
    description:
      "Solidity allows secure, transparent, and verifiable contract execution on blockchain platforms.",
  },
  {
    title: "Can Solidity handle large-scale applications?",
    description:
      "Yes, Solidity is highly scalable and suitable for DeFi platforms, NFTs, enterprise DApps, and token systems.",
  },
  {
    title: "Is Solidity suitable for enterprise blockchain solutions?",
    description:
      "Absolutely. Solidity provides reliable, tamper-proof smart contracts for business and enterprise blockchain applications.",
  },
  {
    title: "Do you integrate Solidity contracts with DApps?",
    description:
      "Yes, we connect Solidity smart contracts with web and mobile applications for seamless blockchain operations.",
  },
  {
    title: "How secure are Solidity smart contracts?",
    description:
      "We follow secure coding practices, audits, and encryption to ensure smart contracts are tamper-proof and safe.",
  },
  {
    title: "Can you optimize existing Solidity contracts?",
    description:
      "Yes, we enhance performance, gas efficiency, and security of existing smart contracts and DApps.",
  },
  {
    title: "Do you provide long-term support for Solidity projects?",
    description:
      "Yes, we offer continuous monitoring, updates, and optimization for all Solidity-based solutions.",
  },
  {
    title: "Which industries benefit from Solidity development?",
    description:
      "DeFi, NFTs, enterprise DApps, gaming, and fintech sectors leverage Solidity for smart contract solutions.",
  },
  {
    title: "Can Solidity projects integrate with analytics tools?",
    description:
      "Yes, we connect Solidity smart contracts and DApps to reporting and analytics platforms for real-time insights.",
  },
];




  return (
    <>
      <CommonBanner
        img={gm}
        title="Solidity Blockchain Development"
        desc="Future IT Touch Pvt. Ltd. is a leading Blockchain App Development company backed up by industry qualified Blockchain developers who are proficient in building scalable Solidity empowered Blockchain apps that have the capacity to gear up your business base across any industry. We have past experience in delivering Blockchain-based decentralized Apps using –Ethereum and thus helped several Businesses, Entrepreneurs and Start-ups to Leverage our expertise in delivering tailor-made smart contracts built on Solidity Programming Language. To Develop a Solidity application, one needs to have both expertise and proficiency in the field of javascript technology and our core developers are specifically qualified in this technology. The solidity programming language used to implement smart contacts."
      />
<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Secure, Efficient & Transparent DApps with{" "}
      <span className="text-indigo-600">
        Solidity Blockchain Development
      </span>{" "}
      ⚡
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking to develop secure, scalable, and tamper-proof decentralized applications using{" "}
      <span className="font-semibold text-indigo-600">Solidity</span> on{" "}
      <span className="font-semibold text-indigo-600">Ethereum or EVM-compatible blockchains</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we specialize in crafting high-performance smart contracts and DApps that leverage blockchain’s transparency, immutability, and cryptographic security for reliable decentralized solutions.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From DeFi platforms and NFT marketplaces to enterprise blockchain solutions and token systems, our developers create Solidity-based applications optimized for security, efficiency, and scalability.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need smart contracts, decentralized platforms, or real-time blockchain analytics, our team ensures secure, auditable, and gas-efficient solutions, delivering seamless integration and empowering your business with reliable decentralized applications.
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
    Future IT Touch’s High-Performance Solidity Blockchain Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empowering organizations with secure, transparent, and scalable Solidity-based blockchain solutions — delivering tamper-proof, reliable, and efficient smart contracts, DApps, DeFi platforms, NFT marketplaces, and enterprise blockchain systems with full auditability and decentralized integrity.
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
    <FaEthereum /> {/* Recommended Icon for Solidity/Blockchain */}
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    Solidity & <br />
    Smart Contract <br />
    <span className="">Blockchain Development</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    To build secure{" "}
    <span className="text-[#00ffe4]">
      - decentralized applications for trustless systems ⚡
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
    Empower Your Business With Secure, Transparent Customer Polls on Blockchain
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

<CommonFaqs faqData={faqData} title="Solidity Blockchain Customer Polls Solutions" />





            <BusinessIdea />
      

     
    </>
  );
};

export default Solidity;
