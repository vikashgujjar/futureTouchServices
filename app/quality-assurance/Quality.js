import React from "react";

import Image from "next/image";
import cwd from "../Assets/cwd.webp";
import gm from "../Assets/qa.webp"

import TechMarquee from "../components/TechMarquee";
import CustomSlider from "../components/CustomSlider";
import BuinessIdea from "../components/BuinessIdea";
import FAQSection from "../components/FAQSection";
import WhyFutureITTouch from "../components/WhyFutureITTouch";
import CommonBannerService from "../components/CommonBannerService";
import d1 from "../Assets/cr.webp"

import {
  FaShieldAlt,
  FaClipboardCheck,
  FaTools,
  FaHandshake,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";

import {
  FaMagento,
  FaWordpress,
  FaShopify,
  FaOpencart,
  FaCogs,
  FaServer,
} from "react-icons/fa";



import {
  FaFlask,
  FaGlobe,
  FaCloud,
  FaRobot,
  FaCode,
  FaMobileAlt,
  FaComments,
  FaCheckCircle,
  FaTachometerAlt,
  FaPuzzlePiece,
  FaTabletAlt,
} from "react-icons/fa";

import { FaBug, FaUserShield } from "react-icons/fa";


const Quality = () => {
 const features = [
  {
    title: "Reliable Brand Experience",
    description:
      "We create a trustworthy digital brand experience by ensuring every website and application functions flawlessly. From link validation to spelling accuracy, our QA experts eliminate issues that can harm your brand’s credibility.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Comprehensive Quality Assurance",
    description:
      "Quality assurance isn’t just testing—it’s ensuring usability, reliability, and performance. We make sure every feature works seamlessly so users can confidently engage with your digital platform.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Efficient QA Tools & Automation",
    description:
      "We bring the best QA tools and automation frameworks to make testing more efficient. From automated regression tests to manual validation, we optimize workflows for consistent results.",
    icon: <FaTools />,
  },
  {
    title: "Agency-Focused Testing Approach",
    description:
      "Our team has a proven track record of working with digital agencies, adapting to their workflows, communication styles, and deadlines while maintaining top-notch QA standards.",
    icon: <FaHandshake />,
  },
  {
    title: "Actionable QA Insights",
    description:
      "We translate testing results into actionable insights that development teams can easily implement, bridging the gap between QA findings and technical execution.",
    icon: <FaChartLine />,
  },
  {
    title: "Transparent Cost Estimation",
    description:
      "We provide clear cost estimates for QA and testing phases in upcoming projects, allowing clients to plan accurately while maintaining quality benchmarks.",
    icon: <FaMoneyBillWave />,
  },
];

const businessData = [
  {
    icons: <FaBug className="text-white w-8 h-8" />,
    title: "Comprehensive Testing Process",
    desc: "We conduct end-to-end manual and automated testing to ensure your web applications perform seamlessly, meet all functional requirements, and remain error-free across devices.",
  },
  {
    icons: <FaCogs className="text-white w-8 h-8" />,
    title: "Automation & Performance Testing",
    desc: "Our QA team leverages the latest tools and frameworks to automate testing cycles, improve speed, and validate system performance under various real-world conditions.",
  },
  {
    icons: <FaUserShield className="text-white w-8 h-8" />,
    title: "Security & Usability Assurance",
    desc: "We ensure your digital product is not only secure but also user-friendly. Our QA experts check for data protection, smooth navigation, and overall usability to guarantee a flawless user experience.",
  },
];

const cards = [
  {
    count: "250+",
    title: "Corporate Web Apps Delivered",
    desc: "We’ve tested and optimized over 250+ corporate web applications to ensure flawless performance, security, and usability. Every project undergoes rigorous QA checks to guarantee error-free functionality and reliability.",
    image: "/Assets/seerviceSlider/slide1.webp",
  },
  {
    count: "15+",
    title: "Years of Industry Expertise",
    desc: "With more than 15 years in software testing and quality assurance, Future IT Touch Pvt. Ltd. ensures that every digital product we deliver meets the highest industry standards for performance and security.",
    image: "/Assets/seerviceSlider/slide2.webp",
  },
  {
    count: "500+",
    title: "Global Businesses Served",
    desc: "Trusted by over 500 global clients, we provide QA and testing solutions that enhance software quality, prevent issues before launch, and ensure seamless functionality across platforms and devices.",
    image: "/Assets/seerviceSlider/slide3.webp",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our commitment to precision and excellence in testing has earned us a 98% client satisfaction rate. We ensure smooth launches, superior performance, and bug-free experiences for every project.",
    image: "/Assets/seerviceSlider/slide4.webp",
  },
  {
    count: "24/7",
    title: "Reliable Technical Support",
    desc: "Our QA support team provides 24/7 monitoring, issue resolution, and ongoing validation to ensure your systems run flawlessly even after deployment, keeping performance at its peak.",
    image: "/Assets/seerviceSlider/slide5.webp",
  },
];


const platforms = [
  {
    icon: <FaFlask className="text-white w-6 h-6" />,
    title: "Prototype Testing",
    desc: "We validate early-stage prototypes to identify design and functionality flaws before full-scale development, saving time and cost.",
  },
  {
    icon: <FaGlobe className="text-white w-6 h-6" />,
    title: "Cross-Browser Testing",
    desc: "Ensure your web application performs flawlessly across all major browsers and devices, providing consistent user experiences.",
  },
  {
    icon: <FaCloud className="text-white w-6 h-6" />,
    title: "Cloud-Based Testing",
    desc: "We leverage scalable cloud environments for fast, secure, and collaborative QA execution across multiple test scenarios.",
  },
  {
    icon: <FaRobot className="text-white w-6 h-6" />,
    title: "Test Automation",
    desc: "Accelerate your QA process with automated scripts that ensure repeatable and accurate testing for faster releases.",
  },
  {
    icon: <FaCode className="text-white w-6 h-6" />,
    title: "Web Application Testing",
    desc: "Comprehensive end-to-end testing to identify functional, UI, and performance issues in web-based applications.",
  },
  {
    icon: <FaMobileAlt className="text-white w-6 h-6" />,
    title: "Desktop/Mobile App Testing",
    desc: "Thorough testing of mobile and desktop applications to ensure responsive designs, smooth performance, and minimal crashes.",
  },
  {
    icon: <FaComments className="text-white w-6 h-6" />,
    title: "QA Consulting",
    desc: "Our experts provide strategic QA consultation to improve testing processes, enhance software quality, and reduce risk.",
  },
  {
    icon: <FaCheckCircle className="text-white w-6 h-6" />,
    title: "Functionality & Usability Testing",
    desc: "We assess user workflows, features, and interfaces to ensure your software is functional, intuitive, and user-friendly.",
  },
  {
    icon: <FaTachometerAlt className="text-white w-6 h-6" />,
    title: "Performance Testing",
    desc: "We simulate real-world conditions to ensure your application can handle peak loads and deliver optimal performance.",
  },
  {
    icon: <FaPuzzlePiece className="text-white w-6 h-6" />,
    title: "Integrated Systems Testing",
    desc: "End-to-end system integration testing to verify that all components work seamlessly together in complex architectures.",
  },
  {
    icon: <FaTabletAlt className="text-white w-6 h-6" />,
    title: "Device Compatibility Testing",
    desc: "We test across multiple devices, resolutions, and operating systems to guarantee flawless performance everywhere.",
  },
  {
    icon: <FaShieldAlt className="text-white w-6 h-6" />,
    title: "Security Testing",
    desc: "We identify vulnerabilities and ensure your application is protected against data breaches, malware, and cyber threats.",
  },
];

const faqData = [
  {
    title: "What eCommerce platforms do you develop on?",
    description:
      "We work with major eCommerce platforms including Shopify, Magento, WooCommerce, OpenCart, and PrestaShop. We also build fully custom eCommerce websites for businesses that need tailored features and scalability.",
  },
  {
    title: "Can you create a fully customized online store?",
    description:
      "Yes, our team specializes in building unique and customized eCommerce websites. From design to advanced back-end functionality, we ensure your store reflects your brand identity and delivers an engaging user experience.",
  },
  {
    title: "How do you ensure website security?",
    description:
      "Security is our top priority. We implement SSL encryption, data protection, and follow industry standards like PA-DSS compliance to keep your online store safe from vulnerabilities and cyber threats.",
  },
  {
    title: "Can your websites handle large product inventories?",
    description:
      "Absolutely. Our eCommerce solutions are optimized to manage thousands of products, high traffic, and complex inventory structures while maintaining fast load times and smooth performance.",
  },
  {
    title: "Are your eCommerce websites mobile-friendly?",
    description:
      "Yes, every eCommerce website we create is fully responsive and mobile-first, ensuring an intuitive and seamless shopping experience across smartphones, tablets, and desktops.",
  },
  {
    title: "Do you provide post-launch support and maintenance?",
    description:
      "Yes, we offer 24/7 support and regular maintenance to ensure your website remains secure, updated, and running smoothly. Our team helps with performance optimization, updates, and troubleshooting when needed.",
  },
];


  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>

      <CommonBannerService
        imgSrc={gm}
        title="Quality Assurance"
        desc="Our services are of assured quality so drop us an email. Clients expect their interactive agency to guard the reputation of their products and company. Quality assurance testing protects a client’s brand reputation by verifying that their customers’ experiences with their product, website, app, and campaign are consistently positive."
      />

      <TechMarquee />

      <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full">
      Reliable Software Quality Assurance Services
    </span>

    <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900">
      Ensuring Excellence Through Comprehensive QA and Testing
    </h4>

    <p className="text-base md:text-lg text-gray-600">
      At{" "}
      <span className="font-semibold text-indigo-600">
        Future IT Touch Pvt. Ltd.
      </span>{" "}
      we deliver end-to-end Quality Assurance and software testing services to
      ensure your applications run flawlessly, perform seamlessly, and meet the
      highest standards of reliability and security.
    </p>

    {/* Main Description */}
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      Our QA experts use advanced testing frameworks and automation tools to
      identify issues before they impact users. We focus on ensuring every
      product release is stable, scalable, and aligned with your business
      objectives through continuous testing and monitoring.
      <br /> <br />
      <span className="font-semibold text-gray-900">For Developers:</span>{" "}
      Early bug detection, CI/CD testing integration, API validation, and
      automated regression testing for faster and more efficient development
      cycles.
      <br /> <br />
      <span className="font-semibold text-gray-900">For Businesses:</span>{" "}
      Comprehensive functional, performance, security, and usability testing
      that ensures consistent user experiences and protects your brand’s
      reputation.
      <br /> <br />
      With over 15 years of experience in delivering top-notch digital
      solutions, our{" "}
      <span className="font-semibold text-indigo-600">
        Quality Assurance services
      </span>{" "}
      help organizations reduce risks, optimize performance, and achieve
      reliable, high-quality software products that users trust.
    </p>

    {/* CTA */}
    <div className="pt-4">
      <a
        href="tel:+917056937000"
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
      >
        Start Your QA and Testing Project
      </a>
    </div>
  </div>
</div>


      {/* high performance  */}

      <div className="px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <div className="text-3xl lg:text-4xl text-center space-y-2 md:space-y-4 mb-12">
          <h5 className="font-bold text-[#7C4DDA]">
      Trusted Quality Assurance Services
          </h5>
          <h4 className="font-bold text-gray-900">
      Creating Flawless Digital Experiences Through Rigorous Testing
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-8 mt-20">
          <div className="hidden lg:flex lg:col-span-2 justify-center items-start sticky top-0  ">
            <Image
              src={d1}
              alt="eCommerce Development"
              width={100}
              height={100}
              className="w-full rounded-xl shadow-lg h-full  transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 gap-12 lg:gap-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-4 p-6 border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex -mt-14 text-[#7C4DDA] text-3xl bg-white justify-center items-center p-4 rounded w-20 h-20 border border-gray-400">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-sm lg:text-base text-gray-700 text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TurnYourBusiness */}

      <div className="business-idea mx-5 py-8 md:py-12 xl:py-16 my-8 lg:my-16 px-5 md:px-12 xl:px-28 bg-gradient-to-r rounded-3xl">
        <div className="text-center">
          <h5 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
      Leading Quality Assurance & Testing Company in India
    </h5>
    <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
      Partner with Us for Flawless Digital Performance
    </h4>
        </div>

        <div className="mt-10 grid gap-8 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {businessData.map((elm) => (
            <div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-start text-start"
              key={elm.title}
            >
              <div className="bg-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {elm.icons}
              </div>
              <h5 className="text-xl md:text-2xl font-bold mb-2">
                {elm.title}
              </h5>
              <p className="text-gray-700 text-sm md:text-base">{elm.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CustomSlider   
        cards={cards}
  title="Delivering Reliable Quality Assurance & Testing Solutions"
      />

      <WhyFutureITTouch
        platforms={platforms}
  title="Comprehensive Quality Assurance & Testing Solutions – Ensuring Flawless Performance Across All Platforms"
      />

      <FAQSection
        faqData={faqData}
        title="About eCommerce Website Developmen"
      />

      {/* <GetNewInsight /> */}
      <BuinessIdea />
    </>
  );
};

export default Quality;
