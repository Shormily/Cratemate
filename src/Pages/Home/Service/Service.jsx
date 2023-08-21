import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import Servone from "../Servone/Servone";
import Testimonials from "../Testimonials/Testimonials";

const About = () => {
  const services = [
    
    {
      name: "Data Processing",
      img: "https://i.ibb.co/GdzYH5Z/360-F-319185062-p-VXXVg-Feg-Roi-CXPG8-Fvv-A9hz-S9kygc-ML.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
    },
    {
        name: " Data Collection",
        img: "https://i.ibb.co/TcwyLM8/3732447-200.png",
        description:
          "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
      },
    {
      name: "Data Analysis",
      img: "https://i.ibb.co/M79Tbbf/istockphoto-1249867007-612x612.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
    },

    {
      name: "Quality control",
      img: "https://i.ibb.co/NFHRNpC/4862471.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
    },
    
    
    {
      name: "Android",
      img: "https://i.ibb.co/YcZBL5N/png-transparent-computer-icons-android-icon-design-android-logo-fictional-character-black-removebg-p.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
    },
    {
        name: "E Commerce",
        img: "https://i.ibb.co/KDmKTVG/images-1.png",
        description:
          "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
      },
  
    {
      name: "Transcription",
      img: "https://i.ibb.co/JngRHTc/intervenciones.png",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
    },
    {
        name: "Web development",
        img: "https://i.ibb.co/TkpG7ZH/images-3.png",
        description:
          "Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices lorem is the suspendisse vel Lorem ipsum dolor sit amet consectetur. Massa in enim amet ultrices suspendisse vel.",
      },
   
  ];
  return (
    <>
      <Navbar />
      <Servone/>
      <Card/>
     
      <div className=" mt-4 cont-pra bg-gray-50">
        <div className="">
          <div className="  ">
            <h1 className="text-dark text-center pt-4 text-3xl">Our Services</h1>

            <div className="grid lg:grid-cols-8   md:grid-cols-2 grid-cols-1 max-w-[1200px] m-auto w-full px-4 py-8 gap-12 sm:items-center ">
              {services.map((service) => (
                <>
                  <div className="  max-w-sm rounded overflow-hidden shadow-lg sm:col-span-2 col-span-2 row-span-2 w-full bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <img
                      className="w-full h-48 p-8  "
                      src={service.img}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {service.name}
                      </div>
                      <p className="text-gray-700 text-[13px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <button
                        type="button"
                        className="text-white bg-[#DC3318] hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium  text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus:ring-cyan-300"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>


      <Testimonials/>
    </>
  );
};

export default About;
