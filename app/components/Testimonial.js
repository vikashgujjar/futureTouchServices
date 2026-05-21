"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaStar, FaGoogle } from "react-icons/fa";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import GetNewInsight from "./GetNewInsight";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const storedReviews = localStorage.getItem("reviews");
        if (storedReviews) {
          setReviews(JSON.parse(storedReviews));
          setLoading(false);
        }
        const placeId = "ChIJSVD7Y4mDGjkRSnZM3ca4iEE";
        const apiKey = "AIzaSyD-LPUhqM4jZ6O5YVt07jyeEuNOLT5ObIM";
        const response = await axios.get(
          `https://googlemapreviews-1.onrender.com/api/google-reviews`,
          { params: { placeId, apiKey } }
        );
        const fetchedReviews = response.data;
        localStorage.setItem("reviews", JSON.stringify(fetchedReviews));
        setReviews(fetchedReviews);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
        setLoading(false);
      }
    };
    fetchGoogleReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 md:px-12 xl:px-28 bg-gray-50">
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 h-48 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  if (!reviews || reviews.length === 0) {
    return <GetNewInsight />;
  }

  return (
    <>
      <section className="py-20 px-4 sm:px-6 md:px-12 xl:px-28 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: heading + review icons */}
          <div className="lg:col-span-4">
            <span
              className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
              style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
            >
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
              What Our Clients{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
                Say About Us
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Over 1,200+ satisfied clients and growing. Here&apos;s what they
              say about partnering with Future IT Touch.
            </p>

            {/* Rating summary */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl font-extrabold text-gray-900">4.9</span>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">Based on 200+ reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaGoogle className="text-blue-500 w-4 h-4" />
                <span>Verified Google Reviews</span>
              </div>
            </div>

            {/* Platform links */}
            <p className="text-sm font-bold text-gray-700 mb-4">Read More Reviews</p>
            <div className="flex gap-4">
              <Link href="https://g.co/kgs/Xpqu7J" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/Assets/reviews-icon-1.webp"
                  width={70}
                  height={70}
                  alt="Google Reviews"
                  className="w-16 h-auto hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="#" rel="noopener noreferrer">
                <Image
                  src="/Assets/reviews-icon-2.webp"
                  width={70}
                  height={70}
                  alt="Clutch Reviews"
                  className="w-16 h-auto hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="#" rel="noopener noreferrer">
                <Image
                  src="/Assets/reviews-icon-3.webp"
                  width={70}
                  height={70}
                  alt="GoodFirms Reviews"
                  className="w-16 h-auto hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Right: review carousel */}
          <div className="lg:col-span-8">
            <Swiper
              loop={true}
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 1 }, 900: { slidesPerView: 2 } }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="pb-10"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                    {/* Quote icon */}
                    <FaQuoteLeft className="text-violet-200 w-8 h-8 mb-4" />

                    {/* Review text */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 line-clamp-5">
                      {review.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={review.profile_photo_url}
                          width={48}
                          height={48}
                          alt={review.author_name || "user"}
                          className="w-12 h-12 rounded-full object-cover border-2 border-violet-100"
                        />
                        <div>
                          <h5 className="font-bold text-gray-900 text-sm">
                            {review.author_name}
                          </h5>
                          <div className="flex gap-0.5 mt-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-400 w-3 h-3" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <FaGoogle className="text-gray-300 w-5 h-5" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <GetNewInsight />
    </>
  );
};

export default Testimonial;
