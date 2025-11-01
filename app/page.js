import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Service from "./components/Service";
import WhyChoose from "./components/WhyChoose";
import HelpingBusiness from "./components/HelpingBusiness";
import Testimonial from "./components/Testimonial";
import Forms from "./components/Forms";
import Faq from "./components/Faq";
import DigitalMarketingService from "./components/DigitalMarketingService";
import Heromatterjs from "./components/Heromatterjs";

export default function page() {
  return (
    <div>
      <HeroSection />
      <About />
      <Service />
      <WhyChoose />
      <HelpingBusiness />
      <Heromatterjs />
      <Testimonial />
      <DigitalMarketingService />
      <Faq />
      <Forms />
    </div>
  );
}
