import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavService = () => {
    const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  let [open,setOpen]=useState(false);
    return (
        <>
             <div className="text-gray-950 shadow-md  w-full bg-white">
        <div className="max-w-[1500px] m-auto pt-3 pb-3  flex items-center justify-between mx-auto   ">
          <NavLink as={NavLink} to="/">
            {" "}
            <div className="items-center  ">
              <p className=" text-4xl font-black px-5">Cratmate AI</p>
            </div>
          </NavLink>

          <div className="flex md:order-2">
            <a
              href="
              https://shujiajia.com/login"
              target="_blank"
            >
              {" "}
              <button className="text-white bg-gradient-to-br from-indigo-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2 text-center mr-2 mb-2">
                Log In
              </button>
            </a>
          </div>
          <React.Fragment>
            <div className="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1">
              <ul className="hidden sm:flex px-4 p-4 text-gray-950  ">
                <li className="block  mx-4 nav-link py-2 text-gray-950 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-gray-950 lg:font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[16px]">
                  <NavLink as={NavLink} to="/">
                    We are Cratmate AI
                  </NavLink>
                </li>
                <li className="block banner-text mx-4 nav-link py-2 text-gray-950 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-gray-950 lg:font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[16px]">
                  <NavLink as={NavLink} to="/service">
                    What We Do
                  </NavLink>
                </li>
                <li className="block banner-text mx-4 nav-link py-2 text-gray-950 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-gray-950 lg:font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[16px]">
                  <NavLink as={NavLink} to="/team">
                    Join Us Our team
                  </NavLink>
                </li>
                <li className="block banner-text mx-4 nav-link py-2 text-gray-950 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-gray-950 lg:font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[16px]">
                  <NavLink as={NavLink} to="/contact">
                    Contact US
                  </NavLink>
                </li>
              </ul>
            </div>
          </React.Fragment>
          <div
            onClick={handleNav}
            className="sm:hidden z-10 text-gray-500 text-4xl"
          >
            <ion-icon
              onClick={() => setOpen(!open)}
              name={open ? "close" : "menu"}
            ></ion-icon>
          </div>
        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute  left-0 top-0 w-full h-screen bg-gray-950 px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <h1 className="text-white text-2xl font-bold">Cratemate AI</h1>
          <ul className="h-full w-full text-center pt-18">
            <li className="text-2xl mt-24 text-white py-4">
              <NavLink as={NavLink} to="/">
              We are Cratemate AI
              </NavLink>
            </li>
            <li className="text-2xl text-white py-4">
              <NavLink as={NavLink} to="/service">
               What we do
              </NavLink>
            </li>
            <li className="text-2xl text-white py-4">
              <NavLink as={NavLink} to="/team">
               Join uS our team
              </NavLink>
            </li>
            <li className="text-2xl text-white py-4">
              <NavLink as={NavLink} to="/contact">
                Contact US
              </NavLink>
            </li>

           
          
        
          </ul>
        </div>
        </div>
      </div>
        </>
    );
};

export default NavService;