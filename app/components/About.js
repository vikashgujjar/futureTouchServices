import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="hero-about block mt-20 px-5 mb-20 relative sm:px-5 md:px-12 xl:px-28 sm:block md:block lg:flex">
        <div className="absolute bottom-0 sm:bottom-0  md:bottom-3 lg:bottom-6 left-0">
          <Image
            src="/Assets/h2-about-bg-3.webp"
            width={500}
            height={500}
            alt="About section background graphic"
          />
        </div>
        <div className="relative flex w-11/12 sm:w-11/12 md:full lg:w-1/2 ">
          <div className="hero-images mr-5 relative w-full max-w-335 lg:h-490 animate-zoom-in-out ">
            <Image
              className="image-one object-cover"
              src="/Assets/hero-about-1.webp"
              width={200}
              height={300}
              alt="Team working together illustration"
            />

            <Image
              className="shape-1 absolute"
              src="/Assets/about2-shape-1.webp"
              width={60}
              height={60}
              alt="Decorative shape 1"
              style={{ height: "220px", width: "auto" }}
            />
          </div>
          <div className="hero-images-two w-full relative animate-zoom-in-out">
            <Image
              className="image-two object-cover"
              src="/Assets/h2-about-img-right.webp"
              width={200}
              height={300}
              alt="Creative digital solutions illustration"
            />

            <Image
              className="shape-2 absolute"
              src="/Assets/about2-shape-2.webp"
              width={60}
              height={60}
              alt="Decorative shape 2"
              style={{ height: "100px", width: "auto" }}
            />
            <div className="about-circle-box absolute">
              <div className="ab-circle">
                <svg
                  className="shape-circle"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    ></path>
                  </defs>
                  <text fontSize="15">
                    <textPath xlinkHref="#circle" className="shape-1">
                      Future IT Touch Pvt. Ltd. Future I
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <Image
            className="hidden sm:block md:block lg:block absolute bottom-0 w-40 left-40"
            src="/Assets/h2-about-bg-1.webp"
            width={160}
            height={80}
            alt="About section lower background graphic"
          />
        </div>

        <div className="w-full sm:w-full md:full lg:w-1/2 pl-0 sm:pl-0 md:pl-5 lg:pl-14">
          <Image
            className="hidden sm:block md:block lg:block absolute top-10 w-28 right-20 "
            src="/Assets/h2-about-bg-2.webp"
            width={112}
            height={56}
            alt="About section upper background graphic"
          />
          <span
            className=" text-4xl mb-8 bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text tracking-widest"
            style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
          >
            About Us
          </span>
          <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 mb-4 sm:mt-3 md:mt-4 lg:mt-5  sm:mb-4 md:mb-6 lg:mb-8  font-bold">
            Creative Problem <br /> Solving{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-700 text-transparent bg-clip-text">
              Innovation
            </span>
          </h3>

          <p className="text-lg mb-8 font-small text-justify">
            Founded in 2017, Future IT Touch is a leading website designing and
            development company in India. We specialize in creating innovative
            and user-friendly digital solutions that help businesses thrive in
            the online world. Our dedicated team combines creativity and
            technical expertise to deliver exceptional results tailored to your
            needs.
          </p>

          <div className=" grid-for-main-blog md:flex-wrap md:gap-4 lg:flex-wrap lg:gap-x-4 lg:gap-y-8 lg:w-full  ">
            <div className="max-w-300 w-full about-width font-semibold p-4 border border-purple-600 rounded-lg ">
              <div className="about-category-item flex gap-x-5">
                <div className="about-icon ">
                  <Image
                    className="w-12 relative top-2 "
                    src="/Assets/market-positioning.webp"
                    width={48}
                    height={48}
                    alt="Market positioning icon"
                  />
                </div>
                <div className="about-text">
                  <h5 className="title font-semibold text-lg">
                    Brand Strategy & Art Direction
                  </h5>
                </div>
              </div>
            </div>
            <div className="max-w-300 w-full about-width font-semibold p-4 border border-purple-600 rounded-lg ">
              <div className="about-category-item flex gap-x-5">
                <div className="about-icon">
                  <Image
                    className="w-12 relative top-2"
                    src="/Assets/ui.webp"
                    width={48}
                    height={48}
                    alt="UI/UX design icon"
                  />
                </div>
                <div className="about-text">
                  <h5 className="title font-semibold text-lg">
                    UX/UI Design & Website / App Design
                  </h5>
                </div>
              </div>
            </div>
            <div className="max-w-300 w-full about-width font-semibold p-4 border border-purple-600 rounded-lg ">
              <div className="about-category-item flex gap-x-5">
                <div className="about-icon">
                  <Image
                    className="w-12 relative top-2 "
                    src="/Assets/trending-topic.webp"
                    width={48}
                    height={48}
                    alt="Trending design icon"
                  />
                </div>
                <div className="about-text">
                  <h5 className="title font-semibold text-lg">
                    Trending Designing Experience
                  </h5>
                </div>
              </div>
            </div>
            <div className="max-w-300 w-full about-width font-semibold p-4 border border-purple-600 rounded-lg ">
              <div className="about-category-item flex gap-x-5">
                <div className="about-icon">
                  <Image
                    className="w-12 relative top-2"
                    src="/Assets/compass.webp"
                    width={48}
                    height={48}
                    alt="Compass icon"
                  />
                </div>
                <div className="about-text">
                  <h5 className="title font-semibold text-lg">
                    Brand Strategy & Art Direction
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="flex items-center mt-5  justify-center bg-gradient-to-r from-gray-700 to-gray-700 text-white py-4 px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-medium focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-indigo-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
