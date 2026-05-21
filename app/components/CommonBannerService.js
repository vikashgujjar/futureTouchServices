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
                      className="inline-flex items-center gap-2 justify-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2.5 px-7 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-300/40 hover:-translate-y-0.5"
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
