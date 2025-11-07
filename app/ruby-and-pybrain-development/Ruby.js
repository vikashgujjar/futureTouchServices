import React from "react";


import { FaGem } from "react-icons/fa";
import gm from "../Assets/ruby.webp";


import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import { FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools } from "react-icons/fa";


const Numpy = () => {
const technolgyData = [
  {
    title: "Custom Ruby Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building efficient and scalable web and AI-driven applications using Ruby.",
      "Developing secure and modular backend architectures.",
      "Creating enterprise-grade Ruby solutions for automation and intelligent systems.",
      "Ensuring clean, reusable, and maintainable Ruby code with best practices.",
    ],
  },
  {
    title: "PyBrain-Powered AI Solutions",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing advanced AI and neural network systems using PyBrain.",
      "Building predictive models and learning algorithms.",
      "Optimizing neural networks for performance and accuracy.",
      "Integrating PyBrain with Ruby frameworks for intelligent solutions.",
    ],
  },
  {
    title: "Machine Learning Integration",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Utilizing PyBrain for fast neural network computations and AI workflows.",
      "Integrating Ruby applications with machine learning models.",
      "Developing efficient data preprocessing pipelines for intelligent systems.",
      "Improving model performance through optimized PyBrain algorithms.",
    ],
  },
  {
    title: "API & Intelligent System Development",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating Ruby-based RESTful APIs for AI data processing and prediction services.",
      "Integrating PyBrain neural networks into backend and frontend systems.",
      "Building analytics dashboards and AI-driven insights.",
      "Delivering scalable APIs with Rails and Sinatra.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing robust security and data validation standards.",
      "Protecting AI systems against vulnerabilities and unauthorized access.",
      "Ensuring efficient memory and resource management in AI computations.",
      "Providing regular performance tuning and dependency updates.",
    ],
  },
  {
    title: "Continuous Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Offering long-term maintenance for Ruby & PyBrain projects.",
      "Upgrading dependencies and optimizing AI algorithms.",
      "Monitoring system performance and resource utilization.",
      "Providing consultation for scalability and efficiency improvements.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We begin by understanding your business and technical needs. Our team identifies AI and data challenges and designs a roadmap to implement Ruby–PyBrain solutions tailored for performance and intelligence.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "System Architecture Planning",
    description:
      "We design optimized architectures for handling AI computations and neural network workflows, ensuring scalability and seamless integration with Ruby applications.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Algorithm Design & Optimization",
    description:
      "Our engineers craft efficient AI algorithms using PyBrain, minimizing computation time while maximizing learning performance and predictive accuracy.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend & API Development",
    description:
      "We build robust Ruby backends and APIs integrated with PyBrain neural networks for fast AI data processing, transformation, and delivery.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Data Modeling & Analysis",
    description:
      "Leveraging PyBrain, we model, train, and analyze datasets to develop intelligent predictions and actionable AI insights.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Integration & Deployment",
    description:
      "We integrate PyBrain-powered modules into existing Ruby applications or cloud environments, ensuring seamless workflow and reliable deployment pipelines.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Performance & Security Optimization",
    description:
      "We enhance code efficiency, reduce AI computation overhead, and implement security measures for robust and reliable intelligent systems.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Every AI component undergoes unit and integration testing to ensure correctness, speed, and reliability — delivering clean, bug-free Ruby & PyBrain applications.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Monitoring",
    description:
      "We handle production deployment, server configuration, and real-time monitoring — ensuring your PyBrain-based AI solutions perform flawlessly at scale.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Long-Term Support",
    description:
      "Post-deployment, we provide continuous maintenance, algorithm upgrades, and performance audits — ensuring your Ruby–PyBrain systems stay future-ready.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaCode />,
    title: "Custom Ruby Development",
    desc: "We design and develop Ruby-based software that efficiently handles AI workflows, automation, and intelligent system logic — ensuring flexibility, reliability, and performance.",
  },
  {
    icon: <FaCogs />,
    title: "PyBrain-Powered AI Computing",
    desc: "Harness the power of PyBrain for neural network modeling, learning algorithms, and intelligent data computation.",
  },
  {
    icon: <FaServer />,
    title: "AI & Machine Learning Integration",
    desc: "We integrate PyBrain with AI and ML frameworks to create optimized learning pipelines and predictive models.",
  },
  {
    icon: <FaLock />,
    title: "Data Security & Reliability",
    desc: "We ensure that AI processing pipelines are safe, encrypted, and compliant with modern security standards.",
  },
  {
    icon: <FaRocket />,
    title: "High-Performance Optimization",
    desc: "Our engineers fine-tune Ruby and PyBrain operations for maximum efficiency and low-latency AI computation.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Support & Optimization",
    desc: "We provide long-term maintenance, optimization, and consulting for continuous improvement of Ruby–PyBrain-based systems.",
  },
];

