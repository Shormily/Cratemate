// import { toast } from "react-hot-toast";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";
import TeamDescription from "../TeamDescription/TeamDescription";
import "./Team.css";

import { useState } from "react";

const Team = () => {
  const [formData, setFormData] = useState();
  console.log(formData);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cratemate-Aid all form data to FormData object
    console.log(formData);
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((result) => {
        const user = result.user;
        console.log(user);
        
        toast.success('Send email successfully!');
      })
      .catch((error) => {
        // error.message;
        toast.error(error.message)
      });

    
  };
  return (
    <>
      <Navbar />

      <TeamDescription />
      <Toaster/>
      <form onSubmit={handleSubmit}>
        <div className="m-auto max-w-[1030px] flex item-center  justify-center">
          <div className=" mx-5 p-5 flex-col md:flex-row  w-screen m-3  m-auto ">
            <div className="form-group row ">
              <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
                <div className=" ">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    First Name :
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="FirstName"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full ">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="LastName"
                    onChange={handleInputChange}
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
                    name="birthday"
                    onChange={handleInputChange}
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
                        name="gender"
                        value="male"
                        onChange={handleInputChange}
                        id="flexRadioDefault2"
                      />
                      <label className="form-check-label  text-gray-700 text-[15px] font-semibold mx-2">
                        Male
                      </label>
                    </div>
                    <div className="form-check mx-5">
                      <input
                        className="form-check-input pt-5 "
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleInputChange}
                        id="flexRadioDefault2"
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
                    name="experience"
                    placeholder="Experience"
                    onChange={handleInputChange}
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
                    name="subject"
                    placeholder="Subject"
                    onChange={handleInputChange}
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
                    type="number"
                    name="phone"
                    onChange={handleInputChange}
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
                    placeholder="Email"
                    id="recipientEmail"
                    onChange={handleInputChange}
                    name="email"
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
                    placeholder="address"
                    name="address"
                    onChange={handleInputChange}
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
                    className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                    onChange={handleInputChange}
                    name="select"
                    required
                  >
                    <option selected>Choose a country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica"> Antarctica</option>
                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>

                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>

                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value=" Democratic Republic of the Congo (Kinshasa)">
                      {" "}
                      Democratic Republic of the Congo (Kinshasa)
                    </option>
                    <option value=" Congo, Republic of (Brazzaville)">
                      {" "}
                      Congo, Republic of (Brazzaville)
                    </option>
                    <option value="Cook Islands"> Cook Islands</option>
                    <option value=" Costa Rica"> Costa Rica</option>
                    <option value="Côte Divoire (Ivory Coast)"> Côte Divoire (Ivory Coast)</option>
                    <option value=" Croatia"> Croatia</option>
                    <option value="Cuba"> Cuba</option>
                    <option value=" Cyprus"> Cyprus</option>
                    <option value="Czech Republic"> Czech Republic</option>

                    <option value="Denmark"> Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>

                    <option value="East Timor (Timor-Leste)">East Timor (Timor-Leste)</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>

                    <option value="Falkland Islands">Falkland Islands</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">French Southern Territories</option>

                    <option value="Gabon">Gabon</option>
                    <option value="The Gambia">The Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>

                    <option value="Haiti">Haiti</option>
                    <option value="Holy See">Holy See</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>

                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran (Islamic Republic of)">Iran (Islamic Republic of)</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Ivory Coast">Ivory Coast</option>

                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>

                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="  Korea, Democratic Peoples Rep. (North Korea)">
                      Korea, Democratic Peoples Rep. (North Korea)
                    </option>
                    <option value="  Korea, Republic of (South Korea)">
                      Korea, Republic of (South Korea)
                    </option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>

                    <option value=" Lao, Peoples Democratic Republic">
                      Lao, Peoples Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>

                    <option value="Macau">Macau</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federal States of">Micronesia, Federal States of</option>
                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Myanmar, Burma">Myanmar, Burma</option>

                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="North Macedonia">North Macedonia</option>
                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                    <option value="Norway">Norway</option>

                    <option value="Oman">Oman</option>

                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian territories">Palestinian territories</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn Island">Pitcairn Island</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>

                    <option value="Qatar">Qatar</option>

                    <option value="Reunion Island">Reunion Island</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">Russian Federation</option>
                    <option value="Rwanda">Rwanda</option>

                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value=" Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname"> Suriname</option>
                    <option value="Swaziland (Eswatini)"> Swaziland (Eswatini)</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria, Syrian Arab Republic">Syria, Syrian Arab Republic</option>

                    <option value="Taiwan (Republic of China)">Taiwan (Republic of China)</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value=" Tanzania; officially the United Republic of Tanzania">
                      Tanzania; officially the United Republic of Tanzania
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Tibet"> Tibet</option>
                    <option value="Timor-Leste (East Timor)"> Timor-Leste (East Timor)</option>
                    <option value="Togo"> Togo</option>
                    <option value="Tokelau"> Tokelau</option>
                    <option value="Tonga"> Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands"> Turks and Caicos Islands</option>
                    <option value="Tuvalu"> Tuvalu</option>

                    <option value="Uganda"> Uganda</option>
                    <option value="Ukraine"> Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>

                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                    <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>

                    <option value="Wallis and Futuna Islands"> Wallis and Futuna Islands</option>
                    <option value="Western Sahara"> Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
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
                        backgroundColor: "#1d4ed8",
                        color: "#fff",
                        padding: "7px",
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
                      name="pdf"
                      onChange={handleInputChange}
                      accept=".pdf"
                      placeholder="(000) 000 - 0000"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-12 mb-12  max-w-[150px]  m-auto">
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

export default Team;
