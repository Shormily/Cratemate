// import React from "react";
// import logos from "../assets/images/logos.png";
// import { FiFacebook } from "react-icons/fi";
// import { Input } from "antd";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-950 text-white cursor-pointer  pb-8 ">
        <nav className=" border-gray-200 dark:bg-gray-900 ">
          <div className="lg:max-w-[1030px]  md:gap-8 m-auto flex flex-wrap items-center lg:justify-between mx-auto p-4">
            <div className=" items-center px-5">
              <img
                src="https://i.ibb.co/Vt4MZgT/logoe.png"
                className="h-10 mx-4"
                alt="Flowbite Logo"
              />
              <span className="sself-center text-1xl logoweight font-semibold whitespace-nowrap text-white">
                Cratmate AI
              </span>
            </div>

            <div
              className=" w-full  md:w-auto"
              // id="navbar-default"
            >
              <ul className="font-medium flex md:  md:p-0 mt-4   md:flex-row  md:mt-0     ">
                <li className="mt-3">
                  <p >
                    <i className="fa-brands fa-facebook-f icn "></i>
                  </p>
                </li>
                <li className="mt-3">
                  <p>
                    <i className="fa-brands fa-instagram icn "></i>
                  </p>
                </li>
                <li className="mt-3">
                  <p>
                    <i className="fa-brands fa-twitter icn  "></i>
                  </p>
                </li>
                <li className="mt-2">
                  <a>
                    <button className="btn-col  text-white mx-8 py-3 px-4 rounded-full">
                      Join us our team
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="lg:max-w-[1030px] grid lg:grid-cols-4   md:grid-cols-2 sm:grid-cols-1 m-auto flex flex-wrap items-center lg:justify-between mx-auto p-8
        
          footer-link
        "
        >
          <div className="mb-[50px]">
            <p className="hover:text-[#629dad]">Our Products</p>
            <p className="hover:text-[#629dad]">What we do</p>
            <p className="hover:text-[#629dad]">Blog</p>
          </div>
          <div className=" mb-2">
            <p className="hover:text-[#629dad]">Cratemat AI for Good</p>
            <p className="hover:text-[#629dad]">Press Room</p>
            <p className="hover:text-[#629dad]">Data Security</p>
            <p className="hover:text-[#629dad]">Customer Success Center</p>
            <p className="hover:text-[#629dad]">Developers</p>
            <p className="hover:text-[#629dad]">Partners</p>
          </div>
          <div className=" mb-2">
            {" "}
            <p className="hover:text-[#629dad]">Our Company</p>
            <p className="hover:text-[#629dad]">Leadership</p>
            <p className="hover:text-[#629dad]">Contact</p>
            <p className="hover:text-[#629dad]">Investor</p>
            <p className="hover:text-[#629dad]">Career</p>
            <p className="hover:text-[#629dad]">Site Map</p>
          </div>

          <div className="mb-4">
            <p className="hover:text-[#629dad]">Modern Slavery Policy</p>
            <p className="hover:text-[#629dad]">Environment, Social, and Government</p>
            <p className="hover:text-[#629dad]">Legal Policy</p>
            <p className="hover:text-[#629dad]">Manage By Data</p>
            <p className="hover:text-[#629dad]">Cookies Setting</p>
          </div>
        </div>
      </div>
      <div className="w-full text-white mx-w-[1440px]  justify-center items-center  min-h-[60px]  flex  shadow-lg text-[12px]   absolute z-20 text-slate-950  bg-gray-950 ">
        <p className="text-center  mb-4 ">
          Terms & Condition <span className="mx-3">|</span> Privacy Policy{" "}
          <span className="mx-5">
            &#169;2023 All Right Resaved by Mst Shormily Raisa
          </span>{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
