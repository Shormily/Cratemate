import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  let [open,setOpen]=useState(false);
  return (
    <>
      <div className="text-gray-950 shadow-md sticky top-0 z-30 w-full bg-white">
        <div className="max-w-screen-xl pt-2 pb-2   flex items-center justify-between mx-auto  px-8 ">
        <NavLink as={NavLink} to="/"> <div className="items-center">
            <p className="self-center logo-weight  text-3xl  whitespace-nowrap ">
              Cratmate AI
            </p>
          </div></NavLink>
          
          <div className="flex md:order-2">
          <NavLink as={NavLink} to="/login"> <button className="btn-col  text-white mx-8 py-1 px-4 rounded-full">
              Log In
            </button></NavLink>
           
          </div>
          <React.Fragment>
            <div className="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1">
              <ul className="hidden sm:flex px-4 p-4 text-gray-950  font-semibold ">
                <li className="block banner-text mx-4 nav-link py-2 text-gray-950 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-gray-950 lg:font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <NavLink as={NavLink} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="block banner-text mx-4 nav-link py-2 text-gray-950 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-gray-950 lg:font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <NavLink as={NavLink} to="/service">
                    What We Do
                  </NavLink>
                </li>

                <li className="block banner-text mx-4 nav-link py-2 text-gray-950 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-gray-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <NavLink
                    className="hover:opacity-50 cursor-default "
                    as={NavLink}
                    to="/team"
                  >
                    Join Our Team
                  </NavLink>
                </li>
                <li className="block banner-text mx-4 nav-link py-2 text-gray-950 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-gray-950 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <NavLink
                    as={NavLink}
                    className="hover:opacity-50 cursor-default "
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </React.Fragment>
          <div onClick={handleNav} className="sm:hidden z-10 text-gray-500 text-4xl">
          <ion-icon  onClick={()=>setOpen(!open)} name={open ? 'close':'menu'}></ion-icon>
          </div>
          {/* Mobile Menu */}
          <div
            onClick={handleNav}
            className={
              nav
                ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/100 px-4 py-7 flex flex-col"
                : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
            }
          >
            <div className=" items-center">
              <span className="self-center logoweight font-semibold whitespace-nowrap text-white">
                Cratmate AI
              </span>
            </div>
            <ul className="h-full w-full text-center pt-18">
              <li className="block banner-text mx-4 cont-pra nav-link py-2 text-white pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 py-4">
                <NavLink as={NavLink} to="/">
                  Home
                </NavLink>
              </li>
              <li className="block banner-text mx-4 cont-pra nav-link py-2 text-white pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 py-4">
                <NavLink as={NavLink} to="/service">
                  What We Do
                </NavLink>
              </li>
              <li className="block banner-text mx-4 cont-pra nav-link py-2 text-white pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 py-4">
                <NavLink as={NavLink} to="/team">
                  Join Us Our Team
                </NavLink>
              </li>

              <li className="block mx-4 banner-text cont-pra nav-link py-2 text-white pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-700 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 py-3">
                <NavLink as={NavLink} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
