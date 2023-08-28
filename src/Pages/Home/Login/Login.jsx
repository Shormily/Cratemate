import "./Login.css";
// import login from "../Image/login.png";
import { MdEmail } from "react-icons/md";
import { PiLockLaminatedFill } from "react-icons/pi";
import {  NavLink, } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../Firebase/Firebase.config";





const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  } 
  


  return (
    <>
      <Navbar />
     
      <div className="login">
      <div className=" m-auto max-w-[1240px] flex item-center  justify-center">
        <div className="login-margin ">
          {" "}
          <div className=" ">
            <div className="">
              {/* <img
                className="w-full h-full"
                src="https://i.ibb.co/Nj4xPGQ/login.png"
                alt=""
              /> */}
            </div>
            <div className="">
              <h1 className="text-4xl mx-5 cont-pra mt-12">Welcome Back</h1>
              <div className="mx-5 ">
                <div className="mt-5 pb-3">
                  <p
                    style={{
                      backgroundColor: "#E6EBFF",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "2px",
                      // marginRight: "-40px",
                      display: "flex",
                    }}
                    className="rounded-5 w-75 shadow-lg "
                  >
                    <span className="mx-4 text-dark">
                      <MdEmail className="mt-2" size={20} />
                    </span>{" "}
                    <div className="input-group-prepend">
                      <input
                        className="  appearance-none border font-normal  bg-[#E6EBFF] w-full  px-3 text-gray-700 leading-tight focus:outline-none "
                        id="username"
                        type="text"
                        placeholder="Email"
                       
                      />
                    </div>
                  </p>
                </div>
                <div className="mt-4 ">
                  <p
                    style={{
                      backgroundColor: "#E6EBFF",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "2px",
                      // marginRight: "-40px",
                      display: "flex",
                    }}
                    className=" w-75 shadow-lg "
                  >
                    <span className="mx-4 text-dark">
                      <PiLockLaminatedFill className="mt-2" size={20} />
                    </span>{" "}
                    <div className="input-group-prepend ">
                      <input
                        className=" appearance-none border font-normal  bg-[#E6EBFF] w-full  px-3 text-gray-700 leading-tight focus:outline-none "
                        id="username"
                        type="text"
                        placeholder="Password"
                     
                      />
                    </div>
                  </p>
                </div>
              </div>
              <p className="  frgt-ps-text mt-4 mb-3">Forget password ?</p>
              <div className="flex px-5">
                <button
                  type="button"
                  className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                 
                >
                 Registration
                </button>
              </div>
              <p className="text-center cont-pra pt-3 pb-3">- OR -</p>
              <div className="flex px-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <button
                  type="button"
                  className="text-white bg-[#8fa2f0] shadow-lg hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                  onClick={() => signInWithGoogle()}
                >
                  {/* <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg> */}
                  Sign in with Facebook
                </button>
                <button
                  type="button"
                 
                   className="text-white bg-[#8fa2f0] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  {/* <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg> */}
                  Sign in with Google
                </button>
              </div>
              <NavLink as={NavLink} to="/sign" className="text-border">
                {" "}
                <p className="text-secondary cont-pra text-center  login-heading mt-5 ">
                  Don’t have account ?{" "}
                  <span className="textss">Create Account</span>{" "}
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      </div>
   
    </>
  );
};

export default Login;
