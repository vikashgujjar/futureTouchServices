import React from "react";


import { FaGem } from "react-icons/fa";
import gm from "../Assets/Julia.webp";


import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import { FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools } from "react-icons/fa";


const Julia = () => {
const technolgyData = [
  {
    title: "Custom Julia Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building efficient and high-performance applications using Julia.",
      "Developing modular, scalable, and robust backend architectures.",
      "Creating enterprise-grade Julia solutions for scientific and data-intensive applications.",
      "Ensuring clean, reusable, and maintainable Julia code with best practices.",
    ],
  },
  {
    title: "Julia-Powered Scientific & AI Solutions",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing advanced numerical and AI computation systems using Julia.",
      "Building predictive models and optimized scientific workflows.",
      "Enhancing performance in large-scale data and simulation projects.",
      "Integrating Julia with AI and ML frameworks for intelligent solutions.",
    ],
  },
  {
    title: "Machine Learning & AI Integration",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Leveraging Julia for fast numerical computations in AI workflows.",
      "Integrating Julia applications with machine learning frameworks.",
      "Developing efficient preprocessing pipelines for data-intensive projects.",
      "Improving model performance through optimized Julia algorithms.",
    ],
  },
  {
    title: "API & Scientific Computing Development",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating Julia-based RESTful APIs for numerical computations and AI services.",
      "Integrating Julia data pipelines into backend and frontend systems.",
      "Building dashboards and visualization tools for scientific insights.",
      "Delivering scalable APIs with Julia frameworks like Genie.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing robust security and data validation standards.",
      "Protecting Julia applications against vulnerabilities.",
      "Ensuring efficient memory and resource management in computation-heavy projects.",
      "Providing regular performance tuning and library updates.",
    ],
  },
  {
    title: "Continuous Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Offering long-term maintenance for Julia projects.",
      "Upgrading dependencies and optimizing computational algorithms.",
      "Monitoring system performance and resource utilization.",
      "Providing consultation for scalability and efficiency improvements.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We begin by understanding your business and technical needs. Our team identifies data and computation challenges and designs a roadmap to implement Julia solutions tailored for high performance.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "System Architecture Planning",
    description:
      "We design optimized architectures for numerical computations and AI workflows, ensuring scalability and seamless integration with Julia applications.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Algorithm Design & Optimization",
    description:
      "Our engineers craft efficient numerical and AI algorithms in Julia, minimizing computation time while maximizing predictive accuracy and performance.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend & API Development",
    description:
      "We build robust Julia backends and APIs for high-speed data processing, scientific computations, and AI integration.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Data Modeling & Analysis",
    description:
      "Leveraging Julia’s numerical libraries, we model, analyze, and visualize large datasets for actionable insights and scientific accuracy.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Integration & Deployment",
    description:
      "We integrate Julia-powered modules into your existing applications or cloud environments, ensuring seamless workflow and reliable deployment pipelines.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Performance & Security Optimization",
    description:
      "We enhance code efficiency, reduce computational overhead, and implement security measures for robust, high-performance systems.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Every component undergoes unit and integration testing to ensure correctness, speed, and reliability — delivering clean, bug-free Julia applications.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Monitoring",
    description:
      "We handle production deployment, server configuration, and real-time monitoring — ensuring your Julia-based solutions perform flawlessly at scale.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Long-Term Support",
    description:
      "Post-deployment, we provide continuous maintenance, library upgrades, and performance audits — ensuring your Julia systems stay future-ready.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaCode />,
    title: "Custom Julia Development",
    desc: "We design and develop Julia-based software that efficiently handles AI, scientific computation, and data-intensive workflows — ensuring flexibility, reliability, and performance.",
  },
  {
    icon: <FaCogs />,
    title: "Julia-Powered Scientific Computing",
    desc: "Harness the power of Julia for high-performance numerical computing, AI modeling, and data-driven analytics.",
  },
  {
    icon: <FaServer />,
    title: "AI & Machine Learning Integration",
    desc: "We integrate Julia with AI/ML frameworks to create optimized learning pipelines and predictive models.",
  },
  {
    icon: <FaLock />,
    title: "Data Security & Reliability",
    desc: "We ensure computational pipelines are secure, encrypted, and compliant with modern standards.",
  },
  {
    icon: <FaRocket />,
    title: "High-Performance Optimization",
    desc: "Our engineers fine-tune Julia operations for maximum efficiency and low-latency computations.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Support & Optimization",
    desc: "We provide long-term maintenance, optimization, and consulting for continuous improvement of Julia-based systems.",
  },
];

