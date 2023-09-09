import { NavLink } from "react-router-dom";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div id="contact" className="grid lg:grid-cols-3 md:grid-cols-3 gap-8  sm:grid-cols-1 max-w-[1240px] m-auto">
        <div className="mt-12 ">
          <div className="bg-[#EEE]  px-24 pb-24 ">
            <h1 className="text-4xl  pt-24 block text-gray-700  font-semibold mb-2   ">
            Get Consultation
            </h1>
            <p className="mt-6 block text-justify text-slate-900 text-[14px] font-medium mb-2   ">
            If you have any inquiries or require further details regarding our services, please feel free to contact us. Our team is readily available to assist and address any queries you might have.
            </p>
           
          </div>
        </div>

        <div className="lg:col-span-2 md:col-span-2 mx-3  pt-12  animate__animated animate__fadeInRight">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
            <div className=" ">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2">
                First Name :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full ">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2">
                Last Name :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-[-20px]">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2">
                Company Name :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder=""
              />
            </div>
            <div className="w-full mt-[-20px]">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2">
                Job Title :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div className="w-full mt-2  ">
            <label
              className="block text-gray-950 font-medium text-[12px]  mb-2 "
              placeholder="grid-password"
            >
              Email Address :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder=""
            />
          </div>
          <div className="w-full mt-2 ">
            <label className="block text-gray-950 font-medium text-[12px]  mb-2 ">
              Phone Number :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder=""
            />
          </div>
          <div className="w-full mt-2 ">
            <label className="block text-gray-950 font-medium text-[12px]  mb-2">
              Tell us a bit about your project:
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 pb-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder=""
            />
            <div className="flex mb-8 max-w-[50px]  m-auto ">
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
              <h1 className="mt-2 text-[#1d4ed8] font-semibold">Submit</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
