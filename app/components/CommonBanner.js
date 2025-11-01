import React from "react";

import Link from "next/link";
import Image from "next/image";
// ✅ Import your images from public folder
import breadcrumb7 from "../Assets/breadcrumb-shape-7.webp";
import breadcrumb1 from "../Assets/breadcrumb-shape-1.webp";
import breadcrumb2 from "../Assets/breadcrumb-shape-2.webp";
import breadcrumb6 from "../Assets/breadcrumb-shape-6.webp";
import breadcrumb5 from "../Assets/breadcrumb-shape-5.webp";

export default function CommonBanner({ title, breadcrumb }) {
  return (
    <>
      <div className="breadcrumb-wrapper relative -z-10 overflow-hidden bg-no-repeat h-60 sm:h-60 md:h-72 lg:h-96">
        <div className="absolute z-10 top-28 sm:top-28 md:top-28 lg:top-48 px-5 md:px-12 xl:px-28">
          <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-6xl">
            {title}
          </h1>
          <div className="text-white font-bold ml-2 mt-2 max-sm:ml-1 sm:mt-2 md:mt-4 lg:mt-6 text-base">
            <span className="mr-1">
              <Link href="/">Home</Link>
            </span>
            <span className="mr-1">&gt;</span>
            <span> {breadcrumb}</span>
          </div>
        </div>

        {/* Shapes */}
        <div className="relative px-20">
          <div className="breadcrumb-shape-3 opacity-30 top-20 absolute">
            <Image
              src={breadcrumb1}
              width={400}
              height={400}
              alt="Breadcrumb Shape 1"
            />
          </div>
          <div className="breadcrumb-shape-2 shake-y absolute top-10 opacity-40 left-20">
            <Image
              src={breadcrumb2}
              width={400}
              height={400}
              alt="Breadcrumb Shape 2"
            />
          </div>
          <div className="breadcrumb-shape-5 pulse absolute opacity-40 right-1/4">
            <Image
              src={breadcrumb5}
              width={400}
              height={400}
              alt="Breadcrumb Shape 5"
            />
          </div>
          <div className="breadcrumb-shape-4 shake-y absolute opacity-40 top-52 left-2/4">
            <Image
              src={breadcrumb2}
              width={400}
              height={400}
              alt="Breadcrumb Shape 2"
            />
          </div>
          <div className="breadcrumb-shape-1 pulse absolute opacity-40 top-52 left-2/4">
            <Image
              src={breadcrumb1}
              width={400}
              height={400}
              alt="Breadcrumb Shape 1"
            />
          </div>
          <div className="breadcrumb-shape-6 pulse absolute opacity-40 top-52 right-40">
            <Image
              src={breadcrumb6}
              width={400}
              height={400}
              alt="Breadcrumb Shape 6"
            />
          </div>
          <div className="breadcrumb-shape-7 shake-y absolute opacity-40 top-0 right-20">
            <Image
              src={breadcrumb7}
              width={400}
              height={400}
              alt="Breadcrumb Shape 7"
            />
          </div>
          <div className="breadcrumb-shape-8 pulse absolute opacity-40 top-0 right-20">
            <Image
              src={breadcrumb1}
              width={400}
              height={400}
              alt="Breadcrumb Shape 1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
