import React from 'react'
import CommonBanner from '../components/CommonBanner'
import WhyChoose from '../components/WhyChoose'
import { FaChevronRight } from 'react-icons/fa'
import GetNewInsight from '../components/GetNewInsight'

export default function WhyusChild() {
  return (
    <div>
            <CommonBanner title="Why Us" breadcrumb="Why Us" />

              <section className="bg-gradient-to-b from-[#fff6f3] to-[#fffefb]   py-20">
      <div className=" mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-8/12">
            <div className="text-center">
              <span className="text-lg text-[#e60072]  font-medium">
                We Are Creative Agency
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mt-4 mb-8">
                Why Choose{' '}
                <span className="  py-1 px-2 bg-b rounded-full">
                  Future IT Touch Pvt. Ltd.
                </span>
              </h1>
              <p className="text-lg text-justify text-[#6a6a8e] max-sm:px-5">
                Here are some of the reasons we think you should consider
                working with{' '}
                <span className=" py-1 px-2 rounded-full">
                  Future IT Touch Pvt. Ltd.
                </span>{' '}
                Designs & Marketing, Inc. As your full service web development,
                online marketing and web hosting company. We create experiences
                that are attractive, simple to use, and drive results for your
                company. We are not your typical web development agency. Sure,
                we’re strong on corporate branding and web design, but we’re
                really focused on making things work for your audience ... and
                your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
         <WhyChoose/>


            
  <GetNewInsight/>

      
    </div>
  )
}
