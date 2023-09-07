// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "animate.css";

// import required modules
import { Navigation } from "swiper/modules";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="  max-w-screen-2xl m-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="grid lg:grid-cols-4 md:grid-cols-3   sm:grid-cols-1   max-w-[1240px] m-auto">
              <div className="lg:col-span-3 md:col-span-3 sm:col-span-1 mx-3 mt-24    ">
                <p className="  pb-8 text-[#1d4ed8]  banner-text text-5xl    animate__animated animate__slideInUp ">
                  We are Cratmate AI
                </p>
                <p className="block w-[75%]  animate__animated animate__slideInUp font-normal  lg:text-[15px] text-semibold md:text-base font-semibold sm:text-base mt-5 mb-2 hero-text">
                  Welcome to Cratmate AI Technology Private Limited, operating
                  as Cratmate AI. We're your go-to destination for a complete
                  "One-Stop Big Data Solution," helping businesses and tech
                  providers transform digitally. Our main goal is to enhance
                  customer experiences, boost operational efficiency, and
                  provide actionable insights. At Cratmate AI, we possess a wide
                  range of capabilities. This includes AI Training Data Set
                  Collection, Premium/Customized Data Collection, and
                  Multilingual Data Collection. Our expertise lies in providing
                  structured data in various formats such as Text, Images,Audio,
                  Video, and Web pages. With our extensive experience in Data
                  Processing Services, we offer a comprehensive set of
                  solutions. This includes Transcription, Data Analysis, Data
                  Mining, Data Labeling/Annotations, Data Design, and Expert
                  Consultation . Our services cater to a variety of industries
                  including automotive, BFSI, consumer packaged goods, hi-tech,
                  e-commerce, engineering R&D, manufacturing, retail, and
                  travel/transportation/hospitality. As the global demand for AI
                  continues to grow, we're confident in delivering top-quality
                  data sets to meet your needs. Since 2015, Cratmate AI has been
                  deeply involved in the Big Data field, drawing on our
                  expertise from over 15 years of experience in Japanese
                  outsourcing. This unique background has enabled us to serve
                  industries such as Japanese Vehicle & Household Appliances
                  with our Big Data Services. Thanks to our professional
                  management approach, stringent quality control, and efficient
                  delivery methods, we stand as a trusted partner in this
                  domain.
                </p>
              </div>
              <div className=" lg:pt-40 md:pt-12 grid grid justify-items-start mb-12   ">
                <img
                  className="w-64  h-64 lg:mt-24 md:mt-2 sm:mt-2 lg:mr-32  lg:mx-2 md:mx-64 animate__animated  animate__flipInY"
                  src="https://i.ibb.co/R2XVz9j/Logo.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid lg:grid-cols-4 md:grid-cols-3  mb-8  sm:grid-cols-1 max-w-[1240px] m-auto  ">
              <div className="lg:col-span-3 md:col-span-3 mb-12 sm:col-span-1 mx-3 mt-24  ">
                <p className=" text-[#1d4ed8] text-5xl banner-text  mb-12  animate__animated animate__slideInUp ">
                  Our Company
                </p>
                <p
                  // className="text-white mt-4  text-base  leading-loose banner-text"
                  className="block w-[75%]  text-slate-950  font-semibold animate__animated animate__slideInUp  font-normal  text-[15px] mt-5 mb-2 "
                >
                  The Cratmate AI – a realm where technology and service
                  intertwine to craft the extraordinary. Nestled in India, our
                  influence spans across the globe, encompassing the United
                  Kingdom, China, Vietnam, and Japan. We proudly stand as a
                  global player in the realm of Information Technology &
                  Services. Our expertise? It revolves around the world of Big
                  Data Services. Our official journey began in 2015, as we
                  stepped into the Big Data landscape armed with 15 years of
                  invaluable Japanese outsourcing experience. This fusion of
                  tried-and-true knowledge with cutting-edge innovation became
                  the bedrock of our enterprise. While our main operational hubs
                  thrive in India and China, our reach knows no bounds. The
                  pivotal Industry Strategic Cooperation Team stationed in
                  Taiwan and the UK empowers us to deftly manage monumental
                  projects with skill and adaptability. Collaboration lies at
                  the core of our DNA. From the bustling streets of Japan to the
                  picturesque landscapes of Taiwan and Europe, our global spirit
                  has forged partnerships with major corporations across
                  continents. Yet, our unwavering commitment to security sets us
                  apart. We meticulously adhere to international regulations,
                  ensuring the utmost protection for your valuable information.
                  Our vigilant watch is 24/7, spanning diverse territories. The
                  moment anything seems amiss, our response is swift. By
                  segmenting workflows, we enhance security further. However, at
                  the heart of it all is your satisfaction. Our guiding
                  principle is "customer first." Mediocrity has no place here.
                  We're on an unending quest for excellence, always striving to
                  exceed your expectations and bring smiles of satisfaction. So,
                  join us on this exhilarating journey at Cratmate AI. Here,
                  technology and service converge to dissolve borders and pave
                  the way for innovative solutions. It's a journey where joy,
                  innovation, and top-notch service are woven into the fabric of
                  our company's identity.
                </p>
              </div>
              <div className="w-64 h-80 lg:mt-40 lg:mt-24 md:mt-2 sm:mt-2 lg:mr-32  lg:mx-2 md:mx-64 ">
                <img
                  className="w-64  h-64 mr-32 lg:mt-24 md:mt-2  sm:mt-2  animate__animated  animate__flipInY "
                  src="https://i.ibb.co/R2XVz9j/Logo.png"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <Testimonial /> */}
    </>
  );
};

export default Hero;
