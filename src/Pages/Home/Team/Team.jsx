import Navbar from "../Navbar/Navbar";
import TeamDescription from "../TeamDescription/TeamDescription";
import { useRef} from "react";
import emailjs from "@emailjs/browser";
import "./Team.css";

const Team = () => {
  // const [pdf, setpdf] = useState();
  const form = useRef();

  console.log(form)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_t6p03yk",
        "template_v7q04bt",
        form.current,
        "-FD0NoCV7R5IzuYUR"
      )
      .then(
        (result) => {
          alert("successfully subbmitted");
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  function handleFileSelect(event) {
    const selectedFile = event.target.files[0]; // Get the selected file
    const formData = new FormData();
  
    formData.append("pdfFile", selectedFile); // Add the selected file to FormData
  
    // Now, you can use formData for further processing or to get the PDF URL
    const pdfFileURL = URL.createObjectURL(selectedFile);
    console.log("PDF File URL:", pdfFileURL);
  
    // Do something with the URL, like displaying it or sending it to the server.
  }
  
  return (
    <>
      <Navbar />
      <TeamDescription />
  
      <form ref={form} onSubmit={sendEmail} >
        <div className="m-auto max-w-[1240px] flex item-center  justify-center">
        <div className=" mx-5 p-5   m-auto cont-pra">
          <div className="form-group row">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 ">
              <div className=" ">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  First Name :
                </label>
                <input
                  name="user_name"
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grid-last-name"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="w-full ">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Last Name :
                </label>
                <input
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grid-last-name"
                  type="text"
                  placeholder="Username"
                  name="user_name"
                />
              </div>
              <div className="mt-[-20px] mb-3">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  <h5>Birth Date </h5>
                </label>
                <input
                  className="shadow appearance-none border font-normal  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="MM/DD/YYYY"
                  name="user_date"
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
                      // name="flexRadioDefault"
                      name="user_date"
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
                      // name="flexRadioDefault"
                      name="user_date"
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

            <div className="mb-4">
              {" "}
              <label className="mb-2 mt-3">
                <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                  Experience{" "}
                </h5>
              </label>
              <input
                className="shadow appearance-none border font-normal  lg:w-[48%] md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Experience"
                name="user_date"
              />
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
                  id="username"
                  type="text"
                  name="user_date"
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
                  id="username"
                  type="text"
                  placeholder="myname@example.com"
                  name="user_email"
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
                  id="username"
                  type="text"
                  placeholder="Username"
                  name="user_date"
                />
              </div>
              <div className=" ">
                <label className="mb-2 mt-4">
                  <h5 className="block text-gray-700 text-sm font-semibold mb-2">
                    Chose your country
                  </h5>
                </label>
                <select
                  id="small"
                  className="shadow appearance-none border  lg:mt-0 md:mt-[-15%]  md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal "
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
                  >
                    PDF
                  </p>
                  <input
                    className="shadow appearance-none  font-normal rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="file"
                    placeholder="(000) 000 - 0000"
                    name="user_file"
                    onChange={handleFileSelect}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-8 mb-12">
              <input
                className="text-white bg-gradient-to-br from-red-800 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center mb-2"
                type="submit"
                value="Send"
                // onClick={handleEmail}
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
