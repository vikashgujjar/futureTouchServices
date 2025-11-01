import React from "react";
import { FaBrain, FaUsers, FaRocket } from "react-icons/fa";

export default function TurnYourBusiness() {
  const businessData = [
    {
      icons: <FaBrain className="text-white w-8 h-8" />,
      title: "Psychological Harmony",
      desc: "A well-crafted website by Future Touch Pvt Ltd creates psychological harmony by thoughtfully using colors, fonts, and layouts that evoke positive emotions in visitors. This emotional connection makes users feel comfortable and engaged, encouraging them to explore your site longer."
    },
    {
      icons: <FaUsers className="text-white w-8 h-8" />,
      title: "User-Centric Design",
      desc: "Future Touch Pvt Ltd focuses on designing websites that prioritize the user. By understanding user behavior, preferences, and needs, we create intuitive navigation and interactive elements that make every visitor’s experience seamless and enjoyable."
    },
    {
      icons: <FaRocket className="text-white w-8 h-8" />,
      title: "Business Growth",
      desc: "With Future Touch Pvt Ltd, your website becomes a powerful tool for business growth. Our designs are optimized for conversion, lead generation, and brand visibility, helping your business attract more customers and accelerate growth."
    }
  ];

  return (
    <div className="business-idea mx-5 py-8 md:py-12 xl:py-16 my-8 lg:my-16 px-5 md:px-12 xl:px-28 bg-gradient-to-r  rounded-3xl">
      <div className="text-center">
        <h5 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
          Turn Your Business into a Sales Powerhouse
        </h5>
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mt-2">
          with a Web Design Agency That Captivates Customers
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
            <h5 className="text-xl md:text-2xl font-bold mb-2">{elm.title}</h5>
            <p className="text-gray-700 text-sm md:text-base">{elm.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
