import Image from "next/image";
import devops from "../Assets/app-develops.webp";
import service1 from "../Assets/mob-1.webp";
import service2 from "../Assets/mob-2.webp";
import service3 from "../Assets/mob-3.webp";
import service4 from "../Assets/mob-4.webp";
import { FaAngleRight, FaChevronRight, FaDotCircle } from "react-icons/fa";
import ChooseFuture from "../components/ChooseFuture";
import Counter from "../components/Counter";
import GetNewInsight from "../components/GetNewInsight";
const MobileApp = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-sm:text-2xl max-lg:text-xl">
              WEBSITE, MOBILE APP & DIGITAL MARKETING SERVICES
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify max-lg:text-base">
              <p>
                We are a full-stack Branding, Website Development, App
                Development, Digital marketing and web designing company in
                Chandigarh with all the expertise you need to build a
                successful, stable and scalable product. We follow our tried and
                tested processes that ensures that the product is a marketfit,
                and hence your marketing and technology partner.{" "}
                <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-hue">
                  Future IT Touch Pvt. Ltd.
                </span>
                mobile app development & website design company in India offers
                a comprehensive range of digital solutions for all your online
                business needs. Our bouquet of services includes web design and
                development, mobility solutions, digital marketing, and
                corporate branding solutions. With our team of 50+ designers,
                developers, content writers, and marketing experts, we have been
                serving a global clientele in 3+ countries since 2017.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </a>
              <a
                href="tel:+917056937000"
                className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading "
              >
                Call us - 7056937000
              </a>
            </div>
          </div>
        </div>
      </div>

      <Counter />

      <div className="bg-gradient-to-b from-[#fff6f3] to-[#fffefb] py-20 px-5 md:px-12 xl:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="p-4 md:col-span-4 flex justify-center lg:justify-start">
            <Image
              src={devops}
              width={400}
              height={400}
              alt="Mobile app development illustration"
              className="w-full max-w-md rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="md:col-span-8">
            <span className="text-lg text-[#e60072] uppercase font-semibold">
              Overview
            </span>
            <h3 className="text-3xl lg:text-4xl text-[#050748] font-bold mt-4 max-sm:text-2xl">
              Custom Mobile App Solutions
            </h3>

            <p className="text-lg lg:text-xl text-[#6a6a8e] text-justify mt-5 max-w-4xl">
              Our team has a decade-long experience in custom mobile application
              development spanning multiple industries from retail to healthcare
              and energy. We dive into your business ecosystem, explore the
              market, and understand your requirements and capabilities. We
              build a truly custom strategy to unlock the full potential of
              mobile technology for your company.
            </p>

            <p className="text-lg lg:text-xl text-[#6a6a8e] text-justify mt-5 max-w-4xl">
              We provide custom mobile app development services, including
              expert business analysis, design and development of your mobile
              application from idea to launch, integrating the new product into
              your infrastructure, and providing further optimization and
              scale-up on demand.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 max-sm:px-5 md:px-12 xl:px-28 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 lg:gap-20">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <h4 className="text-4xl max-sm:text-2xl max-md:text-3xl font-bold mb-3 text-[#050748]">
              Get a Complete Strategy of Mobile App Development
            </h4>
            <p className="mb-6 text-xl font-semibold text-[#050748] max-sm:text-lg">
              Hire Expert Cross Platform Mobile App Developers to Boost Your
              Business
            </p>

            <div className="text-[17px] text-justify text-[#6a6a8e] max-sm:text-base">
              <p className="mb-5">
                Communication has become faster with React Native & Swift as
                mobile apps are visually appealing, interactive, and easily
                integrated with other mobile features. Smartphones have
                transformed daily life, with more users accessing information
                via mobiles, tablets, and wearables. People rely on mobile apps
                for data management, online shopping, socializing, navigation,
                and more.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <ul className="font-semibold list-disc pl-5 space-y-2">
                  <li>800+ Mobile Apps Delivered</li>
                  <li>200+ Team Strength</li>
                  <li>User-Friendly Interface</li>
                </ul>
                <ul className="font-semibold list-disc pl-5 space-y-2">
                  <li>400 Happy Clients</li>
                  <li>95% Repeat Business</li>
                  <li>Quality Service UX</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 mt-10 lg:mt-0">
            <p className="mb-6 text-2xl font-bold text-[#050748] max-sm:text-xl">
              Advantages of Mobile App Development
            </p>

            <ul className="text-lg sm:text-xl text-[#6a6a8e] list-none space-y-3">
              {[
                "Substitution of Traditional Method of Market",
                "An effective way of Branding and engaging the audience",
                "Reduction in cost and raises standards",
                "Increase in Revenue",
                "Gives more value to customers",
                "24*7 support facility",
                "Feasible and Convenient",
                "Secured from vulnerable attacks",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <FaDotCircle className="text-[#f92c8b] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="/contact">
              <button className="bg-gradient-to-r from-[#f92c8b] to-[#b02cd6] flex justify-center items-center mt-7 text-white px-6 py-4 text-base font-semibold rounded-full hover:opacity-90 transition">
                Request A Quote <FaAngleRight className="ml-2" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <section className="service-section py-20 bg-gray-50">
        <div className="flex justify-center px-5">
          <div className="w-full lg:w-8/12 text-center">
            <span className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#e60072] uppercase">
              Our Services
            </span>
            <h2 className="text-base sm:text-lg md:text-xl mt-4 mb-8 text-[#6a6a8e]">
              We think big and have hands in all leading technology platforms to
              provide you wide array of services.
            </h2>
          </div>
        </div>

        <div className="grid gap-8 px-5 sm:px-10 lg:px-32 grid-cols-1 md:grid-cols-2 my-10">
          {[
            {
              img: service1,
              title: "IOS App Development",
              desc: "We provides cutting-edge mobile app development services to turn your dreams of a business app into reality. We have a proficient team for custom iOS app development.",
              bg: "bg-[#e9ddff]",
            },
            {
              img: service2,
              title: "Android App Development",
              desc: "Powering 2 Billion mobile devices across the globe, Android inevitably stands out as one of the most sought-after platforms for mobile app development.",
              bg: "bg-[#ffdadb]",
            },
            {
              img: service3,
              title: "Cross Platform App Development",
              desc: "Need an app for your business that can run seamlessly across Android and iPhone yet limited by budget constraints?",
              bg: "bg-[#d6edff]",
            },
            {
              img: service4,
              title: "Mobile App Testing",
              desc: "We at Future IT Touch Pvt. Ltd. Technologies provide web development solutions to clients. We happen to be a privately managed software company.",
              bg: "bg-[#ffede1]",
            },
          ].map((service, idx) => (
                    <div className=" w-full  mb-8 md:mb-0">
            <div className={`flex max-sm:block ${service.bg}   rounded-lg shadow-lg py-7 px-5 gap-3`}>
              <div className="w-full">
                <Image src={service.img} alt={service.title} width={200} height={200} className="max-sm:mx-auto max-sm:mb-4"  />

              </div>
              <div className="text-[#6a6a8e]">
                <h4 className="text-2xl font-bold mb-3 text-[#050748]">
                {service.title}
                </h4>
                <span className="text-lg max-sm:text-justify">
                  {service.desc}
                </span>
              </div>
            </div>
          </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-16 px-5">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">
            Hire a <span className="font-bold">Dedicated Developer</span>
          </h3>
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center border-2 border-black text-black px-8 py-2 font-poppins text-base bg-white shadow-md rounded-full hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white transition"
          >
            Hire Now <FaAngleRight className="ml-2" />
          </a>
        </div>
      </section>

      <ChooseFuture />

      <GetNewInsight />
    </>
  );
};

export default MobileApp;
