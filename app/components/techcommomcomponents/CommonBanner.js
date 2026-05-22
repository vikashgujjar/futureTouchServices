import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function CommonBanner({img,title,desc}) {
  return (
    <>
       {/* <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div> */}

      <div className="relative overflow-hidden bg-gradient-to-r from-[#442a79] via-[#442a79] to-[#442a79] xl:min-h-96 pt-32 pb-24">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              {title}
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                {desc}
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 justify-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2.5 px-7 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-300/40 hover:-translate-y-0.5"
              >
                Quick Enquiry
              </Link>
              <button className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading ">
                <Link href="tel:+917056937000">Call us - 7056937000</Link>
              </button>
            </div>
          </div>
          <Image
            src={img}
            width={400}
            height={400}
            alt="Reactjs Vuejs Nodejs Development"
            className="w-96 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>
    </>
  )
}
