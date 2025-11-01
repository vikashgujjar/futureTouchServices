import React from 'react'
// import {Link} from 'next/link'
import Link from 'next/link'
export default function WhatCanDo({title=" WHAT CAN WE DO FOR YOU?",desc="We would be happy to discuss the project with you in person"}) {
  return (
    <>
        <div className="bg-image-third mx-auto px-4 py-8">
        <div className="flex flex-col justify-center text-center md:flex-row px-40  max-sm:px-5 max-lg:px-10">
          {/* <div className="xl:w-1/2"></div> */}

          <div className="">
            <div className="">
              <h3 className="text-3xl font-bold mb-4 text-[#050748]">
              {title}
              </h3>
              <p className="mb-4">
                {desc}
              </p>

              <div>
                <Link href="/our-portfolio">
                  <button className="bg-[#00a2ff] hover:bg-[#3b61e8] text-white font-semibold py-2 px-4 rounded-md mr-4">
                    RECENT PROJECTS
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
