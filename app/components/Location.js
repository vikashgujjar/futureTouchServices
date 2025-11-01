"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SwiperLocation.module.css";

function Location() {
  const locations = [
    {
      country: "India",
      office: "Chandigarh Head Office",
      address:
        "SCO 54-56, 2nd Floor, Near Mukat Hospital, 34A Sector, Chandigarh, 1600022",
      image: "/chandigarh.webp",
      alt: "Chandigarh Office",
      email: "info@futuretouch.in",
      phone: "+91-7056937000",
      phoneHref: "tel:+91-7056937000",
    },
    {
      country: "India",
      office: "Bangalore Branch Office",
      address:
        "59, 2nd Floor, Paramahansa Yogananda Rd, Indiranagar, Bengaluru, Karnataka 560038",
      image: "/banglore.webp",
      alt: "Bangalore Office",
      email: "info@futuretouch.in",
      phone: "+91-8050080035",
      phoneHref: "tel:+91-8050080035",
    },
    {
      country: "India",
      office: "Gujarat Head Office",
      address:
        "B-1307-1308,13th Floor, IT Park, Digital Valley, Mota Varachha, Surat, Gujarat 394105",
      image: "/surat-location.webp",
      alt: "Gujarat Office",
      email: "info@futuretouch.in",
      phone: "+91-7056937000",
      phoneHref: "tel:+91-7056937000",
    },
    {
      country: "United States",
      office: "Texas Branch Office",
      address: "1400 Avery Ranch Blvd, Ste C200 Austin, Texas-78717",
      image: "/texas.webp",
      alt: "Texas Office",
      email: "info@futuretouch.in",
      phone: "+1-5126406568",
      phoneHref: "tel:+1-5126406568",
    },
    {
      country: "United Arab Emirates",
      office: "Dubai Branch Office",
      address:
        "RAKEZ Compass Al Shohada Road Al Hamra Industrial Zone - FZ - Ras Al Khaimah",
      image: "/dubai-location.webp",
      alt: "Dubai Office",
      email: "info@futuretouch.in",
      phone: "+971-58559552",
      phoneHref: "tel:+97158559552",
    },
  ];

  return (
    <>
      {/* Heading */}
      <div className="bg-[#ffecec] shadow-location mx-4 md:mx-20 lg:mx-44 mt-10 py-6 text-center rounded-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#050748]">
          Our Office Locations
        </h2>
      </div>

      {/* Swiper for cards */}
      <div className="px-5 md:px-12 xl:px-28 my-10">
        <Swiper
          // loop={true}
          className={styles.swiper}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {locations.map((loc, idx) => (
            <SwiperSlide key={idx} className={styles["swiper-slide"]}>
              <div
                className={`p-5 bg-white border-b-4 border-b-[#b0bdff] rounded-lg shadow-location ${styles.card}`}
              >
                <div className="bg-[#fbfbfb] text-center">
                  <Image
                    src={loc.image}
                    width={400}
                    height={400}
                    alt={loc.alt}
                    className="w-full h-52 object-cover rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-bold text-[#050748]">
                    {loc.country}
                  </h4>
                  <h6 className="mt-1 text-base font-semibold text-[#050748]">
                    {loc.office}
                  </h6>
                  <p className="text-sm text-[#6a6a8e] mt-3">{loc.address}</p>
                  <ul className="text-sm text-[#6a6a8e] mt-4 space-y-2">
                    <li>
                      <Link
                        href={`mailto:${loc.email}`}
                        className="flex items-center gap-2"
                      >
                        <FaEnvelope /> {loc.email}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={loc.phoneHref}
                        className="flex items-center gap-2"
                      >
                        <FaPhoneAlt /> {loc.phone}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Location;
