import Link from "next/link";
import Image from "next/image";
import {
  FaChevronRight,
  FaEnvelope,
  FaHeart,
  FaMapPin,
  FaInstagram,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-white py-10 sm:py-12">
        <div className="px-4 sm:px-6 md:px-12  xl:px-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:flex lg:justify-between gap-10">
            {/* Logo & Intro */}
            <div className="lg:w-[35%]">
              <Link href="/" className="block mb-6">
                <Image
                  src="/Assets/secondary-logo.webp"
                  width={240}
                  height={60}
                  alt="Logo"
                  className="w-48 sm:w-60"
                />
              </Link>
              <p className="mb-6 text-sm sm:text-base text-justify pr-0 sm:pr-5 font-medium text-[#727272]">
                Future IT Touch Pvt. Ltd. is an innovative one-stop Web Solution
                Company in Chandigarh, delivering solutions with customized
                &amp; quality services to businesses globally.
              </p>
              <Link
                href="/contact"
                className="w-full sm:w-auto justify-center btn-main bg-gradient-to-r from-[#673ab7] to-[#2196f3] text-white py-2 px-5 inline-flex items-center rounded-full"
              >
                Become Partner <FaChevronRight className="ml-2" />
              </Link>
            </div>

            {/* Our Links */}
            <div className="hidden md:block lg:w-[15%]">
              <h5 className="mb-4 text-lg sm:text-xl font-bold text-[#3a3a3a]">
                Our Links
              </h5>
              <ul className="space-y-2 text-sm sm:text-base font-medium text-[#727272]">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/why-us">Why Us</Link>
                </li>
                <li>
                  <Link href="/service">Services</Link>
                </li>
                <li>
                  <Link href="/our-team">Our Teams</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="hidden md:block lg:w-[15%]">
              <h5 className="mb-4 text-lg sm:text-xl font-bold text-[#3a3a3a]">
                Company
              </h5>
              <ul className="space-y-2 text-sm sm:text-base font-medium text-[#727272]">
                <li>
                  <Link href="/contact">Get A Quote</Link>
                </li>
                <li>
                  <Link href="/price">Our Pricing Package</Link>
                </li>
                <li>
                  <Link href="/faq">Customer's FAQ</Link>
                </li>
                <li>
                  <Link href="/refund">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/Privacy-Policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/Terms-Conditions">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>

            {/* for mobile  */}
            <div className="grid grid-cols-2 md:hidden">
              {/* Our Links */}
              <div>
                <h5 className="mb-4 text-lg sm:text-xl font-bold text-[#3a3a3a]">
                  Our Links
                </h5>
                <ul className="space-y-2 text-sm sm:text-base font-medium text-[#727272]">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/why-us">Why Us</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>
                  <li>
                    <Link href="/our-team">Our Teams</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h5 className="mb-4 text-lg sm:text-xl font-bold text-[#3a3a3a]">
                  Company
                </h5>
                <ul className="space-y-2 text-sm sm:text-base font-medium text-[#727272]">
                  <li>
                    <Link href="/contact">Get A Quote</Link>
                  </li>
                  <li>
                    <Link href="/price">Our Pricing Package</Link>
                  </li>
                  <li>
                    <Link href="/faq">Customer's FAQ</Link>
                  </li>
                  <li>
                    <Link href="/refund">Refund Policy</Link>
                  </li>
                  <li>
                    <Link href="/Privacy-Policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/Terms-Conditions">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div className="lg:w-[35%]">
              <h5 className="mb-4 text-lg sm:text-xl font-bold text-[#3a3a3a]">
                Contact Us
              </h5>
              <ul className="space-y-4 text-sm sm:text-base font-medium text-[#727272]">
                <li className="flex gap-3">
                  <FaMapPin className="mt-1 shrink-0" />
                  <p>
                    <span className="font-bold">Address:</span> SCO 54-55, 2nd
                    Floor, Near Mukat Hospital, 34A Sector, Chandigarh, 1600022
                  </p>
                </li>
                <li className="flex gap-3 items-center">
                  <FaEnvelope className="shrink-0" />
                  <p>
                    <span className="font-bold">Email:</span>{" "}
                    <a
                      href="mailto:info@futuretouch.in"
                      className="hover:underline"
                    >
                      info@futuretouch.in
                    </a>
                  </p>
                </li>
                <li className="flex gap-3 items-center">
                  <FaPhoneAlt className="shrink-0" />
                  <p>
                    <span className="font-bold">Phone:</span>{" "}
                    <a href="tel:+91-7056937000" className="hover:underline">
                      +91-7056937000
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f9fa] py-7">
        <div className="px-4 sm:px-6 md:px-12  xl:px-28">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-start">
              <h5 className="mb-4 text-xl font-bold text-[#3a3a3a]">
                Top App Development Companies
              </h5>
              <p className="mb-7 font-medium text-[#727272] md:pr-5 lg:pr-40">
                We design and develop custom mobile applications{" "}
                <br className="hidden md:block" />
                for IOS, Android & Hybrid platforms.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <p className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text text-lg">
                  Follow Us :
                </p>
                <Link
                  href="https://www.facebook.com/Futureittouch"
                  target="_blank"
                >
                  <FaFacebookF className="h-7 w-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
                <Link href="https://x.com/futureittouch" target="_blank">
                  <FaTwitter className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
                <Link
                  href="https://in.linkedin.com/company/future-it-touch"
                  target="_blank"
                >
                  <FaLinkedinIn className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
                <Link
                  href="https://www.instagram.com/future_it_touch/"
                  target="_blank"
                >
                  <FaInstagram className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about"
                  target="_blank"
                >
                  <FaYoutube className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
                <Link
                  href="https://github.com/Future-IT-Touch-Private-Limited"
                  target="_blank"
                >
                  <FaGithub className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
              </div>
            </div>

            {/* Right Badges */}
            <div className="lg:w-1/2">
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
                <li>
                  <Link href="#">
                    <Image
                      src="/Assets/badges-a.webp"
                      width={120}
                      height={40}
                      alt="badges"
                      className="w-28 sm:w-32"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/Assets/badges-b.webp"
                      width={120}
                      height={40}
                      alt="badges"
                      className="w-28 sm:w-32"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/Assets/badges-c.webp"
                      width={120}
                      height={40}
                      alt="badges"
                      className="w-28 sm:w-32"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/Assets/badges-d.webp"
                      width={120}
                      height={40}
                      alt="badges"
                      className="w-28 sm:w-32"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 text-center lg:text-start">
            {/* Copyright */}
            <div className="w-full lg:w-2/5">
              <p className="font-medium text-[#727272]">
                Copyright © 2017 Future IT Touch Pvt. Ltd.
              </p>
            </div>

            {/* Location */}
            <div className="w-full lg:w-1/4">
              <p className="flex justify-center lg:justify-start items-center font-medium text-[#727272]">
                Made with <FaHeart className="mx-2 text-red-600" /> in
                Chandigarh
              </p>
            </div>

            {/* Links */}
            <div className="w-full lg:w-1/4">
              <ul className="flex flex-wrap gap-5 justify-center lg:justify-end font-medium text-[#727272]">
                <li>
                  <Link href="/Privacy-Policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/Terms-Conditions">Terms</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
