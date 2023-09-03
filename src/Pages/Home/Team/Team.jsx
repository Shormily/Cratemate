import { toast } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";
import TeamDescription from "../TeamDescription/TeamDescription";
import "./Team.css";

import { useState } from "react";

const Team = () => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [texts, setTexts] = useState("");
  const [birth, setBirth] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [countery, setCountery] = useState("");
  const [experience, setExperience] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("recipientEmail", recipientEmail);
    formData.append("text", text);
    formData.append("texts", texts);
    formData.append("experience", experience);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("birth", birth);
    formData.append("message", message);
    formData.append("address", address);
    formData.append("countery", countery);
    formData.append("file", file);

    try {
      const response = await fetch(
        "https://cratemate-server-shormily.onrender.com/api/send-email",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log(toast.success("Successfully toasted!"));
      } else {
        console.error("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <>
      <Navbar />
      {/* <GoogleAuth/> */}
      <TeamDescription />

      <form onSubmit={handleSubmit}>
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
                    <option value="AFG">Afghanistan</option>
                    <option value="ALB">Albania</option>
                    <option value="ALG">Algeria</option>
                    <option value="AME">American Samoa</option>
                    <option value="AND">Andorra</option>
                    <option value="ANGO">Angola</option>
                    <option value="ANG">Anguilla</option>
                    <option value="ANT"> Antarctica</option>
                    <option value="AN">Antigua and Barbuda</option>
                    <option value="ARG">Argentina</option>
                    <option value="ARM">Armenia</option>
                    <option value="AR">Aruba</option>
                    <option value="AUST">Australia</option>
                    <option value="AUS">Austria</option>

                    <option value="BAH">Bahamas</option>
                    <option value="BAHra">Bahrain</option>
                    <option value="Ban">Bangladesh</option>
                    <option value="BArbado">Barbados</option>
                    <option value="BELA">Belarus</option>
                    <option value="BElg">Belgium</option>
                    <option value="BEL">Belize</option>
                    <option value="BEN">Benin</option>
                    <option value="BERM">Bermuda</option>
                    <option value="BH">Bhutan</option>
                    <option value="BOl">Bolivia</option>
                    <option value="BON">Bosnia and Herzegovina</option>
                    <option value="BOT">Botswana</option>
                    <option value="BRA">Brazil</option>
                    <option value="BRU">Brunei Darussalam</option>
                    <option value="BUL">Bulgaria</option>
                    <option value="BUR">Burkina Faso</option>
                    <option value="BU">Burundi</option>

                    <option value="CAmbo">Cambodia</option>
                    <option value="CAM">Cameroon</option>
                    <option value="Can">Canada</option>
                    <option value="CAP">Cape Verde</option>
                    <option value="CAy">Cayman Islands</option>
                    <option value="CENt">Central African Republic</option>
                    <option value="CHAD">Chad</option>
                    <option value="CHI">Chile</option>
                    <option value="CHi">China</option>
                    <option value="CHR">Christmas Island</option>
                    <option value="COC">Cocos (Keeling) Islands</option>
                    <option value="COL">Colombia</option>
                    <option value="COMOR">Comoros</option>
                    <option value="DEMOC">	Democratic Republic of the Congo (Kinshasa)</option>
                    <option value="CON">	Congo, Republic of (Brazzaville)</option>
                    <option value="COO">	Cook Islands</option>
                    <option value="COS">	Costa Rica</option>
                    <option value="COte">	Côte Divoire (Ivory Coast)</option>
                    <option value="CR">	Croatia</option>
                    <option value="CU">	Cuba</option>
                    <option value="CY">	Cyprus</option>
                    <option value="CZ">	Czech Republic</option>

                    <option value="DE">	Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DOM">Dominica</option>
                    <option value="DO">Dominican Republic</option>

                    <option value="EA">East Timor (Timor-Leste)</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="EL">El Salvador</option>
                    <option value="EQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="ES">Estonia</option>
                    <option value="ET">Ethiopia</option>

                    <option value="FAl">Falkland Islands</option>
                    <option value="FA">Faroe Islands</option>
                    <option value="Fi">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FRA">France</option>
                    <option value="Fre">French Guiana</option>
                    <option value="FRe">French Polynesia</option>
                    <option value="FR">French Southern Territories</option>

                    <option value="GA">Gabon</option>
                    <option value="THER">The Gambia</option>
                    <option value="GEer">Georgia</option>
                    <option value="GEr">Germany</option>
                    <option value="GHa">Ghana</option>
                    <option value="GRI">Gibraltar</option>
                    <option value="GRE">Greece</option>
                    <option value="GRr">Greenland</option>
                    <option value="Gre">Grenada</option>
                    <option value="Guad">Guadeloupe</option>
                    <option value="Gua">Guam</option>
                    <option value="GUA">Guatemala</option>
                    <option value="Gui">Guinea</option>
                    <option value="GUi">Guinea-Bissau</option>
                    <option value="GU">Guyana</option>

                    <option value="HAI">Haiti</option>
                    <option value="HOL">Holy See</option>
                    <option value="Hon">Honduras</option>
                    <option value="HO">Hong Kong</option>
                    <option value="HU">Hungary</option>

                    <option value="IC">Iceland</option>
                    <option value="IND">India</option>
                    <option value="IN">Indonesia</option>
                    <option value="IRA">Iran (Islamic Republic of)</option>
                    <option value="Ira">Iraq</option>
                    <option value="IR">Ireland</option>
                    <option value="IS">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="IV">Ivory Coast</option>

                    <option value="Jam">Jamaica</option>
                    <option value="JA">Japan</option>
                    <option value="JO">Jordan</option>

                    <option value="KA">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="Kor">Korea, Democratic Peoples Rep. (North Korea)</option>
                    <option value="KOr">Korea, Republic of (South Korea)</option>
                    <option value="KO">Kosovo</option>
                    <option value="KU">Kuwait</option>
                    <option value="KY">Kyrgyzstan</option>

                    <option value="Lao">Lao, Peoples Democratic Republic</option>
                    <option value="LA">Latvia</option>
                    <option value="Le">Lebanon</option>
                    <option value="LE">Lesotho</option>
                    <option value="LIB">Liberia</option>
                    <option value="Lib">Libya</option>
                    <option value="Li">Liechtenstein</option>
                    <option value="LI">Lithuania</option>
                    <option value="LU">Luxembourg</option>

                    <option value="MAC">Macau</option>
                    <option value="MAD">Madagascar</option>
                    <option value="MAlawi">Malawi</option>
                    <option value="MAla">Malaysia</option>
                    <option value="MAL">Maldives</option>
                    <option value="MAi">Mali</option>
                    <option value="MAl">Malta</option>
                    <option value="Mars">Marshall Islands</option>
                    <option value="Marti">Martinique</option>
                    <option value="Mauri">Mauritania</option>
                    <option value="Mau">Mauritius</option>
                    <option value="MA">Mayotte</option>
                    <option value="ME">Mexico</option>
                    <option value="Mic">Micronesia, Federal States of</option>
                    <option value="MonL">Moldova, Republic of</option>
                    <option value="Monca">Monaco</option>
                    <option value="MOn">Mongolia</option>
                    <option value="Mon">Montenegro</option>
                    <option value="Mo">Montserrat</option>
                    <option value="Mor">Morocco</option>
                    <option value="MY">Myanmar, Burma</option>

                    <option value="NAm">Namibia</option>
                    <option value="NA">Nauru</option>
                    <option value="Ne">Nepal</option>
                    <option value="Net">Netherlands</option>
                    <option value="NEt">Netherlands Antilles</option>
                    <option value="NEw">New Caledonia</option>
                    <option value="NE">New Zealand</option>
                    <option value="NIc">Nicaragua</option>
                    <option value="Nig">Niger</option>
                    <option value="Ni">Nigeria</option>
                    <option value="NI">Niue</option>
                    <option value="NOR">North Macedonia</option>
                    <option value="No">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>

                    <option value="OM">Oman</option>

                    <option value="Pak">Pakistan</option>
                    <option value="Pa">Palau</option>
                    <option value="PAL">Palestinian territories</option>
                    <option value="PAN">Panama</option>
                    <option value="PAp">Papua New Guinea</option>
                    <option value="PA">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PI">Pitcairn Island</option>
                    <option value="Po">Poland</option>
                    <option value="PO">Portugal</option>
                    <option value="PU">Puerto Rico</option>

                    <option value="QA">Qatar</option>

                    <option value="RE">Reunion Island</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>

                    <option value="Saintk">Saint Kitts and Nevis</option>
                    <option value="Saint">Saint Lucia</option>
                    <option value="SAIN">Saint Vincent and the Grenadines</option>
                    <option value="SAM">Samoa</option>
                    <option value="San">San Marino</option>
                    <option value="Sa">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SEn">Senegal</option>
                    <option value="SEr">Serbia</option>
                    <option value="SE">Seychelles</option>
                    <option value="Si">Sierra Leone</option>
                    <option value="SI">Singapore</option>
                    <option value="SLo">Slovakia (Slovak Republic)</option>
                    <option value="SL">Slovenia</option>
                    <option value="Sol">Solomon Islands</option>
                    <option value="Som">Somalia</option>
                    <option value="So">South Africa</option>
                    <option value="SO">South Sudan</option>
                    <option value="SP">Spain</option>
                    <option value="SR">Sri Lanka</option>
                    <option value="Su">Sudan</option>
                    <option value="SU">	Suriname</option>
                    <option value="Swa">	Swaziland (Eswatini)</option>
                    <option value="SWe">Sweden</option>
                    <option value="SW">Switzerland</option>
                    <option value="Syr">Syria, Syrian Arab Republic</option>

                    <option value="Tai">Taiwan (Republic of China)</option>
                    <option value="Ta">Tajikistan</option>
                    <option value="TA">Tanzania; officially the United Republic of Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="Ti">	Tibet</option>
                    <option value="TI">	Timor-Leste (East Timor)</option>
                    <option value="Tog">	Togo</option>
                    <option value="To">	Tokelau</option>
                    <option value="TO">	Tonga</option>
                    <option value="TR">Trinidad and Tobago</option>
                    <option value="Tun">Tunisia</option>
                    <option value="Tur">Turkey</option>
                    <option value="Turk">Turkmenistan</option>
                    <option value="TU">	Turks and Caicos Islands</option>
                    <option value="Tu">	Tuvalu</option>

                    <option value="UG">		Uganda</option>
                    <option value="UK">	Ukraine</option>
                    <option value="Uni">United Arab Emirates</option>
                    <option value="Un">United Kingdom</option>
                    <option value="UN">United States</option>
                    <option value="UR">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>

                    <option value="Va">Vanuatu</option>
                    <option value="VA">Vatican City State (Holy See)</option>
                    <option value="VE">Venezuela</option>
                    <option value="vie">Vietnam</option>
                    <option value="VI">Virgin Islands (British)</option>
                    <option value="Vi">Virgin Islands (U.S.)</option>

                    <option value="WA">	Wallis and Futuna Islands</option>
                    <option value="WE">	Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZA">Zambia</option>
                    <option value="ZI">Zimbabwe</option>
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
