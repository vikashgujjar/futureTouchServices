import React from "react";

import Image from "next/image";
export default function CommonTechBlog({ img, title, desc }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-[#050748]">
            From Our Blog
          </h4>

          <div className="text-base sm:text-lg lg:text-xl text-justify text-[#6a6a8e]">
            <p className="text-[#e33f70] mb-4 font-medium">{title}</p>
            <p>{desc}</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src={img}
            width={800}
            height={800}
            alt="Lisp Example"
            className="border-[10px] sm:border-[14px] lg:border-[18px] border-[#dfdfdf] w-full lg:max-w-md lg:max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
