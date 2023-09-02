
import { toast } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";
import TeamDescription from "../TeamDescription/TeamDescription";
import "./Team.css";

import { useState } from 'react';

const Team = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [texts, setTexts] = useState('');
  const [birth, setBirth] = useState('');
  const [message, setMessage] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [countery, setCountery] = useState('');
  const [experience, setExperience] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('recipientEmail', recipientEmail);
    formData.append('text', text);
    formData.append('texts', texts);
    formData.append('experience', experience);
    formData.append('phone', phone);
    formData.append('gender', gender);
    formData.append('birth', birth);
    formData.append('message', message);
    formData.append('address', address);
    formData.append('countery', countery);
    formData.append('file', file);

    try {
      const response = await fetch('https://cratemate-server-shormily.onrender.com/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log   (toast.success('Successfully toasted!'));
       
      } else {
        console.error('Email sending failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  return (
    <>
      <Navbar />
      {/* <GoogleAuth/> */}
      <TeamDescription />
     
      <form  onSubmit={handleSubmit}>
        <div className="m-auto max-w-[1240px] flex item-center  justify-center">
        <div className=" mx-5 p-5   m-auto cont-pra">
          <div className="form-group row">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className=" ">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  First Name :
                </label>
                <input
                 
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                 id="text"
                 placeholder="FirstName"
                 value={text}
                onChange={(e) => setText(e.target.value)}
               required
                />
              </div>
              <div className="w-full ">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                 Last Name:
                </label>
                <input
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="texts"
                  placeholder="LastName"
                  value={texts}
                  onChange={(e) => setTexts(e.target.value)}
                  required
                />
              </div>
              <div className="mt-[-20px] mb-3">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  <h5>Birth Date </h5>
                </label>
                <input
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="birth"
                  type="text"
                  placeholder="MM/DD/YYYY"
                  name="user_date"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                  required
                
                />
              </div>
              <div className="w-full mt-[-20px]">
                <label className="mt-4 ">
                  <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                    Gender
                  </h5>
                </label>
                <div className="flex ">
                  <div className="form-check ">
                    <input
                      className="form-check-input pt-5 "
                      type="radio"
                      name="flexRadioDefault"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label  text-gray-700 text-[15px] font-semibold mx-2">
                      Male
                    </label>
                  </div>
                  <div className="form-check mx-5">
                    <input
                      className="form-check-input pt-5 "
                      type="radio"
                      name="flexRadioDefault"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label  text-gray-700 text-[15px] font-semibold mx-2">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className=" ">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                 Experience :
                </label>
                <input
                 
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                 id="experience"
                 placeholder="Experience"
                 value={experience}
                onChange={(e) => setExperience(e.target.value)}
               required
                />
              </div>
              <div className="w-full mb-3">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Subject:
                </label>
                <input
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
             
            </div>
          </div>
          <div className="form-group row">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className=" ">
                <label className="mb-2 mt-4">
                  <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                    Phone{" "}
                  </h5>
                </label>
                <input
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                   required
                  placeholder="(000) 000 - 0000"
                />
              </div>
              <div className=" ">
                <label className="mb-2 mt-4">
                  <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                    Email
                  </h5>
                </label>
                <input
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  id="recipientEmail"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group row mt-4">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className=" ">
                <label className="mb-2 mt-4">
                  <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                    Address
                  </h5>
                </label>
                <input
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Username"
                  name="user_name"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                 required
                />
              </div>
              <div className=" ">
                <label className="mb-2 mt-4">
                  <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                    Chose your country
                  </h5>
                </label>
                <select
                  id="country"
                  className="shadow appearance-none border  lg:mt-0 md:mt-[-15%]  md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal "
                  value={countery}
                  onChange={(e) => setCountery(e.target.value)}
                 required
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group row mt-4">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className=" ">
                <label className="mb-2 mt-4">
                  <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                    Plesase enter your resume/cv
                  </h5>
                </label>
                <div className="flex">
                  {" "}
                  <p
                    style={{
                      backgroundColor: "#CC1016",
                      color: "#fff",
                      padding: "6px",
                      borderRadius: "2px",
                    }}
                    htmlFor="file"
                  >
                    PDF
                  </p>
                  <input
                    className="shadow appearance-none  font-normal rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="file"
                    placeholder="(000) 000 - 0000"

                    accept=".pdf"
                   onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-8 mb-12">
              <input
                className="text-white bg-gradient-to-br from-red-800 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2"
                value="sent"
                type="submit"
            
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

export default Team;
