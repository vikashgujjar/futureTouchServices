import React from "react";
import Image from "next/image";

import realestate from "../Assets/house.svg";
import tour from "../Assets/travel-case.svg";
import education from "../Assets/video-tutorials.svg";
import transport from "../Assets/taxi.svg";
import event from "../Assets/event.svg";
import ecommerce from "../Assets/smartphone.svg";
import game from "../Assets/joystick.svg";
import healthcare from "../Assets/healthcare.svg";
import finance from "../Assets/money-growth.svg";
import restaurant from "../Assets/baker.svg";
import ondemand from "../Assets/mobile-app.svg";
import grocery from "../Assets/groceries.svg";

const MutipleServices = () => {
  const industriesData = [
    { icon: realestate, title: "Real Estate" },
    { icon: tour, title: "Tour & Travels" },
    { icon: education, title: "Education" },
    { icon: transport, title: "Transport" },
    { icon: event, title: "Event" },
    { icon: ecommerce, title: "eCommerce" },
    { icon: game, title: "Game" },
    { icon: healthcare, title: "Healthcare" },
    { icon: finance, title: "Finance" },
    { icon: restaurant, title: "Restaurant" },
    { icon: ondemand, title: "On-Demand" },
    { icon: grocery, title: "Grocery" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fbf9ed] to-[#fbeaf8] pb-20">
      {/* Heading Section */}
      <div className="pt-20 text-center px-5">
        <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-wider block mb-2">
          We Have Worked Across Multiple Industries
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Industries We Serve
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 mt-3 max-w-3xl mx-auto">
          Successfully delivered digital products for Industries like Real
          Estate, Tours & Travels, Education, Transportation, and more.
        </p>
      </div>

      {/* Industry Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 sm:px-10 md:px-20 xl:px-40 mt-12">
        {industriesData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md custom-shadow flex flex-col  xl:flex-row items-center justify-center xl:justify-start xl:gap-5 text-center p-5 hover:shadow-lg transition"
          >
            <Image
              src={item.icon}
              width={56}
              height={56}
              className="w-14 h-14 mb-3"
              alt={item.title}
            />
            <h6 className="font-bold text-sm sm:text-base text-[#050748]">
              {item.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MutipleServices;
