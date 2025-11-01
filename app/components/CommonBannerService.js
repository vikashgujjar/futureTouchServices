import React from 'react'
import Image from 'next/image';
export default function CommonBannerService({imgSrc,title,desc}) {
  return (
    <>
       <div className="relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
              <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5 xl:py-10">
                <div className="  ">
                  <h1 className="text-white font-bold text-4xl  max-sm:text-2xl">
                    {title}
                  </h1>
      
                  <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
                    <p>
                      {desc}
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
                  src={imgSrc}
                  width={400}
                  height={400}
                  alt="Business website design illustration"
                  className="w-96 pt-10 max-lg:mx-auto"
                />
              </div>
            </div>
    </>
  )
}
