import React from "react";

import Image from "next/image";
import Ism from "../Assets/lsm.gif";
import gm from "../Assets/gm.webp";
import d1 from "../Assets/d1.webp";
import d2 from "../Assets/portfolio-img-6.webp";
import { FaChevronRight } from "react-icons/fa";
import { businessData } from "../common/Service_comp";
import GetNewInsight from "../components/GetNewInsight";

const Business = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className="relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5 xl:py-10">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl">
              SMALL BUSINESS WEBSITE DESIGN
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                The biggest challenge faced by any small business is to expand
                it's customer base. With the rising expenses of electronic and
                print media, the only option left for the small business owners
                is to create a strong digital presence. A professionally
                developed website for small business is the first step toward
                achieving this aim. Future IT Touch Pvt. Ltd. is an certified
                company providing a range of business website design services to
                clients worldwide. Our small business website design services
                are customized exclusively for startups at affordable rates. In
                the last 15 years, we have delivered effective web solutions to
                a number of small businesses and helped them enhance their
                growth online.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </a>
              <a
                href="tel:+917056937000"
                className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading "
              >
                Call us - 7056937000
              </a>
            </div>
          </div>
          <Image
            src={gm}
            width={400}
            height={400}
            alt="Business website design illustration"
            className="w-96 pt-0 max-sm:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 px-5 md:px-12 xl:px-28 py-14">
  <div>
    <h4 className="text-3xl sm:text-4xl font-bold mb-3 text-[#050748]">
      Website For Small Business & Startups
    </h4>
    <p className="mb-6 text-[#6a6a8e] text-lg sm:text-xl">
      Rise from a startup to an established brand
    </p>

    <div className="Website text-justify text-[#6a6a8e] space-y-6 text-base sm:text-lg leading-relaxed">
      <p>
        Whether you run a small business or have invested in a startup, we
        can build a professional website for business at a very reasonable
        price point. We use the latest technologies, create attractive design
        layouts, and develop business-oriented features to upscale user
        experience. A well-built website for small businesses can convert
        visitors into buyers by creating a strong impression within their
        target audience. This, in turn, increases revenue and helps your
        business grow.
      </p>
      <p>
        At Future IT Touch Pvt. Ltd., we take utmost care in delivering
        websites as search engine friendly for wider reach and best ROI. Our
        responsive coding ensures optimal viewing experience across various
        mobile devices. We effectively link your website with social media
        platforms to enhance your brand identity further. Make your business
        grow into an established brand with our all-inclusive small business
        web design services.
      </p>
    </div>
  </div>

  {/* Right Images */}
  <div className="col-span-1">
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
      <Image
        src={d1}
        width={400}
        height={400}
        alt="Small business website design example 1"
        className="w-full rounded-lg object-cover"
      />
      <Image
        src={d2}
        width={400}
        height={400}
        alt="Small business website design example 2"
        className="w-full h-[203px] rounded-lg object-cover"
      />
      <Image
        src={d1}
        width={400}
        height={400}
        alt="Small business website design example 3"
        className="w-full rounded-lg object-cover"
      />
      <Image
        src={d2}
        width={400}
        height={400}
        alt="Small business website design example 4"
        className="w-full h-[203px] rounded-lg object-cover"
      />
    </div>
  </div>
</div>


    <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
  <h3 className="text-2xl sm:text-[27px] md:text-3xl text-[#050748] font-bold">
    Rated as the Top Android App Development Company in India
  </h3>
  <p className="text-base sm:text-lg text-[#6a6a8e] mt-2">
    We follow a step-by-step procedure in developing the apps to maintain
    a steady pace and provide you with on-time delivery.
  </p>

  <div className="flex flex-col  gap-10 mt-10 lg:flex-row md:items-start">
    {/* Left Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#6a6a8e]">
      {businessData.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <div
              className="rounded-full p-4 bg-white border-2"
              style={{ borderColor: item.color }}
            >
              <item.icon style={{ color: item.color }} className="text-4xl" />
            </div>
            <div className="ml-2">
              <p className="text-xl font-bold" style={{ color: item.color }}>
                {item.title}
              </p>
              <p className="mt-2 text-justify text-base sm:text-lg">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right Section */}
    <div className="w-full mt-10 md:mt-0 flex justify-center">
      <Image
        src={Ism}
        width={400}
        height={400}
        alt="Business development process illustration"
        className="border-[18px] w-full border-[#dfdfdf] max-w-full h-auto"
      />
    </div>
  </div>

  {/* Bottom Paragraph */}
  <p className="text-base sm:text-lg text-[#6a6a8e] mt-10 text-justify leading-relaxed">
    In the last 15 years, we have worked with hundreds of online retailers
    and delivered their customers a beautiful online shopping experience. From
    startup to enterprise, single vendor to multi-vendor, B2C to B2B business -
    we have provided effective eCommerce solutions to a global clientele. We
    have also built several eCommerce mobile apps as per the needs of the
    businesses.
  </p>
</div>

   <GetNewInsight/>
    </>
  );
};

export default Business;
