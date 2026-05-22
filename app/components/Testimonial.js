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

const dummyReviews = [
  {
    author_name: "Rajesh Sharma",
    rating: 5,
    role: "CEO, TechCorp India",
    text: "Future IT Touch delivered our e-commerce platform ahead of schedule. The UI is stunning, performance is top-notch, and their support team is incredibly responsive. Highly recommend for any web project.",
    profile_photo_url: "https://ui-avatars.com/api/?name=Rajesh+Sharma&background=7c3aed&color=fff&size=96",
  },
  {
    author_name: "Priya Mehta",
    rating: 5,
    role: "Product Manager, AppVentures",
    text: "We hired Future IT Touch for our mobile app and they exceeded every expectation. The design is beautiful and the app works flawlessly on both iOS and Android. Professional team with great communication.",
    profile_photo_url: "https://ui-avatars.com/api/?name=Priya+Mehta&background=4f46e5&color=fff&size=96",
  },
  {
    author_name: "James Wilson",
    rating: 5,
    role: "Marketing Director, GrowthLabs",
    text: "Outstanding digital marketing results! Our SEO rankings jumped significantly within 3 months. The team is transparent, data-driven, and truly understands modern marketing strategies.",
    profile_photo_url: "https://ui-avatars.com/api/?name=James+Wilson&background=7c3aed&color=fff&size=96",
  },
  {
    author_name: "Anjali Kapoor",
    rating: 5,
    role: "Founder, StyleBrand",
    text: "The website redesign was absolutely brilliant. Clean, modern, and perfectly aligned with our brand identity. Our conversion rate improved by 40% after launch. Couldn't be happier!",
    profile_photo_url: "https://ui-avatars.com/api/?name=Anjali+Kapoor&background=6d28d9&color=fff&size=96",
  },
  {
    author_name: "Michael Chen",
    rating: 5,
    role: "CTO, ScaleUp Solutions",
    text: "Working with Future IT Touch was seamless from start to finish. They understood our requirements precisely and delivered a robust backend that handles thousands of daily users effortlessly.",
    profile_photo_url: "https://ui-avatars.com/api/?name=Michael+Chen&background=4338ca&color=fff&size=96",
  },
  {
    author_name: "Sunita Verma",
    rating: 5,
    role: "Founder, SaaS Platform",
    text: "Exceptional Laravel development! They built our SaaS platform from scratch with clean code, proper documentation, and excellent scalability. The team is truly world-class and very professional.",
    profile_photo_url: "https://ui-avatars.com/api/?name=Sunita+Verma&background=7c3aed&color=fff&size=96",
  },
];

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
        const fetched = response.data;
        localStorage.setItem("reviews", JSON.stringify(fetched));
        setReviews(fetched);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    fetchGoogleReviews();
  }, []);

  const displayReviews = reviews && reviews.length > 0 ? reviews : dummyReviews;

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 md:px-12 xl:px-28 bg-gradient-to-br from-slate-100 via-violet-50 to-indigo-50/30">
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 h-52 bg-white/60 rounded-2xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-24 px-4 sm:px-6 md:px-12 xl:px-28 bg-gradient-to-br from-slate-100 via-violet-50 to-indigo-50/30 relative overflow-hidden">
        {/* Decorative blobs — same as WhyChoose */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          {/* ── Top: heading + stats strip ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
            {/* Heading */}
            <div>
              <span
                className="text-4xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text tracking-widest block mb-2"
                style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
              >
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
                What Our Clients{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Say About Us
                </span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mt-4 max-w-lg">
                Over 1,200+ satisfied clients and growing. Here&apos;s what they
                say about partnering with Future IT Touch.
              </p>
            </div>

            {/* Rating + platform block */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Score card */}
              <div className="flex-1 bg-white border border-violet-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex flex-col items-center justify-center shadow-md shrink-0">
                  <span className="text-white font-extrabold text-lg leading-none">4.9</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-300 w-2 h-2" />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Excellent Rating</p>
                  <p className="text-gray-400 text-xs mt-0.5">Based on 200+ reviews</p>
                  <div className="flex items-center gap-1 mt-1.5">
                    <FaGoogle className="text-[#4285F4] w-3 h-3" />
                    <span className="text-xs text-gray-500">Google Verified</span>
                  </div>
                </div>
              </div>

              {/* Platform icons */}
              <div className="bg-white border border-violet-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Also on</p>
                <div className="flex gap-2">
                  {[
                    { src: "/Assets/reviews-icon-1.webp", alt: "Google", href: "https://g.co/kgs/Xpqu7J" },
                    { src: "/Assets/reviews-icon-2.webp", alt: "Clutch", href: "#" },
                    { src: "/Assets/reviews-icon-3.webp", alt: "GoodFirms", href: "#" },
                  ].map((p) => (
                    <Link key={p.alt} href={p.href} target="_blank" rel="noopener noreferrer"
                      className="bg-gray-50 border border-gray-100 rounded-xl p-1.5 hover:border-violet-200 hover:shadow-sm transition-all duration-200"
                    >
                      <Image src={p.src} width={40} height={40} alt={p.alt} className="w-10 h-auto" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Review cards carousel ── */}
          <Swiper
            loop={true}
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
            navigation={false}
          >
            {displayReviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white border border-gray-100 hover:border-violet-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-violet-100/60 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  {/* Quote + stars */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 border border-violet-200 flex items-center justify-center">
                      <FaQuoteLeft className="text-violet-500 w-4 h-4" />
                    </div>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 w-3.5 h-3.5" />
                      ))}
                    </div>
                  </div>

                  {/* Review text */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Gradient divider */}
                  <div className="h-px bg-gradient-to-r from-violet-200 via-indigo-100 to-transparent mb-4" />

                  {/* Author row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <Image
                          src={review.profile_photo_url}
                          width={42}
                          height={42}
                          alt={review.author_name || "reviewer"}
                          className="w-11 h-11 rounded-full object-cover ring-2 ring-violet-100"
                        />
                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm leading-none">
                          {review.author_name}
                        </h5>
                        <p className="text-gray-400 text-xs mt-1">
                          {review.role || "Verified Client"}
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                      <FaGoogle className="text-[#4285F4] w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
