import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import PortfolioMarquee from "./components/PortfolioMarquee";
import Service from "./components/Service";
import WhyChoose from "./components/WhyChoose";
import ProcessSteps from "./components/ProcessSteps";
import HelpingBusiness from "./components/HelpingBusiness";
import Heromatterjs from "./components/Heromatterjs";
import Testimonial from "./components/Testimonial";
import DigitalMarketingService from "./components/DigitalMarketingService";
import Faq from "./components/Faq";
import Forms from "./components/Forms";

export default function page() {
  return (
    <div>
      <HeroSection />
      <About />
      <PortfolioMarquee />
      <Service />
      <WhyChoose />
      <ProcessSteps />
      <HelpingBusiness />
      <Heromatterjs />
      <Testimonial />
      <DigitalMarketingService />
      <Faq />
      <Forms />
    </div>
  );
}
