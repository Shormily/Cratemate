import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./DoNavbar.css";
import { Link } from "react-scroll";

const DoNavbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <>
      <div className="header sticky top-0 z-30 w-full">
        <nav className="navbar">
        
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="Data"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Use Case
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="tab"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                All Data
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="tabtable"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Security
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="card"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Expertise
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DoNavbar;
