"use client";
import React from "react";

import gm from "../Assets/solidity.webp";
import ec from "../Assets/ec.webp";
import d1 from "../Assets/Sdtyd.webp";
import Image from "next/image";
import {
  FaBook,
  FaChevronRight,
  FaEdit,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import WhatCanDo from "../components/WhatCanDo";
import RequestQuote from "../components/RequestQuote";
import GetNewInsight from "../components/GetNewInsight";

const Solidity = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Solidity Blockchain Development
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Future IT Touch Pvt. Ltd. is a leading Blockchain App
                Development company backed up by industry qualified Blockchain
                developers who are proficient in building scalable Solidity
                empowered Blockchain apps that have the capacity to gear up your
                business base across any industry. We have past experience in
                delivering Blockchain-based decentralized Apps using –Ethereum
                and thus helped several Businesses, Entrepreneurs and Start-ups
                to Leverage our expertise in delivering tailor-made smart
                contracts built on Solidity Programming Language. To Develop a
                Solidity application, one needs to have both expertise and
                proficiency in the field of javascript technology and our core
                developers are specifically qualified in this technology. The
                solidity programming language used to implement smart contacts.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <Link
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </Link>
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
            alt="Solidity Blockchain Development"
            className="w-80 pt-0 max-lg:pt-10 max-lg:mx-auto"
          />
        </div>
      </div>

      <div className="flex max-lg:block gap-10 px-5 md:px-12 xl:px-28 py-14">
        <div className="w-2/3 max-lg:w-full pt-5">
          <h4 className="text-4xl max-sm:text-2xl font-bold mb-3 text-[#050748] ">
            Our Solidity Development Services
          </h4>

          <div className="text-lg text-justify mt-5 text-[#6a6a8e] ">
            <p>
              Future IT Touch Pvt. Ltd. is a leading Blockchain App Development
              company backed up by industry qualified Blockchain developers who
              are proficient in building scalable Solidity empowered Blockchain
              apps that have the capacity to gear up your business base across
              any industry. We have past experience in delivering
              Blockchain-based decentralized Apps using –Ethereum and thus
              helped several Businesses, Entrepreneurs and Start-ups to Leverage
              our expertise in delivering tailor-made smart contracts built on
              Solidity Programming Language. Our team of Solidity Developers can
              create smart contracts for crowdfunding, blind auctions, voting
              and different blockchain based applications. We have successfully
              deployed 80+ smart contracts and worked on 15 blockchain projects.
            </p>
          </div>
        </div>

        <div className=" w-1/3  max-lg:w-full">
          <Image
            src={d1}
            width={400}
            height={400}
            alt="Design 1"
            className="w-96 mt-5  h-60  max-sm:mb-3  max-lg:mx-auto"
          />
        </div>
      </div>
      <WhatCanDo title={"Various Types of Blockchain:"} />

      <div className="bg-[#f2f2f2] px-5 md:px-12 xl:px-28 py-14">
        <h3 className="text-[27px] text-[#050748] font-bold">
          Advantages of Solidity in Developing Smart Contracts in Blockchain
          Applications
        </h3>
        <p className=" text-lg text-[#6a6a8e] my-5 text-justify">
          Solidity is a high-level, human-readable code that breaks it down into
          specific instructions that are easily understandable for machines. The
          main advantages of using Solidity include: Solidity provides
          object-oriented programming attributes in contracts including multiple
          level inheritance properties. Solidity developed for Contracts
          maintains multiple members of variables in order to represent and
          arrangements. Multiple types of supporting roles are also carried in
          Solidity through the expediting Application Binary Interface. Using
          contracts fundraising can be done and can provide solutions for
          various problems raised like third-party expenses and reduce the cost
          of managing data. Other than Ethereum, Solidity is also used in
          programming smart contracts on other networks such as Monax and its
          Hyperledger, Counterparty, Burrow Blockchain, Tendermint, and Zeppelin
          by Digital Currency Group. Solidity also supports multiple type-safe
          functions through facilitating ABI (Application Binary Interface).
        </p>
        <h3 className="text-2xl text-[#050748] font-semibold">
          Advantages of React Web and Mobile App Development
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 text-justify text-lg text-[#6a6a8e]">
          <div className="Development-text">
            <div className="flex gap-3 items-center">
              <FaBook className="text-4xl text-[#e33f70]" />
              <p className="ml-2 text-lg text-[#e33f70]">
                Smart Contracts Development
              </p>
            </div>
            <p className="mt-4">
              Blockchain has revolutionized the game of documentation through
              smart contracts! Future IT Touch Pvt. Ltd. Solidity developers
              develop Solidify-based smart contracts helping several businesses
              across the globe. Our smart contract development includes services
              like writing, unit testing and deploying contracts on different
              platforms like Ethereum Blockchain Networks, Neo Blockchain, and
              Hedera Hashgraph. We help our clients pick the precise right
              platform that best fits their business model.
            </p>
          </div>
          <div className="Development-text">
            <div className="flex gap-3 items-center">
              <FaProjectDiagram className="text-4xl text-[#e33f70]" />
              <p className="ml-2 text-lg text-[#e33f70]">Virtual DOM Concept</p>
            </div>
            <p className="mt-4">
              While the traditional development solutions being still in demand,
              businesses seek developers who can develop best in Blockchain
              development while collaborating with the traditional ones. The
              Solidity developers at Future IT Touch Pvt. Ltd. are well-versed
              with the Blockchain development applications and offers highly
              competent full-stack development. When the Blockchain technology
              collaborates with the traditional solutions, we ensure our clients
              to encapsulate the whole process from the mobile apps, web apps,
              APIs to the backend SQL, NO SQL DB, and IPFS.
            </p>
          </div>
          <div className="Development-text">
            <div className="flex gap-3 items-center">
              <FaServer className="text-4xl text-[#e33f70]" />
              <p className="ml-2 text-lg text-[#e33f70]">
                Digital Token Creation
              </p>
            </div>
            <p className="mt-4">
              Our Solidity Blockchain services are extended to digital token
              creation. Most of the businesses today rely on adopting
              cryptocurrency and Blockchain development. Our dedicated
              Blockchain developers create digital tokens that can be used in
              almost every sector of the business.
            </p>
          </div>
          <div className="Development-text">
            <div className="flex gap-3 items-center">
              <FaEdit className="text-4xl text-[#e33f70]" />
              <p className="ml-2 text-lg text-[#e33f70]">App Development</p>
            </div>
            <p className="mt-4">
              Get the on chain and off chain data on your dApp along with
              microservices, DB requirements. Our solidity smart contracts
              experts will identify the user personas, components involved in
              the dApp.
            </p>
          </div>
        </div>
      </div>

      <RequestQuote />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#f2f2f2] px-5 sm:px-10 lg:px-20 xl:px-32 py-14 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-[#050748]">
            From Our Blog
          </h4>

          <div className="text-base sm:text-lg lg:text-xl text-justify text-[#6a6a8e] space-y-4">
            <p className="text-[#e33f70] font-semibold">
              Why Blockchain Development Is Important to Your Business
            </p>
            <p>
              Nowadays, almost every business has experienced that it can
              succeed when its offerings are visible to their customers. For
              that reason, business owners invest in developing visually
              attractive websites and look for sophisticated SEO experts to
              differentiate themselves amidst the clutter.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <Image
            src={ec}
            alt="Python blockchain development phone preview"
            className="border-[12px] sm:border-[16px] border-[#dfdfdf] w-full  lg:max-w-md  rounded-lg shadow-md"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>

      <GetNewInsight />
    </>
  );
};

export default Solidity;
