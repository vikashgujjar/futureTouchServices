import React from "react";
import { FaMicrosoft } from "react-icons/fa";

import { FaPhp } from "react-icons/fa";
import app from "../Assets/pd.webp";


import { FaCheck } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";


import BusinessIdea from "../components/BuinessIdea";
import CommonBanner from "../components/techcommomcomponents/CommonBanner";
import CommonSlider from "../components/techcommomcomponents/CommonSlider";
import CommonFaqs from "../components/techcommomcomponents/CommonFaqs";
import {   FaLock, FaRocket } from "react-icons/fa";


import {  FaServer, FaDatabase,  FaTools } from "react-icons/fa";
import {FaPython} from "react-icons/fa";

import {
  FaCogs,
} from "react-icons/fa";

const Python = () => {




 const technolgyData = [
  {
    title: "Custom Python Web Development",
    icon: <FaPython className="text-[#306998] text-4xl" />,
    list: [
      "Building robust and scalable web applications using Python.",
      "Developing secure and high-performance backend systems.",
      "Creating custom enterprise solutions with clean architecture.",
      "Ensuring maintainable and reusable code with best practices.",
    ],
  },
  {
    title: "Django Framework Development",
    icon: <FaServer className="text-[#306998] text-4xl" />,
    list: [
      "Developing fast, secure, and scalable Django-based web apps.",
      "Implementing RESTful APIs using Django REST Framework.",
      "Integrating authentication, caching, and Celery for performance.",
      "Leveraging Django ORM for efficient database management.",
    ],
  },
  {
    title: "Flask Application Development",
    icon: <FaCogs className="text-[#306998] text-4xl" />,
    list: [
      "Building lightweight and flexible web applications using Flask.",
      "Designing REST APIs with modular and clean code structure.",
      "Integrating third-party services and libraries seamlessly.",
      "Optimizing app performance and deployment with WSGI servers.",
    ],
  },
  {
    title: "API Integration & Backend Services",
    icon: <FaDatabase className="text-[#306998] text-4xl" />,
    list: [
      "Developing secure RESTful APIs with Django and Flask.",
      "Connecting systems with external APIs and services.",
      "Efficiently handling data exchange between multiple platforms.",
      "Implementing OAuth2 and token-based authentication systems.",
    ],
  },
  {
    title: "Security & Maintenance",
    icon: <FaLock className="text-[#306998] text-4xl" />,
    list: [
      "Applying Django’s built-in security mechanisms and middleware.",
      "Preventing SQL injection, CSRF, and XSS vulnerabilities.",
      "Regular server maintenance and performance optimization.",
      "Continuous monitoring with real-time vulnerability scanning.",
    ],
  },
  {
    title: "Ongoing Support & Optimization",
    icon: <FaTools className="text-[#306998] text-4xl" />,
    list: [
      "Providing round-the-clock application maintenance.",
      "Upgrading Python and Django versions for stability and speed.",
      "Enhancing app performance through caching and load balancing.",
      "Delivering expert guidance and long-term support plans.",
    ],
  },
];

 const steps = [
  {
    title: "Understanding Your Requirements",
    description:
      "We begin by analyzing your business goals and technical needs to define a Python and Django solution that delivers performance, security, and scalability.",
    icon: "/images/HighPerformance/keyword-research.svg",
  },
  {
    title: "Planning and Architecture",
    description:
      "We design a modular architecture using Django’s MVC pattern. This ensures efficient data handling, better scalability, and maintainable code for future enhancements.",
    icon: "/images/HighPerformance/lead-focused.svg",
  },
  {
    title: "Design and Frontend Integration",
    description:
      "Our frontend and backend teams collaborate to create responsive, interactive, and high-performing UIs that integrate seamlessly with Django’s backend logic.",
    icon: "/images/HighPerformance/on-page.svg",
  },
  {
    title: "Backend Development",
    description:
      "Using Python and Django, we build secure and scalable backends with REST APIs, database models, and background task processing for a complete solution.",
    icon: "/images/HighPerformance/quality SEO.svg",
  },
  {
    title: "Database Design & Management",
    description:
      "We design optimized databases using PostgreSQL, MySQL, or MongoDB, leveraging Django ORM for efficient query handling and faster data transactions.",
    icon: "/images/HighPerformance/reporting.svg",
  },
  {
    title: "API Development & Integration",
    description:
      "We build RESTful APIs with Django REST Framework or Flask to integrate your app with mobile platforms and third-party services for seamless connectivity.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Security & Performance Optimization",
    description:
      "We use Django’s built-in security, input validation, and caching to protect against vulnerabilities and ensure optimal app speed under heavy traffic loads.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Our QA team performs thorough unit, integration, and performance testing using PyTest and Selenium to ensure flawless, high-quality deliverables.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Deployment & Server Setup",
    description:
      "We deploy Django apps using Docker, Nginx, and Gunicorn on cloud platforms like AWS or Azure, ensuring stable and scalable server environments.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
  {
    title: "Maintenance & Ongoing Support",
    description:
      "We continuously monitor, maintain, and upgrade your Django applications to keep them secure, optimized, and compatible with evolving technologies.",
    icon: "/images/HighPerformance/technical-SEO.svg",
  },
];

 const upScale = [
  {
    icon: <FaPython />,
    title: "Custom Python Development",
    desc: "We create efficient and scalable Python applications tailored to your business goals, leveraging modern frameworks and robust code practices.",
  },
  {
    icon: <FaCogs />,
    title: "Django Framework Solutions",
    desc: "We develop high-performance Django apps with clean architecture, ORM optimization, and seamless API integration for superior scalability.",
  },
  {
    icon: <FaServer />,
    title: "Flask App Development",
    desc: "Our Flask experts deliver flexible, lightweight web apps that support quick deployment, modular design, and enhanced performance.",
  },
  {
    icon: <FaLock />,
    title: "Advanced Security Integration",
    desc: "We utilize Django’s in-built security features with encryption, token validation, and secure user authentication for total data protection.",
  },
  {
    icon: <FaRocket />,
    title: "Application Performance Optimization",
    desc: "We fine-tune your app using caching, async programming, and database indexing to ensure lightning-fast performance across all devices.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Maintenance Support",
    desc: "We provide continuous monitoring, timely updates, and Django version upgrades to keep your application running securely and efficiently.",
  },
];

 const cards = [
  {
    count: "150+",
    title: "Django Apps Delivered",
    desc: "We’ve developed over 150 high-performance Django and Flask applications for clients worldwide, ensuring fast, secure, and scalable solutions.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "10+",
    title: "Years of Python Expertise",
    desc: "With a decade of Python development experience, we deliver innovative backend systems that empower businesses through automation and scalability.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "400+",
    title: "Global Clients Served",
    desc: "Our Python and Django solutions are trusted by 400+ clients globally, delivering reliable, secure, and efficient backend architectures for growth.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "We ensure client success through proactive maintenance, robust architecture, and smooth app performance that consistently exceeds expectations.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Dedicated Technical Support",
    desc: "Our Django experts provide around-the-clock support, performance monitoring, and issue resolution to ensure your applications stay at peak performance.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];

 const faqData = [
  {
    title: "What is Python web development?",
    description:
      "Python is a versatile programming language used for web, data, and AI applications. Its clean syntax and rich ecosystem make it ideal for building secure and scalable web applications.",
  },
  {
    title: "Why should I choose Django for web development?",
    description:
      "Django is a high-level Python framework known for its speed, security, and scalability. It includes powerful tools like ORM, admin panel, and built-in security for rapid, enterprise-grade development.",
  },
  {
    title: "What makes Flask a good choice for smaller projects?",
    description:
      "Flask is lightweight and flexible, ideal for small to mid-sized projects. It offers simplicity, modular design, and easy scalability, making it perfect for startups and prototypes.",
  },
  {
    title: "Can Django handle enterprise-level applications?",
    description:
      "Absolutely. Django’s modular structure, ORM, and robust security make it perfect for large-scale enterprise systems with complex data and user management requirements.",
  },
  {
    title: "How secure are Django applications?",
    description:
      "Django comes with built-in security features that protect against common threats like SQL injection, XSS, and CSRF. We enhance this further with encryption and secure deployment practices.",
  },
  {
    title: "Can Python integrate with AI and Machine Learning?",
    description:
      "Yes. Python’s ecosystem includes TensorFlow, Scikit-learn, and PyTorch, allowing easy integration of AI and ML models into web applications for smart automation and analytics.",
  },
  {
    title: "Do you offer API development with Django?",
    description:
      "Yes, we specialize in creating RESTful and GraphQL APIs using Django REST Framework. These APIs ensure seamless integration between your web, mobile, and external platforms.",
  },
  {
    title: "Do you provide maintenance for Django and Python apps?",
    description:
      "Yes, we offer full maintenance including upgrades, bug fixes, and performance tuning to keep your Python and Django applications reliable and secure.",
  },
  {
    title: "Can you migrate my existing system to Django?",
    description:
      "Definitely. We handle complete migration from legacy platforms to Django with minimal downtime, improved architecture, and enhanced performance.",
  },
  {
    title: "What industries use Python–Django solutions?",
    description:
      "Python–Django powers industries like healthcare, eCommerce, fintech, education, and AI-driven startups. Its flexibility and reliability make it ideal for any modern digital business.",
  },
];


  return (
    <>
      <CommonBanner
        img={app}
        title="Python Django Flask Development"
        desc="As a developer, choosing the right framework for web development is crucial for a top notch website. Using the powerful, simple, and flexible Python-based Django framework, one can develop robust web solutions with just a few lines of code. Django has emerged as a prominent framework that is loaded with features. It is a server-side web framework that is written in Python and helps the developers in creating web apps quickly and efficiently. Out of all the modern day programming languages, Python and Django are preferred the most by the developers due to their robust programming structure.

"
      />


<div className="px-5 md:px-12 xl:px-28 py-10 md:py-14 lg:py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center space-y-6 relative">
    <div className="absolute tryAppAnime bg-blue-400 -top-10 left-1/2 -translate-x-1/2 w-96 h-96 object-cover rounded-full opacity-10 blur-2xl" />

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
      Build Scalable, Secure & High-Performance Web Apps with{" "}
      <span className="text-indigo-600">Python & Django Development</span> 🚀
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Looking for expert developers who can build fast, flexible, and secure
      web applications using{" "}
      <span className="font-semibold text-indigo-600">Python</span> and{" "}
      <span className="font-semibold text-indigo-600">Django</span>? At{" "}
      <span className="font-semibold text-indigo-600">Future IT Touch</span>, we
      specialize in crafting reliable, scalable, and efficient solutions tailored
      to your business goals.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Whether it’s a data-driven application, enterprise solution, or SaaS
      platform, our skilled Django developers use clean architecture, ORM-based
      database management, and best security practices to deliver smooth
      performance and scalability.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      As a trusted Python development company, we ensure your applications are
      optimized, maintainable, and ready for future growth. Our Django experts
      focus on delivering robust backend systems that power intuitive and
      seamless user experiences.
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
    Future IT Touch’s Scalable Python & Django Development Services
  </h4>
  <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
    Empower your business with high-performance web solutions built on the robust
    Python and Django framework. We specialize in developing secure, fast, and 
    scalable applications that streamline operations, enhance user experience, 
    and accelerate your digital transformation journey.
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
    <FaPython /> {/* Recommended Icon for Python & Django */}
  </h6>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
    Python & Django <br />
    Framework <br />
    <span className="">Development Approach</span>
  </h2>
  <p className="text-3xl lg:text-5xl leading-tight text-gray-200 max-w-md">
    To craft secure{" "}
    <span className="text-[#00ffe4]">
      - scalable web apps for modern business solutions ⚡
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
Upscale Your Business With Custom ASP.NET, .NET Core & MVC Development Services
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

export default Python;
