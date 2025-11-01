"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import customer from "../Assets/deal.webp";
import computer from "../Assets/computers.webp";
import worker from "../Assets/worker.svg";
import service from "../Assets/customer-service.svg";
import Image from "next/image";

const Counter = () => {
  const [happyClients, setHappyClients] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setHappyClients(450);
      setProjectsDone(48000);
      setHoursWorked(95000);
    }, 1000);
  }, []);

  const stats = [
    {
      img: customer,
      alt: "happy",
      number: <CountUp end={happyClients} />,
      label: "Happy Clients",
    },
    {
      img: computer,
      alt: "project",
      number: <CountUp end={projectsDone / 1000} suffix="k" />,
      label: "Projects Done",
    },
    {
      img: worker,
      alt: "work",
      number: <CountUp end={hoursWorked / 1000} suffix="k" />,
      label: "Hours Worked",
    },
    {
      img: service,
      alt: "support",
      number: (
        <>
          <span>24</span>/<span>7</span>
        </>
      ),
      label: "Support Available",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff6f3] to-[#fffefb] py-10 px-5">
      <div className="grid grid-cols-4 sm:grid-cols-2 md:flex md:flex-wrap gap-8 md:gap-10 justify-evenly max-w-6xl mx-auto">
        {stats.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 text-center sm:text-left"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 p-4 bg-white border-custom flex items-center justify-center rounded-xl shadow-sm">
              <Image src={item.img} width={400} height={400} alt={item.alt} />
            </div>
            <div>
              <div className="text-2xl sm:text-4xl text-[#050748] font-extrabold">
                {item.number}
              </div>
              <p className="text-base sm:text-lg text-[#6a6a8e]">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