const cards = [
  {
    count: "150+",
    title: "AI-Driven Solutions Delivered",
    desc: "We’ve successfully built over 150 Ruby & PyBrain-powered intelligent systems — delivering performance, scalability, and predictive accuracy worldwide.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "8+",
    title: "Years of Ruby & AI Expertise",
    desc: "With over 8 years of experience, our developers master Ruby and PyBrain frameworks — ensuring superior code quality and intelligent solutions.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "200+",
    title: "Clients Empowered Globally",
    desc: "We’ve partnered with 200+ organizations, building Ruby & PyBrain systems that deliver AI predictions, automation, and high computational performance.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "AI Performance Optimization Success Rate",
    desc: "Our optimization strategies achieve up to 99% improvement in AI computation efficiency — reducing processing time while enhancing predictive accuracy.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support & Monitoring",
    desc: "We offer continuous monitoring, updates, and optimization to keep your Ruby–PyBrain systems stable, secure, and performing at peak 24/7.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "What is PyBrain?",
    description:
      "PyBrain is a Python-based library for machine learning and neural networks. When used with Ruby integrations, it enables intelligent and predictive system development.",
  },
  {
    title: "Why use Ruby with PyBrain for AI solutions?",
    description:
      "Combining Ruby’s simplicity and PyBrain’s neural network capabilities allows rapid development of scalable, intelligent, and maintainable AI applications.",
  },
  {
    title: "Can PyBrain handle large datasets?",
    description:
      "Yes, PyBrain can be used with efficient Ruby data structures and optimized computations to handle large-scale AI datasets for predictive modeling.",
  },
  {
    title: "Is PyBrain suitable for machine learning and AI?",
    description:
      "Absolutely. PyBrain provides neural network and reinforcement learning capabilities essential for AI and ML model development.",
  },
  {
    title: "Do you integrate PyBrain into existing Ruby systems?",
    description:
      "Yes, we integrate PyBrain-based AI computation into existing Ruby applications to enhance automation, predictions, and intelligent workflows.",
  },
  {
    title: "How secure are Ruby–PyBrain applications?",
    description:
      "We implement encryption, safe API practices, and environment isolation to ensure your AI systems are secure and reliable.",
  },
  {
    title: "Can you optimize existing Ruby code with PyBrain?",
    description:
      "Definitely. We refactor and enhance Ruby code by integrating PyBrain neural networks for faster AI computations and efficient predictions.",
  },
  {
    title: "Do you offer ongoing maintenance for Ruby–PyBrain projects?",
    description:
      "Yes, we provide long-term support including performance tuning, dependency updates, and system optimization for AI solutions.",
  },
  {
    title: "Which industries benefit from PyBrain solutions?",
    description:
      "Industries like finance, healthcare, logistics, and research use PyBrain for AI predictions, automation, and machine learning solutions.",
  },
  {
    title: "Can PyBrain be integrated with visualization tools?",
    description:
      "Yes, PyBrain outputs can be integrated with visualization libraries to display predictions, neural network results, and analytics insights.",
  },
];


  return (
    <>
      <CommonBanner
        img={gm}
        title="RUBY & PYBRAIN DEVELOPMENT SERVICES"
        desc="Technology is becoming advanced, and with the latest development in technology, Machine Learning is on the rise. As we know, machine learning is nothing but a type of artificial intelligence that makes the computer self-sufficient to learn new things without being explicitly programmed. The rapidly growing market has resulted in successful web applications and services such as Netflix, Amazon, Facebook, Spotify, etc. So, the question is when you are looking for such kind of output and development to enhance your startup, is AI with Ruby on Rails or Machine Learning with Ruby on Rails a perfect choice?"
      />

<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Intelligent, Scalable & High-Performance Systems with{" "}
      <span className="text-indigo-600">
        Ruby & PyBrain Development
      </span>{" "}
      ⚡
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking to create intelligent, adaptable, and high-speed AI-powered applications using{" "}
      <span className="font-semibold text-indigo-600">Ruby</span> and{" "}
      <span className="font-semibold text-indigo-600">PyBrain</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in developing robust and scalable software solutions that merge Ruby’s
      elegant simplicity with PyBrain’s advanced neural network capabilities.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From AI-based automation tools and intelligent data models to predictive analytics
      and machine learning systems, our developers craft efficient Ruby–PyBrain solutions
      designed for adaptability, precision, and speed.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need deep learning integration, real-time decision systems, or custom
      backend architectures, our team ensures optimized algorithms, clean Ruby code,
      and seamless system performance that drive smarter business outcomes.
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
    Future IT Touch’s High-Performance Ruby & PyBrain Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empowering businesses with intelligent, AI-driven solutions using Ruby and PyBrain — delivering optimized, scalable, and high-performance applications for machine learning, predictive analytics, and automation.
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
    <FaGem /> {/* Recommended Icon for Ruby & PyBrain */}
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    Ruby & PyBrain <br />
    Development <br />
    <span className="">Solutions That Empower AI</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    Build intelligent{" "}
    <span className="text-[#00ffe4]">
      - AI-driven apps for smarter performance ⚡
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
    Accelerate Your Business With Custom Ruby & PyBrain Development Services
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

{/* faq */}
<CommonFaqs faqData={faqData} title="On Ruby & PyBrain Development" />

            <BusinessIdea />
      

     
    </>
  );
};

export default Numpy;
