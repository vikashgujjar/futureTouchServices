"use client";
import { useState } from "react";
import Image from "next/image";

export default function Faq() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  const faqData = [
    {
      id: "01",
      question: "What is a digital platform?",
      answer:
        "A digital platform is an online space that enables users to connect, communicate, or conduct business effectively using various digital tools and resources.",
    },
    {
      id: "02",
      question: "How can a digital platform help your business grow?",
      answer:
        "Digital platforms expand your business reach, increase customer engagement, streamline operations, and provide valuable data insights to boost growth and efficiency.",
    },
    {
      id: "03",
      question: "How do I book my slot to meet with your technical team?",
      answer:
        "You can schedule a meeting with our technical team by visiting our website, selecting your preferred time, and completing the booking form.",
    },
    {
      id: "04",
      question: "How many projects have you completed so far?",
      answer:
        "We have successfully completed numerous projects, each tailored to our clients' unique requirements, ensuring quality and timely delivery across various industries.",
    },
  ];
  return (
    <>
      <div className={`relative  ${activeAccordion?"xl:pb-12":"xl:pb-48"} `}>
        <Image
          src="/Assets/h2-faq-bg-right.webp"
          className="absolute right-0"
          width={400}
          height={400}
          alt="FAQ background right"
        />
        <div className="px-5 md:px-12 xl:px-28 mt-20 ">
          <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-3 font-bold">
            <span
              className=" text-4xl mb-5 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest "
              style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
            >
              FAQ <br />
            </span>
            Our Expert
            <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent leading-normal bg-clip-text ml-2">
              Answers
            </span>
          </h3>

          <p className="text-lg font-medium text-justify text-gray-500  md:w-full lg:w-1/2">
            Our team continuously engages in professional development and
            industry events to stay abreast of the latest IT trends and
            technologies. This ensures we can provide innovative solutions that
            keep you ahead of the competition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="p-4 md:col-span-6   hidden sm:hidden md:hidden lg:block">
              <div className="hero-images-four top-16 p-4  relative w-full animate-zoom-in-out h-full">
                <Image
                  className="image-one object-cover"
                  src="/Assets/h2-about-img-right.webp"
                  width={400}
                  height={400}
                  alt="About section right image"
                />
              </div>
              <Image
                className="absolute w-38  -z-10"
                src="/Assets/h2-about-bg-2.webp"
                width={200}
                height={200}
                alt="About background 2"
              />
              <div className="relative bottom-3/4">
                <div
                  className="hero-images-three2 mr-5 absolute w-full animate-zoom-in-out   top-0    left-64 xl:left-80 xl:ms-[-28px] mt-[60px] "
                  // style={{ marginTop: "60px", marginLeft: "-28px" }}
                >
                  <Image
                    className="shape-1  absolute -z-10 bottom-80 w-[174px]"
                    src="/Assets/animated-img-3.webp"
                    width={100}
                    height={100}
                    alt="Animated shape 3"
                  />
                  <Image
                    className="shape-right  absolute -z-10 right-20 rounded-full w-[170px]  "
                    src="/Assets/animated-img-2.webp"
                    width={100}
                    height={100}
                    alt="Animated shape 2"
                  />
                  <Image
                    className="image-three object-cover"
                    src="/Assets/h2-animated-img-3.webp"
                    width={100}
                    height={100}
                    alt="Animated image 3"
                  />
                </div>
              </div>
            </div>
            <div className="py-4 px-0 sm:px-0 md:px-0 lg:px-4 md:col-span-6 ml-0 sm:ml-0 lg:ml-10 ">
              <div className="w-full max-w-2xl mx-auto">
                <div className="accordion mt-5">
                  {faqData.map((item, index) => (
                    <div
                      className="accordion-item "
                      style={{
                        border:
                          activeAccordion === index ? "1px solid blue" : "",
                        borderRadius:
                          activeAccordion === index ? "20px 20px 0 20px" : "",
                      }}
                      key={index}
                    >
                      <h2
                        onClick={() => toggleAccordion(index)}
                        className={` accordion-header transform transition-transform ${
                          activeAccordion === index
                        }`}
                      >
                        <button
                          className={`accordion-button flex gap-5 font-bold text-xl items-center py-6 px-6 w-full text-left focus:outline-none ${
                            activeAccordion === index ? "active" : ""
                          }`}
                          type="button"
                          style={{
                            background:
                              activeAccordion === index
                                ? "linear-gradient(90deg, #20d9a1 0%, #5f39ff 100%)"
                                : "none",
                            color:
                              activeAccordion === index ? "#ffffff" : "#000000",
                            borderRadius:
                              activeAccordion === index ? "20px 20px 0 0" : "",
                          }}
                        >
                          <span className="mr-2 font-bold text-2xl">
                            {item.id}
                          </span>
                          {item.question}
                          <span
                            className={`ml-2 transform transition-transform ${
                              activeAccordion === index
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M15.293 5.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L10 9.586l5.293-5.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      {activeAccordion === index && (
                        <div
                          className="accordion-collapse font-sans py-5 px-6 bg-gray-50"
                          style={{
                            borderRadius:
                              activeAccordion === index ? "0 0 0 20px" : "",
                          }}
                        >
                          <div className="text-lg font-semibold">
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
