import "./Servone.css";
import DoNavbar from "./../DoNavbar/DoNavbar";

const Servone = () => {
  return (
    <>
      <section className="bg-gray-100 pb-8">
        <div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-24 max-w-[1240px] m-auto">
            <div className=" pt-8 px-8 ">
              <p className=" pt-8  text-5xl  font-bold text-gray-950  ">
                Our Services
              </p>
              <p className=" block text-justify   text-slate-950 animate__animated animate__fadeInUp  font-medium text-style text-[15px] mt-5 mb-2 ">
              "Our range of services encompasses a diverse spectrum, including DTP (Desktop Publishing) Service, Data Processing, Image Processing, Software Development, Web Design, E-commerce Platform development, Multilingual Translation, Big Data solutions, Annotation Service, Data Collection, Transcription services, Machine Learning, Artificial Intelligence solutions, and ASR (Automatic Speech Recognition). We pride ourselves on delivering comprehensive solutions that cater to the varied needs of our clients, enabling them to harness the power of cutting-edge technology and data-driven insights."
              </p>
              <div className="flex mb-4 mt-8">
                <h1 className="mt-2 text-[#1d4ed8] font-semibold  text-1xl mx-2">
                  LEARN MORE{" "}
                </h1>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-indigo-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus:ring-cyan-300"
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
            <div
              className="animate__animated animate__fadeInRight
      mt-24 mb-8"
            >
              <div className="flex  mt-8  mb-2 lg:w-full sm:w-96 ">
                <img
                  src="https://i.ibb.co/hm72vSb/CMYK-Blue-LVL-1-OTS-Training-Datasets-png.png"
                  className="w-24 h-24 mx-8 imges"
                  alt=""
                />

                <img
                  src="https://i.ibb.co/nj8prs9/ezgif-com-webp-to-png.png "
                  className="w-24 h-24  imges"
                  alt=""
                />
                <img
                  src="https://i.ibb.co/xJyQx5Y/CMYK-Blue-LVL-1-Big-Data-png.png"
                  className="w-24 h-24 ml-7 imges"
                  alt=""
                />
              </div>

              <div className="flex mt-3 lg:w-full sm:w-96">
                <img
                  src="https://i.ibb.co/dtw6k5X/CMYK-Blue-LVL-1-Crowd-Platform-png.png"
                  className="w-24 h-24 mx-8 imges"
                  alt=""
                />
                <img
                  src="https://i.ibb.co/kJsygZd/CMYK-Blue-LVL-1-Secure-in-Saas-Customer-Internal-Workers-png.png"
                  className="w-24 h-24 imges"
                  alt=""
                />

                <img
                  src="https://i.ibb.co/5RZpzN2/CMYK-Blue-LVL-1-Translate-png.png"
                  className="w-24 h-24 ml-6 imges"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DoNavbar />
    </>
  );
};

export default Servone;
