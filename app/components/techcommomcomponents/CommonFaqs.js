"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function CommonFaqs() {
 const faqData = [
  {
    title: "What is ReactJS?",
    description:
      "ReactJS is a popular open-source JavaScript library developed by Facebook for building fast and interactive user interfaces. It allows developers to create reusable UI components, making development more efficient and applications more scalable.",
  },
  {
    title: "Why should I use React for my project?",
    description:
      "React offers a component-based architecture, virtual DOM for faster rendering, and a huge ecosystem of tools and libraries. It is widely adopted by companies like Facebook, Instagram, Netflix, and Airbnb, making it a trusted choice for building modern web applications.",
  },
  {
    title: "Is React suitable for large-scale applications?",
    description:
      "Yes, React is highly suitable for both small and enterprise-level applications. With features like reusable components, efficient state management using libraries like Redux or Context API, and server-side rendering with Next.js, React can handle complex, large-scale projects with ease.",
  },
  {
    title: "Can React be used for mobile app development?",
    description:
      "Absolutely! React Native, a framework built on top of React, allows developers to build mobile applications for both iOS and Android platforms using the same React concepts and JavaScript codebase, reducing development time and cost significantly.",
  },
  {
    title: "How does React improve performance?",
    description:
      "React uses a virtual DOM that updates only the components that change instead of reloading the entire page. This leads to faster rendering and a smoother user experience, especially in dynamic, data-driven applications.",
  },
  {
    title: "Is React beginner-friendly?",
    description:
      "Yes! React is relatively beginner-friendly compared to other frameworks. Its component-based structure and JSX syntax are easy to learn, especially if you already know JavaScript. The huge community and learning resources also make it easier to get started.",
  },
  {
    title: "What companies use ReactJS?",
    description:
      "Many top tech companies rely on React, including Facebook, Instagram, Netflix, Uber, Airbnb, and WhatsApp. Its flexibility and performance make it a go-to choice for both startups and enterprises worldwide.",
  },
  {
    title: "Do I need to learn JavaScript before React?",
    description:
      "Yes, having a good grasp of JavaScript basics such as functions, objects, arrays, ES6 features (like arrow functions, spread operator, and classes) is essential. React builds on top of JavaScript, so understanding JS is a prerequisite.",
  },
  {
    title: "Can React be used with other frameworks?",
    description:
      "Yes. React can be integrated with backend frameworks like Node.js, Django, or Laravel, and can also work alongside libraries such as jQuery, D3.js, or even Angular in certain cases. Its flexibility allows developers to adopt it gradually in existing projects.",
  },
  {
    title: "What are the alternatives to React?",
    description:
      "Popular alternatives to React include Angular, Vue.js, and Svelte. Each has its strengths, but React is often preferred for its strong ecosystem, wide adoption, and flexibility, making it one of the top choices for modern web development.",
  },
];


  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-5 md:px-12 xl:px-28 py-10 md:py-12 lg:py-16 bg-gradient-to-r">
      <div className="">
        {/* Section Title */}
       <div className="text-gray-900 text-center text-3xl lg:text-5xl   leading-snug ">
         <h5 className="text-gray-800 ">
          Frequently Asked Questions
        </h5>

        <h2 className="font-extrabold"> On React Development</h2>

       </div>
        {/* FAQ List */}

    <div className="flex flex-col lg:flex-row  lg:items-center gap-4">
       <div className="w-full lg:w-[80%] mx-auto mt-10 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg p-4 transition-shadow hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <h4 className="font-bold text-lg">{faq.title}</h4>
                <span
                  className={`font-bold text-2xl transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              </button>

              {/* Height animation using max-height */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 mt-2" : "max-h-0 mt-0"
                }`}
              >
                <p className="text-gray-700">{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
      
    </div>

       
      </div>
    </div>
  );
}
