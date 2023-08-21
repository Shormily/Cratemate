import Navbar from "../Navbar/Navbar";
import "./Team.css";

const Team = () => {
  return (
    <>
    
      <Navbar />
      <div>
    <h1 className="mx-8 pt-8 pb-5 text-4xl text-gray-500 text-shadow-lg   text-styles">Join Us Our Team</h1>

    
    </div>
      <from >
        <div className=" mx-5 p-5 max-w-[1000px] m-auto cont-pra">
          <div className="form-group row">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className=" ">
                <label className="block text-gray-700 text-[12px] font-semibold mb-2">
                  First Name :
                </label>
                <input
                  className="shadow appearance-none border font-normal rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grid-last-name"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="w-full ">
                <label className="block text-gray-700 text-[12px] font-semibold mb-2">
                  Last Name :
                </label>
                <input
                  className="shadow appearance-none border font-normal rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grid-last-name"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mt-[-20px] mb-3">
                <label
                 
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  <h5>Birth Date </h5>
                </label>
                <input
                  className="shadow appearance-none border font-normal rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="MM/DD/YYYY"
                />
              </div>
              <div className="w-full mt-[-20px]">
                <label  className="mt-4 ">
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
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      className="form-check-label  text-gray-700 text-[15px] font-semibold mx-2"
                    
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check mx-5">
                    <input
                      className="form-check-input pt-5 "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      className="form-check-label  text-gray-700 text-[15px] font-semibold mx-2"
                     
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              {" "}
              <label  className="mb-2 mt-3">
                <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                  Experience{" "}
                </h5>
              </label>
              <input
                className="shadow appearance-none border font-normal rounded lg:w-[48%] md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Experience"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className=" ">
              <label  className="mb-2 mt-4">
                <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                  Phone{" "}
                </h5>
              </label>
              <input
                className="shadow appearance-none border font-normal rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="(000) 000 - 0000"
              />
              </div>
              <div className="w-full ">
              <label  className="mb-2 mt-4">
                <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                  Email{" "}
                </h5>
              </label>
              <input
                className="shadow appearance-none border font-normal rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="myname@example.com"
              />
              </div>
              <div className="mt-[-20px]">
              <label  className="mb-2 mt-4">
                <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                  Address{" "}
                </h5>
              </label>
              <input
                className="shadow appearance-none border rounded  md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal"
                id="username"
                type="text"
                placeholder="Username"
              />
              </div>
              <div className="w-full lg:mt-1 md:mt-[-20px]">
              <select
                id="small"
                className="shadow appearance-none border rounded lg:mt-1 md:mt-[-15%]  md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal "
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

         
      

          <form>
            <div className="mt-5 ">
              <div className="input-container ">
                <p
                  style={{
                    backgroundColor: "#CC1016",
                    color: "#fff",
                    padding: "6px",
                    borderRadius: "2px",
                  }}
                >
                  PDF
                </p>
                <div className="input-group-prepend">
                  <input
                    type="file"
                    className="shadow appearance-none border rounded   md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal"
                    placeholder="Update resume.pdf"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </from>
      <div className="mx-10 mb-12">
        <input
          className="text-white bg-gradient-to-br from-red-800 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2"
          type="submit"
          value="Submit"
          style={{
            paddingRight: "55px",
            paddingLeft: "55px",
            backgroundColor: "#106AC3",
            color: "#fff",
          }}
        />
      </div>
    </>
  );
};

export default Team;
