import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
const Contacts = () => {
  return (
    <>
    <Navbar/>
  

    <h1 className=" pt-8  text-4xl text-center     text-styles">Contact Us</h1>
    <p className=" block text-[14px] mt-5 pb-8 text-center  banner-text mb-2 leading-loose text-gray-500 cont-pra">If you want to know anything about our company, please contact us. We are always happy to<br/> answer all questions.</p>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8  sm:grid-cols-1 max-w-[1240px] m-auto ">
        <div className="  ">
        <div className="bg-[#EEE]   px-32 pb-32 ">
            <h1 className="text-4xl heading pt-24 block text-gray-700  font-semibold mb-2  cont-pra ">
              Request a
              <br />
              Consult
            </h1>
            <p className="mt-6 block text-gray-700 text-[12px] font-semibold mb-2  cont-pra ">
              If you have any questions or would like more information about our
              services, please don’t hesitate to reach out. Our team is here to
              help and answer any questions you may have.
            </p>
            <NavLink as={NavLink} to="/team">
              {" "}
              <p className="mt-6 text-[13px] cont-pra text-red-600 cursor-pointer">
                Interested in joining our team ? Click Here
              </p>
            </NavLink>
            <p className="mt-8 cont-pra  cursor-pointer pb-32">
              <span className="mx-3 testimonials "></span>Request a consult
            </p>
          </div>
        </div>

        <div className=" pt-12 cont-pra mx-12">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
            <div className=" ">
              <label className="block text-gray-700 text-[12px] font-semibold mb-2">
                First Name :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full ">
              <label className="block text-gray-700 text-[12px] font-semibold mb-2">
                Last Name :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-[-20px]">
              <label className="block text-gray-700 text-[12px] font-semibold mb-2">
                Company Name :
              </label>
              <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                placeholder=""
              />
            </div>
            <div className="w-full mt-[-20px]">
              <label className="block text-gray-700 text-[12px] font-semibold mb-2">
                Job Title :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div className="w-full mt-2  ">
            <label
              className="block text-gray-700 text-[12px] font-semibold mb-2 "
              placeholder="grid-password"
            >
              Email Address :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder=""
            />
          </div>
          <div className="w-full mt-2 ">
            <label className="block text-gray-700 text-[12px] font-semibold mb-2 ">
              Phone Number :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder=""
            />
          </div>
          <div className="w-full mt-2 ">
            <label className="block text-gray-700 text-[12px] font-semibold mb-2">
              Tell us a bit about your project:
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 pb-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder=""
            />
            <div className="flex mb-4">
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
              <h1 className="mt-2 text-[#DC3318] font-black">Submit</h1>
            </div>
          </div>
        </div>
      </div>

    <Testimonials/>
    </>
  );
};

export default Contacts;