const cards = [
  {
    count: "150+",
    title: "Julia Solutions Delivered",
    desc: "We’ve successfully built over 150 Julia-powered applications — delivering high-performance, scalable, and intelligent systems worldwide. Our solutions span scientific computing, AI-driven analytics, and real-time data processing, ensuring each project meets precise performance and reliability standards.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "8+",
    title: "Years of Julia Expertise",
    desc: "With over 8 years of experience, our developers master Julia for scientific computing, AI workflows, and large-scale data processing. We leverage Julia’s speed and flexibility to create robust algorithms, optimize performance, and ensure seamless integration with other tools and frameworks.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "200+",
    title: "Clients Empowered Globally",
    desc: "We’ve partnered with 200+ organizations, delivering Julia-based solutions for scientific computation, AI, and predictive analytics. Our collaborations span diverse industries, providing businesses with actionable insights, improved automation, and optimized computational processes for smarter decision-making.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Computation Optimization Success Rate",
    desc: "Our optimization strategies achieve up to 99% improvement in computational efficiency — reducing processing time while enhancing accuracy. Through fine-tuned algorithms, parallel processing, and careful resource management, we ensure your Julia applications perform at peak efficiency even under heavy workloads.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support & Monitoring",
    desc: "We offer continuous monitoring, updates, and optimization to keep your Julia systems stable, secure, and performing at peak 24/7. Our proactive support ensures minimal downtime, rapid issue resolution, and long-term system reliability for all your critical applications.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


const faqData = [
  {
    title: "What is Julia?",
    description:
      "Julia is a high-performance programming language designed for numerical computing, scientific applications, and data-intensive tasks.",
  },
  {
    title: "Why use Julia for AI and scientific solutions?",
    description:
      "Julia combines speed and simplicity, allowing rapid development of high-performance AI, machine learning, and scientific computing applications.",
  },
  {
    title: "Can Julia handle large datasets?",
    description:
      "Yes, Julia is optimized for handling large-scale data and scientific computations efficiently.",
  },
  {
    title: "Is Julia suitable for machine learning and AI?",
    description:
      "Absolutely. Julia integrates with AI/ML frameworks, enabling high-performance numerical computations for predictive models.",
  },
  {
    title: "Do you integrate Julia into existing systems?",
    description:
      "Yes, we integrate Julia-based computation modules into existing applications or cloud environments for performance and scalability.",
  },
  {
    title: "How secure are Julia applications?",
    description:
      "We implement encryption, secure APIs, and environment isolation to ensure your Julia systems are safe and reliable.",
  },
  {
    title: "Can you optimize existing Julia code?",
    description:
      "Definitely. We refactor and optimize your Julia code for faster computations and improved performance.",
  },
  {
    title: "Do you offer ongoing maintenance for Julia projects?",
    description:
      "Yes, we provide long-term support including performance tuning, library updates, and system optimization.",
  },
  {
    title: "Which industries benefit from Julia solutions?",
    description:
      "Industries like finance, healthcare, research, and engineering leverage Julia for high-performance computing and AI solutions.",
  },
  {
    title: "Can Julia be integrated with visualization tools?",
    description:
      "Yes, Julia can work with visualization libraries to display computations, analytics, and AI predictions.",
  },
];



  return (
    <>
      <CommonBanner
        img={gm}
        title="JULIA DEVELOPMENT SERVICES"
        desc="Julia is a relatively new programming language that has been gaining traction in the Machine Learning world. As it is getting more and more popular, I wanted to do this article to give you an in-depth overview of why and how to get started with Machine Learning in Julia. The main advantage of Julia over other Machine Learning languages is speed. Two main reasons for Julia’s speed advantage are, firstly, that it is a compiled language. Secondly, it has been designed for parallelism."
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
    Future IT Touch’s High-Performance Julia Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empowering businesses with high-performance, numerical, and data-driven solutions using Julia — delivering optimized, scalable, and intelligent applications for scientific computing, AI workflows, and large-scale data processing.
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
    <FaGem /> {/* Recommended Icon for Julia Development */}
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    Julia <br />
    Development <br />
    <span className="">Solutions That Empower Data & AI</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    Build intelligent{" "}
    <span className="text-[#00ffe4]">
      - high-performance, data-driven apps ⚡
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
    Accelerate Your Business With Custom Julia Development Services
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

{/* FAQ Section */}
<CommonFaqs faqData={faqData} title="On Julia Development" />


            <BusinessIdea />
      

     
    </>
  );
};

export default Julia;
