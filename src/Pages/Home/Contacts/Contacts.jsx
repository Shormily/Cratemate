import { useState } from "react";
import "animate.css";
import {  Toaster, toast } from "react-hot-toast";
import Swal from 'sweetalert2'
import Navbar from "../Navbar/Navbar";

const Contacts = () => {
  const [formData, setFormData] = useState();
  console.log(formData);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cratemate-Aid all form data to FormData object
    console.log(formData);
    fetch("https://cratemate-server-shormily.onrender.com/send-message", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((result) => {
        const user = result.user;
        console.log(user);
        
        Swal.fire({
          icon: 'success',
          title: 'Thank you !',
          text:"Your submission has been received",
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      })
      .catch((error) => {
        // error.message;
        toast.error(error.message)
      });

    
  };
  return (
    <>
      <Navbar />
      <Toaster/>
      <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-8  sm:grid-cols-1 max-w-[1240px] m-auto ">
        <div className="animate__animated animate__fadeInLeft  ">
          <div className="bg-[#EEE]   px-24 pb-32 ">
            <h1 className="text-4xl  pt-24 block text-gray-950  font-bold mb-2   ">
              Contact Us
            </h1>
            <p className="mt-6 block text-gray-950 text-[13px] font-semibold  pb-8   ">
            Got questions, suggestions, or specific requirements ?

            </p>{" "}
            {/* <p className="mt-6 text-[15px] font-bold  cursor-pointer">
              Operating Hours: 08:00 AM ~ 5:00 PM IST (India Time)
            </p>
            <p className="mt-8   cursor-pointer ">
              <span className="mx-1 testimonials "></span>{" "}
              <span className="mt-6 text-[13px] font-bold  text-[#1d4ed8] cursor-pointer">
                Email: umesh@cratmate.com
              </span>
            </p> */}
            <p className="mt-6 text-[13px] font-semibold text-gray-950 cursor-pointer pb-32">
             Feel free to reach out to us anytime – we're ready to serve you!
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
                type="text"
                name="firstname"              
                placeholder=""
                onChange={handleInputChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
               
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
                name="lastname"              
                placeholder=""
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-[-20px]">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2">
                Company Name :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="companyname"              
                placeholder=""
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full mt-[-20px]">
              <label className="block text-gray-950 font-medium text-[12px]  mb-2">
                Job Title :
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="jobtitle"              
                placeholder=""
                onChange={handleInputChange}
              />
            </div>
          </div>
        
          <div className="w-full mt-2  ">
            <label
              className="block text-gray-950 font-medium text-[12px]  mb-2 "
              placeholder="grid-password"
              type="text"
            >
              Subject :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="subject"
              placeholder=""
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full mt-2  ">
            <label
              className="block text-gray-950 font-medium text-[12px]  mb-2 "
              placeholder="grid-password"
              type="text"
            >
              Email Address :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder=""
              id="recipientEmail"
              onChange={handleInputChange}
              name="email"
              required
            />
          </div>
          <div className="w-full mt-2 ">
            <label className="block text-gray-950 font-medium text-[12px]  mb-2 ">
              Phone Number :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              name="phone"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full mt-2 ">
            <label className="block text-gray-950 font-medium text-[12px]  mb-2">
              Tell us a bit about your project:
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-2 pb-12 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              name="message"
              placeholder=""
              onChange={handleInputChange}
              required
            />
            <div className="flex mb-8 max-w-[50px]  m-auto "  >
            <input
                  className="text-white bg-gradient-to-br  from-indigo-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-sm text-sm px-5 py-2.5 text-center mb-2"
                  type="submit"
                  name="submit"
                  style={{
                    paddingRight: "55px",
                    paddingLeft: "55px",
                    backgroundColor: "#106AC3",
                    color: "#fff",
                  }}
                />
            
            </div>
          </div>
        </div>
      </div>
      </form>
     
    </>
  );
};

export default Contacts;
