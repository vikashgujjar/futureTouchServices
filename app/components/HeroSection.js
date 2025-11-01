"use client";
import React, { useEffect, useState } from "react";

import sliderImg3 from "../Assets/slider-img-3.webp";
import newimg from "../Assets/newimg.webp";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentData = [
    {
      image: "/images/HeroSection/slider-img-1.webp",
      title: "Excellent Website Design & Development Services",
      mainText: "Create Unique Design",
      description:
        "Crafting unforgettable online experiences through our exceptional website design and development services, where every detail is meticulously tailored to create a one-of-a-kind digital presence",
    },
    // {
    //   image: sliderImg1,
    //   title: "Excellent IT Services For Your Success",
    //   mainText: "Crafting Unique Digital .",
    //   description: "Transform your business with our top-tier app development services. From concept to launch, we deliver apps that drive engagement and success."
    // },
    {
      image: "/images/HeroSection/newimg.webp",
      title: "Grow Your Business Online with",
      mainText: "Professional Digital Marketing Services",
      description:
        "Improve Your Website Visibility in Search Engine Results Pages and Increase Website Ranking with White Hat SEO Services.",
    },
  ];

  const { image, title, mainText, description } = contentData[currentIndex];

  return (
    <>
      <div
        className="hero-main w-full relative h-[440px]   md:h-[500px] lg:h-[700px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent mix-blend-multiply"></div>
        {/* <Navbartwo /> */}
        <div className="absolute top-60 max-sm:top-28 max-lg:top-40 left-4 sm:left-4 md:left-12 lg:left-28 text-white">
          <h3
            className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold font-serif tracking-widest"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            {title}
          </h3>
          <h1 className="title text-3xl sm:text-3xl md:text-3xl lg:text-5xl leading-tight pt-4 font-bold">
            <div>
              {mainText
                .split(" ")
                .map((word, index) =>
                  index === mainText.split(" ").length - 1 ? (
                    <span key={index}>{word}</span>
                  ) : (
                    `${word} `
                  )
                )}
            </div>
          </h1>
          <div className="desc pt-5 w-full sm:w-full md:w-full lg:w-6/12">
            <div>
              <p className="text-lg font-medium pr-2 ">{description}</p>
            </div>
          </div>
          <div className="hero-button d-flex">
            <a
              href="#scroll-down"
              className="mt-5 hidden sm:hidden md:hidden lg:block flex items-center w-40 bg-gradient-to-r from-teal-400 to-indigo-700 justify-center bg-black text-white py-4 px-8 font-heading transition duration-400 ease-in-out rounded-md text-lg font-medium focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="absolute top-2/4 right-5 mb-4 flex flex-col items-center">
          {contentData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-5 h-5 mb-2 block mx-auto rounded-full focus:outline-none ${
                currentIndex === index
                  ? "bg-gradient-to-r from-green-400 to-purple-500"
                  : "bg-white bg-opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
