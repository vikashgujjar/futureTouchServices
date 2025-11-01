// React Component
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export default function GetNewInsight() {
  return (
    <div className="GetNewInsightnew py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <h1 className="text-gray-900 text-2xl md:text-3xl font-bold">
            Get New Insights Weekly
          </h1>
          <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
            Your personal data is secure as per our policy. We don’t share your
            personal information. <br className="hidden sm:block" /> Freely Subscribe!
          </p>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-6 flex justify-center md:justify-end">
          <form className="relative flex items-center bg-white border border-gray-300 rounded-full shadow-md w-full max-w-xl focus-within:ring-2 focus-within:ring-indigo-500">
            <input
              type="email"
              placeholder="Email your address"
              name="emails"
              className="flex-1 h-12 sm:h-14 lg:h-16 px-4 lg:px-6 text-sm sm:text-base text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              name="submit"
              className="flex items-center gap-2 h-10 sm:h-12 px-4 sm:px-6 mr-2 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              style={{
                borderRadius: "28px 100px 100px 28px",
                lineHeight: "normal",
              }}
            >
              Subscribe <FaChevronRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
