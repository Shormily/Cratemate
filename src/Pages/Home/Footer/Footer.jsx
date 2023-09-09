import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const services = [
    {
      img: "https://i.ibb.co/3MGGLRK/Flag-China.png",
    },
    {
      img: "https://i.ibb.co/VVc1rqv/Flag-of-Japan-svg.png",
    },
    {
      img: "https://i.ibb.co/0DX8hQ7/Flag-of-the-United-Kingdom-3-5.png",
    },
    {
      img: "https://i.ibb.co/NTv8wmN/Flag-of-Vietnam-svg.png",
    },
    {
      img: "https://i.ibb.co/BrKFGPm/Flag-of-India-svg.pngg",
    },
    {
      img: "https://i.ibb.co/VVc1rqv/Flag-of-Japan-svg.pn",
    },
  ];
  return (
    <>
      <div className=" bg text-white cursor-pointer pt-2  pb-12 ">
        <div
          className=" grid lg:grid-cols-4 max-w-[1600px] pt-12 m-auto gap-24  md:grid-cols-2 sm:grid-cols-1 m-auto flex flex-wrap items-center lg:justify-between mx-auto p-8 footer-link
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
                <ul className="font-medium flex md:order-2   md:p-0 mt-4   md:flex-row  md:mt-0     ">
                  <li className="mt-3">
                    <a
                      href=" https://www.linkedin.com/company/cratmateai-technology/ "
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
            We are Cratmate AI
            </p>
            <p className="hover:text-[#4f46e5] font-normal text-style text-white">
              Join Our team
            </p>
            <p className="hover:text-[#4f46e5] font-normal text-style text-white">
              What We Do
            </p>
            <p className="hover:text-[#4f46e5] font-normal text-style text-white ">
              Press Room
            </p>
            <p className="hover:text-[#6366f1] font-normal text-style text-white">
              Contact Us
            </p>
            <p className="hover:text-[#4f46e5] font-normal text-style text-white">
              Partners
            </p>
            
            
          </div>
          <div className="font-normal mb-2 pt-12">
            <a className="font-normal text-[13px]" href="#">
              <i className="fa-solid fa-envelope-open-text icn  "></i>Outlook :
              CratmateAI@outlook.com
            </a>
            <br />
            <a className="font-normal text-[13px]" href="#">
              <i className="fa-solid fa-envelope   icn"></i> Email :
              cratmateai@gmail.com
            </a>
          </div>

          <div>
            <p className="text-white text-center font-semibold text-2xl mt-8  ">
            Our Global Presence
            </p>
            <div className=" grid lg:grid-cols-5 pt-3 pb-4 md:grid-cols-2 sm:grid-cols-1 gap-2 ">
              {services.map((service) => (
                <>
                  <div>
                    <img className="w-12" src={service.img} alt="" />
                  </div>
                </>
              ))}
            </div>

            <NavLink as={NavLink} to="/team">
              <button className="btn-col   text-white  py-3 px-4 rounded-full">
                Join  Our team
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
