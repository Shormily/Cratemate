import "./Login.css";
// import login from "../Image/login.png";
import { MdEmail } from "react-icons/md";
import { PiLockLaminatedFill } from "react-icons/pi";
import {  NavLink, useLocation, useNavigate, } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { GoogleAuthProvider,  getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { useState } from "react";
import { toast } from "react-toastify";
const auth = getAuth(app);




const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  
  const auth = getAuth(app);
  console.log(app)
  const provider =new GoogleAuthProvider()
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth,provider)
    .then(result =>{
      const user = result.user
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch(error =>{
      console.log('crror',error.message)
    })
  }

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    
    // validation
    setError('');
    setSuccess('');
    // if(!/(?=.*[A-Z])/.test(password)){
    //   setError('Please add at least two uppercase');
    //   return;
    // }
    // else if(!/(?=.*[!@#&*])/.test(password)){
    //   setError('Please add a special character');
    //   return;
    // }
    // else if(password.length < 6){
    //   setError('Please must be 6 charactrs long');
    //   return;
    // }
    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
       const loggedUser = result.user;
       console.log(loggedUser)
       setSuccess("User login succesfully");
       setError('')
    })
    .catch(error =>{
       setError(error.message);
    })
  }



  return (
    <>
      <Navbar />
     
      <form onSubmit={handleLogin}>
        <div className="logi">
          <div className=" m-auto max-w-[1240px] flex item-center  justify-center">
            <div className="login-margin ">
              <h1 className="text-5xl text-shadow-lg mx-5  text-white  mt-12">
               Login
              </h1>
             
              <div className="mt-5 pb-3">
                <p
                  style={{
                    backgroundColor: "#E6EBFF",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "2px",

                    display: "flex",
                  }}
                  className="rounded-5 w-75 shadow-lg "
                >
                  <span className="mx-4 text-dark">
                    <MdEmail className="mt-2" size={20} />
                  </span>
                  <div className="input-group-prepend">
                    <input
                      className="  appearance-none border font-normal   bg-[#E6EBFF] w-full  px-3 text-gray-700 leading-tight focus:outline-none "
                      // onChange={handleEmailChange}
                      type="email"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </p>
              </div>
              <div className="mt-5 pb-3">
                <p
                  style={{
                    backgroundColor: "#E6EBFF",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "2px",

                    display: "flex",
                  }}
                  className="rounded-5 w-75 shadow-lg "
                >
                  <span className="mx-4 text-dark">
                    <PiLockLaminatedFill className="mt-2" size={20} />
                  </span>
                  <div className="input-group-prepend">
                    <input
                      className=" appearance-none border font-normal  bg-[#E6EBFF] w-full  px-3 text-gray-700 leading-tight focus:outline-none "
                      // onBlur={handlePasswordBlur}
                      type="password"
                      name="password"
                      id="password"
                      required
                    />
                  </div>
                </p>
              </div>

              <button >{error}</button>
              <button >{success}</button>
          
              <p className="text-red-600  pb-3"></p>
              <input
                className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                // onBlur={handlePasswordBlur}
                type="submit"
                value="Login"
              />
              <p className="text-center text-white  pt-3 pb-3">- OR -</p>
              <div className="flex px-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <button
                  type="button"
                  className="text-white bg-[#8fa2f0] shadow-lg hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                >
                  <svg
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
                  </svg>
                  Sign in with Facebook
                </button>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="text-white bg-[#8fa2f0] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
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
                  </svg>
                  Sign in with Google
                </button>
              </div>
              <NavLink as={NavLink} to="/sign" className="text-border">
                {" "}
                <p className="ml-5 text-white  text-center  login-heading mt-5 ">
                  Don’t have account ?{" "}
                  <span className="textss">Create Account</span>{" "}
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </form>
   
    </>
  );
};

export default Login;
