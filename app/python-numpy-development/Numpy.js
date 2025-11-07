import React from "react";


import app from "../Assets/pd.webp";


import { FaCheck } from "react-icons/fa6";

import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";


import { FaCode, FaServer, FaDatabase, FaCogs, FaShieldAlt, FaTools } from "react-icons/fa";


const Numpy = () => {
const technolgyData = [
  {
    title: "Custom Python Development",
    icon: <FaCode className="text-[#00B2FF] text-4xl" />,
    list: [
      "Building efficient and scalable web and data-driven applications using Python.",
      "Developing secure and modular backend architectures.",
      "Creating enterprise-grade Python solutions for automation and analytics.",
      "Ensuring clean, reusable, and maintainable Python code with best practices.",
    ],
  },
  {
    title: "NumPy-Powered Data Solutions",
    icon: <FaServer className="text-[#00B2FF] text-4xl" />,
    list: [
      "Developing advanced data computation and analysis systems using NumPy.",
      "Building high-performance mathematical and statistical models.",
      "Optimizing algorithms for scientific and numeric computations.",
      "Integrating NumPy with Python frameworks like Pandas, SciPy, and TensorFlow.",
    ],
  },
  {
    title: "Machine Learning Integration",
    icon: <FaCogs className="text-[#00B2FF] text-4xl" />,
    list: [
      "Utilizing NumPy for fast numerical computations in AI workflows.",
      "Integrating NumPy arrays with machine learning models.",
      "Developing efficient preprocessing pipelines for data-driven projects.",
      "Improving training efficiency through optimized NumPy vectorization.",
    ],
  },
  {
    title: "API & Data Visualization Development",
    icon: <FaDatabase className="text-[#00B2FF] text-4xl" />,
    list: [
      "Creating Python-based RESTful APIs for data processing and visualization.",
      "Integrating NumPy data structures into backend and frontend layers.",
      "Building analytics dashboards with Matplotlib and Plotly.",
      "Delivering scalable APIs with FastAPI and Flask.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaShieldAlt className="text-[#00B2FF] text-4xl" />,
    list: [
      "Implementing robust security standards and data validation.",
      "Protecting applications against injection and authentication flaws.",
      "Ensuring efficient memory management in data-heavy computations.",
      "Providing regular performance tuning and library updates.",
    ],
  },
  {
    title: "Continuous Support & Optimization",
    icon: <FaTools className="text-[#00B2FF] text-4xl" />,
    list: [
      "Offering long-term maintenance for Python and NumPy projects.",
      "Upgrading dependencies and optimizing algorithms.",
      "Monitoring performance and resource utilization.",
      "Providing consultation for scalability and performance improvements.",
    ],
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "We begin by understanding your business and technical needs. Our team identifies data challenges and designs a roadmap to implement Python–NumPy solutions tailored for performance and efficiency.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "System Architecture Planning",
    description:
      "We design an optimized architecture for handling large-scale data processing and computations using NumPy arrays, ensuring scalability and seamless integration with Python frameworks.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Algorithm Design & Optimization",
    description:
      "Our engineers craft efficient data-processing algorithms using NumPy’s vectorized operations, minimizing computation time and maximizing performance in complex workflows.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend & API Development",
    description:
      "We build robust Python backends and APIs using Flask or FastAPI, integrated with NumPy for high-speed data manipulation, transformation, and delivery to front-end systems.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Data Modeling & Analysis",
    description:
      "Leveraging NumPy with Pandas and Matplotlib, we model, analyze, and visualize large datasets, ensuring meaningful insights and accurate statistical results.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "Integration & Deployment",
    description:
      "We integrate NumPy-powered modules into your existing systems or cloud environments, ensuring seamless data flow, API communication, and reliable deployment pipelines.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Performance & Security Optimization",
    description:
      "We enhance code efficiency, reduce computation overhead, and implement data protection measures, ensuring the highest level of security and speed in data operations.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Every component undergoes unit and integration testing to ensure correctness, speed, and reliability — delivering clean, bug-free Python and NumPy applications.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Monitoring",
    description:
      "We handle production deployment, server configuration, and real-time monitoring — ensuring your NumPy-based solutions perform flawlessly at scale.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Long-Term Support",
    description:
      "Post-deployment, we provide continuous maintenance, version upgrades, and performance audits — ensuring your Python–NumPy systems stay future-ready.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

const upScale = [
  {
    icon: <FaCode />,
    title: "Custom Python Development",
    desc: "We design and develop Python-based software that efficiently handles automation, data analysis, and backend logic — ensuring flexibility, reliability, and performance.",
  },
  {
    icon: <FaCogs />,
    title: "NumPy-Powered Data Computing",
    desc: "Harness the power of NumPy for fast, multidimensional array processing and numerical computations that enable advanced data modeling and analytics.",
  },
  {
    icon: <FaServer />,
    title: "Scientific & AI Integration",
    desc: "We integrate NumPy with AI and ML frameworks like TensorFlow, PyTorch, and SciPy to create optimized data pipelines and analytical models.",
  },
  {
    icon: <FaLock />,
    title: "Data Security & Reliability",
    desc: "We ensure that your data processing pipelines are safe, encrypted, and compliant with modern data security standards for optimal trust and reliability.",
  },
  {
    icon: <FaRocket />,
    title: "High-Performance Optimization",
    desc: "Our engineers fine-tune Python and NumPy operations for maximum speed and efficiency, ensuring low latency and high throughput in computation-heavy environments.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Support & Optimization",
    desc: "We provide long-term maintenance, optimization, and consulting support for continuous improvement of Python–NumPy-based systems.",
  },
];

const cards = [
  {
    count: "200+",
    title: "Data-Driven Solutions Delivered",
    desc: "We’ve successfully built over 200 Python and NumPy-powered analytical systems — delivering performance, scalability, and precision for global businesses.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "8+",
    title: "Years of Python Expertise",
    desc: "With over 8 years of experience, our developers master Python’s ecosystem — from NumPy to Pandas and AI — ensuring superior code quality and reliability.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "300+",
    title: "Clients Empowered Worldwide",
    desc: "We’ve partnered with 300+ organizations, building Python–NumPy systems that deliver real-time analytics, automation, and high computational performance.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "99%",
    title: "Performance Optimization Success Rate",
    desc: "Our optimization strategies achieve up to 99% improvement in processing efficiency — reducing compute times while enhancing accuracy and scalability.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Technical Support & Monitoring",
    desc: "We offer continuous monitoring, updates, and optimization to keep your Python–NumPy systems stable, secure, and performing at their peak 24/7.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

const faqData = [
  {
    title: "What is NumPy in Python?",
    description:
      "NumPy is a core Python library used for numerical and scientific computing. It provides support for large multidimensional arrays and high-level mathematical functions for data analysis and machine learning.",
  },
  {
    title: "Why use Python with NumPy for data processing?",
    description:
      "Python combined with NumPy enables high-speed numerical computation, array manipulation, and data transformation — making it ideal for scientific, AI, and statistical projects.",
  },
  {
    title: "Can NumPy handle big data applications?",
    description:
      "Yes, NumPy is highly optimized for handling large datasets. It integrates seamlessly with Pandas, Dask, and cloud-based data systems for scalable computation.",
  },
  {
    title: "Is NumPy suitable for machine learning and AI?",
    description:
      "Absolutely. NumPy serves as the foundation for major machine learning frameworks like TensorFlow and PyTorch, making it essential for data science and AI model development.",
  },
  {
    title: "Do you provide NumPy integration for existing systems?",
    description:
      "Yes. We integrate NumPy-based computation into existing Python or enterprise systems to enhance performance, accuracy, and analytics capabilities.",
  },
  {
    title: "How secure are Python–NumPy applications?",
    description:
      "We ensure complete security by implementing encrypted data handling, safe APIs, and environment isolation to protect sensitive computations and analytics.",
  },
  {
    title: "Can you optimize existing Python code with NumPy?",
    description:
      "Definitely. We refactor and optimize your Python codebase by replacing loops and inefficient operations with NumPy vectorization for faster execution.",
  },
  {
    title: "Do you offer ongoing maintenance for Python–NumPy projects?",
    description:
      "Yes, we provide long-term support, including performance tuning, library updates, dependency management, and compatibility improvements.",
  },
  {
    title: "Which industries benefit from NumPy solutions?",
    description:
      "Industries like finance, healthcare, manufacturing, and research rely on NumPy for analytics, forecasting, and simulation due to its speed and accuracy.",
  },
  {
    title: "Can NumPy be integrated with visualization tools?",
    description:
      "Yes, NumPy integrates with libraries like Matplotlib, Plotly, and Seaborn to create detailed and interactive data visualizations for business insights.",
  },
];


  return (
    <>
      <CommonBanner
        img={app}
        title="Python Django Flask Development"
        desc=" As a developer, choosing the right framework for web development is crucial for a top notch website. Using the powerful, simple, and flexible Python-based Django framework, one can develop robust web solutions with just a few lines of code. Django has emerged as a prominent framework that is loaded with features. It is a server-side web framework that is written in Python and helps the developers in creating web apps quickly and efficiently. Out of all the modern day programming languages, Python and Django are preferred the most by the developers due to their robust programming structure."
      />

<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Powerful, Secure & Scalable Solutions with{" "}
      <span className="text-indigo-600">
        Python & NumPy Development
      </span>{" "}
      ⚡
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking to develop high-performance, data-driven, and scalable applications using{" "}
      <span className="font-semibold text-indigo-600">Python</span> and{" "}
      <span className="font-semibold text-indigo-600">NumPy</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in crafting intelligent, efficient, and reliable software solutions
      that harness the full power of Python’s ecosystem and NumPy’s computational speed.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      From data analytics platforms and automation tools to AI-powered systems and
      scientific applications, our developers deliver optimized Python–NumPy solutions
      tailored for performance, precision, and scalability.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether you need real-time data processing, machine learning integration, or
      custom backend development, our team ensures clean code, efficient algorithms,
      and seamless system integration that empower your business with actionable insights.
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
    Future IT Touch’s High-Performance Python & NumPy Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empowering businesses with powerful data-driven solutions using Python and NumPy — delivering optimized, scalable, and high-performance applications for analytics, automation, and AI-driven innovation.
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
      <FaPython /> {/* Recommended Icon for Python & NumPy */}
    </h6>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
      Python & NumPy <br />
      Development <br />
      <span className="">Solutions That Empower Data</span>
    </h2>
    <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
      Build intelligent{" "}
      <span className="text-[#00ffe4]">
        - data-driven apps for smarter performance ⚡
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
    Accelerate Your Business With Custom Python & NumPy Development Services
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
<CommonFaqs faqData={faqData} title="On Python & NumPy Development" />

            <BusinessIdea />
      

     
    </>
  );
};

export default Numpy;
