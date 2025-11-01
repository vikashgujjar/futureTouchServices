import Link from 'next/link'
import React from 'react'

export default function RequestQuote() {
  return (
    <>
        <div className="bg-image-second  mx-auto px-4 md:px-12 py-8">
        <div className="flex justify-end  lg:flex-row gap-5">
          <div className="lg:w-1/2 lg:block hidden"></div>

          <div className="lg:w-1/2 md:ml-4">
            <div class="flex flex-row gap-5 items-center ">
              <div class="text-white  ">
                <h5 className="text-lg font-semibold"> GET SUPPORT FOR</h5>
                <h3 className="text-5xl max-sm:text-3xl max-md:text-3xl  font-bold">
                  90 DAYS
                </h3>
              </div>

              <div>
                <Link href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white text-nowrap font-semibold py-4  px-6 max-sm:px-3 rounded-md mr-4">
                    REQUEST A QUOTE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
