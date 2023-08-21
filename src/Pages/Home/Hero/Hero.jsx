import Card from "../Card/Card";
import Testimonial from "../Testimonial/Testimonial";

import Testimonials from "../Testimonials/Testimonials";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="banner ">
        <div>
 <div  className="max-w-[1240px] m-auto pt-32  px-8 " >
          <p className="text-white  text-6xl    ">
            <span>Cratmate AI</span>
            <br />
            <span className="pt-4 text-5xl">Technology </span>
          </p>
          <p
            // className="text-white mt-4  text-base  leading-loose banner-text"
            className="block text-white text-[12px] banner-text mt-5 mb-2 leading-loose"
          >
            On-demand Premium Data Collection, Multilingual languages & <br />
            Annotation Services for AI & ML, IT Services and IT Consulting,
            Delhi
          </p>
        </div>
        </div>
       
      </section>
   
   
   
   
      
   
      <h1 className="mx-5  pt-[35px] pb-4 text-4xl text-center  text-style">About Us Our Company </h1>
     
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-12  max-w-[1240px] m-auto pt-8 px-8 ">
        
        
        <div > 
          <img
            src="https://i.ibb.co/yFnJMwn/ezgif-com-webp-to-jpg-1.jpg"
            className="w-96 mt-5"
            alt=""
          />
        </div>
        <div className="">
        
          <p className="block text-gray-700 text-[12px] font-semibold mb-2 p-5 cont-pra">
            Cratmate AI Technology Private Limited operates as Cratmate AI,
            offering a comprehensive "One-Stop Big Data Solution" to facilitate
            digital transformation for enterprises and technology providers. Our
            primary focus is to deliver seamless customer experiences, improve
            business efficiency, and provide actionable insights. At Cratmate
            AI, we possess a range of capabilities, including AI Training Data
            Set Collection, Premium/Customized Data Collection, and Multilingual
            Data Collection. We specialize in providing standardized and
            structured data associated with various formats such as Text,
            Images, Audio, Video, and Web pages. With extensive experience in
            Data Processing Services, we offer a wide array of services,
            including Transcription, Data Labeling/Annotations, Data Analysis,
            Data Mining, Data Design, and Expert Consultation. Our services
            cater to diverse industry sectors, such as automotive, BFSI,
            consumer packaged goods, e-commerce, engineering R&D, hi-tech,
            manufacturing, retail, and travel/transportation/hospitality. As the
            global adoption of AI continues to expand, we are confident in our
            ability to fulfill your requirement for top-quality data sets. Since
            2015, Cratmate AI has been officially engaged in the Big Data
            domain, leveraging our expertise from over 15 years of experience in
            Japanese outsourcing. This has enabled us to serve industries like
            Japanese Vehicle & Household Appliances with Big Data Services,
            thanks to our professional manager methodology, high-quality control
            system, and efficient delivery. If you have any inquiries,
            suggestions, or specific needs, please do not hesitate to reach out
            to us. We are dedicated to providing wholehearted service.<br/> Operating
            hours: 08:00 AM ~ 5:00 PM IST (India Time)
          </p>
        </div>
      </div>

      
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 max-w-[1240px] m-auto bg-[#629dad]">
        <div className="pt-48">
          <h1 className="text-styles px-12 text-white  text-4xl ">
            Our AI Training Specialists
          </h1>
          <p  className="block text-white text-[13px] mt-5 cont-pra font-semibold mb-2 px-12 leading-loose">
            <span className="text-gray-950">Domain /Experts  </span> <span className="text-gray-700"> | </span>  Curated Crowd <span className="text-gray-700"> | </span> Global Crowd</p>
          <p className="block text-white text-[13px] mt-5 cont-pra font-semibold mb-2 px-12 leading-loose">
            Having access to domain experts can provide invaluable insights and
            knowledge specific to the industry or niche, which can greatly
            enhance the effectiveness of a large language model. We support
            domains such as math, science, humanities, finance, law, coding,
            counseling, healthcare, creative writing and more!{" "}
          </p>

          <p className="block text-gray-800 mb-8  cont-pra font-semibold mb-2 px-12 leading-loose">
            LEARN MORE
          </p>
        </div>

        <div className="video">
          <video
            src="https://s41256.pcdn.co/wp-content/uploads/2023/05/OurCrowd_VideoModule_V3_3.mp4"
            autoPlay
            loop
            muted
            className="video-container  h-68"
          ></video>

          <div className="mb-64 p-5 cont-pra text-white text-center texteras ">
            <h1 className=" text-2xl ">1M+ contributors in 170+</h1>
            <p>
              provide solutions for real world scenarios, and efficiently
              measure and monitor the performance of your model to
            </p>
          </div>
        </div>
      </div>
      <p className="text-styles text-center text-gray-600 pt-5 pb-12 text-4xl mt-12">
        What We Do
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols1 max-w-[1200px] m-auto cont-pra">
      <div  >
   <div className="text center">
          <h1 className="text-center pr-24 text-2xl text-gray-600">
            AI INNOVATION
          </h1>
          <p className="block text-gray-700 text-[12px] font-semibold mb-2 p-5">
            We’ve powered innovative AI applications for global brands like
            Microsoft, Amazon, Google, Pinterest, Salesforce, Oracle, Adobe,
            BestBuy and more, for 26+ years. With extensive experience in model
            tuning, validation, and benchmarking, we ensure enterprise AI models
            enhance customer experience.
          </p>
          <div className=" pr-24 flex flex-col items-center justify-center mb-5">
            <button className="btn-col  text-white mx-8 py-3 px-4 rounded-full">
              Learn More
            </button>
          </div>
        </div>
     </div>
     <div  >
     <div className="text center">
          <h1 className="text-center pr-24 text-2xl text-gray-600">
            OUR EXPERTISE
          </h1>
          <p className="block text-gray-700 text-[12px] font-semibold mb-2 p-5">
            Our truly full-stack suite of cutting-edge data tools and services
            provide fast and easy solutions for enterprises worldwide. We adapt
            base models, provide solutions for real world scenarios, and
            efficiently measure and monitor the performance of your model to
            mitigate risks of hallucination, bias, and toxicity.
          </p>
          <div className=" pr-24 flex flex-col items-center justify-center mb-5">
            <button className="btn-col  text-white mx-8 py-3 px-4 rounded-full">
              Learn More
            </button>
          </div>
        </div>
     </div>
       
      </div>
      <Testimonial />
    </>
  );
};

export default Hero;
