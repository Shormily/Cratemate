import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
// const animation = { duration: 20000, easing: (t) => t };
const Testimonial = () => {
  const [sliderRef] = useKeenSlider({
    // loop: true,
    // mode: "free",
    // created(s) {
    //   s.moveToIdx(5, true, animation);
    // },
    // updated(s) {
    //   s.moveToIdx(s.track.details.abs + 5, true, animation);
    // },
    // animationEnded(s) {
    //   s.moveToIdx(s.track.details.abs + 5, true, animation);
    // },
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 390px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 360px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 820px)": {
        slides: { perView: 2, spacing: 5 },
      },

      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 696px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1850px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1784px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1656px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1430px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1400px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1120px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
  });

  const services = [
    {
      name: " Data Collection",
      img: "https://i.ibb.co/vJCc31s/230624-Whitehouse-AI-V5-Blog-jpg.png",
      description:
        "The White House’s Artificial Intelligence voluntary safety commitments.",
    },
    {
      name: "Data Processing",
      img: "https://i.ibb.co/GThDj79/230616-The-Riseof-AI-Blog-979x514-jpg.png",
      description:
        "How Artificial Intelligence is Transforming Our Everyday Lives for the Better ",
    },
    {
      name: "Data Analysis",
      img: "https://i.ibb.co/9nLwLq7/230602-Biased-LLM-Blog-jpg.webp",
      description:
        "Unraveling the Link Between Translations and Gender Bias in LLMs",
    },

    {
      name: "Quality control",
      img: "https://i.ibb.co/M9NBgYh/NLP-2-1-979x514.png",
      description:
        "Natural Language Processing – Connecting The World through Language With AI",
    },
    {
      name: "Android",
      img: "https://i.ibb.co/TT3sBzg/230413-Workflows-Blog-979x514.jpg",
      description:
        "Enhancing AI Efficiency: Streamlining AI Training Data with Workflows ",
    },
  ];
  return (
    <>
      <div className="mx-5 mt-12">
        <div className="row mb-5 mt-5 bg-[#629dad] max-w-[1240px] m-auto">
          <h1 className="text-styles text-center text-white pt-5  text-4xl ">
            Trusted by Global Leaders
          </h1>
          <div className="grid p-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  pb-8">
            <div className="">
              {" "}
              <img
                src="https://i.ibb.co/2SGyzwJ/Google-HP-White-Logo-png.png"
                alt=""
                className="w-32 h-24"
              />{" "}
            </div>
            <div className="">
              {" "}
              <img
                src="https://i.ibb.co/cv2yVSt/LOGO-1.png"
                alt=""
                className="mt-7"
              />{" "}
            </div>
            <div className="">
              {" "}
              <img
                src="https://i.ibb.co/FzkMGN7/Linked-In-HP-White-Logo-300x182-1-png.png"
                alt="Linked-In-HP-White-Logo-300x182-1-png"
                className="w-32 h-24"
              />{" "}
            </div>
            <div className="">
              {" "}
              <img
                src="https://i.ibb.co/CVhhh6W/Microsoft-HP-White-Logo-png.png"
                alt=""
                className="w-32 h-24"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5">
        <h1 className="text-styles max-w-[1190px]  m-auto text-gray-600 pt-5  text-4xl ">
          Resources
        </h1>
        <div ref={sliderRef} className="keen-slider max-w-[1190px] m-auto">
          {services.map((service) => (
            <>
              <div className=" mb-3  pt-3 mb-5 keen-slider__slide number-slide2 ">
                <div className=" rounded-5">
                  <div className="">
                    <div className="">
                      <img
                        className=" rounded-5 h-48 w-80"
                        src={service.img}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="block text-orange-600  font-semibold mb-2 mt-3  ">
                      Blog
                    </h4>
                    <p className="block text-gray-700 text-[15px] font-semibold mb-2 w-64 ">
                      {service.description}
                    </p>

                    <p className=" text-[13px] flex">
                      Read More{" "}
                      <AiOutlineDoubleRight size={15} className="mx-1 mt-1" />
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="max-w-[1200px] m-auto mt-8 mb-8">
          <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0">
              View All Resource
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
