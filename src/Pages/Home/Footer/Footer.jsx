import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-950 text-white cursor-pointer  pb-4 ">
        <nav className=" border-gray-200 dark:bg-gray-900 pt-2 ">
          {" "}
          <div className="lg:max-w-[1030px] pt-12  md:gap-8 m-auto flex flex-wrap items-center lg:justify-between mx-auto ">
            <NavLink as={NavLink} to="/">
              <div className="items-center ">
                <p className="self-center logo-weight text-white  text-3xl  whitespace-nowrap ">
                  Cratmate AI
                </p>
              </div>
            </NavLink>
            <div
              className=" w-full  md:w-auto"
              // id="navbar-default"
            >
              <ul className="font-medium flex   md:p-0 mt-4   md:flex-row  md:mt-0     ">
                <li className="mt-3">
                  <a   href="
            https://www.linkedin.com/company/cratmateai-technology/
                  " target="_blank">
                    <i className="fa-brands fa-linkedin-in icn"></i>
                  </a>
                </li>
                <li className="mt-3">
                  <p>
                    <i className="fa-brands fa-twitter icn  "></i>
                  </p>
                </li>
                <li className="mt-3">
                  <a  href="
                  https://join.skype.com/invite/u7ajtxSNHAdi" target="_blank">
                  <i className="fa-brands fa-skype icn"></i>
                  </a>
                </li>
                <li className="mt-3">
                  <p>
                    <i className="fa-brands fa-youtube icn"></i>
                  </p>
                </li>
                <NavLink as={NavLink} to="/team">
                  <li className="mt-2">
                    <a>
                      <button className="btn-col  text-white mx-8 py-3 px-4 rounded-full">
                        Join us our team
                      </button>
                    </a>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="lg:max-w-[1030px] grid lg:grid-cols-3   md:grid-cols-2 sm:grid-cols-1 m-auto flex flex-wrap items-center lg:justify-between mx-auto p-8 footer-link
        "
        >
          <div className="">
            <p className="hover:text-[#629dad] font-normal text-style text-white">We are cratemate Ai</p>
            <p className="hover:text-[#629dad] font-normal text-style text-white">What we do</p>
          </div>
          <div className=" mb-2">
            <p className="hover:text-[#629dad] font-normal text-style text-white">Join us our team</p>
            <p className="hover:text-[#629dad] font-normal text-style text-white">Contact Us</p>
          </div>

          <div className=" mb-2">
            {/* <p className="hover:text-[#629dad]">Cratemat AI for Good</p> */}

            <p className="hover:text-gray-950 font-normal text-style text-white ">Press Room</p>
           
            <p className="hover:text-[#629dad] font-normal text-style text-white">Partners</p>
          </div>
        </div>
      </div>
      <div className="w-full text-white mx-w-[1440px]  justify-center items-center  min-h-[60px]  flex  shadow-lg text-[12px]   absolute z-20 text-slate-950  bg-gray-950 ">
        <p className="text-center  mb-4 ">
          <span className="mx-5 font-normal text-style text-white">
            &#169;2023 All Right Resaved by Cratmate AI Technology Private
            Limited
          </span>{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
