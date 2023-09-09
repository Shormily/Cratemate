import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-950 text-white cursor-pointer pt-2  pb-12 ">
        <div className=" grid lg:grid-cols-4 max-w-[1600px] pt-12 m-auto gap-24  md:grid-cols-2 sm:grid-cols-1 m-auto flex flex-wrap items-center lg:justify-between mx-auto p-8 footer-link
        "
        >
          <div className=" pt-12  ">
            <NavLink as={NavLink} to="/">
              <div className="items-center ">
                <p className="self-center pb-3 logo-weight text-white  text-4xl  whitespace-nowrap ">
                  Cratmate AI
                </p>
                <div>
                  <p className="   ">
                    <span className="font-medium text-neutral-400 mt-3 text-[13px] mb-4">
                      &#169;2023 All right resaved by Cratmate AI Technology
                      Private Limited
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div
                className=" w-full  md:w-auto"
                // id="navbar-default"
              >
                <ul className="font-medium flex   md:p-0 mt-4   md:flex-row  md:mt-0     ">
                  <li className="mt-3">
                    <a
                      href="
                    https://www.linkedin.com/company/cratmateai-technology/
                  "
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in icn"></i>
                    </a>
                  </li>
                  <li className="mt-3">
                    <p>
                      <i className="fa-brands fa-twitter icn  "></i>
                    </p>
                  </li>
                  <li className="mt-3">
                    <a
                      href="
                  https://join.skype.com/invite/u7ajtxSNHAdi"
                      target="_blank"
                    >
                      <i className="fa-brands fa-skype icn"></i>
                    </a>
                  </li>
                  <li className="mt-3">
                    <p>
                      <i className="fa-brands fa-youtube icn "></i>
                    </p>
                  </li>
                </ul>
              </div>
            </NavLink>
    
          </div>
          <div className=" mb-2 pt-12 text-[13px]">
            <p className="hover:text-[#4f46e5] font-normal text-style text-white">
              We are cratemate Ai
            </p>
            <p className="hover:text-[#4f46e5] font-normal text-style text-white">
              What we do
            </p>
            <p className="hover:text-[#4f46e5] font-normal text-style text-white ">
              Press Room
            </p>

            <p className="hover:text-[#4f46e5] font-normal text-style text-white">
              Partners
            </p>
            <p className="hover:text-[#4f46e5] font-normal text-style text-white">
              Join us our team
            </p>
            <p className="hover:text-[#6366f1] font-normal text-style text-white">
              Contact Us
            </p>
          </div>
          <div className="font-normal mb-2 pt-12">
          <a className="font-normal mt-3 text-[13px]" href="#">
            <i className="fa-solid fa-location-dot  icn"></i> Address : Indore
           India
          </a>
          <br/>
          <a className="font-normal text-[13px]" href="#">
          <i className="fa-solid fa-envelope-open-text icn  "></i>Outlook : CratmateAI@outlook.com
          </a>
          <br/>
          <a className="font-normal text-[13px]" href="#">
            <i className="fa-solid fa-envelope   icn"></i> Email :
            cratmateai@gmail.com
          </a>
          </div>

          <div>
            <p className="text-white font-semibold text-2xl mt-8  ">About Our Company</p>
            <p className="font-medium text-neutral-400 mt-3 text-[13px] mb-4">
              Our company is located in different countries, those countries are
              United Kingdom, China, Japan, India, Vietnam.
            </p>
           
            <NavLink  as={NavLink} to="/team">
            <button className="btn-col   text-white  py-3 px-4 rounded-full">
                 Join us our team
               </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
