"use client";
import React, { useState, useEffect } from "react";

export default function CommonSlider() {
 const cards = [
  {
    count: "250+",
    title: "Websites Delivered",
    desc: "Crafting over 250+ stunning websites that captivate and convert, our team ensures every project is visually appealing, user-friendly, and optimized for performance. From small business websites to enterprise-level platforms, we focus on functionality, design excellence, and measurable results that help clients achieve their digital goals.",
    image: "/Assets/team.jpg",
  },
  {
    count: "15+",
    title: "Years of Industry Experience",
    desc: "With over 15 years of hands-on experience, Future IT Touch Pvt. Ltd. delivers expert-driven solutions tailored to client needs. Our deep industry knowledge ensures every project reflects best practices, innovation, and strategic thinking. From startups to global enterprises, our proven expertise helps businesses stay ahead in a rapidly evolving digital landscape.",
    image: "/Assets/team.jpg",
  },
  {
    count: "500+",
    title: "Global Clients Served",
    desc: "Trusted by 500+ clients worldwide, we provide innovative web solutions that empower businesses across industries and geographies. Our global footprint allows us to understand diverse markets and deliver solutions that resonate with local and international audiences, driving measurable growth and long-term success for our clients.",
    image: "/Assets/team.jpg",
  },
  {
    count: "98%",
    title: "Client Satisfaction Rate",
    desc: "Our client-first approach ensures 98% satisfaction, with long-term partnerships built on trust, transparency, and measurable results. We actively collaborate with clients, prioritize open communication, and focus on delivering projects that exceed expectations, making us a trusted partner in their digital transformation journey.",
    image: "/Assets/team.jpg",
  },
  {
    count: "24/7",
    title: "Dedicated Support",
    desc: "We provide round-the-clock technical and creative support, ensuring your digital presence stays seamless, secure, and ahead of the competition. Our dedicated support team is always available to resolve issues, implement updates, and offer proactive guidance so your business never faces downtime or missed opportunities.",
    image: "/Assets/team.jpg",
  },
];
;

  const [open, setOpen] = useState(2); // initial open card
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCard = (index) => {
    if (isMobile) {
      setOpen((prev) => (prev === index ? null : index));
    } else {
      setOpen(index);
    }
  };

  const resetCard = () => {
    if (!isMobile) setOpen(2);
  };

  return (
    <div className="relative px-5 md:px-12 xl:px-28 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
      {/* Heading */}
      <div className="text-3xl md:text-4xl lg:text-5xl text-center  leading-snug text-gray-900 max-w-4xl mx-auto">
        <h5 className="font-extrabold">Build, Engage & Succeed.
</h5>
        <p>Supercharge Your Website's Performance 🤝 With Future it tocuh
</p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center mt-14 gap-6 overflow-x-auto md:overflow-visible">
        {cards.map((card, index) => (
          <div
            key={card.title}
            onMouseEnter={() => !isMobile && toggleCard(index)}
            // onMouseLeave={resetCard}
            onClick={() => isMobile && toggleCard(index)}
            className={`relative rounded-2xl flex-shrink-0  md:min-h-[280px]   p-6 flex flex-col justify-start text-center lg:text-start cursor-pointer border transition-all duration-300 overflow-hidden ${
              open === index
                ? "h-full w-full lg:h-auto md:w-[250px] xl:w-[550px] border-indigo-300 shadow-xl"
                : "h-[70px] md:h-auto border-gray-200 w-full md:w-[70px] lg:w-[140px]  xl:w-[100px] hover:border-indigo-200 hover:shadow-lg"
            }`}
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40 rounded-2xl transition-all duration-300"></div>

            {/* Text Content */}
            <div
              className={`relative  text-white transition-all duration-300 ${
                open === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
                {card.count}
              </h3>
              <h4 className="text-base md:text-lg font-semibold mb-2">
                {card.title}
              </h4>
              <p
                className={`text-sm md:text-base transition-all duration-300 ${
                  open === index
                    ? "line-clamp-none opacity-100"
                    : "line-clamp-3 opacity-0"
                }`}
              >
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
