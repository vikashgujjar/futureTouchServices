"use client"
import Image from "next/image";
import realestate from "../Assets/teama.svg";
import tour from "../Assets/link.svg";
import education from "../Assets/tech.svg";
import transport from "../Assets/hi.svg";
import event from "../Assets/badge.svg";
import ecommerce from "../Assets/tin.svg";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import Login from "./Login";

const ChooseFuture = () => {
  const industriesData = [
    { icon: realestate, title: "Reliable Service. In House Team" },
    { icon: tour, title: "Trusted by People Like You" },
    { icon: education, title: "Complete Technical Competency" },
    { icon: transport, title: "Friendly & Cordial in Nature" },
    { icon: event, title: "Excellent Quality Delivered on Time" },
    { icon: ecommerce, title: "Effective & Continuous Communication" },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  return (
    <div className="bg-gradient-to-b from-[#ffe2e2] to-[#fff9f4] py-20 px-5 md:px-12 xl:px-28">
      {/* Header */}
      <div className="text-center">
        <span className="text-xl font-semibold bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest">
          We Deliver Our Best
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
          Why Choose Future IT Touch Pvt. Ltd.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-16">
        {industriesData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#d4f0ff] rounded-lg shadow-md p-6 flex items-center gap-5 hover:shadow-lg transition"
          >
            <Image
              src={item.icon}
              width={56}
              height={56}
              alt={item.title}
              className="w-14 h-14"
            />
            <h6 className="font-bold text-lg md:text-xl text-[#050748]">
              {item.title}
            </h6>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cta-card mt-16 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Let’s Start
          <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
            {" "}
            New Project
          </span>{" "}
          Together
        </h3>
        <button
          onClick={handleButtonClick}
          className="flex items-center gap-2 border-2 border-black text-black px-8 py-2 bg-white rounded-full shadow-md hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current transition-all"
        >
          Request A Quote <FaAngleRight />
        </button>
      </div>

      {isPopupOpen && (
        <Login handleClosePopup={handleClosePopup} isPopupOpen={isPopupOpen} />
      )}
    </div>
  );
};

export default ChooseFuture;
